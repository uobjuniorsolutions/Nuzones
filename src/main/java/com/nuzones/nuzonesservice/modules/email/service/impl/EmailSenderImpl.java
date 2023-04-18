package com.nuzones.nuzonesservice.modules.email.service.impl;

import com.nuzones.nuzonesservice.modules.email.model.EmailRequest;
import com.nuzones.nuzonesservice.modules.email.service.EmailSender;
import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Email;
import com.sendgrid.helpers.mail.objects.Personalization;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Map;
import java.util.Objects;

/**
 * @author Emmanuel Abajo
 * @created 17/04/2023
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class EmailSenderImpl implements EmailSender {

    @Value("${sendgrid.api.key}")
    private String sendgridApiKey;

    @Value("${sendgrid.sender.email}")
    private String sender;

    @Value("${sendgrid.recipient.email}")
    private String recipient;

    @Async
    public void sendMail(EmailRequest emailRequest){
        if ((this.sendgridApiKey == null) || this.sendgridApiKey.isEmpty()) {
            log.error("Invalid API key");
        } else {
            Mail mail = this.populateMail(emailRequest);
            SendGrid sendGrid = new SendGrid(this.sendgridApiKey);
            Request request = new Request();

            try {
                request.setMethod(Method.POST);
                request.setEndpoint("mail/send");
                request.setBody(mail.build());
                Response response = sendGrid.api(request);
                log.info("The email has been sent to {} with response code {}",
                        recipient, response.getStatusCode());
            } catch (IOException var6) {
                log.error(String.format("Unable to send email... Reason: %s", var6.getMessage()));
            }
        }
    }

    private Mail populateMail(EmailRequest emailRequest) {
        Mail mail = new Mail();
        mail.setFrom(new Email(sender));
        mail.setTemplateId(emailRequest.templateId());

        Personalization personalization = new Personalization();
        personalization.addTo(new Email(recipient));

        Map<String, String> keywords = emailRequest.dynamicTemplateData();
        if (keywords != null && keywords.size() > 0) {
            for (Map.Entry<String, String> entry : keywords.entrySet()) {
                if (!Objects.isNull(entry.getValue())) {
                    personalization.addDynamicTemplateData(entry.getKey(), entry.getValue());
                }
            }
        }

        mail.addPersonalization(personalization);

        return mail;
    }
}
