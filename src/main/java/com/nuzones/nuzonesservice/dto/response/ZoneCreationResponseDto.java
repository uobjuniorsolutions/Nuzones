package com.nuzones.nuzonesservice.dto.response;

import lombok.Builder;
import lombok.Data;

/**
 * @author Emmanuel Abajo
 * @created 03/04/2023
 */
@Builder
@Data
public class ZoneCreationResponseDto {
    private Long id;
    private String message;
}
