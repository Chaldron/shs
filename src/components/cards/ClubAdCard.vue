<template>
  <card>
    <div class="cs-club">
      <div class="title">Want to make a website like this?</div>
      <div class="text">Come to Computer Science Club!</div>

      <div class="chips">
        <div class="chip">Today</div>
        <div class="space" />
        <div class="chip">3:30 – 5:00</div>
        <div class="space" />
        <div class="chip">Link Lab</div>
      </div>

      <div class="extra-text">
        <div>No experience necessary!</div>
        <div>Have a live website by the end of the meeting!</div>
      </div>
    </div>
  </card>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: { Card },
};
</script>

<style lang="sass" scoped>

.cs-club
  text-align: center

  .title
    background-color: var(--color)
    color: var(--background)
    font-size: 1.1em
    font-weight: bold
    line-height: 45px

  .text
    line-height: 40px
    font-size: 1.1em
    margin-bottom: 5px

  .chips
    display: flex
    justify-content: space-evenly
    margin: 0 10px
    margin-bottom: 10px

    .space
      flex-grow: 1

    .chip
      border: 1px var(--color) solid
      color: var(--color)
      border-radius: 100px
      padding: 2px 5px
      font-weight: bold
      flex-grow: 3

  .extra-text
    font-size: .8em
    margin-bottom: 10px

</style>
