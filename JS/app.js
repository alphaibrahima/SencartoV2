
var villes = [];

    
//Recuperer les data du base de donnee en Json 
$.getJSON('recupJson.php', function( data ){

    //Pusher les datas recuperés dans le tableau "villes"   
    $.each(data, function(key, val){
        villes.push([val.id, val.name, val.address, val.ville, val.region, parseFloat(val.latitude), parseFloat(val.longitude), val.NGF, val.support_height, val.support_type, 
            val.techno, val.OPP, val.antenna, val.antenna_height, val.antenna_number, val.antenna_azimut, val.antenna_directivity, val.antenna_tilt, 
            val.anntena_Transmit_power, val.antenna_gain, val.antenna_modulation_type, val.antenna_polarization, val.antenna_sensibility, 
            val.antenna_bandwidth, val.antenna_modulation_diversity, val.techno_date]);
    });
        
});

console.log(villes);
// console.log(villes[1][6]);

function initMap() {
    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(14.1825, -16.25333),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scrollwheel: false,
    //STYLISATION DE LA CARTE GOOGLE MAP
    styles : [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 13
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#144b53"
                    },
                    {
                        "lightness": 14
                    },
                    {
                        "weight": 1.4
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#08304b"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0c4152"
                    },
                    {
                        "lightness": 5
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#0b434f"
                    },
                    {
                        "lightness": 25
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#0b3d51"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#146474"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#021019"
                    }
                ]
            }
        ]
    }
    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    setMarkers(map, villes);
    }

    
function setMarkers(map, locations) {
    //var image = 'factory.png';
    for (var i = 0; i < locations.length; i++) {
        //INITIALISER LA VARIABLE  " VILLE "
        var villes = locations[i];
        
        //INITIALISER LA VARIABLE  " myLatLng "
        var myLatLng = new google.maps.LatLng(villes[5], villes[6]);
        console.log(myLatLng);
        //INITIALISER LA VARIABLE  " infoWindow " et cette variable est pour l'affichage du pop Up
        var infoWindow = new google.maps.InfoWindow();
        ////INITIALISER Les Markers avec La variable marker"
        var marker = new google.maps.Marker({
            //INITIALISER la position(montrer àl'api google map ou on doit mettre(position)les marker)
            position: myLatLng,
            map: map,
            animation: google.maps.Animation.DROP,
            //icon: image
});



(function (i) {
    google.maps.event.addListener(marker, "click", function () {
        var villes = locations[i];
        infoWindow.close();
        infoWindow.setContent(
            "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[0] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[1] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[2] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[3] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[4] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[5] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[6] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[7] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[8] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[9] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[10] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[11] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[12] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[13] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[14] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[15] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[16] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[17] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[18] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[19] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[20] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[21] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[22] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[23] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[24] + "</strong> </div>"
            + "<div id='boxcontent' style='font-family:Calibri'><span style='font-size:12px;color:#333'>Ceci est un test.</span> <strong style='color:green'>" + " : " + villes[25] + "</strong> </div>"

            );
        infoWindow.open(map, this);
    });
})(i);
}
}

    



    //console.log(villes);

