<template>
  <card v-if="!(events.length === 0 && eventsExhausted)" class="upcoming-events-card">
    <div class="title">Upcoming Events</div>
    <div class="events">
      <div class="line" />
      <event-chip
        v-for="(event, i) in displayedEvents"
        :key="event.key"
        class="event-chip"
        v-bind="event"
        :direction="(i % 2 === 0) ? 'left' : 'right'"
      />
    </div>
    <div class="arrow-container">
      <font-awesome-icon
        v-show="numEventsDisplayed > numEventsInitial"
        class="collapse arrow"
        :icon="icons.faChevronUp"
        @mousedown="collapse"
      />
      <font-awesome-icon
        v-show="!eventsExhausted || numEventsDisplayed < events.length"
        class="expand arrow"
        :icon="icons.faChevronDown"
        @mousedown="showMoreEvents()"
      />
    </div>
  </card>
</template>

<script>
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import Bell from '@/utils/bell';
import Card from '@/components/Card.vue';
import EventChip from '@/components/EventChip.vue';

import { mapGetters } from 'vuex';

function getNextEvent(startDate) {
  // Generator that yields sequential dates starting from the day after start
  function* dates(start) {
    for (let i = 1; true; i++) {
      const date = new Date(start);
      date.setDate(date.getDate() + i);
      yield date;
    }
  }

  let event = null;

  // Go through dates starting from startDate until we find one with a special schedule and return that
  for (const date of dates(startDate)) {
    const schedule = Bell.getScheduleType(date);
    if (schedule && schedule.isSpecial) {
      event = {
        key: `${schedule.name} ${date.getTime()}`, // unique key for each event used in v-for
        date,
        name: schedule.name,
      };

      // need to break out of loop once an event is found since the generator will run forever
      break;
    }

    // give up searching after ~3 months of no events
    if (date.getTime() - startDate.getTime() >= 1000 * 60 * 60 * 24 * 30 * 3) {
      break;
    }
  }

  return event;
}

export default {
  components: { Card, EventChip, FontAwesomeIcon },
  data() {
    return {
      cardHeight: 0,
      icons: {
        faChevronDown,
        faChevronUp,
      },
      events: [],
      numEventsInitial: 4,
      numEventsToAdd: 3,
      numEventsDisplayed: 0,
      lastDate: this.date, // the date until which events are currently being displayed
      dateTimeout: null,
      eventsExhausted: false,
    };
  },
  computed: {
    ...mapGetters([
      'date',
    ]),
    displayedEvents() {
      // Only display numEventsDisplayed events even if the events array contains more
      // and display blank placeholders if no events (possibly still loading)
      const { numEventsDisplayed, numEventsInitial } = this;

      // Placeholders still need unique keys to work with v-for
      const placeholders = Array(numEventsInitial).fill(0).map((_, i) => ({ key: i }));

      const events = this.events.slice(0, numEventsDisplayed);
      return events.length ? events : placeholders;
    },
  },
  watch: {
    $route() {
      // The timeout is used so that the user can switch through multiple dates quickly
      // without having to wait until the upcoming events load for each date
      // Upcoming Events only begin loading after the user does not switch date for at least 500ms
      clearTimeout(this.dateTimeout);
      this.numEventsDisplayed = 0;
      this.dateTimeout = setTimeout(this.reset, 1000);
    },
  },
  mounted() {
    setTimeout(this.reset, 250);
  },
  methods: {
    loadEvents(num) {
      // Could potentially be expensive for large values of num, so load asynchronously
      return new Promise((resolve, reject) => {
        if (!this.eventsExhausted) {
          setTimeout(() => {
            // Get the next num events and add them to the events array
            for (let i = 0; i < num && !this.eventsExhausted; i++) {
              const event = getNextEvent(this.lastDate);
              if (event) {
                // Update the lastDate, so that we can start searching from that point for the next event
                this.lastDate = event.date;
                this.events.push(event);
              } else {
                this.eventsExhausted = true;
              }
            }
            resolve();
          }, 0);
        } else {
          reject(Error('No more events left'));
        }
      });
    },
    showMoreEvents(num = this.numEventsToAdd) {
      if (!this.eventsExhausted) {
        this.loadEvents(num);
      }
      this.numEventsDisplayed += num;
    },
    collapse() {
      this.numEventsDisplayed = this.numEventsInitial;
    },
    reset() {
      this.lastDate = this.date;
      this.events = [];
      this.eventsExhausted = false;
      this.showMoreEvents(this.numEventsInitial);
    },
  },
};
</script>

<style lang="sass" scoped>
@import 'src/styles/style.sass'

.upcoming-events-card
  .title
    text-align: center
    font-size: 1.5em
    margin: 15px 0

  .events
    position: relative
    overflow: auto
    padding-bottom: 25px

    .line
      --width: 3px
      height: 100%
      width: var(--width)
      position: absolute
      left: calc(100% / 2 - var(--width) / 2)
      border-radius: 50px
      background-color: var(--color)

    .event-chip
      margin-top: 30px

  .arrow-container
    display: flex
    justify-content: center

    .arrow
      margin: -3px 10px 5px 10px
      font-size: 1.75em
      cursor: pointer
      color: var(--color)

</style>
