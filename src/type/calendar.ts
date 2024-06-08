import { Moment } from 'moment';

export interface CalendarItemType {
  id: number;
  group: number;
  title: string;
  description?: string;
  start_time: Moment;
  end_time: Moment;
}
