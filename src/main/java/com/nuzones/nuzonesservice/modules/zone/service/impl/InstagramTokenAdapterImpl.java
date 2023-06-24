package com.nuzones.nuzonesservice.modules.zone.service.impl;

import com.nuzones.nuzonesservice.exception.ServerErrorException;
import com.nuzones.nuzonesservice.modules.zone.dto.response.InstagramRefreshTokenResponse;
import com.nuzones.nuzonesservice.modules.zone.service.InstagramTokenAdapter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Objects;

/**
 * @author Emmanuel Abajo
 * @created 24/06/2023
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class InstagramTokenAdapterImpl implements InstagramTokenAdapter {

    private final RestTemplate restTemplate;

    @Override
    public String refreshInstagramToken(String accessToken) {
        log.info("Fetching Instagram token");
        var url = String.format("https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=%s",
                accessToken);
        var tokenResponse = restTemplate.getForEntity(url, InstagramRefreshTokenResponse.class);
        if (tokenResponse.getStatusCode() == HttpStatus.OK) {
            log.info("Instagram token fetched successfully");
            return Objects.requireNonNull(tokenResponse.getBody()).getAccessToken();
        }
        throw new ServerErrorException("An error occurred while fetching instagram refresh token");
    }
}
