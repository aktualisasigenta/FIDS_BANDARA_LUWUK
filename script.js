const API_URL = "https://script.google.com/macros/s/AKfycby8XmAZkw60FuFMhW8hC1AqPP0ymuIOgs5d8P0Th1EBoLcQDtZ1ev_pXu1oiPAYH-k6/exec";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    data.forEach(f => {
      const row = `
        <tr>
          <td>${f.maskapai}</td>
          <td>${f.kota}</td>
          <td>${f.jam}</td>
          <td class="status ${f.status.toLowerCase()}">${f.status}</td>
        </tr>
      `;

      if (f.jenis === "keberangkatan") {
        document.getElementById("departure").innerHTML += row;
      } else {
        document.getElementById("arrival").innerHTML += row;
      }
    });
  });

setInterval(() => {
  document.getElementById("clock").innerText =
    new Date().toLocaleTimeString("id-ID");
}, 1000);
