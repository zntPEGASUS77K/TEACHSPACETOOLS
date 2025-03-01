package com.teachspace.teachspace.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "occuper", schema = "masterpiece")
public class Occuper {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "codeprof", nullable = false)
    private Prof prof;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "codesal", nullable = false)
    private Salle salle;

    @Column(name = "date", nullable = false)
    private LocalDate date;
}
