<?php
    
    $name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$phone = trim($_POST['phone']);
	
	$body = "Name: $name \n\nEmail: $email \n\nPhone: $phone";
	$headers = 'From: '.$email."\r\n" .
        'Reply-To: '.$email."\r\n";
    
    require('./PHPMailer/src/Exception.php');
    require('./PHPMailer/src/PHPMailer.php');
    require('./PHPMailer/src/SMTP.php');
    try{
        $mail = new PHPMailer\PHPMailer\PHPMailer();
        //$mail = new PHPMailer();
        
        $mail->IsSMTP();
        $mail->SMTPDebug = 1;
        
        $mail->SMTPAuth = true;
        $mail->Host = "mail.lilybuilders.com";
        $mail->Port = 465;
        $mail->Username = "query@lilybuilders.com";
        $mail->Password = "queryqwertyuiop";
        $mail->SMTPSecure = 'ssl';  
        
        $mail->setFrom('query@lilybuilders.com','Website Query');
        $mail->addAddress('lilybuilders.bd@gmail.com','Lily Builders');
        $mail->addCC('zulkernaintasin@gmail.com');
        $mail->Subject = "Website Query";
        $mail->Body = $body;
        //$mail->MsgHTML($body);
        //$mail->AddAddress($address, $name);
        ob_start();
        $mail->Send();
        ob_end_clean();
        echo ('success');
    }
    catch(Exception $e){
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
/*	$name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$phone = trim($_POST['phone']);
	
	$emailTo = 'lilybuilders@gmail.com'; //Put your own email address here

	$body = "Name: $name \n\nEmail: $email \n\nPhone: $phone";
	$headers = 'From: '.$email."\r\n" .
        'Reply-To: '.$email."\r\n";

	mail($emailTo, $subject, $body, $headers);
	$emailSent = true;
	echo ('success');
*/
?>
