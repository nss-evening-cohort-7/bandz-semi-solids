
// Write to DOM
function writeToDom(outputString, outputId) {
  document.getElementById(outputId).innerHTML = outputString;
}

//SONG LIST OBJECT ARRAY
var songs = [
  {
    songId: 1,
    album: "Stick in the Mud",
    name: "Stuck On You",
    duration: "2:31",
    audioURL: "audioclips/audio_hero_Show-And-Tell_SIPML_Q-0149.mp3"
  },
  {
    songId: 2,
    album: "Stick in the Mud",
    name: "My Ooze",
    duration: "0:18",
    audioURL: "audioclips/baby-music-box_daniel-simion.mp3"
  },
  {
    songId: 3,
    album: "Stick in the Mud",
    name: "Laughin' In The Dark",
    duration: "0:06",
    audioURL: "audioclips/cartoon-telephone_daniel_simion.mp3"
  },
  {
    songId: 4,
    album: "Stick in the Mud",
    name: "Play with my Heart",
    duration: "1:01",
    audioURL: "audioclips/flock-of-seagulls_daniel-simion.mp3"
  },
  {
    songId: 5,
    album: "Stick in the Mud",
    name: "Brush It Up",
    duration: "1:46",
    audioURL: "audioclips/hyena-laugh_daniel-simion.mp3"
  },
  {
    songId: 6,
    album: "Stick in the Mud",
    name: "It Ain't Natural",
    duration: "0:07",
    audioURL: "audioclips/Kazoo-SoundBible.com-161921968.mp3"
  },
  {
    songId: 7,
    album: "Stick in the Mud",
    name: "Smash the Spud",
    duration: "4:65",
    audioURL: "audioclips/marbles-daniel_simon.mp3"
  },
  {
    songId: 8,
    album: "Stick in the Mud",
    name: "Slippin'",
    duration: "1:57",
    audioURL: "audioclips/music_david_gwyn_jones_the_long_march_instrumental.mp3"
  },
  {
    songId: 9,
    album: "Stick in the Mud",
    name: "Can't Eat This (Pain I'm Feelin')",
    duration: "1:31",
    audioURL: "audioclips/music_zapsplat_trick_or_treat.mp3"
  },
  {
    songId: 10,
    album: "Stick in the Mud",
    name: "Stick It (And See What Happens)",
    duration: "4:65",
    audioURL: "audioclips/ Mystic_Chanting_4-Marianne_Gagnon-591053853.mp3"
  },
  {
    songId: 11,
    album: "Single",
    name: "I'm Just an Ooze",
    duration: "0:03",
    audioURL: "audioclips/Raptor Call-SoundBible.com-858657807.mp3"
  },
  {
    songId: 12,
    album: "Single",
    name: "Let it rise",
    duration: "0:11",
    audioURL: "audioclips/sawing-wood-daniel_simon.mp3"
  },
  {
    songId: 13,
    album: "Single",
    name: "Melt My Gouda",
    duration: "0:10",
    audioURL: "audioclips/Track17_vbr.mp3"
  },
  {
    songId: 14,
    album: "Single",
    name: "Minty Fresh",
    duration: "0:01",
    audioURL: "audioclips/zapsplat_science_fiction_alien_small_creature_eating_17833.mp3"
  },
  {
    songId: 15,
    album: "Single",
    name: "Squish Me, I'm Gooey",
    duration: "0:28",
    audioURL: "audioclips/audio_hero_Seal_DIGIVC1-53.mp3"
  },
  {
    songId: 16,
    album: "Single",
    name: "Slem",
    duration: "0:01",
    audioURL: "audioclips/zapsplat_leisure_game_spinner_plastic_spin_slow_stop_17453.mp3"
  },
  {
    songId: 17,
    album: "Single",
    name: "My Friend, The Gelatinous Cube",
    duration: "0:02",
    audioURL: "audioclips/aaj_0192_WhtisYrNmEvil1.mp3"
  },
  {
    songId: 18,
    album: "Single",
    name: "Jello, Jello, Jello",
    duration: "0:17",
    audioURL: "audioclips/audio_hero_LaughEvilVeryLowpi PE131301.mp3"
  },
  {
    songId: 19,
    album: "Single",
    name: "Slick It",
    duration: "0:31",
    audioURL: "audioclips/audio_hero_MonsterEat_DIGIJ03-57-2.mp3"
  },
  {
    songId: 20,
    album: "Single",
    name: "Playtime",
    duration: "1:35",
    audioURL: "audioclips/Alash_Ensemble_-_01_-_Syyn_Miygak.mp3"
  }
];

function buildSongList(songArray){
  var myString = "";
  for(var i = 0; i < songs.length; i++){   
    myString += "<article class='individual-song-container'>";
    myString += "<p class='songID'>" + songArray[i].songId + "</p>";
    myString += "<p class='song-name'>" + songArray[i].name + "</p>";
    myString += "<p class='album-name'>" + songArray[i].album + "</p>";
    myString += "<p class='song-duration'>" + songArray[i].duration + "</p>";
    myString += "<audio src='/" + songArray[i].audioURL + "' class='audio-element' controls controlsList='nodownload'></audio>";
    myString += "</article>";
  };
  writeToDom(myString,"song-container");
};

buildSongList(songs);




