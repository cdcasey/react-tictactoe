import { createSelector } from '@reduxjs/toolkit';

/**
 * Returns the complete game state
 *
 * @param {object} state - Current state
 * @returns {object} - The entire game state
 */
export const getGameState = state => state.game;

export const stepNumberSelector = createSelector(
  getGameState,
  gameState => gameState.stepNumber
);

export default getGameState;
