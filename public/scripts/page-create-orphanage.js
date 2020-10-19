//Create map:
const map = L.map("mapid").setView([-27.2109325, -49.6448719], 15);

//Create and add tileLayer:
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//Create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;


  //remove icon:
  marker && map.removeLayer(marker);
  
  
  //add icon layer:
  marker = L.marker([lat, lng], { icon }).addTo(map);
});


// add campo de fotos:
function addPhotoField() {
  //pega o container de fotos #images:
  const container = document.querySelector('#images')
  //pega o container para duplicar .new-upload:
  const fieldsContainer = document.querySelectorAll('.new-upload')
  //realiza o clone da última linguagem adicionada:
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  //verifica se o campo está vazio. Se sim, não adiciona ao container de imagens:
  const input = newFieldContainer.children[0]
  if(input.value == "") {
    return
  }
  //limpar o campo antes de adicionar ao container de imagens:
 input.value = ""
  //adiciona o clone ao container de #images:
  container.appendChild(newFieldContainer)
}

function deleteField(event) {
  const span = event.currentTarget
  const fieldsContainer = document.querySelectorAll('.new-upload')

  if(fieldsContainer.length <= 1) {
    //limpar o valor do campo:
    span.parentNode.children[0].value = ""
    return
  }

  //deleta o campo todo:
  span.parentNode.remove();
}

//select sim or no:
function toggleSelect(event) {
   //retira a classe active dos botões
   document.querySelectorAll('.button-select button')
   .forEach(function(button){
     button.classList.remove('active')
   })

  //pegar o botão clicado:
  const button = event.currentTarget
  //coloca a classe active no botão clicado:
  button.classList.add('active')
  //atualiza o input hidden com o valor selecionado:
  const input = document.querySelector('[name="open_on_weekends"]')
  //Verifica se sim ou não:
  input.value = button.dataset.value
}


//DESAFIO:

function validate(event) {
  //valida se lat e lng estão preenchidos:
  const needsLatAndLng = false;
  if(needsLatAndLng) {
    event.preventDefault()
    alert('Preencha um ponto no mapa')
  }
  
}