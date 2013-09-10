(function () {
    "use strict";

    window.addEventListener("load", function load(event) {
        window.removeEventListener("load", load, false);
        google.maps.event.addDomListener(window, 'load', initialize());
    }, false);

    function initialize() {
        //Where the default center is Romania
        var center = new google.maps.LatLng(45.8667, 25.3000);

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2, // The bigger the zoom is the more closser to the default center is
            center: center,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var styles = [[{
            url: '../images/people35.png',
            height: 35,
            width: 35,
            anchor: [16, 0],
            textColor: '#ff00ff',
            textSize: 10
        }, {
            url: '../images/people45.png',
            height: 45,
            width: 45,
            anchor: [24, 0],
            textColor: '#ff0000',
            textSize: 11
        }, {
            url: '../images/people55.png',
            height: 55,
            width: 55,
            anchor: [32, 0],
            textColor: '#ffffff',
            textSize: 12
        }], [{
            url: '../images/conv30.png',
            height: 27,
            width: 30,
            anchor: [3, 0],
            textColor: '#ff00ff',
            textSize: 10
        }, {
            url: '../images/conv40.png',
            height: 36,
            width: 40,
            anchor: [6, 0],
            textColor: '#ff0000',
            textSize: 11
        }, {
            url: '../images/conv50.png',
            width: 50,
            height: 45,
            anchor: [8, 0],
            textSize: 12
        }], [{
            url: '../images/heart30.png',
            height: 26,
            width: 30,
            anchor: [4, 0],
            textColor: '#ff00ff',
            textSize: 10
        }, {
            url: '../images/heart40.png',
            height: 35,
            width: 40,
            anchor: [8, 0],
            textColor: '#ff0000',
            textSize: 11
        }, {
            url: '../images/heart50.png',
            width: 50,
            height: 44,
            anchor: [12, 0],
            textSize: 12
        }]];

        var markers = [];
        //Image of the pick
        var imageUrl = 'http://chart.apis.google.com/chart?cht=mm&chs=24x32&' + 'chco=FFFFFF,008CFF,000000&ext=.png';
        var markerImage = new google.maps.MarkerImage(imageUrl, new google.maps.Size(24, 32));

        for (var i = 0; i < data.count; i++) {
            var location = data.locations[i];
            var latLng = new google.maps.LatLng(location.latitude,location.longitude);
            var marker = new google.maps.Marker({
                position: latLng
                , draggable: true
                , icon: markerImage
            });

            markers.push(marker);
        }
        var markerCluster = new MarkerClusterer(map, markers, {
            maxZoom: 1,
            gridSize: 50,
            styles: {
                url: '../images/people35.png',
                height: 35,
                width: 35,
                anchor: [16, 0],
                textColor: '#ff00ff',
                textSize: 10
            }
        });
    
    }

}());