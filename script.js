const input = document.querySelector(".input");
const button = document.querySelector(".hello"); 
const temp = document.querySelector(".temp");
const time = document.querySelector(".time");
const condition = document.querySelector(".condition");
const city = document.querySelector(".city");
const image = document.querySelector(".image");


async function weather()
{
    const targetcity = input.value; 
    const url = `http://api.weatherapi.com/v1/current.json?${process.env.key}&q=${targetcity}&aqi=no`
    const res = await fetch(url); 
    const data = await res.json(); 
    time.innerText = data.location.localtime;
    temp.innerText = data.current.temp_c + "°C";
    condition.innerText = data.current.condition.text; 
    city.innerHTML = targetcity;    
    image.src = `https:${data.current.condition.icon}`; 
}

button.addEventListener('click', weather); 
weather(); 