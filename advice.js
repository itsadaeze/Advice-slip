const fetchAdvice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    const name = prompt("Hello! what's your name?")
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);



    console.log(data)

    document.querySelector(".title").innerHTML = `Hello! ${name}, Here is an Advice for Today: </br></br> Advice #${data.slip.id}`
    document.querySelector(".text").innerHTML = `"${data.slip.advice}"`
    document.querySelector('#container').style.backgroundColor = "#" + randomColor;
}

fetchAdvice()

// const setBg = () => {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + randomColor;
// }