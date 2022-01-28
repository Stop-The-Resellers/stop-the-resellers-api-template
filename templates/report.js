const fetch = require("node-fetch");

let apikey = "YOUR_API_TOKEN"; // CAN BE OBTAINABLE FROM THE USER SETTINGS SECTION ON THE DASHBOARD
let target = "286184421269438465"; //THE USER YOU WANT TO REPORT
let reason = `Leaker: https://linkToEvidence.com`; //PROOF

fetch(
    `https://stoptheresellers.com/api/v1/report?` +
        new URLSearchParams({
            target: target,
            type: "user", // url or user
            reason: reason,
        }),
    {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apikey}`,
        },
    }
).then((res) => console.log(res));
