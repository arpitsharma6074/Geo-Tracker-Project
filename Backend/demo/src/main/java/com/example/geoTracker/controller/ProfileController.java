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
@RequestMapping("/api/profile")
public class ProfileController {


    //1. get profile dashbord
    //2. update profile details
    //3. delete profile details

}
