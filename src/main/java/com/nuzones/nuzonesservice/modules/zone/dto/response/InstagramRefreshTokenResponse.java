package com.nuzones.nuzonesservice.modules.zone.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @author Emmanuel Abajo
 * @created 24/06/2023
 */
@Data
public class InstagramRefreshTokenResponse {
    @JsonProperty("access_token")
    private String accessToken;
    @JsonProperty("token_type")
    private String tokenType;
    @JsonProperty("expires_in")
    private long expiresIn;
}
