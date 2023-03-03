function sub() { 

    var rating = document.getElementById("rating");
    var message = document.getElementById("midbody");
    // var wordCount = message.split(/\s+/).length;
    var email = document.getElementById("email").value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var validEmail = emailRegex.test(email);
    
    if (validEmail) {
        alert("message word count: " + wordCount + "Rating:" + rating);
    }else{
        alert("Invalid email form.");
    }

    }