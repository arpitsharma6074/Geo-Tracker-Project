package com.example.geoTracker.service;

import com.example.geoTracker.dto.AttendanceStatusDto;
import com.example.geoTracker.model.User;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public interface AttendanceRecordService {
    public void markAttendance(Long studentId, LocalDate date);
    public void markAbsent(Long studentId, LocalDate date);
    public boolean isPresent(Long studentId, LocalDate date);
    public List<User> getAllStudentsPresentByDate(LocalDate date);
    public AttendanceStatusDto getAttendanceStatus(Long studentId);
}
