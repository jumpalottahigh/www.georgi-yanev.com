<?php
  session_start();
?>
<!DOCTYPE html>
<html>
  <head>
    <meta name="author" content="Georgi Yanev">
    <meta charset="UTF-8">
    <title>Place Saver</title>
    <link rel="stylesheet" href="jquery.mobile-1.3.2.min.css">
    <link rel="stylesheet" href="custom-styles.css">
    <script type="text/javascript" src="jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="jquery.mobile-1.3.2.min.js"></script>
    <script type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZ3yElJmgjV6VGGCEvc7wQQf-SuFEgRpM&sensor=true">
    </script>
    <script type="text/javascript" src="gmap-script.js"></script>
  </head>
  <body>
    <div id="mainpage" data-role="page" data-theme="a">
      <div data-role="header">
        <a href="#help" data-rel="popup" data-transition="pop" data-theme="b" data-type="button" data-icon="info">Help</a>
        <div id="help" data-role="popup">
          <h2>Welcome to Place Saver</h2>
          <p>To get started select an icon and click on the map. Name your place.<br>
          That's it. Your place is saved on the current device's browser</p>
          <p>If you have a metropolia mySQL account you can log in<br>
          and save your places there. More functionality coming soon™.</p>
          <p>Your places will then be saved in table "places" in mySQL DB</p>
        </div>
        <h2>Place Saver&trade;v0.97</h2>
        <input id="address" type="search" value="Helsinki">
        <input data-icon="search" id="find" type="button" value="Search the World">
        <input data-icon="minus" id="hideMarkers" type="button" value="Hide All Places From Map" disabled>
        <input data-icon="delete" id="deleteLS" type="button" value="Delete ALL Locally Saved Places">
        <input data-icon="star" type="button" value="Load Places from mySQL" disabled>
        <a href="login.php" data-type="button" data-icon="gear" data-iconpos="right" data-ajax="false" class="ui-btn-right">Login to Metropolia mySQL Server</a>
      </div>
      <br>

      <div data-role="content">
        <div id="map-canvas"></div>
        <div id="status">Select an icon and place it on the map: </div>

        <div id="iconMenu">
          <a href="#" class="imgBtn" data-role="button" data-inline="true" onClick="penguinIcon()"><img src="imgs/penguin.png" alt="penguin">Penguin</a>
          <a href="#" class="imgBtn" data-role="button" data-inline="true" onClick="sheepIcon()"><img src="imgs/sheep.png" alt="sheep">Sheep</a>
          <a href="#" class="imgBtn" data-role="button" data-inline="true" onClick="businessIcon()"><img src="imgs/business.png" alt="business">Business</a>
          <a href="#" class="imgBtn" data-role="button" data-inline="true" onClick="funIcon()"><img src="imgs/fun.png" alt="fun">Fun</a>
          <a href="#" class="imgBtn" data-role="button" data-inline="true" onClick="homeIcon()"><img src="imgs/home.png" alt="home">Home</a>
          <a href="#" class="imgBtn" data-role="button" data-inline="true" onClick="moneyIcon()"><img src="imgs/money.png" alt="money">Money</a>
          <a href="#" class="imgBtn" data-role="button" data-inline="true" onClick="musicIcon()"><img src="imgs/music.png" alt="music">Music</a>
          <a href="#" class="imgBtn" data-role="button" data-inline="true" onClick="relationshipIcon()"><img src="imgs/relationship.png" alt="relationship">Relationship</a>
          <a href="#" class="imgBtn" data-role="button" data-inline="true" onClick="schoolIcon()"><img src="imgs/school.png" alt="school">School</a>
          <a href="#" class="imgBtn" data-role="button" data-inline="true" onClick="vacationIcon()"><img src="imgs/vacation.png" alt="vacation">Vacation</a>
          <a href="#" class="imgBtn" data-role="button" data-inline="true" onClick="workIcon()"><img src="imgs/work.png" alt="work">Work</a>
        </div>

        <div class="clear"></div>
        <br>      
        <h2>Click 'Show List' and search among your saved places below</h2>
        <input id="showList" data-icon="bars" data-inline="true" type="button" value="Show List">
        <input id="hideList" data-icon="delete" data-inline="true" type="button" value="Hide List">
        <br><br>
        <ul id="list" data-role="listview" data-filter="true" data-filter-placeholder="Search your saved places" data-filter-theme="a">
        </ul>
        <br>
        <br>
        <input id="showSQL" data-icon="bars" data-inline="true" type="button" value="Show SQL block">
        <input id="hideSQL" data-icon="delete" data-inline="true" type="button" value="Hide SQL block">
        <div id="sql">
          <form data-ajax="false" action="save_to_mysql.php" method="POST">        
            <h2>Save this place to mySQL DB: </h2>
            <label for="placeTitle">Name: </label>
            <input id="placeTitle" name="name" type="text">
            <h2>Coordinates</h2>
            <label for="latitude">Latitude: </label>
            <input id="latitude" name="lat" type="text" required>
            <label for="longitude">Longitude: </label>
            <input id="longitude" name="lng" type="text" required><br>
            <h2>Category and Timestamp</h2>
            <span id="category"></span>
            <input id="cat" name="cat" type="text"><br>
            <input id="date" name="date" type="text"><br>
            <input data-icon="check" type="submit" value="Save">
          </form>
        </div>
        <br><br>
        <div>
          <h2>Recap:</h2>
          <ul>
            <li>HTML - 110 lines</li>
            <li>Css - 90 lines</li>
            <li>JS - 252 lines</li>
            <li>PHP and mySQL statements - 50 lines</li>
          </ul>
        </div>
      </div>
      <div data-role="footer">
        <a href="#info" data-rel="popup" data-transition="pop" data-theme="b" data-type="button" data-icon="info" class="ui-btn-left">Info</a>
        <div id="info" data-role="popup">
          <h2>Place Saver utilizes:</h2>
          <p>HTML5, CSS3, JavaScript<br>
          jQuery, jQuery Mobile, Google Maps API v3<br>
          PHP, mySQL, JSON, AJAX<br>
          <i>See you on the Fields of Justice!</i></p>
        </div>
        <h2>&copy; Place Saver 2013-2014 Georgi Yanev and Sofia Lindberg</h2>
      </div>
    </div>
  </body>
</html>