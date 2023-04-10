package com.nuzones.nuzonesservice.controller;

import com.nuzones.nuzonesservice.dto.response.LocationDto;
import com.nuzones.nuzonesservice.service.LocationService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Emmanuel Abajo
 * @created 03/04/2023
 */
@CrossOrigin
@RestController
@RequestMapping("/api/v1/locations")
@RequiredArgsConstructor
public class LocationController {

    private final LocationService locationService;

    @GetMapping
    public Page<LocationDto> getAllZoneLocations(Pageable page) {
        return locationService.fetchZoneLocations(page);
    }

}
