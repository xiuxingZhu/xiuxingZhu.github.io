document.addEventListener("DOMContentLoaded", function(event) {
    let targetImage = document.querySelector("#smart-1，#smart-2，#smart-3,#smart-4");
    targetImage.addEventListener("click", function() {
    if (targetImage.classList.contains("small")) {
    targetImage.classList.remove("small");
} else {
    targetImage.classList.add("small");
}        
});
});

