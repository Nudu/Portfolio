'use strict'
var gCurrentProj;
var gProjs =
    [
        {
            id: "Safe",
            name: "Safe-Content",
            title: "Safe Content",
            desc: "Simple Login Example with Admin panel",
            url: "projs/1Safe",
            publishedAt: 1448693940000,
            labels: ["Login Interface", "Admin Panel"],
            client: "CD Projekt",
        },
        // {
        //     id: "Book",
        //     name: "Book-Shop",
        //     title: "Book Shop",
        //     desc: "Simple responsive inventory managment tool",
        //     url: "projs/2Book",
        //     publishedAt: 1448693940000,
        //     labels: ["Inventory Managment", "Responsive"],
        //     client: "Valve",
        // },
    ]


function getProjById(projId) {
    var proj = gProjs.find(function (proj) {
        return projId === proj.id
    })
    gCurrentProj = proj
    return proj
}