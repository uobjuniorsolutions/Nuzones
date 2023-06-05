package com.nuzones.nuzonesservice.modules.zone.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * @author Emmanuel Abajo
 * @created 05/06/2023
 */
@Data
public class TokenCreationDto {
    @NotBlank(message = "Token is required")
    private String token;

}
