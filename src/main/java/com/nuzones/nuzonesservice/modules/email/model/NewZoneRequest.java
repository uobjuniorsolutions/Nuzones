package com.nuzones.nuzonesservice.modules.email.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * @author Emmanuel Abajo
 * @created 20/04/2023
 */
@Data
public class NewZoneRequest {
    @NotBlank(message = "name is required")
    private String name;
    private double longitude;
    private double latitude;
    private int rating;
    @NotBlank(message = "description is required")
    private String description;
}
