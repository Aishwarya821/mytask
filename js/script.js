// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
   let menu = document.querySelector('#menu-btn');
   let navbar = document.querySelector('.header .navbar');
   let closeEdit = document.querySelector('#close-edit');
   let editFormContainer = document.querySelector('.edit-form-container');

   // Toggle menu and navbar classes on menu click
   menu.onclick = () =>{
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
   };

   // Remove classes when window is scrolled
   window.onscroll = () =>{
      menu.classList.remove('fa-times');
      navbar.classList.remove('active');
   };

   // Close edit form container and redirect to admin.php
   if (closeEdit && editFormContainer) {
       closeEdit.onclick = () =>{
          editFormContainer.style.display = 'none';
          window.location.href = 'admin.php';
       };
   }
});
