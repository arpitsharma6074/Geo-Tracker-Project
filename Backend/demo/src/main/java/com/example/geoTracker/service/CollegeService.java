package com.example.geoTracker.service;

import com.example.geoTracker.model.College;
import org.springframework.stereotype.Service;

@Service
public interface CollegeService {

    public College getCollege(Long id);
    public void update(College college);

}
