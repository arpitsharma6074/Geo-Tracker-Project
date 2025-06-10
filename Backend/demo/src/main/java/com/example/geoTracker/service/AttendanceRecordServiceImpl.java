package com.example.geoTracker.service;

import com.example.geoTracker.model.AttendanceRecord;
import com.example.geoTracker.dto.AttendanceStatusDto;
import com.example.geoTracker.model.User;
import com.example.geoTracker.repository.AttendanceRecordRepository;
import com.example.geoTracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class AttendanceRecordServiceImpl implements AttendanceRecordService {
    @Autowired
    private AttendanceRecordRepository attendanceRecordRepository;
    @Autowired
    private UserRepository userRepository;
    @Override
    public void markAttendance(Long studentId, LocalDate date) {
        AttendanceRecord record = new AttendanceRecord();
        record.setStdId(studentId);
        record.setDate(date);
        record.setPresent(true);
        attendanceRecordRepository.save(record);
    }

    @Override
    public void markAbsent(Long studentId, LocalDate date) {
        AttendanceRecord record = new AttendanceRecord();
        record.setStdId(studentId);
        record.setDate(date);
        record.setPresent(false);
        attendanceRecordRepository.save(record);
    }

    @Override
    public boolean isPresent(Long studentId, LocalDate date) {
        return attendanceRecordRepository.existsByStdIdAndDateAndIsPresent(studentId, date, true);
    }

    @Override
    public List<User> getAllStudentsPresentByDate(LocalDate date) {
        List<Long> studentIds = attendanceRecordRepository.findAllStudentIdsByDateAndIsPresent(date, true);
        return userRepository.findAllById(studentIds);
    }

    @Override
    public AttendanceStatusDto getAttendanceStatus(Long studentId) {
        List<AttendanceRecord> records = attendanceRecordRepository.findByStdId(studentId);
        long presentCount = records.stream().filter(AttendanceRecord::isPresent).count();
        long absentCount = records.size() - presentCount;

        AttendanceStatusDto status = new AttendanceStatusDto();
        status.setAbsentCount(absentCount);
        status.setTotalLecture(presentCount + absentCount);

        return status;
    }
}

