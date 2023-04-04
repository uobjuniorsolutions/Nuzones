package com.nuzones.nuzonesservice.dto.response;

import lombok.Data;

/**
 * @author Emmanuel Abajo
 * @created 03/04/2023
 */
@Data
public class LocationDto {
    private Long id;
    private double latitude;
    private double longitude;
    private String title;
}
