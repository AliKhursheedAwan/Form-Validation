// name

$(document).ready(function(){
    $("#name").keyup(function(){
        let name = $(this).val();
        let nameRegx = /[A-Za-z\s]{3,18}$/;
        if(!nameRegx.test(name)){
            $(this).next("Span").show().text("Pease Enter a Alphabate").css("color", "red");
            $(this).css("border", "2px solid red");
        }
        else{
            $(this).next("span").hide();
            $(this).css("border", "2px solid green")
        }
    })


    // Email Validation

    $("#email").keyup(function(){
        let email = $(this).val();
    
        let emailRegx = /^$/;
    
        if(!emailRegx.test(email)){
            $(this).next("span").show().text("Password must have at least 1 uppercase, 1 lowercase, 1 number, 1 special character, and be 8+ characters long.").css("color", "red");
            $(this).css("border", "2px solid red");
        }
        else{
            $(this).next("Span").hide();
            $(this).css("border", "2px solid green");
    
        }
        
       })
        

    // password

   $("#password").keyup(function(){
    let password = $(this).val();

    let passRegx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$*?%.])[A-Za-z\d@#%&*?.]{8,}$/;

    if(!passRegx.test(password)){
        $(this).next("span").show().text("Password must have at least 1 uppercase, 1 lowercase, 1 number, 1 special character, and be 8+ characters long.").css("color", "red");
        $(this).css("border", "2px solid red");
    }
    else{
        $(this).next("Span").hide();
        $(this).css("border", "2px solid green");

    }
    
   })
    

})


