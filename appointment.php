<?php
$department=$_POST['department'];
$usernm=$_POST['appointer_name'];
$userphn=$_POST['appointer_phone'];
$usermail=$_POST['appointer_email'];
$date=$_POST['appointment_date'];
if(trim($department)!="Department Name" && trim($usernm)!="User Name" && trim($userphn)!="User Phone" && trim($usermail)!="User Mail" && trim($date)!="Appointment Date" && trim($department)!="" && trim($usernm)!="" && trim($userphn)!="" && trim($usermail)!="" && trim($date)!="")
{
	if(filter_var($usermail, FILTER_VALIDATE_EMAIL))
	{
		$message="Hi Admin..<p>".$usernm." has sent a query having email id as ".$usermail." </p><p>Phone No. is : ".$userphn."</p>";
		
		$message_user="Hi ".$usernm."<p> Thank you so much for your valuable Feedback. <br> Our Support team will get back to you ASAP.</p><p>Have a great day ahead.</p>";
		
		
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= 'From: <support@healthcare.com>' . "\r\n";

		if(mail('jhini.mehta@gmail.com','Query for Healthcare',$message,$headers ))
		{
		mail($usermail,'Reply from Health Care Template Team',$message_user,$headers );
		
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