import faker from 'faker';
import { MarkToAdd } from '../google-map/GooglMap';

// make precheck on User class to mak sure it satisfies googleMap class's need. since it's googleMap interface.
export class User implements MarkToAdd {
  // interface:
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }

  markerInfo(): string {
    return `
    <p>
      User Name: <h4>${this.name}</h4>
    </p>
    `;
  }
}
