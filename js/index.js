
//This is  minmal example on how to place polygon overlays with annotations in openseadragon
// by Robert Krueger


//init seadragon
viewer = OpenSeadragon({
    id: "openseadragon",
        prefixUrl: "/Annotations/css/images/",
        tileSources: "/Annotations/data/tiles/channel_00.dzi",
});


//we also add an svg overlay (plugin) for the fancy stuff
svg_overlay = viewer.svgOverlay()
overlay = d3.select(svg_overlay.node())


//draw the polygon with d3.js

addPolygon = function(polygonData, selectorname, annotationText, x,y, placement){
    //draw the polygon points
    var polygon = overlay.selectAll(selectorname)
        .data([polygonData])
        .enter().append("polygon")
        .attr("points",function(d) {
            return d.map(function(d) { return [d.x,d.y].join(","); }).join(" ");});

    //register text overlays
    viewer.overlays.push({id: selectorname + 'text', x: x, y: y, placement : placement})

    //add hidden text to html
    d3.select('#openseadragon').append('div')
        .attr('id', selectorname + 'text')
        .attr('class', 'polygonAnnotationText')
        .html(annotationText)
        .style('display', 'none');

    //allow user to toggle the text by clicking on the respective polygon
    svg_overlay.onClick(polygon.node(), function() {
        console.log('click', arguments);
        var item = document.getElementById(selectorname + 'text');
        if (item.style.display === "none") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });

}





//define the overlay shape (this could also be done by the user .. see other example)


//add Polygon 1
polygon1 = [
    {"x":0.18,"y":0},
    {"x":0.18,"y":0.07},
    {"x":0.18,"y":0.11},
    {"x":0.19,"y":0.15},
    {"x":0.21,"y":0.18},
    {"x":0.35,"y":0.23},
    {"x":0.43,"y":0.21},
    {"x":0.45,"y":0.19},
    {"x":0.49,"y":0.13},
    {"x":0.48,"y":0.13},
    {"x":0.47,"y":0.1},
    {"x":0.5,"y":0.09},
    {"x":0.54,"y":0.09},
    {"x":0.52,"y":0.06},
    {"x":0.5,"y":0},
];
var p1 = addPolygon(polygon1,'polygon1', 'These are unpublished 13-plex t-CyCIF images of tissue specimens from four patients with BRAF-mutant metastatic melanoma resected before (left) and after (right) treatment with BRAF and MEK inhibitors (dabrafenib/trametinib).',
    0.55,0.04, OpenSeadragon.Placement.TOP_LEFT);


//add Polygon 2
polygon2 = [
    {"x":0.68,"y":0.28},
    {"x":0.67,"y":0.3},
    {"x":0.67,"y":0.31},
    {"x":0.68,"y":0.33},
    {"x":0.69,"y":0.38},
    {"x":0.68,"y":0.41},
    {"x":0.67,"y":0.44},
    {"x":0.72,"y":0.48},
    {"x":0.75,"y":0.49},
    {"x":0.81,"y":0.46},
    {"x":0.83,"y":0.43},
    {"x":0.83,"y":0.41},
    {"x":0.86,"y":0.41},
    {"x":0.9,"y":0.38},
    {"x":0.91,"y":0.34},
    {"x":0.9,"y":0.29},
    {"x":0.88,"y":0.26},
    {"x":0.82,"y":0.22},
    {"x":0.76,"y":0.21},
    {"x":0.74,"y":0.22},
    {"x":0.69,"y":0.25}
];
var p2 = addPolygon(polygon2, 'polygon2', 'Each image is composed of 150-200 image tiles at a resolution of ~0.9 μm. The Tumor Architecture markers represent tumor cells (S100), immune cells (CD45), and alpha smooth muscle actin in the stroma (α-SMA). Hoechst 33342 labels DNA in cell nuclei. These specimens were retrieved from the archives of the Brigham and Women’s Hospital under a discarded/excess tissue protocol detailed in Institutional Review Board (IRB) protocol IRB17-1688 (2018) for research deemed to “involve no more than minimal risk to the subjects.',
    0.65, 0.35, OpenSeadragon.Placement.TOP_RIGHT);



//some resizing corrections
d3.select(window).on('resize', function() {});
svg_overlay.resize();
