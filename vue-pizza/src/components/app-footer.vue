<template lang="pug">
  v-footer.my-appfooter(:class="{ 'my-appfooter--sidebar-open': sidebarVisibility }")
    .grey--text © 2019 NOST COMPANY
</template>

<script>
export default {
  name: 'AppFooter',

  computed: {
    sidebarVisibility () {
      return this.$store.state.common.sidebar.visible && this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>

<style lang="stylus">
.my-appfooter
  justify-content: center

  &--sidebar-open
    padding-left: 300px

</style>
