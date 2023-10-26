const backwardButton = document.getElementById('backward')
const forwardButton = document.getElementById('forward')
const repeatButton= document.getElementById('repeat')
const shuffleButton= document.getElementById('shuffle')
const playButton= document.getElementById('play')
const pauseButton= document.getElementById('pause')


const video = document.getElementById('video')
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
        image: "assets/fuckumean.jpg"
    },
    {
        name: "Pişman Değilim",
        link: "assets/Semicenk.mp3",
        artist: "Semicenk",
        image: "assets/Samicenk-Pişman.jpg"
    },
    {
        name: "Superhero",
        link: "assets/Superhero.mp3",
        artist: "Metro Boomin",
        image: "assets/Superhero.png"
    },
    {
        name: "Afterdark",
        link: "assets/Afterdark.mp4",
        artist: "Mr. Kitty",
        image: "assets/Afterdark.mp4"
        
    }
]

//Song set

const setSong= (arrayIndex) => {
    console.log(arrayIndex)
    let {name,link,artist,image} = songList [arrayIndex]


    
   //Audio set
   audio.src = link
   songName.innerHTML= name
   songArtist.innerHTML= artist
   songImage.src= image

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
const pauseAudio = () =>{
    audio.pause()
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
}

// Play button
playButton.addEventListener('click', playaudio)


//When the screen loaded
window.onload= () =>{
    index = 0
    setSong(index)

    //Set song list 
}
