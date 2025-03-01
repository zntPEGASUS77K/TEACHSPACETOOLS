package com.teachspace.teachspace.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.teachspace.teachspace.model.ProfDTO;
import com.teachspace.teachspace.service.ProfService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.Collections;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.mockito.ArgumentMatchers.any;

@WebMvcTest(ProfController.class)
@ExtendWith(SpringExtension.class)
class ProfControllerTest {

    @Autowired
    private MockMvc mockMvc;
    private final ObjectMapper objectMapper = new ObjectMapper();
    @MockBean
    private ProfService profService;

    private ProfDTO profDTO;

    @BeforeEach
    void setUp() {
        profDTO = new ProfDTO();
        profDTO.setCodeProf(1L);
        profDTO.setNom("Cypr");
        profDTO.setPrenom("Robert");
        profDTO.setGrade("Maitre de conferences");
    }

    @Test
    void AllProfs() throws Exception {
        List<ProfDTO> profList = Collections.singletonList(profDTO);
        when(profService.findAll()).thenReturn(profList);

        MvcResult result = mockMvc.perform(get("/api/v1/profs"))
                .andReturn();

        String jsonResponse = result.getResponse().getContentAsString();
        assertThat(jsonResponse).contains("Cypr");
    }

    @Test
    void CreateProf() throws Exception {
        when(profService.save(any(ProfDTO.class))).thenReturn(profDTO);

        MvcResult result = mockMvc.perform(post("/api/v1/profs")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(profDTO)))
                .andReturn();

        String jsonResponse = result.getResponse().getContentAsString();
        assertThat(jsonResponse).contains("Cypr");
    }

    @Test
    void UpdateProf() throws Exception {
        ProfDTO existingProf = new ProfDTO();
        existingProf.setCodeProf(1L);
        existingProf.setNom("Cypr");
        existingProf.setPrenom("Robert");
        existingProf.setGrade("Maitre de conferences");

        ProfDTO updatedProf = new ProfDTO();
        updatedProf.setNom("ZILGA");
        updatedProf.setPrenom("HERITIANA");
        updatedProf.setGrade("DOCTORAT");

        when(profService.updateProf(eq(1L), any(ProfDTO.class))).thenReturn(updatedProf);

        MvcResult result = mockMvc.perform(put("/api/v1/profs/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updatedProf)))
                .andReturn();

        String jsonResponse = result.getResponse().getContentAsString();
        int status = result.getResponse().getStatus();
        assertThat(status).isEqualTo(200);
        assertThat(jsonResponse).contains("ZILGA");
        assertThat(jsonResponse).contains("HERITIANA");
        assertThat(jsonResponse).contains("DOCTORAT");
    }

    @Test
    void DeleteProf() throws Exception {
        doNothing().when(profService).delete(1L);
        MvcResult result = mockMvc.perform(delete("/api/v1/profs/1"))
                .andReturn();
        int status = result.getResponse().getStatus();
        assertThat(status).isEqualTo(204);
    }
}