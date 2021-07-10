<template>
  <div class="">
    <div
      :class="{
        'bg-grad': tag.thumbnail.path === '',
        'bg-image': tag.thumbnail.type === 'image',
      }"
      :style="style"
      class="main shadow mb-5 bg-body rounded"
    >
      <div
        :class="{
          'darken-bg': tag.thumbnail.path !== '',
        }"
        class="
          text-center
          row
          fw-bold
          h3
          align-items-center
          w-100
          h-100
          p-0
          m-0
        "
      >
        <span class="text-shadow">
          {{ tag.tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { thumbUrl } from "../api";
export default {
  props: {
    tag: {
      required: true,
    },
  },
  computed: {
    style() {
      if (this.tag.thumbnail.path) {
        switch (this.tag.thumbnail.type) {
          case "image":
            return `background-image: url(${thumbUrl(
              this.tag.thumbnail.path
            )})`;
        }
      }

      return "";
    },
  },
};
</script>

<style scoped>
.main {
  margin: auto;
  width: 240px;
  height: 360px;
  color: white;
}
.text-shadow {
  text-shadow: 0 0 10px black;
}
.darken-bg {
  background-color: rgba(0, 0, 0, 0.25);
}
.bg-grad {
  background-image: linear-gradient(to bottom right, purple, #f06d06);
}
.bg-image {
  background-size: cover;
  background-position: center;
}
</style>