package com.example.geoTracker.controller;

import com.example.geoTracker.model.College;
import com.example.geoTracker.service.CollegeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/college")
public class CollegeController {
    @Autowired
    private CollegeService collegeService;
    @GetMapping
    public College getCollege(@RequestParam Long id) {
        return collegeService.getCollege(id);
    }
    @PostMapping
    public void updateCollege(@RequestBody College college) {
        collegeService.update(college);
    }
}
