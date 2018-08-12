/**
 * combinaciones para ganar el juego siendo
 * el tablero, 3 en fila para ganar
 * 0, 1, 2
 * 3, 4, 5
 * 6, 7, 8
 */
const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

/**
 *
 * @param { string[] } items
 * @param { string } player
 */
export function check(items, player) {
  let result = false;
  for (let combination of combinations) {
    result = combination.every(index => items[index] === player);
    if (result) break;
  }
  return result;
}

/**
 *
 * @param { string[] } items
 */
export function draw(items) {
  return items.every(item => item !== null);
}
