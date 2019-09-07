# OpenSeaDragon Polygon Annotations

This is an example of polygon annotations as overlays on an openseadragon image viewer. Polygons are defined as an array of x and y coordinates. For each annotation, the user can define a description that is shown aside of the polygon annotation (active/deactivate description by clicking on the polygons)


## Usage

Having a polygon defined as..
polygon1 = [
    {"x":0.68,"y":0.28},
    {"x":0.67,"y":0.3},
    {"x":0.67,"y":0.31},
    ....

Simply call the add polygon method: 
var p1 = addPolygon(polygon1,'polygon1', 'add annotation text here', 0.55,0.04, OpenSeadragon.Placement.TOP_LEFT);

The polygons show up on the map thereafter. Click on the polygon to toggle the appearence of the text description.
