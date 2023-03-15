package com.nuzones.nuzonesservice.entity;

import jakarta.persistence.*;
import lombok.*;

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
    private String link;
    private String image;
    private String description;
}