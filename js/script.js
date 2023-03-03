const body = document.querySelector('body');
// Menu Bar
const menuBtn = body.querySelector('.menu-btn');
const menuBar = body.querySelector('.menu-bar');
menuBtn.addEventListener("click", btn => {
  menuBar.classList.add('active');
  body.style.overflow = "hidden";
  if (searchBar.classList.contains('active')) {
    searchBtn.classList.replace('uil-times', 'uil-search')
   searchBar.classList.remove('active')
  } 
})
const closeMenu = body.querySelector('.close-menu');
closeMenu.addEventListener("click", btn => {
  menuBar.classList.remove('active');
  body.style.overflow = "visible"
})

// Search Bar
const searchBtn = body.querySelector('.search-btn ');
const searchBar = body.querySelector('.search-bar ');
searchBtn.addEventListener("click", btn => {
  searchBar.classList.toggle('active')
  if (searchBar.classList.contains('active')) {
    searchBtn.classList.replace('uil-search', 'uil-times')
  } else {
    searchBtn.classList.replace('uil-times', 'uil-search')
  }

})
// Preview items
const itemSlider = body.querySelector('.items-slider'),
  items = body.querySelectorAll('figure');
items.forEach((item, index) => {
  item.addEventListener("click", e => {
    itemSlider.querySelector('.active').classList.remove('active');
    e.target.classList.add('active')
    // Selected item details
    let item = e.target,
      itemImg = item.querySelector('img').src,
      itemName = item.querySelector('.name').textContent,
      itemCatg = item.querySelector('.category').textContent,
      itemPrice = item.querySelector('.price').textContent;
    // Preview item details
    const previewBox = body.querySelector('.preview-box'),
     previewImg = previewBox.querySelector('img'),
     previewName = previewBox.querySelector('.name'),
     previewCatg = previewBox.querySelector('.category'),
     previewPrice = previewBox.querySelector('.price');
     
    previewImg.src = itemImg;
    previewName.textContent = itemName;
    previewCatg.textContent = itemCatg;
    previewPrice.textContent = itemPrice;
  })
})


window.addEventListener('click',e=>{
  const clicked = menuBar.contains(e.target) || menuBtn.contains(e.target) || searchBar.contains(e.target) ||searchBtn.contains(e.target)
 if (!clicked) {
    searchBar.classList.remove('active')
    menuBar.classList.remove('active')
    searchBtn.classList.replace('uil-times', 'uil-search')
    body.style.overflow = "visible"
 } 
// else {
   
// }
})