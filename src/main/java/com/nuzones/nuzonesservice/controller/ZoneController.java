package com.nuzones.nuzonesservice.controller;

import com.nuzones.nuzonesservice.dto.request.ZoneCreationDto;
import com.nuzones.nuzonesservice.dto.response.ZoneCreationResponseDto;
import com.nuzones.nuzonesservice.dto.response.ZoneDto;
import com.nuzones.nuzonesservice.service.ZoneService;
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
    public ZoneDto getAllZones(Long id){
        return zoneService.fetchZoneByID(id);
    }

    @PostMapping
    public ZoneCreationResponseDto createZone(@RequestBody ZoneCreationDto zoneCreationDto) {
        return zoneService.createZone(zoneCreationDto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteZone(Long id) {
        zoneService.removeZoneByID(id);
    }

    @GetMapping("/search")
    public List<ZoneDto> searchZone(@RequestParam("name") String name) {
        return zoneService.searchZonesByName(name);
    }
}
