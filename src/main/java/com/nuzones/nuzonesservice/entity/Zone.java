package com.nuzones.nuzonesservice.entity;

import lombok.*;

import jakarta.persistence.*;

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
    private String groupLink;
    private String imageUrl;
    private String description;
    private int rating;
}
