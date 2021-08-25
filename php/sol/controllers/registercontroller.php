<?php

require_once '../models/user.php';

// TODO: handle register form request

function validateStringField($key) {
    if(!isset($_POST[$key]) || empty(trim($_POST[$key]))) {
        return $key . " is required";
    }

    return "";
}

if($_SERVER["REQUEST_METHOD"] == "GET") {
    header('Location: ../register.php');
} else {
    $response = [];

    $response["username_err"] = validateStringField("username");
    $response["password_err"] = validateStringField("password");
    $response["repeatPassword_err"] = validateStringField("repeatPassword");

    if($_POST["password"] != $_POST["repeatPassword"]) {
        $response["repeatPassword_err"] = "Passwords must match!";
    }

    if(!empty($response["username_err"]) || !empty($response["password_err"]) || 
       !empty($response["repeatPassword_err"])) {
           $response["status"] = "fail";
    } else {
        $response["status"] = "success";
        addNewUser($_POST["username"], md5($_POST["password"]));
    }

    echo json_encode($response);
}