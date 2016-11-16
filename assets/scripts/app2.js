$(document).ready(function() {
    $('button').click(submitButtonClicked);
})

function submitButtonClicked(event) {
    event.preventDefault();
    var name = $('.team').val()
    var Team = $('.teamText1')
    Team.append('<div class="col m6"><div class="card blue-grey"><div class="card-content white-text"><span class="card-title scoreBoard1"><p>' + $('.team').val().toUpperCase() + ' Team Crimes: </p><span>');
    $.get("http://nflarrest.com/api/v1/team/search/?term=" + name, useLookUp)
    $('.team').val('');
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
    playerText.append('<div class="col m4"></div><h5 id="playerdata" class="col m5">Player Arrest Details: </h5></div>');
    $('.playerLink').append('<h6 class="center"><a href="#playerdata">See Player Data</a></h6>')
    for (var i = 0; i < data.length; i++) {
        var Name = ('<div class="col m5"><div class="card blue-grey"><div class="card-content white-text"><span class="card-title">' + data[i].Name + '</span><p class="player_name">Date: ' + data[i].Date + '</p><p>Charge: ' + data[i].Category + '</p><p class="truncate details details' + [i] + '">Details: ' + data[i].Description + '</p></div></div></div></div>')
        playerText.append(Name);
        $('.details' + [i]).on('click', removeTruncate)
    }
    $('.hero-label').text('Compare Teams');
    $('.team').attr("placeholder", "Next enter your Favorite Team");
}

function removeTruncate() {
    $(this).removeClass('truncate');
    $(this).off('click', removeTruncate);
    $(this).on('click', addTruncate);
}

function addTruncate() {
    $(this).addClass('truncate');
    $(this).off('click', addTruncate);
    $(this).on('click', removeTruncate);
}

function displayTeam(data) {
    for (var i = 0; i < data.length; i++) {
        var teamCrimes = ('<p>' + data[i].Category + ': ' + data[i].arrest_count + '</p>')
        $('.scoreBoard1').append(teamCrimes);
    }
}

function compareClicked() {
    event.preventDefault();
    var name = $('.team').val();
    var Team = $('.teamText1')
    Team.append('<div class="col m6"><div class="card blue-grey"><div class="card-content white-text"><span class="card-title scoreBoard2"><p>' + $('.team').val().toUpperCase() + ' Team Crimes: </p><span>');
    $.get('http://nflarrest.com/api/v1/team/search/?term=' + name, useLookUp2);
    $('button').off('click', compareClicked);
    $('button').html('Reset');
    $('button').on('click', reset);
    $('.team').val('');
}

function reset() {
    window.location.reload(true);
}

function useLookUp2(data) {
    var codeLookUp = data[0].team_code;
    $.get("http://nflarrest.com/api/v1/team/topCrimes/" + codeLookUp, displayTeam2)
}

function displayTeam2(data) {
    for (var i = 0; i < data.length; i++) {
        var teamCrimes = ('<p>' + data[i].Category + ': ' + data[i].arrest_count + '</p>')
        $('.scoreBoard2').append(teamCrimes);
    }
    $('.hero-label').text('The Moral Scoreboard');
    $('.team').hide();
}

// $(.scoreboard1)
//
// $(.scoreboard2)
