const buttons = document.querySelectorAll('.button');
const body=document.querySelector("body");

buttons.forEach((buttons)=>{
    console.log(buttons);
    buttons.addEventListener('click',(e)=>{
console.log(e);
console.log(e.target);
switch (e.target.id) {
    case "grey":
       body.style.backgroundColor="grey"
    break;
    case "blue":
       body.style.backgroundColor="blue"
    break;
    case "white":
       body.style.backgroundColor="white"
    break;
    case "yellow":
       body.style.backgroundColor="yellow"
    break;
    case "red":
       body.style.backgroundColor="red"
    break;

    default:
        console.log("no matching color found");
        
        break;
}

    })
})

