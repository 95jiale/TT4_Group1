<?php //authmain.php
$conn = mysqli_connect("localhost", "f32ee", "f32ee", "f32ee"); // may need to change mysqli_connect, need update id&pw!!
//backend based on backend

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    return;
}
session_start();

$userid = $_SESSION['CustomerLoadId']; // or CustomerId ?
$loanamount = $_POST['loan_amount']; // loan amount ?


$query ="SELECT CustomerLoanID FROM needtoedithere" ; //need insert DB table name
$result = mysqli_query($conn, $query); // may need to change mysqli_query , $conn is the connection
if (mysqli_num_rows($result) > 0)   
{    // output data of each row - for this case only 1 row
    while($row = mysqli_fetch_array($result))
    {
        echo "<br> Loan Amount: ". $row["load_amount"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?> 
