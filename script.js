const email = "joshcant0477@gmail.com"

document.getElementById("emailButton").addEventListener("click", function(){
    document.getElementById("emailSvg").style.display = "none";
    document.getElementById("tickSvg").style.display = "inline-block";

    navigator.clipboard.writeText(email);

    setTimeout(() => {
        document.getElementById("emailSvg").style.display = "inline-block";
        document.getElementById("tickSvg").style.display = "none";
    }, 1500)
});
    
