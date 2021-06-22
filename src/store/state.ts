import { CustomSchedules } from '@/utils/types';

const state = {
  // in 'current' mode, everything is configured as if the specified date is current (e.g. countdown shown)
  // in 'day' mode, only details about that date are displayed (e.g. calendar events, lunch)
  mode: 'current',

  scheduleMode: '',
  color: '#1b5e20',

  // date indicates Date object, time indicates epoch time in milliseconds
  urlDate: new Date(), // relative to URL specified time (will be set when URL changes)
  startTime: Date.now(), // relative to real time
  currentTime: Date.now(), // relative to real time
  // such that urlDate.getTime() + (currentTime - startTime) will equal the current time relative to the URL specified time

  customSchedules: {} as CustomSchedules,
  defaultScheduleMode: 'Normal',

  grade: 'None',

  // authenticated with a student.d125.org google email
  isAuthenticated: false,
};

export type State = typeof state;

export default state;