<template>
  <div class="square" :style="style" @click="toggle()">
    <component :is="owner" />
  </div>
</template>

<script>
import players from "../mixins/players";
export default {
  mixins: [players],
  props: {
    color: { type: String, default: "transparent" },
    grow: { type: Number, default: 1 },
    owner: { type: String },
    row: { type: Number, required: true },
    col: { type: Number, required: true }
  },
  methods: {
    toggle() {
      this.$store.dispatch("toggleSquare", {
        row: this.row,
        col: this.col
      });
    }
  },
  computed: {
    style() {
      return { backgroundColor: this.color, flexGrow: this.grow };
    }
  }
};
</script>

<style>
.square {
  margin: 10px;
  cursor: pointer;
  border: 2px gray solid;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25vw;
  height: 25vw;
}

@media (min-width: 960px) {
  .square {
    width: 12vw;
    height: 12vw;
  }
}
</style>