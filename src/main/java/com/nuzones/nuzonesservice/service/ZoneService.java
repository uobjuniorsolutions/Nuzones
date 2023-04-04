package com.nuzones.nuzonesservice.service;

import com.nuzones.nuzonesservice.dto.request.ZoneCreationDto;
import com.nuzones.nuzonesservice.dto.response.ZoneCreationResponseDto;
import com.nuzones.nuzonesservice.dto.response.ZoneDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * @author Emmanuel Abajo
 * @created 03/04/2023
 */
public interface ZoneService {

    Page<ZoneDto> fetchAllZones(Pageable pageable);

    ZoneDto fetchZoneByID(Long id);

    ZoneCreationResponseDto createZone(ZoneCreationDto zoneCreationDto);

    void removeZoneByID(Long id);

    List<ZoneDto> searchZonesByTitle(String name);
}
