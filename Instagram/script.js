let hide = document.getElementById("hide");
        let password = document.getElementById("password");

        hide.onclick = function(){
            if(password.type == "password"){
                password.type = "text";
                hide.textContent = "Hide";
            }else{
                password.type = "password";
                hide.textContent = "Show";
            }
        }