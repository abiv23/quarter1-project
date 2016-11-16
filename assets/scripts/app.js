$(document).ready(function() {
    $('button').click(submitButtonClicked);
})

function submitButtonClicked(event) {
    event.preventDefault();
    console.log('click handler working!');
    var name = $('.team').val()
    var Team = $('.teamText1')
    Team.append('<div class="col m6"><div class="card blue-grey"><div class="card-content white-text"><span class="card-title scoreBoard1"><p>' + $('.team').val().toUpperCase() + ' Team Crimes: </p><span>');
    $.get("http://nflarrest.com/api/v1/team/search/?term=" + name, useLookUp)
    console.log('this was run the first time');
}

function useLookUp(data) {
    $('button').off('click', submitButtonClicked);
    $('button').html('compare teams');
    $('button').on('click', compareClicked);
    var codeLookUp = data[0].team_code;
    $.get("http://nflarrest.com/api/v1/team/arrests/" + codeLookUp, displayPlayers)
    $.get("http://nflarrest.com/api/v1/team/topCrimes/" + codeLookUp, displayTeam)
}

function displayPlayers(data) {
    var playerText = $('.outputPlayer')
    playerText.append('<div class="col m4"></div><h5 class="col m5">Player Arrest Details: </h5></div>');
    for (var i = 0; i < data.length; i++) {
        var Name = ('<div class="col m5"><div class="card blue-grey"><div class="card-content white-text"><span class="card-title">' + data[i].Name + '</span><p class="player_name">Date: ' + data[i].Date + '</p><p>Charge: ' + data[i].Category + '</p><p>Details: ' + data[i].Description + '</p></div></div></div></div>')
        playerText.append(Name);
    }
    $('.hero-label').text('Compare to your Team');
    $('.team').attr("placeholder", "Enter your Favorite Team to see the Moral Scoreboard");
}

function displayTeam(data) {
    for (var i = 0; i < data.length; i++) {
      var teamCrimes = ('<p>' + data[i].Category + ': ' + data[i].arrest_count + '</p>')
      $('.scoreBoard1').append(teamCrimes);
    }
}

function compareClicked() {
  event.preventDefault();
  console.log('second click listener working!');
  var name = $('.team').val();
  var Team = $('.teamText1')
  Team.append('<div class="col m6"><div class="card blue-grey"><div class="card-content white-text"><span class="card-title scoreBoard1"><p>' + $('.team').val().toUpperCase() + ' Team Crimes: </p><span>');
  $.get('http://nflarrest.com/api/v1/team/search/?term=' + name, useLookUp);
  $('button').off('click', compareClicked);
  $('button').html('Reset');
  $('button').on('click', function(){
  $('main').reset();
  })
}

function useLookUp2(data) {
    var codeLookUp = data[0].team_code;
    $.get("http://nflarrest.com/api/v1/team/topCrimes/" + codeLookUp, displayTeam2)
}

function displayTeam2(data) {
  for (var i = 0; i < data.length; i++){
    var teamCrimes = ('<p>' + data[i].Category + ': ' + data[i].arrest_count + '</p>')
    $('.scoreBoard2').append(teamCrimes);
  }
  $('.hero-label').text('The Moral Scoreboard');
}
