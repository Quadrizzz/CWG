document.addEventListener("DOMContentLoaded" , ()=>{
    const anthologies = document.querySelector("#Anthologies");
    document.getElementById("banthologies").addEventListener("click" ,()=>{
        anthologies.style.display = "flex";
        document.querySelector("#shortstories").style.display="none";
        document.querySelector("#poems").style.display="none";
        document.querySelector("#novels").style.display="none";
        document.querySelector("#articles").style.display="none";
    });

    document.getElementById("bshortstories").addEventListener("click", ()=>{
        anthologies.style.display = "none";
        document.querySelector("#shortstories").style.display="flex";
        document.querySelector("#poems").style.display="none";
        document.querySelector("#novels").style.display="none";
        document.querySelector("#articles").style.display="none";
    })

    document.getElementById("bpoems").addEventListener("click", ()=>{
        anthologies.style.display = "none";
        document.querySelector("#shortstories").style.display="none";
        document.querySelector("#poems").style.display="flex";
        document.querySelector("#novels").style.display="none";
        document.querySelector("#articles").style.display="none";
    })

    document.getElementById("bnovels").addEventListener("click", ()=>{
        anthologies.style.display = "none";
        document.querySelector("#shortstories").style.display="none";
        document.querySelector("#poems").style.display="none";
        document.querySelector("#novels").style.display="flex";
        document.querySelector("#articles").style.display="none";
    })

    document.getElementById("barticles").addEventListener("click", ()=>{
        anthologies.style.display = "none";
        document.querySelector("#shortstories").style.display="none";
        document.querySelector("#poems").style.display="none";
        document.querySelector("#novels").style.display="none";
        document.querySelector("#articles").style.display="flex";
    })
})