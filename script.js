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
});
