let img=document.getElementById("img");
let cityName=document.getElementById("city-name");
let temp=document.getElementById("temp");
let description=document.getElementById("description");
let button=document.getElementById("btn");
let input=document.getElementById("city-data");

button.addEventListener("click",handeleClick);

async function handeleClick(){

    const response=await fetch("https://api.openweathermap.org/data/2.5/weather?q= "+ input.value+ "&appid=fe824cb856a37281c8c13e7a5fbbd488&units%20=metric")
   
    const data=await response.json();
 console.log(data);
    const icon=data.weather[0].icon;
    
    const des= data.weather[0].description;
    
    const temp2=data.main.temp;
    
    const city=data.name;
    console.log(icon)
    img.src="https://openweathermap.org/img/wn/" + icon +"@2x.png"
    
    cityName.innerText=city;
    
    temp.innerText=temp2;
    
    description.innerText=des; 

}

