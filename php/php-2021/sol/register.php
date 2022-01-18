<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>Bootstrap Simple Login Form</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<style>
.login-form {
    width: 340px;
    margin: 50px auto;
  	font-size: 15px;
}
.login-form form {
    margin-bottom: 15px;
    background: #f7f7f7;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 30px;
}
.login-form h2 {
    margin: 0 0 15px;
}
.form-control, .btn {
    min-height: 38px;
    border-radius: 2px;
}
.btn {        
    font-size: 15px;
    font-weight: bold;
}
.err {
    display:none;
}
</style>
</head>
<body>
<div class="login-form">
    <form action="controllers/registercontroller.php" method="post">
        <h2 class="text-center">Register</h2>       
        <div class="form-group">
            <input type="text" class="form-control" name="username" placeholder="Username">
            <div id="username_err" class="err alert alert-danger"></div>
        </div>
        <div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password">
            <div id="password_err" class="err alert alert-danger"></div>
        </div>
        <div class="form-group">
            <input type="password" class="form-control" name="repeatPassword" placeholder="Repeat Password">
            <div id="repeatPassword_err" class="err alert alert-danger"></div>
        </div>
        <div class="form-group">
            <button type="submit" id="submitBtn" class="btn btn-primary btn-block">Create account</button>
        </div>      
    </form>
    <p class="text-center"><a href="login.php">Already have an account? Login</a></p>
</div>
</body>
</html>

<script>

$(document).ready(function(){
    $('#submitBtn').click(function(e) {
        e.preventDefault();
        console.log($('form').serialize());
        $.ajax({
            method: 'POST',
            url: $('form').attr("action"),
            data: $('form').serialize(),
            dataType: 'json'
        }).done(function(data) {
            if(data.status == "fail") {
                if(data.username_err) {
                    $('#username_err').html(data.username_err);
                    $('#username_err').show();
                } else {
                    $('#username_err').hide();
                }
                if(data.password_err) {
                    $('#password_err').html(data.password_err);
                    $('#password_err').show();
                } else {
                    $('#password_err').hide();
                }
                if(data.repeatPassword_err) {
                    $('#repeatPassword_err').html(data.repeatPassword_err);
                    $('#repeatPassword_err').show();
                } else {
                    $('#repeatPassword_err').hide();
                }
            } else {
                alert('Account created successfully!');
            }
            
        }).fail(function(jqXHR, textStatus) {
            alert(`Request failed: ${textStatus}`);
        });
    });
});

</script>