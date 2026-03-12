const API_URL = "https://script.google.com/macros/s/AKfycby2PQGqkhXwJ-YZiTI7IK48ZCFPgCvDuIqJvTMJJvoIyVCYSwZ-e6caAqk_WGksaO1dyg/exec";

/* DATABASE LOGO MASKAPAI */
const airlineLogo = {

"AIR ASIA":"https://upload.wikimedia.org/wikipedia/commons/5/5e/AirAsia_New_Logo.svg",

"BATIK AIR":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Batik_Air_logo.svg",

"SUSI AIR":"https://upload.wikimedia.org/wikipedia/id/3/3f/Susi_Air_logo.png",

"CITILINK":"https://upload.wikimedia.org/wikipedia/commons/5/5c/Citilink_logo.svg",

"WINGS AIR":"https://upload.wikimedia.org/wikipedia/commons/7/73/Wings_Air_logo.svg",

"GARUDA":"https://upload.wikimedia.org/wikipedia/commons/9/9f/Garuda_Indonesia_Logo.svg"

};

fetch(API_URL)
.then(res => res.json())
.then(data => {

data.forEach(f => {

const logo = airlineLogo[f.maskapai] || "";

const row = `
<tr>

<td class="flight">
<img src="${logo}" class="logo">
${f.flight}
</td>

<td>${f.kota}</td>

<td>${f.jam}</td>

<td class="status ${f.status.toLowerCase()}">
${f.status}
</td>

</tr>
`;

if (f.jenis === "keberangkatan") {

document.getElementById("departure").innerHTML += row;

} else {

document.getElementById("arrival").innerHTML += row;

}

});

});

/* JAM REALTIME */

setInterval(() => {

document.getElementById("clock").innerText =
new Date().toLocaleTimeString("id-ID");

},1000);
