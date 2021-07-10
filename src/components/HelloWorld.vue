<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Thumbnail
      v-for="thumb of thumbs"
      v-bind:key="thumb.path"
      :thumb="thumb"
    >
    </Thumbnail>
  </div>
</template>

<script>
import Thumbnail from "./Thumbnail.vue";

export default {
  components: {
    Thumbnail,
  },
  data() {
    return {
      thumbs: [],
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
