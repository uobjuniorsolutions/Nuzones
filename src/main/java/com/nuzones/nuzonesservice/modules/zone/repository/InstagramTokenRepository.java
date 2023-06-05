package com.nuzones.nuzonesservice.modules.zone.repository;

import com.nuzones.nuzonesservice.modules.zone.entity.InstagramToken;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Emmanuel Abajo
 * @created 05/06/2023
 */
public interface InstagramTokenRepository extends JpaRepository<InstagramToken, Long> {
}
