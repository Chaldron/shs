import { query } from 'vue-analytics';

export default function (store) {
  if (localStorage.color) {
    store.commit('setColor', localStorage.color);
    query('set', 'dimension1', localStorage.color);
  } else {
    query('set', 'dimension1', 'unset');
  }

  store.commit('setCustomSchedules', tryParseJSON(localStorage.customSchedules));

  // defaultScheduleMode used to (innapropriately) be called defaultSchedule, so to preserve backwards compatibility:
  localStorage.defaultScheduleMode = localStorage.defaultSchedule; // TODO: remove during or after summer 2021

  if (localStorage.defaultScheduleMode) {
    store.commit('setDefaultScheduleMode', localStorage.defaultScheduleMode);
    store.commit('setScheduleMode', localStorage.defaultScheduleMode);
  }

  if (localStorage.grade) {
    store.commit('setGrade', localStorage.grade);
  }
}

function tryParseJSON(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return {};
  }
}
