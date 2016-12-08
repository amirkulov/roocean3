$(function () {

    var paths = document.querySelectorAll('svg path');
    paths = Array.prototype.slice.call(paths);
    var props = {
        duration: 10000,
        fill: 'both',
        easing: 'ease-in-out',
        iterations: Infinity,
        direction: 'alternate'
    }
    var players = [3];

    players[0] = paths[0].animate([
        {transform: 'translate(-80px, 80px)'},
        {transform: 'translate(80px, 100px)'},
    ], props);
    players[1] = paths[1].animate([
        {transform: 'translate(-20px, 60px)'},
        {transform: 'translate(-80px, 70px)'},
    ], props);
    players[2] = paths[2].animate([
        {transform: 'translate(80px, 160px)'},
        {transform: 'translate(-80px, 170px)'},
    ], props);

    players[0].playbackRate = 1.2;
    players[2].playbackRate = .82;
});
//END READY