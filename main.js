const backwardButton = document.getElementById('backward')
const forwardButton = document.getElementById('forward')
const repeatButton= document.getElementById('repeat')
const shuffleButton= document.getElementById('shuffle')
const playButton= document.getElementById('play')
const pauseButton= document.getElementById('pause')
const isVideo= document.getElementById('isVideo')

const songImage = document.getElementById('song-image')
const songName = document.getElementById('song-name')
const songArtist = document.getElementById('song-artist')

const playListButton = document.getElementById('playlist')


const maxDuration = document.getElementById('max-duration')
const currentTimeRef = document.getElementById('current-time')

const progressBar = document.getElementById('progress-bar')
const playListContainer = document.getElementById('playlist-container')
const closeButton= document.getElementById('close-button')
const playListSongs = document.getElementById('playlist-songs')

const currentProgress = document.getElementById('current-progress')

//Turn
let index

//Loop
let loop = true

//json song list structure
const songList= [
    {
        name: "Fuckumean",
        link: "assets/fuckumean.mp3",
        artist: "Gunna",
        image: "assets/fuckumean.jpg",
        isVideo: false
    },
    {
        name: "Pişman Değilim",
        link: "assets/Semicenk.mp3",
        artist: "Semicenk",
        image: "assets/Samicenk-Pişman.jpg",
        isVideo: false
        
    },
    {
        name: "Superhero",
        link: "assets/Superhero.mp3",
        artist: "Metro Boomin",
        image: "assets/Superhero.png",
        isVideo: false
    },
    {
        name: "Afterdark",
        link: "assets/Afterdark.mp4",
        artist: "Mr. Kitty",
        image: "assets/Afterdark.mp4",
        isVideo: true
    }
]

//Song set

const setSong= (arrayIndex) => {
    console.log(arrayIndex)
    let {name,link,artist,image,isVideo} = songList [arrayIndex]

   //Audio set
   audio.src = link
   songName.innerHTML= name
   songArtist.innerHTML= artist
  
    if (isVideo){
        // Hide the image
        songImage.style.display = 'none'

        //Create a video element 
        const video = document.createElement('video')
        video.src = image
        video.autoplay = true
        video.controls = true
        video.style.width = 'auto'
        video.style.height = 'auto'

        // Replacing the song-image element with the video element
        const musicPlayer = document.querySelector('.music-player')
        musicPlayer.insertBefore(video, songImage)
        
    } else {
        // Show the image and hide the vide if it exists
        songImage.style.display = 'block'
        const video = document.querySelector('video')
        if (video){
            video.style.display = 'none'
        }
        songImage.src= image
    }

   audio.onloadeddata = () => {
    //Maximum duration
   }

   playaudio()

}

const playaudio = () =>{
    
    audio.play()
    pauseButton.classList.remove('hide')
    playButton.classList.add('hide')
    
}
const pauseaudio = () =>{
    audio.pause()
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
}

const nextaudio = () => {
    index = (index + 1) % songList.length

    if (index < songList.length) {
        setSong(index)
    } else {
        
        if (loop) {
            index = 0
            setSong(index)
        } else {
           
        }
    }
}


const backaudio = () => {
    index = (index - 1 + songList.length) % songList.length;
    setSong(index);
}




// Play button
playButton.addEventListener('click', playaudio)

// Pause button
pauseButton.addEventListener('click' , pauseaudio)

// Forward button
forwardButton.addEventListener('click' , nextaudio)

// Backward button
backwardButton.addEventListener('click' , backaudio) 


//When the screen loaded
window.onload= () =>{
    index = 0
    setSong(index)
    playButton.classList.remove('hide')
    pauseButton.classList.add('hide')
    pauseaudio()
   
}
