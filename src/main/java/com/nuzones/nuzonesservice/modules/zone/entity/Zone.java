package com.nuzones.nuzonesservice.modules.zone.entity;

import lombok.*;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Date;

@Table(name = "zones")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Zone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double latitude;
    private double longitude;
    private String title;
    private String exactName;
    private String groupLink;
    private String imageUrl;
    private String description;
    private int rating;
    private boolean deleted;
    private LocalDateTime createdOn;
}
