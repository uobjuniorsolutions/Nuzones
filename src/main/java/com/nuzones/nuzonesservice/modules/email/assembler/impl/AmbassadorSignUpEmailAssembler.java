package com.nuzones.nuzonesservice.modules.email.assembler.impl;

import com.nuzones.nuzonesservice.exception.BadRequestException;
import com.nuzones.nuzonesservice.modules.email.assembler.EmailRequestAssembler;
import com.nuzones.nuzonesservice.modules.email.model.AmbassadorSignupRequest;
import com.nuzones.nuzonesservice.modules.email.model.EmailRequest;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validator;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring6.SpringTemplateEngine;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 * @author Emmanuel Abajo
 * @created 17/04/2023
 */
@Component
@RequiredArgsConstructor
public class AmbassadorSignUpEmailAssembler implements EmailRequestAssembler {

    private final SpringTemplateEngine templateEngine;
    private final Validator validator;

    @Value("${mail.recipient.email}")
    private String recipient;

    @Override
    public EmailRequest assemble(Object body) {
        var request = (AmbassadorSignupRequest) body;
        Set<ConstraintViolation<AmbassadorSignupRequest>> violations = validator.validate(request);
        if (!violations.isEmpty()) {
            throw new BadRequestException(violations.iterator().next().getMessage());
        }

        Context context = new Context();
        Map<String, Object> properties = new HashMap<>();
        properties.put("email", request.getEmail());
        properties.put("firstname", request.getFirstName());
        properties.put("lastname", request.getLastName());
        context.setVariables(properties);

        String template = templateEngine.process("ambassador-signup.html",  context);

        return new EmailRequest(
                recipient,
                "Ambassador Signup Request",
                template
        );
    }
}
