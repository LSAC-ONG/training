<?php
    $cuvinte = array (
        "food" => "mancare",
		"cat" => "pisica",
		"to walk" => "a merge"
    );

    //TODO: Afiseaza cuvintele din dictionar, sub forma food=mancare

    foreach($cuvinte as $key => $value) {
        echo $key . "=" . $value . "\n";
    }
?>