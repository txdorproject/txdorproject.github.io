<?php
    include_once 'dbh.php';
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    if(isset($_POST['save']))
    {	 
        $nomContact = $_POST['nomContact'];
        $emailContact = $_POST['emailContact'];
        $forfaits = $_POST['forfaits'];
        $message = $_POST['messageUser'];

        $sql = "INSERT INTO users (name, email, forfait, message)
        VALUES ('$nomContact','$emailContact','$forfaits','$message')";
        if (mysqli_query($conn, $sql)) {
            echo "New record created successfully !";
        } else {
            echo "Error: " . $sql . "" . mysqli_error($conn);
        }

        require '../PHPMailer/Exception.php';
        require '../PHPMailer/PHPMailer.php';
        require '../PHPMailer/SMTP.php';

        $mail = new PHPMailer();

        try {
            $mail->Mailer = "smtp"; 
            $mail->Host = 'tls://smtp.gmail.com:587';
            $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
                )
            );                                         
            
            $mail->SMTPAuth   = true;                                  
            $mail->Username   = 'urplacesmtp@gmail.com';                    
            $mail->Password   = 'Mqp89?yw62?!';                              
            
            //Content
            $mail->isHTML(true);        
            $mail->setFrom($emailContact, $nomContact);
            $mail->addAddress('urplacesmtp@gmail.com');                           
            $mail->Subject =  $forfaits;
            $mail->Body    = $message;
            

            if($mail->send()) {
                echo 'Message has been sent';
            } else {
                echo "Error " . $mail->ErrorInfo;
            }
            
            
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
        $mail->smtpClose();
        header("Location: ../success.html");
        mysqli_close($conn);
    }
?>