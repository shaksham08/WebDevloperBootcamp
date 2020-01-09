<?php
    if (isset($_POST["submitButton"])) {
    
       

    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Welcome to Fanflix</title>
    <link rel="stylesheet" type="text/css" href="assets/style/style.css">
</head>
<body>
    <div class="signInContainer">
        <div class="column">

            <div class="header">
                <img src="assets/images/logo.png" alt="Site Logo" title="Logo">
                <h3>Sign In</h3>
                <span>to continue to Fanflix</span>

            </div>

            <form method="POST">
                

                <input type="text" name="username" placeholder="Username" required>

               
                <input type="password" name="password" placeholder="Password" required>

              

                <input type="submit" name="submitButton" values="SUBMIT">
            </form>

            <a href="register.php" class="signInMessage">Need an account? Sign up here</a>
        </div>
    </div>
</body>
</html>
