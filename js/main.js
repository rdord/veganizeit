function headingMouseOverHandler(e) {
    e.target.textContent = 'VEGANIT';
}

function headingMouseOutHandler(e) {
    e.target.textContent = 'VEGANYT';
}

async function getRandomVidNumber() {
    const response = await fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=id&maxResults=0&playlistId=PLszeRFrbboBASL8JEvt_jztJyXaXHMf8-&key=AIzaSyDk8gwNe0f5Ue7uls-ir8U1Mj7UAjJvMeo', {});
    const data = await response.json();
    const totalVids = JSON.stringify(data.pageInfo.totalResults)
    const videoIndex = Math.floor(Math.random() * totalVids);
    return videoIndex;
}

var player;

async function onYouTubeIframeAPIReady() {
    const videoIndex = await getRandomVidNumber();
    player = new YT.Player('vy-video__embed', {
        height: '480',
        width: '853',
        playerVars: {
            'list': 'PLszeRFrbboBASL8JEvt_jztJyXaXHMf8-',
            'listType': 'playlist',
            'rel': 0,
            'index': videoIndex,
            'modestbranding': 1,
            'origin': 'http://veganyt.com',
            'loop': 1
            // 'showinfo': 0
        },
        events: {
            'onReady': () => {
                player.playVideo();
                player.setVolume(100);
                console.log('videoID', player.getPlaylist()[0])
                setTimeout(() => player.setShuffle(true), 1000);
            }
        }
    });

    
}

document.addEventListener('DOMContentLoaded', () => {
    const headingWords = document.querySelectorAll('.vy-heading span');
    headingWords.forEach(word => word.addEventListener('mouseover', headingMouseOverHandler));
    headingWords.forEach(word => word.addEventListener('mouseout', headingMouseOutHandler));

    document.getElementById('vy-next-video').onclick = () => player.nextVideo();
});