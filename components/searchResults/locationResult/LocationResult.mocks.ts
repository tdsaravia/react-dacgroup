import { ILocationResult } from './LocationResult';

const base: ILocationResult = {
  link: '/',
  locationName: 'TFM - LOCATION NAME',
  address: '618 S Route 59',
  city: 'Naperville',
  region: 'IL',
  phone: '(000) 000-0000',
  open: 'Open Today  08:00 a.m. to 9:00 p.m.',
  miles: '5 miles',
};

export const mockLocationResultProps = {
  base,
};
