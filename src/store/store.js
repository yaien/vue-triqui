import Vue from "vue";
import Vuex from "vuex";
import { Matrix } from "./squares";
import { random, next } from "./players";
import { check, draw } from "./results";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    squares: new Matrix(3, 3),
    player: random(),
    winner: null,
    draw: false
  },
  mutations: {
    updateSquares(state, squares) {
      state.squares = squares;
    },
    setPlayer(state, player) {
      state.player = player;
    },
    setWinner(state, player) {
      state.winner = player;
    },
    setDraw(state, draw) {
      state.draw = draw;
    },
    reset(state) {
      state.squares = new Matrix(3, 3);
      state.player = random();
      state.winner = null;
      state.draw = false;
    }
  },
  actions: {
    toggleSquare(store, { row, col }) {
      let { squares, player } = store.state;
      let changed = squares.set(row, col, player);
      if (changed) {
        store.commit("updateSquares", squares.clone());
        store.dispatch("checkResult");
        store.commit("setPlayer", next(player));
      }
    },
    checkResult(store) {
      let { squares, player } = store.state;
      let items = squares.flat();

      if (check(items, player)) return store.commit("setWinner", player);
      if (draw(items)) store.commit("setDraw", true);
    }
  }
});

export default store;
