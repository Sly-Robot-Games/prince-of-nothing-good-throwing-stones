import { useCallback, useState } from "react";
import { basicStoneAssetMap } from "../utils/stone-asset-map";
import { CastingMat } from "./casting-mat";
import { StoneList } from "./stone-list";

export const FullCastingApp = () => {
  const [drawThrow, setDrawThrow] = useState<boolean>(false);
  const [clearCanvas, setClearCanvas] = useState<boolean>(false);

  const toggleThrow = useCallback(() => setDrawThrow(prevThrow => !prevThrow), []);

  const toggleClear = useCallback(() => setClearCanvas(prevClear => !prevClear), []);


  return (
    <div className='flexSpread fullWidth'>
      <StoneList setNewThrow={toggleThrow} clearThrow={toggleClear} />
      <CastingMat 
        activeStones={Object.keys(basicStoneAssetMap)}
        throwStones={drawThrow}
        clearCanvas={clearCanvas}
        completeThrow={toggleThrow}
        completeClear={toggleClear}
      />
    </div>
  )
}
