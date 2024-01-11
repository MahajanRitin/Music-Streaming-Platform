console.log('welcome to spotify')
// Initialize the event

let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById("masterPlay");
let myProgressbar=document.getElementById("myProgressbar");
let gif=document.getElementById("gif");
let songItem=Array.from(document.getElementsByClassName("songItem"));



let songs=[
    
    {songName:"Wario Mortals",filePath:"songs/1.mp3",coverPath:'covers/1.jpg'},
    {songName:"Kesariya",filePath:"songs/2.mp3",coverPath:'covers/2.jpg'},
    {songName:"Tum-Mile",filePath:"songs/3.mp3",coverPath:'covers/3.jpg'},
    {songName:"Tum-hi-ho",filePath:"songs/4.mp3",coverPath:'covers/4.jpg'},
    {songName:"Galiyan",filePath:"songs/5.mp3",coverPath:'covers/5.jpg'},
    {songName:"Dil-diyan-Galan",filePath:"songs/6.mp3",coverPath:'covers/6.jpg'},
    {songName:"Kesariya2",filePath:"songs/7.mp3",coverPath:'covers/7.jpg'},
    {songName:"Hanuman-chalisa",filePath:"songs/8.mp3",coverPath:'covers/8.jpg'},
    {songName:"Ram-siya",filePath:"songs/9.mp3",coverPath:'covers/9.jpg'},
]
songItem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
});
// Handle play pause click.
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause()
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
        
    }
})
// Listen to Events.
audioElement.addEventListener('timeupdate',()=>{
// update Seekbar.
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressbar.value=progress;

})

myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressbar.value*audioElement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');

    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
});

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex>=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
