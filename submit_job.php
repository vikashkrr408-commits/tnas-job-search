<?php
// Database Configuration
$servername = "localhost";
$username = "root"; // Aapka DB username
$password = "";     // Aapka DB password
$dbname = "tnas_db";

// Connection Create karein
$conn = new mysqli($servername, $username, $password, $dbname);

// Connection Check
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['submit'])) {
    $title = $_POST['job_title'];
    $company = $_POST['company_name'];
    $location = $_POST['location'];
    $desc = $_POST['description'];
    $salary = $_POST['salary'];

    // SQL Query data insert karne ke liye
    $sql = "INSERT INTO jobs (job_title, company_name, location, description, salary) 
            VALUES ('$title', '$company', '$location', '$desc', '$salary')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Job Posted Successfully!'); window.location.href='index.html';</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
$conn->close();
?>
