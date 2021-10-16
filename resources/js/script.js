// Nav Interaction

const aboutMe = document.getElementById('aboutme');
const back = document.getElementById('back');
const mail = document.getElementById('mail');
const github = document.getElementById('github');
const seeMore = document.getElementById('seemore');

const recolor = function (event) {
  event.target.style.color = 'rgb(100, 38, 31)';
  setTimeout(function () {
    event.target.style.color = '';
  }, 500);
};

aboutMe.addEventListener('mouseover', recolor, false);
back.addEventListener('mouseover', recolor, false);
mail.addEventListener('mouseover', recolor, false);
github.addEventListener('mouseover', recolor, false);
seeMore.addEventListener('mouseover', recolor, false);
