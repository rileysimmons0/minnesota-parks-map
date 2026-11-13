require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "2858d97bac1c438ba26c2c6deea04056"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });

  const homeButton = document.getElementById("clickButton");

  // Save the map's original view before the user pans or zooms.
  view.when(() => {
    const originalView = view.extent.clone();
    homeButton.disabled = false;

    homeButton.addEventListener("click", () => {
      view.goTo(originalView);
    });
  });
});
