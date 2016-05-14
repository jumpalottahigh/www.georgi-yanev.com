$(document).ready(function() {

  //All skill data: name, type, url, experience
  var skillData = [{
    name: "JavaScript",
    type: "language",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    experience: "5 years"
  }, {
    name: "jQuery",
    type: "framework",
    url: "https://jquery.com/",
    experience: "3 years"
  }, {
    name: "HTML5",
    type: "markup language",
    url: "http://www.w3schools.com/html/html5_intro.asp",
    experience: "5 years"
  }, {
    name: "CSS3",
    type: "language",
    url: "http://www.w3schools.com/css/default.asp",
    experience: "5 year"
  }, {
    name: "Atom",
    type: "IDE/Code Editor",
    url: "https://atom.io/",
    experience: "1 year"
  }, {
    name: "Sublime Text 3",
    type: "IDE/Code Editor",
    url: "https://www.sublimetext.com/3",
    experience: "2 years"
  }, {
    name: "Waypoints",
    type: "framework",
    url: "http://imakewebthings.com/waypoints/",
    experience: "5 months"
  }, {
    name: "Intro.js",
    type: "framework",
    url: "http://introjs.com/",
    experience: "2 months"
  }];

  //Get all skill tags
  var populateSkillTags = function() {
    //Itirate the tags
    for (var tag in skillData) {
      var rotate = 0;
      var zindex = 0;
      var transformString = '';

      //Create tag nodes
      var element = document.createElement("a");
      var elText = document.createTextNode(skillData[tag].name);
      element.appendChild(elText);
      //Set up attributes
      element.setAttribute("class", "skillTag");
      element.setAttribute("tabindex", "0");
      //Add pop overs
      element.dataset.toggle = "popover";
      element.dataset.trigger = "focus";
      element.dataset.placement = "bottom";
      element.dataset.title = skillData[tag].type + " <a target='_blank' href='" + skillData[tag].url + "'><i class='fa fa-link'></i></a>";
      element.dataset.content = "XP: " + skillData[tag].experience;

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
  populateSkillTags();

  //Init popovers
  $('[data-toggle="popover"]').popover({
    html: true
  });
  //Make popovers dismissable so less annoying
  $('.popover-dismiss').popover({
    trigger: 'focus'
  });

  //TODO
  //Make the bottom section also get populated from the main skill data object

});
