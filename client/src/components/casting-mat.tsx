import { useCallback, useEffect, useMemo, useRef } from "react";
import { STONE_ASSET_NAMES, fullStoneAssetMap } from "../utils/stone-asset-map";
import LeafMat from '../assets/casting-mat.png';

export const CastingMat = ({ activeStones }: { activeStones: Array<string> }) => {
  const matRef = useRef<HTMLCanvasElement | null>(null);
  const leafMat = useMemo(() => new Image(), []);
  leafMat.src = LeafMat;

  const activeStonesCount = activeStones.length
  
  const getContext = () => {
    const canvas = matRef.current;

    if (canvas) {
      return canvas.getContext('2d');
    }

    return null;
  }

  const getThrow = () => {
    const x = Math.floor(Math.random() * 900) + 50;
    const y = Math.floor(Math.random() * 500) + 50;

    return [x,y]
  }

  const drawStones = useCallback((context: CanvasRenderingContext2D) => {
    activeStones.forEach(stone => {
      if (STONE_ASSET_NAMES.includes(stone)) {
        const stoneIcon = new Image();
        stoneIcon.src = fullStoneAssetMap[stone].assetPath;
  
        const [x,y] = getThrow();
        context.drawImage(stoneIcon, x, y, 50, 50)
      }
    })
  }, [activeStones])

  useEffect(() => {
    const context = getContext();
    if (context) {
      context.drawImage(leafMat, 0, 0, 1000, 600);
    }
  }, [leafMat]);

  useEffect(() => {
    const context = getContext();
    if (context) {
      drawStones(context)
    }
  }, [activeStonesCount, drawStones])

  return (
    <div style={{ 'border': 'solid', 'margin': '20px', 'height': '600px', 'width': '1000px'}}>
      <canvas ref={matRef} height={600} width={1000} />
    </div>
  )

}
