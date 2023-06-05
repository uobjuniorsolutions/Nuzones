package com.nuzones.nuzonesservice.modules.zone.service;

import com.nuzones.nuzonesservice.modules.zone.dto.response.TokenDto;

/**
 * @author Emmanuel Abajo
 * @created 05/06/2023
 */
public interface InstagramTokenService {

    TokenDto fetchToken();
    void saveOrUpdateToken(String token);
}
