<template>
    <div>
        <tasks v-for="show in info" :show="show" :key="show.id"></tasks>
    </div>
</template>
<script>
import Tasks from './Tasks'
export default {
  name: 'tasklist',
  components: {
    Tasks
  },
  props: ['info']
}
</script>
