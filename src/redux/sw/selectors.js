import { createSelector } from '@reduxjs/toolkit';

/**
 * Returns the complete SW state
 *
 * @param {object} state - Current state
 * @returns {object} - The entire SW state
 */

export const swStateSelector = state => state.sw;

export const swCharacterNameSelector = createSelector(
  swStateSelector,
  swState => {
    console.log(swState);
    if (typeof swState.character !== 'undefined') {
      return swState.character.name;
    }
  }
);

export default swStateSelector;
