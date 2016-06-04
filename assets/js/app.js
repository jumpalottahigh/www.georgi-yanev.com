$(document).ready(function() {

  //Sample of the data model coming from Firebase
  // var skillData = [{
  //   name: "JavaScript",
  //   type: "Language",
  //   url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  //   experience: "5 years"
  // }, {
  //   name: "jQuery",
  //   type: "Framework",
  //   url: "https://jquery.com/",
  //   experience: "3 years"
  // }, {
  //   name: "HTML5",
  //   type: "Markup language",
  //   url: "http://www.w3schools.com/html/html5_intro.asp",
  //   experience: "5 years"
  // }];

  //Init Firebase
  var config = {
    apiKey: "AIzaSyD5vdx8pXmflOuMBh3Ddg7rWrf_TU0lFFg",
    authDomain: "project-7617554044683473970.firebaseapp.com",
    databaseURL: "https://project-7617554044683473970.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);

  //Get DB hooks
  //Skills and CV data
  var fbRef_skillData = firebase.database().ref('skillData');
  var skillData = '';
  //Docs and publications
  var fbRef_Docs = firebase.database().ref('docs');
  var docsData = '';

  //
  //ANALYTICS
  //
  //Skill tags engagement measurement
  var skillTagInteractionGA = function() {
    ga('send', {
      hitType: 'event',
      eventAction: 'click',
      eventCategory: 'Skill Tag Filter Click',
      eventLabel: 'Skill Tag Interaction'
    });
  };

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

  //Populate docs
  var populateDocs = function() {
    var constructor = '';

    //Acending order
    // for (var doc = 0; doc < docsData.length; doc++) {
    //Descending order
    for (var doc = docsData.length; doc--;) {
      constructor += '<div class="col-xs-12 col-sm-6 col-md-4"><div class="card card-block">';
      constructor += '<h4 class="card-title">' + docsData[doc].title + '</h4>';
      constructor += '<p class="card-text text-muted m-b-0">/' + docsData[doc].type + ', ' + moment(docsData[doc].date).format('Do MMM YYYY') + '/</p>';
      constructor += '<p class="card-text text-muted">' + docsData[doc].author + '</p>';
      constructor += '<p class="card-text text-xs-left">' + docsData[doc].content + '</p>';
      constructor += '<a href="' + docsData[doc].url + '" class="btn btn-primary" target="_blank">' + docsData[doc].action + '</a>';
      //The card has two action buttons
      // if (docsData[doc].url2) {
      //   constructor += '<a href="' + docsData[doc].url2 + '" class="btn btn-primary m-l-1" target="_blank">' + docsData[doc].action2 + '</a>';
      // }
      constructor += '</div></div>';
    }

    $('#outputDocs').html(constructor);
  };

  //Get CV and index page data from Firebase
  fbRef_skillData.on('value', function(snap) {
    skillData = snap.val();
    //Populate UI elements with data
    //Skill tags section
    if ($('#skill-tags')) {
      //Remove loader
      $('.loader').remove();
      populateSkillTags();
    }
    //Skills and experience section
    if (document.getElementById('CV')) {
      populateResumeSKills();
      populateResumeExperience();
    }

    //Init tooltips
    $('[data-toggle="tooltip"]').tooltip({
      html: true
    });
    //Init popovers
    $('[data-toggle="popover"]').popover({
      html: true
    });
    //Make popovers dismissable so less annoying
    $('.popover-dismiss').popover({
      trigger: 'focus'
    });
  });

  //Get docs data from Firebase
  fbRef_Docs.on('value', function(snap) {
    docsData = snap.val();

    //Populate UI with data
    if ($('#outputDocs')) {
      populateDocs();
    }
  });


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

  //Constucts dynamically the language experience section
  var populateResumeExperience = function() {
    var constructor = '';

    //Itirate all skills and get the languages and their experience
    for (var item in skillData) {
      if (skillData[item].type == 'Language') {
        constructor += '<li><span class="text-primary">' + skillData[item].name + '</span>, ';
        constructor += skillData[item].experience + '</li>';
      }
    }

    //Populate resume skills section
    $('#outputResumeExperience').html(constructor);
  };

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

    //Send GA interaction data
    skillTagInteractionGA();
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
          title: 'Achievement earned!',
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
