const base="http://127.0.0.1:8000";

// this link that return response that display info 
const get=`${base}/all` ;      

// console.log(get);
// this link that send request to ask about current info then return it to server   
const post=`${base}/addData` ;      
// console.log(post);

const URL_="http://api.openweathermap.org/data/2.5/forecast?id="; // the API of openweathermap.org site that return data
const MyKey="&appid=1834a80ff251e3825e4b27bc56b6c633&units=metric";// my key in this site-that return temp degree in celsius
