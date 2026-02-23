package com.lms.librarymanagement.service.impl;

import com.lbs.librarymanagement.dto.LoginRequest;
import com.library.management.dto.LoginResponse;
import com.library.management.entity.User;
import com.library.management.repository.UserRepository;
import com.library.management.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public LoginResponse login(LoginRequest request) {

        User user = userRepository.findByUsername(request.getUsername());

        if (user == null) {
            return new LoginResponse(null, null, "User not found");
        }

        if (!user.getPassword().equals(request.getPassword())) {
            return new LoginResponse(null, null, "Invalid password");
        }

        return new LoginResponse(
                user.getUsername(),
                user.getRole(),
                "Login successful"
        );
    }
}