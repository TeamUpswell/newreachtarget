console.log("main.js loaded");

// Import data modules with distinct names for the two exclusion types
import { abujaTreatmentExclusion } from "./data/abuja_treatment_exclusion.js";
import { abujaControlExclusion } from "./data/abuja_control_exclusion.js";
import { abujaControl } from "./data/abuja_control.js";
import { abujaTreatment } from "./data/abuja_treatment.js";

import { adamawaTreatmentExclusion } from "./data/adamawa_treatment_exclusion.js";
import { adamawaControlExclusion } from "./data/adamawa_control_exclusion.js";
import { adamawaControl } from "./data/adamawa_control.js";
import { adamawaTreatment } from "./data/adamawa_treatment.js";

import { nasarawaTreatmentExclusion } from "./data/nasarawa_treatment_exclusion.js";
import { nasarawaControlExclusion } from "./data/nasarawa_control_exclusion.js";
import { nasarawaControl } from "./data/nasarawa_control.js";
import { nasarawaTreatment } from "./data/nasarawa_treatment.js";

console.log("abujaTreatmentExclusion:", abujaTreatmentExclusion);
console.log("abujaControlExclusion:", abujaControlExclusion);
console.log("abujaControl:", abujaControl);
console.log("abujaTreatment:", abujaTreatment);

console.log("adamawaTreatmentExclusion:", adamawaTreatmentExclusion);
console.log("adamawaControlExclusion:", adamawaControlExclusion);
console.log("adamawaControl:", adamawaControl);
console.log("adamawaTreatment:", adamawaTreatment);

console.log("nasarawaTreatmentExclusion:", nasarawaTreatmentExclusion);
console.log("nasarawaControlExclusion:", nasarawaControlExclusion);
console.log("nasarawaControl:", nasarawaControl);
console.log("nasarawaTreatment:", nasarawaTreatment);

// Global variables to store the map and circle objects for toggling

// Abuja layers
let abujaTreatmentExclusionCircles = [];
let abujaControlExclusionCircles = [];
let abujaControlCircles = [];
let abujaTreatmentCircles = [];

// Adamawa layers
let adamawaTreatmentExclusionCircles = [];
let adamawaControlExclusionCircles = [];
let adamawaControlCircles = [];
let adamawaTreatmentCircles = [];

// Nasarawa layers
let nasarawaTreatmentExclusionCircles = [];
let nasarawaControlExclusionCircles = [];
let nasarawaControlCircles = [];
let nasarawaTreatmentCircles = [];

let map;

function initMap() {
  console.log("initMap called");
  const mapOptions = {
    zoom: 9,
    center: { lat: 9.0, lng: 8.0 },
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Draw Abuja Treatment Exclusion circles (red)
  abujaTreatmentExclusion.forEach(data => {
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
    abujaTreatmentExclusionCircles.push(circle);
  });

  // Draw Abuja Control Exclusion circles (dark red)
  abujaControlExclusion.forEach(data => {
    let circle = new google.maps.Circle({
      strokeColor: "#8B0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#8B0000",
      fillOpacity: 0.35,
      map: null,
      center: data.center,
      radius: data.radius,
    });
    abujaControlExclusionCircles.push(circle);
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

  // Draw Adamawa Treatment Exclusion circles (orange)
  adamawaTreatmentExclusion.forEach(data => {
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
    adamawaTreatmentExclusionCircles.push(circle);
  });

  // Draw Adamawa Control Exclusion circles (dark orange)
  adamawaControlExclusion.forEach(data => {
    let circle = new google.maps.Circle({
      strokeColor: "#FF8C00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF8C00",
      fillOpacity: 0.35,
      map: null,
      center: data.center,
      radius: data.radius,
    });
    adamawaControlExclusionCircles.push(circle);
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

  // Draw Nasarawa Treatment Exclusion circles (olive)
  nasarawaTreatmentExclusion.forEach(data => {
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
    nasarawaTreatmentExclusionCircles.push(circle);
  });

  // Draw Nasarawa Control Exclusion circles (dark olive)
  nasarawaControlExclusion.forEach(data => {
    let circle = new google.maps.Circle({
      strokeColor: "#556B2F",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#556B2F",
      fillOpacity: 0.35,
      map: null,
      center: data.center,
      radius: data.radius,
    });
    nasarawaControlExclusionCircles.push(circle);
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
  // --- Abuja Layers ---
  document.getElementById("layer-abuja-treatment-exclusion").addEventListener("change", (e) => {
    toggleLayer(abujaTreatmentExclusionCircles, e.target.checked);
    if (e.target.checked) {
      displayLayerData("abuja-treatment-exclusion", abujaTreatmentExclusionCircles);
    } else {
      document.getElementById("data-abuja-treatment-exclusion").innerHTML = "";
    }
  });

  document.getElementById("layer-abuja-control-exclusion").addEventListener("change", (e) => {
    toggleLayer(abujaControlExclusionCircles, e.target.checked);
    if (e.target.checked) {
      displayLayerData("abuja-control-exclusion", abujaControlExclusionCircles);
    } else {
      document.getElementById("data-abuja-control-exclusion").innerHTML = "";
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

  // --- Adamawa Layers ---
  document.getElementById("layer-adamawa-treatment-exclusion").addEventListener("change", (e) => {
    toggleLayer(adamawaTreatmentExclusionCircles, e.target.checked);
    if (e.target.checked) {
      displayLayerData("adamawa-treatment-exclusion", adamawaTreatmentExclusionCircles);
    } else {
      document.getElementById("data-adamawa-treatment-exclusion").innerHTML = "";
    }
  });

  document.getElementById("layer-adamawa-control-exclusion").addEventListener("change", (e) => {
    toggleLayer(adamawaControlExclusionCircles, e.target.checked);
    if (e.target.checked) {
      displayLayerData("adamawa-control-exclusion", adamawaControlExclusionCircles);
    } else {
      document.getElementById("data-adamawa-control-exclusion").innerHTML = "";
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

  document.getElementById("layer-adamawa-treatment").addEventListener("change", (e) => {
    toggleLayer(adamawaTreatmentCircles, e.target.checked);
    if (e.target.checked) {
      displayLayerData("adamawa-treatment", adamawaTreatmentCircles);
    } else {
      document.getElementById("data-adamawa-treatment").innerHTML = "";
    }
  });

  // --- Nasarawa Layers ---
  document.getElementById("layer-nasarawa-treatment-exclusion").addEventListener("change", (e) => {
    toggleLayer(nasarawaTreatmentExclusionCircles, e.target.checked);
    if (e.target.checked) {
      displayLayerData("nasarawa-treatment-exclusion", nasarawaTreatmentExclusionCircles);
    } else {
      document.getElementById("data-nasarawa-treatment-exclusion").innerHTML = "";
    }
  });

  document.getElementById("layer-nasarawa-control-exclusion").addEventListener("change", (e) => {
    toggleLayer(nasarawaControlExclusionCircles, e.target.checked);
    if (e.target.checked) {
      displayLayerData("nasarawa-control-exclusion", nasarawaControlExclusionCircles);
    } else {
      document.getElementById("data-nasarawa-control-exclusion").innerHTML = "";
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

  document.getElementById("layer-nasarawa-treatment").addEventListener("change", (e) => {
    toggleLayer(nasarawaTreatmentCircles, e.target.checked);
    if (e.target.checked) {
      displayLayerData("nasarawa-treatment", nasarawaTreatmentCircles);
    } else {
      document.getElementById("data-nasarawa-treatment").innerHTML = "";
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
