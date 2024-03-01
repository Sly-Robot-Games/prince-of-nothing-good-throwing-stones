import { createSelector, createSlice } from "@reduxjs/toolkit";
import { bonusStoneAssetMap, crewStoneAssetMap } from "../utils/stone-asset-map";

export type StoneState = { key: string; selected: boolean }[];

 const selectableAssets = {
  ...bonusStoneAssetMap,
  ...crewStoneAssetMap
  };

  const initialState: StoneState = Object.keys(selectableAssets).map(stoneKey => {
    return { key: stoneKey, selected: false }
  });
  

const stonesSlice = createSlice({
  name: 'stones',
  initialState,
  reducers: {
    stoneToggled(state, action) {
      const stone = state.find(s => s.key === action.payload);
      if (!stone) {
        return;
      }
      stone.selected = !stone.selected;
    }
  }
});

export const { stoneToggled } = stonesSlice.actions;

export const stonesReducer = stonesSlice.reducer;

const stoneStateSelector = (state: { stones: StoneState }) => state.stones;
export const stoneSelector = createSelector(
  [stoneStateSelector, (_state: { stones: StoneState }, stoneKey: string) => stoneKey],
  (stoneState, stoneKey) => stoneState.find(s => s.key === stoneKey)
);
export const selectedStonesSelector = createSelector(
  [stoneStateSelector],
  (stoneState) => stoneState.filter(s => s.selected).map(s => s.key)
);
