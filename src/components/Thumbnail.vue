<template>
  <video v-if="this.type === 'video'" autoplay muted loop>
    <source :src="this.src" />
  </video>
</template>

<script>
import { thumbUrl } from '../api';

export default {
  props: {
    thumb: {
      required: true,
    },
  },
  computed: {
    type() {
      return this.thumb.type;
    },
    src() {
      return thumbUrl(this.thumb.path);
    },
  },
};
</script>