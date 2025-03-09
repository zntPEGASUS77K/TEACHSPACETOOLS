package com.teachspace.teachspace.service;

import com.teachspace.teachspace.entity.Prof;
import com.teachspace.teachspace.exception.ResourceNotFoundException;
import com.teachspace.teachspace.model.ProfDTO;
import com.teachspace.teachspace.repository.ProfRepository;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProfService {
    private final ProfRepository profRepository;

    public ProfService(ProfRepository profRepository) {
        this.profRepository = profRepository;
    }

    public List<ProfDTO> findAll() {
        return profRepository.findAll().stream()
                .sorted(Comparator.comparing(Prof::getCodeProf))
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public ProfDTO findById(Long codeProf) {
        Prof prof = profRepository.findById(codeProf)
                .orElseThrow(() -> new ResourceNotFoundException("Professor not found with ID: " + codeProf));
        return toDTO(prof);
    }

    public List<ProfDTO> findByNom(String nom) {
        return profRepository.findByNomContainingIgnoreCase(nom).stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public ProfDTO save(ProfDTO profDTO) {
        Prof prof = toEntity(profDTO);
        Prof savedProf = profRepository.save(prof);
        return toDTO(savedProf);
    }

    public ProfDTO updateProf(Long codeProf, ProfDTO updatedProfDTO) {
        Prof existingProf = profRepository.findById(codeProf)
                .orElseThrow(() -> new ResourceNotFoundException("Professor not found with ID: " + codeProf));
        existingProf.setNom(updatedProfDTO.getNom());
        existingProf.setPrenom(updatedProfDTO.getPrenom());
        existingProf.setGrade(updatedProfDTO.getGrade());
        Prof updatedProf = profRepository.save(existingProf);
        return toDTO(updatedProf);
    }

    public void delete(Long codeProf) {
        Prof existingProf = profRepository.findById(codeProf)
                .orElseThrow(() -> new ResourceNotFoundException("Professor not found with ID: " + codeProf));
        profRepository.delete(existingProf);
    }

    private ProfDTO toDTO(Prof prof) {
        ProfDTO dto = new ProfDTO();
        dto.setCodeProf(prof.getCodeProf());
        dto.setNom(prof.getNom());
        dto.setPrenom(prof.getPrenom());
        dto.setGrade(prof.getGrade());
        return dto;
    }

    public Prof toEntity(ProfDTO dto) {
        Prof prof = new Prof();
        if (dto.getCodeProf() != null) {
            prof.setCodeProf(dto.getCodeProf());
        }
        prof.setNom(dto.getNom());
        prof.setPrenom(dto.getPrenom());
        prof.setGrade(dto.getGrade());
        return prof;
    }
}
