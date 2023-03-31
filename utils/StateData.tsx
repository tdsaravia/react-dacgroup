export interface StateData {
  name: string;
  abbreviation: string;
  cities: CityData[];
}

export interface CityData {
  name: string;
  address: string;
  region: string;
  postalCode: string;
  phone: string;
}
