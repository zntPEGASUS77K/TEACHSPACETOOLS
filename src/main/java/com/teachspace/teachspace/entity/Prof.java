package com.teachspace.teachspace.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "prof", schema = "masterpiece")
public class Prof {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codeprof")
    private Long codeProf;
    @Column(name = "nom", nullable = false)
    private String nom;
    @Column(name = "prenom", nullable = false)
    private String prenom;
    @Column(name = "grade", nullable = false)
    private String grade;
}