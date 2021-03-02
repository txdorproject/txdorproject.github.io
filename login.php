<?php

/*
Install composer -> 
https://perials.com/install-composer-on-windows-and-wamp/ -> to generate autoload.php
https://stackoverflow.com/questions/44746325/how-to-use-composer-with-wampserver
https://duvien.com/blog/setting-wamp-composer-and-git-windows-10

Or if I don't want use composer ->
https://packagist.org/packages/phpmailer/phpmailer
Download phpmailer, section installation & loading 

PHP Mailer ->
https://github.com/PHPMailer/PHPMailer
Plein de ressources et d'exemples ici : https://github.com/PHPMailer/PHPMailer/tree/master/examples

To test locally -> a dummy SMTP server for Windows and Linux.
https://github.com/rnwood/smtp4dev

SMTP Hostinger ->
https://www.hostinger.com/tutorials/send-emails-using-php-mail
https://www.hostinger.com/tutorials/smtp-port-587

How to get the API Key pour reCAPTCHA validation ->
https://phppot.com/php/how-to-get-google-recaptcha-site-and-secret-key/
*/


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require __DIR__ . '/vendor/autoload.php';

$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
    $nomContact = $_POST['nomContact'];
    $emailContact = $_POST['emailContact'];
    $forfaits = $_POST['forfaitOption'];
    $message = $_POST['message'];

    if (empty($nomContact)) {
        $errors[] = 'Votre nom est vide';
    }

    if (empty($emailContact)) {
        $errors[] = 'Email vide';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Votre Email est non valide';
    }

    if (empty($forfaits)) {
        $errors[] = 'Forfaits est vide';
    }

    if (empty($message)) {
        $errors[] = 'Votre message est vide';
    }

    //reCAPTCHA validation -> a mettre en place
    /*
	if (isset($_POST['g-recaptcha-response'])) {
		
		require('component/recaptcha/src/autoload.php');		
		
		$recaptcha = new \ReCaptcha\ReCaptcha(SECRET_KEY);

		$resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);

		  if (!$resp->isSuccess()) {
				$output = json_encode(array('type'=>'error', 'text' => '<b>Captcha</b> Validation Required!'));
				die($output);				
		  }	
	}*/


    if (!empty($errors)) {
        $allErrors = join('<br/>', $errors);
        $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
    } else {
        $mail = new PHPMailer();

        // specify SMTP credentials
        $mail->SMTPDebug = SMTP::DEBUG_SERVER //Enable verbose debug output
        $mail->isSMTP();
        $mail->Host = 'smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Username = 'd5g6bc7a7dd6c7';
        $mail->Password = '27f211b3fcad87';
        // Pour secure
        // $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  
        // ou
        // $mail->SMTPSecure = 'tls';

        // Pour port
        //$mail->Port = 587; //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
        // ou 
        // $mail->Port = 2525;

        $mail->setFrom($emailContact, 'Mailtrap Website');
        $mail->addAddress('piotr@mailtrap.io', 'Me'); //Add a recipient
        $mail->Subject = 'New message from your website';

        // Enable HTML if needed
        $mail->isHTML(true);

        $bodyParagraphs = ["Votre nom: {$nomContact}", "Votre Email: {$emailContact}", "Votre forfait: {$forfaits}", "Votre message:", nl2br($message)];
        $body = join('<br />', $bodyParagraphs);
        $mail->Body = $body;

        echo $body;
        if($mail->send()){
            header('Location: index.html'); // redirect to 'thank you' page
        } else {
            $errorMessage = 'Oops, something went wrong. Mailer Error: ' . $mail->ErrorInfo;
        }

        // send information to database
        $conn = mysqli_connect("localhost", "root", "test", "blog_samples") or die("Connection Error: " . mysqli_error($conn));
        mysqli_query($conn, "INSERT INTO tblcontact ('user_name', 'user_email','forfait_user', 'message_user') VALUES ('" . $nomContact. "', '" . $emailContact. "','" . $forfaits. "','" . $message. "')");
        $insert_id = mysqli_insert_id($conn);
}

?>