// Toggle sidebar visibility and adjust content width
document.getElementById("hamburger").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");
  sidebar.classList.toggle("show-sidebar");

  // Shift content to the right when the sidebar is visible
  if (sidebar.classList.contains("show-sidebar")) {
    content.classList.add("shifted");
    this.setAttribute("aria-expanded", "true");
  } else {
    content.classList.remove("shifted");
    this.setAttribute("aria-expanded", "false");
  }
});
// Update the clock every second
setInterval(() => {
  document.getElementById("current-time").innerText =
    new Date().toLocaleTimeString();
  document.getElementById("current-date").innerText =
    new Date().toLocaleDateString();  
}, 1000);

//GG charts

google.charts.load('current', {'packages':['line', 'corechart']});
google.charts.setOnLoadCallback(drawChartTempHum);


// Temp & Hum chart
function drawChartTempHum() {

var chartDiv = document.getElementById('chart_div-temp&hum');

var data = new google.visualization.DataTable();
data.addColumn('date', 'Month');
data.addColumn('number', "Temperature");
data.addColumn('number', "Humidity");

data.addRows([
  [new Date(2014, 0),  -.5,  5.7],
  [new Date(2014, 1),   .4,  8.7],
  [new Date(2014, 2),   .5,   12],
  [new Date(2014, 3),  2.9, 15.3],
  [new Date(2014, 4),  6.3, 18.6],
  [new Date(2014, 5),    9, 20.9],
  [new Date(2014, 6), 10, 19.8],
  [new Date(2014, 7), 10.3, 16.6],
  [new Date(2014, 8),  7.4, 13.3],
  [new Date(2014, 9),  4.4,  9.9],
  [new Date(2014, 10), 1.1,  6.6],
  [new Date(2014, 11), -.2,  4.5]
]);

var classicOptions = {
  title: 'Temperatur & Humidity',
  width: 700,
  height: 380,
  // Gives each series an axis that matches the vAxes number below.
  series: {
    0: {targetAxisIndex: 0},
    1: {targetAxisIndex: 1}
  },
  vAxes: {
    // Adds titles to each axis.
    0: {title: 'Temps (Celsius)'},
    1: {title: 'Humidity(%)'}
  },
  hAxis: {
    ticks: [new Date(2014, 0), new Date(2014, 1), new Date(2014, 2), new Date(2014, 3),
            new Date(2014, 4),  new Date(2014, 5), new Date(2014, 6), new Date(2014, 7),
            new Date(2014, 8), new Date(2014, 9), new Date(2014, 10), new Date(2014, 11)
           ]
  },
  vAxis: {
    viewWindow: {
      max: 30
    }
  }
};



function drawClassicChart() {
  var classicChart = new google.visualization.LineChart(chartDiv);
  classicChart.draw(data, classicOptions);
}

drawClassicChart();
}


// // GG chart Dust





























