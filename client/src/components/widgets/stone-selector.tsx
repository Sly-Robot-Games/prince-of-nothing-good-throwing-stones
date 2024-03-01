import { useCallback, useEffect, } from "react";
import { fullStoneAssetMap } from "../../utils/stone-asset-map";
import Checkbox from "@mui/material/Checkbox";
import { StoneState, stoneSelector, stoneToggled } from "../../state/stones-state";
import { useDispatch, useSelector } from "react-redux";

export const StoneSelector = ({ stoneName, clearStone }: { stoneName: string, clearStone?: boolean }) => {
  const dispatch = useDispatch();
  const toggleSelected = useCallback(() => dispatch(stoneToggled(stoneName)), [stoneName, dispatch]);

  const stoneDetails = fullStoneAssetMap[stoneName];
  const stoneState = useSelector(((state: { stones: StoneState }) => stoneSelector(state, stoneName)));
  const isSelected = Boolean(stoneState?.selected);

  useEffect(() => {
    if (clearStone && isSelected) {
      toggleSelected();
    }
  }, [clearStone, isSelected, toggleSelected]);

  if (!stoneDetails) {
    return null;
  }

  return (
    <div className="flexSpread">
      <div className="flexRow">
        <img src={stoneDetails.assetPath} className="icon" alt={`${stoneDetails.label} icon`} />
        <div className="body">{stoneDetails.label}</div>
      </div>
      {stoneDetails.selectable && <Checkbox
        checked={isSelected}
        onChange={toggleSelected}
        inputProps={{ 'aria-label': stoneDetails.label }}
        size="small"
      />}
    </div>
  )
}
