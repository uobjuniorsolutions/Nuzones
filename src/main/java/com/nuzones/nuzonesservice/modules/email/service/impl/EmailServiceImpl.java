package com.nuzones.nuzonesservice.modules.email.service.impl;

import com.nuzones.nuzonesservice.modules.email.dto.EmailDto;
import com.nuzones.nuzonesservice.modules.email.enums.EmailType;
import com.nuzones.nuzonesservice.modules.email.service.EmailSender;
import com.nuzones.nuzonesservice.modules.email.service.EmailService;
import com.nuzones.nuzonesservice.modules.email.assembler.EmailRequestAssemblerFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * @author Emmanuel Abajo
 * @created 17/04/2023
 */
@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {

    private final EmailSender emailSender;
    private final EmailRequestAssemblerFactory assemblerFactory;

    public void sendMail(EmailDto emailDto) {
        var assembler = assemblerFactory.getAssembler(EmailType.valueOf(emailDto.type()));
        var email = assembler.assemble(emailDto.data());
        emailSender.sendMail(email);
    }
}
