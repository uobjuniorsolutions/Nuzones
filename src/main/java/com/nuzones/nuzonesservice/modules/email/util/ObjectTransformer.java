package com.nuzones.nuzonesservice.modules.email.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nuzones.nuzonesservice.exception.BadRequestException;
import com.nuzones.nuzonesservice.exception.ServerErrorException;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validator;
import lombok.extern.slf4j.Slf4j;

import java.util.Set;

/**
 * @author Emmanuel Abajo
 * @created 17/04/2023
 */
@Slf4j
public record ObjectTransformer(ObjectMapper objectMapper, Validator validator) {

    public <T> T transform(Object object, Class<T> clazz) {
        try {
            var strBody = objectMapper.writeValueAsString(object);
            var obj = objectMapper.readValue(strBody, clazz);
            Set<ConstraintViolation<T>> violations = validator.validate(obj);
            if (!violations.isEmpty()) {
                throw new BadRequestException(violations.iterator().next().getMessage());
            }
            return obj;
        } catch (JsonProcessingException e) {
            log.error(e.toString());
            throw new ServerErrorException();
        }
    }
}
