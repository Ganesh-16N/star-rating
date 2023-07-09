
let stars = document.querySelectorAll(".fa-star");
let emmos = document.querySelectorAll('.fa-regular')


stars.forEach((star, index) => {
  star.addEventListener("click", (e) => {
    for (let i = 0; i <= index; i++) {
      stars[i].style.color = "red";
      emmos[i].style.display = 'none'
      emmos[index].style.display = 'block'
    }
    for (let i = index + 1; i < stars.length; i++){
      stars[i].style.color = "white";
      emmos[i].style.display = 'none'
    }
});

}); 
