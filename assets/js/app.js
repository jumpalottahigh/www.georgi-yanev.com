$(document).ready(function() {

  //All skill data: name, type, url, experience
  var skillData = [{
    name: "JavaScript",
    type: "Language",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    experience: "5 years"
  }, {
    name: "jQuery",
    type: "Framework",
    url: "https://jquery.com/",
    experience: "3 years"
  }, {
    name: "HTML5",
    type: "Markup language",
    url: "http://www.w3schools.com/html/html5_intro.asp",
    experience: "5 years"
  }, {
    name: "XML",
    type: "Markup language",
    url: "http://www.w3schools.com/xml/",
    experience: "3 years"
  }, {
    name: "Markdown",
    type: "Markup language",
    url: "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet",
    experience: "1 year"
  }, {
    name: "CSS3",
    type: "Language",
    url: "http://www.w3schools.com/css/default.asp",
    experience: "5 year"
  }, {
    name: "Atom",
    type: "IDE/Code Editor",
    url: "https://atom.io/",
    experience: "1 year"
  }, {
    name: "WebStorm",
    type: "IDE/Code Editor",
    url: "https://www.jetbrains.com/webstorm/",
    experience: "1 year"
  }, {
    name: "PyCharm",
    type: "IDE/Code Editor",
    url: "https://www.jetbrains.com/pycharm/",
    experience: "1 year"
  }, {
    name: "Android Studio",
    type: "IDE/Code Editor",
    url: "http://developer.android.com/tools/studio/index.html",
    experience: "1 year"
  }, {
    name: "Sublime Text 3",
    type: "IDE/Code Editor",
    url: "https://www.sublimetext.com/3",
    experience: "2 years"
  }, {
    name: "Waypoints",
    type: "Framework",
    url: "http://imakewebthings.com/waypoints/",
    experience: "5 months"
  }, {
    name: "Intro.js",
    type: "Framework",
    url: "http://introjs.com/",
    experience: "2 months"
  }, {
    name: "Handlebars.js",
    type: "Framework",
    url: "http://handlebarsjs.com/",
    experience: "6 months"
  }, {
    name: "Moments.js",
    type: "Framework",
    url: "http://momentjs.com/",
    experience: "3 months"
  }, {
    name: "SQL",
    type: "Language",
    url: "http://www.w3schools.com/sql/",
    experience: "3 years"
  }, {
    name: "PHP",
    type: "Language",
    url: "http://php.net/",
    experience: "2 year"
  }, {
    name: "Bootstrap 3",
    type: "Framework",
    url: "http://getbootstrap.com/",
    experience: "2 years"
  }, {
    name: "Bootstrap 4",
    type: "Framework",
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
    type: "Tools",
    url: "https://git-scm.com/",
    experience: "3 years"
  }, {
    name: "Trello",
    type: "Tools",
    url: "https://www.trello.com/",
    experience: "1 year"
  }, {
    name: "JIRA",
    type: "Tools",
    url: "https://www.jira.com/",
    experience: "1 year"
  }, {
    name: "Agile",
    type: "Methodologies",
    url: "http://agilemethodology.org/",
    experience: "1 year"
  }, {
    name: "Node.js",
    type: "Framework",
    url: "https://nodejs.org/en/",
    experience: "2 years"
  }, {
    name: "NPM",
    type: "Tools",
    url: "https://www.npmjs.com/",
    experience: "2 years"
  }, {
    name: "Gulp.js",
    type: "Tools",
    url: "http://gulpjs.com/",
    experience: "1 year"
  }, {
    name: "Grunt.js",
    type: "Tools",
    url: "http://gruntjs.com/",
    experience: "2 years"
  }, {
    name: "Firebase",
    type: "API",
    url: "https://www.firebase.com/",
    experience: "4 months"
  }, {
    name: "MongoDB",
    type: "Framework",
    url: "https://docs.mongodb.com",
    experience: "2 months"
  }, {
    name: "SQL",
    type: "Language",
    url: "http://www.w3schools.com/sql/",
    experience: "2 years"
  }, {
    name: "Python 3",
    type: "Language",
    url: "https://docs.python.org/3/",
    experience: "1 year"
  }, {
    name: "Material Design Lite",
    type: "Framework",
    url: "https://getmdl.io/",
    experience: "2 years"
  }, {
    name: "Hover.css",
    type: "Library",
    url: "http://ianlunn.github.io/Hover/",
    experience: "1 year"
  }, {
    name: "Animate.css",
    type: "Library",
    url: "https://daneden.github.io/animate.css/",
    experience: "1 year"
  }, {
    name: "Slack",
    type: "Tools",
    url: "https://slack.com",
    experience: "1 year"
  }, {
    name: "Assemble",
    type: "Framework",
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
  }, {
    name: "Java",
    type: "Language",
    url: "https://docs.oracle.com/javase/7/docs/api/",
    experience: "3 years"
  }, {
    name: "Unity C#",
    type: "Language",
    url: "http://docs.unity3d.com/540/Documentation/Manual/",
    experience: "3 years"
  }, {
    name: "Blender",
    type: "3D modeling",
    url: "https://www.blender.org/",
    experience: "3 years"
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
      element.dataset.type = skillData[tag].type;
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

      //Append the element to skill pool
      document.getElementById('outputSkillTags').appendChild(element);
    }
  };

  //Collect and populate the resume section with the correct skills
  var populateResumeSKills = function() {
    var itemTypes = [];
    var constructor = '';

    //Itirate all skills and construct all types
    for (var item in skillData) {
      if (itemTypes.indexOf(skillData[item].type) < 0) {
        itemTypes.push(skillData[item].type);
      }
    }

    //Itirate all types and for each type all items in skills
    for (var i in itemTypes) {
      //Append the type heading
      constructor += '<h6 class="text-primary">' + itemTypes[i] + '</h6><p>';
      var firstItem = true;
      for (var j in skillData) {
        //Append all the items that match that type to that sub section
        if (itemTypes[i] == skillData[j].type) {
          //Add commas before all elements except first
          if (!firstItem) {
            constructor += ', ';
          }
          constructor += skillData[j].name;
          firstItem = false;
        }
      }
      //Close the paragraph
      constructor += '</p>';
    }

    //Populate resume skills section
    $('#outputResumeSkills').html(constructor);
  };

  //Update UI skill tags
  populateSkillTags();
  populateResumeSKills();

  //Init popovers
  $('[data-toggle="popover"]').popover({
    html: true
  });
  //Make popovers dismissable so less annoying
  $('.popover-dismiss').popover({
    trigger: 'focus'
  });

  //Filter skill tags by type
  $('.btn-tag-filter').click(function() {
    //Get current filter
    var filter = $(this).data("filter-value");
    //If same button is pressed twice, restore tags to original state
    if ($('.filter-elevated').data('type') != filter) {
      $('.skillTag').removeClass("filter-elevated filter-out");
    }
    //Toggle correct filtered tags state
    $('.skillTag[data-type="' + filter + '"]').toggleClass("filter-elevated");
    $('.skillTag').not('[data-type="' + filter + '"]').toggleClass("filter-out");
  });

  //
  //SECRETS
  //
  //Logo easter egg
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
