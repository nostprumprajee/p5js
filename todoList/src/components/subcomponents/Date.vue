<template>
    <div>
        {{ day }} <br>
        {{ time }}
    </div>
</template>
<script>
    export default {
      name: 'date',
      props: ['day', 'time']
    }
</script>
