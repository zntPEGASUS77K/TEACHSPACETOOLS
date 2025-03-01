package com.teachspace.teachspace.controller;

import com.teachspace.teachspace.model.ProfDTO;
import com.teachspace.teachspace.service.ProfService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/${api.version}/profs")
@Tag(name = "Prof", description = "API to manage professors")
public class ProfController {
    private final ProfService profService;

    public ProfController(ProfService profService) {
        this.profService = profService;
    }

    @GetMapping
    public List<ProfDTO> getAllProfs() {
        return profService.findAll();
    }

    @GetMapping("/{codeProf}")
    public ProfDTO getProfById(@PathVariable Long codeProf) {
        return profService.findById(codeProf);
    }

    @GetMapping("/search/nom/{nom}")
    public List<ProfDTO> getProfsByNom(@PathVariable String nom) {
        return profService.findByNom(nom);
    }

    @PostMapping
    public ProfDTO createProf(@RequestBody ProfDTO profDTO) {
        return profService.save(profDTO);
    }

    @PutMapping("/{codeProf}")
    public ProfDTO updateProf(@PathVariable Long codeProf, @RequestBody ProfDTO profDTO) {
        return profService.updateProf(codeProf, profDTO);
    }

    @DeleteMapping("/{codeProf}")
    public ResponseEntity<Void> deleteProf(@PathVariable Long codeProf) {
        profService.delete(codeProf);
        return ResponseEntity.noContent().build();
    }
}