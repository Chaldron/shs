<template>
  <settings-section title="Contact">
    <br />
    Feel free to address any questions, comments, or concerns to
    <a href="mailto:admin@stevenson.space">admin@stevenson.space</a>.
  </settings-section>
</template>

<script>
import SettingsSection from './SettingsSection.vue';

export default {
  components: { SettingsSection },
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
a
    text-decoration: none
    color: var(--color)
</style>
