chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.type) {
    case "add-song":
      checkAndAddSong(request.data);
      break;
    case "remove-song":
      break;
  }
});

function checkAndAddSong(data) {
  getSongs(function (songs) {
    var isSongExist = false;
    for (var i = 0; i < songs.length; i++) {
      if (songs[i].link === data.link && songs[i].name === data.name) {
        isSongExist = true;
        break;
      }
    }

    if (!isSongExist) {
      songs.push(data);
      chrome.storage.local.set({ songs: songs }, function () {
        console.log("Song added to storage:", data);
      });
    } else {
      console.log("Song already exists in storage:", data);
    }
  });
}

function getSongs(callback) {
  chrome.storage.local.get("songs", function (result) {
    var songs = result.songs || [];
    callback(songs);
  });
}
