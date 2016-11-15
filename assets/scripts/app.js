$(document).ready(function() {
  $('form').submit(function(event){
    event.preventDefault();
    var name = $('.team').val();
    this.reset();
    $.get("http://nflarrest.com/api/v1/team/search/?term=" + name, UseLookUp)
    });
  })

function UseLookUp(data){
  var codeLookUp = data[0].team_code;
  $.get("http://nflarrest.com/api/v1/team/arrests/" + codeLookUp, displayPlayers)
  $.get("http://nflarrest.com/api/v1/team/topCrimes/" + codeLookUp, displayTeam)
}

function displayPlayers(data){
  var playerText = $('.outputPlayer')
  var Team = $('.teamText1')
  Team.append('<div class="row"><div class="col m6"><div class="card blue-grey"><div class="card-content white-text"><span class="card-title"><span>');
  playerText.append('<div class="col m4"></div><h5 class="col m5">Player Arrest Details:</h5></div>');
  for (var i = 0; i < data.length; i++){
    // var Name = ('<div class="col m3"><div class="card blue-grey"><div class="card-content white-text"><span class="card-title">' + data[i].Name + '</span><p class="player_name">Date: ' + data[i].Date + '</p><p>Charge: ' + data[i].Category + '</p><p>Details: ' + data[i].Description + '</p></div></div></div></div>')
    // var Category = ('<p>' + data[i].Category + '</p>')
    // var Description = ('<p>' + data[i].Description + '</p></div></div></div>')
    // var Year = ('<p class="player_name">' + data[i].Date + '</p>')
    playerText.append(Name);
  }
  $('.hero-label').text('Compare to your Team');
  $('.team').attr("placeholder", "Enter your Favorite Team to see the Moral Scoreboard");
  $('.submit').addClass('second-team');
}

function displayTeam(data){
  for (var i=0; i < data.length; i++){
    var Category = ('')
  }
}

//[{"Category":"DUI","arrest_count":"7"},{"Category":"Drugs","arrest_count":"5"},{"Category":"Gun","arrest_count":"3"},{"Category":"Assault","arrest_count":"3"},{"Category":"DUI, drugs","arrest_count":"2"},{"Category":"Reckless driving","arrest_count":"2"},{"Category":"Disorderly conduct","arrest_count":"2"},{"Category":"Solicitation","arrest_count":"1"},{"Category":"Resisting arrest","arrest_count":"1"},{"Category":"DUI, manslaughter","arrest_count":"1"},{"Category":"Theft","arrest_count":"1"},{"Category":"Attempted murder","arrest_count":"1"},{"Category":"Burglary, gun","arrest_count":"1"},{"Category":"Domestic violence","arrest_count":"1"},{"Category":"Theft, gun","arrest_count":"1"}]
