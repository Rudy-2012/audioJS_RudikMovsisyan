var data ={
    title: [
        "Lose Yourself ",
        "rickroll",
        "Billie Eilish - Everything i wanted (acoustic)",
        "Emin & JONY - kamin"
    ],



     song: [
         "music/LoseYourself.mp3",
         "music/rickroll.mp3",
         "music/Billie Eilish - Everything i wanted (acoustic)",
        "music/Emin & JONY - kamin.mp3"
],



poster:[
    "https://i.pinimg.com/originals/a6/16/e3/a616e3266f8a5e42d2b6cea2c2c1aa69.gif",
    "https://media1.tenor.com/m/x8v1oNUOmg4AAAAC/rickroll-roll.gif",
    "https://giffiles.alphacoders.com/210/210160.gif",
    "https://i.makeagif.com/media/11-12-2017/ETAHMp.gif"
]
}



let song = new Audio()
let currentSong = 0


window.onload = function(){
    playSong()
}



function playSong(){
        song.src = data.song[currentSong]
        console.log(song);

        let songTitle=  document.getElementById("songTitle")
        songTitle.textContent = data.title[currentSong]
        let img = document.getElementById("row1")
        img.style.backgroundImage = "url (" + data.poster[currentSong] + ")"
        let main = document.getElementById("main")
        main.style.backgroundImage = "url ("+ data.poster[currentSong] +")"
        song.play()
        

}


function playOrPauseSong(){

    let play = document.getElementById("play")
    
    if(song.paused){
        song.play()
        play.src = "images/pause.png"
    }else{
        song.pause()
        play.src ="images/play-button-arrowhead.png"
    }
}

  

song.addEventListener("timeupdate", function(){
    let fill = document.getElementById("fill")
    let position = song.currentTime / song.duration
    fill.style.width = position  * 100 + "%"
    convertTime(song.currentTime)
console.log("test");

    if(song.ended){
        next()
    }
})



function convertTime(seconds){
    let currentTime = document.getElementById("currentTime")
    let min = Math.floor(seconds/60)
    let sec = Math.floor(seconds%60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec
    currentTime.textContent = min + ":" + sec
    totalTime(Math.round(song.duration))

}


function totalTime(seconds){
    let min = Math.floor(seconds/60)
    let sec = Math.floor(seconds%60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec

    currentTime.textContent += " / " + min + ":" + sec
}



function next (){
    currentSong++
    if(currentSong >= data.song.length){
    currentSong=0
    }
    playSong()
    play.src = "image/next.png"

}



function pre(){
    currentSong--
    if(currentSong <= 0){
        currentSong>data.song.length
    }
}



playSong()
play.src = "images/pause.png"

function muted(){
    let mute = document.getElementById("mute")
    if(song.muted){
        song.muted = false
        mute.src = "images/volume.png"
    }else{
        song.muted = true
        mute.src = "images/volume-mute.png"
    }
}