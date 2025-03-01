package com.teachspace.teachspace.repository;

import com.teachspace.teachspace.entity.Prof;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProfRepository extends JpaRepository<Prof, Long> {
    List<Prof> findByNom(String nom);
}
