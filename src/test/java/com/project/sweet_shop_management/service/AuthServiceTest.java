package com.project.sweet_shop_management.service;

import com.project.sweet_shop_management.model.LoginResponse;
import com.project.sweet_shop_management.model.Users;
import com.project.sweet_shop_management.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class AuthServiceTest {

    private UserRepository userRepository;
    private JWTService jwtService;
    private AuthenticationManager authenticationManager;
    private AuthService authService;

    @BeforeEach
    void setUp() {
        userRepository = Mockito.mock(UserRepository.class);
        jwtService = Mockito.mock(JWTService.class);
        authenticationManager = Mockito.mock(AuthenticationManager.class);

        authService = new AuthService();
        authService.userRepository = userRepository;
        authService.jwtService = jwtService;
        authService.authenticationManager = authenticationManager;
    }

    @Test
    void testSaveUserEncryptsPassword() {
        Users user = new Users();
        user.setName("john");
        user.setPassword("plain123");

        when(userRepository.save(any(Users.class)))
                .thenAnswer(i -> i.getArguments()[0]);

        Users saved = authService.saveUser(user);

        assertNotEquals("plain123", saved.getPassword()); // Password should be encrypted
        verify(userRepository, times(1)).save(any(Users.class));
    }

    @Test
    void testLoginUserReturnsTokenAndUser() {
        Users user = new Users();
        user.setName("john");
        user.setPassword("plain123");

        Authentication auth = Mockito.mock(Authentication.class);

        when(authenticationManager.authenticate(any(UsernamePasswordAuthenticationToken.class)))
                .thenReturn(auth);
        when(auth.isAuthenticated()).thenReturn(true);
        when(jwtService.generateToken("john")).thenReturn("fake-jwt-token");

        // Mock DB lookup for user
        Users dbUser = new Users();
        dbUser.setName("john");
        dbUser.setPassword("encryptedPass");
        when(userRepository.findByName("john")).thenReturn(dbUser);

        LoginResponse response = authService.loginUser(user);

        assertNotNull(response);
        assertEquals("fake-jwt-token", response.getToken());
        assertEquals("john", response.getUser().getName());
        verify(authenticationManager, times(1)).authenticate(any(UsernamePasswordAuthenticationToken.class));
        verify(jwtService, times(1)).generateToken("john");
        verify(userRepository, times(1)).findByName("john");
    }
}
