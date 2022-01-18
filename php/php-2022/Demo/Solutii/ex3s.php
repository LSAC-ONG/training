<?php
    $input = readline();

    //TODO: Afiseaza numarul de litere citite, inversul mesajului si verificati daca contine doar litere mici

    function lowercase_letter($caracter) {
        if ($caracter >= 'a' && $caracter <= 'z')
            return true;
        return false;
    }

    echo strlen($input) . "\n";
    echo strrev($input) . "\n";

    $semafor = true;

    for ($i = 0; $i < strlen($input); $i++)
        if (!lowercase_letter($input[$i])) {
            echo "Contine si alte caractere decat litere mici";
            $semafor = false;
            break;
        }
    
    if ($semafor)
        echo "Contine doar litere mici";
?>