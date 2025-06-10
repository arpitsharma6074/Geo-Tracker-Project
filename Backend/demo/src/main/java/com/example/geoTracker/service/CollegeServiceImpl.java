package com.example.geoTracker.service;

import com.example.geoTracker.model.College;
import com.example.geoTracker.repository.CollegeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class CollegeServiceImpl implements CollegeService{
    @Autowired
    private CollegeRepository collegeRepository;
    @Override
    public College getCollege(Long id) {
        Optional<College> college = collegeRepository.findById(id);
        if(college.isPresent()) return college.get();
        else throw new RuntimeException("College not found");
    }

    @Override
    public void update(College college) {
        collegeRepository.save(college);
    }
}
