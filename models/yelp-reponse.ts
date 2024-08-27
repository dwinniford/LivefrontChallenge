import { Business } from "./business";
import { Region } from "./region";

export interface YelpResponse {
  businesses: Business[];
  total: number;
  region: Region;
}
