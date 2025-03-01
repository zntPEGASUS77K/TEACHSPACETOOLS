package com.teachspace.teachspace.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.teachspace.teachspace.model.SalleDTO;
import com.teachspace.teachspace.service.SalleService;
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

@WebMvcTest(SalleController.class)
@ExtendWith(SpringExtension.class)
class SalleControllerTest {

    @Autowired
    private MockMvc mockMvc;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @MockBean
    private SalleService salleService;

    private SalleDTO salleDTO;

    @BeforeEach
    void setUp() {
        salleDTO = new SalleDTO();
        salleDTO.setCodeSal(1L);
        salleDTO.setDesignation("Salle 101");
    }

    @Test
    void AllSalles() throws Exception {
        List<SalleDTO> salleList = Collections.singletonList(salleDTO);
        when(salleService.findAll()).thenReturn(salleList);

        MvcResult result = mockMvc.perform(get("/api/v1/salles"))
                .andReturn();

        String jsonResponse = result.getResponse().getContentAsString();
        assertThat(jsonResponse).contains("Salle 101");
    }

    @Test
    void CreateSalle() throws Exception {
        when(salleService.save(any(SalleDTO.class))).thenReturn(salleDTO);

        MvcResult result = mockMvc.perform(post("/api/v1/salles")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(salleDTO)))
                .andReturn();

        String jsonResponse = result.getResponse().getContentAsString();
        assertThat(jsonResponse).contains("Salle 101");
    }

    @Test
    void UpdateSalle() throws Exception {
        SalleDTO existingSalle = new SalleDTO();
        existingSalle.setCodeSal(1L);
        existingSalle.setDesignation("Salle 101");

        SalleDTO updatedSalle = new SalleDTO();
        updatedSalle.setDesignation("Salle 102");

        when(salleService.updateSalle(eq(1L), any(SalleDTO.class))).thenReturn(updatedSalle);

        MvcResult result = mockMvc.perform(put("/api/v1/salles/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updatedSalle)))
                .andReturn();

        String jsonResponse = result.getResponse().getContentAsString();
        int status = result.getResponse().getStatus();
        assertThat(status).isEqualTo(200);
        assertThat(jsonResponse).contains("Salle 102");
    }

    @Test
    void DeleteSalle() throws Exception {
        doNothing().when(salleService).delete(1L);
        MvcResult result = mockMvc.perform(delete("/api/v1/salles/1"))
                .andReturn();
        int status = result.getResponse().getStatus();
        assertThat(status).isEqualTo(204);
    }
}