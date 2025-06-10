package com.example.geoTracker.service;

import com.example.geoTracker.model.Holiday;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public interface HolidayService {
    public void addHoliday(Holiday holiday);
    public List<Holiday> getALlHolidays();
    public boolean isHoliday(LocalDate date);
}
