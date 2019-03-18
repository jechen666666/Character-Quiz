$(".result").hide();
$(".incorrect").show();
$(".reveal").click(function() {
    var qOne = $(".number").val();
    var qTwo = $(".string").val();
    if ((qOne >= 1) && (qTwo === "yes")) {
        $(".result").show();
        $(".superImage").attr("src", "https://static1.srcdn.com/wordpress/wp-content/uploads/The-Flash-New-52-Comic-Barry-Allen.jpg");
        $(".words").text("The Flash is an awfully energetic and creative speedster who will almost always tries t find the good in others. When away from his hero duties, he is known as Barry Allen, and works as a forensic scientist.");
        $(".superName").text("You are the Flash!");
        $(".superName").css("color" , "red");
    }
    else if ((qOne >= 1) && (qTwo === "no")) {
        $(".result").show();
        $(".superImage").attr("src", "https://vendimageuploadcdn.global.ssl.fastly.net/q95/vend-images/product/original/0/f/0f82750d77d422afb8291388a1e8d197899cc352.jpg");
        $(".words").text("Green Arrow is a Star City vigilante/superhero who specializes in the use of the bow and arrow. His real name is Oliver Queen and to the majority of society, he is seen as a former billionaire playboy.");
        $(".superName").text("You are the Green Arrow!");
        $(".superName").css("color" , "green");
    }
    else if ((qOne === "0") && (qTwo === "no")) {
        $(".result").fadeIn();
        $(".superImage").attr("src", "https://speakeasyohiou.files.wordpress.com/2015/10/cover-bman.jpg");
        $(".words").text("Batman is a rather dark, dreary, and intelligent superhero who always appears to be one step ahead of his enemies. To most of the world his is known as Bruce Wayne, a billionaire who owns Wayne Industries.");
        $(".superName").text("You are Batman!");
        $(".superName").css("color" , "purple");
    }
    else if ((qOne === "0") && (qTwo === "yes")) {
        $(".result").show();
        $(".superImage").attr("src", "https://heroichollywood.com/wp-content/uploads/2018/11/superman-rocksteady.jpg");
        $(".words").text("Superman is a kryptonian who is often characterized as the one of the most powerful and “cheeriest” superhero within the DC Universe. When apart from his hero life, he is known as Clark Kent, and works as a journalist.");
        $(".superName").text("You are Superman!");
        $(".superName").css("color" , "blue");
    } 
    else {
        $(".result").show();
        $(".words").text("Either one or both of your answers to the required questions are incorrect!");
    }
});