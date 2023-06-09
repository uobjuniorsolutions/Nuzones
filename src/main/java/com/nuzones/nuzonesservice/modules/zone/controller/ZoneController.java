package com.nuzones.nuzonesservice.modules.zone.controller;

import com.nuzones.nuzonesservice.modules.zone.dto.request.ZoneCreationDto;
import com.nuzones.nuzonesservice.modules.zone.dto.response.ZoneCreationResponseDto;
import com.nuzones.nuzonesservice.modules.zone.dto.response.ZoneDto;
import com.nuzones.nuzonesservice.modules.zone.service.ZoneService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Emmanuel Abajo
 * @created 03/04/2023
 */
@RestController
@RequestMapping("/api/v1/zones")
@RequiredArgsConstructor
public class ZoneController {

    private final ZoneService zoneService;

    @GetMapping
    public Page<ZoneDto> getAllZones(Pageable page){
        return zoneService.fetchAllZones(page);
    }

    @GetMapping("/{id}")
    public ZoneDto getAllZones(@PathVariable("id") Long id){
        return zoneService.fetchZoneByID(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ZoneCreationResponseDto createZone(@RequestBody ZoneCreationDto zoneCreationDto) {
        return zoneService.createZone(zoneCreationDto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteZone(@PathVariable("id") Long id) {
        zoneService.removeZoneByID(id);
    }

    @PatchMapping("/{id}")
    public void updateZone(@PathVariable("id") Long id, @RequestBody ZoneCreationDto zoneCreationDto) {
        zoneService.updateZone(id, zoneCreationDto);
    }
}
