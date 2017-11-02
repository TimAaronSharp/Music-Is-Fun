function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(songList){
    console.log(songList)
    var template = ''
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i];
      song.albumArt = song.albumArt.replace('60x60bb', '200x200bb')
      template += `
      <div class="col-md-5 col-md-offset-3 col-sm-6 col-sm-offset-6 m-tb-1 bc br border">
      <div class="holder">
      <img src="${song.albumArt}">
      <p>Artist: ${song.artist}</p>
      <p>Title: ${song.title}</p>
      <p>Collection: ${song.collection}</p>
      <p>$${song.price}</p>
      <audio src="${song.preview}" type="audio/mpeg" controls></audio>
      </div>
      </div>`
      
    }
    document.getElementById("song-list").innerHTML = template
  }




  
}

//style="background-image: url(${song.albumArt}); background-repeat:no-repeat; background-position: center;  <--- maybe try to do the background-image thing later.