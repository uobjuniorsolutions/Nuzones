package com.nuzones.nuzonesservice.modules.email.service;

import com.nuzones.nuzonesservice.modules.email.dto.EmailDto;

/**
 * @author Emmanuel Abajo
 * @created 17/04/2023
 */
public interface EmailService {

    void sendMail(EmailDto emailDto);
}
