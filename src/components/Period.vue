<template>
  <div
    class="period"
    :class="{ 'not-mobile': !forceMobileLayout, invert }"
  >
    <div class="circle" :style="{ fontSize: periodFontSize }">
      {{ actualPeriod }}
    </div>
    <div class="range">
      <div class="time">{{ convertMilitaryTime(start) }}</div>
      <span class="dash"> – </span>
      <div class="time">{{ convertMilitaryTime(end) }}</div>
    </div>
    <div class="spacer"></div>
  </div>
</template>
<script>
import Bell from '@/utils/bell';

export default {
  props: {
    period: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: true },
    invert: { type: Boolean, default: false },
    forceMobileLayout: { type: Boolean, default: false },
  },
  computed: {
    actualPeriod() {
      // remove the ! mark in front of period names
      const { period } = this;
      return period[0] === '!' ? period.substring(1) : period;
    },
    periodFontSize() {
      return this.period.length > 10 ? '1em' : '1.3em';
    },
  },
  methods: {
    convertMilitaryTime: Bell.convertMilitaryTime,
  },
};
</script>

<style lang="sass" scoped>
@import 'src/styles/style.sass'

.period
  +shadow
  border-radius: 100px
  background-color: var(--color)
  display: flex
  align-items: center
  justify-content: space-between
  flex-grow: 1
  margin: 5px
  padding: 2px
  width: calc(100% - 14px) // 2 * 5px (margin) + 2 * 2px (padding) = 14px
  &.not-mobile
    +tablet
      width: calc(50% - 14px)

  .circle
    min-width: 15px
    height: 15px
    line-height: 15px
    border-radius: 15px
    background-color: var(--background)
    text-align: center
    font-weight: bold
    color: var(--primary)
    margin: 5px
    padding: 8px
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis

  .spacer
    width: 40px
    height: 2px

  .range
    color: white
    text-align: center
    flex-grow: 1
    font-size: 1.1em
    font-weight: bold
    min-width: 110px

    .time
      display: inline-block

  &.invert
    box-shadow: none
    background-color: var(--secondarybackground)
    border: var(--color) 1px solid

    .circle
      color: var(--color)

    .range
      color: var(--primaryColor)
      font-weight: normal

  &.not-mobile
    +desktop
      width: auto
      border-radius: 15px
      padding: 0
      flex-direction: column
      min-width: 70px
      height: 100px
      justify-content: center

      .range
        margin: 0
        flex-grow: 0
        font-size: 1em

        .time
          display: block

        .dash
          display: none
</style>
