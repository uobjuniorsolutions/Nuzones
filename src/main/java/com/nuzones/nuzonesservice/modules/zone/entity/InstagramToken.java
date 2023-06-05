package com.nuzones.nuzonesservice.modules.zone.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

/**
 * @author Emmanuel Abajo
 * @created 05/06/2023
 */
@Table(name = "instagram_token")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InstagramToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String token;
    private LocalDateTime createdOn;
    private LocalDateTime lastModifiedOn;
}
