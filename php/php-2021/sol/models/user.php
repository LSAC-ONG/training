<?php

require_once 'db.php';

// TODO implement user db interface (add new user, retrieve user)

function addNewUser($username, $password) {
    global $conn;

    try { 
        $stmt = $conn->prepare("INSERT INTO users (username, password)
        VALUES (:username, :password)");

        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $password);
    
        $stmt->execute();
    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}