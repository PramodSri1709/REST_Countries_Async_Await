document.querySelector(".container").addEventListener("click", () => {
    document.querySelector(".sun-logo").classList.toggle("animate-sun");
    document.querySelector(".moon-logo").classList.toggle("animate-moon");
    document.querySelector("body").classList.toggle("dark");
})


var div = document.getElementById("container");
div.style.display = "flex"
div.setAttribute("class", "container-fluid");
div.style.backgroundColor = "#EEE0FD";
div.style.padding = "10%"
div.style.borderBottom = "20%"




//top-div
//heading

var heading = document.createElement("a");
heading.style.fontWeight = "bolder"
heading.style.color = "white"
heading.style.textDecoration = "none"
heading.setAttribute("id", "heading");
heading.innerText = "REST Countries";
heading.style.borderRadius = "5px"
heading.style.fontSize = "80px"
heading.setAttribute("href", "https://restcountries.eu/")
heading.setAttribute("class", "heading");

div.appendChild(heading)

//darkMode

var toggleButton = document.createElement("button");
toggleButton.innerHTML = "<em>Dark Mode<em>"
toggleButton.style.color = "white"
toggleButton.setAttribute("id", "toggle");
toggleButton.setAttribute("class", "toggles ml-auto btn-outline-dark btn-sm");
toggleButton.style.borderRadius = "20px"
toggleButton.style.borderColor = "white"
toggleButton.setAttribute("onclick", "toggleClick()")
div.appendChild(toggleButton);

//DIV
var div = document.getElementById("container2");
div.style.alignItems = "center"
div.setAttribute("class", "container2");
div.style.padding = "2%"


//input div

var inputdiv = document.createElement("div");
inputdiv.id = "inputdiv"
inputdiv.setAttribute("class", "p-5")
div.appendChild(inputdiv);
inputdiv.style.display = "flex"

// textField DOM

var textField = document.createElement("input");
textField.placeholder = "Enter Your Coutry Name"
textField.setAttribute("class", "container form-control")
textField.setAttribute("id", "myInput");
textField.style.flex = "0.7"
textField.style.borderRadius = "20px"
inputdiv.appendChild(textField)

//Div2
var div2 = document.getElementById("container2");
div2.style.alignItems = "center"
div2.setAttribute("class", "container2");
div2.style.padding = "2%"



// Get Button

var getButton = document.createElement("button");
getButton.innerText = "GET"
getButton.setAttribute("class", "container btn btn-outline-primary");
getButton.setAttribute("onclick", "handleClick()")
getButton.style.flex = "0.1"
getButton.style.borderRadius = "20px"
getButton.style.height = "50px"
inputdiv.appendChild(getButton)


