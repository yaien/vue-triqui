<template>
  <div class="g-meta">
    <div class="title">Juega</div>
    <div class="player">
      <component :is="player"/>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import players from "../mixins/players";
export default {
  name: "g-meta",
  mixins: [players],
  computed: mapState(["player"])
};
</script>

<style>
.g-meta {
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 50px;
  opacity: 0.5;
  bottom: 0;
}
.title {
  padding: 10px;
  font-size: 1.1em;
  font-weight: bold;
}
.player {
  width: 20px;
  height: 20px;
}
</style>
