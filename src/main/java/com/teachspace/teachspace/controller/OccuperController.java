package com.teachspace.teachspace.controller;

import com.teachspace.teachspace.model.OccuperDTO;
import com.teachspace.teachspace.service.OccuperService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/${api.version}/occuper")
@Tag(name = "Occuper", description = "API to manage room by teachers")
public class OccuperController {
    private final OccuperService occuperService;

    public OccuperController(OccuperService occuperService) {
        this.occuperService = occuperService;
    }

    @GetMapping
    public List<OccuperDTO> getAllOccuper() {
        return occuperService.findAll();
    }

    @GetMapping("/{id}")
    public OccuperDTO getOccuperById(@PathVariable Integer id) {
        return occuperService.findById(id);
    }

    @PostMapping
    public OccuperDTO createOccuper(@RequestBody OccuperDTO occuperDTO) {
        return occuperService.save(occuperDTO);
    }

    @PutMapping("/{id}")
    public OccuperDTO updateOccuper(@PathVariable Integer id, @RequestBody OccuperDTO occuperDTO) {
        return occuperService.updateOccuper(id, occuperDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOccuper(@PathVariable Integer id) {
        occuperService.delete(id);
        return ResponseEntity.noContent().build();
    }
}