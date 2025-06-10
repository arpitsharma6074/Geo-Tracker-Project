package com.example.geoTracker.service;

import com.example.geoTracker.model.Holiday;
import com.example.geoTracker.repository.HolidayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.List;

@Service
public class HolidayServiceImpl implements HolidayService {
    @Autowired
    private HolidayRepository holidayRepository;
    @Override
    public void addHoliday(Holiday holiday) {
        holidayRepository.save(holiday);
    }
    @Override
    public List<Holiday> getALlHolidays() {
        return holidayRepository.findAll();
    }
    @Override
    public boolean isHoliday(LocalDate date) {
        DayOfWeek dayOfWeek = date.getDayOfWeek();
        if (dayOfWeek == DayOfWeek.SATURDAY || dayOfWeek == DayOfWeek.SUNDAY) {
            return true;
        }

        return holidayRepository.existsByFromDateLessThanEqualAndToDateGreaterThanEqual(date, date);
    }

}
