<?php
require_once("includes/config.php");
require_once("includes/classes/FormSanitizer.php");
require_once("includes/classes/Constants.php");
require_once("includes/classes/Account.php");

    $account = new Account($con);
    //this con is coming from the config file
    

    

    if (isset($_POST["submitButton"])) {
        $firstName =  FormSanitizer::sanitizeFormString($_POST["firstName"]);
        $lastName = FormSanitizer::sanitizeFormString($_POST["lastName"]);
        $username = FormSanitizer::sanitizeFormUsername($_POST["username"]);
        $email = FormSanitizer::sanitizeFormEmail($_POST["email"]);
        $email2 = FormSanitizer::sanitizeFormEmail($_POST["email2"]);
        $password = FormSanitizer::sanitizeFormPassword($_POST["password"]);
        $password2 = FormSanitizer::sanitizeFormPassword($_POST["password2"]);
        // echo $firstname . "<br>"; 
        // echo $lastname. "<br>";
        // echo $username. "<br>";
        // echo $email. "<br>";
        // echo $email2. "<br>";
        // echo $password . "<br>";
        // echo $password2 . "<br>";

        //we write these to check if we are able to fetch the value from the form or not

       $account->register($firstName , $lastName , $username , $email , $email2 , $password , $password2);
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

                <?php echo $account->getError(Constants::$firstNameCharacters); ?>
                <input type="text" name="firstName" placeholder="First name" required>
                
                <?php echo $account->getError(Constants::$lastNameCharacters); ?>
                <input type="text" name="lastName" placeholder="Last name" required>

                 <?php echo $account->getError(Constants::$userNameCharacters); ?>
                 <?php echo $account->getError(Constants::$userNameTaken); ?>

                <input type="text" name="username" placeholder="Username" required>

                 <?php echo $account->getError(Constants::$emailsDontMatch); ?>
                 <?php echo $account->getError(Constants::$emailInvalid); ?>
                 <?php echo $account->getError(Constants::$emailTaken); ?>

                <input type="email" name="email" placeholder="Email" required>

                <input type="email" name="email2" placeholder="Confirm email" required>
                <?php echo $account->getError(Constants::$passwordsDontMatch); ?>
                <?php echo $account->getError(Constants::$passwordLength); ?>


                <input type="password" name="password" placeholder="Password" required>

                <input type="password" name="password2" placeholder="Confirm password" required>

                <input type="submit" name="submitButton" values="SUBMIT">
            </form>

            <a href="login.php" class="signInMessage">Already have an account? Sign in here</a>
        </div>
    </div>
</body>
</html>