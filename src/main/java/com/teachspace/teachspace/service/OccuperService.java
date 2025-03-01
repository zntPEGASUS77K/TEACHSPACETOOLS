package com.teachspace.teachspace.service;

import com.teachspace.teachspace.entity.Occuper;
import com.teachspace.teachspace.entity.Prof;
import com.teachspace.teachspace.entity.Salle;
import com.teachspace.teachspace.exception.ResourceNotFoundException;
import com.teachspace.teachspace.model.OccuperDTO;
import com.teachspace.teachspace.repository.OccuperRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OccuperService {
    private final OccuperRepository occuperRepository;
    private final ProfService profService;
    private final SalleService salleService;

    @Autowired
    public OccuperService(OccuperRepository occuperRepository, ProfService profService, SalleService salleService) {
        this.occuperRepository = occuperRepository;
        this.profService = profService;
        this.salleService = salleService;
    }

    public List<OccuperDTO> findAll() {
        return occuperRepository.findAll().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public OccuperDTO findById(Integer id) {
        Occuper occuper = occuperRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Occupation not found with ID: " + id));
        return toDTO(occuper);
    }

    public OccuperDTO save(OccuperDTO occuperDTO) {
        Occuper occuper = toEntity(occuperDTO);
        Occuper savedOccuper = occuperRepository.save(occuper);
        return toDTO(savedOccuper);
    }

    public OccuperDTO updateOccuper(Integer id, OccuperDTO updatedOccuperDTO) {
        Occuper existingOccuper = occuperRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Occupation not found with ID: " + id));
        existingOccuper.setProf(profService.toEntity(profService.findById(updatedOccuperDTO.getCodeProf())));
        existingOccuper.setSalle(salleService.toEntity(salleService.findById(updatedOccuperDTO.getCodeSal())));
        existingOccuper.setDate(updatedOccuperDTO.getDate());
        Occuper updatedOccuper = occuperRepository.save(existingOccuper);
        return toDTO(updatedOccuper);
    }

    public void delete(Integer id) {
        Occuper existingOccuper = occuperRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Occupation not found with ID: " + id));
        occuperRepository.delete(existingOccuper);
    }

    private OccuperDTO toDTO(Occuper occuper) {
        OccuperDTO dto = new OccuperDTO();
        dto.setId(occuper.getId());
        dto.setCodeProf(occuper.getProf().getCodeProf());
        dto.setCodeSal(occuper.getSalle().getCodeSal());
        dto.setDate(occuper.getDate());
        return dto;
    }

    private Occuper toEntity(OccuperDTO dto) {
        Occuper occuper = new Occuper();
        occuper.setId(dto.getId());
        Prof prof = profService.toEntity(profService.findById(dto.getCodeProf()));
        Salle salle = salleService.toEntity(salleService.findById(dto.getCodeSal()));
        occuper.setProf(prof);
        occuper.setSalle(salle);
        occuper.setDate(dto.getDate());
        return occuper;
    }
}