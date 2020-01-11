<?php
ob_start(); //Turns out output buffering
//wait until every php run until output is shown
session_start(); //this means we are able to use session
//this is used until browser is closed
//this tells if user is still logged in or not

date_default_timezone_set("Asia/Kolkata");
try{
    $con = new PDO("mysql:dbname=shaksham;host=localhost","root" , "");
    //root is the user id and password is there
    //php data object
    $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);

}
catch(PDOException $e){
    //e contains all the error details
    exit("Connection failed: " . $e->getMessage());
}
?>