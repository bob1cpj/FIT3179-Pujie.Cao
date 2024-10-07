var vg_1 = "Average_Rainfall_AUS.vg.json";
vegaEmbed("#map", vg_1).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "MaxTemp_AUS.vg.json";
vegaEmbed("#scatter", vg_2).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
