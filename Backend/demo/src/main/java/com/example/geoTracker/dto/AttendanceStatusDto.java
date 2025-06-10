package com.example.geoTracker.dto;

import org.springframework.stereotype.Component;
@Component
public class AttendanceStatusDto {
    private Long totalLecture;
    private Long absentCount;

    public Long getTotalLecture() {
        return totalLecture;
    }

    public void setTotalLecture(Long totalLecture) {
        this.totalLecture = totalLecture;
    }

    public Long getAbsentCount() {
        return absentCount;
    }

    public void setAbsentCount(Long absentCount) {
        this.absentCount = absentCount;
    }
}
