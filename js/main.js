document.onscroll = function () {
  const px = document.scrollTop

if (px > 20) {
  document.querySelector('.navigation').style.display = 'none';
  document.querySelector('.navigation-sm').style.display = 'block';
 

} else {
  document.querySelector('.navigation-sm').style.display = 'none';
  document.querySelector('.navigation').style.display = 'block';

}

};
