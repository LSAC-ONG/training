<?php
    //echo var_dump($_GET);

    // RONtoREF
    // EURtoREF
    // GBPtoREF
    // RONtoEUR = RONtoREF * REFtoEUR =RONtoREF * 1/ EURtoREF
    // REF = EUR

    function valid_input($input) {
        return (int)$input == $input;
    }

    $currencies = array ("RON", "EUR", "GBP");
    function valid_currency($valuta) {
        global $currencies;
        foreach ($currencies as $currency) {
            if ($currency == $valuta)
                return true;
        }
        return false;
    }

    $conversions = array(
        "RONtoREF" => 0.2,
        "EURtoREF" => 1,
        "GBPtoREF" => 1.2
    );

    if (valid_input($_GET["fvalue"]) && valid_currency($_GET["valuta1"]) && valid_currency($_GET["valuta2"])) {
        echo $_GET["fvalue"] . " " . $_GET["valuta1"] . "=" .
            $_GET["fvalue"] * ($conversions[$_GET["valuta1"] . "toREF"] * (1 / $conversions[$_GET["valuta2"] . "toREF"])) .
            " " . $_GET["valuta2"];
    } else {
        echo("Invalid inputs");
    }

?>