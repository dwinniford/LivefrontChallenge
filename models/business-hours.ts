import { OpenHours } from "./open-hours";

export interface BusinessHours {
  open: OpenHours[];
  hours_type: string;
  is_open_now: boolean;
}
