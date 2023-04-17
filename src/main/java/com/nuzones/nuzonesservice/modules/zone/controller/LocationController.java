package com.nuzones.nuzonesservice.modules.zone.controller;

import com.nuzones.nuzonesservice.modules.zone.dto.response.LocationDto;
import com.nuzones.nuzonesservice.modules.zone.service.LocationService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Emmanuel Abajo
 * @created 03/04/2023
 */
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
