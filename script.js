require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const status = document.getElementById("mapStatus");
  const webmap = new WebMap({
    portalItem: {
      id: "2858d97bac1c438ba26c2c6deea04056"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });

  view.when(() => {
    status.style.display = "none";
  }).catch((error) => {
    console.error("ArcGIS map error:", error);
    status.textContent = "Map could not load. Check that the Web Map ID is correct and the map and its layers are shared with Everyone. Details: " + (error.message || String(error));
    status.classList.add("error");
  });
}, (error) => {
  const status = document.getElementById("mapStatus");
  console.error("ArcGIS JavaScript loading error:", error);
  status.textContent = "ArcGIS JavaScript failed to load. Check the browser console and internet connection.";
  status.classList.add("error");
});
