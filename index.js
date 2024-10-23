import { playList } from "./playlist.js";

const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');
const previous = document.getElementById('previous');
const next = document.getElementById('next');

let currentSongIndex = 0;

function loadSong(songIndex) {
    const song = playList[songIndex];
    audio.src = song.song; 
    document.getElementById('player__song').textContent = song.title; 
    document.getElementById('player__artist').textContent = song.artist; 
    document.getElementById('player__img').src = song.img;
}

play.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        play.classList.remove('bx-play');
        play.classList.add('bx-pause');
    } else {
        audio.pause();
        play.classList.remove('bx-pause');
        play.classList.add('bx-play');
    }
});
rewind.addEventListener('click', () => audio.currentTime -= 10);
forward.addEventListener('click', () => audio.currentTime += 10);
stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    play.classList.remove('bx-pause');
    play.classList.add('bx-play');
});


previous.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : playList.length - 1;
    loadSong(currentSongIndex);
    audio.play();
    play.classList.remove('bx-play');
    play.classList.add('bx-pause');
});


next.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex < playList.length - 1) ? currentSongIndex + 1 : 0;
    loadSong(currentSongIndex);
    audio.play();
    play.classList.remove('bx-play');
    play.classList.add('bx-pause');
});

loadSong(currentSongIndex);