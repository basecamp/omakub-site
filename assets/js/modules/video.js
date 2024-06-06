function ready() {

  const video = document.querySelector('.video');
  const videoElement = video.querySelector('video');
  const videoEvent = videoElement.dataset.event;

  video.querySelector('button').addEventListener('click', () => {

    if(videoElement.paused) {

      videoElement.play();

    } else {

      videoElement.pause();

    }

  });

  videoElement.addEventListener('play', (e) => {

    if(window.plausible && videoEvent && e.target.currentTime == 0) plausible('Video Start', {props: {title: videoEvent}});

    video.classList.add('video--playing');

    e.target.setAttribute('controls', 'controls');

  });

  videoElement.addEventListener('ended', (e) => {

    if(window.plausible && videoEvent) plausible('Video Finish', {props: {title: videoEvent}});

    video.classList.remove('video--playing');

    e.target.removeAttribute('controls');
    e.target.load();

  });

}

export { ready };
