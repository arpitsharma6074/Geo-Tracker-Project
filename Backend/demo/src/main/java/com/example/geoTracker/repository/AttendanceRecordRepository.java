package com.example.geoTracker.repository;

import com.example.geoTracker.model.AttendanceRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface AttendanceRecordRepository extends JpaRepository<AttendanceRecord, Long> {
    boolean existsByStdIdAndDateAndIsPresent(Long stdId, LocalDate date, boolean isPresent);
    @Query("SELECT ar.stdId FROM AttendanceRecord ar WHERE ar.date = :date AND ar.isPresent = true")
    List<Long> findAllStudentIdsByDateAndIsPresent(@Param("date") LocalDate date, boolean isPresent);
    List<AttendanceRecord> findByStdId(Long stdId);
}
