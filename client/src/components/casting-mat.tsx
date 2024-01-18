import { useCallback, useEffect, useMemo, useRef } from "react";
import { STONE_ASSET_NAMES, fullStoneAssetMap } from "../utils/stone-asset-map";
import LeafMat from '../assets/casting-mat.png';

const ICON_SIZE = 50;
const CANVAS_HEIGHT = 700;
const CANVAS_WIDTH = 1000;

type InputProps = {
  activeStones: Array<string>;
  throwStones: boolean;
  clearCanvas: boolean;
  completeThrow: () => void;
  completeClear: () => void;
}

export const CastingMat = ({ activeStones, throwStones, clearCanvas, completeThrow, completeClear }: InputProps) => {
  const matRef = useRef<HTMLCanvasElement | null>(null);
  const leafMat = useMemo(() => new Image(), []);
  leafMat.src = LeafMat;
  
  const getContext = () => {
    const canvas = matRef.current;

    if (canvas) {
      return canvas.getContext('2d');
    }

    return null;
  }

  const getThrow = () => {
    const x = Math.floor(Math.random() * 900) + ICON_SIZE;
    const y = Math.floor(Math.random() * 600) + ICON_SIZE;

    return [x,y]
  }

  const drawMat = useCallback(() => {
    const context = getContext();
    if (context) {
      context.drawImage(leafMat, 0, 0, context.canvas.width, context.canvas.height);
    }
  }, [leafMat]);

  const clearMat = useCallback(() => {
    const context = getContext();
    if (!context) {
      return;
    }

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    drawMat();
    if (clearCanvas) { 
      completeClear();
    }
  }, [drawMat, clearCanvas, completeClear])

  const drawStones = useCallback(() => {
    const context = getContext();
    if (!context) {
      return;
    }
    clearMat();

    activeStones.forEach(stone => {
      if (STONE_ASSET_NAMES.includes(stone)) {
        const stoneIcon = new Image();
        stoneIcon.src = fullStoneAssetMap[stone].assetPath;
  
        const [x,y] = getThrow();
        context.drawImage(stoneIcon, x, y, ICON_SIZE, ICON_SIZE)
      }
    });
    completeThrow();
  }, [activeStones, clearMat, completeThrow])

  useEffect(() => {
    drawMat()
  }, [drawMat]);

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

  return (
      <div className="flexColumn">
        <div className="rounded" style={{ height: `${CANVAS_HEIGHT}px`, width: `${CANVAS_WIDTH}px` }}>
          <canvas ref={matRef} height={CANVAS_HEIGHT} width={CANVAS_WIDTH} />
        </div>
      </div>
  )

}
