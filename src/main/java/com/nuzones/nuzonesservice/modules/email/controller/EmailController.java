package com.nuzones.nuzonesservice.modules.email.controller;

import com.nuzones.nuzonesservice.modules.email.dto.EmailDto;
import com.nuzones.nuzonesservice.modules.email.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * @author Emmanuel Abajo
 * @created 17/04/2023
 */
@RestController
@RequestMapping("/api/v1/email")
@RequiredArgsConstructor
public class EmailController {

    private final EmailService emailService;

    @PostMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void sendEmail(@RequestBody EmailDto emailDto) {
        emailService.sendMail(emailDto);
    }
}
