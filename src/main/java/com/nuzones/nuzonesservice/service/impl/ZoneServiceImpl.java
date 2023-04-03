package com.nuzones.nuzonesservice.service.impl;

import com.nuzones.nuzonesservice.dto.request.ZoneCreationDto;
import com.nuzones.nuzonesservice.dto.response.ZoneCreationResponseDto;
import com.nuzones.nuzonesservice.dto.response.ZoneDto;
import com.nuzones.nuzonesservice.repository.ZoneRepository;
import com.nuzones.nuzonesservice.service.ZoneService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Emmanuel Abajo
 * @created 03/04/2023
 */
@Service
@RequiredArgsConstructor
public class ZoneServiceImpl implements ZoneService {

    private final ZoneRepository zoneRepository;

    @Override
    public Page<ZoneDto> fetchAllZones(Pageable pageable) {
        return null;
    }

    @Override
    public ZoneDto fetchZoneByID(Long id) {
        return null;
    }

    @Override
    public ZoneCreationResponseDto createZone(ZoneCreationDto zoneCreationDto) {
        return null;
    }

    @Override
    public void removeZoneByID(Long id) {

    }

    @Override
    public List<ZoneDto> searchZonesByName(String name) {
        return null;
    }
}
