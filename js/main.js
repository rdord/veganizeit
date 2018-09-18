function headingMouseOverHandler(e) {
    e.target.textContent = 'VEGANIT';
}
function headingMouseOutHandler(e) {
    e.target.textContent = 'VEGANYT';
}

function getRandomVidNumber() {
    fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=id&maxResults=0&playlistId=PLszeRFrbboBASL8JEvt_jztJyXaXHMf8-&key=AIzaSyDk8gwNe0f5Ue7uls-ir8U1Mj7UAjJvMeo')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let totalVids = JSON.stringify(data.pageInfo.totalResults)
        let videoIndex = Math.floor(Math.random() * totalVids);
        var player;
        var isUnMuted = false;

        window.onYouTubeIframeAPIReady = function() {
            player = new YT.Player('player', {
                playerVars: {
                    'width': 853,
                    'height': 480,
                    'list': 'PLszeRFrbboBASL8JEvt_jztJyXaXHMf8-',
                    'listType': 'playlist',
                    'rel': 0,
                    'index': videoIndex,
                    'modestbranding': 1,
                    'origin': 'http://veganyt.com'
                },
                events: {
                    'onReady': function() {
                        player.playVideo();
                        player.setVolume(100);
                    }
                }
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    let headingWords = document.querySelectorAll('.vy-heading span');
    headingWords.forEach(word => word.addEventListener('mouseover', headingMouseOverHandler));
    headingWords.forEach(word => word.addEventListener('mouseout', headingMouseOutHandler));    
});


var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
getRandomVidNumber();

