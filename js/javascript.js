// Select links

let links = document.querySelectorAll(".links li");
// console.log(links)
// add click event Active li
links.forEach( link =>{
    link.addEventListener("click", Change);
});
// Change Function
function Change(e){
  // Select all active 
  e.target.parentElement.querySelectorAll(".active").forEach( el =>{
      // Remove active form current link
      el.classList.remove("active");
  });
  // Add Active Class
  e.target.classList.add("active");
}

// Select all class

let all = document.querySelectorAll(".all");

// console.log(all)
// hide all Product
// all.forEach( product =>{
//  product.style.display = 'none';
links.forEach( link =>{
  link.addEventListener("click", (e) =>{
    all.forEach( products =>{
      products.style.display = 'none';
    });
    document.querySelectorAll(e.target.dataset.type).forEach( product =>{
      product.style.display = 'block';
    });
    console.log(document.querySelectorAll(e.target.dataset.type))
});

});

