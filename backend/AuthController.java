package com.lms.librarymanagement.controller;

import com.lms.librarymanagement.dto.LoginRequest;
import com.lms.librarymanagement.dto.LoginResponse;
import com.lms.librarymanagement.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*") // allow frontend
public class AuthController {

    private final UserService userService;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return userService.login(request);
    }
}