function findLyrics(artist, song){
    //return fetch('https://api.lyrics.ovh/v1/${artist}/${song}');
    return fetch('https://api.lyrics.ovh/v1/${artist}/${song}';
}

function doSubmit(){
    let lyrics_1 = document.getElementById('lyrics');
    let artist_1 = document.getElementById('artist');
    let song_1 = document.getElementById('song');

    document.getElementById('lyrics-form').addEventListener('submit', e1 =>{
        e1.preventDefault();
    })
    
    findLyrics(artist_1.value, song_1.value)
        .then(response => response.json())
        .then(data =>{
            if(data.lyrics){
                lyrics_1.innerHTML = data.lyrics;
            }else{
                lyrics_1.innerHTML = data.error;
            }
        })
        .catch(err =>{
            lyrics_1.innerHTML = 'Oops! ${err}';
        }) 
}

/*
//Async / Await
async function doSubmit(){
    let lyrics_1 = document.getElementById('lyrics');
    let artist_1 = document.getElementById('artist');
    let song_1 = document.getElementById('song');

    document.getElementById('lyrics-form').addEventListener('submit', e1 =>{
        e1.preventDefault();
    })
    
    try{
        const lyricResponse = await findLyrics(artist_1.value, song.value);
        const data = await lyricResponse.json();

        if(data.lyrics){
            lyrics_1.innerHTML = data.lyrics;
        }else{
            lyrics_1.innerHTML = data.error;
        }
    }catch(err){
        console.log('Oops! ${err}');
    }
}*/