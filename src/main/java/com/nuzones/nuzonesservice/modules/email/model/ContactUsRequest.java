package com.nuzones.nuzonesservice.modules.email.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * @author Emmanuel Abajo
 * @created 19/04/2023
 */
@Data
public class ContactUsRequest {
    @NotBlank(message = "email is required")
    private String email;
    @NotBlank(message = "first name is required")
    private String firstName;
    @NotBlank(message = "last name is required")
    private String lastName;
    @NotBlank(message = "Message body is required")
    private String message;
}
