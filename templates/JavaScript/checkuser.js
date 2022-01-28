const fetch = require("node-fetch");

let targetId = "286184421269438465"; //THE USER YOU WANT TO CHEC
let apikey = "YOUR_API_TOKEN"; // CAN BE OBTAINABLE FROM THE USER SETTINGS SECTION ON THE DASHBOARD

fetch(`https://stoptheresellers.com/api/v1/checkUser/${targetId}`),
    {
        method: "GET",
        headers: {
            Authorization: `Bearer ${apikey}`,
        },
    }.then((res) => console.log(res));
