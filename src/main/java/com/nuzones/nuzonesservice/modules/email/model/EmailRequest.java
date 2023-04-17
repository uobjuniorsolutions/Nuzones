package com.nuzones.nuzonesservice.modules.email.model;

/**
 * @author Emmanuel Abajo
 * @created 17/04/2023
 */
public record EmailRequest(
    String recipient,
    String subject,
    String messageBody
) {}
