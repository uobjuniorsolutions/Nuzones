package com.nuzones.nuzonesservice.modules.email.service;

import com.nuzones.nuzonesservice.modules.email.model.EmailRequest;

/**
 * @author Emmanuel Abajo
 * @created 17/04/2023
 */
public interface EmailSender {

    void sendMail(EmailRequest messageRequest);
}
