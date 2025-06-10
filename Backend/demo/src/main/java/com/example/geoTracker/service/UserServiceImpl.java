package com.example.geoTracker.service;

import com.example.geoTracker.model.LoginRequest;
import com.example.geoTracker.model.User;
import com.example.geoTracker.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User userLogin(LoginRequest loginRequest) {
        List<User> allUser = userRepository.findAll();
        Optional<User> user = allUser.stream()
                .filter(res -> res.getEmail()
                        .equals(loginRequest.getEmail()) && res.getPassword()
                        .equals(loginRequest.getPassword()))
                .findFirst(); // Find the first matching user
        if(user.isPresent()) {
            return user.get();
        } else throw  new RuntimeException("Wrong Details");
    }

    // Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


}
