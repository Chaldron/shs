<template>
  <card v-show="bell.school && bell.type != 'Summer' && lunch">
    <div class="title">Lunch</div>
    <div v-for="(items, name) in lunch" :key="name" class="lunch">
      <div class="name">{{ name }}</div>
      <div v-for="item in items" :key="item" class="item">
        {{ item }}
      </div>
    </div>
  </card>
</template>

<script>
import getLunch from '@/utils/lunch';
import Card from '@/components/Card.vue';

import { mapGetters } from 'vuex';

export default {
  components: { Card },
  computed: {
    ...mapGetters([
      'bell',
      'date',
    ]),
    lunch() {
      return getLunch(this.date);
    },
  },
};
</script>

<style lang="sass" scoped>
@import 'src/styles/style.sass'

.title
  text-align: center
  font-size: 1.5em
  margin: 15px 0

.lunch
  border-top: var(--color) 1.5px solid
  padding: 10px 0

  .name
    color: var(--color)
    font-weight: bold
    font-size: .85em
    text-align: center

  .item
    text-align: center
    margin: auto
    margin-top: 5px

</style>
