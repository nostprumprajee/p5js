<template>
 <div> 
   <div class="columns">
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"><avatar></avatar></div>
   </div>

    <div class="columns">
      <div class="column">
        <date :day="day" :time="time"></date>
      </div>
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
    </div>

   <div class="columns">
      <div class="column">
        <task-list :info="info"></task-list>
      </div>
   </div>

   <div class="columns">
     <div class="column"></div>
     <div class="column">
       <button-action :addTasks="addTasks"></button-action>
     </div>
     <div class="column"></div>
  </div>

   </div>

 </div>
</template>

<script>
import axios from 'axios'
import Moment from 'moment'
import Avatar from './subcomponents/Avatar'
import Date from './subcomponents/Date'
import TaskList from './subcomponents/TaskList'
import ButtonAction from './subcomponents/Button'
export default {
  name: 'index',
  data () {
    return {
      day: Moment().format('dddd'),
      time: Moment().format('LL'),
      info: []
    }
  },
  components: {
    Avatar,
    Date,
    TaskList,
    ButtonAction
  },
  methods: {
    addTasks (text) {
      console.log('start  you sendText::', text)
      let item = {
        id: '_' + Math.random().toString(36).substr(2, 9),
        title: 'Meeting Startup',
        time: Moment().format('LL'),
        subject: 'made by VueJs',
        descript: text
      }
      this.info.push(item)
    }
  },
  mounted () {
    axios.get('http://ip.jsontest.com/?callback=showMyIP').then((res) => {
      console.log(res.data)
    })
  }
}
</script>

