package com.nuzones.nuzonesservice.exception;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

/**
 * @author Emmanuel Abajo
 * @created 05/06/2023
 */
@Data
@Builder
public class CustomErrorResponse {
    private LocalDateTime timestamp;
    private int status;
    private String error;
    private String message;
}
