$(document).ready(function() {

  //Init Skill tags
  var skillTags = ["JavaScript", "HTML5", "CSS3", "jQuery", "Waypoints"];

  //Get all skill tags
  var getSkillTags = function() {
    //Gather all tags
    for (var tag in skillTags) {
      var rotate = 0;
      var zindex = 0;
      var transformString = '';

      var element = document.createElement("a");
      var elText = document.createTextNode(skillTags[tag]);
      element.appendChild(elText);
      element.setAttribute("class", "skillTag");
      element.setAttribute("href", "#CV");

      //Randomly rotate left or right
      Math.random() > 0.5 ? rotate = Math.random() * 10 : rotate = Math.random() * (-10);
      zindex = Math.floor(Math.random() * 100);
      transformString = "transform:rotateZ(" + rotate + "deg);-webkit-transform:rotateZ(" + rotate + "deg);-ms-transform:rotateZ(" + rotate + "deg);z-index:" + zindex;
      element.setAttribute("style", transformString);

      //Append the element
      document.getElementById('outputSkillTags').appendChild(element);
    }

  };

  //Update UI skill tags
  getSkillTags();

});
