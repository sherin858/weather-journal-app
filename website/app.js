/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
const baseUrl="http://api.openweathermap.org/data/2.5/weather?zip=";
const key="&appid=84ed7f1d081d0bad9acb80436f3be111&units=metric";


//Event listner for getting new user data and Api data
const generateButton=document.querySelector("#generate");

generateButton.addEventListener('click',function(){
// to add an entry to the project endpoint 
    const zipCode=document.getElementById("zip").value;
    const UserFeeling=document.getElementById("feelings").value;
    getApiData(zipCode).then((info)=>{
        postData('/posttdata',{date:newDate,temperature:info.main.temp,feeling:UserFeeling});
        updateTheUi();
    });
});
//getting temperature from Weather Api
//retrieve that app’s data on the client side
const getApiData = async(zipCode)=>{
const ApiResponse= await fetch(baseUrl+zipCode+key);
const info=await ApiResponse.json();
try {
    console.log(info);
    return info;
} catch (error) {
    console.log("error",error)
}
}

//posting data to server
const postData=async(url='',data={})=>{
    const response = await fetch(url,{
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
      console.log("error", error);
    }
}

// uppdating web app user interface
//asynchronous function to fetch the data from the app endpoint
const updateTheUi = async()=>{
    const serverSavedData= await fetch('/getdata');
    try {
        const data = await serverSavedData.json();
        console.log(data);
        document.querySelector("#date").innerHTML =`date is:${data.date}`;
        document.querySelector("#temp").innerHTML = `temperature is:${data.temp}°C`;
        document.querySelector("#content").innerHTML = `you feel:${data.feeling}`;
    } catch (error) {
        console.log("error",error);
    }
}