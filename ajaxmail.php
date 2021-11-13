<?php
$un=$_POST['username'];
$em=$_POST['useremail'];
$msg=$_POST['mesg'];
if(trim($un)!="Your Name" && trim($msg)!="Your message" && trim($em)!="Your Email" && trim($un)!="" && trim($msg)!="" && trim($em)!="")
{
	if(filter_var($em, FILTER_VALIDATE_EMAIL))
	{
		$message="Hi Admin..<p>".$un." has sent a query having email id as ".$em." </p><p>Message is : ".$msg."</p>";
		
		$message_user="Hi ".$un."<p> Thank you so much for your valuable comments. <br> Our Support team will get back to you ASAP.</p><p>Have a great day ahead.</p>";
		
		
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= 'From: <support@healthcare.com>' . "\r\n";

		if(mail('shubham.choudhary@himanshusofttech.com','Query for Healthcare',$message,$headers ))
		{
			if($_POST['check']==1)
			{
				mail($em,'Reply from Health Care Template Team',$message_user,$headers );
			}
		echo '1#<p style="color:green;">Mail has been sent successfully.</p>';
		}
		else
		{
		echo '2#<p style="color:red;">Please, Try Again.</p>';
		}
	}
	else
		echo '2#<p style="color:red">Please, provide valid Email.</p>';
}
else
{
echo '2#<p style="color:red">Please, fill all the details.</p>';
}?>