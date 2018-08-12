export const CROSS_PLAYER = "s-cross";
export const CIRCLE_PLAYER = "s-circle";
export const PLAYERS = [CROSS_PLAYER, CIRCLE_PLAYER];

/**
 * Obtener jugador aleatorio
 * @returns {string} player
 */
export function random() {
  let index = Math.round(Math.random());
  return PLAYERS[index];
}

/**
 * Retorna el siguiente jugador
 * @param {string} current
 * @returns {string} player
 */
export function next(current) {
  let index = PLAYERS.indexOf(current);
  if (index == PLAYERS.length - 1) return PLAYERS[0];
  return PLAYERS[index + 1];
}
