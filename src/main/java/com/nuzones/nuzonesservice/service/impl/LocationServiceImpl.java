package com.nuzones.nuzonesservice.service.impl;

import com.nuzones.nuzonesservice.dto.response.LocationDto;
import com.nuzones.nuzonesservice.dto.response.ZoneDto;
import com.nuzones.nuzonesservice.repository.ZoneRepository;
import com.nuzones.nuzonesservice.service.LocationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * @author Emmanuel Abajo
 * @created 03/04/2023
 */
@Service
@RequiredArgsConstructor
public class LocationServiceImpl implements LocationService {

    private final ZoneRepository zoneRepository;

    @Override
    public Page<LocationDto> fetchZoneLocations(Pageable pageable) {
        return zoneRepository.findByDeletedFalse(pageable).map(zone -> {
            var locationDto = new LocationDto();
            BeanUtils.copyProperties(zone, locationDto);
            return locationDto;
        });
    }
}
