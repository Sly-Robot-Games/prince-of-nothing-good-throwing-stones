import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { STONE_ASSET_NAMES , fullStoneAssetMap } from "../utils/stone-asset-map";
import LeafMat from '../assets/casting-mat.png';
import LeafMatBorder from '../assets/casting-mat-cutout.png';
import { Button } from "@mui/material";
import { InitializeUnforgiving } from "./initialize-unforgiving";
import { UNFORGIVING } from "../utils/unforgiving";
import { useSelector } from "react-redux";
import { StoneState, selectedStonesSelector } from "../state/stones-state";

const ICON_SIZE = 50;
const CANVAS_HEIGHT = 700;
const CANVAS_WIDTH = 1000;
const START_ANGLE = 0;
const END_ANGLE = Math.PI * 2;

type InputProps = {
  activeStones: Array<string>;
  throwStones: boolean;
  clearCanvas: boolean;
  completeThrow: () => void;
  completeClear: () => void;
}

export const CastingMat = ({ activeStones, throwStones, clearCanvas, completeThrow, completeClear }: InputProps) => {
  const selectedAdditionalStones = useSelector((state: { stones: StoneState }) => selectedStonesSelector(state));

  const [unforgivingRadius, setUnforgivingRadius] = useState<number>(UNFORGIVING.RADIUS);
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);

  const matRef = useRef<HTMLCanvasElement | null>(null);
  const leafMat = useMemo(() => new Image(), []);
  leafMat.src = LeafMat;
  const leafMatBorder = useMemo(() => new Image(), []);
  leafMatBorder.src = LeafMatBorder;
  
  const getContext = () => {
    const canvas = matRef.current;

    if (canvas) {
      return canvas.getContext('2d');
    }

    return null;
  };

  const getThrow = () => {
    const x = Math.floor(Math.random() * 900) + ICON_SIZE;
    const y = Math.floor(Math.random() * 600) + ICON_SIZE;

    return [x,y]
  };

  const drawMat = useCallback(() => {
    const context = getContext();
    if (context) {
      context.drawImage(leafMat, 0, 0, context.canvas.width, context.canvas.height);
    }
  }, [leafMat]);

  // TODO - intensifying should not clear stones, store all stone locations in state
  const drawUnforgiving = useCallback(() => {
    const context = getContext();
    if (!context) {
      return;
    }
    context.beginPath();
    context.arc(UNFORGIVING.X, UNFORGIVING.Y, unforgivingRadius, START_ANGLE, END_ANGLE);
    context.fillStyle = UNFORGIVING.FILL;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = UNFORGIVING.STROKE;
    context.stroke();
    context.drawImage(leafMatBorder, 0, 0, context.canvas.width, context.canvas.height);
  }, [leafMatBorder, unforgivingRadius]);

  const clearMat = useCallback(() => {
    const context = getContext();
    if (!context) {
      return;
    }

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    drawMat();
    drawUnforgiving();
    
    if (clearCanvas) { 
      completeClear();
    }
  }, [drawMat, drawUnforgiving, clearCanvas, completeClear]);
  
  const drawStones = useCallback(() => {
    const context = getContext();
    if (!context) {
      return;
    }
    clearMat();

    const allStones = [ ...activeStones, ...selectedAdditionalStones ];

    allStones.forEach(stone => {
      if (STONE_ASSET_NAMES.includes(stone)) {
        const stoneIcon = new Image();
        stoneIcon.src = fullStoneAssetMap[stone].assetPath;
  
        const [x,y] = getThrow();
        context.drawImage(stoneIcon, x, y, ICON_SIZE, ICON_SIZE)
      }
    });
    completeThrow();
  }, [selectedAdditionalStones, activeStones, clearMat, completeThrow]);

  useEffect(() => {
    drawMat();
    drawUnforgiving();
  }, [drawMat, drawUnforgiving]);

  useEffect(() => {
    if (throwStones) {
      drawStones();
    }
  }, [throwStones, drawStones]);

  useEffect(() => {
    if (clearCanvas) {
      clearMat();
    }
  }, [clearCanvas, clearMat]);

  const intensifyUnforgiving = () => setUnforgivingRadius(unforgivingRadius + UNFORGIVING.INTENSIFIER);

  const toggleInitializerDialog = () => setDialogVisible(!dialogVisible);

  const unforgivingLevel = ((unforgivingRadius - UNFORGIVING.RADIUS) / UNFORGIVING.INTENSIFIER) + 1;

  return (
    <>
      <div className="flexColumn">
        <div className="rounded marginVertical" style={{ height: `${CANVAS_HEIGHT}px`, width: `${CANVAS_WIDTH}px` }}>
          <canvas ref={matRef} height={CANVAS_HEIGHT} width={CANVAS_WIDTH} />
        </div>
        <div className="flexSpread fullWidth">
          <div className="body" style={{ alignSelf: 'flex-start' }}>Unforgiving Level: {unforgivingLevel}</div>
          <div>
            <Button
              variant="outlined"
              style={{ borderColor: 'whitesmoke', color: 'whitesmoke', marginRight: 10 }}
              onClick={toggleInitializerDialog}
              size="small"
            >
              Initialize Unforgiving
            </Button>
            <Button
              style={{ width: 'fit-content' }}
              variant="contained"
              color="warning"
              onClick={intensifyUnforgiving}
              size="small"
            >
                Intensify The Unforgiving
            </Button>
          </div>
        </div>
      </div>
      {dialogVisible && (
        <InitializeUnforgiving setRadius={setUnforgivingRadius} handleClose={toggleInitializerDialog} />
      )}
    </>
  )
}
