package com.nuzones.nuzonesservice.repository;

import com.nuzones.nuzonesservice.entity.Zone;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ZoneRepository extends JpaRepository<Zone, Long> {

    List<Zone> findByTitleContainingIgnoreCaseAndDeletedFalse(String title);

    Optional<Zone> findByIdAndDeletedFalse(Long id);

    Page<Zone> findByDeletedFalse(Pageable pageable);
}
