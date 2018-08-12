<template>
  <section>
    <div class="backdrop" v-if="winner">
      <div class="winner">
        <component :is="winner"/>
      </div>
      <div class="description">
        <h1>Ha Ganado</h1>
        <button @click="reset">volver a jugar</button>
      </div>
    </div>
    <div class="backdrop" v-if="draw">
      <div class="draw">
        <s-circle></s-circle>
        <s-cross></s-cross>
      </div>
      <div class="description">
        <h1>Empate!</h1>
        <button @click="reset">volver a jugar</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import players from "../mixins/players";
export default {
  name: "g-result",
  mixins: [players],
  computed: mapState(["winner", "draw"]),
  methods: mapMutations(["reset"])
};
</script>

<style>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  opacity: 0.9;
  z-index: 200;
}
.winner {
  width: 20vw;
  height: 20vw;
}
.description {
  text-align: center;
  text-transform: uppercase;
}
.description button {
  color: purple;
  background: transparent;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}
.draw {
  height: 20%;
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
