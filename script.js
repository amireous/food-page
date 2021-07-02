"use strict";

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");

openBtn.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
});
