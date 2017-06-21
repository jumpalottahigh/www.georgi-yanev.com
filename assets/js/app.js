$(document).ready(function() {

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
  //Projetcs
  var fbRef_Projects = firebase.database().ref('projects');
  var projectsData = '';

  //Init lightbox
  $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox(
      {
        leftArrow: '<span style="text-decoration: none">&lt;</span>',
        rightArrow: '<span style="text-decoration: none">&gt;</span>',
        alwaysShowClose: false
      }
    );
  });

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
    //Reset HTML for a complete refresh
    $('#outputSkillTags').html('');
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

      var levelClass = '';
      if (skillData[tag].level < 33) {
        levelClass = 'bg-danger';
      } else if (skillData[tag].level < 66) {
        levelClass = 'bg-warning';
      } else {
        levelClass = 'bg-success';
      }
      element.dataset.content = "<div class='progress'><div class='progress-bar " + levelClass + "' role='progressbar' style='width: " + skillData[tag].level + "%' aria-valuenow='" + skillData[tag].level + "' aria-valuemin='0' aria-valuemax='100'>" + skillData[tag].level + "%</div></div>";
      element.dataset.content += "XP: " + skillData[tag].experience;

      //Randomly rotate left or right
      Math.random() > 0.5 ? rotate = Math.random() * 10 : rotate = Math.random() * (-10);
      zindex = Math.floor(Math.random() * 100);
      transformString = "transform:rotateZ(" + rotate + "deg);-webkit-transform:rotateZ(" + rotate + "deg);-ms-transform:rotateZ(" + rotate + "deg);z-index:" + zindex;
      element.setAttribute("style", transformString);

      //Append the element to skill pool
      $('#outputSkillTags').append(element);
    }

  };

  //Populate docs
  var populateDocs = function() {
    var constructor = '';

    //Loop in descending order
    for (var doc = docsData.length; doc--;) {
      constructor += '<div class="col-xs-12 col-sm-6 col-md-4 m-b-3"><div class="card card-block doc-card">';
      constructor += '<h4 class="card-title">' + docsData[doc].title + '</h4>';
      constructor += '<p class="card-text text-muted m-b-0">/' + docsData[doc].type + ', ' + moment(docsData[doc].date).format('Do MMM YYYY') + '/</p>';
      constructor += '<p class="card-text text-muted">' + docsData[doc].author + '</p>';
      constructor += '<p class="card-text text-xs-left">' + docsData[doc].content + '</p>';
      constructor += '<div><a href="' + docsData[doc].url + '" class="btn btn-primary" target="_blank">' + docsData[doc].action + '</a></div>';
      constructor += '</div></div>';
    }

    $('#outputDocs').html(constructor);
  };

  //Populate projects
  var populateProjects = function() {
    var constructor = '';

    //Loop in descending order
    for (var p = projectsData.length; p--;) {
      constructor += '<div class="col-xs-12 col-sm-6 m-b-3">';
      constructor += '<img class="card-img-top project-card-image" src="' + projectsData[p].img + '" alt="' + projectsData[p].title + '">';
      constructor += '<div class="card card-block project-card">';
      constructor += '<h4 class="card-title">' + projectsData[p].title + '</h4>';
      constructor += '<p class="card-text text-muted m-b-0">/' + projectsData[p].type + ', ' + moment(projectsData[p].date).format('Do MMM YYYY') + '/</p>';
      constructor += '<p class="card-text text-muted">' + projectsData[p].author + '</p>';
      constructor += '<p class="card-text text-xs-left">' + projectsData[p].content + '</p>';

      //CTA wrapper for flex columns
      constructor += '<div>';

      //Loop all actions if card has more actions
      for (var i in projectsData[p].buttons) {
        //Add correct icon based on button type
        var icon = '';
        var lightbox_constructor = '';
        if (projectsData[p].buttons[i].type == 'launch') {
          icon = '<i class="fa fa-external-link"></i>';
        } else if (projectsData[p].buttons[i].type == 'download') {
          icon = '<i class="fa fa-download"></i>';
        } else if (projectsData[p].buttons[i].type == 'github') {
          icon = '<i class="fa fa-github"></i>';
        } else if (projectsData[p].buttons[i].type == 'videos') {
          icon = '<i class="fa fa-video-camera"></i>';
          //Loop and append also img urls
          //Skip first img as its included in the main link
          for (var vid = 1; vid < projectsData[p].buttons[i].video_urls.length; vid++) {
            lightbox_constructor += '<a href="' + projectsData[p].buttons[i].video_urls[vid] + '" data-toggle="lightbox" data-gallery="' + projectsData[p].buttons[i].set_name + '" class="lightbox-item"></a>';
          }
        } else if (projectsData[p].buttons[i].type == 'images') {
          icon = '<i class="fa fa-picture-o"></i>';
          //Loop and append also img urls
          //Skip first img as its included in the main link
          for (var img = 1; img < projectsData[p].buttons[i].image_urls.length; img++) {
            lightbox_constructor += '<a href="' + projectsData[p].buttons[i].image_urls[img] + '" data-toggle="lightbox" data-gallery="' + projectsData[p].buttons[i].set_name + '" class="lightbox-item"></a>';
          }
        } else if (projectsData[p].buttons[i].type == 'docs') {
          icon = '<i class="fa fa-file-text"></i>';
        }

        //Create CTAs for each button
        //Only add target blank if not image and video
        if (projectsData[p].buttons[i].type == 'videos') {
          constructor += '<a href="' + projectsData[p].buttons[i].video_urls[0] + '" data-toggle="lightbox" class="btn btn-primary m-r-1"';
          constructor += 'data-gallery="' + projectsData[p].buttons[i].set_name + '">';
        } else if (projectsData[p].buttons[i].type == 'images') {
          constructor += '<a href="' + projectsData[p].buttons[i].image_urls[0] + '" data-toggle="lightbox" class="btn btn-primary m-r-1"';
          constructor += 'data-gallery="' + projectsData[p].buttons[i].set_name + '">';
        } else {
          constructor += '<a href="' + projectsData[p].buttons[i].url + '" class="btn btn-primary m-r-1"';
          constructor += 'target="_blank">';
        }

        //Check if the button will have text or it will be a standalone icon
        if (projectsData[p].buttons[i].text) {
          constructor += projectsData[p].buttons[i].text + ' ';
        }
        constructor += icon + lightbox_constructor + '</a>';

      }
      constructor += '</div></div></div>';
    }

    $('#outputProjects').html(constructor);
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
    if ($('#CV')) {
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

    if ($('#outputDocs')) {
      //Remove loader
      $('.loader').remove();
      //Populate UI with data
      populateDocs();
    }
  });

  //Get projects data from Firebase
  fbRef_Projects.on('value', function(snap) {
    projectsData = snap.val();

    //Populate UI with data
    if ($('#outputProjects')) {
      //Remove loader
      $('.loader').remove();
      populateProjects();
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
    //Reset the custom search field
    $('#customFilter').val('');
    $('.skillTag').show();
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

  //Custom filter by text
  $('#customFilter').on('keyup', function (e) {
    //Get and normalize current value of filter input
    var currentFilter = $(this).val().toLowerCase();
    //We have a keypress, hide all skillTags in prep for filtering
    $('.skillTag').hide().removeClass('filter-out filter-elevated');

    //Reset the field if user pressed ESC
    if (e.keyCode == 27) {
      $(this).val('');
      $('.skillTag').show();
    }

    //Do some actual filtering based on searched normalized value
    $('.skillTag').each(function(index, item) {
      if ($(item).text().trim().toLowerCase().indexOf(currentFilter) > -1) {
        //Show items
        $(item).show();
      }
    });
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
