package com.nuzones.nuzonesservice.dto.response;

import lombok.Data;

/**
 * @author Emmanuel Abajo
 * @created 03/04/2023
 */
@Data
public class ZoneDto {
    private Long id;
    private double latitude;
    private double longitude;
    private String title;
    private String groupLink;
    private String imageUrl;
    private String description;
    private int rating;
    private String exactName;
}
