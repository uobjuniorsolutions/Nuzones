package com.nuzones.nuzonesservice.modules.zone.service.impl;

import com.nuzones.nuzonesservice.exception.ServerErrorException;
import com.nuzones.nuzonesservice.modules.zone.dto.response.TokenDto;
import com.nuzones.nuzonesservice.modules.zone.entity.InstagramToken;
import com.nuzones.nuzonesservice.modules.zone.repository.InstagramTokenRepository;
import com.nuzones.nuzonesservice.modules.zone.service.InstagramTokenService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

/**
 * @author Emmanuel Abajo
 * @created 05/06/2023
 */
@Service
@RequiredArgsConstructor
public class InstagramTokenServiceImpl implements InstagramTokenService {

    private final InstagramTokenRepository tokenRepository;

    @Override
    public TokenDto fetchToken() {
        var tokenList = tokenRepository.findAll();
        if (tokenList.isEmpty())
            throw new ServerErrorException("No Access Token Configured");
        return new TokenDto(tokenList.get(0).getToken());
    }

    @Override
    public void saveOrUpdateToken(String token) {
        var tokenList = tokenRepository.findAll();
        InstagramToken instagramToken;
        if (tokenList.isEmpty()) {
            instagramToken = InstagramToken.builder()
                    .token(token)
                    .createdOn(LocalDateTime.now())
                    .lastModifiedOn(LocalDateTime.now())
                    .build();
        } else {
            instagramToken = tokenList.get(0);
            instagramToken.setToken(token);
            instagramToken.setLastModifiedOn(LocalDateTime.now());
        }
        tokenRepository.save(instagramToken);
    }
}
