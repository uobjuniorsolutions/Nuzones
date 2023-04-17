package com.nuzones.nuzonesservice.modules.zone.dto.response;

import lombok.Builder;

/**
 * @author Emmanuel Abajo
 * @created 03/04/2023
 */
@Builder
public record ZoneCreationResponseDto (
    Long id,
    String message
){}
