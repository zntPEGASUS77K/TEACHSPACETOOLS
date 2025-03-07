package com.teachspace.teachspace.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "salle", schema = "masterpiece")
public class Salle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codesal")
    private Long codeSal;

    @Column(name = "designation", nullable = false)
    private String designation;
}