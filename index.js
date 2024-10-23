import { playList } from "./playlist.js";

const audio = document.getElementById('audio');
const play = document.getElementById('play');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const img = document.querySelector('.player__img');
const artist = document.querySelector('.player__artist');
const songTitle = document.querySelector('.player__song');

let currentSongIndex = 0; 


function loadSong(index) {
    audio.src = playList[index].song; 
    artist.textContent = playList[index].artist; 
    songTitle.textContent = playList[index].title;
    img.src = playList[index].img; 
    audio.load(); 
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

next.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % playList.length; 
    loadSong(currentSongIndex); 
    audio.play(); 
    play.classList.remove('bx-play');
    play.classList.add('bx-pause');
});

previous.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + playList.length) % playList.length; 
    loadSong(currentSongIndex); 
    audio.play(); 
    play.classList.remove('bx-play');
    play.classList.add('bx-pause');
});

loadSong(currentSongIndex);