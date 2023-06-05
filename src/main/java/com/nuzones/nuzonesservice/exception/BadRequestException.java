package com.nuzones.nuzonesservice.exception;

/**
 * @author Emmanuel Abajo
 * @created 17/04/2023
 */
public class BadRequestException extends RuntimeException {

    public BadRequestException(String message) {
        super(message);
    }
}
