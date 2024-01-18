import { useCallback, useEffect, useState } from "react";
import { fullStoneAssetMap } from "../../utils/stone-asset-map";
import Checkbox from "@mui/material/Checkbox";

export const StoneSelector = ({ stoneName, clearStone }: { stoneName: string, clearStone?: boolean }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const toggleSelected = useCallback(() => setIsSelected(prevSelected => !prevSelected), []);

  const stoneDetails = fullStoneAssetMap[stoneName];

  useEffect(() => {
    if (clearStone && isSelected) {
      toggleSelected()
    }
  }, [clearStone, isSelected, toggleSelected])

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
