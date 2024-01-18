import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { basicStoneAssetMap, bonusStoneAssetMap, crewStoneAssetMap } from "../utils/stone-asset-map";
import { StoneSelector } from "./widgets/stone-selector";
import Button from "@mui/material/Button";

type InputProps = {
  setNewThrow: () => void;
  clearThrow: () => void;
}

export const StoneList = ({ setNewThrow, clearThrow }: InputProps) => {
  
  return (
    <Paper elevation={3} className="flexColumn narrow paddingHorizontal paddingVertical">
      <div className="paddingBottom fullWidth">
        <div className="title">Throwing Stones</div>
        <Divider flexItem />
      </div>
      <div className="subtitle paddingVertical">Core Stones</div>
      {Object.keys(basicStoneAssetMap).map(name => <StoneSelector stoneName={name} />)}
      <div className="subtitle paddingVertical">Bonus Stones</div>
      {Object.keys(bonusStoneAssetMap).map(name => <StoneSelector stoneName={name} />)}
      <div className="subtitle paddingVertical">Crew Stones</div>
      {Object.keys(crewStoneAssetMap).map(name => <StoneSelector stoneName={name} />)}
      <div className="flexSpread paddingVertical marginTop narrow">
          <Button style={{ width: '125px' }} variant="contained" color="success" onClick={setNewThrow}>Throw</Button>
          <Button style={{ width: '125px' }} variant="contained" color="success" onClick={clearThrow}>Clear</Button>
        </div>
    </Paper>
  )

}
