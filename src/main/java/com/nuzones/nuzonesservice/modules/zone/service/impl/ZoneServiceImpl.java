package com.nuzones.nuzonesservice.modules.zone.service.impl;

import com.nuzones.nuzonesservice.modules.zone.dto.request.ZoneCreationDto;
import com.nuzones.nuzonesservice.modules.zone.dto.response.ZoneCreationResponseDto;
import com.nuzones.nuzonesservice.modules.zone.dto.response.ZoneDto;
import com.nuzones.nuzonesservice.modules.zone.entity.Zone;
import com.nuzones.nuzonesservice.exception.NotFoundException;
import com.nuzones.nuzonesservice.modules.zone.service.ZoneService;
import com.nuzones.nuzonesservice.modules.zone.repository.ZoneRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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
        return zoneRepository.findByDeletedFalse(pageable).map(zone -> {
            var zoneDto = new ZoneDto();
            BeanUtils.copyProperties(zone, zoneDto);
            return zoneDto;
        });
    }

    @Override
    public ZoneDto fetchZoneByID(Long id) {
        return zoneRepository.findByIdAndDeletedFalse(id).map(zone -> {
                    var zoneDto = new ZoneDto();
                    BeanUtils.copyProperties(zone, zoneDto);
                    return zoneDto;
                })
                .orElseThrow(NotFoundException::new);
    }

    @Override
    public ZoneCreationResponseDto createZone(ZoneCreationDto zoneCreationDto) {
        var zone = new Zone();
        BeanUtils.copyProperties(zoneCreationDto, zone);
        var savedZone = zoneRepository.save(zone);

        return ZoneCreationResponseDto.builder()
                .id(savedZone.getId())
                .message("Zone created successfully")
                .build();
    }

    @Override
    public void removeZoneByID(Long id) {
        var zone = zoneRepository.findByIdAndDeletedFalse(id)
                .orElseThrow(NotFoundException::new);
        zone.setDeleted(true);
        zoneRepository.save(zone);
    }

    @Override
    public List<ZoneDto> searchZonesByTitle(String title) {
        return zoneRepository
                .findByTitleContainingIgnoreCaseAndDeletedFalse(title).stream().map(zone -> {
            var zoneDto = new ZoneDto();
            BeanUtils.copyProperties(zone, zoneDto);
            return zoneDto;
        }).collect(Collectors.toList());
    }
}
