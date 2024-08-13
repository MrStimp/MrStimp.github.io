const email = "joshcant0477@gmail.com"

document.getElementById("emailButton").addEventListener("click", function(){
    document.getElementById("copyMessage").style.display = "block";

    navigator.clipboard.writeText(email);

    setTimeout(() => {
        document.getElementById("copyTooltip").style.display = "none";
    }, 1500)
});
    
