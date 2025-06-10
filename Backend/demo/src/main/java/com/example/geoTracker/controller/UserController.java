package com.example.geoTracker.controller;

import com.example.geoTracker.model.LoginRequest;
import com.example.geoTracker.model.User;
import com.example.geoTracker.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/register")
    public ResponseEntity<String> createUser(@RequestBody User user) {
        userService.createUser(user);
        return ResponseEntity.ok("Registration Successful");
    }
    @PostMapping("/login")
    public  ResponseEntity<User>  userLogin(@RequestBody LoginRequest loginRequest) {
         User user = userService.userLogin(loginRequest);
         return  ResponseEntity.ok(user);
    }
}

