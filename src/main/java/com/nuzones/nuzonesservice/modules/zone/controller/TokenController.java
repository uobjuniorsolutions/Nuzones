package com.nuzones.nuzonesservice.modules.zone.controller;

import com.nuzones.nuzonesservice.modules.zone.dto.request.TokenCreationDto;
import com.nuzones.nuzonesservice.modules.zone.dto.response.TokenDto;
import com.nuzones.nuzonesservice.modules.zone.service.InstagramTokenService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

/**
 * @author Emmanuel Abajo
 * @created 05/06/2023
 */
@RestController
@RequestMapping("/api/v1/token")
@RequiredArgsConstructor
public class TokenController {

    private final InstagramTokenService tokenService;

    @GetMapping
    public TokenDto getToken() {
        return tokenService.fetchToken();
    }

    @PostMapping
    public void setToken(@Valid @RequestBody TokenCreationDto request) {
        tokenService.saveOrUpdateToken(request.getToken());
    }
}
