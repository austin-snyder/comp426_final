<?php
$servername = "comp426.database.windows.net";

$connectionOptions = array(
    "Database" => "accountInformation", // update me
    "Uid" => "adsnyder", // update me
    "PWD" => "ADSunc2022!" // update me
);

// Create connection
$conn = sqlsrv_connect($serverName, $connectionOptions);

$insertTest = "INSERT INTO table_name VALUES (value1, value2, value3, ...);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>