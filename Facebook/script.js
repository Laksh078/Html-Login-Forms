let Show = document.getElementById("show");
let password = document.getElementById("password");

        show.onclick = function(){
            if(password.type == "password"){
                password.type = "text";
                show.src = "image/hide.jpg"
            }else{
                password.type = "password";
                show.src = "image/show.jpg"
            }
        }