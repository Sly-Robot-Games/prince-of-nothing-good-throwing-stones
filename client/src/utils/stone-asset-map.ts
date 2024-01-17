import ComplicationIcon from '../assets/basic-stone-complication.png';
import DiscoveryIcon from '../assets/basic-stone-discovery.png';
import OthersIcon from '../assets/basic-stone-others.png';
import SituationIcon from '../assets/basic-stone-situation.png';
import SolutionIcon from '../assets/basic-stone-solution.png';
import ThreatIcon from '../assets/basic-stone-threat.png';
import YourselfIcon from '../assets/basic-stone-yourself.png';
import BeforeIcon from '../assets/bonus-stone-before.png';
import SecondDiscoveryIcon from '../assets/bonus-stone-discovery.png';
import BoonIcon from '../assets/bonus-stone-boon.png';
import AsherIcon from '../assets/crew-stone-asher.png';
import CalIcon from '../assets/crew-stone-cal.png';
import JazzIcon from '../assets/crew-stone-jazz.png';
import TalinIcon from '../assets/crew-stone-talin.png';


type StoneAssetDictionary = Record<string, StoneAsset>
type StoneAsset = {
  label: string,
  assetPath: string,
  selectable: boolean,
};

export const basicStoneAssetMap: StoneAssetDictionary = {
  yourself: {
    label: "Yourself",
    assetPath: YourselfIcon,
    selectable: false,
  },
  others: {
    label: "Others",
    assetPath: OthersIcon,
    selectable: false,
  },
  situation: {
    label: "The Situation",
    assetPath: SituationIcon,
    selectable: false,
  },
  solution: {
    label: "A Solution",
    assetPath: SolutionIcon,
    selectable: false,
  },
  discovery: {
    label: "A Discovery",
    assetPath: DiscoveryIcon,
    selectable: false,
  },
  complication: {
    label: "A Complication",
    assetPath: ComplicationIcon,
    selectable: false,
  },
  threat: {
    label: "A Threat",
    assetPath: ThreatIcon,
    selectable: false,
  }
} as const;

export const bonusStoneAssetMap: StoneAssetDictionary = {
  before: {
    label: "The Before",
    assetPath: BeforeIcon,
    selectable: true,
  },
  secondDiscovery: {
    label: "A Second Discovery",
    assetPath: SecondDiscoveryIcon,
    selectable: true,
  },
  boon: {
    label: "A Boon",
    assetPath: BoonIcon,
    selectable: true,
  }
} as const;

export const crewStoneAssetMap: StoneAssetDictionary = {
  asher: {
    label: "Asher",
    assetPath: AsherIcon,
    selectable: true,
  },
  talin: {
    label: "Talin",
    assetPath: TalinIcon,
    selectable: true,
  },
  cal: {
    label: "Cal",
    assetPath: CalIcon,
    selectable: true,
  },
  jazz: {
    label: "Jazz",
    assetPath: JazzIcon,
    selectable: true,
  }
} as const;


export const fullStoneAssetMap: StoneAssetDictionary = {
  ...basicStoneAssetMap,
  ...bonusStoneAssetMap,
  ...crewStoneAssetMap
} as const;
