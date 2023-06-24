package com.nuzones.nuzonesservice.modules.zone.service.impl;

import com.nuzones.nuzonesservice.modules.zone.service.InstagramTokenAdapter;
import com.nuzones.nuzonesservice.modules.zone.service.InstagramTokenRefresher;
import com.nuzones.nuzonesservice.modules.zone.service.InstagramTokenService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

/**
 * @author Emmanuel Abajo
 * @created 24/06/2023
 */
@Slf4j
@Service
@RequiredArgsConstructor
@ConditionalOnProperty(name = "instagram.token-refresh.enabled", havingValue = "true")
public class InstagramTokenRefresherImpl implements InstagramTokenRefresher {

    private final InstagramTokenService instagramTokenService;
    private final InstagramTokenAdapter instagramTokenAdapter;

    @Scheduled(cron = "${instagram.token-refresh.job-interval}")
    public void refreshToken() {
        try {
            log.info("Instagram Token Update Initiated");
            var token = instagramTokenService.fetchToken().token();
            var updatedToken = instagramTokenAdapter.refreshInstagramToken(token);
            instagramTokenService.saveOrUpdateToken(updatedToken);
            log.info("Instagram Token Updated Successfully");
        } catch (Exception e) {
            log.error(e.toString());
        }
    }
}