// // Dynamically load page content based on sidebar buttons and search input
// const pages = {
//   home: `
//       <div id="home-page">
//         <!-- <h2>Welcome to MyTube - Home</h2> -->
//         <div class="widget-container">
//           <div class="widget-home" style="background-image: url('cooktop.jpg');">
//             <form>
//               <h1 id="nhietdo"></h1>
//               <h2 id="doam"></h2><br>
//             </form>
//           </div>
//           <div class="widget-home" style="background-image: url('cooktop.jpg');">
//             <h3>Garden</h3>
//             <img src="cooktopicon.png" class="widget-icon" alt="Cooktop Icon" />
//         </div>
//       </div>
//       <div class="widget-container">
//         <div class="widget-home" style="background-image: url('oven.jpg');">
//             <h3>Living Room</h3>
//             <img src="denicon.png" class="widget-icon" alt="Oven Icon" />
//         </div>
//         <div class="widget-home" style="background-image: url('fridge.jpg');">
//             <h3>Bed Room</h3>
//             <img src="nhietdo.png" class="widget-icon" alt="Fridge Icon" />
//         </div>
//       </div>
//     </div>`,
//   livingroom: `
//       <div id="livingroom-page" class="livingroom-background">
//           <h2 style="text-align: center;">Welcome to MyTube - Livingroom</h2>
//           <div class="widget-container">
//               <div class="widget">
//                   <h1 id="nhietdo"></h1>
//                   <img src="nhietdo.png" class="widget-icon" alt="Temperature Icon" />
//               </div>
//               <div class="widget">
//                   <h2 id="doam">Humid</h2><br>
//                   <img src="denicon.png" class="widget-icon" alt="Brightness Icon" />
//               </div>
//               <div class="widget">
//                   <h3>Time: <span id="current-time">${new Date().toLocaleTimeString()}</span></h3>
//                   <img src="tivimo.png" class="widget-icon" alt="Clock Icon" />
//               </div>
//           </div>
//       </div>
//       `,
//   bedroom: `
//       <div id="bedroom-page" class="bedroom-background">
//           <h2 style="text-align: center;">Welcome to MyTube - Bedroom</h2>
//           <h3 style="text-align: center;">Time: <span id="current-time">${new Date().toLocaleTimeString()}</span></h3>
//           <div class="widget-container">
//               <div class="widget" style="background-image: url('light.jpg');">
//                   <h3>Light Level: 250 Lux</h3>
//                   <img src="denicon.png" class="widget-icon" alt="Light Icon" />
//               </div>
//               <div class="widget" style="background-image: url('temp.jpg');">
//                   <h3>Temperature: 22°C</h3>
//                   <img src="nhietdo.png" class="widget-icon" alt="Temperature Icon" />
//               </div>
//               <div class="widget" style="background-image: url('humidity.jpg');">
//                   <h3>Humidity: 45%</h3>
//                   <img src="humidityicon.png" class="widget-icon" alt="Humidity Icon" />
//               </div>
//           </div>
//       </div>`,
//   kitchen: `
//       <div id="kitchen-page" class="kitchen-background">
//           <h2 style="text-align: center;">Welcome to MyTube - Kitchen</h2>
//           <div class="widget-container">
//               <div class="widget" style="background-image: url('oven.jpg');">
//                   <h3>Oven Status: On</h3>
//                   <img src="denicon.png" class="widget-icon" alt="Oven Icon" />
//               </div>
//               <div class="widget" style="background-image: url('fridge.jpg');">
//                   <h3>Fridge Temperature: 4°C</h3>
//                   <img src="nhietdo.png" class="widget-icon" alt="Fridge Icon" />
//               </div>
//               <div class="widget" style="background-image: url('cooktop.jpg');">
//                   <h3>Cooktop Status: Off</h3>
//                   <img src="cooktopicon.png" class="widget-icon" alt="Cooktop Icon" />
//               </div>
//           </div>
//       </div>`,
//   garden: `
//       <div id="garden-page" class="garden-background">
//           <h2 style="text-align: center;">Welcome to MyTube - Garden</h2>
//           <div class="widget-container">
//               <div class="widget" style="background-image: url('oven.jpg');">
//                   <h3>Oven Status: On</h3>
//                   <img src="denicon.png" class="widget-icon" alt="Oven Icon" />
//               </div>
//               <div class="widget" style="background-image: url('fridge.jpg');">
//                   <h3>Fridge Temperature: 4°C</h3>
//                   <img src="nhietdo.png" class="widget-icon" alt="Fridge Icon" />
//               </div>
//               <div class="widget" style="background-image: url('cooktop.jpg');">
//                   <h3>Cooktop Status: Off</h3>
//                   <img src="cooktopicon.png" class="widget-icon" alt="Cooktop Icon" />
//               </div>
//           </div>
//       </div>`
// };

// // Event listeners for sidebar buttons
// document.getElementById("home-btn").addEventListener("click", function () {
//   loadPage("home");
// });
// document
//   .getElementById("livingroom-btn")
//   .addEventListener("click", function () {
//     loadPage("livingroom");
//   });
// document.getElementById("bedroom-btn").addEventListener("click", function () {
//   loadPage("bedroom");
// });
// document.getElementById("kitchen-btn").addEventListener("click", function () {
//   loadPage("kitchen");
// });
// document.getElementById("garden-btn").addEventListener("click", function () {
//   loadPage("garden");
// });

// Load the specified page content into the main area
// function loadPage(page) {
//   document.getElementById("content").innerHTML = pages[page];
// }


// Handle search functionality
// document.getElementById("search-btn").addEventListener("click", function () {
//   const query = document
//     .getElementById("search-input")
//     .value.toLowerCase()
//     .trim();
//   document.getElementById("search-input").value = ""; // Clear input

//   // Check the search query and load the corresponding page
//   if (query.includes("home")) {
//     loadPage("home");
//   } else if (query.includes("livingroom")) {
//     loadPage("livingroom");
//   } else if (query.includes("bedroom")) {
//     loadPage("bedroom");
//   } else if (query.includes("kitchen")) {
//     loadPage("kitchen");
//   } else if (query.includes("garden")) {
//     loadPage("garden");
//   } else {
//     alert("No matching page found.");
//   }
// });


//
// khoi tao cac thong so




///


