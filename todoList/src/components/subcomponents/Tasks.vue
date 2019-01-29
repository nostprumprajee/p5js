<template>
    <div>
      <div class="box between">
        <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
            <div class="content">
               <p><strong>{{ show.title }}</strong> <small>{{show.subject}}</small> <small> {{show.time}} </small><br>{{show.descript}}</p>
            </div>
                <nav class="level is-mobile">
                    <div class="level-left">
                    <a class="level-item"><span class="icon is-small"><i class="fa fa-reply"></i></span></a>
                    </div>
                </nav>
                </div>
            </article>
            </div>
    </div>
</template>
<script>
    export default {
      name: 'tasks',
      props: ['show']
    }
</script>
<style scope>
.between {
    padding: 10px 0px 10px 0px;
}
</style>

