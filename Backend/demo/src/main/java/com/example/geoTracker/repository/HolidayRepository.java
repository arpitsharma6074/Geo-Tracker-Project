package com.example.geoTracker.repository;

import com.example.geoTracker.model.Holiday;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface HolidayRepository extends JpaRepository<Holiday, Long> {
    boolean existsByFromDateLessThanEqualAndToDateGreaterThanEqual(LocalDate fromDate, LocalDate toDate);
}
