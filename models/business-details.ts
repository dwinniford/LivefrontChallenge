import { BusinessHours } from "./business-hours";
import { Category } from "./category";
import { Coordinates } from "./coordinates";
import Messaging from "./messaging";
import { Location } from "./locations";

export default interface BusinessDetails {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_claimed: boolean;
  is_closed: boolean;
  url: string;
  phone: string;
  display_phone: string;
  review_count: number;
  categories: Category[];
  rating: number;
  location: Location;
  coordinates: Coordinates;
  photos: string[];
  price: string;
  hours: BusinessHours[];
  transactions: string[];
  messaging: Messaging;
}
