<?php

session_start();

// TODO: if a user is logged in, show him a welcome message, retrieving his username, otherwise redirect to login

if(!isset($_SESSION["username"])) {
    header('Location: login.php');
}

echo 'Hello, ' . $_SESSION["username"];