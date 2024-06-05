function ready() {

  document.querySelectorAll('.video').forEach(video => {

    var video_element = video.querySelector('video');
    var video_event = video_element.dataset.event;

    video.querySelector('button').addEventListener('click', function() {

      if(video_element.paused) {

        video_element.play();

      } else {

        video_element.pause();

      }

    });

    video_element.addEventListener('play', (e) => {

      video.classList.add('video--playing');

      e.target.setAttribute('controls', 'controls');

    });

    video_element.addEventListener('ended', (e) => {

      video.classList.remove('video--playing');

      e.target.removeAttribute('controls');
      e.target.load();

    });

  });

}

export { ready };
