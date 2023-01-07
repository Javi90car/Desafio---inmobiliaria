const propiedades = [
{
  nombre: "Casa de campo",
  descripcion: "Un lugar ideal para descanzar de la ciudad",
  src: "https://i.pinimg.com/236x/65/bc/8e/65bc8eb78aebbd094338df24cc9b03d6.jpg",
  cuartos: "2",
  metros: "170"
},
{
    nombre: "Casa de playa",
    descripcion: "Despierta tus días oyendo el oceano",
    src: "https://cf.bstatic.com/images/hotel/square200/326/326704768.jpg",
    cuartos: "2",
    metros: "130"
  },
  {
    nombre: "Casa en el centro",
    descripcion: "Ten cerca de ti todo lo que necesitas",
    src: "https://fastly.4sqi.net/img/general/200x200/12642791_TYiD5gLGyCyw7uPqwhzp6H_1gUsbRLakd81cbBEesMU.jpg",
    cuartos: "1",
    metros: "80"
  },
  {
    nombre: "Casa rodante",
    descripcion: "Conviertete en un nómada del munda sin salir de tu casa",
    src: "https://imgsvr.radiocut.site/get/crop/center/200/200/cuts_logos/67/ba/67baa882-42b2-404a-a7aa-044a907085c3.jpg",
    cuartos: "1",
    metros: "6"
  },
  {
    nombre: "Departamento",
    descripcion: "Desde las alturas todo se ve mejor",
    src: "https://www.ahp.cl/wp-content/uploads/2019/02/living-200x200.jpg",
    cuartos: "3",
    metros: "200"
  },
  {
    nombre: "Mansión",
    descripcion: "Vive una vida lujosa en la mansión de tus sueños",
    src: "https://www.nowplayingnashville.com/wp-content/uploads/sites/www.nowplayingnashville.com/images/2016/03/belmont-mansion-200x200.jpg",
    cuartos: "5",
    metros: "500"
  }
];
const cantidadCuartos = document.querySelector("#cantidadCuartos");
const donde = document.querySelector("#donde");
const hasta = document.querySelector("#hasta");
const propiedadesSection = document.querySelector(".propiedadesSection");
const filter = document.querySelector(".filter");
const mensaje = document.querySelector(".mensaje");
const total = document.querySelector(".total");
const buscar = document.querySelector(".buscar");



filter.addEventListener("submit", (e) => {
  e.preventDefault();
  
});

for(let propiedad of propiedades){
  propiedadesSection.innerHTML +=`
<div class="tarjeta col-lg-3 col-md-4">
<img src="${propiedad.src}" alt="">
<div class="nombre white">${propiedad.nombre}</div>
<div class = "flex">
<div class="cuartos white">Cuartos: ${propiedad.cuartos}</div>
<div class="metros white">Metros: ${propiedad.metros}</div>
</div>
<div class="descripcion white">${propiedad.descripcion}</div>
<div class="centrarBtn">
<button class = "pie">Ver Más</button>
</div>
</div>
`;
total.innerHTML = `
      <p>Total: ${propiedades.length}</p>
      `;
}
console.log(propiedades);

function validarCamposVacios(){
  if(cantidadCuartos.value == "" || donde.value == "" || hasta.value == ""){
    alert("Los campos no pueden quedar vacios")
    return false;  
  }
  return true;
  
};

filter.addEventListener("submit", (e) => {
  e.preventDefault();  
  if(validarCamposVacios() == false){
    return
  }
  const items = propiedades.filter(item => cantidadCuartos.value == item.cuartos && donde.value <= item.metros || cantidadCuartos.value == item.cuartos && hasta.value >= item.metros)
    propiedadesSection.innerHTML = "";
    for(let item of items){

      propiedadesSection.innerHTML +=`
      <div class="tarjeta col-lg-3 col-md-4">
      <img src="${item.src}" alt="">
      <div class="nombre white">${item.nombre}</div>
      <div class = "flex">
      <div class="cuartos white">Cuartos: ${item.cuartos}</div>
      <div class="metros white">Metros: ${item.metros}</div>
      </div>
      <div class="descripcion white">${item.descripcion}</div>
      <div class="centrarBtn">
      <button class = "pie">Ver Más</button>
      </div>
      </div>
      `;
      total.innerHTML = `
      <p>Total: ${items.length}</p>
      `;

  }
  console.log(items);
  console.log(propiedades);

  });