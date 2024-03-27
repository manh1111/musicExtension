document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.local.get("songs", function (result) {
    var songs = result.songs || [];
    var wrapper = document.querySelector(".wrapper");
    console.log(songs);
    songs.forEach(function (song) {
      var link = document.createElement("a");
      link.href = song.link;
      link.target = "_blank";
      link.textContent = song.name;
      wrapper.appendChild(link);
    });
  });
});
