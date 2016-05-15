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
  }, {
    name: "Handlebars.js",
    type: "framework",
    url: "http://handlebarsjs.com/",
    experience: "6 months"
  }, {
    name: "Moments.js",
    type: "framework",
    url: "http://momentjs.com/",
    experience: "3 months"
  }, {
    name: "SQL",
    type: "language",
    url: "http://www.w3schools.com/sql/",
    experience: "3 years"
  }, {
    name: "PHP",
    type: "language",
    url: "http://php.net/",
    experience: "2 year"
  }, {
    name: "Bootstrap 3",
    type: "framework",
    url: "http://getbootstrap.com/",
    experience: "2 years"
  }, {
    name: "Bootstrap 4",
    type: "framework",
    url: "http://v4-alpha.getbootstrap.com/getting-started/introduction/",
    experience: "1 year"
  }, {
    name: "Facebook API",
    type: "API",
    url: "https://developers.facebook.com/docs/web",
    experience: "1 year"
  }, {
    name: "Twitch API",
    type: "API",
    url: "https://github.com/justintv/Twitch-API",
    experience: "1 year"
  }, {
    name: "Git",
    type: "tool",
    url: "https://git-scm.com/",
    experience: "3 years"
  }, {
    name: "Trello",
    type: "tool",
    url: "https://www.trello.com/",
    experience: "1 year"
  }, {
    name: "JIRA",
    type: "tool",
    url: "https://www.jira.com/",
    experience: "1 year"
  }, {
    name: "Agile",
    type: "methodologies",
    url: "http://agilemethodology.org/",
    experience: "1 year"
  }, {
    name: "Node.js",
    type: "library",
    url: "https://nodejs.org/en/",
    experience: "2 years"
  }, {
    name: "NPM",
    type: "tool",
    url: "https://www.npmjs.com/",
    experience: "2 years"
  }, {
    name: "Gulp.js",
    type: "tool",
    url: "http://gulpjs.com/",
    experience: "1 year"
  }, {
    name: "Grunt.js",
    type: "tool",
    url: "http://gruntjs.com/",
    experience: "2 years"
  }, {
    name: "Firebase",
    type: "framework",
    url: "https://www.firebase.com/",
    experience: "4 months"
  }, {
    name: "MongoDB",
    type: "framework",
    url: "https://docs.mongodb.com",
    experience: "2 months"
  }, {
    name: "SQL",
    type: "language",
    url: "http://www.w3schools.com/sql/",
    experience: "2 years"
  }, {
    name: "Python 3",
    type: "language",
    url: "https://docs.python.org/3/",
    experience: "1 year"
  }, {
    name: "Material Design Lite",
    type: "framework",
    url: "https://getmdl.io/",
    experience: "2 years"
  }, {
    name: "Hover.css",
    type: "library",
    url: "http://ianlunn.github.io/Hover/",
    experience: "1 year"
  }, {
    name: "Animate.css",
    type: "library",
    url: "https://daneden.github.io/animate.css/",
    experience: "1 year"
  }, {
    name: "Slack",
    type: "tool",
    url: "https://slack.com",
    experience: "1 year"
  }, {
    name: "Assemble",
    type: "framework",
    url: "http://assemble.io/",
    experience: "1 year"
  }, {
    name: "Liferay",
    type: "CMS",
    url: "http://liferay.com/",
    experience: "1 year"
  }, {
    name: "Wordpress",
    type: "CMS",
    url: "http://wordpress.org/",
    experience: "2 years"
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

  //TODO
  //Think of a way to either sort tags alphabetically or something else

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


  //Easter egg
  $('.logo').click(function() {
    var clickCount = localStorage.getItem("GY_egg") || 0;

    if (clickCount == 3) {
      //show easter egg -> flip page
      $('body').addClass("secret-flip").delay(3000).queue(function(next) {
        $(this).removeClass("secret-flip");
        next();
        //Set toast theme and delay and show achievement toast
        PNotify.prototype.options.styling = "bootstrap3";
        PNotify.prototype.options.delay = 4000;
        new PNotify({
          title: 'Achievement earner!',
          text: 'You found a secret! <br> Score: 1/1',
          type: 'success',
          icon: false
        });
      });


      //Update achivement score
      $('#easter-egg-score').text("Easter Egg Score: 1/1");
      $('#easter-egg-score').addClass("text-success");

      //reset click count
      localStorage.setItem("GY_egg", 0);
    } else {
      clickCount++;
      localStorage.setItem("GY_egg", clickCount);
    }
  });
});
