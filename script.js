
let inp =document.getElementById("inp")
let but =document.getElementById("but")
let tempe =document.getElementById("temp")
let humi =document.getElementById("humi")
let wind =document.getElementById("wind")
let sunny =document.getElementById("sunny")
let searchion =document.querySelector(".searchion")
let all =document.querySelector(".all")
let sky =document.querySelector(".sky")



searchion.addEventListener("click",()=>{
if(inp.value){    
let name_contry = inp.value

fetch('https://api.openweathermap.org/data/2.5/weather?q='+name_contry+'&appid=398d12ee005d697b3cb20222f243d82d')
    .then((data) => data.json())
    .then((data) => {
        console.log(data);
        chekeror(data)
    })


}

})


// git data
function get_data(data){
        // wind speed
        let wind_speed =Math.floor(data.wind.speed)
        // temp
        let temp = Math.round(data.main.temp)-273
        // humidity
        let humidity =data.main.humidity
        // description
        description = data.weather[0].description

tempe.innerHTML=temp
sky.innerHTML=description
humi.innerHTML=humidity+"%"
wind.innerHTML=wind_speed+"km/h"


if(description=="broken clouds" || description=="overcast clouds" || description=="few clouds"){
    sunny.src="images/cloudy.png"

}
else if(description=="light rain" || description=="moderate rain"){
    sunny.src="images/weather.png"
}
else{
    sunny.src="images/sunny.png"

}

}



// check country name if wrong
function chekeror(data){
    if(data.cod=='200'){
        all.style.height="400px"
        get_data(data)
    }else{
        all.style.height="77px" 
        inp.value=""
        alert(data.message)
    }
}