package com.example.geoTracker.controller;

import com.example.geoTracker.dto.AttendanceStatusDto;
import com.example.geoTracker.dto.MarkAttendanceDto;
import com.example.geoTracker.model.College;
import com.example.geoTracker.model.User;
import com.example.geoTracker.service.AttendanceRecordService;
import com.example.geoTracker.service.CollegeService;
import com.example.geoTracker.service.HolidayService;
import com.example.geoTracker.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/attendance")
public class AttendanceController {
    @Autowired
    private HolidayService holidayService;
    @Autowired
    private CollegeService collegeService;
    @Autowired
    private AttendanceRecordService attendanceRecordService;
    @Autowired
    private LocationService locationService;

    @PostMapping
    public ResponseEntity<String> markAttendance(@RequestBody MarkAttendanceDto markAttendanceDto) {
        Long studentId = markAttendanceDto.getStudentId();
        Double latitude = markAttendanceDto.getLatitude();
        Double longitude = markAttendanceDto.getLongitude();

        LocalDate date = LocalDate.now();
        if(holidayService.isHoliday(date)) {
            return ResponseEntity.status(400).body("Cannot mark attendance on a holiday.");
        }

        if(attendanceRecordService.isPresent(studentId, date)) {
            return ResponseEntity.status(400).body("You are already marked as present.");

        }

        Long defaultCollegeId = 164L;

        College college = collegeService.getCollege(defaultCollegeId);

        boolean isValidLocation =  locationService.verifyLocation(latitude, longitude, college.getLatitude(), college.getLongitude());

        if(!isValidLocation)
            return ResponseEntity.status(400).body("Location mismatch. Attendance can only be marked from the college premises.");

        attendanceRecordService.markAttendance(studentId, date);
        return ResponseEntity.status(200).body("Attendance marked successfully!");
    }

    // For student/admin
    @GetMapping("/status")
    public AttendanceStatusDto getAttendanceStatus(@RequestParam Long studentId) {
        return attendanceRecordService.getAttendanceStatus(studentId);
    }

    @GetMapping
    public ResponseEntity<String> isPresentByDate(@RequestParam Long studentId, @RequestParam LocalDate date) {
        if(holidayService.isHoliday(date)) {
            return ResponseEntity.status(400).body("It was holiday.");
        }
        if(attendanceRecordService.isPresent(studentId, date)) {
            return ResponseEntity.status(200).body("present");
        }
        return ResponseEntity.status(200).body("absent");
    }

    @PostMapping("/absent")
    public ResponseEntity<String> markAbsent(@RequestParam Long studentId, @RequestParam LocalDate date) {
//        if(holidayService.isHoliday(date)) {
//            return ResponseEntity.status(400).body("Cannot mark attendance on a holiday.");
//        }
        attendanceRecordService.markAbsent(studentId, date);
        return ResponseEntity.status(200).body("Marked absent successfully!");
    }

    @GetMapping("/all")
    public List<User> getAllStudentsPresentByDate(@RequestParam LocalDate date) {
        return attendanceRecordService.getAllStudentsPresentByDate(date);
    }
}
