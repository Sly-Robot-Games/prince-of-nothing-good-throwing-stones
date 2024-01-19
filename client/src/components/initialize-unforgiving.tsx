import { useState } from "react";
import { UNFORGIVING } from "./casting-mat";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import { TextField } from "@mui/material";

export const InitializeUnforgiving = ({ setRadius, handleClose }: { setRadius: (r: number) => void; handleClose: () => void; }) => {
  const [error, setError] = useState<boolean>();
  const [multiplier, setMultiplier] = useState<number>(1);
  
  const handleMultiplierChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setError(false);
    const parsedValue = parseInt(e.target.value, 10);
    if (Number.isNaN(parsedValue)) {
      setError(true);
      return;
    }

    if (parsedValue > 15 || parsedValue < 1) {
      return;
    }

    setMultiplier(parsedValue);
  }

  const handleUpdateUnforgiving = () => {
    setRadius(UNFORGIVING.RADIUS + (UNFORGIVING.INTENSIFIER * multiplier));
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
        <div className="flexRow">
          <div className="marginRight body">Unforgiving Level: </div>
          <TextField
            variant="standard"
            value={multiplier}
            error={error}
            onChange={handleMultiplierChange}
            type="number"
            color="success"
            style={{ width: 50 }}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="success" onClick={handleClose}>Cancel</Button>
        <Button color="success" variant="outlined" onClick={handleUpdateUnforgiving}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}
