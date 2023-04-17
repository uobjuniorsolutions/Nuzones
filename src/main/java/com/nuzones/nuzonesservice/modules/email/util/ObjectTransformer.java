package com.nuzones.nuzonesservice.modules.email.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nuzones.nuzonesservice.exception.BadRequestException;
import com.nuzones.nuzonesservice.exception.ServerErrorException;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;

/**
 * @author Emmanuel Abajo
 * @created 17/04/2023
 */
@Slf4j
public record ObjectTransformer(ObjectMapper objectMapper) {

    public <T> T transform(Object object, Class<T> clazz) {
        try {
            var strBody = objectMapper.writeValueAsString(object);
            return objectMapper.readValue(strBody, clazz);
        } catch (IOException e) {
            log.error(e.toString());
            throw new ServerErrorException();
        }
    }
}