function handleClick() {

    var value = document.getElementById("myInput").value;

    if (value === "" || null) {
        alert("Please Enter Any Value")
    } else {
        value
    }

    async function getData() {


        try {

            var data = await fetch("https://restcountries.eu/rest/v2/name/" + value);
            var resData = await data.json();

            var weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=YourKeyPlease`)

            //095a554b7e21a25de9315a020ebb5f22


            var resWeather = await weatherData.json()


            // For Loops

            for (var i = 0; i <= resData.length; i++) {

                //input div2

                var inputdiv = document.getElementById("container3");
                inputdiv.id = "container3"
                inputdiv.setAttribute("class", "p-4")
                inputdiv.style.display = "flex"
                



                //Flags

                var img = document.createElement("img");
                document.getElementById("container2").appendChild(img)
                img.setAttribute = ("id", "flagsimage")
                img.src = resData[i].flag;



                img.style.marginTop = "60px"
                img.style.marginBottom = "60px"
                img.style.boxShadow = "0px 20px 5px grey"
                img.style.border = "solid"
                img.style.borderWidth = "5px"
                img.style.borderRadius = "20px"
                img.style.display = "block"
                img.style.marginLeft = "auto"
                img.style.marginRight = "auto"
                img.style.width = "350px"
                img.style.height = "250px"



                //weatherBtn

                var weatherbtn = document.createElement("button");
                weatherbtn.innerText = "Get Weather"
                weatherbtn.setAttribute("class", "container btn btn-outline-info");
                weatherbtn.setAttribute("id", "weatherbtns")
                document.getElementById("container2").appendChild(weatherbtn)
                weatherbtn.style.width = "115px"
                weatherbtn.style.marginBottom = "3%"
                weatherbtn.style.display = "flex"
                weatherbtn.setAttribute("onclick", "toggleBtn()")
                weatherbtn.style.display = 'block';
                weatherbtn.style.borderRadius = "20px"
                weatherbtn.style.height = "40px"



                //weather icon

                var icon = document.createElement("img")
                document.getElementById("container2").appendChild(icon)
                icon.setAttribute = ("id", "weathers")
                icon.style.display = "block"
                icon.style.marginLeft = "auto"
                icon.style.marginRight = "auto"
                icon.src = `http://openweathermap.org/img/wn/${resWeather.weather[0].icon}@2x.png` 
                icon.style.width = "140px"
                icon.style.height = "140px"
                

                



                // Weather Data

                var weatherStats = document.createElement("h5");
                weatherStats.innerText = ("The Weather In : " + resData[i].name + " is " + resWeather.main.temp + " ° celsius" )
                weatherStats.setAttribute("class", "weathername")
                weatherStats.setAttribute("id", "weathers")
                weatherStats.style.textAlign = "center"
                weatherStats.style.fontFamily = "'Bitter', serif";
                weatherStats.style.fontWeight = "bold"
                document.getElementById("container2").appendChild(weatherStats);
                weatherStats.style.display = 'none';


                

                // Country Name

                var h1 = document.createElement("h5");
                h1.innerText = ("Country Name : " + resData[i].name)
                h1.setAttribute = ("class", "country-name")
                h1.style.textAlign = "center"
                h1.style.fontFamily = "'Bitter', serif";
                h1.style.fontWeight = "bold"
                h1.style.fontSize = "20px"
                document.getElementById("container2").appendChild(h1);



                //Region

                var region = document.createElement("h5");
                region.innerText = ("Region : " + resData[i].region)
                region.style.textAlign = "center"
                region.style.fontFamily = "'Bitter', serif";
                region.style.fontWeight = "bold"
                
                document.getElementById("container2").appendChild(region);


                //Subregion

                var subregion = document.createElement("h5");
                subregion.innerText = ("Sub-Region : " + resData[i].subregion)
                subregion.style.textAlign = "center"
                subregion.style.fontFamily = "'Bitter', serif";
                subregion.style.fontWeight = "bold"
                document.getElementById("container2").appendChild(subregion);


                // Lat-lng

                var latlng = document.createElement("h5");
                latlng.innerText = ("Latitude and Longitude : " + resData[i].latlng)
                latlng.style.textAlign = "center"
                latlng.style.fontFamily = "'Bitter', serif";
                latlng.style.fontWeight = "bold"
                document.getElementById("container2").appendChild(latlng);

                // Currencies

                var currencies = document.createElement("h5");
                currencies.innerText = ("Currency : " + resData[i].currencies[0].symbol)
                currencies.style.textAlign = "center"
                currencies.style.fontFamily = "'Bitter', serif";
                currencies.style.fontWeight = "bold"
                document.getElementById("container2").appendChild(currencies);


                // Population

                var population = document.createElement("h5");
                population.innerText = ("Population : " + resData[i].population)
                population.style.textAlign = "center"
                population.style.fontFamily = "'Bitter', serif";
                population.style.fontWeight = "bold"
                document.getElementById("container2").appendChild(population);

                //Weather Icon

                


            }
        } catch (err) {
            console.log(err)
        }
    }

    getData()


}



function toggleClick() {

    var element1 = document.body;
    element1.classList.toggle("dark");
}

function headingDark() {
    var element2 = document.getElementById("heading")
    element2.classList.toggle("dark2")
}


function toggleBtn() {
    var obj = document.getElementById("weathers","icon");
    if (obj.style.display == "block") obj.style.display = "none";
    else obj.style.display = "block";
}


/* <p id='demo' style='display: none'>Hello Javascript</p>
<button type='button' onclick="toggleText()">Click me</button> */
