const containerEl=document.querySelector(".container")
for (let index = 0; index < 30; index++) {
    const colorcontainerEl=document.createElement("div")
    colorcontainerEl.classList.add("color-container")
    containerEl.appendChild(colorcontainerEl)
}
const colorcontainerEls=document.querySelectorAll(".color-container")
GenetareColor()
function GenetareColor(){
    colorcontainerEls.forEach((colorcontainerEl)=>{
        const newcolorcode=Randomcolor();
        colorcontainerEl.style.backgroundColor="#"+newcolorcode
        colorcontainerEl.innerText="#"+newcolorcode

    })

}
function Randomcolor(){
    const chars="0123456789abcdef"
    const colorcodelength=6
    let colorcode="";
    for (let index = 0; index < colorcodelength; index++) {
        const randomNum=Math.floor(Math.random()*chars.length)
        colorcode+=chars.substring(randomNum,randomNum+1)
    }
    return colorcode
}