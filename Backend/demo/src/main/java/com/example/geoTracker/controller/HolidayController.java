package com.example.geoTracker.controller;

import com.example.geoTracker.model.Holiday;
import com.example.geoTracker.service.HolidayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/holidays")
public class HolidayController {

    @Autowired
    private HolidayService holidayService;

    @PostMapping
    public ResponseEntity<String> addHoliday(@RequestBody Holiday holiday) {
        holidayService.addHoliday(holiday);
        return ResponseEntity.ok("Holiday added successfully.");
    }

    @GetMapping
    public ResponseEntity<List<Holiday>> getAllHolidays() {
        List<Holiday> holidays = holidayService.getALlHolidays();
        return ResponseEntity.ok(holidays);
    }

    @GetMapping("/isHoliday")
    public ResponseEntity<Boolean> isHoliday(
            @RequestParam LocalDate date) {
        boolean isHoliday = holidayService.isHoliday(date);
        return ResponseEntity.ok(isHoliday);
    }
}
