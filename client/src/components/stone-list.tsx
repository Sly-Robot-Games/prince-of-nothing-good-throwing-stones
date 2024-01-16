import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { basicStoneAssetMap, bonusStoneAssetMap, crewStoneAssetMap } from "../utils/stone-asset-map";
import { StoneSelector } from "./widgets/stone-selector";

export const StoneList = () => {
  
  return (
    <Paper elevation={3} className="flexColumn">
      <div className="paddingBottom fullWidth">
        <div className="title">Throwing Stones</div>
        <Divider flexItem/>
      </div>
      <div className="subtitle paddingVertical">Core Stones</div>
      {Object.keys(basicStoneAssetMap).map(name => <StoneSelector stoneName={name} />)}
      <div className="subtitle paddingVertical">Bonus Stones</div>
      {Object.keys(bonusStoneAssetMap).map(name => <StoneSelector stoneName={name} />)}
      <div className="subtitle paddingVertical">Crew Stones</div>
      {Object.keys(crewStoneAssetMap).map(name => <StoneSelector stoneName={name} />)}
    </Paper>
  )

}
