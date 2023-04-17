package com.nuzones.nuzonesservice.modules.email.service.impl;

import com.nuzones.nuzonesservice.modules.email.model.EmailRequest;
import com.nuzones.nuzonesservice.modules.email.service.EmailSender;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

/**
 * @author Emmanuel Abajo
 * @created 17/04/2023
 */
@Service
@RequiredArgsConstructor
public class EmailSenderImpl implements EmailSender {

    private final JavaMailSender javaMailSender;

    @Value("${mail.sender.email}")
    private String sender;

    @Async
    public boolean sendMail(EmailRequest messageRequest){
        try {
            var message = javaMailSender.createMimeMessage();
            var helper = new MimeMessageHelper(message, true);

            helper.setFrom(sender);
            helper.setTo(messageRequest.recipient());
            helper.setSubject(messageRequest.subject());
            helper.setText(messageRequest.messageBody(), true);

            javaMailSender.send(message);

            return true;
        } catch (MessagingException e) {
            throw new MailSendException(e.getMessage());
        }
    }
}
