package com.example.geoTracker.service;
import org.springframework.stereotype.Component;
@Component
public class LocationService {
    private static final double EARTH_RADIUS = 6371.0; // Earth's radius in kilometers
    private static final double OFFSET_RADIUS = 0.5; // Radius offset in kilometers (e.g., 500 meters)
    public boolean verifyLocation(double studentLat, double studentLon, double collegeLat, double collegeLon) {
        double distance = calculateDistance(studentLat, studentLon, collegeLat, collegeLon);
        return distance <= OFFSET_RADIUS;
    }
    private double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
        double latDistance = Math.toRadians(lat2 - lat1);
        double lonDistance = Math.toRadians(lon2 - lon1);

        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);

        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return EARTH_RADIUS * c;
    }
}

