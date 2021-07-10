<template>
  <div v-if="tags === null" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="row align-items-center">
    <TagCard
      class="col-md-3"
      v-for="tag of tags"
      v-bind:key="tag.tag"
      :tag="tag"
    />
  </div>
</template>

<script>
import { getTags } from "../api";
import TagCard from "../components/TagCard.vue";

export default {
  components: {
    TagCard,
  },
  data() {
    return {
      tags: null,
    };
  },
  mounted() {
    getTags().then((tags) => {
      this.tags = tags;
    });
  },
};
</script>

<style>
</style>