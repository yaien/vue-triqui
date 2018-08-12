<template>
  <div class="wrapper">
    <div class="app">
      <row v-for="(row, r) in squares.items" :key="r">
        <square 
          v-for="(square, s)  in row" 
          :key="s" 
          :row="r" 
          :col="s" 
          :owner="square"/>
      </row>
    </div>
    <g-meta/>
    <g-result/>
  </div>
</template>

<script>
import Row from "./Row";
import Square from "./Square";
import GMeta from "./GMeta";
import GResult from "./GResult";
import { mapState } from "vuex";
export default {
  components: { Row, Square, GMeta, GResult },
  name: "app",
  computed: mapState(["squares"])
};
</script>

<style>
body,
html {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
}
.app {
  display: flex;
  flex-direction: column;
}
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>