<?php
if(!isset($_POST['submit']))
{
    // page should not be accessed directly
    echo "error; submit form first";
}

$name = $_POST['firstname'];
$user_email = $_POST['email'];


//validate now
if(empty($name)||empty($user_email))
{
    echo "Name and email empty";
    exit;
}
$email_from ='will@givecard.io';
$email_subject = 'Organization New User';
$email_body = "Hello, $name, you have been added to your organization by the administrator.\n Please Contact admin with any questions";
$to = $user_email;
$headers = "From: $email_from \r\n";

//send email
mail($to,$email_subject,$email_body,$headers);

?>