# sables-con-html-css-y-js
Sables utilizando HTML, CSS Y JS

HTML y CSS laser utilizando javascript. Para utilizar o crear un sable es necesario escribir la siguiente estructura.
  <div class="sable">
    <span></span>
    <div class="laser"></div>
  </div>

Si se desea cambiar el color del sable se puede cambiar modificando la siguiente linea, por defecto el sable es de color blanco.

Donde laser-red es el color del sable en este caso rojo. Si se desea agregar un color nuevo solo es necesario modificar el archivo sable.css y agregar el color de esta forma.
.sable .laser.laser-[nombre-color] { background-color: color; box-shadow: 0 0 16px rgba(color, color, color, 0.6);
}
