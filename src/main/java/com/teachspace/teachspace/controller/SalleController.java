package com.teachspace.teachspace.controller;

import com.teachspace.teachspace.model.SalleDTO;
import com.teachspace.teachspace.service.SalleService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/${api.version}/salles")
@CrossOrigin(origins = "http://localhost:4200")
@Tag(name = "Salle", description = "API to manage rooms")
public class SalleController {
    private final SalleService salleService;

    public SalleController(SalleService salleService) {
        this.salleService = salleService;
    }

    @GetMapping
    public List<SalleDTO> getAllSalles() {
        return salleService.findAll();
    }

    @GetMapping("/{codeSal}")
    public SalleDTO getSalleById(@PathVariable Long codeSal) {
        return salleService.findById(codeSal);
    }

    @PostMapping
    public SalleDTO createSalle(@RequestBody SalleDTO salleDTO) {
        return salleService.save(salleDTO);
    }

    @PutMapping("/{codeSal}")
    public SalleDTO updateSalle(@PathVariable Long codeSal, @RequestBody SalleDTO salleDTO) {
        return salleService.updateSalle(codeSal, salleDTO);
    }

    @DeleteMapping("/{codeSal}")
    public ResponseEntity<Void> deleteSalle(@PathVariable Long codeSal) {
        salleService.delete(codeSal);
        return ResponseEntity.noContent().build();
    }
}