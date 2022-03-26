import { createSelector } from '@reduxjs/toolkit';

/**
 * Returns the complete SW state
 *
 * @param {object} state - Current state
 * @returns {object} - The entire SW state
 */

export const swStateSelector = (state) => state.sw;

export const swErrorSelector = createSelector(swStateSelector, (swState) => swState.error);

export const swLoadingSelector = createSelector(swStateSelector, (swState) => swState.loading);

export const swCharacterNameSelector = createSelector(
  swStateSelector,
  (swState) => swState.character.name,
);

export default swStateSelector;
