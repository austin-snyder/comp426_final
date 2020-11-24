var menu = `<div class="menu">`;
menu += `<div class="menu-table flex-row-space-between"><div class="logo flex-row-center">`;
menu += `<a href="index.html">COMP 426 Final Project</a></div>`;
menu += `<a class="menu-button" tabindex="0" href="javascript:void(0)"><img src="img/menu.png"></a>`;
menu += `<div class="menu-items flex-row-center flex-item">`;
menu += `<a href="index.html" class="menu-index">Home</a>`;
menu += `<a href="about.html" class="menu-about">About</a>`;
menu += `<a href="contact.html" class="menu-contact">Contact</a>`;
menu += `<a href="https://github.com/">Code Repository</a>`;
menu += `<a href="login.html" class="menu-login">Account</a>`;
menu += `</div></div></div>`;

$(function () {
  $(".menu-container").append(menu);
});