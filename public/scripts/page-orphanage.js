const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

//get values from html:
const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;

//Create map:
const map = L.map("mapid", options).setView([lat, lng], 15);

//Create and add tileLayer:
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popAnchor: [170, 2],
});


//Create and add marker:
L.marker([lat, lng], { icon }).addTo(map);


//Image gallery:
function selectImage(event) {
  const button = event.currentTarget;
  
   //remove todas as classes .active:
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  //seleciona a imagem clicada:
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");


  //atualiza o container de imagem (a imagem grande)
  imageContainer.src = image.src;
  //adiciona a class .active para o botão que foi clicado:
  button.classList.add("active");

}
