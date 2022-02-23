 require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
      ], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "hybrid"
        });

         var view = new MapView({
          map: map,
          container: "viewDiv",
          zoom: 5,
          center: [-104.99, 39.74]
        })

        /********************
         * Add feature layer
         ********************/

        // Carbon storage of trees in Warren Wilson College.
        var featureLayer = new FeatureLayer({
          url:"https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_States_Generalized/FeatureServer/0"});
        map.add(featureLayer);
   
   
   var featureLayer = new FeatureLayer({
     url:"https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/USA_State_Capitals/FeatureServer/0"
   })
        

 });
