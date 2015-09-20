<?php
        session_start();

        if( !isset($_POST['user']) )
                    include "login_form.html";
            else {
                    $user = $_POST['user'];
                    $pwd = $_POST['pass'];
                    //  Connecting to database and using HTTP session
                    mysql_pconnect("mysql.metropolia.fi:3306", $user, $pwd)
                                   or die("Database connection failed : ".mysql_error());
                    $_SESSION['u'] = $user;
                    $_SESSION['p'] = $pwd; 
                    echo "<p>MySQL connection successful!</p>";
                    header("Location: http://users.metropolia.fi/~georgiy/place_saver/index.php");
                    exit;
            }
?>
<html>
    <head>
        <title>PlaceSaver</title>
        <meta name="author" content="Georgi Yanev">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="jquery.mobile-1.3.2.min.css">
        <link rel="stylesheet" href="custom-styles.css">
        <script type="text/javascript" src="jquery-1.10.2.min.js"></script>
        <script type="text/javascript" src="jquery.mobile-1.3.2.min.js"></script>
        <script type="text/javascript" src="gmap-script.js"></script>
    </head>
    <body>
        <!-- Will be populated by php -->
    </body>
</html>