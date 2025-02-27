console.log("main.js loaded");

// Import data modules
import { abujaExclusion } from "./data/abuja_exclusion.js";
import { abujaControl } from "./data/abuja_control.js";
import { abujaTreatment } from "./data/abuja_treatment.js";
import { adamawaTreatment } from "./data/adamawa_treatment.js";
import { adamawaControl } from "./data/adamawa_control.js";
import { adamawaExclusion } from "./data/adamawa_exclusion.js";
import { nasarawaTreatment } from "./data/nasarawa_treatment.js";
import { nasarawaControl } from "./data/nasarawa_control.js";
import { nasarawaExclusion } from "./data/nasarawa_exclusion.js";

console.log("abujaExclusion:", abujaExclusion);
console.log("abujaControl:", abujaControl);
console.log("abujaTreatment:", abujaTreatment);
console.log("adamawaTreatment:", adamawaTreatment);
console.log("adamawaControl:", adamawaControl);
console.log("adamawaExclusion:", adamawaExclusion);
console.log("nasarawaTreatment:", nasarawaTreatment);
console.log("nasarawaControl:", nasarawaControl);
console.log("nasarawaExclusion:", nasarawaExclusion);

// Global variables to store the map and circle objects for toggling
let map;

let abujaExclusionCircles = [];
let abujaControlCircles = [];
let abujaTreatmentCircles = [];
let adamawaTreatmentCircles = [];
let adamawaControlCircles = [];
let adamawaExclusionCircles = [];
let nasarawaTreatmentCircles = [];
let nasarawaControlCircles = [];
let nasarawaExclusionCircles = [];

function initMap() {
  console.log("initMap called");
  const mapOptions = {
    zoom: 9,
    center: { lat: 9.0, lng: 8.0 },
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Draw Abuja Exclusion circles (red)
  abujaExclusion.forEach(data => {
    let circle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map: null,
      center: data.center,
      radius: data.radius,
    });
    abujaExclusionCircles.push(circle);
  });

  // Draw Abuja Control circles (blue)
  abujaControl.forEach(data => {
    let circle = new google.maps.Circle({
      strokeColor: "#0000FF",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#0000FF",
      fillOpacity: 0.35,
      map: null,
      center: data.center,
      radius: data.radius,
    });
    abujaControlCircles.push(circle);
  });

  // Draw Abuja Treatment circles (magenta)
  abujaTreatment.forEach(data => {
    let circle = new google.maps.Circle({
      strokeColor: "#FF00FF",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF00FF",
      fillOpacity: 0.35,
      map: null,
      center: data.center,
      radius: data.radius,
    });
    abujaTreatmentCircles.push(circle);
  });

  // Draw Adamawa Treatment circles (purple)
  adamawaTreatment.forEach(data => {
    let circle = new google.maps.Circle({
      strokeColor: "#800080",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#800080",
      fillOpacity: 0.35,
      map: null,
      center: data.center,
      radius: data.radius,
    });
    adamawaTreatmentCircles.push(circle);
  });

  // Draw Adamawa Control circles (teal)
  adamawaControl.forEach(data => {
    let circle = new google.maps.Circle({
      strokeColor: "#008080",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#008080",
      fillOpacity: 0.35,
      map: null,
      center: data.center,
      radius: data.radius,
    });
    adamawaControlCircles.push(circle);
  });

  // Draw Adamawa Exclusion circles (orange)
  adamawaExclusion.forEach(data => {
    let circle = new google.maps.Circle({
      strokeColor: "#FFA500",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFA500",
      fillOpacity: 0.35,
      map: null,
      center: data.center,
      radius: data.radius,
    });
    adamawaExclusionCircles.push(circle);
  });

  // Draw Nasarawa Treatment circles (green)
  nasarawaTreatment.forEach(data => {
    let circle = new google.maps.Circle({
      strokeColor: "#00FF00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#00FF00",
      fillOpacity: 0.35,
      map: null,
      center: data.center,
      radius: data.radius,
    });
    nasarawaTreatmentCircles.push(circle);
  });

  // Draw Nasarawa Control circles (yellow)
  nasarawaControl.forEach(data => {
    let circle = new google.maps.Circle({
      strokeColor: "#FFFF00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFFF00",
      fillOpacity: 0.35,
      map: null,
      center: data.center,
      radius: data.radius,
    });
    nasarawaControlCircles.push(circle);
  });

  // Draw Nasarawa Exclusion circles (olive)
  nasarawaExclusion.forEach(data => {
    let circle = new google.maps.Circle({
      strokeColor: "#808000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#808000",
      fillOpacity: 0.35,
      map: null,
      center: data.center,
      radius: data.radius,
    });
    nasarawaExclusionCircles.push(circle);
  });

  setupLayerToggles();
}

