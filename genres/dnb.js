// loader

function preloader() {
	$(() => {

		setInterval(() => {

			let preloader = $('#preloader');

			preloader.css('position', 'absolute')
			preloader.css('opacity', 0);
			preloader.css('transition', 0.4);
			preloader.css('visibility', 'hidden');
			preloader.css('visibility', 0, 1);

		}, 1300);

	});
}

preloader();

// Spoiler

$('.block__spoiler').css({ 'display': 'none' });
$('.block__title').click(function () {
	$(this).next('.block__spoiler').slideToggle(500)
});

// Audio Player

const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

// Update song details
function loadSong(song) {
	cover.src = '../images/ncs10.jpg';
}

// Play song
function playSong() {
	musicContainer.classList.add('play');
	audio.play();
}

// Pause song
function pauseSong() {
	musicContainer.classList.remove('play');
	audio.pause();
}

// Update progress bar
function updateProgress(e) {
	const { duration, currentTime } = e.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
	const width = this.clientWidth;
	const clickX = e.offsetX;
	const duration = audio.duration;

	audio.currentTime = (clickX / width) * duration;
}


// Event listeners
playBtn.addEventListener('click', () => {
	const isPlaying = musicContainer.classList.contains('play');

	if (isPlaying) {
		pauseSong();
	} else {
		playSong();
	}
});

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// animation on video

$('.cont').click(function () {
	let videoAnim = $('.video__anim');

	videoAnim.css('display', 'block');

	videoAnim.css('transition', '0.4s');
	videoAnim.css('opacity', 0);

});

