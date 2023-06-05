package com.nuzones.nuzonesservice.exception;

import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.stream.Collectors;

/**
 * @author Emmanuel Abajo
 * @created 17/04/2023
 */
@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<CustomErrorResponse> handleException(Exception e) {
        log.error(e.toString());
        return buildResponse("Internal Server Error",
                "An error occurred while processing request", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(ServerErrorException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<CustomErrorResponse> handleServerErrorException(ServerErrorException e) {
        log.error(e.toString());
        return buildResponse("Internal Server Error",
                e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<CustomErrorResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException ex, HttpServletResponse response) throws IOException {
        var errors = ex.getBindingResult().getFieldErrors().stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage).collect(Collectors.joining(","));

        return buildResponse("Bad Request", errors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(BadRequestException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<CustomErrorResponse> handleBadRequestException(BadRequestException e) {
        log.error(e.toString());
        return buildResponse("Bad Request", e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<CustomErrorResponse> handleNotFoundException(NotFoundException e) {
        log.error(e.toString());
        return buildResponse("Not Found", e.getMessage(), HttpStatus.NOT_FOUND);
    }

    private ResponseEntity<CustomErrorResponse> buildResponse(String error, String message, HttpStatus status) {
        var response = CustomErrorResponse.builder()
                .error(error)
                .status(status.value())
                .message(message)
                .timestamp(LocalDateTime.now()).build();

        return new ResponseEntity<>(response, status);
    }
}
