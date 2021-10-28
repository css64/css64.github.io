<?php	
	if (empty($_POST['email_47698']) && strlen($_POST['email_47698']) == 0)
	{
		return false;
	}
	
	$name_47698 = $_POST['name_47698'];
	$email_47698 = $_POST['email_47698'];
	
	$to = 'vic613@yandex.ru'; // Email submissions are sent to this email

	// Create email	
	$email_subject = "Message from a Blocs website.";
	$email_body = "You have received a new message. \n\n".
				  "Name_47698: $name_47698 \nEmail_47698: $email_47698 \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: contact@yoursite.com\n";
	$headers .= "Reply-To: DoNotReply@yoursite.com";	
	
	mail($to,$email_subject,$email_body,$headers); // Post message
	return true;			
?>