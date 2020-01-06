<?php
    if (isset($_POST["submitButton"])) {
        $firstname =  sanitizeFormString($_POST["firstName"]);
        
    }

    function sanitizeFormString($inputText){
        $inputText = strip_tags($inputText);
        $inputText = str_replace(" ","", $inputText);
        // $inputText = trim($inputText); this removes all space but not from between
        $inputText = strtolower($inputText);
        $inputText = ucfirst($inputText);
        return $inputText;
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
                <h3>Sign Up</h3>
                <span>to continue to Fanflix</span>
               
            </div>

            <form method="POST">
                <input type="text" name="firstName" placeholder="First name" required>

                <input type="text" name="lastName" placeholder="Last name" required>

                <input type="text" name="username" placeholder="Username" required>

                <input type="email" name="email" placeholder="Email" required>

                <input type="email" name="email2" placeholder="Confirm email" required>

                <input type="password" name="password" placeholder="Password" required>

                <input type="password" name="password2" placeholder="Confirm password" required>

                <input type="submit" name="submitButton" values="SUBMIT">
            </form>

            <a href="login.php" class="signInMessage">Already have an account? Sign in here</a>
        </div>
    </div>
</body>
</html>