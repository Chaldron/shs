<template>
  <div :class="{ 'no-overflow': fullScreenMode }">
    <schedule-header
      :full-screen-mode="fullScreenMode"
      @toggle-fullscreen="fullScreenMode = !fullScreenMode"
    />

    <card-container>
      <new-theme-card />
      <holiday-card />
      <schedule-card />
      <lunch-card />
      <upcoming-events-card />

      <icon-text-card :icon="icons.faBell" text="Bell Schedules" link="bellschedules" />

      <icon-text-card :icon="icons.faLink" text="Links" link="links" :invert="true" />

      <icon-text-card :icon="icons.faCalendarAlt" text="Calendar" link="calendar" />

      <icon-text-card
        :icon="icons.faCalculator"
        text="GPA Calculator"
        link="gpaCalculator"
        :link-props="{ type: 'a' }"
        :invert="true"
      />

      <icon-text-card :icon="icons.faTint" text="Switch Color" link="colors" />

      <icon-text-card :icon="icons.faTools" text="Tools" link="tools" :invert="true" />

      <icon-text-card :icon="icons.faFileAlt" text="Documents" link="documents" />

      <icon-text-card
        :icon="icons.faCog"
        text="Settings"
        link="settings"
        :invert="true"
      />
    </card-container>
  </div>
</template>

<script>
import {
  faBell,
  faLink,
  faFileAlt,
  faCalendarAlt,
  faTv,
  faTint,
  faCalculator,
  faCog,
  faTools,
} from '@fortawesome/free-solid-svg-icons';

import CardContainer from '@/components/CardContainer.vue';
import UpcomingEventsCard from '@/components/cards/UpcomingEventsCard.vue';
import IconTextCard from '@/components/cards/IconTextCard.vue';
import ScheduleCard from '@/components/cards/ScheduleCard.vue';
import HolidayCard from '@/components/cards/HolidayCard.vue';
import LunchCard from '@/components/cards/LunchCard.vue';
import NewThemeCard from '@/components/cards/NewThemeCard.vue';
import ScheduleHeader from './Header.vue';

export default {
  components: {
    ScheduleHeader,
    CardContainer,
    UpcomingEventsCard,
    LunchCard,
    IconTextCard,
    ScheduleCard,
    HolidayCard,
    NewThemeCard,
  },
  data() {
    return {
      icons: {
        faBell,
        faLink,
        faFileAlt,
        faCalendarAlt,
        faTv,
        faTint,
        faCalculator,
        faCog,
        faTools,
      },
      fullScreenMode: false,
    };
  },
  created() {
    // Sometimes the interval used in Header.vue stops when the tab leaves focus
    // so updating the date when focus returns is necessary
    window.addEventListener('focus', () => {
      this.$store.commit('setCurrentTime');
    });
  },
};
</script>

<style lang="sass" scoped>
.no-overflow
  height: 100vh
  overflow: hidden
</style>
