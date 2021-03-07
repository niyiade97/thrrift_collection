var menuStatus = false;    //side nav status

window.addEventListener("resize", function(){
    if( window.innerWidth > 800){  
        document.getElementById("side-nav").style.width = "0";
        document.getElementById("body").style.marginLeft = "0";
        document.getElementById("header-text").style.visibility = "visible";
        menuStatus  = false;
    }
})


//change the home text to dashboard on resize
window.addEventListener("resize", function(){
    if( window.innerWidth <= 800){  
      document.getElementById("home").innerHTML = "Dashboard";  
    }
    else{
        document.getElementById("home").innerHTML = "Home"; 
        


    }
});

//change the home text to dashboard on reload
window.addEventListener("load", function(){
    if( window.innerWidth <= 800){  
      document.getElementById("home").innerHTML = "Dashboard";  
    }
});

//change the home text to profile on resize
window.addEventListener("resize", function(){
    if( window.innerWidth <= 800){  
      document.getElementById("about").innerHTML = "Profile";  
    }
    else{
        document.getElementById("about").innerHTML = "About";  
    }
});

//change the home text to profile on reload
window.addEventListener("load", function(){
    if( window.innerWidth <= 800){  
      document.getElementById("about").innerHTML = "Profile";  
    }
    
});

//onclicking close icon
document.getElementById("close-icon").addEventListener("click",function openNav() {
   
    if(menuStatus){
        document.getElementById("side-nav").style.width = "0";
        document.getElementById("body").style.marginLeft = "0";
        document.getElementById("header-text").style.visibility = "visible";
        menuStatus  = false;

    }
});
    
//onclicking menu bar
document.getElementById("menu").addEventListener("click",function openNav() {
    
    if(!menuStatus){
        document.getElementById("side-nav").style.width = "50%";
        document.getElementById("body").style.marginLeft = "50%";
        document.getElementById("header-text").style.visibility = "hidden";
        menuStatus  = true;

    }
});

  

//close side nav onclicking on the screen
  document.getElementById("main-body").addEventListener("click",function openNav() {
    if(menuStatus){
        document.getElementById("side-nav").style.width = "0";
        document.getElementById("body").style.marginLeft = "0";
        document.getElementById("header-text").style.visibility = "visible";
        menuStatus  = false;

    }
  
    
  });







  