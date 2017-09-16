/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function(){
    var buttonScrollUp = document.getElementById('scroll');
    buttonScrollUp.addEventListener("click", function(){
        scrollBy(0, -1 * window.pageYOffset);
    });
    window.onscroll = function (){ 
    var yScroll = window.pageYOffset;
    if (yScroll > 150)
        buttonScrollUp.style.display = "block";   
    else 
        buttonScrollUp.style.display = "none";   
};
};

