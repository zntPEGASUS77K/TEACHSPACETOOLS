package com.teachspace.teachspace.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.teachspace.teachspace.model.OccuperDTO;
import com.teachspace.teachspace.service.OccuperService;
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

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.mockito.ArgumentMatchers.any;

@WebMvcTest(OccuperController.class)
@ExtendWith(SpringExtension.class)
class OccuperControllerTest {

    @Autowired
    private MockMvc mockMvc;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @MockBean
    private OccuperService occuperService;

    private OccuperDTO occuperDTO;

    @BeforeEach
    void setUp() {
        objectMapper.registerModule(new JavaTimeModule());

        occuperDTO = new OccuperDTO();
        occuperDTO.setId(1);
        occuperDTO.setCodeProf(1L);
        occuperDTO.setCodeSal(1L);
        occuperDTO.setDate(LocalDate.of(2025, 3, 1));
    }

    @Test
    void AllOccuper() throws Exception {
        List<OccuperDTO> occuperList = Collections.singletonList(occuperDTO);
        when(occuperService.findAll()).thenReturn(occuperList);

        MvcResult result = mockMvc.perform(get("/api/v1/occuper"))
                .andReturn();

        String jsonResponse = result.getResponse().getContentAsString();
        assertThat(jsonResponse).contains("2025-03-01");
    }

    @Test
    void CreateOccuper() throws Exception {
        when(occuperService.save(any(OccuperDTO.class))).thenReturn(occuperDTO);

        MvcResult result = mockMvc.perform(post("/api/v1/occuper")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(occuperDTO)))
                .andReturn();

        String jsonResponse = result.getResponse().getContentAsString();
        assertThat(jsonResponse).contains("2025-03-01");
    }

    @Test
    void UpdateOccuper() throws Exception {
        OccuperDTO existingOccuper = new OccuperDTO();
        existingOccuper.setId(1);
        existingOccuper.setCodeProf(1L);
        existingOccuper.setCodeSal(1L);
        existingOccuper.setDate(LocalDate.of(2025, 3, 1));

        OccuperDTO updatedOccuper = new OccuperDTO();
        updatedOccuper.setCodeProf(1L);
        updatedOccuper.setCodeSal(2L);
        updatedOccuper.setDate(LocalDate.of(2025, 3, 2));

        when(occuperService.updateOccuper(eq(1), any(OccuperDTO.class))).thenReturn(updatedOccuper);

        MvcResult result = mockMvc.perform(put("/api/v1/occuper/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updatedOccuper)))
                .andReturn();

        String jsonResponse = result.getResponse().getContentAsString();
        int status = result.getResponse().getStatus();
        assertThat(status).isEqualTo(200);
        assertThat(jsonResponse).contains("2025-03-02");
    }

    @Test
    void DeleteOccuper() throws Exception {
        doNothing().when(occuperService).delete(1);
        MvcResult result = mockMvc.perform(delete("/api/v1/occuper/1"))
                .andReturn();
        int status = result.getResponse().getStatus();
        assertThat(status).isEqualTo(204);
    }
}