<?php

session_start();

require_once '../models/user.php';

// TODO: handle login form request

$_SESSION['username'] = $_POST["username"];

header('Location: ../home.php');