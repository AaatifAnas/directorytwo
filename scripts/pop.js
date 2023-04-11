
setTimeout(function(){
  var banner = document.createElement("div");
  banner.innerHTML = "<a href='https://directory125.page.link/topbannerlink'><img src='https://directorytwo.pages.dev/pop.png'></a>";
  banner.style.position = "fixed";
  banner.style.top = "50%";
  banner.style.left = "50%";
  banner.style.transform = "translate(-50%, -50%)";
  banner.style.zIndex = "9999";
  banner.style.minWidth = "800px";
  
  var closeButton = document.createElement("button");
  closeButton.innerHTML = "X";
  closeButton.style.position = "absolute";
  closeButton.style.top = "0";
  closeButton.style.right = "0";
  closeButton.style.padding = "8px";
  closeButton.style.fontSize = "12px";
  closeButton.style.border = "none";
  closeButton.style.backgroundColor = "#8f7bff";
  closeButton.style.color = "#fff";
  closeButton.onclick = function() {
    banner.style.display = "none";
    overlay.style.display = "none";
  }
  banner.appendChild(closeButton);
  
  var overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.right = "0";
  overlay.style.bottom = "0";
  overlay.style.backgroundColor = "rgb(4 4 4 / 70%)";
  overlay.style.zIndex = "9998";
  
  document.body.appendChild(overlay);
  document.body.appendChild(banner);
}, 1000);