// Utility function to toggle visibility of a set of circles
function toggleLayer(circlesArray, show) {
  circlesArray.forEach(circle => {
    circle.setMap(show ? map : null);
  });
}

// Helper function to display layer data
function displayLayerData(layerName, circlesArray) {
  const container = document.getElementById(`data-${layerName}`);
  container.innerHTML = ""; // clear previous data
  circlesArray.forEach(circle => {
    const center = circle.getCenter();
    const radius = circle.getRadius();
    container.innerHTML += `Lat: ${center.lat().toFixed(6)}, Lng: ${center.lng().toFixed(6)}, Radius: ${radius.toFixed(2)}<br>`;
  });
}

function setupLayerToggles() {
  // Abuja Layers
  document.getElementById("layer-abuja-exclusion").addEventListener("change", (e) => {
    toggleLayer(abujaExclusionCircles, e.target.checked);
    if (e.target.checked) {
      displayLayerData("abuja-exclusion", abujaExclusionCircles);
    } else {
      document.getElementById("data-abuja-exclusion").innerHTML = "";
    }
  });
  
  document.getElementById("layer-abuja-control").addEventListener("change", (e) => {
    toggleLayer(abujaControlCircles, e.target.checked);
    if (e.target.checked) {
      displayLayerData("abuja-control", abujaControlCircles);
    } else {
      document.getElementById("data-abuja-control").innerHTML = "";
    }
  });
  
  document.getElementById("layer-abuja-treatment").addEventListener("change", (e) => {
    toggleLayer(abujaTreatmentCircles, e.target.checked);
    if (e.target.checked) {
      displayLayerData("abuja-treatment", abujaTreatmentCircles);
    } else {
      document.getElementById("data-abuja-treatment").innerHTML = "";
    }
  });

  // Adamawa Layers
  document.getElementById("layer-adamawa-treatment").addEventListener("change", (e) => {
    toggleLayer(adamawaTreatmentCircles, e.target.checked);
    if (e.target.checked) {
      displayLayerData("adamawa-treatment", adamawaTreatmentCircles);
    } else {
      document.getElementById("data-adamawa-treatment").innerHTML = "";
    }
  });
  
  document.getElementById("layer-adamawa-control").addEventListener("change", (e) => {
    toggleLayer(adamawaControlCircles, e.target.checked);
    if (e.target.checked) {
      displayLayerData("adamawa-control", adamawaControlCircles);
    } else {
      document.getElementById("data-adamawa-control").innerHTML = "";
    }
  });
  
  document.getElementById("layer-adamawa-exclusion").addEventListener("change", (e) => {
    toggleLayer(adamawaExclusionCircles, e.target.checked);
    if (e.target.checked) {
      displayLayerData("adamawa-exclusion", adamawaExclusionCircles);
    } else {
      document.getElementById("data-adamawa-exclusion").innerHTML = "";
    }
  });

  // Nasarawa Layers
  document.getElementById("layer-nasarawa-treatment").addEventListener("change", (e) => {
    toggleLayer(nasarawaTreatmentCircles, e.target.checked);
    if (e.target.checked) {
      displayLayerData("nasarawa-treatment", nasarawaTreatmentCircles);
    } else {
      document.getElementById("data-nasarawa-treatment").innerHTML = "";
    }
  });
  
  document.getElementById("layer-nasarawa-control").addEventListener("change", (e) => {
    toggleLayer(nasarawaControlCircles, e.target.checked);
    if (e.target.checked) {
      displayLayerData("nasarawa-control", nasarawaControlCircles);
    } else {
      document.getElementById("data-nasarawa-control").innerHTML = "";
    }
  });
  
  document.getElementById("layer-nasarawa-exclusion").addEventListener("change", (e) => {
    toggleLayer(nasarawaExclusionCircles, e.target.checked);
    if (e.target.checked) {
      displayLayerData("nasarawa-exclusion", nasarawaExclusionCircles);
    } else {
      document.getElementById("data-nasarawa-exclusion").innerHTML = "";
    }
  });
}

window.initMap = initMap;
console.log("window.initMap:", window.initMap);

window.addEventListener("load", () => {
  if (typeof window.initMap === "function") {
    initMap();
  } else {
    console.error("initMap is not a function on window.");
  }
});
