// main.js
import { abujaExclusion } from "./data/abuja_exclusion.js";
import { abujaControl } from "./data/abuja_control.js";
import { abujaTreatment } from "./data/abuja_treatment.js";
import { adamawaTreatment } from "./data/adamawa_treatment.js";
import { adamawaControl } from "./data/adamawa_control.js";
import { adamawaExclusion } from "./data/adamawa_exclusion.js";
import { nasarawaTreatment } from "./data/nasarawa_treatment.js";
import { nasarawaControl } from "./data/nasarawa_control.js";
import { nasarawaExclusion } from "./data/nasarawa_exclusion.js";

function initMap() {
    console.log("initMap called");
    const mapOptions = {
      zoom: 9,
      center: { lat: 9.0, lng: 8.0 },
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // ... add your map circles or other code ...

  // Example: Draw Abuja Exclusion circles (using red)
  abujaExclusion.forEach(data => {
    new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: data.center,
      radius: data.radius,
    });
  });

  // Draw Abuja Control circles (using blue)
  abujaControl.forEach(data => {
    new google.maps.Circle({
      strokeColor: "#0000FF",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#0000FF",
      fillOpacity: 0.35,
      map,
      center: data.center,
      radius: data.radius,
    });
  });

  // Draw Abuja Treatment circles (using a third color, e.g. magenta)
  abujaTreatment.forEach(data => {
    new google.maps.Circle({
      strokeColor: "#FF00FF",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF00FF",
      fillOpacity: 0.35,
      map,
      center: data.center,
      radius: data.radius,
    });
  });

  // Draw Adamawa groups – assign your preferred colors:
  adamawaTreatment.forEach(data => {
    new google.maps.Circle({
      strokeColor: "#800080", // purple
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#800080",
      fillOpacity: 0.35,
      map,
      center: data.center,
      radius: data.radius,
    });
  });
  adamawaControl.forEach(data => {
    new google.maps.Circle({
      strokeColor: "#008080", // teal
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#008080",
      fillOpacity: 0.35,
      map,
      center: data.center,
      radius: data.radius,
    });
  });
  adamawaExclusion.forEach(data => {
    new google.maps.Circle({
      strokeColor: "#FFA500", // orange
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFA500",
      fillOpacity: 0.35,
      map,
      center: data.center,
      radius: data.radius,
    });
  });

  // Draw Nasarawa groups – assign your preferred colors:
  nasarawaTreatment.forEach(data => {
    new google.maps.Circle({
      strokeColor: "#00FF00", // green
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#00FF00",
      fillOpacity: 0.35,
      map,
      center: data.center,
      radius: data.radius,
    });
  });
  nasarawaControl.forEach(data => {
    new google.maps.Circle({
      strokeColor: "#FFFF00", // yellow
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFFF00",
      fillOpacity: 0.35,
      map,
      center: data.center,
      radius: data.radius,
    });
  });
  nasarawaExclusion.forEach(data => {
    new google.maps.Circle({
      strokeColor: "#808000", // olive
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#808000",
      fillOpacity: 0.35,
      map,
      center: data.center,
      radius: data.radius,
    });
  });
}

// Expose initMap for the Google Maps API callback
window.initMap = initMap;
