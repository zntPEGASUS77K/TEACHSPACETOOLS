package com.teachspace.teachspace.service;

import com.teachspace.teachspace.entity.Salle;
import com.teachspace.teachspace.exception.ResourceNotFoundException;
import com.teachspace.teachspace.model.SalleDTO;
import com.teachspace.teachspace.repository.SalleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SalleService {
    private final SalleRepository salleRepository;

    @Autowired
    public SalleService(SalleRepository salleRepository) {
        this.salleRepository = salleRepository;
    }

    public List<SalleDTO> findAll() {
        return salleRepository.findAll().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public SalleDTO findById(Long codeSal) {
        Salle salle = salleRepository.findById(codeSal)
                .orElseThrow(() -> new ResourceNotFoundException("Room not found with ID: " + codeSal));
        return toDTO(salle);
    }

    public SalleDTO save(SalleDTO salleDTO) {
        Salle salle = toEntity(salleDTO);
        Salle savedSalle = salleRepository.save(salle);
        return toDTO(savedSalle);
    }

    public SalleDTO updateSalle(Long codeSal, SalleDTO updatedSalleDTO) {
        Salle existingSalle = salleRepository.findById(codeSal)
                .orElseThrow(() -> new ResourceNotFoundException("Room not found with ID: " + codeSal));
        existingSalle.setDesignation(updatedSalleDTO.getDesignation());
        Salle updatedSalle = salleRepository.save(existingSalle);
        return toDTO(updatedSalle);
    }

    public void delete(Long codeSal) {
        Salle existingSalle = salleRepository.findById(codeSal)
                .orElseThrow(() -> new ResourceNotFoundException("Room not found with ID: " + codeSal));
        salleRepository.delete(existingSalle);
    }

    private SalleDTO toDTO(Salle salle) {
        SalleDTO dto = new SalleDTO();
        dto.setCodeSal(salle.getCodeSal());
        dto.setDesignation(salle.getDesignation());
        return dto;
    }

    public Salle toEntity(SalleDTO dto) {
        Salle salle = new Salle();
        if (dto.getCodeSal() != null) {
            salle.setCodeSal(dto.getCodeSal());
        }
        salle.setDesignation(dto.getDesignation());
        return salle;
    }
}