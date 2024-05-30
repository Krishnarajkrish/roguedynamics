//nav bar
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
//Review section
  const data = [
    {
      id: 1,
      name: "Mohitha Sri",
      img: "./Assests/review1.svg",
      text:`" `+ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia numquam omnis voluptatibus perferendis magnam! Labore voluptas perferendis omnis ea non iusto? Esse aspernatur fuga placeat Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, corrupti"+` "`,
      place:"Chennai, India",
    },
    {
      id: 2,
      name: "Devasena Elangovan",
      img: "./Assests/review2.svg",
      text:`" `+ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia numquam omnis voluptatibus perferendis magnam! Labore voluptas perferendis omnis ea non iusto? Esse aspernatur fuga placeat Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, corrupti"+` "`,
      place:"Coimbatore, India",
    },
  ];
  //Review Initialization
const img = document.querySelector(".ReviewerImage");
const btnNext = document.querySelector("#btn-right");
const btnPrevious = document.querySelector("#btn-left");
const name = document.querySelector(".ReviwerName");
const role = document.querySelector(".ReviewerRole");
const text = document.querySelector(".ActualReview");
//Review Loop 
let index = 0;
window.addEventListener("DOMContentLoaded", function () {
  const testimonial = data[0];
  loadTestimonial(testimonial);
});
function loadTestimonial(data) {
  img.src = data.img;
  name.textContent = data.name;
  role.textContent = data.place;
  text.innerHTML = data.text;
}
btnNext.addEventListener("click", function () {
  index++;
  if (index > data.length - 1) {
    index = 0;
  }
  loadTestimonial(data[index]);
});
btnPrevious.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = data.length - 1;
  }
  loadTestimonial(data[index]);
});

//Products
const products=[
{
 id:1,
 img:"./Assests/Image1.svg",
 names:"Steering Stabilizer",
 modelYear:2023,
 model:"LC76",   
 fuel:"Petrol",
 price:"$ 36650",
 button:"#",
 category:"stabilizer"
},
{
    id:2,
    img:"./Assests/Image2.svg",
    names:"HEIM UCA",
    modelYear:2023,
    model:"LC76",   
    fuel:"Petrol",
    price:"$ 36650",
    button:"#",
    category:"HeimUca"
   },
   {
    id:3,
    img:"./Assests/Image3.svg",
    names:"DIA",
    modelYear:2023,
    model:"LC76",   
    fuel:"Petrol",
    price:"$ 36650",
    button:"#",
    category:"bushingUca"
   },
   {
    id:4,
    img:"./Assests/Image1.svg",
    names:"DIA",
    modelYear:2023,
    model:"LC76",   
    fuel:"Petrol",
    price:"$ 36650",
    button:"#",
    category:"coilSpring"
   },
   {
    id:5,
    img:"./Assests/Image1.svg",
    names:"Steering Stabilizer",
    modelYear:2023,
    model:"LC76",   
    fuel:"Petrol",
    price:"$ 36650",
    button:"#",
    category:"stabilizer"
   },
   {
    id:6,
    img:"./Assests/Image2.svg",
    names:"HEIM UCA",
    modelYear:2023,
    model:"LC76",   
    fuel:"Petrol",
    price:"$ 36650",
    button:"#",
    category:"HeimUca"
   },
   {
    id:7,
    img:"./Assests/Image3.svg",
    names:"DIA",
    modelYear:2023,
    model:"LC76",   
    fuel:"Petrol",
    price:"$ 36650",
    button:"#",
    category:"bushingUca"
   },
   {
    id:8,
    img:"./Assests/Image1.svg",
    names:"DIA",
    modelYear:2023,
    model:"LC76",   
    fuel:"Petrol",
    price:"$ 36650",
    button:"#",
    category:"coilSpring"
   },
];

// Project section code
let toggle = 'all';
function setToggle(value) {
  toggle = value;
  render();
}
function render() {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = '';

  products.forEach(product => {
    if (toggle === 'all' || product.category === toggle) {
      const Cards = document.createElement("div");
      Cards.classList.add("Cards");
      Cards.setAttribute("data-aos","fade-up");
      Cards.innerHTML = `
             <div class="ProductImage">
               <img src="${product.img} "/>
             </div>
             <div class="ProductDetails">
               <h3>${product.names}</h3> 
               <p>Model Year: ${product.modelYear}</p>
               <p>Model: ${product.model}</p>
               <p>Fuel: ${product.fuel}</p>
               <h6>Price: ${product.price}</h6>
              <button onclick="window.open('${product.button}','_blank')">View Product</button>    
             </div>
       `   ;
      cardContainer.appendChild(Cards);
    }
  });
}
render(); // Initial render

//AOS animation
AOS.init();
