const cities = {
    "UK" : [
        {
            name: "Birmingham",
            id: 1
        },
        {
            name: "London",
            id: 2
        }
    ],
    "RO" : [
        {
            name: "Bucuresti",
            id: 3
        },
        {
            name: "Cluj-Napoca",
            id: 4
        }
    ]
};

$(document).ready(function(){
    $('input[type=submit]').click(function(e) {
        e.preventDefault();
        
        const name = $('#name').val();
        const email = $('#email').val();
        
        if(name && email) {
            $('.error').hide();
            $('#users').append(`<li> Name: ${name}, E-mail: ${email} </li>`);
        } else {
            $('.error').show();
            $('.error').html('Both fields are required');
        }
    });

    $('input[type=text]').focus(function(e) {
        $(`#${e.currentTarget.id}`).css('background', 'lightyellow');
    });

    $('input[type=text]').blur(function(e) {
        $(`#${e.currentTarget.id}`).css('background', 'white');
    });

    $('#country').change(function() {
        const countryId = $('#country').val();

        $('#city').empty();

        cities[countryId].forEach(function(city){
            const cityElement = `<option value="${city.id}">${city.name}</option>`
            $('#city').append(cityElement);
        });

        $('#cityContainer').slideDown('slow');
    });
});