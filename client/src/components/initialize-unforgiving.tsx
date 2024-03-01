import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import { UNFORGIVING } from "../utils/unforgiving";

export const InitializeUnforgiving = ({ setRadius, handleClose }: { setRadius: (r: number) => void; handleClose: () => void; }) => {
  const [multiplier, setMultiplier] = useState<number>(1);
  
  const handleMultiplierChange = (action: 'add' | 'subtract') => () => {
    const newMultiplier = action === 'add' ?  multiplier + 1 : multiplier - 1;

    if (newMultiplier > 15 || newMultiplier < 1) {
      return;
    }

    setMultiplier(newMultiplier);
  }

  const handleUpdateUnforgiving = () => {
    setRadius(UNFORGIVING.RADIUS + (UNFORGIVING.INTENSIFIER * (multiplier - 1)));
    handleClose();
  }

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      style={{ margin: '0 auto' }}
    >
      <DialogTitle className="subtitle" id="dialog-description">Initialize Unforgiving</DialogTitle>
      <DialogContent className="flexColumn">
        <div className="body marginVertical" id="dialog-description">
          If this isn't your first session, you can set the unforgiven level to where you left off. 
          If this is your first session, leave the value at 1 to begin!
        </div>
        <div className="flexRowCenter">
          <div className={`symbol-large ${multiplier === 1 ? 'disabled' : ''}`} role="presentation" onClick={handleMultiplierChange('subtract')}>-</div>
          <div className="hero marginX">{multiplier}</div>
          <div className={`symbol  ${multiplier === 15 ? 'disabled' : ''}`} role="presentation" onClick={handleMultiplierChange('add')}>+</div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="success" onClick={handleClose}>Cancel</Button>
        <Button color="success" variant="outlined" onClick={handleUpdateUnforgiving}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}
