package com.example.geoTracker.service;
import org.opencv.core.*;
import org.opencv.imgcodecs.Imgcodecs;
import org.opencv.objdetect.CascadeClassifier;
import org.springframework.stereotype.Service;

@Service
public class ImageProcessingService {

    public String detectFaces(String imagePath) {
        // Load the face detection model
        CascadeClassifier faceDetector = new CascadeClassifier("haarcascade_frontalface_default.xml");

        // Read the image
        Mat image = Imgcodecs.imread(imagePath);

        // Detect faces
        MatOfRect faceDetections = new MatOfRect();
        faceDetector.detectMultiScale(image, faceDetections);

        return "Detected " + faceDetections.toArray().length + " faces";
    }
}
