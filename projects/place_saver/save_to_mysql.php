<?php
	session_start();
	header("Content-Type: text/plain");

	if( isset($_SESSION['u']) ) {
		$user = $_SESSION['u'];
		$pwd = $_SESSION['p'];
		$table = "place_saver";
		//Hopefully we are already connected to Metropolia mySQL
		mysql_pconnect("mysql.metropolia.fi:3306", $user, $pwd)
			or die("DB connection failed".mysql_error());
		mysql_select_db($user) or die("DB $user not available: ".mysql_error());
		
		//Getting POST parameters
		$name = $_POST['name'];
		$lat = $_POST['lat'];
		$lng = $_POST['lng'];
		$cat = $_POST['cat'];
		$date = $_POST['date'];

		if(mysql_num_rows(mysql_query("SHOW TABLES LIKE '".$table."'"))==1){
			//SQL INSERT
			$sql = "INSERT INTO ".$table." (Name, Lat, Lng, Cat, Date) VALUES('$name','$lat','$lng','$cat','$date')";
			mysql_query($sql) or die("SQL Insert failed: ".mysql_error());
			header("Location: http://users.metropolia.fi/~georgiy/place_saver/index.php");
			exit;
		} else {
			//lets create the table
			mysql_query("CREATE TABLE ".$table." (Id INTEGER AUTO_INCREMENT PRIMARY KEY,
		      Name VARCHAR(50),
		      Lat FLOAT(10,6) NOT NULL,
		      Lng FLOAT(10,6) NOT NULL,
		      Cat VARCHAR(50),
			  Date VARCHAR(60))");

			//After table is done, insert first entry
			$sql = "INSERT INTO ".$table." (Name, Lat, Lng, Cat, Date) VALUES('$name','$lat','$lng','$cat','$date')";
			mysql_query($sql) or die("SQL Insert failed: ".mysql_error());
			header("Location: http://users.metropolia.fi/~georgiy/place_saver/index.php");
			exit;
		}
	} else {
		echo "You have to log in first!";
	}
?>