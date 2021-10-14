/* Add your JavaScript to this file */
"use strict";

document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementsByTagName("form")[0];
    form.addEventListener("submit", (e) => {
        
       let message_area=document.querySelector('.message');
       let email=document.querySelector('#email').value;
       if (email==""){
            message_area.innerHTML="Please enter a valid email address";
            e.preventDefault();
        
        }
        else{
            message_area.innerHTML="Thank You! Your email address "+ email+ " has been added to our mailing list!";
            e.preventDefault();
        }

        });

});