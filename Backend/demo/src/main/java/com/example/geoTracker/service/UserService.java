package com.example.geoTracker.service;

import com.example.geoTracker.model.LoginRequest;
import com.example.geoTracker.model.User;

public interface UserService {
    public User createUser(User user);
    public User userLogin(LoginRequest loginRequest);
}
