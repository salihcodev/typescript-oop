import { User } from '../user/User';
import { Company } from '../company/Company';
// you can use User & Company as class and

export class GoogleMap {
  public googleMap: google.maps.Map;

  constructor(mapId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  // markerToAdd returns back the same value of both two params [User, Company] every time we call addMarker method
  addMarker(markerToAdd: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: markerToAdd.location.lat,
        lng: markerToAdd.location.lng,
      },
    });
  }
}
