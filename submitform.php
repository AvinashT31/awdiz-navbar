<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    // Assuming you've added 'name' attributes to your HTML inputs
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Server-side Validation (simplified)
    if(empty($name) || empty($phone) || empty($email) || empty($message)) {
        // Handle error - perhaps redirect back to form or show an error message
        exit;
    }

    // Send email to you
    $to = 'thoratavinash446@gmail.com';
    $subject = 'New Form Submission';
    $body = "Name: $name\nPhone: $phone\nEmail: $email\nMessage: $message";
    mail($to, $subject, $body, "From: $email");

    // Send 'Thank You' email to user
    $userSubject = "Thank You for Your Submission";
    $userMessage = "Hello $name,\n\nThank you for reaching out to us. We will get back to you soon.";
    mail($email, $userSubject, $userMessage, 'From: your-email@example.com');

    // Redirect to Thank You page
    header('Location: thankyou.html');
    exit;
}
?>
