<template>
    <div>
        <input class="input is-success" type="text" placeholder="Text input" v-model="text">
        <a class="button is-danger" @click="addTasks(text)">OK</a>
    </div>
</template>
<script>
export default {
  name: 'button',
  props: ['addTasks'],
  data () {
    return {
      text: ''
    }
  }
}
</script>
