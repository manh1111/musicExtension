window.onload = function () {
  var button = document.createElement("button");

  button.innerHTML = "Add to Playlist";
  button.classList.add("button-add");

  document.body.prepend(button);

  button.addEventListener("click", function () {
    var link = window.location.href;
    var name = document.querySelector(".name_title").innerText;
    chrome.runtime.sendMessage({
      type: "add-song",
      data: { link, name },
    });
    console.log(link, name);
  });
};
