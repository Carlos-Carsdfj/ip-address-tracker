const accessToken = 'pk.eyJ1IjoiY2Fyc2QtZmoiLCJhIjoiY2twZnp3dmxjMDA1bTJubXp1MDl3bzkzNyJ9.jiy1fm4rLHBgD2uNZ1UXqA'
const MapSatellite = 'mapbox/satellite-v9'
const MapStreet = 'mapbox/streets-v11'
const mapboxUrl ='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
const mapboxAttribution =  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'





    const streets   = L.tileLayer(mapboxUrl, {id: MapStreet, tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution, accessToken: accessToken});
    const sattelite   = L.tileLayer(mapboxUrl, {id: MapSatellite, tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution, accessToken: accessToken});
    let map, icon;
    
export async function renderMap(){
     map = L.map('mapid', {
        center: [
            34.05223,-118.24368],
        zoom: 10,
        layers: [streets]
    });

    icon = L.icon({
        
        iconUrl: "../resource/images/icon-location.svg",
        iconSize: [46, 56], // size of the icon
        iconAnchor: [30, 56], // point of the icon which will correspond to marker's location
      });
      L.marker([40.72516,-74.06852], { icon: icon }).addTo(map);
    const baseMaps = {
        "Satellite": sattelite,
        "Streets": streets
    };
    L.control.layers(baseMaps).addTo(map);


}





 export async function upgradeMap({lat, lng}) {
    console.log('in at the  upgrademap()')
    map.setView([lat, lng], 15);
    L.marker([lat, lng], { icon: icon }).addTo(map);

  
  
  }

