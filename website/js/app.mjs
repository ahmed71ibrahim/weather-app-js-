// get Current Time from Date Function 
const days = new Date();

// Equality Current time in newdate container 
const newdate = (days.getMonth() + 1) + '/' + days.getDate() + '/' + days.getFullYear();

projectData = {};

generate = window.document.getElementById('generate').addEventListener("click", DO);

function DO(e) {

    // city id that i want to know temprature of this area                
    const city_id = document.getElementById('cid').value;

    // random string that user enter it to say what he/she feels        
    const my_feelings = document.getElementById('feelings').value;

    if(city_id)
    {
        function_weather(URL_, city_id, MyKey).then(function (data) {

            try {

                postData(post, { date: newdate, temp: data.list[0].main.temp, content: my_feelings });

                updateUI();
    
                // city id that i want to know temprature of this area   
                document.getElementById('cid').value = "";

            } catch (error) {alert('please enter right city id') }   
           
        })
    }
};

/**********************************POST-METHOD************************************************/
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST', credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json', }, body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        return newData;
    } catch (err) {

         console.log("err", err); 
        }
}
/************************************UPDATE-UI-METHOD**********************************************/
const updateUI = async () => {
    const request = await fetch(get)
    try {
        const allData = await request.json();

        if(!allData.feel){allData.feel="no thing ! ";}

        document.getElementById('date').innerHTML = ` Date:${allData.date}`;
        document.getElementById('temp').innerHTML = `Temperature:${allData.temp}`;
        document.getElementById('content').innerHTML = `I feel:${allData.feel}`;
    } catch (err) { console.log("err", err); }
}
/**********************************************************************************/
const function_weather = async (URL_, cid, key) => {  


    try {    
        
        const response = await fetch(URL_ + cid + key)

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
          }

        const data = await response.json();
        return data;
    } catch (err) { console.log("err", err); }
}