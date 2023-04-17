package com.nuzones.nuzonesservice.modules.zone.dto.request;

/**
 * @author Emmanuel Abajo
 * @created 03/04/2023
 */
public record ZoneCreationDto (
    double latitude,
    double longitude,
    String title,
    String groupLink,
    String imageUrl,
    String description,
    int rating
) {}
