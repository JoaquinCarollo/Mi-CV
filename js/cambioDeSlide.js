const slideAdelante = document.getElementById("adelante");
const slideAtras = document.getElementById("atras");
const infoDelCV = document.getElementById("informacionDelCv");
function cambioDeSlide() {
  if (slide === 1) {
    infoDelCV.innerHTML = "";
    infoDelCV.appendChild(infoGeneral);
  } else if (slide === 2) {
    infoDelCV.innerHTML = "";
    infoDelCV.appendChild(habilidadesBlandasYTecnicas);
  } else if (slide === 3) {
    infoDelCV.innerHTML = "";
    infoDelCV.appendChild(experienciaLaboral);
  }
}
let slide = 0;
slideAdelante.onclick = () => {
  if (slide < 3) {
    slide++;
  }
  cambioDeSlide();
};
slideAtras.onclick = () => {
  if (slide > 0) {
    slide = slide - 1;
  }
  cambioDeSlide();
};
