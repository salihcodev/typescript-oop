import { User } from './user/User';
import { Company } from './company/Company';
import { GoogleMap } from './google-map/GooglMap';

// instantiate googleMap map.
const googleMap = new GoogleMap('map');

// instantiate new user/company to pass it to googlMap class.
const user = new User();
const company = new Company();
googleMap.addMarker(user);
googleMap.addMarker(company);
