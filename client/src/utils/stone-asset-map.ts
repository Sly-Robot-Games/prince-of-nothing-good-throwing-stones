type StoneAssetDictionary = Record<string, StoneAsset>
type StoneAsset = {
  label: string,
  assetPath: string,
  selectable: boolean,
};

export const basicStoneAssetMap: StoneAssetDictionary = {
  yourself: {
    label: "Yourself",
    assetPath: "",
    selectable: false,
  },
  others: {
    label: "Others",
    assetPath: "",
    selectable: false,
  },
  situation: {
    label: "The Situation",
    assetPath: "",
    selectable: false,
  },
  solution: {
    label: "A Solution",
    assetPath: "",
    selectable: false,
  },
  discovery: {
    label: "A Discovery",
    assetPath: "",
    selectable: false,
  },
  complication: {
    label: "A Complication",
    assetPath: "",
    selectable: false,
  },
  threat: {
    label: "A Threat",
    assetPath: "",
    selectable: false,
  }
} as const;

export const bonusStoneAssetMap: StoneAssetDictionary = {
  before: {
    label: "The Before",
    assetPath: "",
    selectable: true,
  },
  secondDiscovery: {
    label: "A Second Discovery",
    assetPath: "",
    selectable: true,
  },
  boon: {
    label: "A Boon",
    assetPath: "",
    selectable: true,
  }
} as const;

export const crewStoneAssetMap: StoneAssetDictionary = {
  asher: {
    label: "Asher",
    assetPath: "",
    selectable: true,
  },
  talin: {
    label: "Talin",
    assetPath: "",
    selectable: true,
  },
  cal: {
    label: "Cal",
    assetPath: "",
    selectable: true,
  },
  jazz: {
    label: "Jazz",
    assetPath: "",
    selectable: true,
  }
} as const;


export const fullStoneAssetMap: StoneAssetDictionary = {
  ...basicStoneAssetMap,
  ...bonusStoneAssetMap,
  ...crewStoneAssetMap
} as const;
