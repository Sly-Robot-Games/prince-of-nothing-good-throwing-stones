import { useState } from "react";
import { fullStoneAssetMap } from "../../utils/stone-asset-map";
import Checkbox from "@mui/material/Checkbox";

export const StoneSelector = ({ stoneName }: { stoneName: string }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const toggleSelected = () => setIsSelected(!isSelected);

  const stoneDetails = fullStoneAssetMap[stoneName];

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
