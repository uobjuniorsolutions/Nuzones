package com.nuzones.nuzonesservice.modules.zone.service;

import com.nuzones.nuzonesservice.modules.zone.dto.response.LocationDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * @author Emmanuel Abajo
 * @created 03/04/2023
 */
public interface LocationService {
    Page<LocationDto> fetchZoneLocations(Pageable pageable);
}
