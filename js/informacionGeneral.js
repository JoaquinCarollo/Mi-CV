/*<div id="infoGeneral">
          <div class="encabezado">
            <h1>Joaquin Carollo</h1>
            <h3>ESTUDIANTE DE PROGRAMACIÓN WEB</h3>
          </div>
          <div class="iconos">
            <div>
              <img
                src="https://cdn-icons-png.freepik.com/256/455/455705.png?semt=ais_hybrid"
              /><span>11-2315-0674</span>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/256/646/646094.png"
              /><span>carollojoaquin@gmail.com</span>
            </div>
            <div>
              <img
                src="https://icons.iconarchive.com/icons/steve/zondicons/512/Location-icon.png"
              /><span>Villa Crespo, CABA</span>
            </div>
    </div>
</div>*/

const infoGeneral = document.createElement("div");
infoGeneral.id = "infoGeneral";
const encabezado = document.createElement("div");
encabezado.className = "encabezado";
encabezado.innerHTML = `<h1>Joaquin Carollo</h1>
            <h3>ESTUDIANTE DE PROGRAMACIÓN WEB</h3>`;
const iconos = document.createElement("div");
iconos.className = "iconos";
iconos.innerHTML = `<div>
              <img
                src="https://cdn-icons-png.freepik.com/256/455/455705.png?semt=ais_hybrid"
              /><span>11-2315-0674</span>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/256/646/646094.png"
              /><span>carollojoaquin@gmail.com</span>
            </div>
            <div>
              <img
                src="https://icons.iconarchive.com/icons/steve/zondicons/512/Location-icon.png"
              /><span>Villa Crespo, CABA</span>
            </div>`;
infoGeneral.appendChild(encabezado);
infoGeneral.appendChild(iconos);
