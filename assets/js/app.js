$(document).ready(function() {

  //Init Skill tags
  var skillTags = ["JavaScript", "HTML5", "CSS3", "jQuery"];

  //Get all skill tags
  var getSkillTags = function() {
    var allTags = '';
    //Gather all tags
    for (var tag in skillTags) {
      allTags += skillTags[tag] + ' ';
    }

    return allTags;
  };

  //Update Skill tags UI
  $('#outputSkillTags').html(getSkillTags);

});
