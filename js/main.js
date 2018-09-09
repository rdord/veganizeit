function headingMouseOverHandler(e) {
    e.target.textContent = 'VEGANIT';
}
function headingMouseOutHandler(e) {
    e.target.textContent = 'VEGANYT';
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

document.addEventListener('DOMContentLoaded', function () {
    let headingWords = document.querySelectorAll('.vy-heading span');
    headingWords.forEach(word => word.addEventListener('mouseover', headingMouseOverHandler));
    headingWords.forEach(word => word.addEventListener('mouseout', headingMouseOutHandler));

    let totalVids = 2489;
    // let embed = document.getElementById('vy-video__embed');
    // embed.src = `//www.youtube.com/embed/videoseries?list=PLszeRFrbboBASL8JEvt_jztJyXaXHMf8-&rel=0&autoplay=1&mute=1&index=${getRandomInt(0, totalVids)}`;
});




  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  // This is a protocol-relative URL as described here:
  //     http://paulirish.com/2010/the-protocol-relative-url/
  // If you're testing a local page accessed via a file:/// URL, please set tag.src to
  //     "https://www.youtube.com/iframe_api" instead.
  tag.src = "//www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  var isUnMuted = false;
  window.onYouTubeIframeAPIReady = function() {
      player = new YT.Player('player', {
          // videoId: 'player',
          playerVars: {
              'width': 853,
              'height': 480,
              'list': 'PLszeRFrbboBASL8JEvt_jztJyXaXHMf8-',
              'listType': 'playlist',
              'rel': 0,
              // 'autoplay': 1,
              'index': getRandomInt(0, 2491),
              // 'modestbranding': 1,
              // 'showinfo': 0,
              'modestbranding': 1
          },
          events: {
              'onReady': function() {
                  // player.mute();
                  player.playVideo();
                  player.setVolume(100);
              },
              'onStateChange': function () {
                  // if (player.isMuted() && player.getPlayerState() == 2 && !isUnMuted) {
                  //     player.unMute();
                  //     player.playVideo();
                  //     isUnMuted = true;
                  // }
              }
          }
      });
  }

  // function onYouTubeIframeAPIReady() {
  //   var player;
  //   player = new YT.Player('player', {
  //     videoId: 'M7lc1UVf-VE',
  //     playerVars: { 'autoplay': 1, 'controls': 0 },
  //     events: {
  //       'onReady': onPlayerReady,
  //       'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
  //       'onStateChange': onPlayerStateChange,
  //       'onError': onPlayerError
  //     }
  //   });
  // }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.mute();
  }
