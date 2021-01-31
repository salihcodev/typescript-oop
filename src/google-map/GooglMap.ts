// MarkToAdd interface:
export interface MarkToAdd {
  location: {
    lat: number;
    lng: number;
  };

  markerInfo: () => string;
}

export class GoogleMap {
  public googleMap: google.maps.Map;

  constructor(mapId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  // markerToAdd returns back the same value of both two params [User, Company] every time we call addMarker method
  addMarker(markerToAdd: MarkToAdd): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: markerToAdd.location.lat,
        lng: markerToAdd.location.lng,
      },
    });

    // Add listener on every marker.
    marker.addListener('click', () => {
      // Create infoWindow content.
      const popupWindowContent = markerToAdd.markerInfo();

      // Instantiate new infoWindow, Add the content.
      const infoWindow = new google.maps.InfoWindow({
        content: popupWindowContent,
      });

      // Finally open popup window. on a certain map, marker
      infoWindow.open(this.googleMap, marker);
    });
  }
}
