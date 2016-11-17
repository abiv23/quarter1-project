$(document).ready(function() {
    $('button').click(submitButtonClicked);
})
var team1 = []
var team2 = []

function submitButtonClicked(event) {
    event.preventDefault();
    var name = $('.team').val()
    var Team = $('.teamText1')
    Team.append('<div class="col m6"><div class="card blue-grey"><div class="card-content white-text"><span class="card-title scoreBoard1"><p>' + $('.team').val().toUpperCase() + ' Team Crimes: </p><span>');
    $.get("http://nflarrest.com/api/v1/team/search/?term=" + name, useLookUp)
}

function useLookUp(data) {
    $('button').off('click', submitButtonClicked);
    $('button').html('Compare Teams');
    $('button').on('click', compareClicked);
    $('.team').val('');
    var codeLookUp = data[0].team_code;
    $.get("http://nflarrest.com/api/v1/team/arrests/" + codeLookUp, displayPlayers)
    $.get("http://nflarrest.com/api/v1/team/topCrimes/" + codeLookUp, displayTeam)
}

function displayPlayers(data) {
    var playerText = $('.outputPlayer')
    playerText.append('<div class="col m4"></div><h5 class="col m5" id="playerLink">Player Arrest Details: </h5></div>');
    $('.playerLink').append('<h6><a href="#playerLink">See Arrest Data by Player</a></h6>')
    for (var i = 0; i < data.length; i++) {
        var Name = ('<div class="col m5"><div class="card blue-grey"><div class="card-content white-text"><span class="card-title">' + data[i].Name + '</span><p class="player_name">Date: ' + data[i].Date + '</p><p>Charge: ' + data[i].Category + '</p><p class="truncate details details' + [i] + '">Details: ' + data[i].Description + '</p></div></div></div></div>')
        playerText.append(Name);
        $('.details' + [i]).on('click', removeTruncate)
    }
    $('.hero-label').text('Compare Teams');
    $('.team').attr("placeholder", "add your Favorite Team by Name or City...");
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
        team1.push([data[i].Category, data[i].arrest_count])
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
        team2.push([data[i].Category, data[i].arrest_count])
    }
    $('.hero-label').text('The Moral Scoreboard');
    $('.team').hide();
    displayScoreboard();
}


function displayScoreboard() {
    $('.scoreboard').append('<div class="col m12"><div class="card blue-grey"><div class="card-content white-text"><span class="card-title moralScoreboard"><p>You are Morally Supperior in the following areas:</p><span>')
    for (var i = 0; i < team1.length; i++) {
        for (var j = 0; j < team2.length; j++) {
            if (team1[i][0] === team2[j][0]) {
                if (team1[i][1] > team2[j][1]) {
                    $('.moralScoreboard').append('<p>' + team1[i][0] + '</p>')
                }
            }
        }
    }
}
