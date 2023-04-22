package com.nuzones.nuzonesservice.modules.email.assembler.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nuzones.nuzonesservice.modules.email.assembler.EmailRequestAssembler;
import com.nuzones.nuzonesservice.modules.email.model.ContactUsRequest;
import com.nuzones.nuzonesservice.modules.email.model.EmailRequest;
import com.nuzones.nuzonesservice.modules.email.util.ObjectTransformer;
import jakarta.validation.Validator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

/**
 * @author Emmanuel Abajo
 * @created 17/04/2023
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class ContactUsEmailAssembler implements EmailRequestAssembler {

    private final Validator validator;
    private final ObjectMapper objectMapper;

    @Value("${sendgrid.template.contact_us}")
    private String templateId;

    @Override
    public EmailRequest assemble(Object body) {
        var transformer = new ObjectTransformer(objectMapper, validator);
        var request = transformer.transform(body, ContactUsRequest.class);
        log.info("Assembled request: {}", request);

        Map<String, String> dynamicTemplateData = new HashMap<>();
        dynamicTemplateData.put("email", request.getEmail());
        dynamicTemplateData.put("firstname", request.getFirstName());
        dynamicTemplateData.put("lastname", request.getLastName());
        dynamicTemplateData.put("message", request.getMessage());

        return new EmailRequest(
                templateId,
                dynamicTemplateData
        );
    }
}
