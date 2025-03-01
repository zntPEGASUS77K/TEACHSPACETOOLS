package com.teachspace.teachspace.model;

import lombok.Data;

import java.time.LocalDate;

@Data
public class OccuperDTO {

    private Integer id;

    private Long codeProf;

    private Long codeSal;

    private LocalDate date;
}