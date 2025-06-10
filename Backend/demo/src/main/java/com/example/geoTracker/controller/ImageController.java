package com.example.geoTracker.controller;
import com.example.geoTracker.service.ImageProcessingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/api/image")
public class ImageController {

    @Autowired
    private ImageProcessingService imageProcessingService;

    @PostMapping("/detect-faces")
    public ResponseEntity<String> detectFaces(@RequestParam("file") MultipartFile file) throws IOException {
        // Save uploaded file locally
        File tempFile = File.createTempFile("uploaded_", file.getOriginalFilename());
        file.transferTo(tempFile);

        // Process the image
        String result = imageProcessingService.detectFaces(tempFile.getAbsolutePath());

        // Clean up temp file
        tempFile.delete();

        return ResponseEntity.ok(result);
    }
}
