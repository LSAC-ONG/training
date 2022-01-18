<?php
    $fructe = array("portocale", "mere", "banane", "capsuni");

    // TODO: sa se afiseze mesajele "Ana are portocale", "Ana are mere" etc
    //folosind atat structura repetitva for cat si foreach

    for ($i = 0; $i < count($fructe); $i++)
        echo "Ana are " . $fructe[$i] . "\n";

    foreach($fructe as $element)
        echo "Ana are " . $element . "\n";

?>