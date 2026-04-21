
import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';


const getPartImage = (id: string, fileName?: string, imageHint: string = 'beyblade', exists: boolean = true): ImagePlaceholder => {
  return {
    id: id,
    description: id.replace(/-/g, ' '),
    imageUrl: (fileName && exists) ? `/Part-Images/${fileName}` : '/comingsoon.svg',
    imageHint: imageHint
  }
}

export type PartCategory = 'Blade' | 'Ratchet' | 'Bit' | 'Product' | 'Lock Chip' | 'Over Blade' | 'Metal Blade' | 'Assist Blade' | 'Beyblades' | 'Full Blade' | 'Stadiums' | 'Launchers' | 'Launcher Grips' | 'Accessories';
export type Series = 'BX' | 'UX' | 'CX' | 'BXE' | 'UXE' | 'CXE' | 'XOver' | 'Corocoro' | 'Rare Bey Get';

export type PartMode = {
  name: string;
  image: ImagePlaceholder;
  comingSoon?: boolean;
  stackedImage?: ImagePlaceholder;
  partStack60?: boolean;
  displayedName?: string;
  color?: string;
}

export type PartVariant = {
  name: string;
  image: ImagePlaceholder;
  identicalVariants?: string[];
  modes?: PartMode[];
  comingSoon?: boolean;
  stackedImage?: ImagePlaceholder;
  partStack60?: boolean;
  displayedName?: string;
  color?: string;
};

export type PartContents = {
  partId: string;
  variantName: string;
  displayedName?: string;
  color?: string;
}

export type Part = {
  id: string;
  name: string;
  category: PartCategory;
  company?: 'Hasbro' | 'Takara Tomy';
  alsoShowUnder?: ('Hasbro' | 'Takara Tomy')[];
  series?: Series[];
  type?: string;
  spinDirection?: 'Left' | 'Right';
  image: ImagePlaceholder;
  weight?: number;
  height?: string;
  identicalId?: string[];
  echoOf?: string[];
  variants?: PartVariant[];
  modes?: PartMode[];
  unique?: boolean;
  restrictions?: {
    ratchetType?: string[];
  },
  attributes?: string[];
  resistance?: 'High' | 'Low';
  xDashGear?: '10-tooth (Rush)' | '12-tooth (Normal)' | '14-tooth' | '16-tooth (Accel)' | '18-tooth (Merge)';
  bannedInRanked?: boolean;
  rubber?: boolean;
  contents?: PartContents[];
  comingSoon?: boolean;
  partStack60?: boolean;
  displayedName?: string;
  color?: string;
};

export type CollectionPart = {
  partId: string;
  variantName: string;
  uniqueId: string;
  weight?: number;
  quantity?: number;
  displayedName?: string;
  color?: string;
}

export const allParts: Part[] = [

  // Takara Tomy Products
  {
    "id": "Product_BX-01",
    "name": "BX-01 Starter DranSword 3-60F",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-01_Image", "products/takara_tomy/bx-01/product_bx-01.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-01", "variantName": "DranSword 3-60F" },
      { "partId": "TT_WinderLauncher", "variantName": "BX Winder" }
    ]
  },
  {
    "id": "Beyblade_BX-01",
    "name": "DranSword 3-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-01_Image", "products/takara_tomy/bx-01/beyblade_bx-01.webp", "beyblade"),
    "contents": [
      { "partId": "DranSword", "variantName": "BX-01 (TT) (Default)" },
      { "partId": "3-60", "variantName": "BX-01 (TT)" },
      { "partId": "F", "variantName": "BX-01 (TT)" }
    ]
  },
  {
    "id": "Product_BX-02",
    "name": "BX-02 Starter HellsScythe 4-60T",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-02_Image", "products/takara_tomy/bx-02/product_bx-02.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-02", "variantName": "HellsScythe 4-60T" },
      { "partId": "TT_WinderLauncher", "variantName": "BX Winder" }
    ]
  },
  {
    "id": "Beyblade_BX-02",
    "name": "HellsScythe 4-60T",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-02_Image", "products/takara_tomy/bx-02/beyblade_bx-02.webp", "beyblade"),
    "contents": [
      { "partId": "HellsScythe", "variantName": "BX-02 (TT) (Default)" },
      { "partId": "4-60", "variantName": "BX-02 (TT)" },
      { "partId": "T", "variantName": "BX-02 (TT)" }
    ]
  },
  {
    "id": "Product_BX-03",
    "name": "BX-03 Starter WizardArrow 4-80B",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-03_Image", "products/takara_tomy/bx-03/product_bx-03.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-03", "variantName": "WizardArrow 4-80B" },
      { "partId": "TT_WinderLauncher", "variantName": "BX Winder" }
    ]
  },
  {
    "id": "Beyblade_BX-03",
    "name": "WizardArrow 4-80B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-03_Image", "products/takara_tomy/bx-03/beyblade_bx-03.webp", "beyblade"),
    "contents": [
      { "partId": "WizardArrow", "variantName": "BX-03 (TT) (Default)" },
      { "partId": "4-80", "variantName": "BX-03 (TT)" },
      { "partId": "B", "variantName": "BX-03 (TT)" }
    ]
  },
  {
    "id": "Product_BX-04",
    "name": "BX-04 Starter KnightShield 3-80N",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-04_Image", "products/takara_tomy/bx-04/product_bx-04.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-04", "variantName": "KnightShield 3-80N" },
      { "partId": "TT_WinderLauncher", "variantName": "BX Winder" }
    ]
  },
  {
    "id": "Beyblade_BX-04",
    "name": "KnightShield 3-80N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-04_Image", "products/takara_tomy/bx-04/beyblade_bx-04.webp", "beyblade"),
    "contents": [
      { "partId": "KnightShield", "variantName": "BX-04 (TT) (Default)" },
      { "partId": "3-80", "variantName": "BX-04 (TT)" },
      { "partId": "N", "variantName": "BX-04 (TT)" }
    ]
  },
  {
    "id": "Product_BX-05",
    "name": "BX-05 Booster WizardArrow 4-80B",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-05_Image", "products/takara_tomy/bx-05/product_bx-05.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-05", "variantName": "WizardArrow 4-80B" }
    ]
  },
  {
    "id": "Beyblade_BX-05",
    "name": "WizardArrow 4-80B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-05_Image", "products/takara_tomy/bx-05/beyblade_bx-05.webp", "beyblade"),
    "contents": [
      { "partId": "WizardArrow", "variantName": "BX-05 (TT)" },
      { "partId": "4-80", "variantName": "BX-05 (TT)" },
      { "partId": "B", "variantName": "BX-05 (TT)" }
    ]
  },
  {
    "id": "Product_BX-06",
    "name": "BX-06 Booster KnightShield 3-80N",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-06_Image", "products/takara_tomy/bx-06/product_bx-06.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-06", "variantName": "KnightShield 3-80N" }
    ]
  },
  {
    "id": "Beyblade_BX-06",
    "name": "KnightShield 3-80N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-06_Image", "products/takara_tomy/bx-06/beyblade_bx-06.webp", "beyblade"),
    "contents": [
      { "partId": "KnightShield", "variantName": "BX-06 (TT)" },
      { "partId": "3-80", "variantName": "BX-06 (TT)" },
      { "partId": "N", "variantName": "BX-06 (TT)" }
    ]
  },
  {
    "id": "Product_BX-07",
    "name": "BX-07 Start Dash Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-07_Image", "products/takara_tomy/bx-07/product_bx-07.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-07", "variantName": "DranSword 3-60F" },
      { "partId": "TT_StringLauncher", "variantName": "Start Dash Set" },
      { "partId": "TT_LauncherGrip", "variantName": "Start Dash Set" },
      { "partId": "TT_Stadium", "variantName": "Start Dash Set" }
    ]
  },
  {
    "id": "Beyblade_BX-07",
    "name": "DranSword 3-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-07_Image", "products/takara_tomy/bx-07/beyblade_bx-07.webp", "beyblade"),
    "contents": [
      { "partId": "DranSword", "variantName": "BX-07 (TT)" },
      { "partId": "3-60", "variantName": "BX-07 (TT)" },
      { "partId": "F", "variantName": "BX-07 (TT)" }
    ]
  },
  {
    "id": "Product_BX-08",
    "name": "BX-08 3on3 Deck Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-08_Image", "products/takara_tomy/bx-08/product_bx-08.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-08_1", "variantName": "HellsScythe 3-80B" },
      { "partId": "Beyblade_BX-08_2", "variantName": "WizardArrow 4-60N" },
      { "partId": "Beyblade_BX-08_3", "variantName": "KnightShield 4-80T" }
    ]
  },
  {
    "id": "Beyblade_BX-08_1",
    "name": "HellsScythe 3-80B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-08_1_Image", "products/takara_tomy/bx-08/beyblade_bx-08_1.webp", "beyblade"),
    "contents": [
      { "partId": "HellsScythe", "variantName": "BX-08 (TT)" },
      { "partId": "3-80", "variantName": "BX-08 (TT)" },
      { "partId": "B", "variantName": "BX-08 (TT)" }
    ]
  },
  {
    "id": "Beyblade_BX-08_2",
    "name": "WizardArrow 4-60N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-08_2_Image", "products/takara_tomy/bx-08/beyblade_bx-08_2.webp", "beyblade"),
    "contents": [
      { "partId": "WizardArrow", "variantName": "BX-08 (TT)" },
      { "partId": "4-60", "variantName": "BX-08 (TT)" },
      { "partId": "N", "variantName": "BX-08 (TT)" }
    ]
  },
  {
    "id": "Beyblade_BX-08_3",
    "name": "KnightShield 4-80T",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-08_3_Image", "products/takara_tomy/bx-08/beyblade_bx-08_3.webp", "beyblade"),
    "contents": [
      { "partId": "KnightShield", "variantName": "BX-08 (TT)" },
      { "partId": "4-80", "variantName": "BX-08 (TT)" },
      { "partId": "T", "variantName": "BX-08 (TT)" }
    ]
  },
  {
    "id": "Product_BX-09",
    "name": "BX-09 Beybattle Pass",
    "category": "Product",
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-09_Image", "products/takara_tomy/bx-09/product_bx-09.webp", "product box"),
    "contents": [
      { "partId": "TT_BeybattlePass", "variantName": "BX-09" }
    ]
  },
  {
    "id": "Product_BX-10",
    "name": "BX-10 Xtreme Stadium",
    "category": "Product",
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-10_Image", "products/takara_tomy/bx-10/product_bx-10.webp", "product box"),
    "contents": [
      { "partId": "TT_XtremeStadium", "variantName": "BX-10" }
    ]
  },
  {
    "id": "Product_BX-11",
    "name": "BX-11 Launcher Grip",
    "category": "Product",
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-11_Image", "products/takara_tomy/bx-11/product_bx-11.webp", "product box"),
    "contents": [
      { "partId": "TT_LauncherGrip", "variantName": "BX-11" }
    ]
  },
  {
    "id": "Product_BX-12",
    "name": "BX-12 3on3 Deck Case",
    "category": "Product",
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-12_Image", "products/takara_tomy/bx-12/product_bx-12.webp", "product box"),
    "contents": [
      { "partId": "TT_DeckCase", "variantName": "BX-12" }
    ]
  },
  {
    "id": "Product_BX-13",
    "name": "BX-13 Booster KnightLance 4-80HN",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-13_Image", "products/takara_tomy/bx-13/product_bx-13.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-13", "variantName": "KnightLance 4-80HN" }
    ]
  },
  {
    "id": "Beyblade_BX-13",
    "name": "KnightLance 4-80HN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-13_Image", "products/takara_tomy/bx-13/beyblade_bx-13.webp", "beyblade"),
    "contents": [
      { "partId": "KnightLance", "variantName": "BX-13 (TT) (Default)" },
      { "partId": "4-80", "variantName": "BX-13 (TT)" },
      { "partId": "HN", "variantName": "BX-13 (TT)" }
    ]
  },
  {
    "id": "Product_BX-14-1",
    "name": "BX-14-1 Random Booster Vol. 1",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-14-1_Image", "products/takara_tomy/bx-14-1/product_bx-14-1.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-14-1", "variantName": "SharkEdge 3-60LF" }
    ]
  },
  {
    "id": "Beyblade_BX-14-1",
    "name": "SharkEdge 3-60LF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-14-1_Image", "products/takara_tomy/bx-14-1/beyblade_bx-14-1.webp", "beyblade"),
    "contents": [
      { "partId": "SharkEdge", "variantName": "BX-14-1 (TT) (Default)" },
      { "partId": "3-60", "variantName": "BX-14-1 (TT)" },
      { "partId": "LF", "variantName": "BX-14-1 (TT)" }
    ]
  },
  {
    "id": "Product_BX-14-2",
    "name": "BX-14-2 Random Booster Vol. 1",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-14-2_Image", "products/takara_tomy/bx-14-2/product_bx-14-2.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-14-2", "variantName": "SharkEdge 4-80N" }
    ]
  },
  {
    "id": "Beyblade_BX-14-2",
    "name": "SharkEdge 4-80N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-14-2_Image", "products/takara_tomy/bx-14-2/beyblade_bx-14-2.webp", "beyblade"),
    "contents": [
      { "partId": "SharkEdge", "variantName": "BX-14-2 (TT)" },
      { "partId": "4-80", "variantName": "BX-14-2 (TT)" },
      { "partId": "N", "variantName": "BX-14-2 (TT)" }
    ]
  },
  {
    "id": "Product_BX-14-3",
    "name": "BX-14-3 Random Booster Vol. 1",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-14-3_Image", "products/takara_tomy/bx-14-3/product_bx-14-3.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-14-3", "variantName": "DranSword 3-80B" }
    ]
  },
  {
    "id": "Beyblade_BX-14-3",
    "name": "DranSword 3-80B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-14-3_Image", "products/takara_tomy/bx-14-3/beyblade_bx-14-3.webp", "beyblade"),
    "contents": [
      { "partId": "DranSword", "variantName": "BX-14-3 (TT)" },
      { "partId": "3-80", "variantName": "BX-14-3 (TT)" },
      { "partId": "B", "variantName": "BX-14-3 (TT)" }
    ]
  },
  {
    "id": "Product_BX-14-4",
    "name": "BX-14-4 Random Booster Vol. 1",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-14-4_Image", "products/takara_tomy/bx-14-4/product_bx-14-4.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-14-4", "variantName": "HellsScythe 4-80LF" }
    ]
  },
  {
    "id": "Beyblade_BX-14-4",
    "name": "HellsScythe 4-80LF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-14-4_Image", "products/takara_tomy/bx-14-4/beyblade_bx-14-4.webp", "beyblade"),
    "contents": [
      { "partId": "HellsScythe", "variantName": "BX-14-4 (TT)" },
      { "partId": "4-80", "variantName": "BX-14-4 (TT)" },
      { "partId": "LF", "variantName": "BX-14-4 (TT)" }
    ]
  },
  {
    "id": "Product_BX-14-5",
    "name": "BX-14-5 Random Booster Vol. 1",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-14-5_Image", "products/takara_tomy/bx-14-5/product_bx-14-5.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-14-5", "variantName": "KnightShield 4-60LF" }
    ]
  },
  {
    "id": "Beyblade_BX-14-5",
    "name": "KnightShield 4-60LF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-14-5_Image", "products/takara_tomy/bx-14-5/beyblade_bx-14-5.webp", "beyblade"),
    "contents": [
      { "partId": "KnightShield", "variantName": "BX-14-5 (TT)" },
      { "partId": "4-60", "variantName": "BX-14-5 (TT)" },
      { "partId": "LF", "variantName": "BX-14-5 (TT)" }
    ]
  },
  {
    "id": "Product_BX-14-6",
    "name": "BX-14-6 Random Booster Vol. 1",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-14-6_Image", "products/takara_tomy/bx-14-6/product_bx-14-6.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-14-6", "variantName": "WizardArrow 3-60T" }
    ]
  },
  {
    "id": "Beyblade_BX-14-6",
    "name": "WizardArrow 3-60T",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-14-6_Image", "products/takara_tomy/bx-14-6/beyblade_bx-14-6.webp", "beyblade"),
    "contents": [
      { "partId": "WizardArrow", "variantName": "BX-14-6 (TT)" },
      { "partId": "3-60", "variantName": "BX-14-6 (TT)" },
      { "partId": "T", "variantName": "BX-14-6 (TT)" }
    ]
  },
  {
    "id": "Product_BX-15",
    "name": "BX-15 Starter LeonClaw 5-60P",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-15_Image", "products/takara_tomy/bx-15/product_bx-15.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-15", "variantName": "LeonClaw 5-60P" },
      { "partId": "TT_WinderLauncher", "variantName": "BX-15" }
    ]
  },
  {
    "id": "Beyblade_BX-15",
    "name": "LeonClaw 5-60P",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-15_Image", "products/takara_tomy/bx-15/beyblade_bx-15.webp", "beyblade"),
    "contents": [
      { "partId": "LeonClaw", "variantName": "BX-15 (TT) (Default)" },
      { "partId": "5-60", "variantName": "BX-15 (TT)" },
      { "partId": "P", "variantName": "BX-15 (TT)" }
    ]
  },
  {
    "id": "Product_BX-16-1",
    "name": "BX-16-1 Random Booster ViperTail Select",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-16-1_Image", "products/takara_tomy/bx-16-1/product_bx-16-1.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-16-1", "variantName": "ViperTail 5-80O" }
    ]
  },
  {
    "id": "Beyblade_BX-16-1",
    "name": "ViperTail 5-80O",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-16-1_Image", "products/takara_tomy/bx-16-1/beyblade_bx-16-1.webp", "beyblade"),
    "contents": [
      { "partId": "ViperTail", "variantName": "BX-16-1 (TT) (Default)" },
      { "partId": "5-80", "variantName": "BX-16-1 (TT)" },
      { "partId": "O", "variantName": "BX-16-1 (TT)" }
    ]
  },
  {
    "id": "Product_BX-16-2",
    "name": "BX-16-2 Random Booster ViperTail Select",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-16-2_Image", "products/takara_tomy/bx-16-2/product_bx-16-2.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-16-2", "variantName": "ViperTail 4-60F" }
    ]
  },
  {
    "id": "Beyblade_BX-16-2",
    "name": "ViperTail 4-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-16-2_Image", "products/takara_tomy/bx-16-2/beyblade_bx-16-2.webp", "beyblade"),
    "contents": [
      { "partId": "ViperTail", "variantName": "BX-16-2 (TT)" },
      { "partId": "4-60", "variantName": "BX-16-2 (TT)" },
      { "partId": "F", "variantName": "BX-16-2 (TT)" }
    ]
  },
  {
    "id": "Product_BX-16-3",
    "name": "BX-16-3 Random Booster ViperTail Select",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-16-3_Image", "products/takara_tomy/bx-16-3/product_bx-16-3.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-16-3", "variantName": "ViperTail 3-80HN" }
    ]
  },
  {
    "id": "Beyblade_BX-16-3",
    "name": "ViperTail 3-80HN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-16-3_Image", "products/takara_tomy/bx-16-3/beyblade_bx-16-3.webp", "beyblade"),
    "contents": [
      { "partId": "ViperTail", "variantName": "BX-16-3 (TT)" },
      { "partId": "3-80", "variantName": "BX-16-3 (TT)" },
      { "partId": "HN", "variantName": "BX-16-3 (TT)" }
    ]
  },
  {
    "id": "Product_BX-17",
    "name": "BX-17 Battle Entry Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-17_Image", "products/takara_tomy/bx-17/product_bx-17.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-17_1", "variantName": "DranSword 3-60F" },
      { "partId": "Beyblade_BX-17_2", "variantName": "WizardArrow 4-80B" },
      { "partId": "TT_WinderLauncher", "variantName": "BX-17 (Red)" },
      { "partId": "TT_WinderLauncher", "variantName": "BX-17 (Blue)" },
      { "partId": "TT_XtremeStadium", "variantName": "BX-17" }
    ]
  },
  {
    "id": "Beyblade_BX-17_1",
    "name": "DranSword 3-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-17_1_Image", "products/takara_tomy/bx-17/beyblade_bx-17_1.webp", "beyblade"),
    "contents": [
      { "partId": "DranSword", "variantName": "BX-17 (TT)" },
      { "partId": "3-60", "variantName": "BX-17 (TT)" },
      { "partId": "F", "variantName": "BX-17 (TT)" }
    ]
  },
  {
    "id": "Beyblade_BX-17_2",
    "name": "WizardArrow 4-80B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-17_2_Image", "products/takara_tomy/bx-17/beyblade_bx-17_2.webp", "beyblade"),
    "contents": [
      { "partId": "WizardArrow", "variantName": "BX-17 (TT)" },
      { "partId": "4-80", "variantName": "BX-17 (TT)" },
      { "partId": "B", "variantName": "BX-17 (TT)" }
    ]
  },
  {
    "id": "Product_BX-18",
    "name": "BX-18 String Launcher",
    "category": "Product",
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-18_Image", "products/takara_tomy/bx-18/product_bx-18.webp", "product box"),
    "contents": [
      { "partId": "TT_StringLauncher", "variantName": "BX-18" }
    ]
  },
  {
    "id": "Product_BX-19",
    "name": "BX-19 Booster RhinoHorn 3-80S",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-19_Image", "products/takara_tomy/bx-19/product_bx-19.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-19", "variantName": "RhinoHorn 3-80S" }
    ]
  },
  {
    "id": "Beyblade_BX-19",
    "name": "RhinoHorn 3-80S",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-19_Image", "products/takara_tomy/bx-19/beyblade_bx-19.webp", "beyblade"),
    "contents": [
      { "partId": "RhinoHorn", "variantName": "BX-19 (TT) (Default)" },
      { "partId": "3-80", "variantName": "BX-19 (TT)" },
      { "partId": "S", "variantName": "BX-19 (TT)" }
    ]
  },
  {
    "id": "Product_BX-20",
    "name": "BX-20 DranDagger Deck Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-20_Image", "products/takara_tomy/bx-20/product_bx-20.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-20_1", "variantName": "DranDagger 4-60R" },
      { "partId": "Beyblade_BX-20_2", "variantName": "KnightShield 5-80T" },
      { "partId": "Beyblade_BX-20_3", "variantName": "SharkEdge 3-80F" }
    ]
  },
  {
    "id": "Beyblade_BX-20_1",
    "name": "DranDagger 4-60R",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-20_1_Image", "products/takara_tomy/bx-20/beyblade_bx-20_1.webp", "beyblade"),
    "contents": [
      { "partId": "DranDagger", "variantName": "BX-20 (TT) (Default)" },
      { "partId": "4-60", "variantName": "BX-20 (TT)" },
      { "partId": "R", "variantName": "BX-20 (TT)" }
    ]
  },
  {
    "id": "Beyblade_BX-20_2",
    "name": "KnightShield 5-80T",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-20_2_Image", "products/takara_tomy/bx-20/beyblade_bx-20_2.webp", "beyblade"),
    "contents": [
      { "partId": "KnightShield", "variantName": "BX-20 (TT)" },
      { "partId": "5-80", "variantName": "BX-20 (TT)" },
      { "partId": "T", "variantName": "BX-20 (TT)" }
    ]
  },
  {
    "id": "Beyblade_BX-20_3",
    "name": "SharkEdge 3-80F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-20_3_Image", "products/takara_tomy/bx-20/beyblade_bx-20_3.webp", "beyblade"),
    "contents": [
      { "partId": "SharkEdge", "variantName": "BX-20 (TT)" },
      { "partId": "3-80", "variantName": "BX-20 (TT)" },
      { "partId": "F", "variantName": "BX-20 (TT)" }
    ]
  },
  {
    "id": "Product_BX-21",
    "name": "BX-21 HellsChain Deck Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-21_Image", "products/takara_tomy/bx-21/product_bx-21.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-21_1", "variantName": "HellsChain 5-60HT" },
      { "partId": "Beyblade_BX-21_2", "variantName": "KnightLance 3-60LF" },
      { "partId": "Beyblade_BX-21_3", "variantName": "WizardArrow 4-80N" }
    ]
  },
  {
    "id": "Beyblade_BX-21_1",
    "name": "HellsChain 5-60HT",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-21_1_Image", "products/takara_tomy/bx-21/beyblade_bx-21_1.webp", "beyblade"),
    "contents": [
      { "partId": "HellsChain", "variantName": "BX-21 (TT) (Default)" },
      { "partId": "5-60", "variantName": "BX-21 (TT)" },
      { "partId": "HT", "variantName": "BX-21 (TT)" }
    ]
  },
  {
    "id": "Beyblade_BX-21_2",
    "name": "KnightLance 3-60LF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-21_2_Image", "products/takara_tomy/bx-21/beyblade_bx-21_2.webp", "beyblade"),
    "contents": [
      { "partId": "KnightLance", "variantName": "BX-21 (TT)" },
      { "partId": "3-60", "variantName": "BX-21 (TT)" },
      { "partId": "LF", "variantName": "BX-21 (TT)" }
    ]
  },
  {
    "id": "Beyblade_BX-21_3",
    "name": "WizardArrow 4-80N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-21_3_Image", "products/takara_tomy/bx-21/beyblade_bx-21_3.webp", "beyblade"),
    "contents": [
      { "partId": "WizardArrow", "variantName": "BX-21 (TT)" },
      { "partId": "4-80", "variantName": "BX-21 (TT)" },
      { "partId": "N", "variantName": "BX-21 (TT)" }
    ]
  },
  {
    "id": "Product_BX-22",
    "name": "BX-22 DranSword 3-60F Entry Package",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-22_Image", "products/takara_tomy/bx-22/product_bx-22.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-22", "variantName": "DranSword 3-60F" },
      { "partId": "TT_EntryLauncher", "variantName": "BX-22" }
    ]
  },
  {
    "id": "Beyblade_BX-22",
    "name": "DranSword 3-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-22_Image", "products/takara_tomy/bx-22/beyblade_bx-22.webp", "beyblade"),
    "contents": [
      { "partId": "DranSword", "variantName": "BX-01 (TT) (Default)" },
      { "partId": "3-60", "variantName": "BX-01 (TT)" },
      { "partId": "F", "variantName": "BX-01 (TT)" }
    ]
  },
  {
    "id": "Product_BX-23",
    "name": "BX-23 Starter PhoenixWing 9-60GF",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-23_Image", "products/takara_tomy/bx-23/product_bx-23.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-23", "variantName": "PhoenixWing 9-60GF" },
      { "partId": "TT_StringLauncher", "variantName": "BX-23" }
    ]
  },
  {
    "id": "Beyblade_BX-23",
    "name": "PhoenixWing 9-60GF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-23_Image", "products/takara_tomy/bx-23/beyblade_bx-23.webp", "beyblade"),
    "contents": [
      { "partId": "PhoenixWing", "variantName": "BX-23 (TT) (Default)" },
      { "partId": "9-60", "variantName": "BX-23 (TT)" },
      { "partId": "GF", "variantName": "BX-23 (TT)" }
    ]
  },
  {
    "id": "Product_BX-24-1",
    "name": "BX-24-1 Random Booster Vol. 2",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-24-1_Image", "products/takara_tomy/bx-24-1/product_bx-24-1.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-24-1", "variantName": "WyvernGale 5-80GB" }
    ]
  },
  {
    "id": "Beyblade_BX-24-1",
    "name": "WyvernGale 5-80GB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-24-1_Image", "products/takara_tomy/bx-24-1/beyblade_bx-24-1.webp", "beyblade"),
    "contents": [
      { "partId": "WyvernGale", "variantName": "BX-24-1 (TT) (Default)" },
      { "partId": "5-80", "variantName": "BX-24-1 (TT)" },
      { "partId": "GB", "variantName": "BX-24-1 (TT)" }
    ]
  },
  {
    "id": "Product_BX-24-2",
    "name": "BX-24-2 Random Booster Vol. 2",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-24-2_Image", "products/takara_tomy/bx-24-2/product_bx-24-2.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-24-2", "variantName": "WyvernGale 3-60T" }
    ]
  },
  {
    "id": "Beyblade_BX-24-2",
    "name": "WyvernGale 3-60T",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-24-2_Image", "products/takara_tomy/bx-24-2/beyblade_bx-24-2.webp", "beyblade"),
    "contents": [
      { "partId": "WyvernGale", "variantName": "BX-24-2 (TT)" },
      { "partId": "3-60", "variantName": "BX-24-2 (TT)" },
      { "partId": "T", "variantName": "BX-24-2 (TT)" }
    ]
  },
  {
    "id": "Product_BX-24-3",
    "name": "BX-24-3 Random Booster Vol. 2",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-24-3_Image", "products/takara_tomy/bx-24-3/product_bx-24-3.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-24-3", "variantName": "KnightLance 4-60GB" }
    ]
  },
  {
    "id": "Beyblade_BX-24-3",
    "name": "KnightLance 4-60GB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-24-3_Image", "products/takara_tomy/bx-24-3/beyblade_bx-24-3.webp", "beyblade"),
    "contents": [
      { "partId": "KnightLance", "variantName": "BX-24-3 (TT)" },
      { "partId": "4-60", "variantName": "BX-24-3 (TT)" },
      { "partId": "GB", "variantName": "BX-24-3 (TT)" }
    ]
  },
  {
    "id": "Product_BX-24-4",
    "name": "BX-24-4 Random Booster Vol. 2",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-24-4_Image", "products/takara_tomy/bx-24-4/product_bx-24-4.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-24-4", "variantName": "ViperTail 5-60F" }
    ]
  },
  {
    "id": "Beyblade_BX-24-4",
    "name": "ViperTail 5-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-24-4_Image", "products/takara_tomy/bx-24-4/beyblade_bx-24-4.webp", "beyblade"),
    "contents": [
      { "partId": "ViperTail", "variantName": "BX-24-4 (TT)" },
      { "partId": "5-60", "variantName": "BX-24-4 (TT)" },
      { "partId": "F", "variantName": "BX-24-4 (TT)" }
    ]
  },
  {
    "id": "Product_BX-24-5",
    "name": "BX-24-5 Random Booster Vol. 2",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-24-5_Image", "products/takara_tomy/bx-24-5/product_bx-24-5.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-24-5", "variantName": "LeonClaw 3-80HN" }
    ]
  },
  {
    "id": "Beyblade_BX-24-5",
    "name": "LeonClaw 3-80HN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-24-5_Image", "products/takara_tomy/bx-24-5/beyblade_bx-24-5.webp", "beyblade"),
    "contents": [
      { "partId": "LeonClaw", "variantName": "BX-24-5 (TT)" },
      { "partId": "3-80", "variantName": "BX-24-5 (TT)" },
      { "partId": "HN", "variantName": "BX-24-5 (TT)" }
    ]
  },
  {
    "id": "Product_BX-24-6",
    "name": "BX-24-6 Random Booster Vol. 2",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-24-6_Image", "products/takara_tomy/bx-24-6/product_bx-24-6.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-24-6", "variantName": "WizardArrow 4-80GB" }
    ]
  },
  {
    "id": "Beyblade_BX-24-6",
    "name": "WizardArrow 4-80GB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-24-6_Image", "products/takara_tomy/bx-24-6/beyblade_bx-24-6.webp", "beyblade"),
    "contents": [
      { "partId": "WizardArrow", "variantName": "BX-24-6 (TT)" },
      { "partId": "4-80", "variantName": "BX-24-6 (TT)" },
      { "partId": "GB", "variantName": "BX-24-6 (TT)" }
    ]
  },
  {
    "id": "Product_BX-25",
    "name": "BX-25 Gear Case",
    "category": "Product",
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-25_Image", "products/takara_tomy/bx-25/product_bx-25.webp", "product box"),
    "contents": [
      { "partId": "TT_GearCase", "variantName": "BX-25" }
    ]
  },
  {
    "id": "Product_BX-26",
    "name": "BX-26 Booster UnicornSting 5-60GP",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-26_Image", "products/takara_tomy/bx-26/product_bx-26.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-26", "variantName": "UnicornSting 5-60GP" }
    ]
  },
  {
    "id": "Beyblade_BX-26",
    "name": "UnicornSting 5-60GP",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-26_Image", "products/takara_tomy/bx-26/beyblade_bx-26.webp", "beyblade"),
    "contents": [
      { "partId": "UnicornSting", "variantName": "BX-26 (TT) (Default)" },
      { "partId": "5-60", "variantName": "BX-26 (TT)" },
      { "partId": "GP", "variantName": "BX-26 (TT)" }
    ]
  },
  {
    "id": "Product_BX-27-1",
    "name": "BX-27-1 Random Booster SphinxCowl Select",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-27-1_Image", "products/takara_tomy/bx-27-1/product_bx-27-1.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-27-1", "variantName": "SphinxCowl 9-80GN" }
    ]
  },
  {
    "id": "Beyblade_BX-27-1",
    "name": "SphinxCowl 9-80GN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-27-1_Image", "products/takara_tomy/bx-27-1/beyblade_bx-27-1.webp", "beyblade"),
    "contents": [
      { "partId": "SphinxCowl", "variantName": "BX-27-1 (TT) (Default)" },
      { "partId": "9-80", "variantName": "BX-27-1 (TT)" },
      { "partId": "GN", "variantName": "BX-27-1 (TT)" }
    ]
  },
  {
    "id": "Product_BX-27-2",
    "name": "BX-27-2 Random Booster SphinxCowl Select",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-27-2_Image", "products/takara_tomy/bx-27-2/product_bx-27-2.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-27-2", "variantName": "SphinxCowl 4-80HT" }
    ]
  },
  {
    "id": "Beyblade_BX-27-2",
    "name": "SphinxCowl 4-80HT",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-27-2_Image", "products/takara_tomy/bx-27-2/beyblade_bx-27-2.webp", "beyblade"),
    "contents": [
      { "partId": "SphinxCowl", "variantName": "BX-27-2 (TT)" },
      { "partId": "4-80", "variantName": "BX-27-2 (TT)" },
      { "partId": "HT", "variantName": "BX-27-2 (TT)" }
    ]
  },
  {
    "id": "Product_BX-27-3",
    "name": "BX-27-3 Random Booster SphinxCowl Select",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-27-3_Image", "products/takara_tomy/bx-27-3/product_bx-27-3.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-27-3", "variantName": "SphinxCowl 5-60O" }
    ]
  },
  {
    "id": "Beyblade_BX-27-3",
    "name": "SphinxCowl 5-60O",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-27-3_Image", "products/takara_tomy/bx-27-3/beyblade_bx-27-3.webp", "beyblade"),
    "contents": [
      { "partId": "SphinxCowl", "variantName": "BX-27-3 (TT)" },
      { "partId": "5-60", "variantName": "BX-27-3 (TT)" },
      { "partId": "O", "variantName": "BX-27-3 (TT)" }
    ]
  },
  {
    "id": "Product_BX-28",
    "name": "BX-28 String Launcher (White Ver.)",
    "category": "Product",
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-28_Image", "products/takara_tomy/bx-28/product_bx-28.webp", "product box"),
    "contents": [
      { "partId": "TT_StringLauncher", "variantName": "BX-28" }
    ]
  },
  {
    "id": "Product_BX-29",
    "name": "BX-29 Custom Grip (White Ver.)",
    "category": "Product",
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-29_Image", "products/takara_tomy/bx-29/product_bx-29.webp", "product box"),
    "contents": [
      { "partId": "TT_LauncherGrip", "variantName": "BX-29" }
    ]
  },
  {
    "id": "Product_BX-30",
    "name": "BX-30 Custom Grip (Red Ver.)",
    "category": "Product",
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-30_Image", "products/takara_tomy/bx-30/product_bx-30.webp", "product box"),
    "contents": [
      { "partId": "TT_LauncherGrip", "variantName": "BX-30" }
    ]
  },
  {
    "id": "Product_BX-31-1",
    "name": "BX-31-1 Random Booster Vol. 3",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-31-1_Image", "products/takara_tomy/bx-31-1/product_bx-31-1.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-31-1", "variantName": "TyrannoBeat 4-70Q" }
    ]
  },
  {
    "id": "Beyblade_BX-31-1",
    "name": "TyrannoBeat 4-70Q",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-31-1_Image", "products/takara_tomy/bx-31-1/beyblade_bx-31-1.webp", "beyblade"),
    "contents": [
      { "partId": "TyrannoBeat", "variantName": "BX-31-1 (TT) (Default)" },
      { "partId": "4-70", "variantName": "BX-31-1 (TT)" },
      { "partId": "Q", "variantName": "BX-31-1 (TT)" }
    ]
  },
  {
    "id": "Product_BX-31-2",
    "name": "BX-31-2 Random Booster Vol. 3",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-31-2_Image", "products/takara_tomy/bx-31-2/product_bx-31-2.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-31-2", "variantName": "TyrannoBeat 3-60S" }
    ]
  },
  {
    "id": "Beyblade_BX-31-2",
    "name": "TyrannoBeat 3-60S",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-31-2_Image", "products/takara_tomy/bx-31-2/beyblade_bx-31-2.webp", "beyblade"),
    "contents": [
      { "partId": "TyrannoBeat", "variantName": "BX-31-2 (TT)" },
      { "partId": "3-60", "variantName": "BX-31-2 (TT)" },
      { "partId": "S", "variantName": "BX-31-2 (TT)" }
    ]
  },
  {
    "id": "Product_BX-31-3",
    "name": "BX-31-3 Random Booster Vol. 3",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-31-3_Image", "products/takara_tomy/bx-31-3/product_bx-31-3.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-31-3", "variantName": "HellsChain 9-80O" }
    ]
  },
  {
    "id": "Beyblade_BX-31-3",
    "name": "HellsChain 9-80O",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-31-3_Image", "products/takara_tomy/bx-31-3/beyblade_bx-31-3.webp", "beyblade"),
    "contents": [
      { "partId": "HellsChain", "variantName": "BX-31-3 (TT)" },
      { "partId": "9-80", "variantName": "BX-31-3 (TT)" },
      { "partId": "O", "variantName": "BX-31-3 (TT)" }
    ]
  },
  {
    "id": "Product_BX-31-4",
    "name": "BX-31-4 Random Booster Vol. 3",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-31-4_Image", "products/takara_tomy/bx-31-4/product_bx-31-4.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-31-4", "variantName": "DranDagger 4-70P" }
    ]
  },
  {
    "id": "Beyblade_BX-31-4",
    "name": "DranDagger 4-70P",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-31-4_Image", "products/takara_tomy/bx-31-4/beyblade_bx-31-4.webp", "beyblade"),
    "contents": [
      { "partId": "DranDagger", "variantName": "BX-31-4 (TT)" },
      { "partId": "4-70", "variantName": "BX-31-4 (TT)" },
      { "partId": "P", "variantName": "BX-31-4 (TT)" }
    ]
  },
  {
    "id": "Product_BX-31-5",
    "name": "BX-31-5 Random Booster Vol. 3",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-31-5_Image", "products/takara_tomy/bx-31-5/product_bx-31-5.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-31-5", "variantName": "SharkEdge 1-60Q" }
    ]
  },
  {
    "id": "Beyblade_BX-31-5",
    "name": "SharkEdge 1-60Q",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-31-5_Image", "products/takara_tomy/bx-31-5/beyblade_bx-31-5.webp", "beyblade"),
    "contents": [
      { "partId": "SharkEdge", "variantName": "BX-31-5 (TT)" },
      { "partId": "1-60", "variantName": "BX-31-5 (TT)" },
      { "partId": "Q", "variantName": "BX-31-5 (TT)" }
    ]
  },
  {
    "id": "Product_BX-31-6",
    "name": "BX-31-6 Random Booster Vol. 3",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-31-6_Image", "products/takara_tomy/bx-31-6/product_bx-31-6.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-31-6", "variantName": "RhinoHorn 5-80Q" }
    ]
  },
  {
    "id": "Beyblade_BX-31-6",
    "name": "RhinoHorn 5-80Q",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-31-6_Image", "products/takara_tomy/bx-31-6/beyblade_bx-31-6.webp", "beyblade"),
    "contents": [
      { "partId": "RhinoHorn", "variantName": "BX-31-6 (TT)" },
      { "partId": "5-80", "variantName": "BX-31-6 (TT)" },
      { "partId": "Q", "variantName": "BX-31-6 (TT)" }
    ]
  },
  {
    "id": "Product_BX-32",
    "name": "BX-32 Wide Xtreme Stadium",
    "category": "Product",
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-32_Image", "products/takara_tomy/bx-32/product_bx-32.webp", "product box"),
    "contents": [
      { "partId": "TT_WideXtremeStadium", "variantName": "BX-32" }
    ]
  },
  {
    "id": "Product_BX-33",
    "name": "BX-33 Booster WeissTiger 3-60U",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-33_Image", "products/takara_tomy/bx-33/product_bx-33.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-33", "variantName": "WeissTiger 3-60U" }
    ]
  },
  {
    "id": "Beyblade_BX-33",
    "name": "WeissTiger 3-60U",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-33_Image", "products/takara_tomy/bx-33/beyblade_bx-33.webp", "beyblade"),
    "contents": [
      { "partId": "WeissTiger", "variantName": "BX-33 (TT) (Default)" },
      { "partId": "3-60", "variantName": "BX-33 (TT)" },
      { "partId": "U", "variantName": "BX-33 (TT)" }
    ]
  },

  {
    "id": "Product_BX-34",
    "name": "BX-34 Starter CobaltDragoon 2-60C",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-34_Image", "products/takara_tomy/bx-34/product_bx-34.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-34", "variantName": "CobaltDragoon 2-60C" },
      { "partId": "TT_StringLauncher_L", "variantName": "BX-34" }
    ]
  },
  {
    "id": "Beyblade_BX-34",
    "name": "CobaltDragoon 2-60C",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-34_Image", "products/takara_tomy/bx-34/beyblade_bx-34.webp", "beyblade"),
    "contents": [
      { "partId": "CobaltDragoon", "variantName": "BX-34 (TT) (Default)" },
      { "partId": "2-60", "variantName": "BX-34 (TT)" },
      { "partId": "C", "variantName": "BX-34 (TT)" }
    ]
  },
  {
    "id": "Product_BX-35-1",
    "name": "BX-35-1 Random Booster Vol. 4",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-35-1_Image", "products/takara_tomy/bx-35-1/product_bx-35-1.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-35-1", "variantName": "BlackShell 4-60D" }
    ]
  },
  {
    "id": "Beyblade_BX-35-1",
    "name": "BlackShell 4-60D",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-35-1_Image", "products/takara_tomy/bx-35-1/beyblade_bx-35-1.webp", "beyblade"),
    "contents": [
      { "partId": "BlackShell", "variantName": "BX-35-1 (TT) (Default)" },
      { "partId": "4-60", "variantName": "BX-35-1 (TT)" },
      { "partId": "D", "variantName": "BX-35-1 (TT)" }
    ]
  },
  {
    "id": "Product_BX-35-2",
    "name": "BX-35-2 Random Booster Vol. 4",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-35-2_Image", "products/takara_tomy/bx-35-2/product_bx-35-2.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-35-2", "variantName": "BlackShell 9-80B" }
    ]
  },
  {
    "id": "Beyblade_BX-35-2",
    "name": "BlackShell 9-80B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-35-2_Image", "products/takara_tomy/bx-35-2/beyblade_bx-35-2.webp", "beyblade"),
    "contents": [
      { "partId": "BlackShell", "variantName": "BX-35-2 (TT)" },
      { "partId": "9-80", "variantName": "BX-35-2 (TT)" },
      { "partId": "B", "variantName": "BX-35-2 (TT)" }
    ]
  },
  {
    "id": "Product_BX-35-3",
    "name": "BX-35-3 Random Booster Vol. 4",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-35-3_Image", "products/takara_tomy/bx-35-3/product_bx-35-3.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-35-3", "variantName": "UnicornSting 3-70D" }
    ]
  },
  {
    "id": "Beyblade_BX-35-3",
    "name": "UnicornSting 3-70D",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-35-3_Image", "products/takara_tomy/bx-35-3/beyblade_bx-35-3.webp", "beyblade"),
    "contents": [
      { "partId": "UnicornSting", "variantName": "BX-35-3 (TT)" },
      { "partId": "3-70", "variantName": "BX-35-3 (TT)" },
      { "partId": "D", "variantName": "BX-35-3 (TT)" }
    ]
  },
  {
    "id": "Product_BX-35-4",
    "name": "BX-35-4 Random Booster Vol. 4",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-35-4_Image", "products/takara_tomy/bx-35-4/product_bx-35-4.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-35-4", "variantName": "WizardRod 1-60R" }
    ]
  },
  {
    "id": "Beyblade_BX-35-4",
    "name": "WizardRod 1-60R",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-35-4_Image", "products/takara_tomy/bx-35-4/beyblade_bx-35-4.webp", "beyblade"),
    "contents": [
      { "partId": "WizardRod", "variantName": "BX-35-4 (TT)" },
      { "partId": "1-60", "variantName": "BX-35-4 (TT)" },
      { "partId": "R", "variantName": "BX-35-4 (TT)" }
    ]
  },
  {
    "id": "Product_BX-35-5",
    "name": "BX-35-5 Random Booster Vol. 4",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-35-5_Image", "products/takara_tomy/bx-35-5/product_bx-35-5.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-35-5", "variantName": "PhoenixWing 5-80H" }
    ]
  },
  {
    "id": "Beyblade_BX-35-5",
    "name": "PhoenixWing 5-80H",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-35-5_Image", "products/takara_tomy/bx-35-5/beyblade_bx-35-5.webp", "beyblade"),
    "contents": [
      { "partId": "PhoenixWing", "variantName": "BX-35-5 (TT)" },
      { "partId": "5-80", "variantName": "BX-35-5 (TT)" },
      { "partId": "H", "variantName": "BX-35-5 (TT)" }
    ]
  },
  {
    "id": "Product_BX-35-6",
    "name": "BX-35-6 Random Booster Vol. 4",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-35-6_Image", "products/takara_tomy/bx-35-6/product_bx-35-6.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-35-6", "variantName": "ViperTail 5-70D" }
    ]
  },
  {
    "id": "Beyblade_BX-35-6",
    "name": "ViperTail 5-70D",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-35-6_Image", "products/takara_tomy/bx-35-6/beyblade_bx-35-6.webp", "beyblade"),
    "contents": [
      { "partId": "ViperTail", "variantName": "BX-35-6 (TT)" },
      { "partId": "5-70", "variantName": "BX-35-6 (TT)" },
      { "partId": "D", "variantName": "BX-35-6 (TT)" }
    ]
  },
  {
    "id": "Product_BX-36-1",
    "name": "BX-36-1 Random Booster WhaleWave Select",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-36-1_Image", "products/takara_tomy/bx-36-1/product_bx-36-1.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-36-1", "variantName": "WhaleWave 5-80E" }
    ]
  },
  {
    "id": "Beyblade_BX-36-1",
    "name": "WhaleWave 5-80E",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-36-1_Image", "products/takara_tomy/bx-36-1/beyblade_bx-36-1.webp", "beyblade"),
    "contents": [
      { "partId": "WhaleWave", "variantName": "BX-36-1 (TT) (Default)" },
      { "partId": "5-80", "variantName": "BX-36-1 (TT)" },
      { "partId": "E", "variantName": "BX-36-1 (TT)" }
    ]
  },
  {
    "id": "Product_BX-36-2",
    "name": "BX-36-2 Random Booster WhaleWave Select",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-36-2_Image", "products/takara_tomy/bx-36-2/product_bx-36-2.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-36-2", "variantName": "WhaleWave 4-70HN" }
    ]
  },
  {
    "id": "Beyblade_BX-36-2",
    "name": "WhaleWave 4-70HN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-36-2_Image", "products/takara_tomy/bx-36-2/beyblade_bx-36-2.webp", "beyblade"),
    "contents": [
      { "partId": "WhaleWave", "variantName": "BX-36-2 (TT)" },
      { "partId": "4-70", "variantName": "BX-36-2 (TT)" },
      { "partId": "HN", "variantName": "BX-36-2 (TT)" }
    ]
  },
  {
    "id": "Product_BX-36-3",
    "name": "BX-36-3 Random Booster WhaleWave Select",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-36-3_Image", "products/takara_tomy/bx-36-3/product_bx-36-3.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-36-3", "variantName": "WhaleWave 3-80GB" }
    ]
  },
  {
    "id": "Beyblade_BX-36-3",
    "name": "WhaleWave 3-80GB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-36-3_Image", "products/takara_tomy/bx-36-3/beyblade_bx-36-3.webp", "beyblade"),
    "contents": [
      { "partId": "WhaleWave", "variantName": "BX-36-3 (TT)" },
      { "partId": "3-80", "variantName": "BX-36-3 (TT)" },
      { "partId": "GB", "variantName": "BX-36-3 (TT)" }
    ]
  },
  {
    "id": "Product_BX-37",
    "name": "BX-37 Double Xtreme Stadium Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-37_Image", "products/takara_tomy/bx-37/product_bx-37.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-37", "variantName": "BearScratch 5-60F" },
      { "partId": "TT_WinderLauncher", "variantName": "BX-37" },
      { "partId": "TT_DoubleXtremeStadium", "variantName": "BX-37" }
    ]
  },
  {
    "id": "Beyblade_BX-37",
    "name": "BearScratch 5-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-37_Image", "products/takara_tomy/bx-37/beyblade_bx-37.webp", "beyblade"),
    "contents": [
      { "partId": "BearScratch", "variantName": "BX-37 (TT) (Default)" },
      { "partId": "5-60", "variantName": "BX-37 (TT)" },
      { "partId": "F", "variantName": "BX-37 (TT)" }
    ]
  },
  {
    "id": "Product_BX-38",
    "name": "BX-38 Booster CrimsonGaruda 4-70TP",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-38_Image", "products/takara_tomy/bx-38/product_bx-38.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-38", "variantName": "CrimsonGaruda 4-70TP" }
    ]
  },
  {
    "id": "Beyblade_BX-38",
    "name": "CrimsonGaruda 4-70TP",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-38_Image", "products/takara_tomy/bx-38/beyblade_bx-38.webp", "beyblade"),
    "contents": [
      { "partId": "CrimsonGaruda", "variantName": "BX-38 (TT) (Default)" },
      { "partId": "4-70", "variantName": "BX-38 (TT)" },
      { "partId": "TP", "variantName": "BX-38 (TT)" }
    ]
  },
  {
    "id": "Product_BX-39-1",
    "name": "BX-39-1 Random Booster ShelterDrake Select",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-39-1_Image", "products/takara_tomy/bx-39-1/product_bx-39-1.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-39-1", "variantName": "ShelterDrake 7-80GP" }
    ]
  },
  {
    "id": "Beyblade_BX-39-1",
    "name": "ShelterDrake 7-80GP",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-39-1_Image", "products/takara_tomy/bx-39-1/beyblade_bx-39-1.webp", "beyblade"),
    "contents": [
      { "partId": "ShelterDrake", "variantName": "BX-39-1 (TT) (Default)" },
      { "partId": "7-80", "variantName": "BX-39-1 (TT)" },
      { "partId": "GP", "variantName": "BX-39-1 (TT)" }
    ]
  },
  {
    "id": "Product_BX-39-2",
    "name": "BX-39-2 Random Booster ShelterDrake Select",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-39-2_Image", "products/takara_tomy/bx-39-2/product_bx-39-2.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-39-2", "variantName": "ShelterDrake 5-70O" }
    ]
  },
  {
    "id": "Beyblade_BX-39-2",
    "name": "ShelterDrake 5-70O",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-39-2_Image", "products/takara_tomy/bx-39-2/beyblade_bx-39-2.webp", "beyblade"),
    "contents": [
      { "partId": "ShelterDrake", "variantName": "BX-39-2 (TT)" },
      { "partId": "5-70", "variantName": "BX-39-2 (TT)" },
      { "partId": "O", "variantName": "BX-39-2 (TT)" }
    ]
  },
  {
    "id": "Product_BX-39-3",
    "name": "BX-39-3 Random Booster ShelterDrake Select",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-39-3_Image", "products/takara_tomy/bx-39-3/product_bx-39-3.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-39-3", "variantName": "ShelterDrake 3-60D" }
    ]
  },
  {
    "id": "Beyblade_BX-39-3",
    "name": "ShelterDrake 3-60D",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-39-3_Image", "products/takara_tomy/bx-39-3/beyblade_bx-39-3.webp", "beyblade"),
    "contents": [
      { "partId": "ShelterDrake", "variantName": "BX-39-3 (TT)" },
      { "partId": "3-60", "variantName": "BX-39-3 (TT)" },
      { "partId": "D", "variantName": "BX-39-3 (TT)" }
    ]
  },
  {
    "id": "Product_BX-40",
    "name": "BX-40 Winder Launcher L",
    "category": "Product",
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-40_Image", "products/takara_tomy/bx-40/product_bx-40.webp", "product box"),
    "contents": [
      { "partId": "TT_WinderLauncher_L", "variantName": "BX-40" }

    ]
  },
  {
    "id": "Product_BX-41",
    "name": "BX-41 Rubber Custom Grip (Gunmetal Ver.)",
    "category": "Product",
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-41_Image", "products/takara_tomy/bx-41/product_bx-41.webp", "product box"),
    "contents": [
      { "partId": "TT_LauncherGrip", "variantName": "BX-41" }
    ]
  },
  {
    "id": "Product_BX-42",
    "name": "BX-42 Rubber Custom Grip (Blue Ver.)",
    "category": "Product",
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-42_Image", "products/takara_tomy/bx-42/product_bx-42.webp", "product box"),
    "contents": [
      { "partId": "TT_LauncherGrip", "variantName": "BX-42" }
    ]
  },
  {
    "id": "Product_BX-43",
    "name": "BX-43 Gear Case (White Ver.)",
    "category": "Product",
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-43_Image", "products/takara_tomy/bx-43/product_bx-43.webp", "product box"),
    "contents": [
      { "partId": "TT_GearCase", "variantName": "BX-43" }
    ]
  },
  {
    "id": "Product_BX-44",
    "name": "BX-44 Booster TriceraPress M-85BS",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-44_Image", "products/takara_tomy/bx-44/product_bx-44.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-44", "variantName": "TriceraPress M-85BS" }
    ]
  },
  {
    "id": "Beyblade_BX-44",
    "name": "TriceraPress M-85BS",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-44_Image", "products/takara_tomy/bx-44/beyblade_bx-44.webp", "beyblade"),
    "contents": [
      { "partId": "TriceraPress", "variantName": "BX-44 (TT) (Default)" },
      { "partId": "M-85", "variantName": "BX-44 (TT)" },
      { "partId": "BS", "variantName": "BX-44 (TT)" }
    ]
  },
  {
    "id": "Product_BX-45",
    "name": "BX-45 Booster SamuraiCalibur 6-70M",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-45_Image", "products/takara_tomy/bx-45/product_bx-45.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-45", "variantName": "SamuraiCalibur 6-70M" }
    ]
  },
  {
    "id": "Beyblade_BX-45",
    "name": "SamuraiCalibur 6-70M",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-45_Image", "products/takara_tomy/bx-45/beyblade_bx-45.webp", "beyblade"),
    "contents": [
      { "partId": "SamuraiCalibur", "variantName": "BX-45 (TT) (Default)" },
      { "partId": "6-70", "variantName": "BX-45 (TT)" },
      { "partId": "M", "variantName": "BX-45 (TT)" }
    ]
  },
  {
    "id": "Product_BX-46",
    "name": "BX-46 Battle Entry Set Infinity",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-46_Image", "products/takara_tomy/bx-46/product_bx-46.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-46_1", "variantName": "CobaltDrake 9-60R" },
      { "partId": "Beyblade_BX-46_2", "variantName": "GoatTackle 7-70T" },
      { "partId": "TT_InfinityStadium", "variantName": "BX-46" },
      { "partId": "TT_WinderLauncher", "variantName": "BX-46 (Red)" },
      { "partId": "TT_WinderLauncher", "variantName": "BX-46 (Black)" }
    ]
  },

  {
    "id": "Beyblade_BX-46_1",
    "name": "CobaltDrake 9-60R",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-46_1_Image", "products/takara_tomy/bx-46/beyblade_bx-46_1.webp", "beyblade"),
    "contents": [
      { "partId": "CobaltDrake", "variantName": "BX-46 (TT)" },
      { "partId": "9-60", "variantName": "BX-46 (TT)" },
      { "partId": "R", "variantName": "BX-46 (TT)" }
    ]
  },
  {
    "id": "Beyblade_BX-46_2",
    "name": "GoatTackle 7-70T",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-46_2_Image", "products/takara_tomy/bx-46/beyblade_bx-46_2.webp", "beyblade"),
    "contents": [
      { "partId": "GoatTackle", "variantName": "BX-46 (TT) (Default)" },
      { "partId": "7-70", "variantName": "BX-46 (TT)" },
      { "partId": "T", "variantName": "BX-46 (TT)" }
    ]
  },
  {
    "id": "Product_BX-47",
    "name": "BX-47 String Launcher L (Red Ver.)",
    "category": "Product",
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-47_Image", "products/takara_tomy/bx-47/product_bx-47.webp", "product box"),
    "contents": [
      { "partId": "TT_StringLauncher_L", "variantName": "BX-47" }
    ]
  },
  {
    "id": "Product_BX-48-1",
    "name": "BX-48-1 Random Booster Vol. 9",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-48-1_Image", "products/takara_tomy/bx-48-1/product_bx-48-1.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-48-1", "variantName": "CobaltDragoon 9-80F" },
    ]
  },
  {
    "id": "Beyblade_BX-48-1",
    "name": "CobaltDragoon 9-80F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-48-1_Image", "products/takara_tomy/bx-48-1/beyblade_bx-48-1.webp", "beyblade"),
    "contents": [
      { "partId": "CobaltDragoon", "variantName": "BX-48-1" },
      { "partId": "9-80", "variantName": "BX-48-1 (TT)" },
      { "partId": "F", "variantName": "BX-48-1 (TT)" }
    ]
  },
  {
    "id": "Product_BX-48-2",
    "name": "BX-48-2 Random Booster Vol. 9",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-48-2_Image", "products/takara_tomy/bx-48-2/product_bx-48-2.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-48-2", "variantName": "SharkEdge 4-70E" },
    ]
  },
  {
    "id": "Beyblade_BX-48-2",
    "name": "SharkEdge 4-70E",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-48-2_Image", "products/takara_tomy/bx-48-2/beyblade_bx-48-2.webp", "beyblade"),
    "contents": [
      { "partId": "SharkEdge", "variantName": "BX-48-2" },
      { "partId": "4-70", "variantName": "BX-48-2 (TT)" },
      { "partId": "E", "variantName": "BX-48-2 (TT)" }
    ]
  },
  {
    "id": "Product_BX-48-3",
    "name": "BX-48-3 Random Booster Vol. 9",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-48-3_Image", "products/takara_tomy/bx-48-3/product_bx-48-3.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-48-3", "variantName": "MammothTusk 7-60S" },
    ]
  },
  {
    "id": "Beyblade_BX-48-3",
    "name": "MammothTusk 7-60S",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-48-3_Image", "products/takara_tomy/bx-48-3/beyblade_bx-48-3.webp", "beyblade"),
    "contents": [
      { "partId": "MammothTusk", "variantName": "BX-48-3" },
      { "partId": "7-60", "variantName": "BX-48-3 (TT)" },
      { "partId": "S", "variantName": "BX-48-3 (TT)" }
    ]
  },
  {
    "id": "Product_BX-48-4",
    "name": "BX-48-4 Random Booster Vol. 9",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-48-4_Image", "products/takara_tomy/bx-48-4/product_bx-48-4.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-48-4", "variantName": "HellsScythe 3-85GB" },
    ]
  },
  {
    "id": "Beyblade_BX-48-4",
    "name": "HellsScythe 3-85GB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-48-4_Image", "products/takara_tomy/bx-48-4/beyblade_bx-48-4.webp", "beyblade"),
    "contents": [
      { "partId": "HellsScythe", "variantName": "BX-48-4" },
      { "partId": "3-85", "variantName": "BX-48-4 (TT)" },
      { "partId": "GB", "variantName": "BX-48-4 (TT)" }
    ]
  },
  {
    "id": "Product_BX-48-5",
    "name": "BX-48-5 Random Booster Vol. 9",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-48-5_Image", "products/takara_tomy/bx-48-5/product_bx-48-5.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-48-5", "variantName": "DranBuster 2-80Q" },
    ]
  },
  {
    "id": "Beyblade_BX-48-5",
    "name": "DranBuster 2-80Q",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-48-5_Image", "products/takara_tomy/bx-48-5/beyblade_bx-48-5.webp", "beyblade"),
    "contents": [
      { "partId": "DranBuster", "variantName": "BX-48-5" },
      { "partId": "2-80", "variantName": "BX-48-5 (TT)" },
      { "partId": "Q", "variantName": "BX-48-5 (TT)" }
    ]
  },


  {
    "id": "Product_UX-01",
    "name": "UX-01 Starter DranBuster 1-60A",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-01_Image", "products/takara_tomy/ux-01/product_ux-01.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-01", "variantName": "DranBuster 1-60A" },
      { "partId": "TT_WinderLauncher", "variantName": "UX-01" }
    ]
  },
  {
    "id": "Beyblade_UX-01",
    "name": "DranBuster 1-60A",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-01_Image", "products/takara_tomy/ux-01/beyblade_ux-01.webp", "beyblade"),
    "contents": [
      { "partId": "DranBuster", "variantName": "UX-01 (TT) (Default)" },
      { "partId": "1-60", "variantName": "UX-01 (TT)" },
      { "partId": "A", "variantName": "UX-01 (TT)" }
    ]
  },
  {
    "id": "Product_UX-02",
    "name": "UX-02 Starter HellsHammer 3-70H",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-02_Image", "products/takara_tomy/ux-02/product_ux-02.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-02", "variantName": "HellsHammer 3-70H" },
      { "partId": "TT_WinderLauncher", "variantName": "UX-02" }
    ]
  },
  {
    "id": "Beyblade_UX-02",
    "name": "HellsHammer 3-70H",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-02_Image", "products/takara_tomy/ux-02/beyblade_ux-02.webp", "beyblade"),
    "contents": [
      { "partId": "HellsHammer", "variantName": "UX-02 (TT) (Default)" },
      { "partId": "3-70", "variantName": "UX-02 (TT)" },
      { "partId": "H", "variantName": "UX-02 (TT)" }
    ]
  },
  {
    "id": "Product_UX-03",
    "name": "UX-03 Starter WizardRod 5-70DB",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-03_Image", "products/takara_tomy/ux-03/product_ux-03.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-03", "variantName": "WizardRod 5-70DB" }
    ]
  },
  {
    "id": "Beyblade_UX-03",
    "name": "WizardRod 5-70DB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-03_Image", "products/takara_tomy/ux-03/beyblade_ux-03.webp", "beyblade"),
    "contents": [
      { "partId": "WizardRod", "variantName": "UX-03 (TT) (Default)" },
      { "partId": "5-70", "variantName": "UX-03 (TT)" },
      { "partId": "DB", "variantName": "UX-03 (TT)" }
    ]
  },
  {
    "id": "Product_UX-04",
    "name": "UX-04 Battle Entry Set U",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-04_Image", "products/takara_tomy/ux-04/product_ux-04.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-04_1", "variantName": "DranBuster 1-60A" },
      { "partId": "Beyblade_UX-04_2", "variantName": "WizardRod 5-70DB" },
      { "partId": "TT_WinderLauncher", "variantName": "UX-04 (White)" },
      { "partId": "TT_WinderLauncher", "variantName": "UX-04 (Black)" },
      { "partId": "TT_XtremeStadium", "variantName": "UX-04" }
    ]
  },
  {
    "id": "Beyblade_UX-04_1",
    "name": "DranBuster 1-60A",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-04_1_Image", "products/takara_tomy/ux-04/beyblade_ux-04_1.webp", "beyblade"),
    "contents": [
      { "partId": "DranBuster", "variantName": "UX-04 (TT)" },
      { "partId": "1-60", "variantName": "UX-04 (TT)" },
      { "partId": "A", "variantName": "UX-04 (TT)" }
    ]
  },
  {
    "id": "Beyblade_UX-04_2",
    "name": "WizardRod 5-70DB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-04_2_Image", "products/takara_tomy/ux-04/beyblade_ux-04_2.webp", "beyblade"),
    "contents": [
      { "partId": "WizardRod", "variantName": "UX-04 (TT)" },
      { "partId": "5-70", "variantName": "UX-04 (TT)" },
      { "partId": "DB", "variantName": "UX-04 (TT)" }
    ]
  },
  {
    "id": "Product_UX-05-1",
    "name": "UX-05-1 Random Booster ShinobiShadow Select",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-05-1_Image", "products/takara_tomy/ux-05-1/product_ux-05-1.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-05-1", "variantName": "ShinobiShadow 1-80MN" }
    ]
  },
  {
    "id": "Beyblade_UX-05-1",
    "name": "ShinobiShadow 1-80MN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-05-1_Image", "products/takara_tomy/ux-05-1/beyblade_ux-05-1.webp", "beyblade"),
    "contents": [
      { "partId": "ShinobiShadow", "variantName": "UX-05-1 (TT) (Default)" },
      { "partId": "1-80", "variantName": "UX-05-1 (TT)" },
      { "partId": "MN", "variantName": "UX-05-1 (TT)" }
    ]
  },
  {
    "id": "Product_UX-05-2",
    "name": "UX-05-2 Random Booster ShinobiShadow Select",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-05-2_Image", "products/takara_tomy/ux-05-2/product_ux-05-2.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-05-2", "variantName": "ShinobiShadow 9-60LF" }
    ]
  },
  {
    "id": "Beyblade_UX-05-2",
    "name": "ShinobiShadow 9-60LF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-05-2_Image", "products/takara_tomy/ux-05-2/beyblade_ux-05-2.webp", "beyblade"),
    "contents": [
      { "partId": "ShinobiShadow", "variantName": "UX-05-2 (TT)" },
      { "partId": "9-60", "variantName": "UX-05-2 (TT)" },
      { "partId": "LF", "variantName": "UX-05-2 (TT)" }
    ]
  },
  {
    "id": "Product_UX-05-3",
    "name": "UX-05-3 Random Booster ShinobiShadow Select",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-05-3_Image", "products/takara_tomy/ux-05-3/product_ux-05-3.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-05-3", "variantName": "ShinobiShadow 3-70GP" }
    ]
  },
  {
    "id": "Beyblade_UX-05-3",
    "name": "ShinobiShadow 3-70GP",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-05-3_Image", "products/takara_tomy/ux-05-3/beyblade_ux-05-3.webp", "beyblade"),
    "contents": [
      { "partId": "ShinobiShadow", "variantName": "UX-05-3 (TT)" },
      { "partId": "3-70", "variantName": "UX-05-3 (TT)" },
      { "partId": "GP", "variantName": "UX-05-3 (TT)" }
    ]
  },
  {
    "id": "Product_UX-06",
    "name": "UX-06 Booster LeonCrest 7-60GN",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-06_Image", "products/takara_tomy/ux-06/product_ux-06.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-06", "variantName": "LeonCrest 7-60GN" }
    ]
  },
  {
    "id": "Beyblade_UX-06",
    "name": "LeonCrest 7-60GN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-06_Image", "products/takara_tomy/ux-06/beyblade_ux-06.webp", "beyblade"),
    "contents": [
      { "partId": "LeonCrest", "variantName": "UX-06 (TT) (Default)" },
      { "partId": "7-60", "variantName": "UX-06 (TT)" },
      { "partId": "GN", "variantName": "UX-06 (TT)" }
    ]
  },
  {
    "id": "Product_UX-07",
    "name": "UX-07 PhoenixRudder Deck Set",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-07_Image", "products/takara_tomy/ux-07/product_ux-07.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-07_1", "variantName": "PhoenixRudder 9-70G" },
      { "partId": "Beyblade_UX-07_2", "variantName": "SphinxCowl 1-80GF" },
      { "partId": "Beyblade_UX-07_3", "variantName": "WyvernGale 2-60S" }
    ]
  },
  {
    "id": "Beyblade_UX-07_1",
    "name": "PhoenixRudder 9-70G",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-07_1_Image", "products/takara_tomy/ux-07/beyblade_ux-07_1.webp", "beyblade"),
    "contents": [
      { "partId": "PhoenixRudder", "variantName": "UX-07 (TT) (Default)" },
      { "partId": "9-70", "variantName": "UX-07 (TT)" },
      { "partId": "G", "variantName": "UX-07 (TT)" }
    ]
  },
  {
    "id": "Beyblade_UX-07_2",
    "name": "SphinxCowl 1-80GF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-07_2_Image", "products/takara_tomy/ux-07/beyblade_ux-07_2.webp", "beyblade"),
    "contents": [
      { "partId": "SphinxCowl", "variantName": "UX-07 (TT)" },
      { "partId": "1-80", "variantName": "UX-07 (TT)" },
      { "partId": "GF", "variantName": "UX-07 (TT)" }
    ]
  },
  {
    "id": "Beyblade_UX-07_3",
    "name": "WyvernGale 2-60S",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-07_3_Image", "products/takara_tomy/ux-07/beyblade_ux-07_3.webp", "beyblade"),
    "contents": [
      { "partId": "WyvernGale", "variantName": "UX-07 (TT)" },
      { "partId": "2-60", "variantName": "UX-07 (TT)" },
      { "partId": "S", "variantName": "UX-07 (TT)" }
    ]
  },
  {
    "id": "Product_UX-08",
    "name": "UX-08 Starter SilverWolf 3-80FB",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-08_Image", "products/takara_tomy/ux-08/product_ux-08.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-08", "variantName": "SilverWolf 3-80FB" },
      { "partId": "TT_WinderLauncher", "variantName": "UX-08" }
    ]
  },
  {
    "id": "Beyblade_UX-08",
    "name": "SilverWolf 3-80FB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-08_Image", "products/takara_tomy/ux-08/beyblade_ux-08.webp", "beyblade"),
    "contents": [
      { "partId": "SilverWolf", "variantName": "UX-08 (TT) (Default)" },
      { "partId": "3-80", "variantName": "UX-08 (TT)" },
      { "partId": "FB", "variantName": "UX-08 (TT)" }
    ]
  },
  {
    "id": "Product_UX-09",
    "name": "UX-09 Starter SamuraiSaber 2-70L",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-09_Image", "products/takara_tomy/ux-09/product_ux-09.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-09", "variantName": "SamuraiSaber 2-70L" },
      { "partId": "TT_HoldLauncher", "variantName": "UX-09" }
    ]
  },
  {
    "id": "Beyblade_UX-09",
    "name": "SamuraiSaber 2-70L",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-09_Image", "products/takara_tomy/ux-09/beyblade_ux-09.webp", "beyblade"),
    "contents": [
      { "partId": "SamuraiSaber", "variantName": "UX-09 (TT) (Default)" },
      { "partId": "2-70", "variantName": "UX-09 (TT)" },
      { "partId": "L", "variantName": "UX-09 (TT)" }
    ]
  },
  {
    "id": "Product_UX-10",
    "name": "UX-10 Customize Set U",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-10_Image", "products/takara_tomy/ux-10/product_ux-10.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-10_1", "variantName": "KnightMail 3-85BS" },
      { "partId": "Beyblade_UX-10_2", "variantName": "PteraSwing 7-70B" },
      { "partId": "Beyblade_UX-10_3", "variantName": "TyrannoBeat 1-60RA" },
      { "partId": "MN", "variantName": "UX-10 (TT)" },
      { "partId": "P", "variantName": "UX-10 (TT)" },
      { "partId": "R", "variantName": "UX-10 (TT)" },
      { "partId": "HellsHammer", "variantName": "UX-10 (TT)" }
    ]
  },
  {
    "id": "Beyblade_UX-10_1",
    "name": "KnightMail 3-85BS",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-10_1_Image", "products/takara_tomy/ux-10/beyblade_ux-10_1.webp", "beyblade"),
    "contents": [
      { "partId": "KnightMail", "variantName": "UX-10 (TT) (Default)" },
      { "partId": "3-85", "variantName": "UX-10 (TT)" },
      { "partId": "BS", "variantName": "UX-10 (TT)" }
    ]
  },
  {
    "id": "Beyblade_UX-10_2",
    "name": "PteraSwing 7-70B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-10_2_Image", "products/takara_tomy/ux-10/beyblade_ux-10_2.webp", "beyblade"),
    "contents": [
      { "partId": "PteraSwing", "variantName": "UX-10 (TT) (Default)" },
      { "partId": "7-70", "variantName": "UX-10 (TT)" },
      { "partId": "B", "variantName": "UX-10 (TT)" }
    ]
  },
  {
    "id": "Beyblade_UX-10_3",
    "name": "TyrannoBeat 1-60RA",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-10_3_Image", "products/takara_tomy/ux-10/beyblade_ux-10_3.webp", "beyblade"),
    "contents": [
      { "partId": "TyrannoBeat", "variantName": "UX-10 (TT)" },
      { "partId": "1-60", "variantName": "UX-10 (TT)" },
      { "partId": "RA", "variantName": "UX-10 (TT)" }
    ]
  },
  {
    "id": "Product_UX-11",
    "name": "UX-11 Starter ImpactDrake 9-60LR",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-11_Image", "products/takara_tomy/ux-11/product_ux-11.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-11", "variantName": "ImpactDrake 9-60LR" },
      { "partId": "TT_StringLauncher", "variantName": "UX-11" }
    ]
  },
  {
    "id": "Beyblade_UX-11",
    "name": "ImpactDrake 9-60LR",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-11_Image", "products/takara_tomy/ux-11/beyblade_ux-11.webp", "beyblade"),
    "contents": [
      { "partId": "ImpactDrake", "variantName": "UX-11 (TT) (Default)" },
      { "partId": "9-60", "variantName": "UX-11 (TT)" },
      { "partId": "LR", "variantName": "UX-11 (TT)" }
    ]
  },
  {
    "id": "Product_UX-12-1",
    "name": "UX-12-1 Random Booster Vol. 5",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-12-1_Image", "products/takara_tomy/ux-12-1/product_ux-12-1.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-12-1", "variantName": "GhostCircle 0-80GB" }
    ]
  },
  {
    "id": "Beyblade_UX-12-1",
    "name": "GhostCircle 0-80GB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-12-1_Image", "products/takara_tomy/ux-12-1/beyblade_ux-12-1.webp", "beyblade"),
    "contents": [
      { "partId": "GhostCircle", "variantName": "UX-12-1 (TT) (Default)" },
      { "partId": "0-80", "variantName": "UX-12-1 (TT)" },
      { "partId": "GB", "variantName": "UX-12-1 (TT)" }
    ]
  },
  {
    "id": "Product_UX-12-2",
    "name": "UX-12-2 Random Booster Vol. 5",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-12-2_Image", "products/takara_tomy/ux-12-2/product_ux-12-2.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-12-2", "variantName": "GhostCircle 4-60H" }
    ]
  },
  {
    "id": "Beyblade_UX-12-2",
    "name": "GhostCircle 4-60H",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-12-2_Image", "products/takara_tomy/ux-12-2/beyblade_ux-12-2.webp", "beyblade"),
    "contents": [
      { "partId": "GhostCircle", "variantName": "UX-12-2 (TT)" },
      { "partId": "4-60", "variantName": "UX-12-2 (TT)" },
      { "partId": "H", "variantName": "UX-12-2 (TT)" }
    ]
  },
  {
    "id": "Product_UX-12-3",
    "name": "UX-12-3 Random Booster Vol. 5",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-12-3_Image", "products/takara_tomy/ux-12-3/product_ux-12-3.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-12-3", "variantName": "ShinobiShadow 3-80F" }
    ]
  },
  {
    "id": "Beyblade_UX-12-3",
    "name": "ShinobiShadow 3-80F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-12-3_Image", "products/takara_tomy/ux-12-3/beyblade_ux-12-3.webp", "beyblade"),
    "contents": [
      { "partId": "ShinobiShadow", "variantName": "UX-12-3 (TT)" },
      { "partId": "3-80", "variantName": "UX-12-3 (TT)" },
      { "partId": "F", "variantName": "UX-12-3 (TT)" }
    ]
  },
  {
    "id": "Product_UX-12-4",
    "name": "UX-12-4 Random Booster Vol. 5",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-12-4_Image", "products/takara_tomy/ux-12-4/product_ux-12-4.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-12-4", "variantName": "LeonClaw 0-80E" }
    ]
  },
  {
    "id": "Beyblade_UX-12-4",
    "name": "LeonClaw 0-80E",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-12-4_Image", "products/takara_tomy/ux-12-4/beyblade_ux-12-4.webp", "beyblade"),
    "contents": [
      { "partId": "LeonClaw", "variantName": "UX-12-4 (TT)" },
      { "partId": "0-80", "variantName": "UX-12-4 (TT)" },
      { "partId": "E", "variantName": "UX-12-4 (TT)" }
    ]
  },
  {
    "id": "Product_UX-12-5",
    "name": "UX-12-5 Random Booster Vol. 5",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-12-5_Image", "products/takara_tomy/ux-12-5/product_ux-12-5.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-12-5", "variantName": "PhoenixFeather 2-60N" }
    ]
  },
  {
    "id": "Beyblade_UX-12-5",
    "name": "PhoenixFeather 2-60N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-12-5_Image", "products/takara_tomy/ux-12-5/beyblade_ux-12-5.webp", "beyblade"),
    "contents": [
      { "partId": "PhoenixFeather", "variantName": "UX-12-5 (TT)" },
      { "partId": "2-60", "variantName": "UX-12-5 (TT)" },
      { "partId": "N", "variantName": "UX-12-5 (TT)" }
    ]
  },
  {
    "id": "Product_UX-12-6",
    "name": "UX-12-6 Random Booster Vol. 5",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-12-6_Image", "products/takara_tomy/ux-12-6/product_ux-12-6.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-12-6", "variantName": "WyvernGale 0-80C" }
    ]
  },
  {
    "id": "Beyblade_UX-12-6",
    "name": "WyvernGale 0-80C",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-12-6_Image", "products/takara_tomy/ux-12-6/beyblade_ux-12-6.webp", "beyblade"),
    "contents": [
      { "partId": "WyvernGale", "variantName": "UX-12-6 (TT)" },
      { "partId": "0-80", "variantName": "UX-12-6 (TT)" },
      { "partId": "C", "variantName": "UX-12-6 (TT)" }
    ]
  },
  {
    "id": "Product_UX-13",
    "name": "UX-13 Booster GolemRock 1-60UN",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-13_Image", "products/takara_tomy/ux-13/product_ux-13.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-13", "variantName": "GolemRock 1-60UN" }
    ]
  },
  {
    "id": "Beyblade_UX-13",
    "name": "GolemRock 1-60UN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-13_Image", "products/takara_tomy/ux-13/beyblade_ux-13.webp", "beyblade"),
    "contents": [
      { "partId": "GolemRock", "variantName": "UX-13 (TT) (Default)" },
      { "partId": "1-60", "variantName": "UX-13 (TT)" },
      { "partId": "UN", "variantName": "UX-13 (TT)" }
    ]
  },
  {
    "id": "Product_UX-14",
    "name": "UX-14 Starter ScorpioSpear 0-70Z",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-14_Image", "products/takara_tomy/ux-14/product_ux-14.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-14", "variantName": "ScorpioSpear 0-70Z" },
      { "partId": "TT_LongWinderLauncher", "variantName": "UX-14" }
    ]
  },
  {
    "id": "Beyblade_UX-14",
    "name": "ScorpioSpear 0-70Z",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-14_Image", "products/takara_tomy/ux-14/beyblade_ux-14.webp", "beyblade"),
    "contents": [
      { "partId": "ScorpioSpear", "variantName": "UX-14 (TT) (Default)" },
      { "partId": "0-70", "variantName": "UX-14 (TT) (Default)" },
      { "partId": "Z", "variantName": "UX-14 (TT)" }
    ]
  },
  {
    "id": "Product_UX-15",
    "name": "UX-15 SharkScale Deck Set",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-15_Image", "products/takara_tomy/ux-15/product_ux-15.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-15_1", "variantName": "SharkScale 4-50UF" },
      { "partId": "Beyblade_UX-15_2", "variantName": "TyrannoRoar 1-70L" },
      { "partId": "Beyblade_UX-15_3", "variantName": "HellsBrave J3-60GF" }
    ]
  },
  {
    "id": "Beyblade_UX-15_1",
    "name": "SharkScale 4-50UF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-15_1_Image", "products/takara_tomy/ux-15/beyblade_ux-15_1.webp", "beyblade"),
    "contents": [
      { "partId": "SharkScale", "variantName": "UX-15 (TT) (Default)" },
      { "partId": "4-50", "variantName": "UX-15 (TT) (Default)" },
      { "partId": "UF", "variantName": "UX-15 (TT)" }
    ]
  },
  {
    "id": "Beyblade_UX-15_2",
    "name": "TyrannoRoar 1-70L",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-15_2_Image", "products/takara_tomy/ux-15/beyblade_ux-15_2.webp", "beyblade"),
    "contents": [
      { "partId": "TyrannoRoar", "variantName": "UX-15 (TT) (Default)" },
      { "partId": "1-70", "variantName": "UX-15 (TT) (Default)" },
      { "partId": "L", "variantName": "UX-15 (TT)" }
    ]
  },
  {
    "id": "Beyblade_UX-15_3",
    "name": "HellsBrave J3-60GF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-15_3_Image", "products/takara_tomy/ux-15/beyblade_ux-15_3.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_UX-15", "variantName": "HellsBrave J" },
      { "partId": "3-60", "variantName": "UX-15 (TT)" },
      { "partId": "GF", "variantName": "UX-15 (TT)" }
    ]
  },
  {
    "id": "FullBlade_UX-15",
    "name": "HellsBrave J",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_UX-15_Image", "products/takara_tomy/ux-15/fullblade_ux-15_3.webp", "blade"),
    "contents": [
      { "partId": "Hells-LockChip", "variantName": "UX-15 (TT)" },
      { "partId": "Brave-TT", "variantName": "UX-15 (TT)" },
      { "partId": "J-Jaggy", "variantName": "UX-15 (TT)" }
    ]
  },
  {
    "id": "Product_UX-16-1",
    "name": "UX-16-1 Random Booster ClockMirage Select",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-16-1_Image", "products/takara_tomy/ux-16-1/product_ux-16-1.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-16-1", "variantName": "ClockMirage 9-65B" }
    ]
  },
  {
    "id": "Beyblade_UX-16-1",
    "name": "ClockMirage 9-65B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-16-1_Image", "products/takara_tomy/ux-16-1/beyblade_ux-16-1.webp", "beyblade"),
    "contents": [
      { "partId": "ClockMirage", "variantName": "UX-16-1 (TT) (Default)" },
      { "partId": "9-65", "variantName": "UX-16-1 (TT)" },
      { "partId": "B", "variantName": "UX-16-1 (TT)" }
    ]
  },
  {
    "id": "Product_UX-16-2",
    "name": "UX-16-2 Random Booster ClockMirage Select",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-16-2_Image", "products/takara_tomy/ux-16-2/product_ux-16-2.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-16-2", "variantName": "ClockMirage 9-65B" }
    ]
  },
  {
    "id": "Beyblade_UX-16-2",
    "name": "ClockMirage 9-65B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-16-2_Image", "products/takara_tomy/ux-16-2/beyblade_ux-16-2.webp", "beyblade"),
    "contents": [
      { "partId": "ClockMirage", "variantName": "UX-16-2 (TT)" },
      { "partId": "9-65", "variantName": "UX-16-2 (TT)" },
      { "partId": "B", "variantName": "UX-16-2 (TT)" }
    ]
  },
  {
    "id": "Product_UX-16-3",
    "name": "UX-16-3 Random Booster ClockMirage Select",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-16-3_Image", "products/takara_tomy/ux-16-3/product_ux-16-3.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-16-3", "variantName": "ClockMirage 9-65B" }
    ]
  },
  {
    "id": "Beyblade_UX-16-3",
    "name": "ClockMirage 9-65B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-16-3_Image", "products/takara_tomy/ux-16-3/beyblade_ux-16-3.webp", "beyblade"),
    "contents": [
      { "partId": "ClockMirage", "variantName": "UX-16-3 (TT)" },
      { "partId": "9-65", "variantName": "UX-16-3 (TT)" },
      { "partId": "B", "variantName": "UX-16-3 (TT)" }
    ]
  },
  {

    "id": "Product_UX-17",
    "name": "UX-17 Starter MeteorDragoon 3-70J",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-17_Image", "products/takara_tomy/ux-17/product_ux-17.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-17", "variantName": "MeteorDragoon 3-70J" },
      { "partId": "TT_DragonWinderLauncher", "variantName": "UX-17" }
    ]


  },
  {
    "id": "Beyblade_UX-17",
    "name": "MeteorDragoon 3-70J",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-17_Image", "products/takara_tomy/ux-17/beyblade_ux-17.webp", "beyblade"),
    "contents": [
      { "partId": "MeteorDragoon", "variantName": "UX-17 (TT) (Default)" },
      { "partId": "3-70", "variantName": "UX-17 (TT)" },
      { "partId": "J", "variantName": "UX-17 (TT)" }
    ]
  },
  {


    "id": "Product_UX-18-1",
    "name": "UX-18-1 Random Booster Vol. 8",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-18-1_Image", "products/takara_tomy/ux-18-1/product_ux-18-1.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-18-1", "variantName": "Mummycurse 7-55W" }
    ]

  },
  {

    "id": "Beyblade_UX-18-1",
    "name": "Mummycurse 7-55W",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-18-1_Image", "products/takara_tomy/ux-18-1/beyblade_ux-18-1.webp", "beyblade"),
    "contents": [
      { "partId": "MummyCurse", "variantName": "UX-18-1 (TT) (Default)" },
      { "partId": "7-55", "variantName": "UX-18-1 (TT) (Default)" },
      { "partId": "W", "variantName": "UX-18-1 (TT)" }
    ]

  },
  {


    "id": "Product_UX-18-2",
    "name": "UX-18-2 Random Booster Vol. 8",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-18-2_Image", "products/takara_tomy/ux-18-2/product_ux-18-2.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-18-2", "variantName": "Mummycurse 4-60C" }
    ]

  },
  {

    "id": "Beyblade_UX-18-2",
    "name": "Mummycurse 4-60C",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-18-2_Image", "products/takara_tomy/ux-18-2/beyblade_ux-18-2.webp", "beyblade"),
    "contents": [
      { "partId": "MummyCurse", "variantName": "UX-18-2 (TT)" },
      { "partId": "4-60", "variantName": "UX-18-2 (TT)" },
      { "partId": "C", "variantName": "UX-18-2 (TT)" }
    ]

  },
  {


    "id": "Product_UX-18-3",
    "name": "UX-18-3 Random Booster Vol. 8",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-18-3_Image", "products/takara_tomy/ux-18-3/product_ux-18-3.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-18-3", "variantName": "PegasusBrush M3-85W" }
    ]

  },
  {

    "id": "Beyblade_UX-18-3",
    "name": "PegasusBrush M3-85W",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-18-3_Image", "products/takara_tomy/ux-18-3/beyblade_ux-18-3.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_UX-18-3", "variantName": "PegasusBrush M" },
      { "partId": "3-85", "variantName": "UX-18-3 (TT)" },
      { "partId": "W", "variantName": "UX-18-3 (TT)" }
    ]

  },
  {
    "id": "FullBlade_UX-18-3",
    "name": "PegasusBrush M",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_UX-18-3", "products/takara_tomy/ux-18-3/fullblade_ux-18-3.webp", "blade"),
    "contents": [
      { "partId": "Pegasus-TT", "variantName": "UX-18-3 (TT)" },
      { "partId": "Brush-TT", "variantName": "UX-18-3 (TT)" },
      { "partId": "M-Massive", "variantName": "UX-18-3 (TT)" }
    ]
  },
  {


    "id": "Product_UX-18-4",
    "name": "UX-18-4 Random Booster Vol. 8",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-18-4_Image", "products/takara_tomy/ux-18-4/product_ux-18-4.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-18-4", "variantName": "SolBrave C9-70TP" }
    ]

  },
  {

    "id": "Beyblade_UX-18-4",
    "name": "SolBrave C9-70TP",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-18-4_Image", "products/takara_tomy/ux-18-4/beyblade_ux-18-4.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_UX-18-4", "variantName": "SolBrave C" },
      { "partId": "9-70", "variantName": "UX-18-4 (TT)" },
      { "partId": "TP", "variantName": "UX-18-4 (TT)" }
    ]

  },
  {
    "id": "FullBlade_UX-18-4",
    "name": "SolBrave C",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_UX-18-4_Image", "products/takara_tomy/ux-18-4/fullblade_ux-18-4.webp", "blade"),
    "contents": [
      { "partId": "Sol-TT", "variantName": "UX-18-4 (TT)" },
      { "partId": "Brave-TT", "variantName": "UX-18-4 (TT)" },
      { "partId": "C-Charge", "variantName": "UX-18-4 (TT)" }
    ]
  },
  {


    "id": "Product_UX-18-5",
    "name": "UX-18-5 Random Booster Vol. 8",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-18-5_Image", "products/takara_tomy/ux-18-5/product_ux-18-5.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-18-5", "variantName": "Drandagger 7-55G" }
    ]

  },
  {

    "id": "Beyblade_UX-18-5",
    "name": "Drandagger 7-55G",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-18-5_Image", "products/takara_tomy/ux-18-5/beyblade_ux-18-5.webp", "beyblade"),
    "contents": [
      { "partId": "DranDagger", "variantName": "UX-18-5 (TT)" },
      { "partId": "7-55", "variantName": "UX-18-5 (TT)" },
      { "partId": "G", "variantName": "UX-18-5 (TT)" }
    ]

  },
  {


    "id": "Product_UX-18-6",
    "name": "UX-18-6 Random Booster Vol. 8",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-18-6_Image", "products/takara_tomy/ux-18-6/product_ux-18-6.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-18-6", "variantName": "WeissTiger 4-80LR" }
    ]

  },
  {

    "id": "Beyblade_UX-18-6",
    "name": "WeissTiger 4-80LR",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-18-6_Image", "products/takara_tomy/ux-18-6/beyblade_ux-18-6.webp", "beyblade"),
    "contents": [
      { "partId": "WeissTiger", "variantName": "UX-18-6 (TT)" },
      { "partId": "4-80", "variantName": "UX-18-6 (TT)" },
      { "partId": "LR", "variantName": "UX-18-6 (TT)" }
    ]

  },


  {
    "id": "Product_CX-01",
    "name": "CX-01 Starter DranBrave S6-60V",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-01_Image", "products/takara_tomy/cx-01/product_cx-01.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-01", "variantName": "DranBrave S6-60V" },
      { "partId": "TT_WinderLauncher", "variantName": "CX Winder" }
    ]
  },
  {
    "id": "Beyblade_CX-01",
    "name": "DranBrave S6-60V",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-01_Image", "products/takara_tomy/cx-01/beyblade_cx-01.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-01", "variantName": "DranBrave S" },
      { "partId": "6-60", "variantName": "CX-01 (TT)" },
      { "partId": "V", "variantName": "CX-01 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-01",
    "name": "DranBrave S",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-01_Image", "products/takara_tomy/cx-01/fullblade_cx-01.webp", "blade"),
    "contents": [
      { "partId": "Dran-LockChip", "variantName": "CX-01 (TT) (Default)" },
      { "partId": "Brave-TT", "variantName": "CX-01 (TT) (Default)" },
      { "partId": "S-Slash", "variantName": "CX-01 (TT) (Default)" }
    ]
  },
  {
    "id": "Product_CX-02",
    "name": "CX-02 Starter WizardArc R4-55LO",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-02_Image", "products/takara_tomy/cx-02/product_cx-02.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-02", "variantName": "WizardArc R4-55LO" },
      { "partId": "TT_WinderLauncher", "variantName": "CX Winder" }
    ]
  },
  {
    "id": "Beyblade_CX-02",
    "name": "WizardArc R4-55LO",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-02_Image", "products/takara_tomy/cx-02/beyblade_cx-02.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-02", "variantName": "WizardArc R" },
      { "partId": "4-55", "variantName": "CX-02 (TT)" },
      { "partId": "LO", "variantName": "CX-02 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-02",
    "name": "WizardArc R",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-02_Image", "products/takara_tomy/cx-02/fullblade_cx-02.webp", "blade"),
    "contents": [
      { "partId": "Wizard-LockChip", "variantName": "CX-02 (TT) (Default)" },
      { "partId": "Arc-TT", "variantName": "CX-02 (TT) (Default)" },
      { "partId": "R-Round", "variantName": "CX-02 (TT) (Default)" }
    ]
  },
  {
    "id": "Product_CX-03",
    "name": "CX-03 Starter PerseusDark B6-80W",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-03_Image", "products/takara_tomy/cx-03/product_cx-03.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-03", "variantName": "PerseusDark B6-80W" }
    ]
  },
  {
    "id": "Beyblade_CX-03",
    "name": "PerseusDark B6-80W",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-03_Image", "products/takara_tomy/cx-03/beyblade_cx-03.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-03", "variantName": "PerseusDark B" },
      { "partId": "6-80", "variantName": "CX-03 (TT)" },
      { "partId": "W", "variantName": "CX-03 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-03",
    "name": "PerseusDark B",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-03_Image", "products/takara_tomy/cx-03/fullblade_cx-03.webp", "blade"),
    "contents": [
      { "partId": "Perseus-LockChip", "variantName": "CX-03 (TT) (Default)" },
      { "partId": "Dark-TT", "variantName": "CX-03 (TT) (Default)" },
      { "partId": "B-Bumper", "variantName": "CX-03 (TT) (Default)" }
    ]
  },
  {
    "id": "Product_CX-04",
    "name": "CX-04 Battle Entry Set C",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-04_Image", "products/takara_tomy/cx-04/product_cx-04.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-04_1", "variantName": "DranBrave S6-60V" },
      { "partId": "Beyblade_CX-04_2", "variantName": "PerseusDark B6-80W" },
      { "partId": "TT_WinderLauncher", "variantName": "CX-04 (Black)" },
      { "partId": "TT_WinderLauncher", "variantName": "CX-04 (White)" },
      { "partId": "TT_XtremeStadium", "variantName": "CX-04" }
    ]
  },
  {
    "id": "Beyblade_CX-04_1",
    "name": "DranBrave S6-60V",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-04_1_Image", "products/takara_tomy/cx-04/beyblade_cx-04_1.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-04_1", "variantName": "DranBrave S" },
      { "partId": "6-60", "variantName": "CX-04 (TT)" },
      { "partId": "V", "variantName": "CX-04 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-04_1",
    "name": "DranBrave S",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-04_1_Image", "products/takara_tomy/cx-04/fullblade_cx-04_1.webp", "blade"),
    "contents": [
      { "partId": "Dran-LockChip", "variantName": "CX-04 (TT)" },
      { "partId": "Brave-TT", "variantName": "CX-04 (TT)" },
      { "partId": "S-Slash", "variantName": "CX-04 (TT)" }
    ]
  },
  {
    "id": "Beyblade_CX-04_2",
    "name": "PerseusDark B6-80W",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-04_2_Image", "products/takara_tomy/cx-04/beyblade_cx-04_2.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-04_2", "variantName": "PerseusDark B" },
      { "partId": "6-80", "variantName": "CX-04 (TT)" },
      { "partId": "W", "variantName": "CX-04 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-04_2",
    "name": "PerseusDark B",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-04_2_Image", "products/takara_tomy/cx-04/fullblade_cx-04_2.webp", "blade"),
    "contents": [
      { "partId": "Perseus-LockChip", "variantName": "CX-04 (TT)" },
      { "partId": "Dark-TT", "variantName": "CX-04 (TT)" },
      { "partId": "B-Bumper", "variantName": "CX-04 (TT)" }
    ]
  },
  {
    "id": "Product_CX-05-1",
    "name": "CX-05-1 Random Booster Vol. 6",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-05-1_Image", "products/takara_tomy/cx-05-1/product_cx-05-1.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-05-1", "variantName": "HellsReaper T4-70K" }
    ]
  },
  {
    "id": "Beyblade_CX-05-1",
    "name": "HellsReaper T4-70K",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-05-1_Image", "products/takara_tomy/cx-05-1/beyblade_cx-05-1.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-05-1", "variantName": "HellsReaper T" },
      { "partId": "4-70", "variantName": "CX-05-1 (TT)" },
      { "partId": "K", "variantName": "CX-05-1 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-05-1",
    "name": "HellsReaper T",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-05-1_Image", "products/takara_tomy/cx-05-1/fullblade_cx-05-1.webp", "blade"),
    "contents": [
      { "partId": "Hells-LockChip", "variantName": "CX-05-1 (TT) (Default)" },
      { "partId": "Reaper-TT", "variantName": "CX-05-1 (TT) (Default)" },
      { "partId": "T-Turn", "variantName": "CX-05-1 (TT)" }
    ]
  },
  {
    "id": "Product_CX-05-2",
    "name": "CX-05-2 Random Booster Vol. 6",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-05-2_Image", "products/takara_tomy/cx-05-2/product_cx-05-2.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-05-2", "variantName": "RhinoReaper C4-55D" }
    ]
  },
  {
    "id": "Beyblade_CX-05-2",
    "name": "RhinoReaper C4-55D",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-05-2_Image", "products/takara_tomy/cx-05-2/beyblade_cx-05-2.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-05-2", "variantName": "RhinoReaper C" },
      { "partId": "4-55", "variantName": "CX-05-2 (TT)" },
      { "partId": "D", "variantName": "CX-05-2 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-05-2",
    "name": "RhinoReaper C",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-05-2_Image", "products/takara_tomy/cx-05-2/fullblade_cx-05-2.webp", "blade"),
    "contents": [
      { "partId": "Rhino-TT", "variantName": "CX-05-2 (Default) (TT)" },
      { "partId": "Reaper-TT", "variantName": "CX-05-2 (TT)" },
      { "partId": "C-Charge-TT", "variantName": "CX-05-2 (TT) (Default)" }
    ]
  },
  {
    "id": "Product_CX-05-3",
    "name": "CX-05-3 Random Booster Vol. 6",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-05-3_Image", "products/takara_tomy/cx-05-3/product_cx-05-3.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-05-3", "variantName": "HellsArc T3-85O" }
    ]
  },
  {
    "id": "Beyblade_CX-05-3",
    "name": "HellsArc T3-85O",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-05-3_Image", "products/takara_tomy/cx-05-3/beyblade_cx-05-3.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-05-3", "variantName": "HellsArc T" },
      { "partId": "3-85", "variantName": "CX-05-3 (TT)" },
      { "partId": "O", "variantName": "CX-05-3 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-05-3",
    "name": "HellsArc T",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-05-3_Image", "products/takara_tomy/cx-05-3/fullblade_cx-05-3.webp", "blade"),
    "contents": [
      { "partId": "Hells-LockChip", "variantName": "CX-05-3 (TT)" },
      { "partId": "Arc-TT", "variantName": "CX-05-3 (TT)" },
      { "partId": "T-Turn", "variantName": "CX-05-3 (TT)" }
    ]
  },
  {
    "id": "Product_CX-05-4",
    "name": "CX-05-4 Random Booster Vol. 6",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-05-4_Image", "products/takara_tomy/cx-05-4/product_cx-05-4.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-05-4", "variantName": "LeonCrest 9-80K" }
    ]
  },
  {
    "id": "Beyblade_CX-05-4",
    "name": "LeonCrest 9-80K",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-05-4_Image", "products/takara_tomy/cx-05-4/beyblade_cx-05-4.webp", "beyblade"),
    "contents": [
      { "partId": "LeonCrest", "variantName": "CX-05-4 (TT)" },
      { "partId": "9-80", "variantName": "CX-05-4 (TT)" },
      { "partId": "K", "variantName": "CX-05-4 (TT)" }
    ]
  },
  {
    "id": "Product_CX-05-5",
    "name": "CX-05-5 Random Booster Vol. 6",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-05-5_Image", "products/takara_tomy/cx-05-5/product_cx-05-5.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-05-5", "variantName": "PhoenixRudder 4-70LF" }
    ]
  },
  {
    "id": "Beyblade_CX-05-5",
    "name": "PhoenixRudder 4-70LF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-05-5_Image", "products/takara_tomy/cx-05-5/beyblade_cx-05-5.webp", "beyblade"),
    "contents": [
      { "partId": "PhoenixRudder", "variantName": "CX-05-5 (TT)" },
      { "partId": "4-70", "variantName": "CX-05-5 (TT)" },
      { "partId": "LF", "variantName": "CX-05-5 (TT)" }
    ]
  },
  {
    "id": "Product_CX-05-6",
    "name": "CX-05-6 Random Booster Vol. 6",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-05-6_Image", "products/takara_tomy/cx-05-6/product_cx-05-6.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-05-6", "variantName": "WhaleWave 7-60K" }
    ]
  },
  {
    "id": "Beyblade_CX-05-6",
    "name": "WhaleWave 7-60K",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-05-6_Image", "products/takara_tomy/cx-05-6/beyblade_cx-05-6.webp", "beyblade"),
    "contents": [
      { "partId": "WhaleWave", "variantName": "CX-05-6 (TT)" },
      { "partId": "7-60", "variantName": "CX-05-6 (TT)" },
      { "partId": "K", "variantName": "CX-05-6 (TT)" }
    ]
  },
  {
    "id": "Product_CX-06-1",
    "name": "CX-06-1 Random Booster FoxBrush Select",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-06-1_Image", "products/takara_tomy/cx-06-1/product_cx-06-1.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-06-1", "variantName": "FoxBrush J9-70GR" }
    ]
  },
  {
    "id": "Beyblade_CX-06-1",
    "name": "FoxBrush J9-70GR",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-06-1_Image", "products/takara_tomy/cx-06-1/beyblade_cx-06-1.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-06-1", "variantName": "FoxBrush J" },
      { "partId": "9-70", "variantName": "CX-06-1 (TT)" },
      { "partId": "GR", "variantName": "CX-06-1 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-06-1",
    "name": "FoxBrush J",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-06-1_Image", "products/takara_tomy/cx-06-1/fullblade_cx-06-1.webp", "blade"),
    "contents": [
      { "partId": "Fox-LockChip", "variantName": "CX-06-1 (TT) (Default)" },
      { "partId": "Brush-TT", "variantName": "CX-06-1 (TT) (Default)" },
      { "partId": "J-Jaggy", "variantName": "CX-06-1 (TT) (Default)" }
    ]
  },
  {
    "id": "Product_CX-06-2",
    "name": "CX-06-2 Random Booster FoxBrush Select",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-06-2_Image", "products/takara_tomy/cx-06-2/product_cx-06-2.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-06-2", "variantName": "FoxBrush J0-80DB" }
    ]
  },
  {
    "id": "Beyblade_CX-06-2",
    "name": "FoxBrush J0-80DB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-06-2_Image", "products/takara_tomy/cx-06-2/beyblade_cx-06-2.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-06-2", "variantName": "FoxBrush J" },
      { "partId": "0-80", "variantName": "CX-06-2 (TT)" },
      { "partId": "DB", "variantName": "CX-06-2 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-06-2",
    "name": "FoxBrush J",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-06-2_Image", "products/takara_tomy/cx-06-2/fullbade_cx-06-2.webp", "blade"),
    "contents": [
      { "partId": "Fox-LockChip", "variantName": "CX-06-2 (TT)" },
      { "partId": "Brush-TT", "variantName": "CX-06-2 (TT)" },
      { "partId": "J-Jaggy", "variantName": "CX-06-2 (TT)" }
    ]
  },
  {
    "id": "Product_CX-06-3",
    "name": "CX-06-3 Random Booster FoxBrush Select",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-06-3_Image", "products/takara_tomy/cx-06-3/product_cx-06-3.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-06-3", "variantName": "FoxBrush J2-60U" }
    ]
  },
  {
    "id": "Beyblade_CX-06-3",
    "name": "FoxBrush J2-60U",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-06-3_Image", "products/takara_tomy/cx-06-3/beyblade_cx-06-3.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-06-3", "variantName": "FoxBrush J" },
      { "partId": "2-60", "variantName": "CX-06-3 (TT)" },
      { "partId": "U", "variantName": "CX-06-3 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-06-3",
    "name": "FoxBrush J",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-06-3_Image", "products/takara_tomy/cx-06-3/fullblade_cx-06-3.webp", "blade"),
    "contents": [
      { "partId": "Fox-LockChip", "variantName": "CX-06-3 (TT)" },
      { "partId": "Brush-TT", "variantName": "CX-06-3 (TT)" },
      { "partId": "J-Jaggy", "variantName": "CX-06-3 (TT)" }
    ]
  },
  {
    "id": "Product_CX-07",
    "name": "CX-07 Starter PegasusBlast ATr",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-07_Image", "products/takara_tomy/cx-07/product_cx-07.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-07", "variantName": "PegasusBlast ATr" },
      { "partId": "TT_LongWinderLauncher", "variantName": "CX-07" }
    ]
  },
  {
    "id": "Beyblade_CX-07",
    "name": "PegasusBlast ATr",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-07_Image", "products/takara_tomy/cx-07/beyblade_cx-07.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-07", "variantName": "PegasusBlast A" },
      { "partId": "Tr", "variantName": "CX-07 (TT) (Default)" }
    ]
  },
  {
    "id": "FullBlade_CX-07",
    "name": "PegasusBlast A",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-07_Image", "products/takara_tomy/cx-07/fullblade_cx-07.webp", "blade"),
    "contents": [
      { "partId": "Pegasus-TT", "variantName": "CX-07 (TT) (Default)" },
      { "partId": "Blast-TT", "variantName": "CX-07 (TT) (Default)" },
      { "partId": "A-Assault-TT", "variantName": "CX-07 (TT) (Default)" }
    ]
  },
  {
    "id": "Product_CX-08-1",
    "name": "CX-08-1 Random Booster Vol. 7",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-08-1_Image", "products/takara_tomy/cx-08-1/product_cx-08-1.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-08-1", "variantName": "CerberusFlame W5-80WB" }
    ]
  },
  {
    "id": "Beyblade_CX-08-1",
    "name": "CerberusFlame W5-80WB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-08-1_Image", "products/takara_tomy/cx-08-1/beyblade_cx-08-1.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-08-1", "variantName": "CerberusFlame W" },
      { "partId": "5-80", "variantName": "CX-08-1 (TT)" },
      { "partId": "WB", "variantName": "CX-08-1 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-08-1",
    "name": "CerberusFlame W",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-08-1_Image", "products/takara_tomy/cx-08-1/fullblade_cx-08-1.webp", "blade"),
    "contents": [
      { "partId": "Cerberus-TT", "variantName": "CX-08-1 (TT) (Default)" },
      { "partId": "Flame-TT", "variantName": "CX-08-1 (TT) (Default)" },
      { "partId": "W-Wheel-TT", "variantName": "CX-08-1 (TT) (Default)" }
    ]
  },
  {
    "id": "Product_CX-08-2",
    "name": "CX-08-2 Random Booster Vol. 7",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-08-2_Image", "products/takara_tomy/cx-08-2/product_cx-08-2.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-08-2", "variantName": "WhaleFlame M3-85HT" }
    ]
  },
  {
    "id": "Beyblade_CX-08-2",
    "name": "WhaleFlame M3-85HT",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-08-2_Image", "products/takara_tomy/cx-08-2/beyblade_cx-08-2.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-08-2", "variantName": "WhaleFlame M" },
      { "partId": "3-85", "variantName": "CX-08-2 (TT)" },
      { "partId": "HT", "variantName": "CX-08-2 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-08-2",
    "name": "WhaleFlame M",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-08-2_Image", "products/takara_tomy/cx-08-2/fullblade_cx-08-2.webp", "blade"),
    "contents": [
      { "partId": "Whale-TT", "variantName": "CX-08-2 (TT) (Default)" },
      { "partId": "Flame-TT", "variantName": "CX-08-2 (TT)" },
      { "partId": "M-Massive-TT", "variantName": "CX-08-2 (TT) (Default)" }
    ]
  },
  {
    "id": "Product_CX-08-3",
    "name": "CX-08-3 Random Booster Vol. 7",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-08-3_Image", "products/takara_tomy/cx-08-3/product_cx-08-3.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-08-3", "variantName": "CerberusDark W1-60F" }
    ]
  },
  {
    "id": "Beyblade_CX-08-3",
    "name": "CerberusDark W1-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-08-3_Image", "products/takara_tomy/cx-08-3/beyblade_cx-08-3.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-08-3", "variantName": "CerberusDark W" },
      { "partId": "1-60", "variantName": "CX-08-3 (TT)" },
      { "partId": "F", "variantName": "CX-08-3 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-08-3",
    "name": "CerberusDark W",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-08-3_Image", "products/takara_tomy/cx-08-3/fullblade_cx-08-3.webp", "blade"),
    "contents": [
      { "partId": "Cerberus-TT", "variantName": "CX-08-3 (TT)" },
      { "partId": "Dark-TT", "variantName": "CX-08-3 (TT)" },
      { "partId": "W-Wheel-TT", "variantName": "CX-08-3 (TT)" }
    ]
  },
  {
    "id": "Product_CX-08-4",
    "name": "CX-08-4 Random Booster Vol. 7",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-08-4_Image", "products/takara_tomy/cx-08-4/product_cx-08-4.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-08-4", "variantName": "DranBuster 5-80MN" }
    ]
  },
  {
    "id": "Beyblade_CX-08-4",
    "name": "DranBuster 5-80MN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-08-4_Image", "products/takara_tomy/cx-08-4/beyblade_cx-08-4.webp", "beyblade"),
    "contents": [
      { "partId": "DranBuster", "variantName": "CX-08-4 (TT)" },
      { "partId": "5-80", "variantName": "CX-08-4 (TT)" },
      { "partId": "MN", "variantName": "CX-08-4 (TT)" }
    ]
  },
  {
    "id": "Product_CX-08-5",
    "name": "CX-08-5 Random Booster Vol. 7",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-08-5_Image", "products/takara_tomy/cx-08-5/product_cx-08-5.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-08-5", "variantName": "BlackShell 7-70WB" }
    ]
  },
  {
    "id": "Beyblade_CX-08-5",
    "name": "BlackShell 7-70WB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-08-5_Image", "products/takara_tomy/cx-08-5/beyblade_cx-08-5.webp", "beyblade"),
    "contents": [
      { "partId": "BlackShell", "variantName": "CX-08-5 (TT)" },
      { "partId": "7-70", "variantName": "CX-08-5 (TT)" },
      { "partId": "WB", "variantName": "CX-08-5 (TT)" }
    ]
  },
  {
    "id": "Product_CX-08-6",
    "name": "CX-08-6 Random Booster Vol. 7",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-08-6_Image", "products/takara_tomy/cx-08-6/product_cx-08-6.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-08-6", "variantName": "CobaltDragoon 4-55WB" }
    ]
  },
  {
    "id": "Beyblade_CX-08-6",
    "name": "CobaltDragoon 4-55WB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-08-6_Image", "products/takara_tomy/cx-08-6/beyblade_cx-08-6.webp", "beyblade"),
    "contents": [
      { "partId": "CobaltDragoon", "variantName": "CX-08-6 (TT)" },
      { "partId": "4-55", "variantName": "CX-08-6 (TT)" },
      { "partId": "WB", "variantName": "CX-08-6 (TT)" }
    ]
  },
  {
    "id": "Product_CX-09",
    "name": "CX-09 Starter SolEclipse D5-70TK",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-09_Image", "products/takara_tomy/cx-09/product_cx-09.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-09", "variantName": "SolEclipse D5-70TK" },
      { "partId": "TT_LongWinderLauncher", "variantName": "CX-09" }
    ]
  },
  {
    "id": "Beyblade_CX-09",
    "name": "SolEclipse D5-70TK",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-09_Image", "products/takara_tomy/cx-09/beyblade_cx-09.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-09", "variantName": "SolEclipse D" },
      { "partId": "5-70", "variantName": "CX-09 (TT)" },
      { "partId": "TK", "variantName": "CX-09 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-09",
    "name": "SolEclipse D",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-09_Image_Sun", "products/takara_tomy/cx-09/fullblade_cx-09.webp", "blade (Sun Mode)"),
    "contents": [
      { "partId": "Sol-TT", "variantName": "CX-09 (TT) (Default)" },
      { "partId": "Eclipse-TT", "variantName": "CX-09 (TT)" },
      { "partId": "D-Dual-TT", "variantName": "CX-09 (TT)" }
    ]
  },
  {
    "id": "Product_CX-10",
    "name": "CX-10 Booster WolfHunt F0-60DB",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-10_Image", "products/takara_tomy/cx-10/product_cx-10.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-10", "variantName": "WolfHunt F0-60DB" }
    ]
  },
  {
    "id": "Beyblade_CX-10",
    "name": "WolfHunt F0-60DB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-10_Image", "products/takara_tomy/cx-10/beyblade_cx-10.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-10", "variantName": "WolfHunt F" },
      { "partId": "0-60", "variantName": "CX-10 (TT) (Default)" },
      { "partId": "DB", "variantName": "CX-10 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-10",
    "name": "WolfHunt F",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-10_Image", "products/takara_tomy/cx-10/fullblade_cx-10.webp", "blade"),
    "contents": [
      { "partId": "Wolf-LockChip-TT", "variantName": "CX-10 (TT) (Default)" },
      { "partId": "Hunt-TT", "variantName": "CX-10 (TT) (Default)" },
      { "partId": "F-Free-Assist", "variantName": "CX-10 (TT) (Default)" }
    ]
  },
  {
    "id": "Product_CX-11",
    "name": "CX-11 EmperorMight Deck Set",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-11_Image", "products/takara_tomy/cx-11/product_cx-11.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-11_1", "variantName": "EmperorMight HOp" },
      { "partId": "Beyblade_CX-11_2", "variantName": "GolemRock M-85HN" },
      { "partId": "Beyblade_CX-11_3", "variantName": "SharkGill 5-60FB" }
    ]
  },
  {
    "id": "Beyblade_CX-11_1",
    "name": "EmperorMight HOp",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-11_1_Image", "products/takara_tomy/cx-11/beyblade_cx-11_1.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-11", "variantName": "EmperorMight H" },
      { "partId": "Op", "variantName": "CX-11 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-11",
    "name": "EmperorMight H",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-11_Image", "products/takara_tomy/cx-11/fullblade_cx-11_1.webp", "blade"),
    "contents": [
      { "partId": "Emperor-LockChip-TT", "variantName": "CX-11 (TT) (Default)" },
      { "partId": "Might-TT", "variantName": "CX-11 (TT) (Default)" },
      { "partId": "H-Heavy-Assist", "variantName": "CX-11 (TT) (Default)" }
    ]
  },
  {
    "id": "Beyblade_CX-11_2",
    "name": "GolemRock M-85HN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-11_2_Image", "products/takara_tomy/cx-11/beyblade_cx-11_2.webp", "beyblade"),
    "contents": [
      { "partId": "GolemRock", "variantName": "CX-11 (TT)" },
      { "partId": "M-85", "variantName": "CX-11 (TT)" },
      { "partId": "HN", "variantName": "CX-11 (TT)" }
    ]
  },
  {
    "id": "Beyblade_CX-11_3",
    "name": "SharkGill 5-60FB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-11_3_Image", "products/takara_tomy/cx-11/beyblade_cx-11_3.webp", "beyblade"),
    "contents": [
      { "partId": "SharkGill", "variantName": "CX-11 (TT) (Default)" },
      { "partId": "5-60", "variantName": "CX-11 (TT)" },
      { "partId": "FB", "variantName": "CX-11 (TT)" }
    ]
  },
  {
    "id": "Product_CX-12",
    "name": "CX-12 Booster PhoenixFlare Z9-80WW",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-12_Image", "products/takara_tomy/cx-12/product_cx-12.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-12", "variantName": "PhoenixFlare Z9-80WW" },
    ]
  },
  {
    "id": "Beyblade_CX-12",
    "name": "PhoenixFlare Z9-80WW",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-12_Image", "products/takara_tomy/cx-12/beyblade_cx-12.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-12", "variantName": "PhoenixFlare Z" },
      { "partId": "9-80", "variantName": "CX-12 (TT)" },
      { "partId": "WW", "variantName": "CX-12 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-12",
    "name": "PhoenixFlare Z",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-12_Image", "products/takara_tomy/cx-12/fullblade_cx-12.webp", "blade"),
    "contents": [
      { "partId": "Phoenix-TT", "variantName": "CX-12 (TT) (Default)" },
      { "partId": "Flare-TT", "variantName": "CX-12 (TT) (Default)" },
      { "partId": "Z-Zillion-Assist", "variantName": "CX-12 (TT) (Default)" }
    ]
  },

  {
    "id": "Product_BX-00_DranzerSpiral",
    "name": "BX-00 Booster DranzerSpiral 3-80T",
    "category": "Product",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_DranzerSpiral_Image", "products/takara_tomy/bx-00_dranzer_blue/product_bx-00_dranzer_blue.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_Dranzer_Blue", "variantName": "DranzerSpiral 3-80T" }
    ]
  },
  {
    "id": "Beyblade_BX-00_Dranzer_Blue",
    "name": "DranzerSpiral 3-80T",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_Dranzer_Blue_Image", "products/takara_tomy/bx-00_dranzer_blue/beyblade_bx-00_dranzer_blue.webp", "beyblade"),
    "contents": [
      { "partId": "DranzerSpiral", "variantName": "BX-00 (TT) (Default)" },
      { "partId": "3-80", "variantName": "BX-00 (DranzerSpiral) (TT)" },
      { "partId": "T", "variantName": "BX-00 (DranzerSpiral) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_CobaltDrake_MetalCoat_Blue",
    "name": "BX-00 Booster CobaltDrake 4-60F (Metal Coat: Blue)",
    "category": "Product",
    "series": ["Rare Bey Get", "BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_CobaltDrake_MetalCoat_Blue_Image", "products/takara_tomy/bx-00_cobaltdrake_metalcoat_blue/product_bx-00_cobaltdrake_metalcoat_blue.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_CobaltDrake_MetalCoat_Blue", "variantName": "CobaltDrake 4-60F" }
    ]
  },
  {
    "id": "Beyblade_BX-00_CobaltDrake_MetalCoat_Blue",
    "name": "CobaltDrake 4-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["Rare Bey Get", "BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_CobaltDrake_MetalCoat_Blue_Image", "products/takara_tomy/bx-00_cobaltdrake_metalcoat_blue/beyblade_bx-00_cobaltdrake_metalcoat_blue.webp", "beyblade"),
    "contents": [
      { "partId": "CobaltDrake", "variantName": "Rare Bey Get Metal Coat (TT) (Default)" },
      { "partId": "4-60", "variantName": "BX-00 Rare Bey Get (CobaltDrake Metal Coat Blue) (TT)" },
      { "partId": "F", "variantName": "Rare Bey Get (CobaltDrake Metal Coat Blue) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_HellsScythe_MetalCoat_Gold",
    "name": "BX-00 Booster HellsScythe 4-60T (Metal Coat: Gold)",
    "category": "Product",
    "series": ["Rare Bey Get", "BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_HellsScythe_MetalCoat_Gold_Image", "products/takara_tomy/bx-00_hellsscythe_metalcoat_gold/product_bx-00_hellsscythe_metalcoat_gold.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_HellsScythe_MetalCoat_Gold", "variantName": "HellsScythe 4-60T" }
    ]
  },
  {
    "id": "Beyblade_BX-00_HellsScythe_MetalCoat_Gold",
    "name": "HellsScythe 4-60T",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["Rare Bey Get", "BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_HellsScythe_MetalCoat_Gold_Image", "products/takara_tomy/bx-00_hellsscythe_metalcoat_gold/beyblade_bx-00_hellsscythe_metalcoat_gold.webp", "beyblade"),
    "contents": [
      { "partId": "HellsScythe", "variantName": "Rare Bey Get (TT)" },
      { "partId": "4-60", "variantName": "BX-00 Rare Bey Get (HellsScythe Metal Coat Gold) (TT)" },
      { "partId": "T", "variantName": "Rare Bey Get (HellsScythe Metal Coat Gold) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_DranSword_MetalCoat_Bronze",
    "name": "BX-00 DranSword 3-60F (Metal Coat: Bronze)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_DranSword_MetalCoat_Bronze_Image", "products/takara_tomy/bx-00_dransword_metalcoat_bronze/product_bx-00_dransword_metalcoat_bronze.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_DranSword_MetalCoat_Bronze", "variantName": "DranSword 3-60F" }
    ]
  },
  {
    "id": "Beyblade_BX-00_DranSword_MetalCoat_Bronze",
    "name": "DranSword 3-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_DranSword_MetalCoat_Bronze_Image", "products/takara_tomy/bx-00_dransword_metalcoat_bronze/beyblade_bx-00_dransword_metalcoat_bronze.webp", "beyblade"),
    "contents": [
      { "partId": "DranSword", "variantName": "G1 3rd Place (TT)" },
      { "partId": "3-60", "variantName": "G1 3rd Prize (DranSword Bronze) (TT)" },
      { "partId": "F", "variantName": "G1 3rd Place (DranSword Metal Coat Bronze) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_DranSword_MetalCoat_Silver",
    "name": "BX-00 DranSword 3-60F (Metal Coat: Silver)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_DranSword_MetalCoat_Silver_Image", "products/takara_tomy/bx-00_dransword_metalcoat_silver/product_bx-00_dransword_metalcoat_silver.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_DranSword_MetalCoat_Silver", "variantName": "DranSword 3-60F" }
    ]
  },
  {
    "id": "Beyblade_BX-00_DranSword_MetalCoat_Silver",
    "name": "DranSword 3-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_DranSword_MetalCoat_Silver_Image", "products/takara_tomy/bx-00_dransword_metalcoat_silver/beyblade_bx-00_dransword_metalcoat_silver.webp", "beyblade"),
    "contents": [
      { "partId": "DranSword", "variantName": "G1 2nd Place (TT)" },
      { "partId": "3-60", "variantName": "G1 2nd Prize (Dransword Silver) (TT)" },
      { "partId": "F", "variantName": "G1 2nd Place (Dransword Silver) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_DranSword_MetalCoat_Gold",
    "name": "BX-00 DranSword 3-60F (Metal Coat: Gold)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_DranSword_MetalCoat_Gold_Image", "products/takara_tomy/bx-00_dransword_metalcoat_gold/product_bx-00_dransword_metalcoat_gold.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_DranSword_MetalCoat_Gold", "variantName": "DranSword 3-60F" }
    ]
  },
  {
    "id": "Beyblade_BX-00_DranSword_MetalCoat_Gold",
    "name": "DranSword 3-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_DranSword_MetalCoat_Gold_Image", "products/takara_tomy/bx-00_dransword_metalcoat_gold/beyblade_bx-00_dransword_metalcoat_gold.webp", "beyblade"),
    "contents": [
      { "partId": "DranSword", "variantName": "G1 1st Place (TT)" },
      { "partId": "3-60", "variantName": "G1 1st Prize (DranSword Gold) (TT)" },
      { "partId": "F", "variantName": "G1 1st Place (DranSword Metal Coat Gold) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_Corocoro_Persona_Scythe",
    "name": "BX-00 Booster HellsScythe 3-80F (SP X Bey)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_Corocoro_Persona_Scythe_Image", "products/takara_tomy/bx-00_corocoro_persona_hellsscythe/product_bx-00_corocoro_persona_hellsscythe.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_Corocoro_Persona_Scythe", "variantName": "HellsScythe 3-80F" }
    ]
  },
  {
    "id": "Beyblade_BX-00_Corocoro_Persona_Scythe",
    "name": "HellsScythe 3-80F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_Corocoro_Persona_Scythe_Image", "products/takara_tomy/bx-00_corocoro_persona_hellsscythe/beyblade_bx-00_corocoro_persona_hellsscythe.webp", "beyblade"),
    "contents": [
      { "partId": "HellsScythe", "variantName": "Corocoro (TT)" },
      { "partId": "3-80", "variantName": "Corocoro (Persona HellsScythe) (TT)" },
      { "partId": "F", "variantName": "Corocoro (Persona HellsScythe) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_DranSword_Shushiro",
    "name": "BX-00 Booster DranSword 3-60F (Sushiro Ver.)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_DranSword_Shushiro_Image", "products/takara_tomy/bx-00_dransword_shushiro/product_bx-00_dransword_shushiro.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_DranSword_Shushiro", "variantName": "DranSword 3-60F" }
    ]
  },
  {
    "id": "Beyblade_BX-00_DranSword_Shushiro",
    "name": "DranSword 3-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_DranSword_Shushiro_Image", "products/takara_tomy/bx-00_dransword_shushiro/beyblade_bx-00_dransword_shushiro.webp", "beyblade"),
    "contents": [
      { "partId": "DranSword", "variantName": "BXA-01 Shushiro Collab (TT)" },
      { "partId": "3-60", "variantName": "BXA-01 (Shushiro DranSword) (TT)" },
      { "partId": "F", "variantName": "BXA-01 (Shushiro DranSword) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_LeonClaw_Gold",
    "name": "BX-00 LeonClaw 5-60P (Metal Coat: Gold)",
    "category": "Product",
    "series": ["Rare Bey Get", "BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_LeonClaw_Gold_Image", "products/takara_tomy/bx-00_leonclaw_gold/product_bx-00_leonclaw_gold.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_LeonClaw_Gold", "variantName": "LeonClaw 5-60P" }
    ]
  },
  {
    "id": "Beyblade_BX-00_LeonClaw_Gold",
    "name": "LeonClaw 5-60P",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["Rare Bey Get", "BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_LeonClaw_Gold_Image", "products/takara_tomy/bx-00_leonclaw_gold/beyblade_bx-00_leonclaw_gold.webp", "beyblade"),
    "contents": [
      { "partId": "LeonClaw", "variantName": "Rare Bey Get (TT)" },
      { "partId": "5-60", "variantName": "BX-00 (Rare Bey Get, LeonClaw Metal Coat Gold) (TT)" },
      { "partId": "P", "variantName": "Rare Bey Get (LeonClaw Metal Coat Gold) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_SharkEdge_MetalCoat_Blue",
    "name": "BX-00 Booster SharkEdge 5-60GF (Metal Coat: Blue)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_SharkEdge_MetalCoat_Blue_Image", "products/takara_tomy/bx-00_sharkedge_metalcoat_blue/product_bx-00_sharkedge_metalcoat_blue.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_SharkEdge_MetalCoat_Blue", "variantName": "SharkEdge 5-60GF" }
    ]
  },
  {
    "id": "Beyblade_BX-00_SharkEdge_MetalCoat_Blue",
    "name": "SharkEdge 5-60GF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_SharkEdge_MetalCoat_Blue_Image", "products/takara_tomy/bx-00_sharkedge_metalcoat_blue/beyblade_bx-00_sharkedge_metalcoat_blue.webp", "beyblade"),
    "contents": [
      { "partId": "SharkEdge", "variantName": "B4 Store (TT)" },
      { "partId": "5-60", "variantName": "BX-00 B4 Exclusive (SharkEdge Metal Coat Blue) (TT)" },
      { "partId": "GF", "variantName": "BX-00 (B4 Exclusive, SharkEdge Metal Coat Blue) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_DrigerSlash",
    "name": "BX-00 Booster DrigerSlash 4-80P",
    "category": "Product",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_DrigerSlash_Image", "products/takara_tomy/bx-00_drigerslash/product_bx-00_drigerslash.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_DrigerSlash", "variantName": "DrigerSlash 4-80P" }
    ]
  },
  {
    "id": "Beyblade_BX-00_DrigerSlash",
    "name": "DrigerSlash 4-80P",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_DrigerSlash_Image", "products/takara_tomy/bx-00_drigerslash/beyblade_bx-00_drigerslash.webp", "beyblade"),
    "contents": [
      { "partId": "DrigerSlash", "variantName": "BX-00 (TT) (Default)" },
      { "partId": "4-80", "variantName": "BX-00 (DrigerSlash) (TT)" },
      { "partId": "P", "variantName": "BX-00 (DrigerSlash) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_HellsChain_MetalCoat_Black",
    "name": "BX-00 Booster HellsChain 5-60HT (Metal Coat: Black)",
    "category": "Product",
    "series": ["Rare Bey Get", "BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_HellsChain_MetalCoat_Black_Image", "products/takara_tomy/bx-00_hellschain_metalcoat_black/product_bx-00_hellschain_metalcoat_black.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_HellsChain_MetalCoat_Black", "variantName": "HellsChain 5-60HT" }
    ]
  },
  {
    "id": "Beyblade_BX-00_HellsChain_MetalCoat_Black",
    "name": "HellsChain 5-60HT",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["Rare Bey Get", "BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_HellsChain_MetalCoat_Black_Image", "products/takara_tomy/bx-00_hellschain_metalcoat_black/beyblade_bx-00_hellschain_metalcoat_black.webp", "beyblade"),
    "contents": [
      { "partId": "HellsChain", "variantName": "Rare Bey Get (TT)" },
      { "partId": "5-60", "variantName": "BX-00 (Rare Bey Get, HellsChain Metal Coat Black) (TT)" },
      { "partId": "HT", "variantName": "Rare Bey Get (HellsChain Metal Coat Black) (TT)" }
    ]
  },
  {
    "id": "Product_UX-00_DranBuster_MetalCoat_Red",
    "name": "UX-00 Booster DranBuster 1-60A (Metal Coat: Red)",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-00_DranBuster_MetalCoat_Red_Image", "products/takara_tomy/ux-00_dranbuster_metalcoat_red/product_ux-00_dranbuster_metalcoat_red.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-00_DranBuster_MetalCoat_Red", "variantName": "DranBuster 1-60A" }
    ]
  },
  {
    "id": "Beyblade_UX-00_DranBuster_MetalCoat_Red",
    "name": "DranBuster 1-60A",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-00_DranBuster_MetalCoat_Red_Image", "products/takara_tomy/ux-00_dranbuster_metalcoat_red/beyblade_ux-00_dranbuster_metalcoat_red.webp", "beyblade"),
    "contents": [
      { "partId": "DranBuster", "variantName": "Corocoro (TT)" },
      { "partId": "1-60", "variantName": "Corocoro (Lottery, DranBuster Metal Coat Red) (TT)" },
      { "partId": "A", "variantName": "Corocoro (DranBuster Metal Coat Red) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_BitSet_GoldBlack",
    "name": "BX-00 Bit Set F/T/B/N (Gold x Black)",
    "category": "Product",
    "series": ["Rare Bey Get", "BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_BitSet_GoldBlack_Image", "products/takara_tomy/bx-00_bitset_goldblack/product_bx-00_bitset_goldblack.webp", "product box"),
    "contents": [
      { "partId": "F", "variantName": "Rare Bey Get (Bit Set 1) (TT)" },
      { "partId": "T", "variantName": "Rare Bey Get (Bit Set 1) (TT)" },
      { "partId": "B", "variantName": "Rare Bey Get (Bit Set 1) (TT)" },
      { "partId": "N", "variantName": "Rare Bey Get (Bit Set 1) (TT)" }
    ]
  },
  {
    "id": "Product_UX-00_AeroPegasus",
    "name": "UX-00 Booster AeroPegasus 3-70A (Dual Metal Coat: Blue/Green)",
    "category": "Product",
    "series": ["Rare Bey Get", "UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-00_AeroPegasus_Image", "products/takara_tomy/ux-00_aeropegasus_doublemetalcoat/product_ux-00_aeropegasus_doublemetalcoat.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-00_AeroPegasus_DoubleMetalCoat", "variantName": "AeroPegasus 3-70A" }
    ]
  },
  {
    "id": "Beyblade_UX-00_AeroPegasus_DoubleMetalCoat",
    "name": "AeroPegasus 3-70A",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["Rare Bey Get", "UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-00_AeroPegasus_DoubleMetalCoat_Image", "products/takara_tomy/ux-00_aeropegasus_doublemetalcoat/beyblade_ux-00_aeropegasus_doublemetalcoat.webp", "beyblade"),
    "contents": [
      { "partId": "AeroPegasus", "variantName": "UX-00 Rare Bey Get (TT) (Default)" },
      { "partId": "3-70", "variantName": "UX-00 (Rare Bey Get, AeroPegasus) (TT)" },
      { "partId": "A", "variantName": "UX-00 Rare Bey Get (AeroPegasus) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_DranDagger_Giants",
    "name": "BX-00 Starter DranDagger 2-80GP (Metal Coat: Black Giants)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_DranDagger_Giants_Image", "products/takara_tomy/bx-00_drandagger_giants/product_bx-00_drandagger_giants.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_DranDagger_Giants", "variantName": "DranDagger 2-80GP" },
      { "partId": "TT_WinderLauncher", "variantName": "BX-00 DranDagger Giants Crossover" }
    ]
  },
  {
    "id": "Beyblade_BX-00_DranDagger_Giants",
    "name": "DranDagger 2-80GP",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_DranDagger_Giants_Image", "products/takara_tomy/bx-00_drandagger_giants/beyblade_bx-00_drandagger_giants.webp", "beyblade"),
    "contents": [
      { "partId": "DranDagger", "variantName": "BX-00 Giants Crossover (TT)" },
      { "partId": "2-80", "variantName": "BX-00 (Giants Crossover DranDagger B4 Exclusive) (TT) (Default)" },
      { "partId": "GP", "variantName": "BX-00 (B4 Exclusive DranDagger Metal Coat Black) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_CobaltDragoon_MetalCoat_Black",
    "name": "BX-00 Starter CobaltDragoon 2-60C (Metal Coat: Black)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_CobaltDragoon_MetalCoat_Black_Image", "products/takara_tomy/bx-00_cobaltdragoon_metalcoat_black/product_cobaltdragoon.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_CobaltDragoon_MetalCoat_Black", "variantName": "CobaltDragoon 2-60C" },
      { "partId": "TT_StringLauncher_L", "variantName": "BX-00 Cobalt Dragoon (Metal Coat: Black)" }
    ]
  },
  {
    "id": "Beyblade_BX-00_CobaltDragoon_MetalCoat_Black",
    "name": "CobaltDragoon 2-60C",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_CobaltDragoon_MetalCoat_Black_Image", "products/takara_tomy/bx-00_cobaltdragoon_metalcoat_black/beybladecobaltdragoon.webp", "beyblade"),
    "contents": [
      { "partId": "CobaltDragoon", "variantName": "B4 Store (TT)" },
      { "partId": "2-60", "variantName": "Tokyo Toy Show (CobaltDragoon Metal Coat Black) (TT)" },
      { "partId": "C", "variantName": "Tokyo Toy Show (CobaltDragoon Metal Coat Black) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00-1_LLD_Upper",
    "name": "BX-00-1 Random Booster Lightning L-Drago 1-60F",
    "category": "Product",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00-1_LLD_Upper_Image", "products/takara_tomy/bx-00-1_lld_upper/product_bx-00-1_lld_upper.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_LLD_Upper", "variantName": "Lightning L-Drago 1-60F (Upper Type)" }
    ]
  },
  {
    "id": "Beyblade_BX-00_LLD_Upper",
    "name": "Lightning L-Drago 1-60F (Upper Type)",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_LLD_Upper_Image", "products/takara_tomy/bx-00-1_lld_upper/beyblade_bx-00-1_lld_upper.webp", "beyblade"),
    "contents": [
      { "partId": "LightningL-Drago(UpperMode)", "variantName": "BX-00-1 (TT) (Default)" },
      { "partId": "1-60", "variantName": "BX-00 (Lightning L-Drago) (TT)" },
      { "partId": "F", "variantName": "BX-00 (Lightning L-Drago) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00-2_LLD_Rapid",
    "name": "BX-00-2 Random Booster Lightning L-Drago 1-60F",
    "category": "Product",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00-2_LLD_Rapid_Image", "products/takara_tomy/bx-00-2_lld_rapid/product_bx-00-2_lld_rapid.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_LDD_Rapid-Hit", "variantName": "Lightning L-Drago 1-60F (Rapid-Hit Type)" }
    ]
  },
  {
    "id": "Beyblade_BX-00_LDD_Rapid-Hit",
    "name": "Lightning L-Drago 1-60F (Rapid-Hit Type)",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_LDD_Rapid-Hit_Image", "products/takara_tomy/bx-00-2_lld_rapid/beyblade_bx-00-2_lld_rapid.webp", "beyblade"),
    "contents": [
      { "partId": "LightningL-Drago(BarrageMode)", "variantName": "BX-00-2 (TT) (Default)" },
      { "partId": "1-60", "variantName": "BX-00 (Lightning L-Drago) (TT)" },
      { "partId": "F", "variantName": "BX-00 (Lightning L-Drago) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_Corocoro_PhoenixWing_Blue",
    "name": "BX-00 Booster PhoenixWing 9-80DB (Bladers Select Bey)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_Corocoro_PhoenixWing_Blue_Image", "products/takara_tomy/bx-00_corocoro_phoenixwing_blue/product_bx-00_corocoro_phoenixwing_blue.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_Corocoro_PhoenixWing_Blue", "variantName": "PhoenixWing 9-80DB" }
    ]
  },
  {
    "id": "Beyblade_BX-00_Corocoro_PhoenixWing_Blue",
    "name": "PhoenixWing 9-80DB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_Corocoro_PhoenixWing_Blue_Image", "products/takara_tomy/bx-00_corocoro_phoenixwing_blue/beyblade_bx-00_corocoro_phoenixwing_blue.webp", "beyblade"),
    "contents": [
      { "partId": "PhoenixWing", "variantName": "Corocoro (TT)" },
      { "partId": "9-80", "variantName": "Corocoro (PhoenixWing Metal Coat Blue) (TT)" },
      { "partId": "DB", "variantName": "Corocoro (PhoenixWing Metal Coat Blue) (TT)" }
    ]
  },
  {
    "id": "Product_UX-00_DranDeck",
    "name": "UX-00 Dran Deck Starter",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-00_DranDeck_Image", "products/takara_tomy/ux-00_dran_deck_set/product_ux-00_dran_deck_set.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-00_Dran_Deck_Sword", "variantName": "DranSword 4-80DB" },
      { "partId": "Beyblade_UX-00_Dran_Deck_Dagger", "variantName": "DranDagger 9-60LF" },
      { "partId": "Beyblade_UX-00_Dran_Deck_Buster", "variantName": "DranBuster 3-70N" },
      { "partId": "TT_StringLauncher", "variantName": "UX-00 Dran Deck Starter" }
    ]
  },
  {
    "id": "Beyblade_UX-00_Dran_Deck_Sword",
    "name": "DranSword 4-80DB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-00_Dran_Deck_Sword_Image", "products/takara_tomy/ux-00_dran_deck_set/sword_ux-00_dran_deck_set.webp", "beyblade"),
    "contents": [
      { "partId": "DranSword", "variantName": "UX-00 Dran Deck Set (TT)" },
      { "partId": "4-80", "variantName": "UX-00 (Dran Deck Set) (TT)" },
      { "partId": "DB", "variantName": "UX-00 (Dran Deck Set) (TT)" }
    ]
  },
  {
    "id": "Beyblade_UX-00_Dran_Deck_Dagger",
    "name": "DranDagger 9-60LF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-00_Dran_Deck_Dagger_Image", "products/takara_tomy/ux-00_dran_deck_set/dagger_ux-00_dran_deck_set.webp", "beyblade"),
    "contents": [
      { "partId": "DranDagger", "variantName": "UX-00 Dran Deck Set (TT)" },
      { "partId": "9-60", "variantName": "UX-00 (Dran Deck Set) (TT)" },
      { "partId": "LF", "variantName": "UX-00 (Dran Deck Set) (TT)" }
    ]
  },
  {
    "id": "Beyblade_UX-00_Dran_Deck_Buster",
    "name": "DranBuster 3-70N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-00_Dran_Deck_Buster_Image", "products/takara_tomy/ux-00_dran_deck_set/buster_ux-00_dran_deck_set.webp", "beyblade"),
    "contents": [
      { "partId": "DranBuster", "variantName": "UX-00 Dran Deck Set (TT)" },
      { "partId": "3-70", "variantName": "UX-00 (Dran Deck Set) (TT)" },
      { "partId": "N", "variantName": "UX-00 (Dran Deck Set) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_ShinobiKnife_Blue",
    "name": "Beyblade X Xone ShinobiKnife 4-60LF (Metal Coat: Blue)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_ShinobiKnife_Blue_Image", "products/takara_tomy/bx-00_shinobiknife_blue/product_bx-00_shinobiknife_blue.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_ShinobiKnife_Blue", "variantName": "ShinobiKnife 4-60LF" }
    ]
  },
  {
    "id": "Beyblade_BX-00_ShinobiKnife_Blue",
    "name": "ShinobiKnife 4-60LF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_ShinobiKnife_Blue_Image", "products/takara_tomy/bx-00_shinobiknife_blue/beyblade_bx-00_shinobiknife_blue.webp", "beyblade"),
    "contents": [
      { "partId": "ShinobiKnife", "variantName": "Beyblade X Xone (TT) (Default)" },
      { "partId": "4-60", "variantName": "Beyblade X XONE (ShinobiKnife) (TT)" },
      { "partId": "LF", "variantName": "Beyblade X XONE (ShinobiKnife) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_RBG_CobaltDrake_Clear",
    "name": "BX-00 CobaltDrake 4-60F (Clear Ver.)",
    "category": "Product",
    "series": ["Rare Bey Get", "BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_RBG_CobaltDrake_Clear_Image", "products/takara_tomy/bx-00_rbg_cobaltdrake_clear/product_bx-00_rbg_cobaltdrake_clear.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_RBG_CobaltDrake_Clear", "variantName": "CobaltDrake 4-60F" }
    ]
  },
  {
    "id": "Beyblade_BX-00_RBG_CobaltDrake_Clear",
    "name": "CobaltDrake 4-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["Rare Bey Get", "BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_RBG_CobaltDrake_Clear_Image", "products/takara_tomy/bx-00_rbg_cobaltdrake_clear/beyblade_bx-00_rbg_cobaltdrake_clear.webp", "beyblade"),
    "contents": [
      { "partId": "CobaltDrake", "variantName": "Rare Bey Get Clear (TT)" },
      { "partId": "4-60", "variantName": "BX-00 Rare Bey Get (Cobalt Drake Clear) (TT)" },
      { "partId": "F", "variantName": "Rare Bey Get (CobaltDrake Clear) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_DracielShield",
    "name": "BX-00 Booster DracielShield 7-60D",
    "category": "Product",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_DracielShield_Image", "products/takara_tomy/bx-00_dracielshield/product_bx-00_dracielshield.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_DracielShield", "variantName": "DracielShield 7-60D" }
    ]
  },
  {
    "id": "Beyblade_BX-00_DracielShield",
    "name": "DracielShield 7-60D",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_DracielShield_Image", "products/takara_tomy/bx-00_dracielshield/beyblade_bx-00_dracielshield.webp", "beyblade"),
    "contents": [
      { "partId": "DracielShield", "variantName": "BX-00 (TT) (Default)" },
      { "partId": "7-60", "variantName": "BX-00 (DracielShield) (TT)" },
      { "partId": "D", "variantName": "BX-00 (DracielShield) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_25thAnniversary",
    "name": "BX-00 Beyblade 25th Anniversary Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_25thAnniversary_Image", "products/takara_tomy/bx-00_25_anniversary/product_bx-00_25_anniversary.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_25_Anniversary_DragonStorm", "variantName": "DragoonStorm 4-60RA" },
      { "partId": "Beyblade_BX-00_25_Anniversary_StormPegasis", "variantName": "StormPegasis 3-70RA" },
      { "partId": "Beyblade_BX-00_25_Anniversary_VictoryValkyrie", "variantName": "VictoryValkyrie 2-60RA" },
      { "partId": "Beyblade_BX-00_25_Anniversary_DranSword", "variantName": "DranSword 3-60F" },
      { "partId": "TT_DragonWinderLauncher", "variantName": "25th Anniversary Set" },
      { "partId": "TT_StringLauncher", "variantName": "25th Anniversary Set (StormPegasis)" },
      { "partId": "TT_StringLauncher", "variantName": "25th Anniversary Set (VictoryValkyrie)" },
      { "partId": "TT_WinderLauncher", "variantName": "25th Anniversary Set" }
    ]
  },
  {
    "id": "Beyblade_BX-00_25_Anniversary_DragonStorm",
    "name": "DragoonStorm 4-60RA",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_25_Anniversary_DragonStorm_Image", "products/takara_tomy/bx-00_25_anniversary/dragoonstorm.webp", "beyblade"),
    "contents": [
      { "partId": "DragoonStorm", "variantName": "BX-00 25th Anniversary Set (TT) (Default)" },
      { "partId": "4-60", "variantName": "25th Anniversary Set (DragoonStorm) (TT)" },
      { "partId": "RA", "variantName": "25th Anniversary Set (DragoonStorm) (TT)" }
    ]
  },
  {
    "id": "Beyblade_BX-00_25_Anniversary_StormPegasis",
    "name": "StormPegasis 3-70RA",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_25_Anniversary_StormPegasis_Image", "products/takara_tomy/bx-00_25_anniversary/stormpegasis.webp", "beyblade"),
    "contents": [
      { "partId": "StormPegasis", "variantName": "BX-00 25th Anniversary Set (TT) (Default)" },
      { "partId": "3-70", "variantName": "25th Anniversary Set (StormPegasis) (TT)" },
      { "partId": "RA", "variantName": "25th Anniversary Set (StormPegasis) (TT)" }
    ]
  },
  {
    "id": "Beyblade_BX-00_25_Anniversary_VictoryValkyrie",
    "name": "VictoryValkyrie 2-60RA",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_25_Anniversary_VictoryValkyrie_Image", "products/takara_tomy/bx-00_25_anniversary/victoryvalkyrie.webp", "beyblade"),
    "contents": [
      { "partId": "VictoryValkyrie", "variantName": "BX-00 25th Anniversary Set (TT) (Default)" },
      { "partId": "2-60", "variantName": "25th Anniversary Set (Victory Valkyrie) (TT)" },
      { "partId": "RA", "variantName": "25th Anniversary Set (VictoryValkyrie) (TT)" }
    ]
  },
  {
    "id": "Beyblade_BX-00_25_Anniversary_DranSword",
    "name": "DranSword 3-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_25_Anniversary_DranSword_Image", "products/takara_tomy/bx-00_25_anniversary/dransword.webp", "beyblade"),
    "contents": [
      { "partId": "DranSword", "variantName": "BX-00 25th Anniversary Set (TT)" },
      { "partId": "3-60", "variantName": "BX-01 (TT)" },
      { "partId": "F", "variantName": "BX-01 (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_RBG_MammothTusk",
    "name": "BX-00 MammothTusk 2-80E",
    "category": "Product",
    "series": ["Rare Bey Get", "BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_RBG_MammothTusk_Image", "products/takara_tomy/bx-00_rbg_mammothtusk/beyblade_bx-00_rbg_mammothtusk.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_RBG_MammothTusk_MetalCoat_Black", "variantName": "MammothTusk 2-80E" }
    ]
  },
  {
    "id": "Beyblade_BX-00_RBG_MammothTusk_MetalCoat_Black",
    "name": "MammothTusk 2-80E",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["Rare Bey Get", "BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_RBG_MammothTusk_MetalCoat_Black_Image", "products/takara_tomy/bx-00_rbg_mammothtusk/beyblade_bx-00_rbg_mammothtusk.webp", "beyblade"),
    "contents": [
      { "partId": "MammothTusk", "variantName": "Rare Bey Get (TT) (Default)" },
      { "partId": "2-80", "variantName": "BX-00 (Rare Bey Get, MammothTusk) (TT)" },
      { "partId": "E", "variantName": "Rare Bey Get (MammothTusk Metal Coat Black) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_XenoXcalibur",
    "name": "BX-00 Starter XenoXcalibur 3-60GF",
    "category": "Product",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_XenoXcalibur_Image", "products/takara_tomy/bx-00_xenoxcalibur/product_bx-00_xenoxcalibur.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_XenoXcalibur", "variantName": "XenoXcalibur 3-60GF" },
      { "partId": "TT_HoldLauncher", "variantName": "BX-00 XenoXcalibur" }
    ]
  },
  {
    "id": "Beyblade_BX-00_XenoXcalibur",
    "name": "XenoXcalibur 3-60GF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_XenoXcalibur_Image", "products/takara_tomy/bx-00_xenoxcalibur/beyblade_bx-00_xenoxcalibur.webp", "beyblade"),
    "contents": [
      { "partId": "XenoXcalibur", "variantName": "BX-00 (TT) (Default)" },
      { "partId": "3-60", "variantName": "BX-00 (XenoXcalibur) (TT)" },
      { "partId": "GF", "variantName": "BX-00 (XenoXcalibur) (TT)" }
    ]
  },
  {
    "id": "Product_BXG-29",
    "name": "BXG-29 Iron Man and Thanos Double Starter",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BXG-29_Image", "products/takara_tomy/bx-00_ironman_thanos/product_bx-00_ironman_thanos.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BXG-29_IronMan", "variantName": "Iron Man 4-80B" },
      { "partId": "Beyblade_BXG-29_Thanos", "variantName": "Thanos 4-60P" },
      { "partId": "TT_EntryLauncher", "variantName": "Marvel" },
      { "partId": "TT_EntryLauncher", "variantName": "Marvel" }
    ]
  },
  {
    "id": "Beyblade_BXG-29_IronMan",
    "name": "Iron Man 4-80B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BXG-29_IronMan_Image", "products/takara_tomy/bx-00_ironman_thanos/beyblade_ironman.webp", "beyblade"),
    "contents": [
      { "partId": "IronMan", "variantName": "BXG-29 (TT)" },
      { "partId": "4-80", "variantName": "BXG-29 (Iron Man) (TT)" },
      { "partId": "B", "variantName": "BXG-29 (Iron Man) (TT)" }
    ]
  },
  {
    "id": "Beyblade_BXG-29_Thanos",
    "name": "Thanos 4-60P",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BXG-29_Thanos_Image", "products/takara_tomy/bx-00_ironman_thanos/beyblade_thanos.webp", "beyblade"),
    "contents": [
      { "partId": "Thanos", "variantName": "BXG-29 (TT)" },
      { "partId": "4-60", "variantName": "BXG-29 (Thanos) (TT)" },
      { "partId": "P", "variantName": "BXG-29 (Thanos) (TT)" }
    ]
  },
  {
    "id": "Product_BXG-30",
    "name": "BXG-30 Spider-Man and Venom Double Starter",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BXG-30_Image", "products/takara_tomy/bx-00_spider-man_venom/product_bx-00_spider-man_venom.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BXG-30_Spider-Man", "variantName": "Spider-Man 3-60F" },
      { "partId": "Beyblade_BXG-30_Venom", "variantName": "Venom 3-80N" },
      { "partId": "TT_EntryLauncher", "variantName": "Marvel" },
      { "partId": "TT_EntryLauncher", "variantName": "Marvel" }
    ]
  },
  {
    "id": "Beyblade_BXG-30_Spider-Man",
    "name": "Spider-Man 3-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BXG-30_Spider-Man_Image", "products/takara_tomy/bx-00_spider-man_venom/beyblade_spider-man.webp", "beyblade"),
    "contents": [
      { "partId": "Spider-Man", "variantName": "BXG-30 (TT)" },
      { "partId": "3-60", "variantName": "BXG-30 (Spider-Man) (TT)" },
      { "partId": "F", "variantName": "BXG-30 (Spider-Man) (TT)" }
    ]
  },
  {
    "id": "Beyblade_BXG-30_Venom",
    "name": "Venom 3-80N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BXG-30_Venom_Image", "products/takara_tomy/bx-00_spider-man_venom/beyblade_venom.webp", "beyblade"),
    "contents": [
      { "partId": "Venom", "variantName": "BXG-30 (TT)" },
      { "partId": "3-80", "variantName": "BXG-30 (Venom) (TT)" },
      { "partId": "N", "variantName": "BXG-30 (Venom) (TT)" }
    ]
  },
  {
    "id": "Product_BXG-33",
    "name": "BXG-33 Luke Skywalker and Darth Vader Double Starter",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BXG-33_Image", "products/takara_tomy/bx-00_lukeskywalker_darthvader/product_bx-00_lukeskywalker_darthvader.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BXG-33_Luke_Skywalker", "variantName": "Luke Skywalker 4-80B" },
      { "partId": "Beyblade_BXG-33_Darth_Vader", "variantName": "Darth Vader 4-60P" },
      { "partId": "TT_EntryLauncher", "variantName": "Star Wars" },
      { "partId": "TT_EntryLauncher", "variantName": "Star Wars" }
    ]
  },
  {
    "id": "Beyblade_BXG-33_Luke_Skywalker",
    "name": "Luke Skywalker 4-80B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BXG-33_Luke_Skywalker_Image", "products/takara_tomy/bx-00_lukeskywalker_darthvader/beyblade_lukeskywalker.webp", "beyblade"),
    "contents": [
      { "partId": "LukeSkywalker", "variantName": "BXG-33 (TT)" },
      { "partId": "4-80", "variantName": "BXG-33 (Luke Skywalker) (TT)" },
      { "partId": "B", "variantName": "BXG-33 (Luke Skywalker) (TT)" }
    ]
  },
  {
    "id": "Beyblade_BXG-33_Darth_Vader",
    "name": "Darth Vader 4-60P",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BXG-33_Darth_Vader_Image", "products/takara_tomy/bx-00_lukeskywalker_darthvader/beyblade_darthvader.webp", "beyblade"),
    "contents": [
      { "partId": "DarthVader", "variantName": "BXG-33 (TT)" },
      { "partId": "4-60", "variantName": "BXG-33 (Darth Vader) (TT)" },
      { "partId": "P", "variantName": "BXG-33 (Darth Vader) (TT)" }
    ]
  },
  {
    "id": "Product_BXG-34",
    "name": "BXG-34 The Mandalorian and Moff Gideon Double Starter",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BXG-34_Image", "products/takara_tomy/bx-00_mandalorian_moffgideon/product_bx-00_mandalorian_moffgideon.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BXG-34_TheMandalorian", "variantName": "The Mandalorian 3-60F" },
      { "partId": "Beyblade_BXG-34_Moff_Gideon", "variantName": "Moff Gideon 3-80N" },
      { "partId": "TT_EntryLauncher", "variantName": "Star Wars" },
      { "partId": "TT_EntryLauncher", "variantName": "Star Wars" }
    ]
  },
  {
    "id": "Beyblade_BXG-34_TheMandalorian",
    "name": "The Mandalorian 3-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BXG-34_TheMandalorian_Image", "products/takara_tomy/bx-00_mandalorian_moffgideon/beyblade_mandalorian.webp", "beyblade"),
    "contents": [
      { "partId": "TheMandalorian", "variantName": "BXG-34 (TT)" },
      { "partId": "3-60", "variantName": "BXG-34 (The Mandalorian) (TT)" },
      { "partId": "F", "variantName": "BXG-34 (The Mandalorian) (TT)" }
    ]
  },
  {
    "id": "Beyblade_BXG-34_Moff_Gideon",
    "name": "Moff Gideon 3-80N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BXG-34_Moff_Gideon_Image", "products/takara_tomy/bx-00_mandalorian_moffgideon/beyblade_moffgideon.webp", "beyblade"),
    "contents": [
      { "partId": "MoffGideon", "variantName": "BXG-34 (TT)" },
      { "partId": "3-80", "variantName": "BXG-34 (Moff Gideon) (TT)" },
      { "partId": "N", "variantName": "BXG-34 (Moff Gideon) (TT)" }
    ]
  },
  {
    "id": "Product_BXG-37",
    "name": "BXG-37 Optimus Primal and Starscream Double Starter",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BXG-37_Image", "products/takara_tomy/bx-00_optimusprimal_starscream/product_bx-00_optimusprimal_starscream.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BXG-37_Optimus_Primal", "variantName": "Optimus Primal 3-60F" },
      { "partId": "Beyblade_BXG-37_Starscream", "variantName": "Starscream 3-80N" },
      { "partId": "TT_EntryLauncher", "variantName": "Transformers" },
      { "partId": "TT_EntryLauncher", "variantName": "Transformers" }
    ]
  },
  {
    "id": "Beyblade_BXG-37_Optimus_Primal",
    "name": "Optimus Primal 3-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BXG-37_Optimus_Primal_Image", "products/takara_tomy/bx-00_optimusprimal_starscream/beyblade_optimusprimal.webp", "beyblade"),
    "contents": [
      { "partId": "OptimusPrimal", "variantName": "BXG-37 (TT)" },
      { "partId": "3-60", "variantName": "BXG-37 (Optimus Primal) (TT)" },
      { "partId": "F", "variantName": "BXG-37 (Optimus Primal) (TT)" }
    ]
  },
  {
    "id": "Beyblade_BXG-37_Starscream",
    "name": "Starscream 3-80N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BXG-37_Starscream_Image", "products/takara_tomy/bx-00_optimusprimal_starscream/beyblade_starscream.webp", "beyblade"),
    "contents": [
      { "partId": "Starscream", "variantName": "BXG-37 (TT)" },
      { "partId": "3-80", "variantName": "BXG-37 Starscream (TT)" },
      { "partId": "N", "variantName": "BXG-37 (Starscream) (TT)" }
    ]
  },
  {
    "id": "Product_BXG-36",
    "name": "BXG-36 Optimus Prime and Megatron Double Starter",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BXG-36_Image", "products/takara_tomy/bx-00_optimusprime_megatron/product_bx-00_optimusprime_megatron.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BXG-36_Optimus_Prime", "variantName": "Optimus Prime 4-60P" },
      { "partId": "Beyblade_BXG-36_Megatron", "variantName": "Megatron 4-80B" },
      { "partId": "TT_EntryLauncher", "variantName": "Transformers" },
      { "partId": "TT_EntryLauncher", "variantName": "Transformers" }
    ]
  },
  {
    "id": "Beyblade_BXG-36_Optimus_Prime",
    "name": "Optimus Prime 4-60P",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BXG-36_Optimus_Prime_Image", "products/takara_tomy/bx-00_optimusprime_megatron/beyblade_optimusprime.webp", "beyblade"),
    "contents": [
      { "partId": "OptimusPrime", "variantName": "BXG-36 (TT)" },
      { "partId": "4-60", "variantName": "BXG-36 (Optimus Prime) (TT)" },
      { "partId": "P", "variantName": "BXG-36 (Optimus Prime) (TT)" }
    ]
  },
  {
    "id": "Beyblade_BXG-36_Megatron",
    "name": "Megatron 4-80B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BXG-36_Megatron_Image", "products/takara_tomy/bx-00_optimusprime_megatron/beyblade_megatron.webp", "beyblade"),
    "contents": [
      { "partId": "Megatron", "variantName": "BXG-36 (TT)" },
      { "partId": "4-80", "variantName": "BXG-36 (Megatron) (TT)" },
      { "partId": "B", "variantName": "BXG-36 (Megatron) (TT)" }
    ]
  },
  {
    "id": "Product_CX-00_ValkyrieVolt_Gold",
    "name": "CX-00 ValkyrieVolt S4-70V (Metal Coat: Gold)",
    "category": "Product",
    "series": ["Rare Bey Get", "CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-00_ValkyrieVolt_Gold_Image", "products/takara_tomy/cx-00_valkyrievolt_gold/product_valkyrievolt_gold.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-00_ValkyrieVolt_MetalCoat_Gold", "variantName": "ValkyrieVolt S4-70V" }
    ]
  },
  {
    "id": "Beyblade_CX-00_ValkyrieVolt_MetalCoat_Gold",
    "name": "ValkyrieVolt S4-70V",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["Rare Bey Get", "CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-00_ValkyrieVolt_MetalCoat_Gold_Image", "products/takara_tomy/cx-00_valkyrievolt_gold/beyblade_valkyrievolt_gold.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-00_ValkyrieVolt_MetalCoat_Gold", "variantName": "ValkyrieVolt S" },
      { "partId": "4-70", "variantName": "CX-00 (Rare Bey Get, ValkyrieVolt) (TT)" },
      { "partId": "V", "variantName": "Rare Bey Get (ValkyrieVolt) (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-00_ValkyrieVolt_MetalCoat_Gold",
    "name": "ValkyrieVolt S",
    "category": "Full Blade",
    "series": ["Rare Bey Get", "CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-00_ValkyrieVolt_MetalCoat_Gold_Image", "products/takara_tomy/cx-00_valkyrievolt_gold/fullblade_valkyrievolt_gold.webp", "blade"),
    "contents": [
      { "partId": "Valkyrie-TT", "variantName": "CX-00 Rare Bey Get (TT) (Default)" },
      { "partId": "Volt-TT", "variantName": "CX-00 Rare Bey Get (TT) (Default)" },
      { "partId": "S-Slash", "variantName": "CX-00 Rare Bey Get (TT)" }
    ]
  },
  {
    "id": "Product_UX-00_KnightMail_Navy",
    "name": "UX-00 KnightMail 3-85BS (Metal Coat: Navy)",
    "category": "Product",
    "series": ["Rare Bey Get", "UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-00_KnightMail_Navy_Image", "products/takara_tomy/ux-00_knightmail_navy/product_knightmail_navy.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-00_KnightMail_MetalCoat_Navy", "variantName": "KnightMail 3-85BS" }
    ]
  },
  {
    "id": "Beyblade_UX-00_KnightMail_MetalCoat_Navy",
    "name": "KnightMail 3-85BS",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["Rare Bey Get", "UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-00_KnightMail_MetalCoat_Navy_Image", "products/takara_tomy/ux-00_knightmail_navy/beyblade_knightmail_navy.webp", "beyblade"),
    "contents": [
      { "partId": "KnightMail", "variantName": "Rare Bey Get (TT)" },
      { "partId": "3-85", "variantName": "UX-00 (Rare Bey Get, KnightMail Metal Coat Navy) (TT)" },
      { "partId": "BS", "variantName": "Rare Bey Get (KnightMail Metal Coat Navy) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_RockLeone",
    "name": "BX-00 Booster Rock Leone 6-80GN",
    "category": "Product",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_RockLeone_Image", "products/takara_tomy/bx-00_rockleone/product_bx-00_rockleone.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_RockLeone", "variantName": "Rock Leone 6-80GN" }
    ]
  },
  {
    "id": "Beyblade_BX-00_RockLeone",
    "name": "Rock Leone 6-80GN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_RockLeone_Image", "products/takara_tomy/bx-00_rockleone/beyblade_bx-00_rockleone.webp", "beyblade"),
    "contents": [
      { "partId": "RockLeone", "variantName": "BX-00 (TT) (Default)" },
      { "partId": "6-80", "variantName": "BX-00 (Rock Leone) (TT)" },
      { "partId": "GN", "variantName": "BX-00 (Rock Leone) (TT)" }
    ]
  },
  {
    "id": "Product_BXG-41",
    "name": "BXG-41 Spinosaurus and Quetzalcoatlus Double Starter",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BXG-41_Image", "products/takara_tomy/bx-00_spinosaurus_quetzalcoatlus/product_bx-00_spinosaurus_quetzalcoatlus.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BXG-41_Spinosaurus", "variantName": "TyrannoRoar 3-85A" },
      { "partId": "Beyblade_BXG-41_Quetzalcoatlus", "variantName": "PteraSwing 4-55D" },
      { "partId": "TT_EntryLauncher", "variantName": "Jurassic World" },
      { "partId": "TT_EntryLauncher", "variantName": "Jurassic World" }
    ]
  },
  {
    "id": "Beyblade_BXG-41_Spinosaurus",
    "name": "TyrannoRoar 3-85A",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BXG-41_Spinosaurus_Image", "products/takara_tomy/bx-00_spinosaurus_quetzalcoatlus/beyblade_spinosaurus.webp", "beyblade"),
    "contents": [
      { "partId": "TyrannoRoar", "variantName": "BXG-41 (Jurassic World Ver.) (TT)" },
      { "partId": "3-85", "variantName": "BXG-41 (Spinosaurus) (TT)" },
      { "partId": "A", "variantName": "BXG-41 (Spinosaurus) (TT)" }
    ]
  },
  {
    "id": "Beyblade_BXG-41_Quetzalcoatlus",
    "name": "PteraSwing 4-55D",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BXG-41_Quetzalcoatlus_Image", "products/takara_tomy/bx-00_spinosaurus_quetzalcoatlus/beyblade_quetzalcoatlus.webp", "beyblade"),
    "contents": [
      { "partId": "PteraSwing", "variantName": "BXG-41 (Jurassic World Ver.) (TT)" },
      { "partId": "4-55", "variantName": "BXG-41 (Quetzalcoatlus) (TT)" },
      { "partId": "D", "variantName": "BXG-41 (Quetzalcoatlus) (TT)" }
    ]
  },
  {
    "id": "Product_BXG-40",
    "name": "BXG-40 T. Rex and Mosasaurus Double Starter",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BXG-40_Image", "products/takara_tomy/bx-00_trex_mosasaurus/product_bx-00_trex_mosasaurus.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BXG-40_T._Rex", "variantName": "TyrannoBeat 1-80GB" },
      { "partId": "Beyblade_BXG-40_Mosasaurus", "variantName": "TriceraSpiky 9-60U" },
      { "partId": "TT_EntryLauncher", "variantName": "Jurassic World" },
      { "partId": "TT_EntryLauncher", "variantName": "Jurassic World" }
    ]
  },
  {
    "id": "Beyblade_BXG-40_T._Rex",
    "name": "TyrannoBeat 1-80GB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BXG-40_T._Rex_Image", "products/takara_tomy/bx-00_trex_mosasaurus/beyblade_trex.webp", "beyblade"),
    "contents": [
      { "partId": "TyrannoBeat", "variantName": "BXG-41 (Jurassic World Ver.) (TT)" },
      { "partId": "1-80", "variantName": "BXG-40 (T. Rex) (TT)" },
      { "partId": "GB", "variantName": "BXG-40 (T. Rex) (TT)" }
    ]
  },
  {
    "id": "Beyblade_BXG-40_Mosasaurus",
    "name": "TriceraSpiky 9-60U",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BXG-40_Mosasaurus_Image", "products/takara_tomy/bx-00_trex_mosasaurus/beyblade_mosasaurus.webp", "beyblade"),
    "contents": [
      { "partId": "TriceraSpiky", "variantName": "BXG-41 (Jurassic World Ver.) (TT) (Default)" },
      { "partId": "9-60", "variantName": "BXG-40 (Mosasaurus) (TT)" },
      { "partId": "U", "variantName": "BXG-40 (Mosasaurus) (TT)" }
    ]
  },
  {
    "id": "Product_CX-00_PegasusBlast_Red",
    "name": "CX-00 Starter PegasusBlast ATr (Metal Coat: Red)",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-00_PegasusBlast_Red_Image", "products/takara_tomy/cx-00_pegasusblast_red/product_cx-00_pegasusblast_red.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-00_PegasusBlast_Red", "variantName": "PegasusBlast ATr" },
      { "partId": "TT_LongWinderLauncher", "variantName": "CX-00 PegasusBlast" }
    ]
  },
  {
    "id": "Beyblade_CX-00_PegasusBlast_Red",
    "name": "PegasusBlast ATr",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-00_PegasusBlast_Red_Image", "products/takara_tomy/cx-00_pegasusblast_red/beyblade_pegasusblast_red.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-00_PegasusBlast_Red", "variantName": "PegasusBlast A" },
      { "partId": "Tr", "variantName": "Tokyo Toy Show (PegasusBlast Metal Coat Red) (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-00_PegasusBlast_Red",
    "name": "PegasusBlast A",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-00_PegasusBlast_Red_Image", "products/takara_tomy/cx-00_pegasusblast_red/fullblade_pegasusblast_red.webp", "blade"),
    "contents": [
      { "partId": "Pegasus-TT", "variantName": "Tokyo Toy Show (TT)" },
      { "partId": "Blast-TT", "variantName": "Tokyo Toy Show (TT)" },
      { "partId": "A-Assault-TT", "variantName": "Tokyo Toy Show (TT)" }
    ]
  },
  {
    "id": "Product_CX-00_WizardArc_Black",
    "name": "CX-00 WizardArc R4-55LO (Metal Coat: Black)",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-00_WizardArc_Black_Image", "products/takara_tomy/cx-00_wizardarc_black/product_cx-00_wizardarc_black.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-00_WizardArc_MetalCoat_Black", "variantName": "WizardArc R4-55LO" }
    ]
  },
  {
    "id": "Beyblade_CX-00_WizardArc_MetalCoat_Black",
    "name": "WizardArc R4-55LO",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-00_WizardArc_MetalCoat_Black_Image", "products/takara_tomy/cx-00_wizardarc_black/beyblade_cx-00_wizardarc_black.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-00_WizardArc_MetalCoat_Black", "variantName": "WizardArc R" },
      { "partId": "4-55", "variantName": "CX-00 (WizardArc Metal Coat: Black) (TT)" },
      { "partId": "LO", "variantName": "CX-00 (WizardArc Metal Coat: Black) (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-00_WizardArc_MetalCoat_Black",
    "name": "WizardArc R",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-00_WizardArc_MetalCoat_Black_Image", "products/takara_tomy/cx-00_wizardarc_black/fullblade_cx-00_wizardarc_black.webp", "blade"),
    "contents": [
      { "partId": "Wizard-LockChip", "variantName": "CX-00 (WizardArc Metal Coat: Black) (TT)" },
      { "partId": "Arc-TT", "variantName": "CX-00 (WizardArc Metal Coat: Black) (TT)" },
      { "partId": "R-Round", "variantName": "CX-00 (WizardArc Metal Coat: Black) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_BitSet_SilverWhite",
    "name": "BX-00 Bit Set F/T/B/N (Silver x White)",
    "category": "Product",
    "series": ["Rare Bey Get", "BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_BitSet_SilverWhite_Image", "products/takara_tomy/bx-00_bitset_silverwhite/product_bx-00_bitset_silverwhite.webp", "product box"),
    "contents": [
      { "partId": "F", "variantName": "Rare Bey Get (Bit Set 2) (TT)" },
      { "partId": "T", "variantName": "Rare Bey Get (Bit Set 2) (TT)" },
      { "partId": "B", "variantName": "Rare Bey Get (Bit Set 2) (TT)" },
      { "partId": "N", "variantName": "Rare Bey Get (Bit Set 2) (TT)" }
    ]
  },
  {
    "id": "Product_UX-00_WyvernHover",
    "name": "UX-00 Booster WyvernHover 2-80GN (DMM Lottery exclusive)",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-00_WyvernHover_Image", "products/takara_tomy/ux-00_wyvernhover/product_ux-00_wyvernhover.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-00_WyvernHover", "variantName": "WyvernHover 2-80GN" }
    ]
  },
  {
    "id": "Beyblade_UX-00_WyvernHover",
    "name": "WyvernHover 2-80GN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-00_WyvernHover_Image", "products/takara_tomy/ux-00_wyvernhover/beyblade_ux-00_wyvernhover.webp", "beyblade"),
    "contents": [
      { "partId": "WyvernHover", "variantName": "UX-00 (DMM Lottery exclusive) (TT) (Default)" },
      { "partId": "2-80", "variantName": "UX-00 WyvernHover (DMM Lottery exclusive) (TT)" },
      { "partId": "GN", "variantName": "UX-00 WyvernHover (DMM Lottery exclusive) (TT)" }
    ]
  },
  {
    "id": "Product_UX-00_WyvernHover_MetalCoat_Violet",
    "name": "UX-00 WyvernHover (Metal Coat: Violet) (DMM Lottery exclusive)",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-00_WyvernHover_MetalCoat_Violet_Image", "products/takara_tomy/ux-00_wyvernhover_violet/product_ux-00_wyvernhover_violet.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-00_WyvernHover_MetalCoat_Violet", "variantName": "WyvernHover 2-80GN" }
    ]
  },
  {
    "id": "Beyblade_UX-00_WyvernHover_MetalCoat_Violet",
    "name": "WyvernHover 2-80GN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-00_WyvernHover_MetalCoat_Violet_Image", "products/takara_tomy/ux-00_wyvernhover_violet/beyblade_ux-00_wyvernhover_violet.webp", "beyblade"),
    "contents": [
      { "partId": "WyvernHover", "variantName": "UX-00 (Metal Coat: Violet) (DMM Lottery exclusive) (TT)" },
      { "partId": "2-80", "variantName": "UX-00 WyvernHover (Metal Coat: Violet) (DMM Lottery exclusive) (TT)" },
      { "partId": "GN", "variantName": "UX-00 WyvernHover (Metal Coat: Violet) (DMM Lottery exclusive) (TT)" }
    ]
  },
  {
    "id": "Product_UX-00_BeyKickoffSet",
    "name": "UX-00 Bey Kick Off Set",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-00_kickoff_Image", "products/takara_tomy/ux-00_beykickoffset/product_ux-00_beykickoffset.webp", "product box"),
    "contents": [
      { "partId": "TT_XtremeStadium", "variantName": "UX-00 Bey Kick Off Set" },
      { "partId": "TT_WinderLauncher", "variantName": "UX-00 Bey Kickoff Set" },
      { "partId": "Beyblade_UX-00_HellsHammer_Barcelona", "variantName": "HellsHammer 3-70H (Metal Coat Red FC Barcelona Ver.)" }

    ]
  },
  {
    "id": "Beyblade_UX-00_HellsHammer_Barcelona",
    "name": "HellsHammer 3-70H (Metal Coat Red FC Barcelona Ver.)",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-00_HellsHammer_Barcelona_Image", "products/takara_tomy/ux-00_beykickoffset/beyblade_ux-00_beykickoffset.webp", "beyblade"),
    "contents": [
      { "partId": "H", "variantName": "UX-00 (Bey Kick Off Set HellsHammer) (TT)" },
      { "partId": "HellsHammer", "variantName": "UX-00 Bey Kick Off Set (TT)" },
      { "partId": "3-70", "variantName": "UX-00 (Bey Kick Off Set HellsHammer) (TT)" }
    ]
  },
  {
    "id": "Product_UX-00_DranbusterFCBarcelona",
    "name": "UX-00 Starter DranBuster1-60A FC Barcelona Ver.",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_UX-00_barcenlona_Buster_Image", "products/takara_tomy/ux-00_dranbuster_barcelona/product_ux-00_dranbuster_barcelona.webp", "product box"),
    "contents": [
      { "partId": "TT_WinderLauncher", "variantName": "UX-00 Dranbuster FC Barcelona" },
      { "partId": "Beyblade_UX-00_Dranbuster_Barcelona", "variantName": "DranBuster 1-60A (Metal Coat Blue FC Barcelona Ver.)" }
    ]
  },
  {
    "id": "Beyblade_UX-00_Dranbuster_Barcelona",
    "name": "DranBuster 1-60A (Metal Coat Blue FC Barcelona Ver.)",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-00_DranBuster_Barcelona_Image", "products/takara_tomy/ux-00_dranbuster_barcelona/beyblade_ux-00_dranbuster_barcelona.webp", "beyblade"),
    "contents": [
      { "partId": "DranBuster", "variantName": "UX-00 Barcelona Starter (TT)" },
      { "partId": "A", "variantName": "UX-00 (DranBuster Barcelona Starter) (TT)" },
      { "partId": "1-60", "variantName": "UX-00 (DranBuster Barcelona Starter) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_PhoenixWingBlack",
    "name": "BX-00 Starter PhoenixWing 9-60GF (Metal Coat: Black)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_Black_PhoenixWing_Image", "products/takara_tomy/bx-00_phoenixwing_black/product_bx-00_phoenixwing_black.webp", "product box"),
    "contents": [
      { "partId": "TT_WinderLauncher", "variantName": "BX-00 PhoenixWing Metal Coat Black" },
      { "partId": "Beyblade_BX-00_PhoenixWing_Black", "variantName": "PhoenixWing 9-60GF (Metal Coat: Black)" }
    ]

  },
  {
    "id": "Beyblade_BX-00_PhoenixWing_Black",
    "name": "PhoenixWing 9-60GF (Metal Coat: Black)",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_Black_PhoenixWing_Image", "products/takara_tomy/bx-00_phoenixwing_black/beyblade_bx-00_phoenixwing_black.webp", "beyblade"),
    "contents": [
      { "partId": "PhoenixWing", "variantName": "B4 Store (TT)" },
      { "partId": "GF", "variantName": "B4 Exclusive (PhoenixWing Metal Coat Black) (TT)" },
      { "partId": "9-60", "variantName": "B4 Exclusive (PhoenixWing Metal Coat Black) (TT)" }
    ]

  },
  {
    "id": "Product_BX-00_CustomGripGreen",
    "name": "BX-00 Custom Grip (Clear Black Ver.)",
    "category": "Product",
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX-00_CustomGrip_Green_Image", "products/takara_tomy/bx-00_customgripgreen/product_bx-00_customgripgreen.webp", "product box"),
    "contents": [
      { "partId": "TT_LauncherGrip", "variantName": "BX-00 Clear Black Ver." }

    ]

  },
  {
    "id": "Product_DMMLotteryLauncher",
    "name": "B4 String Launcher Violet (DMM Lottery Exclusive)",
    "category": "Product",
    "company": "Takara Tomy",
    "image": getPartImage("Product_String_Launcher_DMM_Violet_Image", "products/takara_tomy/dmm_lottery_launcher/product_dmm_lottery_launcher.webp", "product box"),
    "contents": [
      { "partId": "TT_StringLauncher", "variantName": "DMM Lottory Exclusive" }
    ]

  },
  {
    "id": "Product_BBX_Evobattle",
    "name": "Beyblade X Evobattle LeonFang T4-70A",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BBX_Evobattle_Image", "products/takara_tomy/bbx-evobattle/product_bbx-evobattle.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BBX_Evobattle_LeonFang", "variantName": "LeonFang T4-60A" }
    ]
  },
  {
    "id": "Beyblade_BBX_Evobattle_LeonFang",
    "name": "LeonFang T4-60A",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BBX_Evobattle_Image", "products/takara_tomy/bbx-evobattle/beyblade_bbx-evobattle.webp", "Beyblade"),
    "contents": [
      { "partId": "FullBlade_BBX_Evobattle", "variantName": "LeonFang T" },
      { "partId": "4-60", "variantName": "Beyblade X Evobattle (LeonFang) (TT)" },
      { "partId": "A", "variantName": "Beyblade X Evobattle (LeonFang) (TT)" }
    ]
  },
  {
    "id": "FullBlade_BBX_Evobattle",
    "name": "LeonFang T",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_BBX_Evobattle_Image", "products/takara_tomy/bbx-evobattle/fullblade_bbx-evobattle.webp", "blade"),
    "contents": [
      { "partId": "Leon-TT", "variantName": "Beyblade X Evobattle (LeonFang) (TT) (Default)" },
      { "partId": "Fang-TT", "variantName": "Beyblade X Evobattle (LeonFang) (TT) (Default)" },
      { "partId": "T-Turn", "variantName": "Beyblade X Evobattle (LeonFang) (TT)" }
    ]
  },
  {
    "id": "Product_Black_DranzerSpiral",
    "name": "BX-00 DranzerSpiral 3-80T (Black Ver.)",
    "category": "Product",
    "series": ["Rare Bey Get","BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_Black_DranzerSpiral_Image", "products/takara_tomy/bx-00_dranzerspiral_black/product_bx-00_dranzerspiral_black.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Black_DranzerSpiral", "variantName": "DranzerSpiral 3-80T" }
    ]
  },
  {
    "id": "Beyblade_Black_DranzerSpiral",
    "name": "DranzerSpiral 3-80T",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["Rare Bey Get", "BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_Black_DranzerSpiral_Image", "products/takara_tomy/bx-00_dranzerspiral_black/beyblade_bx-00_dranzerspiral_black.webp", "Beyblade"),
    "contents": [
      { "partId": "DranzerSpiral", "variantName": "Rare Bey Get (TT)" },
      { "partId": "3-80", "variantName": "Rare Bey Get (DranzerSpiral Black) (TT)" },
      { "partId": "T", "variantName": "Rare Bey Get (DranzerSpiral Black) (TT)" }
    ]
  },
  {
    "id": "Product_Crococrunch",
    "name": "BX-00 CrocoCrunch 2-60Q (Metal Coat: Green)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_Crococrunch_Image", "products/takara_tomy/bx-00_crococrunch/product_bx-00_crococrunch.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Green_CrocoCrunch", "variantName": "CrocoCrunch 2-60Q" }
    ]
  },
  {
    "id": "Beyblade_Green_CrocoCrunch",
    "name": "CrocoCrunch 2-60Q",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_Green_CrocoCrunch_Image", "products/takara_tomy/bx-00_crococrunch/beyblade_bx-00_crococrunch.webp", "Beyblade"),
    "contents": [
      { "partId": "CrocoCrunch", "variantName": "Corocoro (TT) (Default)" },
      { "partId": "2-60", "variantName": "Corocoro (CrocoCrunch) (TT)" },
      { "partId": "Q", "variantName": "Corocoro (CrocoCrunch) (TT)" }
    ]
  },
  {
    "id": "Product_CarrotSaber",
    "name": "UX-00 SamuraiSaber 2-70L (Metal Coat: Orange)",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CarrotSaber_Image", "products/takara_tomy/ux-00_carrotsaber/product_carrotsaber.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Orange_SamuraiSaber", "variantName": "SamuraiSaber 2-70L" }
    ]
  },
  {
    "id": "Beyblade_Orange_SamuraiSaber",
    "name": "SamuraiSaber 2-70L",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CarrotSaber_Image", "products/takara_tomy/ux-00_carrotsaber/beyblade_carrotsaber.webp", "Beyblade"),
    "contents": [
      { "partId": "SamuraiSaber", "variantName": "Corocoro (TT)" },
      { "partId": "2-70", "variantName": "Corocoro (SamuraiSaber) (TT)" },
      { "partId": "L", "variantName": "Corocoro (SamuraiSaber) (TT)" }
    ]
  },
  {
    "id": "Product_SamuraiSteel",
    "name": "BX-00 SamuraiSteel 5-70GF (Metal Coat: White)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_SamuraiSteel_Image", "products/takara_tomy/bx-00_samuraisteel/product_samuraisteel.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_SamuraiSteel", "variantName": "SamuraiSteel 5-70GF" }
    ]
  },
  {
    "id": "Beyblade_SamuraiSteel",
    "name": "SamuraiSteel 5-70GF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_SamuraiSteel_Image", "products/takara_tomy/bx-00_samuraisteel/beyblade_samuraisteel.webp", "Beyblade"),
    "contents": [
      { "partId": "SamuraiSteel", "variantName": "Corocoro (TT) (Default)" },
      { "partId": "5-70", "variantName": "Corocoro (SamuraiSteel) (TT)" },
      { "partId": "GF", "variantName": "Corocoro (SamuraiSteel) (TT)" }
    ]
  },
  {
    "id": "Product_DranArc",
    "name": "CX-00 DranArc S2-70K (Metal Coat: Blue)",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_DranArc_Image", "products/takara_tomy/cx-00_dranarc/product_dranarc.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_DranArc", "variantName": "DranArc S2-70K" }
    ]
  },
  {
    "id": "Beyblade_DranArc",
    "name": "DranArc S2-70K",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_DranArc_Image", "products/takara_tomy/cx-00_dranarc/beyblade_dranarc.webp", "Beyblade"),
    "contents": [
      { "partId": "FullBlade_DranArc", "variantName": "DranArc S" },
      { "partId": "2-70", "variantName": "Corocoro (DranArc) (TT)" },
      { "partId": "K", "variantName": "Corocoro (DranArc) (TT)" }
    ]
  },
  {
    "id": "FullBlade_DranArc",
    "name": "DranArc S",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_DranArc_Image", "products/takara_tomy/cx-00_dranarc/fullblade_dranarc.webp", "blade"),
    "contents": [
      { "partId": "Dran-LockChip", "variantName": "Corocoro (DranArc) (TT)" },
      { "partId": "Arc-TT", "variantName": "Corocoro (DranArc) (TT)" },
      { "partId": "S-Slash", "variantName": "Corocoro (DranArc) (TT)" }
    ]
  },
  {
    "id": "FullBlade_Gold_PerseusDark",
    "name": "PerseusDark B",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_PerseusDarkGold_Image", "products/takara_tomy/cx-00_perseusdark_gold/fullblade_cx-00_perseusdark_gold.webp", "blade"),
    "contents": [
      { "partId": "Perseus-LockChip", "variantName": "G3 1st Prize (TT)" },
      { "partId": "Dark-TT", "variantName": "G3 1st Prize (TT)" },
      { "partId": "B-Bumper", "variantName": "G3 1st Prize (TT)" }
    ]
  },
  {
    "id": "Product_CX-00_DranBrave_MetalCoat_Gold",
    "name": "CX-00 DranBrave S6-60V (Metal Coat: Gold)",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-00_DranBrave_MetalCoat_Gold_Image", "products/takara_tomy/cx-00_dranbrave_metalcoat_gold/product_cx-00_dranbrave_metalcoat_gold.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Gold_DranBrave", "variantName": "DranBrave S6-60V" }
    ]
  },
  {
    "id": "Beyblade_Gold_DranBrave",
    "name": "DranBrave S6-60V",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_Gold_DranBrave_Image", "products/takara_tomy/cx-00_dranbrave_metalcoat_gold/beyblade_cx-00_dranbrave_metalcoat_gold.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_Gold_DranBrave", "variantName": "DranBrave S" },
      { "partId": "6-60", "variantName": "G1 1st Prize (DranBrave Metal Coat: Gold) (TT)" },
      { "partId": "V", "variantName": "G1 1st Prize (DranBrave Metal Coat: Gold) (TT)" }
    ]
  },
  {
    "id": "FullBlade_Gold_DranBrave",
    "name": "DranBrave S",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_Gold_DranBrave_Image", "products/takara_tomy/cx-00_dranbrave_metalcoat_gold/fullblade_cx-00_dranbrave_metalcoat_gold.webp", "blade"),
    "contents": [
      { "partId": "Dran-LockChip", "variantName": "G1 1st Prize (DranBrave Metal Coat: Gold) (TT)" },
      { "partId": "Brave-TT", "variantName": "G1 1st Prize (DranBrave Metal Coat: Gold) (TT)" },
      { "partId": "S-Slash", "variantName": "G1 1st Prize (DranBrave Metal Coat: Gold) (TT)" }
    ]
  },
  {
    "id": "Product_CX-00_DranBrave_MetalCoat_Silver",
    "name": "CX-00 DranBrave S6-60V (Metal Coat: Silver)",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-00_DranBrave_MetalCoat_Silver_Image", "products/takara_tomy/cx-00_dranbrave_metalcoat_silver/product_cx-00_dranbrave_metalcoat_silver.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Silver_DranBrave", "variantName": "DranBrave S6-60V" }
    ]
  },
  {
    "id": "Beyblade_Silver_DranBrave",
    "name": "DranBrave S6-60V",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_Silver_DranBrave_Image", "products/takara_tomy/cx-00_dranbrave_metalcoat_silver/beyblade_cx-00_dranbrave_metalcoat_silver.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_Silver_DranBrave", "variantName": "DranBrave S" },
      { "partId": "6-60", "variantName": "G1 2nd Prize (DranBrave Metal Coat: Silver) (TT)" },
      { "partId": "V", "variantName": "G1 2nd Prize (DranBrave Metal Coat: Silver) (TT)" }
    ]
  },
  {
    "id": "FullBlade_Silver_DranBrave",
    "name": "DranBrave S",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_Silver_DranBrave_Image", "products/takara_tomy/cx-00_dranbrave_metalcoat_silver/fullblade_cx-00_dranbrave_metalcoat_silver.webp", "blade"),
    "contents": [
      { "partId": "Dran-LockChip", "variantName": "G1 2nd Prize (DranBrave Metal Coat: Silver) (TT)" },
      { "partId": "Brave-TT", "variantName": "G1 2nd Prize (DranBrave Metal Coat: Silver) (TT)" },
      { "partId": "S-Slash", "variantName": "G1 2nd Prize (DranBrave Metal Coat: Silver) (TT)" }
    ]
  },
  {
    "id": "Product_CX-00_DranBrave_MetalCoat_Bronze",
    "name": "CX-00 DranBrave S6-60V (Metal Coat: Bronze)",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-00_DranBrave_MetalCoat_Bronze_Image", "products/takara_tomy/cx-00_dranbrave_metalcoat_bronze/product_cx-00_dranbrave_metalcoat_bronze.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Bronze_DranBrave", "variantName": "DranBrave S6-60V" }
    ]
  },
  {
    "id": "Beyblade_Bronze_DranBrave",
    "name": "DranBrave S6-60V",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_Bronze_DranBrave_Image", "products/takara_tomy/cx-00_dranbrave_metalcoat_bronze/beyblade_cx-00_dranbrave_metalcoat_bronze.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_Bronze_DranBrave", "variantName": "DranBrave S" },
      { "partId": "6-60", "variantName": "G1 3rd Prize (DranBrave Metal Coat: Bronze) (TT)" },
      { "partId": "V", "variantName": "G1 3rd Prize (DranBrave Metal Coat: Bronze) (TT)" }
    ]
  },
  {
    "id": "FullBlade_Bronze_DranBrave",
    "name": "DranBrave S",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_Bronze_DranBrave_Image", "products/takara_tomy/cx-00_dranbrave_metalcoat_bronze/fullblade_cx-00_dranbrave_metalcoat_bronze.webp", "blade"),
    "contents": [
      { "partId": "Dran-LockChip", "variantName": "G1 3rd Prize (DranBrave Metal Coat: Bronze) (TT)" },
      { "partId": "Brave-TT", "variantName": "G1 3rd Prize (DranBrave Metal Coat: Bronze) (TT)" },
      { "partId": "S-Slash", "variantName": "G1 3rd Prize (DranBrave Metal Coat: Bronze) (TT)" }
    ]
  },

  {
    "id": "Beyblade_Magma_Shark",
    "name": "SharkEdge 2-60GP (Tsuri Spirits Promo)",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_Magma_shark_Image", "products/takara_tomy/bx-00_magmashark/beyblade_magmashark.webp", "beyblade"),
    "contents": [
      { "partId": "SharkEdge", "variantName": "Tsuri Spirits Promo (TT)" },
      { "partId": "2-60", "variantName": "Tsuri Spirits Promo (SharkEdge Metal Coat Black) (TT)" },
      { "partId": "GP", "variantName": "Tsuri Spirits Promo (SharkEdge Metal Coat Black) (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_DragoonStorm",
    "name": "BX-00 Booster DragoonStorm 4-60RA",
    "category": "Product",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_BX_00_DragoonStorm_Image", "products/takara_tomy/bx-00_dragoonstorm/product_bx-00_dragoonstorm.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_25_Anniversary_DragonStorm", "variantName": "DragoonStorm 4-60RA" }
    ]

  },


  {
    "id": "Product_OrochiCluster",
    "name": "UX-00 Booster OrochiCluster 6-60LF",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_OrochiCluster_Image", "products/takara_tomy/ux-00_orochicluster/product_orochicluster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_OrochiCluster", "variantName": "OrochiCluster 6-60LF" },
    ]
  },
  {
    "id": "Beyblade_OrochiCluster",
    "name": "OrochiCluster 6-60LF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_OrochiCluster_Image", "products/takara_tomy/ux-00_orochicluster/beyblade_orochicluster.webp", "beyblade"),
    "contents": [
      { "partId": "OrochiCluster", "variantName": "Corocoro Mail Order (TT) (Default)" },
      { "partId": "6-60", "variantName": "Corocoro Mail Order (OrochiCluster) (TT)" },
      { "partId": "LF", "variantName": "Corocoro Mail Order (OrochiCluster) (TT)" }
    ]
  },
  // Product Aero red need to add
  {
    "id": "Beyblade_UX-00_AeroPegasus_RedVer.",
    "name": "AeroPegasus 3-70A",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["Rare Bey Get", "UX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UX-00_AeroPegasus_RedVer_Image", "products/takara_tomy/ux-00_aeropegasus_red/beyblade_ux-00_aeropegasus_red.webp", "beyblade"),
    "contents": [
      { "partId": "AeroPegasus", "variantName": "UX-00 Rare Bey Get (Red ver.) (TT)" },
      { "partId": "3-70", "variantName": "UX-00 Rare Bey Get (AeroPegasus Red Ver.) (TT)" },
      { "partId": "A", "variantName": "UX-00 Rare Bey Get (AeroPegasus Red Ver.) (TT)" }
    ]
  },
  {
    "id": "Product_TsuriWhale",
    "name": "Tsuri Spirits Fan Book Vol.2 WhaleWave 1-80GF (Metal Coat: Blue Tsuri Spirits Wonder Ver.)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_TsuriWhale_Image", "products/takara_tomy/tsurispirits_whalewave/product_tsurispirits_whalewave.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_TsuriWhale", "variantName": "WhaleWave 1-80GF" }
    ]
  },
  {
    "id": "Beyblade_TsuriWhale",
    "name": "WhaleWave 1-80GF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CarrotSaber_Image", "products/takara_tomy/tsurispirits_whalewave/beyblade_tsurispirits_whalewave.webp", "Beyblade"),
    "contents": [
      { "partId": "WhaleWave", "variantName": "Metal Coat: Blue Tsuri Spirits Wonder Ver. (Tsuri Spirits Fan Book Vol. 2) (TT)" },
      { "partId": "1-80", "variantName": "WhaleWave Tsuri Spirits Wonder Ver. (TT)" },
      { "partId": "GF", "variantName": "WhaleWave Tsuri Spirits Wonder Ver. (TT)" }
    ]
  },

  {
    "id": "Product_BX-00_White_Goon",
    "name": "BX-00 Starter CobaltDragoon 9-60F (Metal Coat: White J.League Ver.)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_White-Goon_Image", "products/takara_tomy/bx-00_cobaltdragoon_metalcoat_white/product_white_goon.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_White_Goon", "variantName": "CobaltDragoon 9-60F" },
      { "partId": "TT_WinderLauncher", "variantName": "BX-00 CobaltDragoon Metal Coat: White J.League Ver." }
    ]
  },
  {
    "id": "Beyblade_BX-00_White_Goon",
    "name": "CobaltDragoon 9-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_White_Goon_Image", "products/takara_tomy/bx-00_cobaltdragoon_metalcoat_white/beyblade_white_goon.webp", "beyblade"),
    "contents": [
      { "partId": "CobaltDragoon", "variantName": "BX-00 Metal Coat: White J.League Ver. (TT)" },
      { "partId": "9-60", "variantName": "BX-00 CobaltDragoon Metal Coat: White J.League Ver. (TT)" },
      { "partId": "F", "variantName": "BX-00 CobaltDragoon Metal Coat: White J.League Ver. (TT)" }
    ]
  },
  {
    "id": "Product_BX-00_Black_DranSword",
    "name": "BX-00 Starter DranSword 1-60V (Metal Coat: Black J.League Ver.)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_Black_DranSword_Image", "products/takara_tomy/bx-00_dransword_metalcoat_black/product_black_dransword.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_Black_DranSword", "variantName": "DranSword 1-60V" },
      { "partId": "TT_WinderLauncher", "variantName": "BX-00 DranSword Metal Coat: Black J.League Ver." }
    ]
  },
  {
    "id": "Beyblade_BX-00_Black_DranSword",
    "name": "DranSword 1-60V",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BX-00_Black_DranSword_Image", "products/takara_tomy/bx-00_dransword_metalcoat_black/beyblade_black_dransword.webp", "beyblade"),
    "contents": [
      { "partId": "DranSword", "variantName": "BX-00 Metal Coat: Black J.League Ver. (TT)" }, //need to add
      { "partId": "1-60", "variantName": "BX-00 (DranSword Metal Coat: Black J.League Ver.) (TT)" }, //need to add
      { "partId": "V", "variantName": "BX-00 (DranSword Metal Coat: Black J.League Ver.) (TT)" } //need to add
    ]
  },
{
    "id": "Product_StormSpriggan",
    "name": "BX-00 Starter StormSpriggan 2-70M",
    "category": "Product",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_StormSpriggan_Image", "products/takara_tomy/stormspriggan/product_stormspriggan.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_StormSpriggan", "variantName": "StormSpriggan 2-70M" },
      { "partId": "TT_WinderLauncher", "variantName": "BX-00 (StormSpriggan)" }
    ]
  },
  {
    "id": "Beyblade_StormSpriggan",
    "name": "StormSpriggan 2-70M",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_StormSpriggan_Image", "products/takara_tomy/stormspriggan/beyblade_stormspriggan.webp", "beyblade"),
    "contents": [
      { "partId": "StormSpriggan", "variantName": "BX-00 (TT) (Default)" },
      { "partId": "2-70", "variantName": "BX-00 (StormSpriggan) (TT)" },
      { "partId": "M", "variantName": "BX-00 (StormSpriggan) (TT)" }
    ]
  },
  {
    "id": "Product_B4_StringLauncher_Green",
    "name": "BX-00 String Launcher B4 Store Exclusive Color Ver. (Green)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("String-B4-Green", "launchers/tt_string_launcher/green.webp", "String launcher"),
    "contents": [
      {"partId": "TT_StringLauncher", "variantName": "B4 Exclusive Color Ver. (Green)"}
    ]
  },
  {
    "id": "Product_B4_StringLauncher_Orange",
    "name": "BX-00 String Launcher B4 Store Exclusive Color Ver. (Orange)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("String-B4-Green", "launchers/tt_string_launcher/orange.webp", "String launcher"),
    "contents": [
      {"partId": "TT_StringLauncher", "variantName": "B4 Exclusive Color Ver. (Orange)"}
    ]
  },
  {
    "id": "Product_B4_StringLauncher_Pink",
    "name": "BX-00 String Launcher B4 Store Exclusive Color Ver. (Pink)",
    "category": "Product",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("String-B4-Green", "launchers/tt_string_launcher/pink.webp", "String launcher"),
    "contents": [
      {"partId": "TT_StringLauncher", "variantName": "B4 Exclusive Color Ver. (Pink)"}
    ]
  },

  {
    "id": "Product_CX-13",
    "name": "CX-13 Starter BahamutBlitz BK1-50I",
    "category": "Product",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-13_Image", "products/takara_tomy/cx-13/product_cx-13.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-13", "variantName": "BahamutBlitz BK1-50I" },
      { "partId": "TT_WinderLauncher", "variantName": "CX-13" }
    ]
  },
  {
    "id": "Beyblade_CX-13",
    "name": "BahamutBlitz BK1-50I",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-13_Image", "products/takara_tomy/cx-13/beyblade_cx-13.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-13", "variantName": "BahamutBlitz BK" },
      { "partId": "1-50", "variantName": "CX-13 (TT)" },
      { "partId": "I", "variantName": "CX-13 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-13",
    "name": "BahamutBlitz BK",
    "category": "Full Blade",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-13_Image", "products/takara_tomy/cx-13/fullblade_cx-13.webp", "blade"),
    "contents": [
      { "partId": "Bahamut", "variantName": "CX-13 (TT) (Default)" },
      { "partId": "Blitz", "variantName": "CX-13 (TT) (Default)" },
      { "partId": "B-Break", "variantName": "CX-13 (TT) (Default)" },
      { "partId": "K-Knuckle-Assist", "variantName": "CX-13 (TT) (Default)" }
    ]
  },
  {
    "id": "Product_CX-14",
    "name": "CX-14 Starter KnightFortress GV8-70UN",
    "category": "Product",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-14_Image", "products/takara_tomy/cx-14/product_cx-14.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-14", "variantName": "KnightFortress GV8-70UN" },
      { "partId": "TT_WinderLauncher", "variantName": "CX-14" }
    ]
  },
  {
    "id": "Beyblade_CX-14",
    "name": "KnightFortress GV8-70UN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-14_Image", "products/takara_tomy/cx-14/beyblade_cx-14.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-14", "variantName": "KnightFortress GV" },
      { "partId": "8-70", "variantName": "CX-14 (TT)" },
      { "partId": "UN", "variantName": "CX-14 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-14",
    "name": "KnightFortress GV",
    "category": "Full Blade",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-14_Image", "products/takara_tomy/cx-14/fullblade_cx-14.webp", "blade"),
    "contents": [
      { "partId": "Knight", "variantName": "CX-14 (TT) (Default)" },
      { "partId": "Fortress", "variantName": "CX-14 (TT) (Default)" },
      { "partId": "G-Guard", "variantName": "CX-14 (TT) (Default)" },
      { "partId": "V-Vertical-Assist", "variantName": "CX-14 (TT) (Default)" }
    ]
  },
  {
    "id": "Product_CX-15",
    "name": "CX-15 Booster RagnaRage FE4-55Y",
    "category": "Product",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-15_Image", "products/takara_tomy/cx-15/product_cx-15.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-15", "variantName": "RagnaRage FE4-55Y" }
    ]
  },
  {
    "id": "Beyblade_CX-15",
    "name": "RagnaRage FE4-55Y",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-15_Image", "products/takara_tomy/cx-15/beyblade_cx-15.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-15", "variantName": "RagnaRage FE" },
      { "partId": "4-55", "variantName": "CX-15 (TT)" },
      { "partId": "Y", "variantName": "CX-15 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-15",
    "name": "RagnaRage FE",
    "category": "Full Blade",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-15_Image", "products/takara_tomy/cx-15/fullblade_cx-15.webp", "blade"),
    "contents": [
      { "partId": "Ragna", "variantName": "CX-15 (TT) (Default)" },
      { "partId": "Rage", "variantName": "CX-15 (TT) (Default)" },
      { "partId": "F-Flow", "variantName": "CX-15 (TT) (Default)" },
      { "partId": "E-Erase-Assist", "variantName": "CX-15 (TT) (Default)" }
    ]
  },
  {
    "id": "Product_CX-16",
    "name": "CX-16 Start Dash Set C",
    "category": "Product",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "image": getPartImage("Product_CX-16_Image", "products/takara_tomy/cx-16/product_cx-16.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-16", "variantName": "BahamutBlitz BK1-50I" },
      { "partId": "TT_WinderLauncher", "variantName": "CX-16" },
      { "partId": "TT_LauncherGrip", "variantName": "CX-16" },
      { "partId": "TT_XtremeStadium", "variantName": "CX-16" }
    ]
  },
  {
    "id": "Beyblade_CX-16",
    "name": "BahamutBlitz BK1-50I",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_CX-16_Image", "products/takara_tomy/cx-16/beyblade_cx-16.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-16", "variantName": "BahamutBlitz BK" },
      { "partId": "1-50", "variantName": "CX-16 (TT)" },
      { "partId": "I", "variantName": "CX-16 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-16",
    "name": "BahamutBlitz BK",
    "category": "Full Blade",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_CX-16_Image", "products/takara_tomy/cx-16/fullblade_cx-16.webp", "blade"),
    "contents": [
      { "partId": "Bahamut", "variantName": "CX-16 (TT)" },
      { "partId": "Blitz", "variantName": "CX-16 (TT)" },
      { "partId": "B-Break", "variantName": "CX-16 (TT)" },
      { "partId": "K-Knuckle-Assist", "variantName": "CX-16 (TT)" }
    ]
  },

// BBLD

  {
    "id": "Beyblade_DranDagger_Black-BBLD",
    "name": "DranDagger 4-60R (BBLD-BLACK)",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_DranDagger_Black-BBLD_Image", "products/takara_tomy/bbld/beyblade_drandagger_black.webp", "beyblade"),
    "contents": [
      { "partId": "DranDagger", "variantName": "BBLD (Metal Coat: Black) (TT)" },
      { "partId": "4-60", "variantName": "BBLD (Drandagger Metal Coat: Black) (TT)" },
      { "partId": "R", "variantName": "BBLD (Drandagger Metal Coat: Black) (TT)" }
    ]
  },
  {
    "id": "Beyblade_DranDagger_Blue-BBLD",
    "name": "DranDagger 4-60R (BBLD-BLUE)",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_DranDagger_Blue-BBLD_Image", "products/takara_tomy/bbld/beyblade_drandagger_blue.webp", "beyblade"),
    "contents": [
      { "partId": "DranDagger", "variantName": "BBLD (Metal Coat: Blue) (TT)" },
      { "partId": "4-60", "variantName": "BBLD (Drandagger Metal Coat: Blue) (TT)" },
      { "partId": "R", "variantName": "BBLD (Drandagger Metal Coat: Blue) (TT)" }
    ]
  },
  {
    "id": "Beyblade_UnicornSting_Pink-BBLD",
    "name": "UnicornSting 5-60GP (BBLD-PINK)",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_UnicornSting_Pink-BBLD_Image", "products/takara_tomy/bbld/beyblade_unicornsting_pink.webp", "beyblade"),
    "contents": [
      { "partId": "UnicornSting", "variantName": "BBLD (Metal Coat: Pink) (TT)" },
      { "partId": "5-60", "variantName": "BBLD (UnicornSting Metal Coat: Pink) (TT)" },
      { "partId": "GP", "variantName": "BBLD (UnicornSting Metal Coat: Pink) (TT)" }
    ]
  },
  {
    "id": "Beyblade_KnightLance_Green-BBLD",
    "name": "KnightLance 4-80HN (BBLD-GREEN)",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_KnightLance_Green-BBLD_Image", "products/takara_tomy/bbld/beyblade_knightlance_green.webp", "beyblade"),
    "contents": [
      { "partId": "KnightLance", "variantName": "BBLD (Metal Coat: Green) (TT)" },
      { "partId": "4-80", "variantName": "BBLD (KnightLance Metal Coat: Green) (TT)" },
      { "partId": "HN", "variantName": "BBLD (KnightLance Metal Coat: Green) (TT)" }
    ]
  },
  {
    "id": "Beyblade_WyvernGale_Orange-BBLD",
    "name": "WyvernGale 5-80GB (BBLD-ORANGE)",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_WyvernGale_Orange-BBLD_Image", "products/takara_tomy/bbld/beyblade_wyverngale_orange.webp", "beyblade"),
    "contents": [
      { "partId": "WyvernGale", "variantName": "BBLD (Metal Coat: Orange) (TT)" },
      { "partId": "5-80", "variantName": "BBLD (WyvernGale Metal Coat: Orange) (TT)" },
      { "partId": "GB", "variantName": "BBLD (WyvernGale Metal Coat: Orange) (TT)" }
    ]
  },
  {
    "id": "Beyblade_Corocoro_BahamutBlitz_Yellow",
    "name": "BahamutBlitz BK1-50I",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_Corocoro_BahamutBlitz_Yellow_Image", "products/takara_tomy/corocoro_bahamutblitz_yellow/beyblade.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_Corocoro_BahamutBlitz_Yellow", "variantName": "BahamutBlitz BK" },
      { "partId": "1-50", "variantName": "Corocoro (BahamutBlitz Metal Coat: Yellow) (TT)" },
      { "partId": "I", "variantName": "Corocoro (BahamutBlitz Metal Coat: Yellow) (TT)" }
    ]
  },
  {
    "id": "FullBlade_Corocoro_BahamutBlitz_Yellow",
    "name": "BahamutBlitz BK",
    "category": "Full Blade",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "image": getPartImage("FullBlade_Corocoro_BahamutBlitz_Yellow_Image", "products/takara_tomy/corocoro_bahamutblitz_yellow/fullblade.webp", "blade"),
    "contents": [
      { "partId": "Bahamut", "variantName": "Corocoro (BahamutBlitz Metal Coat: Yellow) (TT)" },
      { "partId": "Blitz", "variantName": "Corocoro (BahamutBlitz Metal Coat: Yellow) (TT)" },
      { "partId": "B-Break", "variantName": "Corocoro (BahamutBlitz Metal Coat: Yellow) (TT)" },
      { "partId": "K-Knuckle-Assist", "variantName": "Corocoro (BahamutBlitz Metal Coat: Yellow) (TT)" }
    ]
  },

  


  // Coming Soon April 25 2026
  {
    "id": "Product_UX-19",
    "name": "UX-19 Starter BulletGriffon H",
    "category": "Product",
    "series": ["UX", "UXE"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Product_UX-19_Image", "products/takara_tomy/ux-19/product_ux-19.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_UX-19", "variantName": "BulletGriffon H" },
      { "partId": "TT_LongWinderLauncher", "variantName": "UX-19" }
    ]
  },
  {
    "id": "Beyblade_UX-19",
    "name": "BulletGriffon H",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["UX", "UXE"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Beyblade_UX-19_Image", "products/takara_tomy/ux-19/beyblade_ux-19.webp", "beyblade"),
    "contents": [
      { "partId": "BulletGriffon", "variantName": "UX-19 (TT) (Default)" },
      { "partId": "H", "variantName": "UX-19 (TT)" }
    ]
  },
  /*
  {
    "id": "Product_ScorpioSpearMagenta",
    "name": "UX-00 Booster ScorpioSpear 0-70Z (Metal Coat: Magenta)",
    "category": "Product",
    "series": ["Rare Bey Get", "UX"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Product_ScorpioSpearMagenta_Image", "products/takara_tomy/scorpiospearmagenta/product_scorpiospearmagenta.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_ScorpioSpearMagenta", "variantName": "ScorpioSpear 0-70Z" },
    ]
  },
  */
  {
    "id": "Beyblade_ScorpioSpearMagenta",
    "name": "ScorpioSpear 0-70Z",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["Rare Bey Get", "UX"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Beyblade_ScorpioSpearMagenta_Image", "products/takara_tomy/scorpiospearmagenta/beyblade_scorpiospearmagenta.webp", "beyblade"),
    "contents": [
      { "partId": "ScorpioSpear", "variantName": "UX-00 Metal Coat: Magenta (Beyblade Bar, Rare Bey Get) (TT)" },
      { "partId": "0-70", "variantName": "UX-00 (ScorpioSpear Metal Coat: Magenta) (TT)" },
      { "partId": "Z", "variantName": "UX-00 (ScorpioSpear Metal Coat: Magenta) (TT)" }
    ]
  },



  {
    "id": "Product_CX-17-1",
    "name": "CX-17-1 Random Booster Vol. 10",
    "category": "Product",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Product_CX-17-1_Image", "products/takara_tomy/cx-17-1/product.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-17-1", "variantName": "UnicornDelta PO3-60GU" }
    ]
  },
  {
    "id": "Beyblade_CX-17-1",
    "name": "UnicornDelta PO3-60GU",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Beyblade_CX-17-1_Image", "products/takara_tomy/cx-17-1/beyblade.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-17-1", "variantName": "UnicornDelta PO" },
      { "partId": "3-60", "variantName": "CX-17-1 (TT)" },
      { "partId": "GU", "variantName": "CX-17-1 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-17-1",
    "name": "UnicornDelta PO",
    "category": "Full Blade",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("FullBlade_CX-17-1_Image", "products/takara_tomy/cx-17-1/fullblade.webp", "blade"),
    "contents": [
      { "partId": "Unicorn", "variantName": "CX-17-1 (TT) (Default)" },
      { "partId": "Delta", "variantName": "CX-17-1 (TT) (Default)" },
      { "partId": "P-Peak", "variantName": "CX-17-1 (TT) (Default)" },
      { "partId": "O-Odd-Assist", "variantName": "CX-17-1 (TT) (Default)" }
    ]
  },
  {
    "id": "Product_CX-17-2",
    "name": "CX-17-2 Random Booster Vol. 10",
    "category": "Product",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Product_CX-17-2_Image", "products/takara_tomy/cx-17-2/product.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-17-2", "variantName": "UnicornDelta PO1-80GR" }
    ]
  },
  {
    "id": "Beyblade_CX-17-2",
    "name": "UnicornDelta PO1-80GR",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Beyblade_CX-17-2_Image", "products/takara_tomy/cx-17-2/beyblade.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_CX-17-2", "variantName": "UnicornDelta PO" },
      { "partId": "1-80", "variantName": "CX-17-2 (TT)" },
      { "partId": "GR", "variantName": "CX-17-2 (TT)" }
    ]
  },
  {
    "id": "FullBlade_CX-17-2",
    "name": "UnicornDelta PO",
    "category": "Full Blade",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("FullBlade_CX-17-2_Image", "products/takara_tomy/cx-17-2/fullblade.webp", "blade"),
    "contents": [
      { "partId": "Unicorn", "variantName": "CX-17-2 (TT)" },
      { "partId": "Delta", "variantName": "CX-17-2 (TT)" },
      { "partId": "P-Peak", "variantName": "CX-17-2 (TT)" },
      { "partId": "O-Odd-Assist", "variantName": "CX-17-2 (TT)" }
    ]
  },
  {
    "id": "Product_CX-17-3",
    "name": "CX-17-3 Random Booster Vol. 10",
    "category": "Product",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Product_CX-17-3_Image", "products/takara_tomy/cx-17-3/product.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-17-3", "variantName": "SamuraiSaber 9-65LO" }
    ]
  },
  {
    "id": "Beyblade_CX-17-3",
    "name": "SamuraiSaber 9-65LO",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Beyblade_CX-17-3_Image", "products/takara_tomy/cx-17-3/beyblade.webp", "beyblade"),
    "contents": [
      { "partId": "SamuraiSaber", "variantName": "CX-17-3 (TT)" },
      { "partId": "9-65", "variantName": "CX-17-3 (TT)" },
      { "partId": "LO", "variantName": "CX-17-3 (TT)" }
    ]
  },
  {
    "id": "Product_CX-17-4",
    "name": "CX-17-4 Random Booster Vol. 10",
    "category": "Product",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Product_CX-17-4_Image", "products/takara_tomy/cx-17-4/product.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-17-4", "variantName": "HellsHammer 3-85GU" }
    ]
  },
  {
    "id": "Beyblade_CX-17-4",
    "name": "HellsHammer 3-85GU",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["UX"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Beyblade_CX-17-4_Image", "products/takara_tomy/cx-17-4/beyblade.webp", "beyblade"),
    "contents": [
      { "partId": "HellsHammer", "variantName": "CX-17-4 (TT)" },
      { "partId": "3-85", "variantName": "CX-17-4 (TT)" },
      { "partId": "GU", "variantName": "CX-17-4 (TT)" }
    ]
  },
  {
    "id": "Product_CX-17-5",
    "name": "CX-17-5 Random Booster Vol. 10",
    "category": "Product",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Product_CX-17-5_Image", "products/takara_tomy/cx-17-5/product.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-17-5", "variantName": "TyrannoBeat 3-60N" }
    ]
  },
  {
    "id": "Beyblade_CX-17-5",
    "name": "TyrannoBeat 3-60N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Beyblade_CX-17-5_Image", "products/takara_tomy/cx-17-5/beyblade.webp", "beyblade"),
    "contents": [
      { "partId": "TyrannoBeat", "variantName": "CX-17-5 (TT)" },
      { "partId": "3-60", "variantName": "CX-17-5 (TT)" },
      { "partId": "N", "variantName": "CX-17-5 (TT)" }
    ]
  },
  {
    "id": "Product_CX-17-6",
    "name": "CX-17-6 Random Booster Vol. 10",
    "category": "Product",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Product_CX-17-6_Image", "products/takara_tomy/cx-17-6/product.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CX-17-6", "variantName": "CrimsonGaruda 7-80GU" }
    ]
  },
  {
    "id": "Beyblade_CX-17-6",
    "name": "CrimsonGaruda 7-80GU",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["UX"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Beyblade_CX-17-6_Image", "products/takara_tomy/cx-17-6/beyblade.webp", "beyblade"),
    "contents": [
      { "partId": "CrimsonGaruda", "variantName": "CX-17-6 (TT)" },
      { "partId": "7-80", "variantName": "CX-17-6 (TT)" },
      { "partId": "GU", "variantName": "CX-17-6 (TT)" }
    ]
  },




  


  // Coming Soon May 16 2026

  {
    "id": "Product_BX-49",
    "name": "BX-49 Starter DranStrike 4-50FF",
    "category": "Product",
    "series": ["BX", "BXE"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Product_BX-49_Image", "products/takara_tomy/bx-49/product_bx-49.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-49", "variantName": "DranStrike 4-50FF" },
      { "partId": "TT_WinderLauncher", "variantName": "BX-49" }
    ]
  },
  {
    "id": "Beyblade_BX-49",
    "name": "DranStrike 4-50FF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX", "BXE"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Beyblade_BX-49_Image", "products/takara_tomy/bx-49/beyblade_bx-49.webp", "beyblade"),
    "contents": [
      { "partId": "DranStrike", "variantName": "BX-49 (TT) (Default)" },
      { "partId": "4-50", "variantName": "BX-49 (TT)" },
      { "partId": "FF", "variantName": "BX-49 (TT)" }
    ]
  },
  {
    "id": "Product_SamuraiSaber_JFA", 
    "name": "UX-00 Starter SamuraiSaber 5-60K (Metal Coat: Samurai Blue JFA Ver.)",
    "category": "Product",
    "series": ["UX"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Product_SamuraiSaber_JFA_Image", "products/takara_tomy/samuraisaber_jfa/product.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_SamuraiSaber_JFA", "variantName": "SamuraiSaber 5-60K" },
      { "partId": "TT_WinderLauncher", "variantName": "UX-00 (SamuraiSaber Metal Coat: Samurai Blue JFA Ver.)" }
    ]
  },
  {
    "id": "Beyblade_SamuraiSaber_JFA",
    "name": "SamuraiSaber 5-60K",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["UX"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("Beyblade_SamuraiSaber_JFA_Image", "products/takara_tomy/samuraisaber_jfa/beyblade.webp", "beyblade"),
    "contents": [
      { "partId": "SamuraiSaber", "variantName": "UX-00 Metal Coat: Samurai Blue JFA Ver. (TT)" },
      { "partId": "5-60", "variantName": "UX-00 (SamuraiSaber Metal Coat: Samurai Blue JFA Ver.) (TT)" },
      { "partId": "K", "variantName": "UX-00 (SamuraiSaber Metal Coat: Samurai Blue JFA Ver.) (TT)" }
    ]
  },




  // Coming Soon May 2026
  {
    "id": "Beyblade_BlackDranbrave",
    "name": "DranBrave S6-60V",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_BlackDranBrave_Image", "products/takara_tomy/cx-00_dranbrave_metalcoat_black/beyblade_black_dranbrave.webp", "beyblade"),
    "comingSoon": true,
    "contents": [
      { "partId": "Fullblade_DranBrave_Black", "variantName": "DranBrave S" },
      { "partId": "6-60", "variantName": "Placeholder" },
      { "partId": "V", "variantName": "PlaceHolder" }
    ]
  },
  {
    "id": "Fullblade_DranBrave_Black",
    "name": "DranBrave S",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("FullBlade_BlackDranbrave_Image", "products/takara_tomy/cx-00_dranbrave_metalcoat_black/fullblade_black_dranbrave.webp", "blade"),
    "contents": [
      { "partId": "Dran-LockChip", "variantName": "Placeholder" },
      { "partId": "Brave-TT", "variantName": "Placeholder" },
      { "partId": "S-Slash", "variantName": "Placeholder" }
    ]

  },
  
  


  // Coming Soon August 29th

  {
    "id": "CX-00_Evangelion_Deck_Set",
    "name": "CX-00 Evangelion Deck Set",
    "category": "Product",
    "series": ["CX"],
    "company": "Takara Tomy",
    "comingSoon":true,
    "image": getPartImage("Product_Evangelion_Deck_Set_Image", "products/takara_tomy/evangeliondeckset/product.webp", "product box"),
    "contents":[
      {"partId": "Beyblade_Eva_00", "variantName": "EvaArc B0-70E"},
      {"partId": "Beyblade_Eva_01", "variantName": "EvaBrave A1-70V"},
      {"partId": "Beyblade_Eva_02", "variantName": "EvaBrush T2-70A"},
      {"partId": "TT_LongWinderLauncher", "variantName": "Evangelion Deck Set (Black)"},
      {"partId": "TT_LongWinderLauncher", "variantName": "Evangelion Deck Set (White)"},
      {"partId": "TT_DeckCase", "variantName": "Evangelion Deck Set"}
    ]

  },
  {
    "id": "Beyblade_Eva_00",
    "name": "EvaArc B0-70E",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_Eva_00_Image", "products/takara_tomy/evangeliondeckset/beyblade_2.webp", "beyblade"),
    "comingSoon": true,
    "contents": [
      { "partId": "Fullblade_Eva_00", "variantName": "EvaArc B" },
      { "partId": "0-70", "variantName": "Evangelion Deck Set (TT)" },
      { "partId": "E", "variantName": "Evangelion Deck Set (TT)" }
    ]
  },
  {
    "id": "Fullblade_Eva_00",
    "name": "EvaArc B",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("FullBlade_Eva_00_Image", "products/takara_tomy/evangeliondeckset/fullblade_2.webp", "blade"),
    "contents": [
      { "partId": "Eva", "variantName": "Evangelion Proto Type-00 (TT)" },
      { "partId": "Arc-TT", "variantName": "Evangelion Deck Set (TT)" },
      { "partId": "B-Bumper", "variantName": "Evangelion Deck Set (TT)" }
    ]

  },
  {
    "id": "Beyblade_Eva_01",
    "name": "EvaBrave A1-70V",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_Eva_01_Image", "products/takara_tomy/evangeliondeckset/beyblade_1.webp", "beyblade"),
    "comingSoon": true,
    "contents": [
      { "partId": "Fullblade_Eva_01", "variantName": "EvaBrave A" },
      { "partId": "1-70", "variantName": "Evangelion Deck Set (TT)" },
      { "partId": "V", "variantName": "Evangelion Deck Set (TT)" }
    ]
  },
  {
    "id": "Fullblade_Eva_01",
    "name": "EvaBrave A",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("FullBlade_Eva_01_Image", "products/takara_tomy/evangeliondeckset/fullblade_1.webp", "blade"),
    "contents": [
      { "partId": "Eva", "variantName": "Evangelion Test Type-01 (TT) (Default)" },
      { "partId": "Brave-TT", "variantName": "Evangelion Deck Set (TT)" },
      { "partId": "A-Assault", "variantName": "Evangelion Deck Set (TT)" }
    ]

  },
  {
    "id": "Beyblade_Eva_02",
    "name": "EvaBrush T2-70A",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX"],
    "company": "Takara Tomy",
    "image": getPartImage("Beyblade_Eva_02_Image", "products/takara_tomy/evangeliondeckset/beyblade_3.webp", "beyblade"),
    "comingSoon": true,
    "contents": [
      { "partId": "Fullblade_Eva_02", "variantName": "EvaBrush T" },
      { "partId": "2-70", "variantName": "Evangelion Deck Set (TT)" },
      { "partId": "A", "variantName": "Evangelion Deck Set (TT)" }
    ]
  },
  {
    "id": "Fullblade_Eva_02",
    "name": "EvaBrush T",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "comingSoon": true,
    "image": getPartImage("FullBlade_Eva_02_Image", "products/takara_tomy/evangeliondeckset/fullblade_3.webp", "blade"),
    "contents": [
      { "partId": "Eva", "variantName": "Evangelion Production Model-02 (TT)" },
      { "partId": "Brush-TT", "variantName": "Evangelion Deck Set (TT)" },
      { "partId": "T-Turn", "variantName": "Evangelion Deck Set (TT)" }
    ]

  },







  // Hasbro Products
  {
    "id": "Product_HB_Sword_Dran_Starter",
    "name": "Sword Dran 3-60F Starter Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Sword_Dran_Starter_Image", "products/hasbro/sword_dran_starter/product_sword_dran_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Sword_Dran_Stock_Starter", "variantName": "Sword Dran 3-60F" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Sword_Dran_Stock_Starter",
    "name": "Sword Dran 3-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Sword_Dran_Stock_Starter_Image", "products/hasbro/sword_dran_starter/beyblade_sword_dran_starter.webp", "beyblade"),
    "contents": [
      { "partId": "SwordDran", "variantName": "Sword Dran 3-60F (Starter) (HB) (Default)" },
      { "partId": "3-60", "variantName": "Sword Dran 3-60F (Starter) (HB)" },
      { "partId": "F", "variantName": "Sword Dran 3-60F (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Helm_Knight_Starter",
    "name": "Helm Knight 3-80N Starter Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Helm_Knight_Starter_Image", "products/hasbro/helm_knight_starter/product_helm_knight_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Helm_Knight_Stock_Starter", "variantName": "Helm Knight 3-80N" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Helm_Knight_Stock_Starter",
    "name": "Helm Knight 3-80N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Helm_Knight_Stock_Starter_Image", "products/hasbro/helm_knight_starter/beyblade_helm_knight_starter.webp", "beyblade"),
    "contents": [
      { "partId": "HelmKnight", "variantName": "Helm Knight 3-80N (Starter) (HB) (Default)" },
      { "partId": "3-80", "variantName": "Helm Knight 3-80N (Starter) (HB)" },
      { "partId": "N", "variantName": "Helm Knight 3-80N (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Arrow_Wizard_Starter",
    "name": "Arrow Wizard 4-80B Starter Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Arrow_Wizard_Starter_Image", "products/hasbro/arrow_wizard_starter/product_arrow_wizard_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Arrow_Wizard_Stock_Starter", "variantName": "Arrow Wizard 4-80B" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Arrow_Wizard_Stock_Starter",
    "name": "Arrow Wizard 4-80B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Arrow_Wizard_Stock_Starter_Image", "products/hasbro/arrow_wizard_starter/beyblade_arrow_wizard_starter.webp", "beyblade"),
    "contents": [
      { "partId": "ArrowWizard", "variantName": "Arrow Wizard 4-80B (Starter) (HB) (Default)" },
      { "partId": "4-80", "variantName": "Arrow Wizard 4-80B (Starter) (HB)" },
      { "partId": "B", "variantName": "Arrow Wizard 4-80B (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Scythe_Incendio_Starter",
    "name": "Scythe Incendio 4-60T Starter Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Scythe_Incendio_Starter_Image", "products/hasbro/scythe_incendio_starter/product_scythe_incendio_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Scythe_Incendio_Stock_Starter", "variantName": "Scythe Incendio 4-60T" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Scythe_Incendio_Stock_Starter",
    "name": "Scythe Incendio 4-60T",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Scythe_Incendio_Stock_Starter_Image", "products/hasbro/scythe_incendio_starter/beyblade_scythe_incendio_starter.webp", "beyblade"),
    "contents": [
      { "partId": "ScytheIncendio", "variantName": "Scythe Incendio 4-60T (Starter) (HB) (Default)" },
      { "partId": "4-60", "variantName": "Scythe Incendio 4-60T (Starter) (HB)" },
      { "partId": "T", "variantName": "Scythe Incendio 4-60T (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Lance_Knight_Starter",
    "name": "Lance Knight 4-80HN Starter Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Lance_Knight_Starter_Image", "products/hasbro/lance_knight_starter/product_lance_knight_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Lance_Knight_Stock_Starter", "variantName": "Lance Knight 4-80HN" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Lance_Knight_Stock_Starter",
    "name": "Lance Knight 4-80HN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Lance_Knight_Stock_Starter_Image", "products/hasbro/lance_knight_starter/beyblade_lance_knight_starter.webp", "beyblade"),
    "contents": [
      { "partId": "LanceKnight", "variantName": "Lance Knight 4-80HN (Starter) (HB) (Default)" },
      { "partId": "4-80", "variantName": "Lance Knight 4-80HN (Starter) (HB)" },
      { "partId": "HN", "variantName": "Lance Knight 4-80HN (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Claw_Leon_Starter",
    "name": "Claw Leon 5-60P Starter Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Claw_Leon_Starter_Image", "products/hasbro/claw_leon_starter/product_claw_leon_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Claw_Leon_Stock_Starter", "variantName": "Claw Leon 5-60P" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Claw_Leon_Stock_Starter",
    "name": "Claw Leon 5-60P",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Claw_Leon_Stock_Starter_Image", "products/hasbro/claw_leon_starter/beyblade_claw_leon_starter.webp", "beyblade"),
    "contents": [
      { "partId": "ClawLeon", "variantName": "Claw Leon 5-60P (Starter) (HB) (Default)" },
      { "partId": "5-60", "variantName": "Claw Leon 5-60P (Starter) (HB)" },
      { "partId": "P", "variantName": "Claw Leon 5-60P (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Buster_Dran_1_60A_Starter",
    "name": "Buster Dran 1-60A Starter Pack",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Buster_Dran_1_60A_Starter_Image", "products/hasbro/buster_dran_starter/product_buster_dran_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Buster_Dran_Stock_Starter", "variantName": "Buster Dran 1-60A" },
      { "partId": "HB_EntryLauncher", "variantName": "Buster Dran" }
    ]
  },
  {
    "id": "Beyblade_Buster_Dran_Stock_Starter",
    "name": "Buster Dran 1-60A",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Buster_Dran_Stock_Starter_Image", "products/hasbro/buster_dran_starter/beyblade_buster_dran_starter.webp", "beyblade"),
    "contents": [
      { "partId": "BusterDran", "variantName": "Buster Dran 1-60A (Starter) (HB) (Default)" },
      { "partId": "1-60", "variantName": "Buster Dran 1-60A (Starter) (HB)" },
      { "partId": "A", "variantName": "Buster Dran 1-60A (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Wand_Wizard_5_70DB_Starter",
    "name": "Wand Wizard 5-70DB Starter Pack",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Wand_Wizard_5_70DB_Starter_Image", "products/hasbro/wand_wizard_starter/product_wand_wizard_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Wand_Wizard_Stock_Starter", "variantName": "Wand Wizard 5-70DB" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Wand_Wizard_Stock_Starter",
    "name": "Wand Wizard 5-70DB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Wand_Wizard_Stock_Starter_Image", "products/hasbro/wand_wizard_starter/beyblade_wand_wizard_starter.webp", "beyblade"),
    "contents": [
      { "partId": "WandWizard", "variantName": "Wand Wizard 5-70DB (Starter) (HB) (Default)" },
      { "partId": "5-70", "variantName": "Wand Wizard 5-70DB (Starter) (HB)" },
      { "partId": "DB", "variantName": "Wand Wizard 5-70DB (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Wand_Wizard_1_60R_Starter",
    "name": "Wand Wizard 1-60R Starter Pack",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Wand_Wizard_1_60R_Starter_Image", "products/hasbro/wand_wizard_1-60r_starter/product_wand_wizard_1-60r_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Wand_Wizard_Green_Starter", "variantName": "Wand Wizard 1-60R" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Wand_Wizard_Green_Starter",
    "name": "Wand Wizard 1-60R",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Wand_Wizard_Green_Starter_Image", "products/hasbro/wand_wizard_1-60r_starter/beyblade_wand_wizard_1-60r_starter.webp", "beyblade"),
    "contents": [
      { "partId": "WandWizard", "variantName": "Wand Wizard 1-60R (Starter) (HB)" },
      { "partId": "1-60", "variantName": "Wand Wizard 1-60R (Starter) (HB)" },
      { "partId": "R", "variantName": "Wand Wizard 1-60R (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Shadow_Shinobi_Starter",
    "name": "Shadow Shinobi 1-80MN Starter Pack",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Shadow_Shinobi_Starter_Image", "products/hasbro/shadow_shinobi_starter/product_shadow_shinobi_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Shadow_Shinobi_Stock_Starter", "variantName": "Shadow Shinobi 1-80MN" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Shadow_Shinobi_Stock_Starter",
    "name": "Shadow Shinobi 1-80MN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Shadow_Shinobi_Stock_Starter_Image", "products/hasbro/shadow_shinobi_starter/beyblade_shadow_shinobi_starter.webp", "beyblade"),
    "contents": [
      { "partId": "ShadowShinobi", "variantName": "Shadow Shinobi 1-80MN (Starter) (HB) (Default)" },
      { "partId": "1-80", "variantName": "Shadow Shinobi 1-80MN (Starter) (HB)" },
      { "partId": "MN", "variantName": "Shadow Shinobi 1-80MN (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Scarlet_Garuda_Starter",
    "name": "Scarlet Garuda 4-70TP Starter Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Scarlet_Garuda_Starter_Image", "products/hasbro/scarlet_garuda_starter/product_scarlet_garuda_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Scarlet_Garuda_Stock_Starter", "variantName": "Scarlet Garuda 4-70TP" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Scarlet_Garuda_Stock_Starter",
    "name": "Scarlet Garuda 4-70TP",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Scarlet_Garuda_Stock_Starter_Image", "products/hasbro/scarlet_garuda_starter/beyblade_scarlet_garuda_starter.webp", "beyblade"),
    "contents": [
      { "partId": "ScarletGaruda", "variantName": "Scarlet Garuda 4-70TP (Starter) (HB) (Default)" },
      { "partId": "4-70", "variantName": "Scarlet Garuda 4-70TP (Starter) (HB)" },
      { "partId": "TP", "variantName": "Scarlet Garuda 4-70TP (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Sterling_Wolf_Starter",
    "name": "Sterling Wolf 3-80FB Starter Pack",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Sterling_Wolf_Starter_Image", "products/hasbro/sterling_wolf_starter/product_sterling_wolf_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Sterling_Wolf_Stock_Starter", "variantName": "Sterling Wolf 3-80FB" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Sterling_Wolf_Stock_Starter",
    "name": "Sterling Wolf 3-80FB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Sterling_Wolf_Stock_Starter_Image", "products/hasbro/sterling_wolf_starter/beyblade_sterling_wolf_starter.webp", "beyblade"),
    "contents": [
      { "partId": "SterlingWolf", "variantName": "Sterling Wolf 3-80FB (Starter) (HB) (Default)" },
      { "partId": "3-80", "variantName": "Sterling Wolf 3-80FB (Starter) (HB)" },
      { "partId": "FB", "variantName": "Sterling Wolf 3-80FB (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Shelter_Drake_Starter",
    "name": "Shelter Drake 7-80GP Starter Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Shelter_Drake_Starter_Image", "products/hasbro/shelter_drake_starter/product_shelter_drake_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Shelter_Drake_Stock_Starter", "variantName": "Shelter Drake 7-80GP" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Shelter_Drake_Stock_Starter",
    "name": "Shelter Drake 7-80GP",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Shelter_Drake_Stock_Starter_Image", "products/hasbro/shelter_drake_starter/beyblade_shelter_drake_starter.webp", "beyblade"),
    "contents": [
      { "partId": "ShelterDrake-Hasbro", "variantName": "Shelter Drake 7-80GP (Starter) (HB) (Default)" },
      { "partId": "7-80", "variantName": "Shelter Drake 7-80GP (Starter) (HB)" },
      { "partId": "GP", "variantName": "Shelter Drake 7-80GP (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Rock_Golem_Starter",
    "name": "Rock Golem 1-60UN Starter Pack",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Rock_Golem_Starter_Image", "products/hasbro/rock_golem_starter/product_rock_golem_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Rock_Golem_Stock_Starter", "variantName": "Rock Golem 1-60UN" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Rock_Golem_Stock_Starter",
    "name": "Rock Golem 1-60UN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Rock_Golem_Stock_Starter_Image", "products/hasbro/rock_golem_starter/beyblade_rock_golem_starter.webp", "beyblade"),
    "contents": [
      { "partId": "RockGolem", "variantName": "Rock Golem 1-60UN (Starter) (HB) (Default)" },
      { "partId": "1-60", "variantName": "Rock Golem 1-60UN (Starter) (HB)" },
      { "partId": "UN", "variantName": "Rock Golem 1-60UN (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Buster_Dran_5_70DB_Starter",
    "name": "Buster Dran 5-70DB Starter Pack",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Buster_Dran_5_70DB_Starter_Image", "products/hasbro/buster_dran_5-70db_starter/product_buster_dran_5-70db_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Buster_Dran_Piss_Starter", "variantName": "Buster Dran 5-70DB" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Buster_Dran_Piss_Starter",
    "name": "Buster Dran 5-70DB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Buster_Dran_Piss_Starter_Image", "products/hasbro/buster_dran_5-70db_starter/beyblade_buster_dran_5-70db_starter.webp", "beyblade"),
    "contents": [
      { "partId": "BusterDran", "variantName": "Buster Dran 5-70DB (Starter) (HB)" },
      { "partId": "5-70", "variantName": "Buster Dran 5-70DB (Starter) (HB)" },
      { "partId": "DB", "variantName": "Buster Dran 5-70DB (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Hammer_Incendio_Starter",
    "name": "Hammer Incendio 3-70H Starter Pack",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Hammer_Incendio_Starter_Image", "products/hasbro/hammer_incendio_starter/product_hammer_incendio_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Hammer_Incendio_Stock_Starter", "variantName": "Hammer Incendio 3-70H" },
      { "partId": "HB_EntryLauncher", "variantName": "Hammer Incendio" }
    ]
  },
  {
    "id": "Beyblade_Hammer_Incendio_Stock_Starter",
    "name": "Hammer Incendio 3-70H",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Hammer_Incendio_Stock_Starter_Image", "products/hasbro/hammer_incendio_starter/beyblade_hammer_incendio_starter.webp", "beyblade"),
    "contents": [
      { "partId": "HammerIncendio", "variantName": "Hammer Incendio 3-70H (Starter) (HB) (Default)" },
      { "partId": "3-70", "variantName": "Hammer Incendio 3-70H (Starter) (HB)" },
      { "partId": "H", "variantName": "Hammer Incendio 3-70H (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Courage_Dran_Starter",
    "name": "Courage Dran S 6-60V Starter Pack",
    "category": "Product",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Courage_Dran_Starter_Image", "products/hasbro/courage_dran_starter/product_courage_dran_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Courage_Dran_Stock_Starter", "variantName": "Courage Dran S 6-60V" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Courage_Dran_Stock_Starter",
    "name": "Courage Dran S 6-60V",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Courage_Dran_Stock_Starter_Image", "products/hasbro/courage_dran_starter/beyblade_courage_dran_starter.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_Courage_Dran", "variantName": "Courage Dran S" },
      { "partId": "6-60", "variantName": "Courage Dran S 6-60V (Starter) (HB)" },
      { "partId": "V", "variantName": "Courage Dran S 6-60V (Starter) (HB)" }
    ]
  },
  {
    "id": "FullBlade_Courage_Dran",
    "name": "Courage Dran S",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("FullBlade_Courage_Dran_Image", "products/hasbro/courage_dran_starter/fullblade_courage_dran_starter.webp", "blade"),
    "contents": [
      { "partId": "Dran-LockChip", "variantName": "Courage Dran S 6-60V (Starter) (HB)" },
      { "partId": "Brave-TT", "variantName": "Courage Dran S 6-60V (Starter) (HB)" },
      { "partId": "S-Slash", "variantName": "Courage Dran S 6-60V (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Reaper_Incendio_Starter",
    "name": "Reaper Incendio T 4-70K Starter Pack",
    "category": "Product",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Reaper_Incendio_Starter_Image", "products/hasbro/reaper_incendio_starter/product_reaper_incendio_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Reaper_Incendio_Stock_Starter", "variantName": "Reaper Incendio T 4-70K" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Reaper_Incendio_Stock_Starter",
    "name": "Reaper Incendio T 4-70K",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Reaper_Incendio_Stock_Starter_Image", "products/hasbro/reaper_incendio_starter/beyblade_reaper_incendio_starter.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_Reaper_Incendio", "variantName": "Reaper Incendio T" },
      { "partId": "4-70", "variantName": "Reaper Incendio T 4-70K (Starter) (HB)" },
      { "partId": "K", "variantName": "Reaper Incendio T 4-70K (Starter) (HB)" }
    ]
  },
  {
    "id": "FullBlade_Reaper_Incendio",
    "name": "Reaper Incendio T",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("FullBlade_Reaper_Incendio_Image", "products/hasbro/reaper_incendio_starter/fullblade_reaper_incendio_starter.webp", "blade"),
    "contents": [
      { "partId": "Hells-LockChip", "variantName": "Reaper Incendio T 4-70K (Starter) (HB)" },
      { "partId": "Reaper-TT", "variantName": "Reaper Incendio T 4-70K (Starter) (HB)" },
      { "partId": "T-Turn", "variantName": "Reaper Incendio T 4-70K (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Arc_Wizard_Starter",
    "name": "Arc Wizard R 4-55LO Starter Pack",
    "category": "Product",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Arc_Wizard_Starter_Image", "products/hasbro/arc_wizard_starter/product_arc_wizard_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Arc_Wizard_Stock_Starter", "variantName": "Arc Wizard R 4-55LO" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Arc_Wizard_Stock_Starter",
    "name": "Arc Wizard R 4-55LO",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Arc_Wizard_Stock_Starter_Image", "products/hasbro/arc_wizard_starter/beyblade_arc_wizard_starter.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_Arc_Wizard", "variantName": "Arc Wizard R" },
      { "partId": "4-55", "variantName": "Arc Wizard R 4-55LO (Starter) (HB)" },
      { "partId": "LO", "variantName": "Arc Wizard R 4-55LO (Starter) (HB)" }
    ]
  },
  {
    "id": "FullBlade_Arc_Wizard",
    "name": "Arc Wizard R",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("FullBlade_Arc_Wizard_Image", "products/hasbro/arc_wizard_starter/fullblade_arc_wizard_starter.webp", "blade"),
    "contents": [
      { "partId": "Wizard-LockChip", "variantName": "Arc Wizard R 4-55LO (Starter) (HB)" },
      { "partId": "Arc-TT", "variantName": "Arc Wizard R 4-55LO (Starter) (HB)" },
      { "partId": "R-Round", "variantName": "Arc Wizard R 4-55LO (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Dark_Perseus_Starter",
    "name": "Dark Perseus B 6-80W Starter Pack",
    "category": "Product",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Dark_Perseus_Starter_Image", "products/hasbro/dark_perseus_starter/product_dark_perseus_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Dark_Perseus_Stock_Starter", "variantName": "Dark Persues B 6-80W" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Dark_Perseus_Stock_Starter",
    "name": "Dark Persues B 6-80W",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Dark_Perseus_Stock_Starter_Image", "products/hasbro/dark_perseus_starter/beyblade_dark_perseus_starter.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_Dark_Perseus", "variantName": "Dark Perseus B" },
      { "partId": "6-80", "variantName": "Dark Perseus B 6-80W (Starter) (HB)" },
      { "partId": "W", "variantName": "Dark Perseus B 6-80W (Starter) (HB)" }
    ]
  },
  {
    "id": "FullBlade_Dark_Perseus",
    "name": "Dark Perseus B",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("FullBlade_Dark_Perseus_Image", "products/hasbro/dark_perseus_starter/fullblade_dark_perseus_starter.webp", "blade"),
    "contents": [
      { "partId": "Perseus-LockChip", "variantName": "Dark Perseus B 6-80W (Starter) (HB)" },
      { "partId": "Dark-TT", "variantName": "Dark Perseus B 6-80W (Starter) (HB)" },
      { "partId": "B-Bumper", "variantName": "Dark Perseus B 6-80W (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Brush_Fox_Starter",
    "name": "Brush Fox J 9-70GR Starter Pack",
    "category": "Product",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Brush_Fox_Starter_Image", "products/hasbro/brush_fox_starter/product_brush_fox_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Brush_Fox_Stock_Starter", "variantName": "Brush Fox J 9-70GR" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Brush_Fox_Stock_Starter",
    "name": "Brush Fox J 9-70GR",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Brush_Fox_Stock_Starter_Image", "products/hasbro/brush_fox_starter/beyblade_brush_fox_starter.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_Brush_Fox", "variantName": "Brush Fox J" },
      { "partId": "9-70", "variantName": "Brush Fox J 9-70GR (Starter) (HB)" },
      { "partId": "GR", "variantName": "Brush Fox J 9-70GR (Starter) (HB)" }
    ]
  },
  {
    "id": "FullBlade_Brush_Fox",
    "name": "Brush Fox J",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("FullBlade_Brush_Fox_Image", "products/hasbro/brush_fox_starter/fullblade_brush_fox_starter.webp", "blade"),
    "contents": [
      { "partId": "Fox-LockChip", "variantName": "Brush Fox J 9-70GR (Starter) (HB)" },
      { "partId": "Brush-TT", "variantName": "Brush Fox J 9-70GR (Starter) (HB)" },
      { "partId": "J-Jaggy", "variantName": "Brush Fox J 9-70GR (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Fort_Hornet_Starter",
    "name": "Fort Hornet R 7-60T Starter Pack",
    "category": "Product",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Fort_Hornet_Starter_Image", "products/hasbro/fort_hornet_starter/product_fort_hornet_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Fort_Hornet_Stock_Starter", "variantName": "Fort Hornet R 7-60T" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Fort_Hornet_Stock_Starter",
    "name": "Fort Hornet R 7-60T",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Fort_Hornet_Stock_Starter_Image", "products/hasbro/fort_hornet_starter/beyblade_fort_hornet_starter.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_Fort_Hornet", "variantName": "Fort Hornet R" },
      { "partId": "7-60", "variantName": "Fort Hornet R 7-60T (Starter) (HB)" },
      { "partId": "T", "variantName": "Fort Hornet R 7-60T (Starter) (HB)" }
    ]
  },
  {
    "id": "FullBlade_Fort_Hornet",
    "name": "Fort Hornet R",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("FullBlade_Fort_Hornet_Image", "products/hasbro/fort_hornet_starter/fullblade_fort_hornet_starter.webp", "blade"),
    "contents": [
      { "partId": "Hornet-Hasbro", "variantName": "Fort Hornet R 7-60T (Starter) (HB) (Default)" },
      { "partId": "Fort-HB", "variantName": "Fort Hornet R 7-60T (Starter) (HB) (Default)" },
      { "partId": "R-Round", "variantName": "Fort Hornet R 7-60T (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Wriggle_Kraken_Starter",
    "name": "Wriggle Kraken S 3-85O Starter Pack",
    "category": "Product",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Wriggle_Kraken_Starter_Image", "products/hasbro/wriggle_kraken_starter/product_wriggle_kraken_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Wriggle_Kraken_Stock_Starter", "variantName": "Wriggle Kraken S 3-85O" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Wriggle_Kraken_Stock_Starter",
    "name": "Wriggle Kraken S 3-85O",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Wriggle_Kraken_Stock_Starter_Image", "products/hasbro/wriggle_kraken_starter/beyblade_wriggle_kraken_starter.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_Wriggle_Kraken", "variantName": "Wriggle Kraken S" },
      { "partId": "3-85", "variantName": "Wriggle Kraken S 3-85O (Starter) (HB)" },
      { "partId": "O", "variantName": "Wriggle Kraken S 3-85O (Starter) (HB)" }
    ]
  },
  {
    "id": "FullBlade_Wriggle_Kraken",
    "name": "Wriggle Kraken S",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("FullBlade_Wriggle_Kraken_Image", "products/hasbro/wriggle_kraken_starter/fullblade_wriggle_kraken_starter.webp", "blade"),
    "contents": [
      { "partId": "Kraken-Hasbro", "variantName": "Wriggle Kraken S 3-85O (Starter) (HB) (Default)" },
      { "partId": "Wriggle-HB", "variantName": "Wriggle Kraken S 3-85O (Starter) (HB) (Default)" },
      { "partId": "S-Slash", "variantName": "Wriggle Kraken S 3-85O (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Antler_Stag_Starter",
    "name": "Antler Stag B 2-60HN Starter Pack",
    "category": "Product",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Antler_Stag_Starter_Image", "products/hasbro/antler_stag_starter/product_antler_stag_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Antler_Stag_Stock_Starter", "variantName": "Antler Stag B 2-60HN" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Antler_Stag_Stock_Starter",
    "name": "Antler Stag B 2-60HN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Antler_Stag_Stock_Starter_Image", "products/hasbro/antler_stag_starter/beyblade_antler_stag_starter.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_Antler_Stag", "variantName": "Antler Stag B" },
      { "partId": "2-60", "variantName": "Antler Stag B 2-60HN (Starter) (HB)" },
      { "partId": "HN", "variantName": "Antler Stag B 2-60HN (Starter) (HB)" }
    ]
  },
  {
    "id": "FullBlade_Antler_Stag",
    "name": "Antler Stag B",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("FullBlade_Antler_Stag_Image", "products/hasbro/antler_stag_starter/fullblade_antler_stag_starter.webp", "blade"),
    "contents": [
      { "partId": "Antler-HB", "variantName": "Antler Stag B 2-60HN (Starter) (HB) (Default)" },
      { "partId": "Stag-Hasbro", "variantName": "Antler Stag B 2-60HN (Starter) (HB) (Default)" },
      { "partId": "B-Bumper", "variantName": "Antler Stag B 2-60HN (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Steel_Samurai_Booster",
    "name": "Steel Samurai 4-80T Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Steel_Samurai_Booster_Image", "products/hasbro/steel_samurai_booster/product_steel_samurai_booster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Steel_Samurai_Stock_Booster", "variantName": "Steel Samurai 4-80T" }
    ]
  },
  {
    "id": "Beyblade_Steel_Samurai_Stock_Booster",
    "name": "Steel Samurai 4-80T",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Steel_Samurai_Stock_Booster_Image", "products/hasbro/steel_samurai_booster/beyblade_steel_samurai_booster.webp", "beyblade"),
    "contents": [
      { "partId": "SteelSamurai", "variantName": "Steel Samurai 4-80T (Booster) (HB) (Default)" },
      { "partId": "4-80", "variantName": "Steel Samurai 4-80T (Booster) (HB)" },
      { "partId": "T", "variantName": "Steel Samurai 4-80T (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Horn_Rhino_Booster",
    "name": "Horn Rhino 3-80S Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Horn_Rhino_Booster_Image", "products/hasbro/horn_rhino_booster/product_horn_rhino_booster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Horn_Rhino_Stock_Booster", "variantName": "Horn Rhino 3-80S" }
    ]
  },
  {
    "id": "Beyblade_Horn_Rhino_Stock_Booster",
    "name": "Horn Rhino 3-80S",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Horn_Rhino_Stock_Booster_Image", "products/hasbro/horn_rhino_booster/beyblade_horn_rhino_booster.webp", "beyblade"),
    "contents": [
      { "partId": "HornRhino", "variantName": "Horn Rhino 3-80S (Booster) (HB) (Default)" },
      { "partId": "3-80", "variantName": "Horn Rhino 3-80S (Booster) (HB)" },
      { "partId": "S", "variantName": "Horn Rhino 3-80S (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Keel_Shark_3_60LF_Booster",
    "name": "Keel Shark 3-60LF Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Keel_Shark_3_60LF_Booster_Image", "products/hasbro/keel_shark_booster/product_keel_shark_booster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Keel_Shark_Stock_Booster", "variantName": "Keel Shark 3-60LF" }
    ]
  },
  {
    "id": "Beyblade_Keel_Shark_Stock_Booster",
    "name": "Keel Shark 3-60LF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Keel_Shark_Stock_Booster_Image", "products/hasbro/keel_shark_booster/beyblade_keel_shark_booster.webp", "beyblade"),
    "contents": [
      { "partId": "KeelShark", "variantName": "Keel Shark 3-60LF (Booster) (HB) (Default)" },
      { "partId": "3-60", "variantName": "Keel Shark 3-60LF (Booster) (HB)" },
      { "partId": "LF", "variantName": "Keel Shark 3-60LF (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Talon_Ptera_Booster",
    "name": "Talon Ptera 3-80B Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Talon_Ptera_Booster_Image", "products/hasbro/talon_ptera_booster/product_talon_ptera_booster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Talon_Ptera_Stock_Booster", "variantName": "Talon Ptera 3-80B" }
    ]
  },
  {
    "id": "Beyblade_Talon_Ptera_Stock_Booster",
    "name": "Talon Ptera 3-80B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Talon_Ptera_Stock_Booster_Image", "products/hasbro/talon_ptera_booster/beyblade_talon_ptera_booster.webp", "beyblade"),
    "contents": [
      { "partId": "TalonPtera", "variantName": "Talon Ptera 3-80B (Booster) (HB) (Default)" },
      { "partId": "3-80", "variantName": "Talon Ptera 3-80B (Booster) (HB)" },
      { "partId": "B", "variantName": "Talon Ptera 3-80B (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Sting_Unicorn_Booster",
    "name": "Sting Unicorn 5-60GP Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Sting_Unicorn_Booster_Image", "products/hasbro/sting_unicorn_booster/product_stin_unicorn_booster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Sting_Unicorn_Stock_Booster", "variantName": "Sting Unicorn 5-60GP" }
    ]
  },
  {
    "id": "Beyblade_Sting_Unicorn_Stock_Booster",
    "name": "Sting Unicorn 5-60GP",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Sting_Unicorn_Stock_Booster_Image", "products/hasbro/sting_unicorn_booster/beyblade_sting_unicorn_booster.webp", "beyblade"),
    "contents": [
      { "partId": "StingUnicorn", "variantName": "Sting Unicorn 5-60GP (Booster) (HB) (Default)" },
      { "partId": "5-60", "variantName": "Sting Unicorn 5-60GP (Booster) (HB)" },
      { "partId": "GP", "variantName": "Sting Unicorn 5-60GP (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Roar_Tyranno_Booster",
    "name": "Roar Tyranno 9-60GF Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Roar_Tyranno_Booster_Image", "products/hasbro/roar_tyranno_booster/product_roar_tyranno_booster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Roar_Tyranno_Stock_Booster", "variantName": "Roar Tyranno 9-60GF" }
    ]
  },
  {
    "id": "Beyblade_Roar_Tyranno_Stock_Booster",
    "name": "Roar Tyranno 9-60GF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Roar_Tyranno_Stock_Booster_Image", "products/hasbro/roar_tyranno_booster/beyblade_roar_tyranno_booster.webp", "beyblade"),
    "contents": [
      { "partId": "RoarTyranno", "variantName": "Roar Tyranno 9-60GF (Booster) (HB) (Default)" },
      { "partId": "9-60", "variantName": "Roar Tyranno 9-60GF (Booster) (HB)" },
      { "partId": "GF", "variantName": "Roar Tyranno 9-60GF (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Scythe_Incendio_3_80B_Booster",
    "name": "Scythe Incendio 3-80B Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Scythe_Incendio_3_80B_Booster_Image", "products/hasbro/scythe_incendio_3-80b_booster/product_scythe_incendio_3-80b_booster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Scythe_Incendio_Yellow_Booster", "variantName": "Scythe Incendio 3-80B" }
    ]
  },
  {
    "id": "Beyblade_Scythe_Incendio_Yellow_Booster",
    "name": "Scythe Incendio 3-80B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Scythe_Incendio_Yellow_Booster_Image", "products/hasbro/scythe_incendio_3-80b_booster/beyblade_scythe_incendio_3-80b_booster.webp", "beyblade"),
    "contents": [
      { "partId": "ScytheIncendio", "variantName": "Scythe Incendio 3-80B (Booster) (HB)" },
      { "partId": "3-80", "variantName": "Scythe Incendio 3-80B (Booster) (HB)" },
      { "partId": "B", "variantName": "Scythe Incendio 3-80B (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Savage_Bear_Booster",
    "name": "Savage Bear 3-60S Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Savage_Bear_Booster_Image", "products/hasbro/savage_bear_booster/product_savage_bear_booster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Savage_Bear_Stock_Booster", "variantName": "Savage Bear 3-60S" }
    ]
  },
  {
    "id": "Beyblade_Savage_Bear_Stock_Booster",
    "name": "Savage Bear 3-60S",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Savage_Bear_Stock_Booster_Image", "products/hasbro/savage_bear_booster/beyblade_savage_bear_booster.webp", "beyblade"),
    "contents": [
      { "partId": "SavageBear", "variantName": "Savage Bear 3-60S (Booster) (HB) (Default)" },
      { "partId": "3-60", "variantName": "Savage Bear 3-60S (Booster) (HB)" },
      { "partId": "S", "variantName": "Savage Bear 3-60S (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Cowl_Sphinx_Booster",
    "name": "Cowl Sphinx 9-80GN Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Cowl_Sphinx_Booster_Image", "products/hasbro/cowl_sphinx_booster/product_cowl_sphinx_booster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Cowl_Sphinx_Stock_Booster", "variantName": "Cowl Sphinx 9-80GN" }
    ]
  },
  {
    "id": "Beyblade_Cowl_Sphinx_Stock_Booster",
    "name": "Cowl Sphinx 9-80GN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Cowl_Sphinx_Stock_Booster_Image", "products/hasbro/cowl_sphinx_booster/beyblade_cowl_sphinx_booster.webp", "beyblade"),
    "contents": [
      { "partId": "CowlSphinx", "variantName": "Cowl Sphinx 9-80GN (Booster) (HB) (Default)" },
      { "partId": "9-80", "variantName": "Cowl Sphinx 9-80GN (Booster) (HB)" },
      { "partId": "GN", "variantName": "Cowl Sphinx 9-80GN (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Arrow_Wizard_4_80GB_Booster",
    "name": "Arrow Wizard 4-80GB Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Arrow_Wizard_4_80GB_Booster_Image", "products/hasbro/arrow_wizard_4-80gb_booster/product_arrow_wizard_4-80gb_booster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Arrow_Wizard_Purple_Booster", "variantName": "Arrow Wizard 4-80GB" }
    ]
  },
  {
    "id": "Beyblade_Arrow_Wizard_Purple_Booster",
    "name": "Arrow Wizard 4-80GB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Arrow_Wizard_Purple_Booster_Image", "products/hasbro/arrow_wizard_4-80gb_booster/beyblade_arrow_wizard_4-80gb_booster.webp", "beyblade"),
    "contents": [
      { "partId": "ArrowWizard", "variantName": "Arrow Wizard 4-80GB (Booster) (HB)" },
      { "partId": "4-80", "variantName": "Arrow Wizard 4-80GB (Booster) (HB)" },
      { "partId": "GB", "variantName": "Arrow Wizard 4-80GB (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Obsidian_Shell_Booster",
    "name": "Obsidian Shell 4-60D Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Obsidian_Shell_Booster_Image", "products/hasbro/obsidian_shell_booster/product_obsidian_shell_booster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Obsidian_Shell_Stock_Booster", "variantName": "Obsidian Shell 4-60D" }
    ]
  },
  {
    "id": "Beyblade_Obsidian_Shell_Stock_Booster",
    "name": "Obsidian Shell 4-60D",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Obsidian_Shell_Stock_Booster_Image", "products/hasbro/obsidian_shell_booster/beyblade_obsidian_shell_booster.webp", "beyblade"),
    "contents": [
      { "partId": "ObsidianShell", "variantName": "Obsidian Shell 4-60D (Booster) (HB) (Default)" },
      { "partId": "4-60", "variantName": "Obsidian Shell 4-60D (Booster) (HB)" },
      { "partId": "D", "variantName": "Obsidian Shell 4-60D (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Keel_Shark_1_60Q_Booster",
    "name": "Keel Shark 1-60Q Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Keel_Shark_1_60Q_Booster_Image", "products/hasbro/keel_shark_1-60q_booster/product_keel_shark_1-60q_booster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Keel_Shark_Black_Booster", "variantName": "Keel Shark 1-60Q" }
    ]
  },
  {
    "id": "Beyblade_Keel_Shark_Black_Booster",
    "name": "Keel Shark 1-60Q",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Keel_Shark_Black_Booster_Image", "products/hasbro/keel_shark_1-60q_booster/beyblade_keel_shark_1-60q_booster.webp", "beyblade"),
    "contents": [
      { "partId": "KeelShark", "variantName": "Keel Shark 1-60Q (Booster) (HB)" },
      { "partId": "1-60", "variantName": "Keel Shark 1-60Q (Booster) (HB)" },
      { "partId": "Q", "variantName": "Keel Shark 1-60Q (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Tide_Whale_Booster",
    "name": "Tide Whale 5-80E Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Tide_Whale_Booster_Image", "products/hasbro/tide_whale_booster/product_tide_whale_booster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Tide_Whale_Stock_Booster", "variantName": "Tide Whale 5-80E" }
    ]
  },
  {
    "id": "Beyblade_Tide_Whale_Stock_Booster",
    "name": "Tide Whale 5-80E",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Tide_Whale_Stock_Booster_Image", "products/hasbro/tide_whale_booster/beyblade_tide_whale_booster.webp", "beyblade"),
    "contents": [
      { "partId": "TideWhale", "variantName": "Tide whale 5-80E (Booster) (HB) (Default)" },
      { "partId": "5-80", "variantName": "Tide Whale 5-80E (Booster) (HB)" },
      { "partId": "E", "variantName": "Tide Whale 5-80E (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Dagger_Dran_Booster",
    "name": "Dagger Dran 4-70Q Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Dagger_Dran_Booster_Image", "products/hasbro/dagger_dran_4-70q_booster/product_dagger_dran_4-70q_booster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Dagger_Dran_Orange_Booster", "variantName": "Dagger Dran 4-70Q" }
    ]
  },
  {
    "id": "Beyblade_Dagger_Dran_Orange_Booster",
    "name": "Dagger Dran 4-70Q",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Dagger_Dran_Orange_Booster_Image", "products/hasbro/dagger_dran_4-70q_booster/beyblade_dagger_dran_4-70q_booster.webp", "beyblade"),
    "contents": [
      { "partId": "DaggerDran", "variantName": "Dagger Dran 4-70Q (Booster) (HB)" },
      { "partId": "4-70", "variantName": "Dagger Dran 4-70Q (Booster) (HB)" },
      { "partId": "Q", "variantName": "Dagger Dran 4-70Q (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Lance_Knight_3_60LF_Booster",
    "name": "Lance Knight 3-60LF Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Lance_Knight_3_60LF_Booster_Image", "products/hasbro/lance_knight_3-60lf_booster/product_lance_knight_3-60lf_booster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Lance_Knight_Yellow_Booster", "variantName": "Lance Knight 3-60LF" }
    ]
  },
  {
    "id": "Beyblade_Lance_Knight_Yellow_Booster",
    "name": "Lance Knight 3-60LF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Lance_Knight_Yellow_Booster_Image", "products/hasbro/lance_knight_3-60lf_booster/beyblade_lance_knight_3-60lf_booster.webp", "beyblade"),
    "contents": [
      { "partId": "LanceKnight", "variantName": "Lance Knight 3-60LF (Booster) (HB)" },
      { "partId": "3-60", "variantName": "Lance Knight 3-60LF (Booster) (HB)" },
      { "partId": "LF", "variantName": "Lance Knight 3-60LF (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Yell_Kong_Booster",
    "name": "Yell Kong 3-60GB Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Yell_Kong_Booster_Image", "products/hasbro/yell_kong_booster/product_yell_kong_booster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Yell_Kong_Stock", "variantName": "Yell Kong 3-60GB" }
    ]
  },
  {
    "id": "Beyblade_Yell_Kong_Stock",
    "name": "Yell Kong 3-60GB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Yell_Kong_Stock_Image", "products/hasbro/yell_kong_booster/beyblade_yell_kong_booster.webp", "beyblade"),
    "contents": [
      { "partId": "YellKong", "variantName": "Yell Kong 3-60GB (Booster) (HB) (Default)" },
      { "partId": "3-60", "variantName": "Yell Kong 3-60GB (Booster, Dual Pack) (HB)" },
      { "partId": "GB", "variantName": "Yell Kong 3-60GB (Booster, Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Arrow_Wizard_4_80O_Booster",
    "name": "Arrow Wizard 4-80O Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Arrow_Wizard_4_80O_Booster_Image", "products/hasbro/arrow_wizard_4-80o_booster/product_arrow_wizard_4-80o_booster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Arrow_Wizard_4-80_O_Booster", "variantName": "Arrow Wizard 4-80O" }
    ]
  },
  {
    "id": "Beyblade_Arrow_Wizard_4-80_O_Booster",
    "name": "Arrow Wizard 4-80O",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Arrow_Wizard_4-80_O_Booster_Image", "products/hasbro/arrow_wizard_4-80o_booster/beyblade_arrow_wizard_4-80o_booster.webp", "beyblade"),
    "contents": [
      { "partId": "ArrowWizard", "variantName": "Arrow Wizard 4-80O (Booster) (HB)" },
      { "partId": "4-80", "variantName": "Arrow Wizard 4-80O (Booster) (HB)" },
      { "partId": "O", "variantName": "Arrow Wizard 4-80O (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Soar_Phoenix_Booster",
    "name": "Soar Phoenix 5-60H Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Soar_Phoenix_Booster_Image", "products/hasbro/soar_phoenix_5-80h_booster/product_soar_phoenix_5-80h_booster.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Soar_Phoenix_Blue_Booster", "variantName": "Soar Phoenix 5-80H" }
    ]
  },
  {
    "id": "Beyblade_Soar_Phoenix_Blue_Booster",
    "name": "Soar Phoenix 5-80H",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Soar_Phoenix_Blue_Booster_Image", "products/hasbro/soar_phoenix_5-80h_booster/beyblade_soar_phoenix_5-80h_booster.webp", "beyblade"),
    "contents": [
      { "partId": "SoarPhoenix", "variantName": "Soar Phoenix 5-80H (Booster) (HB)" },
      { "partId": "5-80", "variantName": "Soar Phoenix 5-80H (Booster) (HB)" },
      { "partId": "H", "variantName": "Soar Phoenix 5-80H (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Knife_Shinobi_Keel_Shark_Dual",
    "name": "Knife Shinobi and Keel Shark Dual Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Knife_Shinobi_Keel_Shark_Dual_Image", "products/hasbro/knife_shinobi_keel_shark_dual/product_knife_shonobi_keel_shark.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Knife_Shinobi_Dual_Pack_Stock", "variantName": "Knife Shinobi 4-80HN" },
      { "partId": "Beyblade_Keel_Shark_3-80_F_Dual_Pack", "variantName": "Keel Shark 3-80F" }
    ]
  },
  {
    "id": "Beyblade_Knife_Shinobi_Dual_Pack_Stock",
    "name": "Knife Shinobi 4-80HN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Knife_Shinobi_Dual_Pack_Stock_Image", "products/hasbro/knife_shinobi_keel_shark_dual/beyblade_knife_shinobi.webp", "beyblade"),
    "contents": [
      { "partId": "KnifeShinobi", "variantName": "Knife Shinobi 4-80HN (Dual Pack) (HB) (Default)" },
      { "partId": "4-80", "variantName": "Knife Shinobi 4-80HN (Dual Pack) (HB)" },
      { "partId": "HN", "variantName": "Knife Shinobi 4-80HN (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_Keel_Shark_3-80_F_Dual_Pack",
    "name": "Keel Shark 3-80F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Keel_Shark_3-80_F_Dual_Pack_Image", "products/hasbro/knife_shinobi_keel_shark_dual/beyblade_keel_shark.webp", "beyblade"),
    "contents": [
      { "partId": "KeelShark", "variantName": "Keel Shark 3-80F (Dual Pack) (HB)" },
      { "partId": "3-80", "variantName": "Keel Shark 3-80F (Dual Pack) (HB)" },
      { "partId": "F", "variantName": "Keel Shark 3-80F (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Chain_Incendio_Arrow_Wizard_Dual",
    "name": "Chain Incendio and Arrow Wizard Dual Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Chain_Incendio_Arrow_Wizard_Dual_Image", "products/hasbro/chain_incendio_arrow_wizard_dual/product_chain_incendio_arrow_wizard.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Chain_Incendio_Dual_Pack_Stock", "variantName": "Chain Incendio 5-60HT" },
      { "partId": "Beyblade_Arrow_Wizard_4-60_N_Dual_Pack", "variantName": "Arrow Wizard 4-60N" }
    ]
  },
  {
    "id": "Beyblade_Chain_Incendio_Dual_Pack_Stock",
    "name": "Chain Incendio 5-60HT",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Chain_Incendio_Dual_Pack_Stock_Image", "products/hasbro/chain_incendio_arrow_wizard_dual/beyblade_chain_incendio.webp", "beyblade"),
    "contents": [
      { "partId": "ChainIncendio", "variantName": "Chain Incendio 5-60HT (Dual Pack) (HB) (Default)" },
      { "partId": "5-60", "variantName": "Chain Incendio 5-60HT (Dual Pack) (HB)" },
      { "partId": "HT", "variantName": "Chain Incendio 5-60HT (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_Arrow_Wizard_4-60_N_Dual_Pack",
    "name": "Arrow Wizard 4-60N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Arrow_Wizard_4-60_N_Dual_Pack_Image", "products/hasbro/chain_incendio_arrow_wizard_dual/beyblade_arrow_wizard.webp", "beyblade"),
    "contents": [
      { "partId": "ArrowWizard", "variantName": "Arrow Wizard 4-60N (Dual Pack) (HB)" },
      { "partId": "4-60", "variantName": "Arrow Wizard 4-60N (Dual Pack) (HB)" },
      { "partId": "N", "variantName": "Arrow Wizard 4-60N (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Tail_Viper_Sword_Dran_Dual",
    "name": "Tail Viper and Sword Dran Dual Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Tail_Viper_Sword_Dran_Dual_Image", "products/hasbro/tail_viper_sword_dran_dual/product_tail_viper_sword_dran.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Tail_Viper_5-80_O_Dual_Pack", "variantName": "Tail Viper 5-80O" },
      { "partId": "Beyblade_Sword_Dran_3-60_F_Dual_Pack_Red", "variantName": "Sword Dran 3-60F" }
    ]
  },
  {
    "id": "Beyblade_Tail_Viper_5-80_O_Dual_Pack",
    "name": "Tail Viper 5-80O",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Tail_Viper_5-80_O_Dual_Pack_Image", "products/hasbro/tail_viper_sword_dran_dual/beyblade_tail_viper.webp", "beyblade"),
    "contents": [
      { "partId": "TailViper", "variantName": "Tail Viper 5-80O (Dual Pack) (HB) (Default)" },
      { "partId": "5-80", "variantName": "Tail Viper 5-80O (Dual Pack) (HB)" },
      { "partId": "O", "variantName": "Tail Viper 5-80O (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_Sword_Dran_3-60_F_Dual_Pack_Red",
    "name": "Sword Dran 3-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Sword_Dran_3-60_F_Dual_Pack_Red_Image", "products/hasbro/tail_viper_sword_dran_dual/beyblade_sword_dran.webp", "beyblade"),
    "contents": [
      { "partId": "SwordDran", "variantName": "Sword Dran 3-60F (Dual Pack) (HB)" },
      { "partId": "3-60", "variantName": "Sword Dran 3-60F (Dual Pack) (HB)" },
      { "partId": "F", "variantName": "Sword Dran 3-60F (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Yell_Kong_Helm_Knight_Dual",
    "name": "Yell Kong and Helm Knight Dual Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Yell_Kong_Helm_Knight_Dual_Image", "products/hasbro/yell_kong_helm_knight_dual/product_yell_kong_helm_knight.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Yell_Kong_Stock", "variantName": "Yell Kong 3-60GB" },
      { "partId": "Beyblade_Helm_Knight_5-80_T_Dual_Pack", "variantName": "Helm Knight 5-80T" }
    ]
  },
  {
    "id": "Beyblade_Helm_Knight_5-80_T_Dual_Pack",
    "name": "Helm Knight 5-80T",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Helm_Knight_5-80_T_Dual_Pack_Image", "products/hasbro/yell_kong_helm_knight_dual/beyblade_helm_knight.webp", "beyblade"),
    "contents": [
      { "partId": "HelmKnight", "variantName": "Helm Knight 5-80T (Dual Pack) (HB)" },
      { "partId": "5-80", "variantName": "Helm Knight 5-80T (Dual Pack) (HB)" },
      { "partId": "T", "variantName": "Helm Knight 5-80T (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Bite_Croc_Sting_Unicorn_Dual",
    "name": "Bite Croc and Sting Unicorn Dual Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Bite_Croc_Sting_Unicorn_Dual_Image", "products/hasbro/bite_croc_sting_unicorn_dual/product_bite_croc_sting_unicorn.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Bite_Croc_Stock_Dual_Pack", "variantName": "Bite Croc 3-60LF" },
      { "partId": "Beyblade_Sting_Unicorn_4-60_P_Dual_Pack", "variantName": "Sting unicorn 4-60P" }
    ]
  },
  {
    "id": "Beyblade_Bite_Croc_Stock_Dual_Pack",
    "name": "Bite Croc 3-60LF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Bite_Croc_Stock_Dual_Pack_Image", "products/hasbro/bite_croc_sting_unicorn_dual/beyblade_bite_croc.webp", "beyblade"),
    "contents": [
      { "partId": "BiteCroc", "variantName": "Bite Croc 3-60LF (Dual Pack) (HB) (Default)" },
      { "partId": "3-60", "variantName": "Bite Croc 3-60LF (Dual Pack) (HB)" },
      { "partId": "LF", "variantName": "Bite Croc 3-60LF (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_Sting_Unicorn_4-60_P_Dual_Pack",
    "name": "Sting unicorn 4-60P",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Sting_Unicorn_4-60_P_Dual_Pack_Image", "products/hasbro/bite_croc_sting_unicorn_dual/beyblade_sting_unicorn.webp", "beyblade"),
    "contents": [
      { "partId": "StingUnicorn", "variantName": "Sting Unicorn 4-60P (Dual Pack) (HB)" },
      { "partId": "4-60", "variantName": "Sting Unicorn 4-60P (Dual Pack) (HB)" },
      { "partId": "P", "variantName": "Sting Unicorn 4-60P (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Gale_Wyvern_Tail_Viper_Dual",
    "name": "Gale Wyvern and Tail Viper Dual Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Gale_Wyvern_Tail_Viper_Dual_Image", "products/hasbro/gale_wyvern_tail_viper_dual/product_gale_wyvern_tail_viper.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Gale_Wyvern_Stock_Dual_Pack", "variantName": "Gale Wyvern 5-80GB" },
      { "partId": "Beyblade_Tail_Viper_3-80_HN_Dual_Pack", "variantName": "Tail Viper 3-80HN" }
    ]
  },
  {
    "id": "Beyblade_Gale_Wyvern_Stock_Dual_Pack",
    "name": "Gale Wyvern 5-80GB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Gale_Wyvern_Stock_Dual_Pack_Image", "products/hasbro/gale_wyvern_tail_viper_dual/beyblade_gale_wyvern.webp", "beyblade"),
    "contents": [
      { "partId": "GaleWyvern", "variantName": "Gale Wyvern 5-80GB (Dual Pack) (HB) (Default)" },
      { "partId": "5-80", "variantName": "Gale Wyvern 5-80GB (Dual Pack) (HB)" },
      { "partId": "GB", "variantName": "Gale Wyvern 5-80GB (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_Tail_Viper_3-80_HN_Dual_Pack",
    "name": "Tail Viper 3-80HN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Tail_Viper_3-80_HN_Dual_Pack_Image", "products/hasbro/gale_wyvern_tail_viper_dual/beyblade_tail_viper.webp", "beyblade"),
    "contents": [
      { "partId": "TailViper", "variantName": "Tail Viper 3-80HN (Dual Pack) (HB)" },
      { "partId": "3-80", "variantName": "Tail Viper 3-80HN (Dual Pack) (HB)" },
      { "partId": "HN", "variantName": "Tail Viper 3-80HN (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Beat_Tyranno_Knife_Shinobi_Dual",
    "name": "Beat Tyranno and Knife Shinobi Dual Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Beat_Tyranno_Knife_Shinobi_Dual_Image", "products/hasbro/beat_tyranno_knife_shinobi_dual/product_beat_tyranno_knife_shinobi.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Beat_Tyranno_Stock_Dual_Pack", "variantName": "Beat Tyranno 4-70Q" },
      { "partId": "Beyblade_Knife_Shinobi_Dual_Pack_Stock", "variantName": "Knife Shinobi 4-80HN" }
    ]
  },
  {
    "id": "Beyblade_Beat_Tyranno_Stock_Dual_Pack",
    "name": "Beat Tyranno 4-70Q",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Beat_Tyranno_Stock_Dual_Pack_Image", "products/hasbro/beat_tyranno_knife_shinobi_dual/beyblade_beat_tyranno.webp", "beyblade"),
    "contents": [
      { "partId": "BeatTyranno", "variantName": "Beat Tyranno 4-70Q (Dual Pack) (HB) (Default)" },
      { "partId": "4-70", "variantName": "Beat Tyranno 4-70Q (Dual Pack) (HB)" },
      { "partId": "Q", "variantName": "Beat Tyranno 4-70Q (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Gale_Wyvern_Sword_Dran_Dual",
    "name": "Gale Wyvern and Sword Dran Dual Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Gale_Wyvern_Sword_Dran_Dual_Image", "products/hasbro/gale_wyvern_sword_dran_dual/product_gale_wyvern_sword_dran.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Gale_Wyvern_3-60_T_Dual_Pack", "variantName": "Gale Wyvern 3-60T" },
      { "partId": "Beyblade_Sword_Dran_3-80_B_Dual_Pack", "variantName": "Sword Dran 3-80B" }
    ]
  },
  {
    "id": "Beyblade_Gale_Wyvern_3-60_T_Dual_Pack",
    "name": "Gale Wyvern 3-60T",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Gale_Wyvern_3-60_T_Dual_Pack_Image", "products/hasbro/gale_wyvern_sword_dran_dual/beyblade_gale_wyvern.webp", "beyblade"),
    "contents": [
      { "partId": "GaleWyvern", "variantName": "Gale Wyvern 3-60T (Dual Pack) (HB)" },
      { "partId": "3-60", "variantName": "Gale Wyvern 3-60T (Dual Pack) (HB)" },
      { "partId": "T", "variantName": "Gale Wyvern 3-60T (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_Sword_Dran_3-80_B_Dual_Pack",
    "name": "Sword Dran 3-80B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Sword_Dran_3-80_B_Dual_Pack_Image", "products/hasbro/gale_wyvern_sword_dran_dual/beyblade_sword_dran.webp", "beyblade"),
    "contents": [
      { "partId": "SwordDran", "variantName": "Sword Dran 3-80B (Dual Pack) (HB)" },
      { "partId": "3-80", "variantName": "Sword Dran 3-80B (Dual Pack) (HB)" },
      { "partId": "B", "variantName": "Sword Dran 3-80B (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Cowl_Sphinx_Crest_Leon_Dual",
    "name": "Cowl Sphinx and Crest Leon Dual Pack",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Cowl_Sphinx_Crest_Leon_Dual_Image", "products/hasbro/cowl_sphinx_crest_leon_dual/product_cowl_sphinx_crest_leon.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Cowl_Sphinx_1-80_GF_Dual_Pack", "variantName": "Cowl Sphinx 1-80GF" },
      { "partId": "Beyblade_Crest_Leon_Stoc_Dual_Pack", "variantName": "Crest Leon 7-60GN" }
    ]
  },
  {
    "id": "Beyblade_Cowl_Sphinx_1-80_GF_Dual_Pack",
    "name": "Cowl Sphinx 1-80GF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Cowl_Sphinx_1-80_GF_Dual_Pack_Image", "products/hasbro/cowl_sphinx_crest_leon_dual/beyblade_cowl_sphinx.webp", "beyblade"),
    "contents": [
      { "partId": "CowlSphinx", "variantName": "Cowl Sphinx 1-80GF (Dual Pack) (HB)" },
      { "partId": "1-80", "variantName": "Cowl Sphinx 1-80GF (Dual Pack) (HB)" },
      { "partId": "GF", "variantName": "Cowl Sphinx 1-80GF (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_Crest_Leon_Stoc_Dual_Pack",
    "name": "Crest Leon 7-60GN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Crest_Leon_Stoc_Dual_Pack_Image", "products/hasbro/cowl_sphinx_crest_leon_dual/beyblade_crest_leon.webp", "beyblade"),
    "contents": [
      { "partId": "CrestLeon", "variantName": "Crest Leon 7-60GN (Dual Pack) (HB) (Default)" },
      { "partId": "7-60", "variantName": "Crest Leon 7-60GN (Dual Pack) (HB)" },
      { "partId": "GN", "variantName": "Crest Leon 7-60GN (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Pearl_Tiger_Gill_Shark_Dual",
    "name": "Pearl Tiger and Gill Shark Dual Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Pearl_Tiger_Gill_Shark_Dual_Image", "products/hasbro/pearl_tiger_gill_shark_dual/product_pearl_tiger_gill_shark.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Pearl_Tiger_Stock_Dual_Pack", "variantName": "Pearl Tiger 3-60U" },
      { "partId": "Beyblade_Gill_Shark_4-70_O_Dual_Pack", "variantName": "Gill Shark 4-70O" }
    ]
  },
  {
    "id": "Beyblade_Pearl_Tiger_Stock_Dual_Pack",
    "name": "Pearl Tiger 3-60U",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Pearl_Tiger_Stock_Dual_Pack_Image", "products/hasbro/pearl_tiger_gill_shark_dual/beyblade_pearl_tiger.webp", "beyblade"),
    "contents": [
      { "partId": "PearlTiger", "variantName": "Pearl Tiger 3-60U (Dual Pack) (HB) (Default)" },
      { "partId": "3-60", "variantName": "Pearl Tiger 3-60U (Dual Pack) (HB)" },
      { "partId": "U", "variantName": "Pearl Tiger 3-60U (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_Gill_Shark_4-70_O_Dual_Pack",
    "name": "Gill Shark 4-70O",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Gill_Shark_4-70_O_Dual_Pack_Image", "products/hasbro/pearl_tiger_gill_shark_dual/beyblade_gill_shark.webp", "beyblade"),
    "contents": [
      { "partId": "GillShark", "variantName": "Gill Shark 4-70O (Dual Pack) (HB) (Default)" },
      { "partId": "4-70", "variantName": "Gill Shark 4-70O (Dual Pack) (HB)" },
      { "partId": "O", "variantName": "Gill Shark 4-70O (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Circle_Ghost_Chain_Incendio_Dual",
    "name": "Circle Ghost and Chain Incendio Dual Pack",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Circle_Ghost_Chain_Incendio_Dual_Image", "products/hasbro/chain_incendio_circle_ghost_dual/product_chain_incendio_circle_ghost.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Circle_Ghost_Stock_Dual_Pack", "variantName": "Circle Ghost 0-80GB" },
      { "partId": "Beyblade_Chain_Incendio_Dual_Pack_Stock", "variantName": "Chain Incendio 5-60HT" }
    ]
  },
  {
    "id": "Beyblade_Circle_Ghost_Stock_Dual_Pack",
    "name": "Circle Ghost 0-80GB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Circle_Ghost_Stock_Dual_Pack_Image", "products/hasbro/chain_incendio_circle_ghost_dual/beyblade_circle_ghost.webp", "beyblade"),
    "contents": [
      { "partId": "CircleGhost", "variantName": "Circle Ghost 0-80GB (Dual Pack) (HB) (Default)" },
      { "partId": "0-80", "variantName": "Circle Ghost 0-80GB (Dual Pack) (HB)" },
      { "partId": "GB", "variantName": "Circle Ghost 0-80GB (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Tackle_Goat_Sword_Dran_Dual",
    "name": "Tackle Goat and Sword Dran Dual Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Tackle_Goat_Sword_Dran_Dual_Image", "products/hasbro/sword_dran_tackle_goat_dual/product_sword_dran_tackle_goat.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Tackle_Goat_2-70_N_Dual_Pack", "variantName": "Tackle Goat 2-70N" },
      { "partId": "Beyblade_Sword_Dran_3-60_F_Dual_Pack_Red", "variantName": "Sword Dran 3-60F" }
    ]
  },
  {
    "id": "Beyblade_Tackle_Goat_2-70_N_Dual_Pack",
    "name": "Tackle Goat 2-70N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Tackle_Goat_2-70_N_Dual_Pack_Image", "products/hasbro/sword_dran_tackle_goat_dual/beyblade_tackle_goat.webp", "beyblade"),
    "contents": [
      { "partId": "TackleGoat", "variantName": "Tackle Goat 2-70N (Dual Pack) (HB) (Default)" },
      { "partId": "2-70", "variantName": "Tackle Goat 2-70N (Dual Pack) (HB)" },
      { "partId": "N", "variantName": "Tackle Goat 2-70N (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Dranzer_Spiral_Red_Starter",
    "name": "Dranzer Spiral 3-80T Starter Pack (Red)",
    "category": "Product",
    "series": ["BX", "XOver"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Dranzer_Spiral_Red_Starter_Image", "products/hasbro/dranzer_red/product_dranzer_red.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Dranzer_Spiral_Red_Starter", "variantName": "Dranzer Spiral 3-80T" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Dranzer_Spiral_Red_Starter",
    "name": "Dranzer Spiral 3-80T",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX", "XOver"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Dranzer_Spiral_Red_Starter_Image", "products/hasbro/dranzer_red/beyblade_dranzer_red.webp", "beyblade"),
    "contents": [
      { "partId": "DranzerSpiral-Hasbro", "variantName": "Dranzer Spiral 3-80T (Red Starter) (HB)" },
      { "partId": "3-80", "variantName": "Dranzer Spiral 3-80T (Red Starter) (HB)" },
      { "partId": "T", "variantName": "Dranzer Spiral 3-80T (Red Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Dranzer_Spiral_Green_Starter",
    "name": "Dranzer Spiral 3-80T Starter Pack (Green)",
    "category": "Product",
    "series": ["BX", "XOver"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Dranzer_Spiral_Green_Starter_Image", "products/hasbro/dranzer_green/product_dranzer_green.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Dranzer_Spiral_Green_Starter", "variantName": "Dranzer Spiral 3-80T" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Dranzer_Spiral_Green_Starter",
    "name": "Dranzer Spiral 3-80T",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX", "XOver"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Dranzer_Spiral_Green_Starter_Image", "products/hasbro/dranzer_green/beyblade_dranzer_green.webp", "beyblade"),
    "contents": [
      { "partId": "DranzerSpiral-Hasbro", "variantName": "Dranzer Spiral 3-80T (Green Starter) (HB)" },
      { "partId": "3-80", "variantName": "Dranzer Spiral 3-80T (Green Starter) (HB)" },
      { "partId": "T", "variantName": "Dranzer Spiral 3-80T (Green Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Dranzer_Spiral_Blue_Starter",
    "name": "Dranzer Spiral 3-80T Starter Pack",
    "category": "Product",
    "series": ["BX", "XOver"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Dranzer_Spiral_Blue_Starter_Image", "products/hasbro/dranzer_blue/product_dranzer_blue_starter.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Dranzer_Spiral_Starter", "variantName": "Dranzer Spiral 3-80T" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Dranzer_Spiral_Starter",
    "name": "Dranzer Spiral 3-80T",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX", "XOver"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Dranzer_Spiral_Starter_Image", "products/hasbro/dranzer_blue/beyblade_dranzer_blue.webp", "beyblade"),
    "contents": [
      { "partId": "DranzerSpiral-Hasbro", "variantName": "Dranzer Spiral 3-80T (Blue Starter) (HB) (Default)" },
      { "partId": "3-80", "variantName": "Dranzer Spiral 3-80T (Starter) (HB)" },
      { "partId": "T", "variantName": "Dranzer Spiral 3-80T (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Driger_Slash_Starter",
    "name": "Driger Slash 4-80P Starter Pack",
    "category": "Product",
    "series": ["BX", "XOver"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Driger_Slash_Starter_Image", "products/hasbro/driger/product_driger.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Driger_Slash_Starter", "variantName": "Driger Slash 4-80P" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_Driger_Slash_Starter",
    "name": "Driger Slash 4-80P",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX", "XOver"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Driger_Slash_Starter_Image", "products/hasbro/driger/beyblade_driger.webp", "beyblade"),
    "contents": [
      { "partId": "DrigerSlash-Hasbro", "variantName": "Driger Slash 4-80P (Starter) (HB) (Default)" },
      { "partId": "4-80", "variantName": "Driger Slash 4-80P (Starter) (HB)" },
      { "partId": "P", "variantName": "Driger Slash 4-80P (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Iron_Man_Thanos_Multipack",
    "name": "Iron Man and Thanos Multipack Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Iron_Man_Thanos_Multipack_Image", "products/hasbro/ironman_thanos/product_ironman_thanos.webp", "product box"),
    "contents": [
      { "partId": "HB_EntryLauncher", "variantName": "Marvel" },
      { "partId": "HB_EntryLauncher", "variantName": "Marvel" },
      { "partId": "Beyblade_DualPack_IronMan", "variantName": "Iron Man 4-80B" },
      { "partId": "Beyblade_DualPack_Thanos", "variantName": "Thanos 4-60P" }
    ]
  },
  {
    "id": "Beyblade_DualPack_IronMan",
    "name": "Iron Man 4-80B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_IronMan_Image", "products/hasbro/ironman_thanos/beyblade_ironman.webp", "beyblade"),
    "contents": [
      { "partId": "IronMan", "variantName": "Iron Man 4-80B (Dual Pack) (HB) (Default)" },
      { "partId": "4-80", "variantName": "Iron Man 4-80B (Dual Pack) (HB)" },
      { "partId": "B", "variantName": "Iron Man 4-80B (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Thanos",
    "name": "Thanos 4-60P",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Thanos_Image", "products/hasbro/ironman_thanos/beyblade_thanos.webp", "beyblade"),
    "contents": [
      { "partId": "Thanos", "variantName": "Thanos 4-60P (Dual Pack) (HB) (Default)" },
      { "partId": "4-60", "variantName": "Thanos 4-60P (Dual Pack) (HB)" },
      { "partId": "P", "variantName": "Thanos 4-60P (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Spider_Man_Venom_Multipack",
    "name": "Spider-Man and Venom Multipack Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Spider_Man_Venom_Multipack_Image", "products/hasbro/spider-man_venom/product_spider-man_venom.webp", "product box"),
    "contents": [
      { "partId": "HB_EntryLauncher", "variantName": "Marvel" },
      { "partId": "HB_EntryLauncher", "variantName": "Marvel" },
      { "partId": "Beyblade_DualPack_Spider-Man", "variantName": "Spider-Man 3-60F" },
      { "partId": "Beyblade_DualPack_Venom", "variantName": "Venom 3-80N" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Spider-Man",
    "name": "Spider-Man 3-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Spider-Man_Image", "products/hasbro/spider-man_venom/beyblade_spider-man.webp", "beyblade"),
    "contents": [
      { "partId": "Spider-Man", "variantName": "Spider-Man 3-60F (Dual Pack) (HB) (Default)" },
      { "partId": "3-60", "variantName": "Spider-Man 3-60F (Dual Pack) (HB)" },
      { "partId": "F", "variantName": "Spider-Man 3-60F (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Venom",
    "name": "Venom 3-80N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Venom_Image", "products/hasbro/spider-man_venom/beyblade_venom.webp", "beyblade"),
    "contents": [
      { "partId": "Venom", "variantName": "Venom 3-80N (Dual Pack) (HB) (Default)" },
      { "partId": "3-80", "variantName": "Venom 3-80N (Dual Pack) (HB)" },
      { "partId": "N", "variantName": "Venom 3-80N (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Miles_Morales_Green_Goblin_Multipack",
    "name": "Miles Morales and Green Goblin Multipack Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Miles_Morales_Green_Goblin_Multipack_Image", "products/hasbro/miles_morales_green_goblin/product_miles_morales_green_goblin.webp", "product box"),
    "contents": [
      { "partId": "HB_EntryLauncher", "variantName": "Marvel" },
      { "partId": "HB_EntryLauncher", "variantName": "Marvel" },
      { "partId": "Beyblade_DualPack_Miles_Morales", "variantName": "Miles Morales 1-60GN" },
      { "partId": "Beyblade_DualPack_Green_Goblin", "variantName": "Green Goblin 9-80HT" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Miles_Morales",
    "name": "Miles Morales 1-60GN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Miles_Morales_Image", "products/hasbro/miles_morales_green_goblin/beyblade_miles_morales.webp", "beyblade"),
    "contents": [
      { "partId": "MilesMorales", "variantName": "Miles Morales 1-60GN (Dual Pack) (HB) (Default)" },
      { "partId": "1-60", "variantName": "Miles Morales 1-60GN (Dual Pack) (HB)" },
      { "partId": "GN", "variantName": "Miles Morales 1-60GN (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Green_Goblin",
    "name": "Green Goblin 9-80HT",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Green_Goblin_Image", "products/hasbro/miles_morales_green_goblin/beyblade_green_goblin.webp", "beyblade"),
    "contents": [
      { "partId": "GreenGoblin", "variantName": "Green Goblin 9-80HT (Dual Pack) (HB) (Default)" },
      { "partId": "9-80", "variantName": "Green Goblin 9-80HT (Dual Pack) (HB)" },
      { "partId": "HT", "variantName": "Green Goblin 9-80HT (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Captain_America_Red_Hulk_Multipack",
    "name": "Captain America and Red Hulk Multipack Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Captain_America_Red_Hulk_Multipack_Image", "products/hasbro/captain_america_red_hulk/product_captain_america_red_hulk.webp", "product box"),
    "contents": [
      { "partId": "HB_EntryLauncher", "variantName": "Marvel" },
      { "partId": "HB_EntryLauncher", "variantName": "Marvel" },
      { "partId": "Beyblade_DualPack_Captain_America", "variantName": "Captain America 4-70GB" },
      { "partId": "Beyblade_DualPack_Red_Hulk", "variantName": "Red Hulk 1-80R" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Captain_America",
    "name": "Captain America 4-70GB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Captain_America_Image", "products/hasbro/captain_america_red_hulk/beyblade_captain_america.webp", "beyblade"),
    "contents": [
      { "partId": "CaptainAmerica", "variantName": "Captain America 4-70GB (Dual Pack) (HB) (Default)" },
      { "partId": "4-70", "variantName": "Captain America 4-70GB (Dual Pack) (HB)" },
      { "partId": "GB", "variantName": "Captain America 4-70GB (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Red_Hulk",
    "name": "Red Hulk 1-80R",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Red_Hulk_Image", "products/hasbro/captain_america_red_hulk/beyblade_red_hulk.webp", "beyblade"),
    "contents": [
      { "partId": "RedHulk", "variantName": "Red Hulk 1-80R (Dual Pack) (HB) (Default)" },
      { "partId": "1-80", "variantName": "Red Hulk 1-80R (Dual Pack) (HB)" },
      { "partId": "R", "variantName": "Red Hulk 1-80R (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Luke_Skywalker_Darth_Vader_Multipack",
    "name": "Luke Skywalker and Darth Vader Multipack Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Luke_Skywalker_Darth_Vader_Multipack_Image", "products/hasbro/lukeskywalker_darthvader/product_lukeskywalker_darthvader.webp", "product box"),
    "contents": [
      { "partId": "HB_EntryLauncher", "variantName": "Star Wars" },
      { "partId": "HB_EntryLauncher", "variantName": "Star Wars" },
      { "partId": "Beyblade_DualPack_Luke_Skywalker", "variantName": "Luke Skywalker 4-80B" },
      { "partId": "Beyblade_DualPack_Darth_Vader", "variantName": "Darth Vader 4-60P" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Luke_Skywalker",
    "name": "Luke Skywalker 4-80B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Luke_Skywalker_Image", "products/hasbro/lukeskywalker_darthvader/beyblade_lukeskywalker.webp", "beyblade"),
    "contents": [
      { "partId": "LukeSkywalker", "variantName": "Luke Skywalker 4-80B (Dual Pack) (HB) (Default)" },
      { "partId": "4-80", "variantName": "Luke Skywalker 4-80B (Dual Pack) (HB)" },
      { "partId": "B", "variantName": "Luke Skywalker 4-80B (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Darth_Vader",
    "name": "Darth Vader 4-60P",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Darth_Vader_Image", "products/hasbro/lukeskywalker_darthvader/beyblade_darthvader.webp", "beyblade"),
    "contents": [
      { "partId": "DarthVader", "variantName": "Darth Vader 4-60P (Dual Pack) (HB) (Default)" },
      { "partId": "4-60", "variantName": "Darth Vader 4-60P (Dual Pack) (HB)" },
      { "partId": "P", "variantName": "Darth Vader 4-60P (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Mandalorian_Moff_Gideon_Multipack",
    "name": "The Mandolorian and Moff Gideon Multipack Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Mandalorian_Moff_Gideon_Multipack_Image", "products/hasbro/mandalorian_moffgideon/product_mandalorian_moffgideon.webp", "product box"),
    "contents": [
      { "partId": "HB_EntryLauncher", "variantName": "Star Wars" },
      { "partId": "HB_EntryLauncher", "variantName": "Star Wars" },
      { "partId": "Beyblade_DualPack_TheMandalorian", "variantName": "The Mandalorian 3-60F" },
      { "partId": "Beyblade_DualPack_Moff_Gideon", "variantName": "Moff Gideon 3-80N" }
    ]
  },
  {
    "id": "Beyblade_DualPack_TheMandalorian",
    "name": "The Mandalorian 3-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_TheMandalorian_Image", "products/hasbro/mandalorian_moffgideon/beyblade_mandalorian.webp", "beyblade"),
    "contents": [
      { "partId": "TheMandalorian", "variantName": "The Mandalorian 3-60F (Dual Pack) (HB) (Default)" },
      { "partId": "3-60", "variantName": "The Mandalorian 3-60F (Dual Pack) (HB)" },
      { "partId": "F", "variantName": "The Mandalorian 3-60F (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Moff_Gideon",
    "name": "Moff Gideon 3-80N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Moff_Gideon_Image", "products/hasbro/mandalorian_moffgideon/beyblade_moffgideon.webp", "beyblade"),
    "contents": [
      { "partId": "MoffGideon", "variantName": "Moff Gideon 3-80N (Dual Pack) (HB) (Default)" },
      { "partId": "3-80", "variantName": "Moff Gideon 3-80N (Dual Pack) (HB)" },
      { "partId": "N", "variantName": "Moff Gideon 3-80N (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Chewbacca_StormTrooper_Multipack",
    "name": "Chewbacca and Stormtrooper Multipack Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Chewbacca_StormTrooper_Multipack_Image", "products/hasbro/chewbacca_stormtrooper/product_chewbacca_stormtrooper.webp", "product box"),
    "contents": [
      { "partId": "HB_EntryLauncher", "variantName": "Star Wars" },
      { "partId": "HB_EntryLauncher", "variantName": "Star Wars" },
      { "partId": "Beyblade_DualPack_Chewbacca", "variantName": "Chewbacca 4-80LF" },
      { "partId": "Beyblade_DualPack_Stormtrooper", "variantName": "Stormtrooper 5-70B" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Chewbacca",
    "name": "Chewbacca 4-80LF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Chewbacca_Image", "products/hasbro/chewbacca_stormtrooper/beyblade_chewbacca.webp", "beyblade"),
    "contents": [
      { "partId": "Chewbacca", "variantName": "Chewbacca 4-80LF (Dual Pack) (HB) (Default)" },
      { "partId": "4-80", "variantName": "Chewbacca 4-80LF (Dual Pack) (HB)" },
      { "partId": "LF", "variantName": "Chewbacca 4-80LF (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Stormtrooper",
    "name": "Stormtrooper 5-70B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Stormtrooper_Image", "products/hasbro/chewbacca_stormtrooper/beyblade_stormtrooper.webp", "beyblade"),
    "contents": [
      { "partId": "Stormtrooper", "variantName": "Stormtrooper 5-70B (Dual Pack) (HB) (Default)" },
      { "partId": "5-70", "variantName": "Stormtrooper 5-70B (Dual Pack) (HB)" },
      { "partId": "B", "variantName": "Stormtrooper 5-70B (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_ObiWanKenobi_GeneralGrievous_Multipack",
    "name": "Obi-Wan Kenobi and General Grievous Multipack Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_ObiWanKenobi_GeneralGrievous_Multipack_Image", "products/hasbro/obiwan_grievous/product_obiwan_grievous.webp", "product box"),
    "contents": [
      { "partId": "HB_EntryLauncher", "variantName": "Star Wars" },
      { "partId": "HB_EntryLauncher", "variantName": "Star Wars" },
      { "partId": "Beyblade_DualPack_ObiWanKenobi", "variantName": "Obi-Wan Kenobi 4-60P" },
      { "partId": "Beyblade_DualPack_GeneralGrievous", "variantName": "General Grievous 3-80HN" }
    ]
  },
  {
    "id": "Beyblade_DualPack_ObiWanKenobi",
    "name": "Obi-Wan Kenobi 4-60P",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_ObiWanKenobi_Image", "products/hasbro/obiwan_grievous/beyblade_obiwan.webp", "beyblade"),
    "contents": [
      { "partId": "ObiWanKenobi", "variantName": "Obi-Wan Kenobi 4-60P (Dual Pack) (HB) (Default)" },
      { "partId": "4-60", "variantName": "Obi-Wan Kenobi 4-60P (Dual Pack) (HB)" },
      { "partId": "P", "variantName": "Obi-Wan Kenobi 4-60P (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_DualPack_GeneralGrievous",
    "name": "General Grievous 3-80HN",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_GeneralGrievous_Image", "products/hasbro/obiwan_grievous/beyblade_grievous.webp", "beyblade"),
    "contents": [
      { "partId": "GeneralGrievous", "variantName": "General Grievous 3-80HN (Dual Pack) (HB) (Default)" },
      { "partId": "3-80", "variantName": "General Grievous 3-80HN (Dual Pack) (HB)" },
      { "partId": "HN", "variantName": "General Grievous 3-80HN (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Optimus_Primal_Starscream_Multipack",
    "name": "Optimus Primal and Starscream Multipack Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Optimus_Primal_Starscream_Multipack_Image", "products/hasbro/optimusprimal_starscream/product_optimusprimal_starscream.webp", "product box"),
    "contents": [
      { "partId": "HB_EntryLauncher", "variantName": "Transformers" },
      { "partId": "HB_EntryLauncher", "variantName": "Transformers" },
      { "partId": "Beyblade_DualPack_Optimus_Primal", "variantName": "Optimus Primal 3-60F" },
      { "partId": "Beyblade_DualPack_Starscream", "variantName": "Starscream 3-80N" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Optimus_Primal",
    "name": "Optimus Primal 3-60F",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Optimus_Primal_Image", "products/hasbro/optimusprimal_starscream/beyblade_optimusprimal.webp", "beyblade"),
    "contents": [
      { "partId": "OptimusPrimal", "variantName": "Optimus Primal 3-60F (Dual Pack) (HB) (Default)" },
      { "partId": "3-60", "variantName": "Optimus Primal 3-60F (Dual Pack) (HB)" },
      { "partId": "F", "variantName": "Optimus Primal 3-60F (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Starscream",
    "name": "Starscream 3-80N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Starscream_Image", "products/hasbro/optimusprimal_starscream/beyblade_starscream.webp", "beyblade"),
    "contents": [
      { "partId": "Starscream", "variantName": "Starscream 3-80N (Dual Pack) (HB) (Default)" },
      { "partId": "3-80", "variantName": "Starscream 3-80N (Dual Pack) (HB)" },
      { "partId": "N", "variantName": "Starscream 3-80N (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Optimus_Prime_Megatron_Multipack",
    "name": "Optimus Prime and Megatron Multipack Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Optimus_Prime_Megatron_Multipack_Image", "products/hasbro/optimusprime_megatron/product_optimusprime_megatron.webp", "product box"),
    "contents": [
      { "partId": "HB_EntryLauncher", "variantName": "Transformers" },
      { "partId": "HB_EntryLauncher", "variantName": "Transformers" },
      { "partId": "Beyblade_DualPack_Optimus_Prime", "variantName": "Optimus Prime 4-60P" },
      { "partId": "Beyblade_DualPack_Megatron", "variantName": "Megatron 4-80B" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Optimus_Prime",
    "name": "Optimus Prime 4-60P",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Optimus_Prime_Image", "products/hasbro/optimusprime_megatron/beyblade_optimusprime.webp", "beyblade"),
    "contents": [
      { "partId": "OptimusPrime", "variantName": "Optimus Prime 4-60P (Dual Pack) (HB) (Default)" },
      { "partId": "4-60", "variantName": "Optimus Prime 4-60P (Dual Pack) (HB)" },
      { "partId": "P", "variantName": "Optimus Prime 4-60P (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Megatron",
    "name": "Megatron 4-80B",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Megatron_Image", "products/hasbro/optimusprime_megatron/beyblade_megatron.webp", "beyblade"),
    "contents": [
      { "partId": "Megatron", "variantName": "Megatron 4-80B (Dual Pack) (HB) (Default)" },
      { "partId": "4-80", "variantName": "Megatron 4-80B (Dual Pack) (HB)" },
      { "partId": "B", "variantName": "Megatron 4-80B (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Bumblebee_Shockwave_Multipack",
    "name": "Bumblebee and Shockwave Multipack Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Bumblebee_Shockwave_Multipack_Image", "products/hasbro/bumblebee_shockwave/product_bumblebee_shockwave.webp", "product box"),
    "contents": [
      { "partId": "HB_EntryLauncher", "variantName": "Transformers" },
      { "partId": "HB_EntryLauncher", "variantName": "Transformers" },
      { "partId": "Beyblade_DualPack_Bumblebee", "variantName": "Bumblebee 3-60GP" },
      { "partId": "Beyblade_DualPack_Shockwave", "variantName": "Shockwave 5-80O" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Bumblebee",
    "name": "Bumblebee 3-60GP",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Bumblebee_Image", "products/hasbro/bumblebee_shockwave/beyblade_bumblebee.webp", "beyblade"),
    "contents": [
      { "partId": "Bumblebee", "variantName": "Bumblebee 3-60GP (Dual Pack) (HB) (Default)" },
      { "partId": "3-60", "variantName": "Bumblebee 3-60GP (Dual Pack) (HB)" },
      { "partId": "GP", "variantName": "Bumblebee 3-60GP (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Shockwave",
    "name": "Shockwave 5-80O",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Shockwave_Image", "products/hasbro/bumblebee_shockwave/beyblade_shockwave.webp", "beyblade"),
    "contents": [
      { "partId": "Shockwave", "variantName": "Shockwave 5-80O (Dual Pack) (HB) (Default)" },
      { "partId": "5-80", "variantName": "Shockwave 5-80O (Dual Pack) (HB)" },
      { "partId": "O", "variantName": "Shockwave 5-80O (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Spinosaurus_Quetzalcoatlus_Multipack",
    "name": "Spinosaurus and Quetzalcoatlus Multipack Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Spinosaurus_Quetzalcoatlus_Multipack_Image", "products/hasbro/spinosaurus_quetzalcoatlus/product_spinosaurus_quetzalcoatlus.webp", "product box"),
    "contents": [
      { "partId": "HB_EntryLauncher", "variantName": "Jurassic World" },
      { "partId": "HB_EntryLauncher", "variantName": "Jurassic World" },
      { "partId": "Beyblade_DualPack_Spinosaurus", "variantName": "Roar Tyranno 3-85A" },
      { "partId": "Beyblade_DualPack_Quetzalcoatlus", "variantName": "Talon Ptera 4-55D" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Spinosaurus",
    "name": "Roar Tyranno 3-85A",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Spinosaurus_Image", "products/hasbro/spinosaurus_quetzalcoatlus/beyblade_spinosaurus.webp", "beyblade"),
    "contents": [
      { "partId": "RoarTyranno", "variantName": "Spinosaurus 3-85A (Dual Pack) (HB)" },
      { "partId": "3-85", "variantName": "Spinosaurus 3-85A (Dual Pack) (HB)" },
      { "partId": "A", "variantName": "Spinosaurus 3-85A (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Quetzalcoatlus",
    "name": "Talon Ptera 4-55D",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Quetzalcoatlus_Image", "products/hasbro/spinosaurus_quetzalcoatlus/beyblade_quetzalcoatlus.webp", "beyblade"),
    "contents": [
      { "partId": "TalonPtera", "variantName": "Quetzalcoatlus 4-55D (Dual Pack) (HB)" },
      { "partId": "4-55", "variantName": "Quetzalcoatlus 4-55D (Dual Pack) (HB)" },
      { "partId": "D", "variantName": "Quetzalcoatlus 4-55D (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_T_Rex_Mosasaurus_Multipack",
    "name": "T. Rex and Mosasaurus Multipack Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_T_Rex_Mosasaurus_Multipack_Image", "products/hasbro/trex_mosasaurus/product_trex_mosasaurus.webp", "product box"),
    "contents": [
      { "partId": "HB_EntryLauncher", "variantName": "Jurassic World" },
      { "partId": "HB_EntryLauncher", "variantName": "Jurassic World" },
      { "partId": "Beyblade_DualPack_T._Rex", "variantName": "Beat Tyranno 1-80GB" },
      { "partId": "Beyblade_DualPack_Mosasaurus", "variantName": "Ridge Triceratops 9-60U" }
    ]
  },
  {
    "id": "Beyblade_DualPack_T._Rex",
    "name": "Beat Tyranno 1-80GB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_T._Rex_Image", "products/hasbro/trex_mosasaurus/beyblade_trex.webp", "beyblade"),
    "contents": [
      { "partId": "BeatTyranno", "variantName": "T. Rex 1-80GB (Dual Pack) (HB)" },
      { "partId": "1-80", "variantName": "T. Rex 1-80GB (Dual Pack) (HB)" },
      { "partId": "GB", "variantName": "T. Rex 1-80GB (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_DualPack_Mosasaurus",
    "name": "Ridge Triceratops 9-60U",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_DualPack_Mosasaurus_Image", "products/hasbro/trex_mosasaurus/beyblade_mosasaurus.webp", "beyblade"),
    "contents": [
      { "partId": "RidgeTriceratops", "variantName": "Mosasaurus 9-60U (Dual Pack) (HB)" },
      { "partId": "9-60", "variantName": "Mosasaurus 9-60U (Dual Pack) (HB)" },
      { "partId": "U", "variantName": "Mosasaurus 9-60U (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Soar_Phoenix_Deluxe_Launcher",
    "name": "Soar Phoenix Deluxe String Launcher Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Soar_Phoenix_Deluxe_Launcher_Image", "products/hasbro/soar_phoenix_starter/product_soar_phoenix.webp", "product box"),
    "contents": [
      { "partId": "HB_StringLauncher", "variantName": "Soar Phoenix Deluxe String Launcher Set" },
      { "partId": "Beyblade_Soar_Phoenix_Starter", "variantName": "Soar Phoenix 9-60GF" }
    ]
  },
  {
    "id": "Beyblade_Soar_Phoenix_Starter",
    "name": "Soar Phoenix 9-60GF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Soar_Phoenix_Starter_Image", "products/hasbro/soar_phoenix_starter/beyblade_soar_phoenix.webp", "beyblade"),
    "contents": [
      { "partId": "SoarPhoenix", "variantName": "Soar Phoenix 9-60GF (Deluxe Launcher Set) (HB) (Default)" },
      { "partId": "9-60", "variantName": "Soar Phoenix 9-60GF (Deluxe Launcher Set) (HB)" },
      { "partId": "GF", "variantName": "Soar Phoenix 9-60GF (Deluxe Launcher Set) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Cobalt_Dragoon_Deluxe_Launcher",
    "name": "Cobalt Dragoon Deluxe Left-Spin String Launcher Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Cobalt_Dragoon_Deluxe_Launcher_Image", "products/hasbro/cobaltdragoon_starter/product_cobaltdragoon.webp", "product box"),
    "contents": [
      { "partId": "HB_StringLauncher_L", "variantName": "Cobalt Dragoon Deluxe Left-Spin String Launcher Set" },
      { "partId": "Beyblade_Cobalt_Dragoon_Starter", "variantName": "Cobalt Dragoon 2-60C" }
    ]
  },
  {
    "id": "Beyblade_Cobalt_Dragoon_Starter",
    "name": "Cobalt Dragoon 2-60C",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Cobalt_Dragoon_Starter_Image", "products/hasbro/cobaltdragoon_starter/beyblade_cobaltdragoon.webp", "beyblade"),
    "contents": [
      { "partId": "CobaltDragoon-Hasbro", "variantName": "Cobalt Dragoon 2-60C (Deluxe Launcher Set) (HB) (Default)" },
      { "partId": "2-60", "variantName": "Cobalt Dragoon 2-60C (Deluxe Launcher Set) (HB)" },
      { "partId": "C", "variantName": "Cobalt Dragoon 2-60C (Deluxe Launcher Set) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Victory_Grip_Launcher_Set",
    "name": "Victory Grip Launcher Set",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Victory_Grip_Launcher_Set_Image", "products/hasbro/samuraisaber_starter/product_samuraisaber.webp", "product box"),
    "contents": [
      { "partId": "HB_HoldLauncher", "variantName": "Victory Grip Launcher Set" },
      { "partId": "Beyblade_Saber_Samurai_Starter", "variantName": "Saber Samurai 2-70L" }
    ]
  },
  {
    "id": "Beyblade_Saber_Samurai_Starter",
    "name": "Saber Samurai 2-70L",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Saber_Samurai_Starter_Image", "products/hasbro/samuraisaber_starter/beyblade_samuraisaber.webp", "beyblade"),
    "contents": [
      { "partId": "SaberSamurai", "variantName": "Saber Samurai 2-70L (Victory Grip Launcher Set) (HB) (Default)" },
      { "partId": "2-70", "variantName": "Saber Samurai 2-70L (Victory Grip Launcher Set) (HB)" },
      { "partId": "L", "variantName": "Saber Samurai 2-70L (Victory Grip Launcher Set) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Winder_Launcher",
    "name": "Winder Launcher",
    "category": "Product",
    "series": [],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Winder_Launcher_Image", "products/hasbro/winder_launcher/product_winder.webp", "product box"),
    "contents": [
      { "partId": "HB_WinderLauncher", "variantName": "Winder Launcher (Black)" }
    ]
  },
  {
    "id": "Product_HB_Clash_Carry_Beystadium",
    "name": "Clash & Carry Beystadium",
    "category": "Product",
    "series": [],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Clash_Carry_Beystadium_Image", "products/hasbro/clash_carry/product_clash_carry.webp", "product box"),
    "contents": [
      { "partId": "HB_ClashCarryBeystadium", "variantName": "Clash & Carry Beystadium" }
    ]
  },
  {
    "id": "Product_HB_Drop_Attack_Battle_Set",
    "name": "Drop Attack Battle Set",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Drop_Attack_Battle_Set_Image", "products/hasbro/drop_attack/product_drop_attack.webp", "product box"),
    "contents": [
      { "partId": "HB_EntryLauncher", "variantName": "Stadium Set" },
      { "partId": "HB_EntryLauncher", "variantName": "Stadium Set" },
      { "partId": "HB_DropAttackBeystadium", "variantName": "Drop Attack Battle Set" },
      { "partId": "Beyblade_Impact_Drake_DropAttack", "variantName": "Impact Drake 9-60LR" },
      { "partId": "Beyblade_Hover_Wyvern_DropAttack", "variantName": "Hover Wyvern 3-85N" }
    ]
  },
  {
    "id": "Beyblade_Impact_Drake_DropAttack",
    "name": "Impact Drake 9-60LR",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Impact_Drake_DropAttack_Image", "products/hasbro/drop_attack/beyblade_impact_drake.webp", "beyblade"),
    "contents": [
      { "partId": "ImpactDrake-Hasbro", "variantName": "Impact Drake 9-60LR (Drop Attack Battle Set) (HB) (Default)" },
      { "partId": "9-60", "variantName": "Impact Drake 9-60LR (Drop Attack Battle Set) (HB)" },
      { "partId": "LR", "variantName": "Impact Drake 9-60LR (Drop Attack Battle Set) (HB)" }
    ]
  },
  {
    "id": "Beyblade_Hover_Wyvern_DropAttack",
    "name": "Hover Wyvern 3-85N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Hover_Wyvern_DropAttack_Image", "products/hasbro/drop_attack/beyblade_hover_wyvern.webp", "beyblade"),
    "contents": [
      { "partId": "HoverWyvern", "variantName": "Hover Wyvern 3-85N (Drop Attack Battle Set) (HB) (Default)" },
      { "partId": "3-85", "variantName": "Hover Wyvern 3-85N (Drop Attack Battle Set) (HB)" },
      { "partId": "N", "variantName": "Hover Wyvern 3-85N (Drop Attack Battle Set) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Xtreme_Battle_Set",
    "name": "Xtreme Battle Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Xtreme_Battle_Set_Image", "products/hasbro/xtreme_battle/product_xtreme_battle.webp", "product box"),
    "contents": [
      { "partId": "HB_EntryLauncher", "variantName": "Stadium Set" },
      { "partId": "HB_EntryLauncher", "variantName": "Stadium Set" },
      { "partId": "HB_XtremeBeystadium", "variantName": "Xtreme Battle Set" },
      { "partId": "Beyblade_Dagger_Dran_XtremeBattle", "variantName": "Dagger Dran 4-60R" },
      { "partId": "Beyblade_Tusk_Mammoth_XtremeBattle", "variantName": "Tusk Mammoth 3-60T" }
    ]
  },
  {
    "id": "Beyblade_Dagger_Dran_XtremeBattle",
    "name": "Dagger Dran 4-60R",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Dagger_Dran_XtremeBattle_Image", "products/hasbro/xtreme_battle/beyblade_dagger_dran.webp", "beyblade"),
    "contents": [
      { "partId": "DaggerDran", "variantName": "Dagger Dran 4-60R (Xtreme Battle Set) (HB) (Default)" },
      { "partId": "4-60", "variantName": "Dagger Dran 4-60R (Xtreme Battle Set) (HB)" },
      { "partId": "R", "variantName": "Dagger Dran 4-60R (Xtreme Battle Set) (HB)" }
    ]
  },
  {
    "id": "Beyblade_Tusk_Mammoth_XtremeBattle",
    "name": "Tusk Mammoth 3-60T",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_Tusk_Mammoth_XtremeBattle_Image", "products/hasbro/xtreme_battle/beyblade_tusk_mamoth.webp", "beyblade"),
    "contents": [
      { "partId": "TuskMammoth", "variantName": "Tusk Mammoth 3-60T (Xtreme Battle Set) (HB) (Default)" },
      { "partId": "3-60", "variantName": "Tusk Mammoth 3-60T (Xtreme Battle Set) (HB)" },
      { "partId": "T", "variantName": "Tusk Mammoth 3-60T (Xtreme Battle Set) (HB)" }
    ]
  },
  {
    "id": "Product_HB_Beystadium",
    "name": "Beystadium",
    "category": "Product",
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Beystadium_Image", "products/hasbro/beystadium/product_beystadium.webp", "product box"),
    "contents": [
      { "partId": "HB_Beystadium", "variantName": "Beystadium" }
    ]
  },
  {
    "id": "Product_HB_Tournament_Beystadium",
    "name": "Tournament Beystadium",
    "category": "Product",
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Tournament_Beystadium_Image", "products/hasbro/tournament_beystadium/product_tournament_beystadium.webp", "product box"),
    "contents": [
      { "partId": "HB_TournamentStadium", "variantName": "Tournament Stadium" }
    ]
  },
  {
    "id": "Product_HB_Wide_Beystadium",
    "name": "Wide Beystadium",
    "category": "Product",
    "company": "Hasbro",
    "image": getPartImage("Product_HB_Wide_Beystadium_Image", "products/hasbro/wide_beystadium/product_wide_beystadium.webp", "product box"),
    "contents": [
      { "partId": "HB_WideBeystadium", "variantName": "Wide Beystadium" }
    ]
  },
  {
    "id": "Product_HB_DoubleXtremeStadium",
    "name": "Double Xtreme Motorized Beystadium",
    "category": "Product",
    "company": "Hasbro",
    "image": getPartImage("Product_HB_DoubleXtremeStadium_Image", "products/hasbro/double_xtreme/product_double_xtreme.webp", "product box"),
    "contents": [
      { "partId": "HB_DoubleXtremeStadium", "variantName": "Double Xtreme Motorized Beystadium" }
    ]
  },
  {
    "id": "Product_Hasbro_BX-00_25thAnniversary",
    "name": "Beyblade 25th Anniversary Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_BX-00_25thAnniversary_Image", "products/hasbro/anniversary_set/product_bx-00_25th_anniversary.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BX-00_25_Anniversary_DragonStorm", "variantName": "DragoonStorm 4-60RA" },
      { "partId": "Beyblade_BX-00_25_Anniversary_StormPegasis", "variantName": "StormPegasis 3-70RA" },
      { "partId": "Beyblade_BX-00_25_Anniversary_VictoryValkyrie", "variantName": "VictoryValkyrie 2-60RA" },
      { "partId": "Beyblade_BX-00_25_Anniversary_DranSword", "variantName": "DranSword 3-60F" },
      { "partId": "TT_DragonWinderLauncher", "variantName": "25th Anniversary Set" },
      { "partId": "TT_StringLauncher", "variantName": "25th Anniversary Set (StormPegasis)" },
      { "partId": "TT_StringLauncher", "variantName": "25th Anniversary Set (VictoryValkyrie)" },
      { "partId": "TT_WinderLauncher", "variantName": "25th Anniversary Set" }
    ]
  },
  {
    "id": "Product_X-treme_Expansion_Pack",
    "name": "X-treme Expansion Pack",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Product_XEP_Image", "products/hasbro/xtreme_xpansion/product_xtreme_xpansion.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_MailKnight", "variantName": "Mail Knight 3-85BS" },
      { "partId": "CircleGhost", "variantName": "X-treme Expansion Pack (HB)" },
      { "partId": "HammerIncendio", "variantName": "X-treme Expansion Pack (HB)" },
      { "partId": "B", "variantName": "X-treme Expansion Pack (HB)" },
      { "partId": "MN", "variantName": "X-treme Expansion Pack (HB)" },
      { "partId": "P", "variantName": "X-treme Expansion Pack (HB)" },
      { "partId": "RA", "variantName": "X-treme Expansion Pack (HB)" },
      { "partId": "4-55", "variantName": "X-treme Expansion Pack (HB)" },
      { "partId": "7-70", "variantName": "X-treme Expansion Pack (HB)" },
      { "partId": "9-65", "variantName": "X-treme Expansion Pack (HB)" }

    ]
  },
  {
    "id": "Beyblade_MailKnight",
    "name": "Mail Knight 3-85BS",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_MailKnight_Image", "products/hasbro/xtreme_xpansion/beyblade_mail_knight.webp", "beyblade"),
    "contents": [
      { "partId": "MailKnight", "variantName": "X-treme Expansion Pack (HB) (Default)" },
      { "partId": "3-85", "variantName": "X-treme Expansion Pack (HB)" },
      { "partId": "BS", "variantName": "X-treme Expansion Pack (HB)" }
    ]
  },
  {
    "id": "Product_Yggdrasil_Team_Pack",
    "name": "Yggdrasil Team Pack",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Product_YTP_Image", "products/hasbro/yggdrasil_team_pack/product_yggdrasil_team.webp", "product box"),

    "contents": [
      { "partId": "Beyblade_RudderPhoenix_Stock", "variantName": "Rudder Phoenix 9-70G" },
      { "partId": "Beyblade_Cowl_Sphinx_Stock_Booster", "variantName": "Cowl Sphinx 9-80GN" },
      { "partId": "Beyblade_Sting_Unicorn_Stock_Booster", "variantName": "Sting Unicorn 5-60GP" }
    ]

  },
  {
    "id": "Beyblade_RudderPhoenix_Stock",
    "name": "Rudder Phoenix 9-70G",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Hasbro",

    "image": getPartImage("Beyblade_RudderPhoenix_Image", "products/hasbro/yggdrasil_team_pack/beyblade_rudder_phoenix.webp", "beyblade"),
    "contents": [
      { "partId": "RudderPhoenix", "variantName": "Yggdrasil Team Pack (HB) (Default)" },
      { "partId": "9-70", "variantName": "Yggdrasil Team Pack (HB)" },
      { "partId": "G", "variantName": "Yggdrasil Team Pack (HB)" }
    ]
  },
  {
    "id": "Product_DracielShield_Starter_Pack",
    "name": "Draciel Shield 7-60D Starter Pack",
    "category": "Product",
    "series": ["BX", "XOver"],
    "company": "Hasbro",
    "image": getPartImage("Product_DracielHasbro_Image", "products/hasbro/draciel_starter/product_draciel.webp", "product box"),

    "contents": [
      { "partId": "Beyblade_DracielShieldHasbro_Stock", "variantName": "Draciel Shield 7-60D" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]

  },
  {
    "id": "Beyblade_DracielShieldHasbro_Stock",
    "name": "Draciel Shield 7-60D",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX", "XOver"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_BX-00_DracielShield_Image", "products/hasbro/draciel_starter/beyblade_draciel.webp", "beyblade"),

    "contents": [
      { "partId": "DracielShield-Hasbro", "variantName": "Draciel Shield 7-60D (Starter) (Default)" },
      { "partId": "7-60", "variantName": "Draciel Shield 7-60D (Starter) (HB)" },
      { "partId": "D", "variantName": "Draciel Shield 7-60D (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_BeystadiumV2",
    "name": "Beystadium (V2)",
    "category": "Product",
    "company": "Hasbro",
    "image": getPartImage("Product_HB_BeystadiumV2_Image", "products/hasbro/beystadium_v2/product_beystadium_v2.webp", "product box"),
    "contents": [
      { "partId": "HB_Beystadium", "variantName": "Beystadium (V2)" }
    ]
  },
  {
    "id": "Product_ScaleBooster",
    "name": "Scale Shark 4-50UF Booster Pack",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Product_ScaleBooster_Image", "products/hasbro/scale_shark/product_scale_shark.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_ScaleBooster", "variantName": "Scale Shark 4-50UF" },
    ]
  },
  {
    "id": "Beyblade_ScaleBooster",
    "name": "Scale Shark 4-50UF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_ScaleBooster_Image", "products/hasbro/scale_shark/beyblade_scale_shark.webp", "beyblade"),
    "contents": [
      { "partId": "Scale Shark", "variantName": "Scale Shark 4-50UF (Booster) (HB) (Default)" },
      { "partId": "4-50", "variantName": "Scale Shark 4-50UF (Booster) (HB)" },
      { "partId": "UF", "variantName": "Scale Shark 4-50UF (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_RudderPhoenix_Starter_Pack",
    "name": "Rudder Phoenix 4-70LF Starter Pack",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Product_rudderstarter_Image", "products/hasbro/rudder_starter/product_rudder_phoenix.webp", "product box"),

    "contents": [
      { "partId": "Beyblade_RudderPhoenixStarter", "variantName": "Rudder Phoenix 4-70LF" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]

  },
  {
    "id": "Beyblade_RudderPhoenixStarter",
    "name": "Rudder Phoenix 4-70LF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_RudderPhoenixStarter_Image", "products/hasbro/rudder_starter/beyblade_rudder_phoenix.webp", "beyblade"),

    "contents": [
      { "partId": "RuddderPhoenix", "variantName": "Rudder Phoenix 4-70LF (Starter) (HB)" },
      { "partId": "4-70", "variantName": "Rudder Phoenix 4-70LF (Starter) (HB)" },
      { "partId": "LF", "variantName": "Rudder Phoenix 4-70LF (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_FeatherPhoenix_Starter_Pack",
    "name": "Feather Phoenix 2-60N Starter Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_Featherstarter_Image", "products/hasbro/feather_starter/product_feather_phoenix.webp", "product box"),

    "contents": [
      { "partId": "Beyblade_FeatherPhoenixStarter", "variantName": "Feather Phoenix 2-60N" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]

  },
  {
    "id": "Beyblade_FeatherPhoenixStarter",
    "name": "Feather Phoenix 2-60N",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_FeatherPhoenixStarter_Image", "products/hasbro/feather_starter/beyblade_feather_phoenix.webp", "beyblade"),

    "contents": [
      { "partId": "FeatherPhoenix", "variantName": "Feather Phoenix 2-60N (Starter) (HB)" },
      { "partId": "2-60", "variantName": "Feather Phoenix 2-60N (Starter) (HB)" },
      { "partId": "N", "variantName": "Feather Phoenix 2-60N (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_HB_HackViking_CircleGhost_Dual",
    "name": "Hack Viking and Circle Ghost Dual Pack",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_HackViking_CircleGhost_Dual_Image", "products/hasbro/hack_viking_circle_ghost/product_hack_viking_circle_ghost.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Hack_Viking_Dual_Pack", "variantName": "Hack Viking 4-55O" },
      { "partId": "Beyblade_Circle_Ghost_LR_Dual_Pack", "variantName": "Circle Ghost 4-60LR" }
    ]
  },
  {
    "id": "Beyblade_Hack_Viking_Dual_Pack",
    "name": "Hack Viking 4-55O",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_HackViking_CircleGhost_Dual_Pack_Image", "products/hasbro/hack_viking_circle_ghost/beyblade_hack_viking.webp", "beyblade"),
    "contents": [
      { "partId": "HackViking", "variantName": "Hack Viking 4-55O (Dual Pack) (HB) (Default)" },
      { "partId": "4-55", "variantName": "Hack Viking 4-55O (Dual Pack) (HB)" },
      { "partId": "O", "variantName": "Hack Viking 4-55O (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_Circle_Ghost_LR_Dual_Pack",
    "name": "Circle Ghost 4-60LR",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_HackViking_CircleGhost_Dual_Pack_Image22", "products/hasbro/hack_viking_circle_ghost/beyblade_circle_ghost.webp", "beyblade"),
    "contents": [
      { "partId": "CircleGhost", "variantName": "Circle Ghost 4-60LR (Dual Pack) (HB)" },
      { "partId": "4-60", "variantName": "Circle Ghost 4-60LR (Dual Pack) (HB)" },
      { "partId": "LR", "variantName": "Circle Ghost 4-60LR (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_HB_CaliburSamurai_ObsidianShell_Dual",
    "name": "Calibur Samurai and Obsidian Shell Dual Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_HB_CaliburSamurai_ObsidianShell_Dual_Image", "products/hasbro/calibur_shell/product_calibur_shell.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CaliburSamurai_Dual_Pack", "variantName": "Calibur Samurai 6-70M" },
      { "partId": "Beyblade_ObsidianShell_Yellow_Dual_Pack", "variantName": "Obsidian Shell 3-85S" }
    ]
  },
  {
    "id": "Beyblade_CaliburSamurai_Dual_Pack",
    "name": "Calibur Samurai 6-70M",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_CaliburSamurai_Dual_Pack_Image", "products/hasbro/calibur_shell/beyblade_calibur.webp", "beyblade"),
    "contents": [
      { "partId": "CaliburSamurai", "variantName": "Calibur Samurai 6-70M (Dual Pack) (HB) (Default)" },
      { "partId": "6-70", "variantName": "Calibur Samurai 6-70M (Dual Pack) (HB)" },
      { "partId": "M", "variantName": "Calibur Samurai 6-70M (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Beyblade_ObsidianShell_Yellow_Dual_Pack",
    "name": "Obsidian Shell 3-85S",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_ObsidianShell_Yellow_Dual_Pack_Image", "products/hasbro/calibur_shell/beyblade_shell.webp", "beyblade"),
    "contents": [
      { "partId": "ObsidianShell", "variantName": "Obsidian Shell 3-85S (Dual Pack) (HB)" },
      { "partId": "3-85", "variantName": "Obsidian Shell 3-85S (Dual Pack) (HB)" },
      { "partId": "S", "variantName": "Obsidian Shell 3-85S (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Product_Shelter_Drake_Booster_Pack_Yellow",
    "name": "Shelter Drake 5-70O Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_ShelterYellowBooster_Image", "products/hasbro/shelter_drake_yellow/product_shelter_drake.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_ShelterYellowBooster", "variantName": "Shelter Drake 5-70O" },
    ]

  },
  {
    "id": "Beyblade_ShelterYellowBooster",
    "name": "Shelter Drake 5-70O",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_ShelterYellowBooster_Image", "products/hasbro/shelter_drake_yellow/beyblade_shelter_drake.webp", "beyblade"),

    "contents": [
      { "partId": "ShelterDrake-Hasbro", "variantName": "Shelter Drake 5-70O (Booster) (HB)" },
      { "partId": "5-70", "variantName": "Shelter Drake 5-70O (Booster) (HB)" },
      { "partId": "O", "variantName": "Shelter Drake 5-70O (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_RidgeTriceratops_Booster",
    "name": "Ridge Triceratops 9-80GN Booster Pack",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_RidgeTriceratops_Booster_Image", "products/hasbro/ridge_triceratops/product_ridge_triceratops.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_RidgeTriceratops_Booster", "variantName": "Ridge Triceratops 9-80GN" },
    ]

  },
  {
    "id": "Beyblade_RidgeTriceratops_Booster",
    "name": "Ridge Triceratops 9-80GN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_RidgeTriceratops_Booster_Image", "products/hasbro/ridge_triceratops/beyblade_ridge_triceratops.webp", "beyblade"),

    "contents": [
      { "partId": "RidgeTriceratops", "variantName": "Ridge Triceratops 9-80GN (Booster) (HB) (Default)" },
      { "partId": "9-80", "variantName": "Ridge Triceratops 9-80GN (Booster) (HB)" },
      { "partId": "GN", "variantName": "Ridge Triceratops 9-80GN (Booster) (HB)" }
    ]
  },
  {
    "id": "Product_StunMedusa_Starter_Pack",
    "name": "Stun Medusa 9-60GB Starter Pack",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Product_MedusaStarter_Image", "products/hasbro/stun_medusa/product_stun_medusa.webp", "product box"),

    "contents": [
      { "partId": "Beyblade_MedusaStarter", "variantName": "Stun Medusa 9-60GB" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]

  },
  {
    "id": "Beyblade_MedusaStarter",
    "name": "Stun Medusa 9-60GB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_MedusaStarter_Image", "products/hasbro/stun_medusa/beyblade_stun_medusa.webp", "beyblade"),

    "contents": [
      { "partId": "StunMedusa", "variantName": "Stun Medusa 9-60GB (Starter) (HB) (Default)" },
      { "partId": "9-60", "variantName": "Stun Medusa 9-60GB (Starter) (HB)" },
      { "partId": "GB", "variantName": "Stun Medusa 9-60GB (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_FlameCerberus_Starter_Pack",
    "name": "Flame Cerberus W 5-80WB Starter Pack",
    "category": "Product",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Product_FlameCerberusStarter_Image", "products/hasbro/flame_cerberus/product_flame_cerberus.webp", "product box"),

    "contents": [
      { "partId": "Beyblade_FlameCerberusStarter", "variantName": "Flame Cerberus W 5-80WB" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]

  },
  {
    "id": "Beyblade_FlameCerberusStarter",
    "name": "Flame Cerberus W 5-80WB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_FlameCerberusStarter_Image", "products/hasbro/flame_cerberus/beyblade_flame_cerberus.webp", "beyblade"),

    "contents": [
      { "partId": "FullBlade_FlameCerberus_W", "variantName": "Flame Cerberus W" },
      { "partId": "5-80", "variantName": "Flame Cerberus W 5-80WB (Starter) (HB)" },
      { "partId": "WB", "variantName": "Flame Cerberus W 5-80WB (Starter) (HB)" }
    ]
  },
  {
    "id": "FullBlade_FlameCerberus_W",
    "name": "Flame Cerberus W",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("FullBlade_CX-08-1_Image", "products/hasbro/flame_cerberus/fullblade_flame_cerberus.webp", "blade"),
    "contents": [
      { "partId": "Cerberus-TT", "variantName": "Flame Cerberus W 5-80WB (Starter) (HB)" },
      { "partId": "Flame-TT", "variantName": "Flame Cerberus W 5-80WB (Starter) (HB)" },
      { "partId": "W-Wheel-TT", "variantName": "Flame Cerberus W 5-80WB (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_ReaperRhino_Starter_Pack",
    "name": "Reaper Rhino C 4-55D Starter Pack",
    "category": "Product",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Product_ReaperRhino_Starter_Image", "products/hasbro/reaper_rhino/product_reaper_rhino.webp", "product box"),

    "contents": [
      { "partId": "Beyblade_ReaperRhino_Starter", "variantName": "Reaper Rhino C 4-55D" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]

  },
  {
    "id": "Beyblade_ReaperRhino_Starter",
    "name": "Reaper Rhino C 4-55D",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_ReaperRhino_Starter_Image", "products/hasbro/reaper_rhino/beyblade_reaper_rhino.webp", "beyblade"),

    "contents": [
      { "partId": "FullBlade_ReaperRhino_C", "variantName": "Reaper Rhino C" },
      { "partId": "4-55", "variantName": "Reaper Rhino C 4-55D (Starter) (HB)" },
      { "partId": "D", "variantName": "Reaper Rhino C 4-55D (Starter) (HB)" }
    ]
  },
  {
    "id": "FullBlade_ReaperRhino_C",
    "name": "Reaper Rhino C",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("FullBlade_CX-05-2_Image", "products/hasbro/reaper_rhino/fullblade_reaper_rhino.webp", "blade"),
    "contents": [
      { "partId": "Rhino-TT", "variantName": "Reaper Rhino C 4-55D (Starter) (HB)" },
      { "partId": "Reaper-TT", "variantName": "Reaper Rhino C 4-55D (Starter) (HB)" },
      { "partId": "C-Charge-TT", "variantName": "Reaper Rhino C 4-55D (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_FangLeon_Starter_Pack",
    "name": "Fang Leon T 4-60U Starter Pack",
    "category": "Product",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Product_FangLeon_Starter_Image", "products/hasbro/fang_leon/product_fang_leon.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_FangLeon_Starter", "variantName": "Fang Leon T 4-60U" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]

  },
  {
    "id": "Beyblade_FangLeon_Starter",
    "name": "Fang Leon T 4-60U",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_FangLeon_Starter_Image", "products/hasbro/fang_leon/beyblade_fang_leon.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_Fang_Leon_T", "variantName": "Fang Leon T" },
      { "partId": "4-60", "variantName": "Fang Leon T 4-60U (Starter) (HB)" },
      { "partId": "U", "variantName": "Fang Leon T 4-60U (Starter) (HB)" }
    ]
  },
  {
    "id": "FullBlade_Fang_Leon_T",
    "name": "Fang Leon T",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("FullBlade_FangLeonStarter_Image", "products/hasbro/fang_leon/fullblade_fang_leon.webp", "blade"),
    "contents": [
      { "partId": "Leon-TT", "variantName": "Fang Leon T 4-60U (Starter) (HB)" },
      { "partId": "Fang-TT", "variantName": "Fang Leon T 4-60U (Starter) (HB)" },
      { "partId": "T-Turn", "variantName": "Fang Leon T 4-60U (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_XBP",
    "name": "X-treme Battlers Pack",
    "category": "Product",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Product_XBP_Image", "products/hasbro/xtreme_battlers_pack/product_XBP.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_XBP_1", "variantName": "Might Emperor HOp" },
      { "partId": "Beyblade_XBP_2", "variantName": "Rock Golem M-85HN" },
      { "partId": "Beyblade_XBP_3", "variantName": "Gill Shark 5-60FB" }
    ]
  },
  {
    "id": "Beyblade_XBP_1",
    "name": "Might Emperor HOp",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_XBP_1_Image", "products/hasbro/xtreme_battlers_pack/beyblade_might_emperor.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_XBP", "variantName": "Might Emperor H" },
      { "partId": "Op", "variantName": "X-Treme Battlers Pack (HB)" }
    ]
  },
  {
    "id": "FullBlade_XBP",
    "name": "Might Emperor H",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Hasbro",
    "image": getPartImage("FullBlade_XBP_Image", "products/hasbro/xtreme_battlers_pack/fullblade_might_emperor.webp", "blade"),
    "contents": [
      { "partId": "Emperor-LockChip-TT", "variantName": "X-Treme Battlers Pack (HB)" },
      { "partId": "Might-TT", "variantName": "X-Treme Battlers Pack (HB)" },
      { "partId": "H-Heavy-Assist", "variantName": "X-Treme Battlers Pack (HB)" }
    ]
  },
  {
    "id": "Beyblade_XBP_2",
    "name": "Rock Golem M-85HN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["UX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_XBP_2_Image", "products/hasbro/xtreme_battlers_pack/beyblade_rock_golem.webp", "beyblade"),
    "contents": [
      { "partId": "RockGolem", "variantName": "X-Treme Battlers Pack (HB)" },
      { "partId": "M-85", "variantName": "X-Treme Battlers Pack (HB)" },
      { "partId": "HN", "variantName": "X-Treme Battlers Pack (HB)" }
    ]
  },
  {
    "id": "Beyblade_XBP_3",
    "name": "Gill Shark 5-60FB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_XBP_3_Image", "products/hasbro/xtreme_battlers_pack/beyblade_gill_shark.webp", "beyblade"),
    "contents": [
      { "partId": "GillShark", "variantName": "X-Treme Battlers Pack (HB)" },
      { "partId": "5-60", "variantName": "X-Treme Battlers Pack (HB)" },
      { "partId": "FB", "variantName": "X-Treme Battlers Pack (HB)" }
    ]
  },
  {
    "id": "Product_BiteCrocMCGreen",
    "name": "Bite Croc Deluxe String Launcher & Custom Grip Set",
    "category": "Product",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Product_CrococrunchMCGreen_Image", "products/hasbro/bitecrocmcgreen/product_bitecrocmcgreen.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BiteCrocGreen", "variantName": "Bite Croc 2-60Q" },
      { "partId": "HB_StringLauncher", "variantName": "Bite Croc Deluxe String Launcher & Custom Grip Set" },
      { "partId": "HB_LauncherGrip", "variantName": "Bite Croc Deluxe String Launcher & Custom Grip Set" },

    ]
  },
  {
    "id": "Beyblade_BiteCrocGreen",
    "name": "Bite Croc 2-60Q",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "image": getPartImage("Beyblade_BiteCrocGreen_Image", "products/hasbro/bitecrocmcgreen/beyblade_bitecrocmcgreen.webp", "beyblade"),
    "contents": [
      { "partId": "BiteCroc", "variantName": "Bite Croc 2-60Q (Deluxe String Launcher & Custom Grip Set) (HB)" },
      { "partId": "2-60", "variantName": "Bite Croc 2-60Q (Deluxe String Launcher & Custom Grip Set) (HB)" },
      { "partId": "Q", "variantName": "Bite Croc 2-60Q (Deluxe String Launcher & Custom Grip Set) (HB)" }
    ]
  },


  // ComingSoon July  2026

  {
    "id": "Product_BlitzBahamut",
    "name": "Blitz Bahamut BK 1-50I Starter Pack",
    "category": "Product",
    "series": ["CX", "CXE"],
    "company": "Hasbro",
    "comingSoon": true,
    // Need the real product image render
    "image": getPartImage("Product_blitz_bahamut_Image", "products/hasbro/blitz_bahamut_starter/product_blitzbahamut.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_BlitzBahamut", "variantName": "Blitz Bahamut BK 1-50I" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_BlitzBahamut",
    "name": "Blitz Bahamut BK 1-50I",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX", "CXE"],
    "company": "Hasbro",
    "comingSoon": true,
    "image": getPartImage("Beyblade_CX-13_Image", "products/takara_tomy/cx-13/beyblade_cx-13.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_BlitzBahamut", "variantName": "Blitz Bahamut BK" },
      { "partId": "1-50", "variantName": "Blitz Bahamut BK 1-50I (Starter) (HB)" },
      { "partId": "I", "variantName": "Blitz Bahamut BK 1-50I (Starter) (HB)" }
    ]
  },
  {
    "id": "FullBlade_BlitzBahamut",
    "name": "Blitz Bahamut BK",
    "category": "Full Blade",
    "series": ["CX", "CXE"],
    "company": "Hasbro",
    "comingSoon": true,
    "image": getPartImage("FullBlade_CX-13_Image", "products/takara_tomy/cx-13/fullblade_cx-13.webp", "blade"),
    "contents": [
      { "partId": "Bahamut", "variantName": "Blitz Bahamut BK 1-50I (Starter) (HB)" },
      { "partId": "Blitz", "variantName": "Blitz Bahamut BK 1-50I (Starter) (HB)" },
      { "partId": "B-Break", "variantName": "Blitz Bahamut BK 1-50I (Starter) (HB)" },
      { "partId": "K-Knuckle-Assist", "variantName": "Blitz Bahamut BK 1-50I (Starter) (HB)" }
    ]
  },

  {
    "id": "Product_ArmorKnight",
    "name": "Armor Knight GV 8-70UN Starter Pack",
    "category": "Product",
    "series": ["CX", "CXE"],
    "company": "Hasbro",
    "comingSoon": true,
    "image": getPartImage("Product_ArmorKnight_Image", "products/hasbro/armor_knight_starter/product_armorknight.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_ArmorKnight", "variantName": "Armor Knight GV 8-70UN" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_ArmorKnight",
    "name": "Armor Knight GV 8-70UN",
    "category": "Beyblades",
    "type": "Defense",
    "series": ["CX", "CXE"],
    "company": "Hasbro",
    "comingSoon": true,
    "image": getPartImage("Beyblade_CX-14_Image", "products/takara_tomy/cx-14/beyblade_cx-14.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_ArmorKnight", "variantName": "Armor Knight GV" },
      { "partId": "8-70", "variantName": "Armor Knight GV 8-70UN (Starter) (HB)" },
      { "partId": "UN", "variantName": "Armor Knight GV 8-70UN (Starter) (HB)" }
    ]
  },
  {
    "id": "FullBlade_ArmorKnight",
    "name": "Armor Knight GV",
    "category": "Full Blade",
    "series": ["CX", "CXE"],
    "company": "Hasbro",
    "comingSoon": true,
    "image": getPartImage("FullBlade_CX-14_Image", "products/takara_tomy/cx-14/fullblade_cx-14.webp", "blade"),
    "contents": [
      { "partId": "Knight", "variantName": "Armor Knight GV 8-70UN (Starter) (HB)" },
      { "partId": "Fortress", "variantName": "Armor Knight GV 8-70UN (Starter) (HB)" },
      { "partId": "G-Guard", "variantName": "Armor Knight GV 8-70UN (Starter) (HB)" },
      { "partId": "V-Vertical-Assist", "variantName": "Armor Knight GV 8-70UN (Starter) (HB)" }
    ]
  },

  {
    "id": "Product_RageRagna",
    "name": "Rage Ragna FE 4-55Y Starter Pack",
    "category": "Product",
    "series": ["CX", "CXE"],
    "company": "Hasbro",
    "comingSoon": true,
    "image": getPartImage("Product_RageRagna_Image", "products/hasbro/rage_ragna_starter/product_rageragna.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_RageRagna", "variantName": "Rage Ragna FE 4-55Y" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_RageRagna",
    "name": "Rage Ragna FE 4-55Y",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["CX", "CXE"],
    "company": "Hasbro",
    "comingSoon": true,
    "image": getPartImage("Beyblade_CX-15_Image", "products/takara_tomy/cx-15/beyblade_cx-15.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_RageRagna", "variantName": "Rage Ragna FE" },
      { "partId": "4-55", "variantName": "Rage Ragna FE 4-55Y (Starter) (HB)" },
      { "partId": "Y", "variantName": "Rage Ragna FE 4-55Y (Starter) (HB)" }
    ]
  },
  {
    "id": "FullBlade_RageRagna",
    "name": "Rage Ragna FE",
    "category": "Full Blade",
    "series": ["CX", "CXE"],
    "company": "Hasbro",
    "comingSoon": true,
    "image": getPartImage("FullBlade_CX-15_Image", "products/takara_tomy/cx-15/fullblade_cx-15.webp", "blade"),
    "contents": [
      { "partId": "Ragna", "variantName": "Rage Ragna FE 4-55Y (Starter) (HB)" },
      { "partId": "Rage", "variantName": "Rage Ragna FE 4-55Y (Starter) (HB)" },
      { "partId": "F-Flow", "variantName": "Rage Ragna FE 4-55Y (Starter) (HB)" },
      { "partId": "E-Erase-Assist", "variantName": "Rage Ragna FE 4-55Y (Starter) (HB)" }
    ]
  },
  {
    "id": "Product_RocketGriffonStarter",
    "name": "Rocket Griffon H Starter Pack",
    "category": "Product",
    "series": ["UX", "UXE"],
    "company": "Hasbro",
    "comingSoon": true,
    "image": getPartImage("Product_RocketGriffonStarter_Image", "products/hasbro/rocket_griffon/product.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_RocketGriffonStarter", "variantName": "Rocket Griffon H" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_RocketGriffonStarter",
    "name": "Rocket Griffon H",
    "category": "Beyblades",
    "type": "Balance",
    "series": ["UX", "UXE"],
    "company": "Hasbro",
    "comingSoon": true,
    "image": getPartImage("Beyblade_RocketGriffonStarter_Image", "products/hasbro/rocket_griffon/beyblade.webp", "beyblade"),
    "contents": [
      { "partId": "RocketGriffon", "variantName": "Rocket Griffon H (Starter) (HB) (Default)" },
      { "partId": "H", "variantName": "Rocket Griffon H (Starter) (HB)" }
    ]
  },
    {
    "id": "Product_StrikeDranStarter",
    "name": "Strike Dran 4-50FF Starter Pack",
    "category": "Product",
    "series": ["BX", "BXE"],
    "company": "Hasbro",
    "comingSoon": true,
    "image": getPartImage("Product_StrikeDranStarter_Image", "products/hasbro/strike_dran/product.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_StrikeDranStarter", "variantName": "Strike Dran 4-50FF" },
      { "partId": "HB_EntryLauncher", "variantName": "Starter" }
    ]
  },
  {
    "id": "Beyblade_StrikeDranStarter",
    "name": "Strike Dran 4-50FF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["BX", "BXE"],
    "company": "Hasbro",
    "comingSoon": true,
    "image": getPartImage("Beyblade_StrikeDranStarter_Image", "products/hasbro/strike_dran/beyblade.webp", "beyblade"),
    "contents": [
      { "partId": "StrikeDran", "variantName": "Strike Dran 4-50FF (Starter) (HB) (Default)" },
      { "partId": "4-50", "variantName": "Strike Dran 4-50FF (Starter) (HB)" },
      { "partId": "FF", "variantName": "Strike Dran 4-50FF (Starter) (HB)" }
    ]
  },

  {
    "id": "Product_Clip&Rip",
    "name": "Blast Pegasus Clip & Rip Launcher Set",
    "category": "Product",
    "series": ["CX"],
    "company": "Hasbro",
    "comingSoon":true,
    "image": getPartImage("Product_Clip&RipImage", "products/hasbro/clip&rip/product.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_Clip&Rip", "variantName": "Blast Pegasus A Tr" },
      { "partId": "HB_Clip&RipLauncher", "variantName": "Clip & Rip Launcher Set" }
    ]
  },
  {
    "id": "Beyblade_Clip&Rip",
    "name": "Blast Pegasus A Tr",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["CX"],
    "company": "Hasbro",
    "comingSoon":true,
    "image": getPartImage("Beyblade_Clip&Rip_Image", "products/takara_tomy/cx-07/beyblade_cx-07.webp", "beyblade"),
    "contents": [
      { "partId": "FullBlade_Clip&Rip", "variantName": "Blast Pegasus A" },
      { "partId": "Tr", "variantName": "Blast Pegasus A Tr (Clip & Rip Launcher Set) (HB)" }
    ]
  },
  {
    "id": "FullBlade_Clip&Rip",
    "name": "Blast Pegasus A",
    "category": "Full Blade",
    "series": ["CX"],
    "company": "Hasbro",
    "comingSoon":true,
    "image": getPartImage("FullBlade_CX-07_Image", "products/takara_tomy/cx-07/fullblade_cx-07.webp", "blade"),
    "contents": [
      { "partId": "Pegasus-TT", "variantName": "Blast Pegasus A Tr (Clip & Rip Launcher Set) (HB)" },
      { "partId": "Blast-TT", "variantName": "Blast Pegasus A Tr (Clip & Rip Launcher Set) (HB)" },
      { "partId": "A-Assault-TT", "variantName": "Blast Pegasus A Tr (Clip & Rip Launcher Set) (HB)" }
    ]
  },

  {

    "id": "Product_MeteoroidDragoonStarter",
    "name": "Meteoroid Dragoon 3-70J Deluxe Left-Spin String Launcher Set",
    "category": "Product",
    "series": ["UX"],
    "company": "Hasbro",
    "comingSoon":true,
    "image": getPartImage("Product_MeteoroidDragoonStarter_Image", "products/hasbro/meteoroiddragoonstarter/product.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_MeteoroidDragoonStarter", "variantName": "Meteoroid Dragoon 3-70J" },
      { "partId": "HB_StringLauncher_L", "variantName": "Meteoroid Dragoon 3-70J (Deluxe Launcher Set)" }
    ]


  },
  {
    "id": "Beyblade_MeteoroidDragoonStarter",
    "name": "Meteoroid Dragoon 3-70J",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX"],
    "company": "Hasbro",
    "comingSoon":true,
    "image": getPartImage("Beyblade_MeteoroidDragoonStarter_Image", "products/hasbro/meteoroiddragoonstarter/beyblade.webp", "beyblade"),
    "contents": [
      { "partId": "MeteoroidDragoon", "variantName": "Meteoroid Dragoon 3-70J (Deluxe Launcher Set) (HB) (Default)" },
      { "partId": "3-70", "variantName": "Meteoroid Dragoon 3-70J (Deluxe Launcher Set) (HB)" },
      { "partId": "J", "variantName": "Meteoroid Dragoon 3-70J (Deluxe Launcher Set) (HB)" }
    ]
  },

  {
    "id": "Product_SneakAttackBattleSet",
    "name": "Sneak Attack Battle Set",
    "category": "Product",
    "series": ["UX", "UXE"],
    "company": "Hasbro",
    "comingSoon": true,
    "image": getPartImage("Product_SneakAttack_Image", "products/hasbro/sneakattack/product.webp", "product box"),
    "contents": [
      { "partId": "Beyblade_CutterShinobi", "variantName": "Cutter Shinobi LF" },
      { "partId": "Beyblade_RampartAegis", "variantName": "Rampart Aegis GB" },
      { "partId": "HB_EntryLauncher", "variantName": "Stadium Set" },
      { "partId": "HB_EntryLauncher", "variantName": "Stadium Set" },
      {"partId": "HB_SneakAttackBeystadium", "variantName": "Sneak Attack Battle Set"}
    ]
  },
  {
    "id": "Beyblade_CutterShinobi",
    "name": "Cutter Shinobi LF",
    "category": "Beyblades",
    "type": "Attack",
    "series": ["UX", "UXE"],
    "company": "Hasbro",
    "comingSoon": true,
    "image": getPartImage("Beyblade_CutterShinobi_Image", "products/hasbro/sneakattack/beyblade_cuttershinobi.webp", "beyblade"),
    "contents": [
      { "partId": "CutterShinobi", "variantName": "Cutter Shinobi LF (Sneak Attack Battle Set) (HB) (Default)" },
      { "partId": "LF", "variantName": "Cutter Shinobi LF (Sneak Attack Battle Set) (HB)" }
    ]
  },
  {
    "id": "Beyblade_RampartAegis",
    "name": "Ranpart Aegis GB",
    "category": "Beyblades",
    "type": "Stamina",
    "series": ["UX", "UXE"],
    "company": "Hasbro",
    "comingSoon": true,
    "image": getPartImage("Beyblade_RampartAegis_Image", "products/hasbro/sneakattack/beyblade_rampartaegis.webp", "beyblade"),
    "contents": [
      { "partId": "RampartAegis", "variantName": "Rampart Aegis GB (Sneak Attack Battle Set) (HB) (Default)"},
      { "partId": "GB", "variantName": "Rampart Aegis GB (Sneak Attack Battle Set) (HB)" }
    ]
  },









  // Blades
  {
    "id": "PhoenixWing",
    "name": "PhoenixWing",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 38.36,
    "image": getPartImage("PhoenixWing-BX-23", "blades/phoenixwing/bx-23.webp", "blade"),
    "identicalId": ["SoarPhoenix"],
    "variants": [
      { "name": "BX-23 (TT) (Default)", "image": getPartImage("PhoenixWing-BX-23", "blades/phoenixwing/bx-23.webp", "blade"), "displayedName":"BX-23 (TT)" },
      { "name": "BX-35-5 (TT)", "image": getPartImage("PhoenixWing-BX-35-5", "blades/phoenixwing/bx-35-5.webp", "blade") },
      { "name": "Corocoro (TT)", "image": getPartImage("PhoenixWing-Corocoro", "blades/phoenixwing/corocoro.webp", "blade") },
      { "name": "B4 Store (TT)", "image": getPartImage("PhoenixWing-B4 Store", "blades/phoenixwing/b4.webp", "blade") }
    ]
  },
  {
    "id": "SoarPhoenix",
    "name": "Soar Phoenix",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 38.36,
    "image": getPartImage("SoarPhoenix-Soar Phoenix 9-60GF (Deluxe Launcher Set)", "blades/soarphoenix/default.webp", "blade"),
    "identicalId": ["PhoenixWing"],
    "variants": [
      { "name": "Soar Phoenix 9-60GF (Deluxe Launcher Set) (HB) (Default)", "image": getPartImage("SoarPhoenix-Soar Phoenix 9-60GF (Deluxe Launcher Set)", "blades/soarphoenix/default.webp", "blade"),"displayedName":"Soar Phoenix 9-60GF (Deluxe Launcher Set) (HB)" },
      { "name": "Soar Phoenix 5-80H (Booster) (HB)", "image": getPartImage("SoarPhoenix-Soar Phoenix 5-80H (Booster)", "blades/soarphoenix/5-80h.webp", "blade") }
    ]
  },
  {
    "id": "TyrannoBeat",
    "name": "TyrannoBeat",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 37,
    "image": getPartImage("TyrannoBeat-BX-31-1", "blades/tyrannobeat/bx-31-1.webp", "blade"),
    "identicalId": ["BeatTyranno", "T.Rex"],
    "variants": [
      { "name": "BX-31-1 (TT) (Default)", "image": getPartImage("TyrannoBeat-BX-31-1", "blades/tyrannobeat/bx-31-1.webp", "blade"),"displayedName":"BX-31-1 (TT)" },
      { "name": "BX-31-2 (TT)", "image": getPartImage("TyrannoBeat-BX-31-2", "blades/tyrannobeat/bx-31-2.webp", "blade") },
      { "name": "UX-10 (TT)", "image": getPartImage("TyrannoBeat-UX-10", "blades/tyrannobeat/ux-10.webp", "blade") },
      { "name": "BXG-41 (Jurassic World Ver.) (TT)", "image": getPartImage("T.Rex-BXG-41", "blades/tyrannobeat/jurassic.webp", "blade"),"displayedName": "BXG-40 (Jurassic World Ver.) (TT)" },
      { "name": "CX-17-5 (TT)", "image": getPartImage("TyrannoBeat-CX-17-5", "blades/tyrannobeat/cx-17-5.webp", "blade"),"comingSoon":true}
    ]
  },
  {
    "id": "BeatTyranno",
    "name": "Beat Tyranno",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 37,
    "image": getPartImage("BeatTyranno-Beat Tyranno 4-70Q (Dual Pack)", "blades/beattyranno/default.webp", "blade"),
    "identicalId": ["TyrannoBeat", "T.Rex"],
    "variants": [
      { "name": "Beat Tyranno 4-70Q (Dual Pack) (HB) (Default)", "image": getPartImage("BeatTyranno-Beat Tyranno 4-70Q (Dual Pack)", "blades/beattyranno/default.webp", "blade"),"displayedName":"Beat Tyranno 4-70Q (Dual Pack) (HB)" },
      { "name": "T. Rex 1-80GB (Dual Pack) (HB)", "image": getPartImage("T.Rex-T.Rex 1-80GB (Dual Pack)", "blades/beattyranno/jurassic.webp", "blade") }
    ]
  },
  {
    "id": "CobaltDrake",
    "name": "CobaltDrake",
    "category": "Blade",
    "type": "Attack",
    "series": ["Rare Bey Get", "BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 37.56,
    "image": getPartImage("CobaltDrake-Rare Bey Get Metal Coat", "blades/cobaltdrake/default.webp", "blade"),
    "variants": [
      { "name": "Rare Bey Get Metal Coat (TT) (Default)", "image": getPartImage("CobaltDrake-Rare Bey Get Metal Coat", "blades/cobaltdrake/default.webp", "blade"),"displayedName":"Rare Bey Get Metal Coat (TT)" },
      { "name": "Rare Bey Get Clear (TT)", "image": getPartImage("CobaltDrake-Rare Bey Get Clear", "blades/cobaltdrake/clear.webp", "blade") },
      { "name": "BX-46 (TT)", "image": getPartImage("CobaltDrake-BX-46", "blades/cobaltdrake/bx-46.webp", "blade") }
    ]
  },
  {
    "id": "CrocoCrunch",
    "name": "CrocoCrunch",
    "category": "Blade",
    "type": "Attack",
    "series": ["Corocoro", "BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 33.92,
    "image": getPartImage("CrocoCrunch-Corocoro", "blades/crococrunch/corocoro.webp", "blade"),
    "identicalId": ["BiteCroc"],
    "echoOf": ["SharkEdge", "KeelShark"],
    "variants": [
      { "name": "Corocoro (TT) (Default)", "image": getPartImage("CrocoCrunch-Corocoro", "blades/crococrunch/corocoro.webp", "blade"),"displayedName":"Corocoro (TT)" }
    ]
  },
  {
    "id": "BiteCroc",
    "name": "Bite Croc",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 33.92,
    "image": getPartImage("BiteCroc-Bite Croc 3-60LF (Dual Pack)", "blades/bitecroc/default.webp", "blade"),
    "identicalId": ["CrocoCrunch"],
    "echoOf": ["SharkEdge", "KeelShark"],
    "variants": [
      { "name": "Bite Croc 3-60LF (Dual Pack) (HB) (Default)", "image": getPartImage("BiteCroc-Bite Croc 3-60LF (Dual Pack)", "blades/bitecroc/default.webp", "blade"),"displayedName":"Bite Croc 3-60LF (Dual Pack) (HB)" },
      { "name": "Bite Croc 2-60Q (Deluxe String Launcher & Custom Grip Set) (HB)", "image": getPartImage("BiteCroc-Bite Croc 2-60Q (Deluxe String Launcher & Custom Grip Set)", "blades/bitecroc/2-60q.webp", "blade") }
    ]
  },
  {
    "id": "DranDagger",
    "name": "DranDagger",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 35.28,
    "image": getPartImage("DranDagger-BX-20", "blades/drandagger/bx-20.webp", "blade"),
    "identicalId": ["DaggerDran"],
    "variants": [
      { "name": "BX-20 (TT) (Default)", "image": getPartImage("DranDagger-BX-20", "blades/drandagger/bx-20.webp", "blade"),"displayedName":"BX-20 (TT)" },
      { "name": "BX-31-4 (TT)", "image": getPartImage("DranDagger-BX-31-4", "blades/drandagger/bx-31-4.webp", "blade") },
      { "name": "BX-00 Giants Crossover (TT)", "image": getPartImage("DranDagger-BX-00 Giants Crossover", "blades/drandagger/giants.webp", "blade") },
      { "name": "UX-00 Dran Deck Set (TT)", "image": getPartImage("DranDagger-UX-00 Dran Deck Set", "blades/drandagger/drandeckset.webp", "blade") },
      { "name": "UX-18-5 (TT)", "image": getPartImage("DranDagger-UX-18-5", "blades/drandagger/ux-18-5.webp", "blade") },
      { "name": "BBLD (Metal Coat: Black) (TT)", "image": getPartImage("DranDagger-BBLD-Black", "blades/drandagger/bbld_black.webp", "blade") },
      { "name": "BBLD (Metal Coat: Blue) (TT)", "image": getPartImage("DranDagger-BBLD-Blue", "blades/drandagger/bbld_blue.webp", "blade") }
    ]
  },
  {
    "id": "DaggerDran",
    "name": "Dagger Dran",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 35.28,
    "image": getPartImage("DaggerDran-Xtreme Battle Set", "blades/daggerdran/default.webp", "blade"),
    "identicalId": ["DranDagger"],
    "variants": [
      { "name": "Dagger Dran 4-60R (Xtreme Battle Set) (HB) (Default)", "image": getPartImage("DaggerDran-Xtreme Battle Set", "blades/daggerdran/default.webp", "blade"),"displayedName":"Dagger Dran 4-60R (Xtreme Battle Set) (HB)" },
      { "name": "Dagger Dran 4-70Q (Booster) (HB)", "image": getPartImage("DaggerDran-Dagger Dran 4-70Q", "blades/daggerdran/4-70q.webp", "blade") }
    ]
  },
  {
    "id": "DranSword",
    "name": "DranSword",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 34.84,
    "image": getPartImage("DranSword-BX-01", "blades/dransword/bx-01.webp", "blade"),
    "identicalId": ["SwordDran"],
    "variants": [
      { "name": "BX-01 (TT) (Default)", "image": getPartImage("DranSword-BX-01", "blades/dransword/bx-01.webp", "blade"),"displayedName":"BX-01 (TT)" },
      { "name": "BX-07 (TT)", "image": getPartImage("DranSword-BX-07", "blades/dransword/bx-07.webp", "blade") },
      { "name": "BX-17 (TT)", "image": getPartImage("DranSword-BX-17", "blades/dransword/bx-17.webp", "blade") },
      { "name": "BX-14-3 (TT)", "image": getPartImage("DranSword-BX-14-3", "blades/dransword/bx-14-3.webp", "blade") },
      { "name": "UX-00 Dran Deck Set (TT)", "image": getPartImage("DranSword-UX-00 Dran Deck Set", "blades/dransword/drandeckset.webp", "blade") },
      { "name": "BX-00 25th Anniversary Set (TT)", "image": getPartImage("DranSword-BX-00 25th Anniversary Set", "blades/dransword/25anniversary.webp", "blade") },
      { "name": "BXA-01 Shushiro Collab (TT)", "image": getPartImage("DranSword-BXA-01 Shushiro Collab", "blades/dransword/shushiro.webp", "blade") },
      { "name": "Corocoro Metal Coat (TT)", "image": getPartImage("DranSword-Corocoro Metal Coat", "blades/dransword/corocoro.webp", "blade") },
      { "name": "G1 1st Place (TT)", "image": getPartImage("DranSword-G1 1st Place", "blades/dransword/gold.webp", "blade") },
      { "name": "G1 2nd Place (TT)", "image": getPartImage("DranSword-G1 2nd Place", "blades/dransword/silver.webp", "blade") },
      { "name": "G1 3rd Place (TT)", "image": getPartImage("DranSword-G1 3rd Place", "blades/dransword/bronze.webp", "blade") },
      { "name": "Victory XTRA Guide 2026 (TT)", "image": getPartImage("DranSword-XTRA guide", "blades/dransword/xtraguide2026.webp", "blade") },
      { "name": "BX-00 Metal Coat: Black J.League Ver. (TT)", "image": getPartImage("BX-00 Metal Coat: Black J.League Ver. (TT)", "blades/dransword/jleague.webp", "blade") }
    ]
  },
  {
    "id": "SwordDran",
    "name": "Sword Dran",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 34.84,
    "image": getPartImage("SwordDran-Sword Dran 3-60F (Starter)", "blades/sworddran/default.webp", "blade"),
    "identicalId": ["DranSword"],
    "variants": [
      { "name": "Sword Dran 3-60F (Starter) (HB) (Default)", "image": getPartImage("SwordDran-Sword Dran 3-60F (Starter)", "blades/sworddran/default.webp", "blade"),"displayedName":"Sword Dran 3-60F (Starter) (HB)" },
      { "name": "Sword Dran 3-60F (Dual Pack) (HB)", "image": getPartImage("SwordDran-Sword Dran 3-60F (Dual Pack)", "blades/sworddran/dualpack.webp", "blade") },
      { "name": "Sword Dran 3-80B (Dual Pack) (HB)", "image": getPartImage("SwordDran-Sword Dran 3-80B (Dual Pack)", "blades/sworddran/3-80b.webp", "blade") }
    ]
  },
  {
    "id": "TyrannoRoar",
    "name": "TyrannoRoar",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 36.09,
    "image": getPartImage("TyrannoRoar-UX-15", "blades/tyrannoroar/ux-15.webp", "blade"),
    "identicalId": ["RoarTyranno", "Spinosaurus"],
    "echoOf":["PhoenixWing", "SoarPhoenix"],
    "variants": [
      { "name": "UX-15 (TT) (Default)", "image": getPartImage("TyrannoRoar-UX-15", "blades/tyrannoroar/ux-15.webp", "blade"),"displayedName":"UX-15 (TT)" },
      { "name": "BXG-41 (Jurassic World Ver.) (TT)", "image": getPartImage("Spinosaurus-BXG-41", "blades/tyrannoroar/jurassic.webp", "blade") }
    ]
  },
  {
    "id": "RoarTyranno",
    "name": "Roar Tyranno",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 36.09,
    "image": getPartImage("RoarTyranno-Roar Tyranno 9-60GF (Booster)", "blades/roartyranno/default.webp", "blade"),
    "identicalId": ["TyrannoRoar", "Spinosaurus"],
    "echoOf":["PhoenixWing", "SoarPhoenix"],
    "variants": [
      { "name": "Roar Tyranno 9-60GF (Booster) (HB) (Default)", "image": getPartImage("RoarTyranno-Roar Tyranno 9-60GF (Booster)", "blades/roartyranno/default.webp", "blade"),"displayedName":"Roar Tyranno 9-60GF (Booster) (HB)" },
      { "name": "Spinosaurus 3-85A (Dual Pack) (HB)", "image": getPartImage("Spinosaurus-Spinosaurus 3-85A (Dual Pack)", "blades/roartyranno/jurassic.webp", "blade") }
    ]
  },
  {
    "id": "SharkEdge",
    "name": "SharkEdge",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 34.55,
    "image": getPartImage("SharkEdge-BX-14-1", "blades/sharkedge/bx-14-1.webp", "blade"),
    "identicalId": ["KeelShark"],
    "variants": [
      { "name": "BX-14-1 (TT) (Default)", "image": getPartImage("SharkEdge-BX-14-1", "blades/sharkedge/bx-14-1.webp", "blade"),"displayedName":"BX-14-1 (TT)" },
      { "name": "BX-14-2 (TT)", "image": getPartImage("SharkEdge-BX-14-2", "blades/sharkedge/bx-14-2.webp", "blade") },
      { "name": "BX-20 (TT)", "image": getPartImage("SharkEdge-BX-20", "blades/sharkedge/bx-20.webp", "blade") },
      { "name": "BX-31-5 (TT)", "image": getPartImage("SharkEdge-BX-31-5", "blades/sharkedge/bx-31-5.webp", "blade") },
      { "name": "B4 Store (TT)", "image": getPartImage("SharkEdge-B4 Store", "blades/sharkedge/b4.webp", "blade") },
      { "name": "Tsuri Spirits Promo (TT)", "image": getPartImage("SharkEdge-TsuriSpirits", "blades/sharkedge/magma.webp", "blade") },
      { "name": "BX-48-2 (TT)", "image": getPartImage("SharkEdge-BX-48-2", "blades/sharkedge/bx-48-2.webp", "blade") },
    ]
  },
  {
    "id": "KeelShark",
    "name": "Keel Shark",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 34.55,
    "image": getPartImage("KeelShark-Keel Shark 3-60LF (Booster)", "blades/keelshark/default.webp", "blade"),
    "identicalId": ["SharkEdge"],
    "variants": [
      { "name": "Keel Shark 3-60LF (Booster) (HB) (Default)", "image": getPartImage("KeelShark-Keel Shark 3-60LF (Booster)", "blades/keelshark/default.webp", "blade"),"displayedName":"Keel Shark 3-60LF (Booster) (HB)" },
      { "name": "Keel Shark 3-80F (Dual Pack) (HB)", "image": getPartImage("KeelShark-Keel Shark 3-80F (Dual Pack)", "blades/keelshark/3-80f.webp", "blade") },
      { "name": "Keel Shark 1-60Q (Booster) (HB)", "image": getPartImage("KeelShark-Keel Shark 1-60Q (Booster)", "blades/keelshark/1-60q.webp", "blade") }
    ]
  },
  {
    "id": "PhoenixFeather",
    "name": "PhoenixFeather",
    "category": "Blade",
    "type": "Attack",
    "series": ["Corocoro", "BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 33.47,
    "identicalId": ["FeatherPhoenix"],
    "echoOf": ["DranSword", "SwordDran"],
    "image": getPartImage("PhoenixFeather-Corocoro", "blades/phoenixfeather/default.webp", "blade"),
    "variants": [
      { "name": "Corocoro (TT) (Default)", "image": getPartImage("PhoenixFeather-Corocoro", "blades/phoenixfeather/default.webp", "blade"),"displayedName":"Corocoro (TT)" },
      { "name": "UX-12-5 (TT)", "image": getPartImage("PhoenixFeather-UX-12-5", "blades/phoenixfeather/ux-12-5.webp", "blade") },
      { "name": "Winning XTRA Guide (TT)", "image": getPartImage("PhoenixFeather-Winning XTRA Guide", "blades/phoenixfeather/xtraguide.webp", "blade") }
    ]
  },
  {
    "id": "FeatherPhoenix",
    "name": "Feather Phoenix",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 33.47,
    "identicalId": ["PhoenixFeather"],
    "echoOf": ["DranSword", "SwordDran"],
    "image": getPartImage("PhoenixFeather-UX-12-5", "blades/featherphoenix/default.webp", "blade"),
    "variants": [
      { "name": "Feather Phoenix 2-60N (Starter) (HB)", "image": getPartImage("PhoenixFeather-UX-12-5", "blades/featherphoenix/default.webp", "blade") },

    ]
  },
  {
    "id": "GoatTackle",
    "name": "GoatTackle",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 31.64,
    "image": getPartImage("GoatTackle-BX-46", "blades/goattackle/bx-46.webp", "blade"),
    "identicalId": ["TackleGoat"],
    "echoOf": ["BlackShell", "ObsidianShell"],
    "variants": [
      { "name": "BX-46 (TT) (Default)", "image": getPartImage("GoatTackle-BX-46", "blades/goattackle/bx-46.webp", "blade"),"displayedName":"BX-46 (TT)" }
    ]
  },
  {
    "id": "TackleGoat",
    "name": "Tackle Goat",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 31.64,
    "image": getPartImage("TackleGoat-Tackle Goat 2-70N (Dual Pack)", "blades/tacklegoat/default.webp", "blade"),
    "identicalId": ["GoatTackle"],
    "echoOf": ["BlackShell", "ObsidianShell"],
    "variants": [
      { "name": "Tackle Goat 2-70N (Dual Pack) (HB) (Default)", "image": getPartImage("TackleGoat-Tackle Goat 2-70N (Dual Pack)", "blades/tacklegoat/default.webp", "blade"),"displayedName":"Tackle Goat 2-70N (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "KnightShield",
    "name": "KnightShield",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 33.21,
    "image": getPartImage("KnightShield-BX-04", "blades/knightshield/bx-04.webp", "blade"),
    "identicalId": ["HelmKnight"],
    "variants": [
      { "name": "BX-04 (TT) (Default)", "image": getPartImage("KnightShield-BX-04", "blades/knightshield/bx-04.webp", "blade"),"displayedName":"BX-04 (TT)" },
      { "name": "BX-06 (TT)", "image": getPartImage("KnightShield-BX-06", "blades/knightshield/bx-06.webp", "blade") },
      { "name": "BX-08 (TT)", "image": getPartImage("KnightShield-BX-08", "blades/knightshield/bx-08.webp", "blade") },
      { "name": "BX-14-5 (TT)", "image": getPartImage("KnightShield-BX-14-5", "blades/knightshield/bx-14-5.webp", "blade") },
      { "name": "BX-20 (TT)", "image": getPartImage("KnightShield-BX-20", "blades/knightshield/bx-20.webp", "blade") },
      { "name": "G3 Prize (TT)", "image": getPartImage("KnightShield-G3 Prize", "blades/knightshield/g3.webp", "blade"),"displayedName":"G3 1st Prize (TT)" }
    ]
  },
  {
    "id": "HelmKnight",
    "name": "Helm Knight",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 33.21,
    "image": getPartImage("HelmKnight-Helm Knight 3-80N (Starter)", "blades/helmknight/default.webp", "blade"),
    "identicalId": ["KnightShield"],
    "variants": [
      { "name": "Helm Knight 3-80N (Starter) (HB) (Default)", "image": getPartImage("HelmKnight-Helm Knight 3-80N (Starter)", "blades/helmknight/default.webp", "blade"),"displayedName":"Helm Knight 3-80N (Starter) (HB)" },
      { "name": "Helm Knight 5-80T (Dual Pack) (HB)", "image": getPartImage("HelmKnight-Helm Knight 5-80T (Dual Pack)", "blades/helmknight/5-80t.webp", "blade") }
    ]
  },
  {
    "id": "TriceraPress",
    "name": "TriceraPress",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 36.56,
    "image": getPartImage("TriceraPress-BX-44", "blades/tricerapress/bx-44.webp", "blade"),
    "variants": [
      { "name": "BX-44 (TT) (Default)", "image": getPartImage("TriceraPress-BX-44", "blades/tricerapress/bx-44.webp", "blade"),"displayedName":"BX-44 (TT)" }
    ]
  },
  {
    "id": "BearScratch",
    "name": "BearScratch",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 29.87,
    "image": getPartImage("BearScratch-BX-37", "blades/bearscratch/bx-37.webp", "blade"),
    "identicalId": ["SavageBear"],
    "variants": [
      { "name": "BX-37 (TT) (Default)", "image": getPartImage("BearScratch-BX-37", "blades/bearscratch/bx-37.webp", "blade"),"displayedName":"BX-37 (TT)" }
    ]
  },
  {
    "id": "SavageBear",
    "name": "Savage Bear",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 29.87,
    "image": getPartImage("SavageBear-Savage Bear 3-60S (Booster)", "blades/savagebear/default.webp", "blade"),
    "identicalId": ["BearScratch"],
    "echoOf": ["RhinoHorn", "HornRhino"],
    "variants": [
      { "name": "Savage Bear 3-60S (Booster) (HB) (Default)", "image": getPartImage("SavageBear-Savage Bear 3-60S (Booster)", "blades/savagebear/default.webp", "blade"),"displayedName":"Savage Bear 3-60S (Booster) (HB)" }
    ]
  },
  {
    "id": "BlackShell",
    "name": "BlackShell",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 32.46,
    "image": getPartImage("BlackShell-BX-35-1", "blades/blackshell/bx-35-1.webp", "blade"),
    "identicalId": ["ObsidianShell"],
    "variants": [
      { "name": "BX-35-1 (TT) (Default)", "image": getPartImage("BlackShell-BX-35-1", "blades/blackshell/bx-35-1.webp", "blade"),"displayedName":"BX-35-1 (TT)" },
      { "name": "BX-35-2 (TT)", "image": getPartImage("BlackShell-BX-35-2", "blades/blackshell/bx-35-2.webp", "blade") },
      { "name": "CX-08-5 (TT)", "image": getPartImage("BlackShell-CX-08-5", "blades/blackshell/cx-08-5.webp", "blade") }
    ]
  },
  {
    "id": "ObsidianShell",
    "name": "Obsidian Shell",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 32.46,
    "image": getPartImage("ObsidianShell-Obsidian Shell 4-60D (Booster)", "blades/obsidianshell/default.webp", "blade"),
    "identicalId": ["BlackShell"],
    "variants": [
      { "name": "Obsidian Shell 4-60D (Booster) (HB) (Default)", "image": getPartImage("ObsidianShell-Obsidian Shell 4-60D (Booster)", "blades/obsidianshell/default.webp", "blade"),"displayedName":"Obsidian Shell 4-60D (Booster) (HB)" },
      { "name": "Obsidian Shell 3-85S (Dual Pack) (HB)", "image": getPartImage("BlackShell-BX-35-2", "blades/obsidianshell/3-85s.webp", "blade") }
    ]
  },
  {
    "id": "KnightLance",
    "name": "KnightLance",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 32.67,
    "image": getPartImage("KnightLance-BX-13", "blades/knightlance/bx-13.webp", "blade"),
    "identicalId": ["LanceKnight"],
    "variants": [
      { "name": "BX-13 (TT) (Default)", "image": getPartImage("KnightLance-BX-13", "blades/knightlance/bx-13.webp", "blade"),"displayedName":"BX-13 (TT)" },
      { "name": "BX-21 (TT)", "image": getPartImage("KnightLance-BX-21", "blades/knightlance/bx-21.webp", "blade") },
      { "name": "BX-24-3 (TT)", "image": getPartImage("KnightLance-BX-24-3", "blades/knightlance/bx-24-3.webp", "blade") },
      { "name": "BBLD (Metal Coat: Green) (TT)", "image": getPartImage("KnightLance-BBLD-Greem", "blades/knightlance/bbld_green.webp", "blade") }
    ]
  },
  {
    "id": "LanceKnight",
    "name": "Lance Knight",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 32.67,
    "image": getPartImage("LanceKnight-Lance Knight 4-80HN (Starter)", "blades/lanceknight/default.webp", "blade"),
    "identicalId": ["KnightLance"],
    "variants": [
      { "name": "Lance Knight 4-80HN (Starter) (HB) (Default)", "image": getPartImage("LanceKnight-Lance Knight 4-80HN (Starter)", "blades/lanceknight/default.webp", "blade"),"displayedName":"Lance Knight 4-80HN (Starter) (HB)" },
      { "name": "Lance Knight 3-60LF (Booster) (HB)", "image": getPartImage("LanceKnight-Lance-Knight-3-60LF-Booster", "blades/lanceknight/3-60lf.webp", "blade") }
    ]
  },
  {
    "id": "RhinoHorn",
    "name": "RhinoHorn",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 32.47,
    "image": getPartImage("RhinoHorn-BX-19", "blades/rhinohorn/bx-19.webp", "blade"),
    "identicalId": ["HornRhino"],
    "variants": [
      { "name": "BX-19 (TT) (Default)", "image": getPartImage("RhinoHorn-BX-19", "blades/rhinohorn/bx-19.webp", "blade"),"displayedName":"BX-19 (TT)" },
      { "name": "BX-31-6 (TT)", "image": getPartImage("RhinoHorn-BX-31-6", "blades/rhinohorn/bx-31-6.webp", "blade") }
    ]
  },
  {
    "id": "HornRhino",
    "name": "Horn Rhino",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 32.47,
    "image": getPartImage("HornRhino-Horn Rhino 3-80S (Booster)", "blades/hornrhino/default.webp", "blade"),
    "identicalId": ["RhinoHorn"],
    "variants": [
      { "name": "Horn Rhino 3-80S (Booster) (HB) (Default)", "image": getPartImage("HornRhino-Horn Rhino 3-80S (Booster)", "blades/hornrhino/default.webp", "blade"),"displayedName":"Horn Rhino 3-80S (Booster) (HB)" }
    ]
  },
  {
    "id": "ShinobiKnife",
    "name": "ShinobiKnife",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 30.97,
    "image": getPartImage("ShinobiKnife-Beyblade X Xone", "blades/shinobiknife/default.webp", "blade"),
    "identicalId": ["KnifeShinobi"],
    "echoOf": ["RhinoHorn", "HornRhino"],
    "variants": [
      { "name": "Beyblade X Xone (TT) (Default)", "image": getPartImage("ShinobiKnife-Beyblade X Xone", "blades/shinobiknife/default.webp", "blade"),"displayedName":"Beyblade X XONE (TT)" }
    ]
  },
  {
    "id": "KnifeShinobi",
    "name": "Knife Shinobi",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 30.97,
    "image": getPartImage("KnifeShinobi-Knife Shinobi 4-80HN (Dual Pack)", "blades/knifeshinobi/default.webp", "blade"),
    "identicalId": ["ShinobiKnife"],
    "echoOf": ["RhinoHorn", "HornRhino"],
    "variants": [
      { "name": "Knife Shinobi 4-80HN (Dual Pack) (HB) (Default)", "image": getPartImage("KnifeShinobi-Knife Shinobi 4-80HN (Dual Pack)", "blades/knifeshinobi/default.webp", "blade"),"displayedName":"Knife Shinobi 4-80HN (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "SphinxCowl",
    "name": "SphinxCowl",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 32.91,
    "image": getPartImage("SphinxCowl-BX-27-1", "blades/sphinxcowl/bx-27-1.webp", "blade"),
    "identicalId": ["CowlSphinx"],
    "variants": [
      { "name": "BX-27-1 (TT) (Default)", "image": getPartImage("SphinxCowl-BX-27-1", "blades/sphinxcowl/bx-27-1.webp", "blade"),"displayedName":"BX-27-1 (TT)" },
      { "name": "BX-27-2 (TT)", "image": getPartImage("SphinxCowl-BX-27-2", "blades/sphinxcowl/bx-27-2.webp", "blade") },
      { "name": "BX-27-3 (TT)", "image": getPartImage("SphinxCowl-BX-27-3", "blades/sphinxcowl/bx-27-3.webp", "blade") },
      { "name": "UX-07 (TT)", "image": getPartImage("SphinxCowl-UX-07", "blades/sphinxcowl/ux-07.webp", "blade") }
    ]
  },
  {
    "id": "CowlSphinx",
    "name": "Cowl Sphinx",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 32.91,
    "image": getPartImage("CowlSphinx-Cowl Sphinx 9-80GN (Booster)", "blades/cowlsphinx/default.webp", "blade"),
    "identicalId": ["SphinxCowl"],
    "variants": [
      { "name": "Cowl Sphinx 9-80GN (Booster) (HB) (Default)", "image": getPartImage("CowlSphinx-Cowl Sphinx 9-80GN (Booster)", "blades/cowlsphinx/default.webp", "blade"),"displayedName":"Cowl Sphinx 9-80GN (Booster) (HB)" },
      { "name": "Cowl Sphinx 1-80GF (Dual Pack) (HB)", "image": getPartImage("CowlSphinx-Cowl Sphinx 1-80GF (Dual Pack)", "blades/cowlsphinx/1-80gf.webp", "blade") }
    ]
  },

  {
    "id": "PteraSwing",
    "name": "PteraSwing",
    "category": "Blade",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 34.47,
    "image": getPartImage("PteraSwing-UX-10", "blades/pteraswing/ux-10.webp", "blade"),
    "identicalId": ["TalonPtera"],
    "echoOf": ["ViperTail", "TailViper", "Quetzalcoatlus"],
    "variants": [
      { "name": "UX-10 (TT) (Default)", "image": getPartImage("PteraSwing-UX-10", "blades/pteraswing/ux-10.webp", "blade"),"displayedName":"UX-10 (TT)" },
      { "name": "BXG-41 (Jurassic World Ver.) (TT)", "image": getPartImage("Quetzalcoatlus-BXG-41", "blades/pteraswing/jurassic.webp", "blade") }
    ]
  },
  {
    "id": "TalonPtera",
    "name": "Talon Ptera",
    "category": "Blade",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 34.47,
    "image": getPartImage("TalonPtera-Talon Ptera 3-80B (Booster)", "blades/talonptera/default.webp", "blade"),
    "identicalId": ["PteraSwing"],
    "echoOf": ["ViperTail", "TailViper", "Quetzalcoatlus"],
    "variants": [
      { "name": "Talon Ptera 3-80B (Booster) (HB) (Default)", "image": getPartImage("TalonPtera-Talon Ptera 3-80B (Booster)", "blades/talonptera/default.webp", "blade"),"displayedName":"Talon Ptera 3-80B (Booster) (HB)" },
      { "name": "Quetzalcoatlus 4-55D (Dual Pack) (HB)", "image": getPartImage("Quetzalcoatlus-Quetzalcoatlus 4-55D (Dual Pack)", "blades/talonptera/jurassic.webp", "blade") }
    ]
  },
  {
    "id": "ViperTail",
    "name": "ViperTail",
    "category": "Blade",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 34.49,
    "image": getPartImage("ViperTail-BX-16-1", "blades/vipertail/bx-16-1.webp", "blade"),
    "identicalId": ["TailViper"],
    "variants": [
      { "name": "BX-16-1 (TT) (Default)", "image": getPartImage("ViperTail-BX-16-1", "blades/vipertail/bx-16-1.webp", "blade"),"displayedName":"BX-16-1 (TT)" },
      { "name": "BX-16-2 (TT)", "image": getPartImage("ViperTail-BX-16-2", "blades/vipertail/bx-16-2.webp", "blade") },
      { "name": "BX-16-3 (TT)", "image": getPartImage("ViperTail-BX-16-3", "blades/vipertail/bx-16-3.webp", "blade") },
      { "name": "BX-24-4 (TT)", "image": getPartImage("ViperTail-BX-24-4", "blades/vipertail/bx-24-4.webp", "blade") },
      { "name": "BX-35-6 (TT)", "image": getPartImage("ViperTail-BX-35-6", "blades/vipertail/bx-35-6.webp", "blade") }
    ]
  },
  {
    "id": "TailViper",
    "name": "Tail Viper",
    "category": "Blade",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 34.49,
    "image": getPartImage("TailViper-Tail Viper 5-80O (Dual Pack)", "blades/tailviper/default.webp", "blade"),
    "identicalId": ["ViperTail"],
    "variants": [
      { "name": "Tail Viper 5-80O (Dual Pack) (HB) (Default)", "image": getPartImage("TailViper-Tail Viper 5-80O (Dual Pack)", "blades/tailviper/default.webp", "blade"),"displayedName":"Tail Viper 5-80O (Dual Pack) (HB)" },
      { "name": "Tail Viper 3-80HN (Dual Pack) (HB)", "image": getPartImage("TailViper-Tail Viper 3-80HN (Dual Pack)", "blades/tailviper/3-80hn.webp", "blade") }
    ]
  },
  {
    "id": "WizardArrow",
    "name": "WizardArrow",
    "category": "Blade",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 31.79,
    "image": getPartImage("WizardArrow-BX-03", "blades/wizardarrow/bx-03.webp", "blade"),
    "identicalId": ["ArrowWizard"],
    "variants": [
      { "name": "BX-03 (TT) (Default)", "image": getPartImage("WizardArrow-BX-03", "blades/wizardarrow/bx-03.webp", "blade"),"displayedName":"BX-03 (TT)" },
      { "name": "BX-05 (TT)", "image": getPartImage("WizardArrow-BX-05", "blades/wizardarrow/bx-05.webp", "blade") },
      { "name": "BX-08 (TT)", "image": getPartImage("WizardArrow-BX-08", "blades/wizardarrow/bx-08.webp", "blade") },
      { "name": "BX-14-6 (TT)", "image": getPartImage("WizardArrow-BX-14-6", "blades/wizardarrow/bx-14-6.webp", "blade") },
      { "name": "BX-17 (TT)", "image": getPartImage("WizardArrow-BX-17", "blades/wizardarrow/bx-17.webp", "blade") },
      { "name": "BX-21 (TT)", "image": getPartImage("WizardArrow-BX-21", "blades/wizardarrow/bx-21.webp", "blade") },
      { "name": "BX-24-6 (TT)", "image": getPartImage("WizardArrow-BX-24-6", "blades/wizardarrow/bx-24-6.webp", "blade") }
    ]
  },
  {
    "id": "ArrowWizard",
    "name": "Arrow Wizard",
    "category": "Blade",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 31.79,
    "image": getPartImage("ArrowWizard-Arrow Wizard 4-80B (Starter)", "blades/arrowwizard/default.webp", "blade"),
    "identicalId": ["WizardArrow"],
    "variants": [
      { "name": "Arrow Wizard 4-80B (Starter) (HB) (Default)", "image": getPartImage("ArrowWizard-Arrow Wizard 4-80B (Starter)", "blades/arrowwizard/default.webp", "blade"),"displayedName":"Arrow Wizard 4-80B (Starter) (HB)" },
      { "name": "Arrow Wizard 4-60N (Dual Pack) (HB)", "image": getPartImage("ArrowWizard-Arrow Wizard 4-60N (Dual Pack)", "blades/arrowwizard/4-60n.webp", "blade") },
      { "name": "Arrow Wizard 4-80GB (Booster) (HB)", "image": getPartImage("ArrowWizard-Arrow Wizard 4-80GB (Booster)", "blades/arrowwizard/4-80gb.webp", "blade") },
      { "name": "Arrow Wizard 4-80O (Booster) (HB)", "image": getPartImage("ArrowWizard-Arrow Wizard 4-80O (Booster)", "blades/arrowwizard/4-80o.webp", "blade") }
    ]
  },
  {
    "id": "WyvernGale",
    "name": "WyvernGale",
    "category": "Blade",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 31.76,
    "image": getPartImage("WyvernGale-BX-24-1", "blades/wyverngale/bx-24-1.webp", "blade"),
    "identicalId": ["GaleWyvern"],
    "variants": [
      { "name": "BX-24-1 (TT) (Default)", "image": getPartImage("WyvernGale-BX-24-1", "blades/wyverngale/bx-24-1.webp", "blade"),"displayedName":"BX-24-1 (TT)" },
      { "name": "BX-24-2 (TT)", "image": getPartImage("WyvernGale-BX-24-2", "blades/wyverngale/bx-24-2.webp", "blade") },
      { "name": "UX-07 (TT)", "image": getPartImage("WyvernGale-UX-07", "blades/wyverngale/ux-07.webp", "blade") },
      { "name": "UX-12-6 (TT)", "image": getPartImage("WyvernGale-UX-12-6", "blades/wyverngale/ux-12-6.webp", "blade") },
      { "name": "BBLD (Metal Coat: Orange) (TT)", "image": getPartImage("WyvernGale-BBLD-Orange", "blades/wyverngale/bbld_orange.webp", "blade") }
    ]
  },
  {
    "id": "GaleWyvern",
    "name": "Gale Wyvern",
    "category": "Blade",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 31.76,
    "image": getPartImage("GaleWyvern-Gale Wyvern 5-80 GB (Dual Pack)", "blades/galewyvern/default.webp", "blade"),
    "identicalId": ["WyvernGale"],
    "variants": [
      { "name": "Gale Wyvern 5-80GB (Dual Pack) (HB) (Default)", "image": getPartImage("GaleWyvern-Gale Wyvern 5-80 GB (Dual Pack)", "blades/galewyvern/default.webp", "blade"),"displayedName":"Gale Wyvern 5-80GB (Dual Pack) (HB)" },
      { "name": "Gale Wyvern 3-60T (Dual Pack) (HB)", "image": getPartImage("GaleWyvern-Gale Wyvern 3-60T (Dual Pack)", "blades/galewyvern/3-60t.webp", "blade") }
    ]
  },
  {
    "id": "ClockMirage",
    "name": "ClockMirage",
    "category": "Blade",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 37.72,
    "image": getPartImage("ClockMirage-UX-16-1", "blades/clockmirage/ux-16-1.webp", "blade"),
    "restrictions": {
      "ratchetType": ["Simple"]
    },
    "variants": [
      { "name": "UX-16-1 (TT) (Default)", "image": getPartImage("ClockMirage-UX-16-1", "blades/clockmirage/ux-16-1.webp", "blade"),"displayedName":"UX-16-1 (TT)" },
      { "name": "UX-16-2 (TT)", "image": getPartImage("ClockMirage-UX-16-2", "blades/clockmirage/ux-16-2.webp", "blade") },
      { "name": "UX-16-3 (TT)", "image": getPartImage("ClockMirage-UX-16-3", "blades/clockmirage/ux-16-3.webp", "blade") }
    ]
  },
  {
    "id": "CrimsonGaruda",
    "name": "CrimsonGaruda",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 35.01,
    "image": getPartImage("CrimsonGaruda-BX-38", "blades/crimsongaruda/bx-38.webp", "blade"),
    "identicalId": ["ScarletGaruda"],
    "variants": [
      { "name": "BX-38 (TT) (Default)", "image": getPartImage("CrimsonGaruda-BX-38", "blades/crimsongaruda/bx-38.webp", "blade"),"displayedName":"BX-38 (TT)" },
      { "name": "CX-17-6 (TT)", "image": getPartImage("CrimsonGaruda-CX-17-6", "blades/crimsongaruda/cx-17-6.webp", "blade"),"comingSoon":true}
    ]
  },
  {
    "id": "ScarletGaruda",
    "name": "Scarlet Garuda",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 35.01,
    "image": getPartImage("ScarletGaruda-Scarlet Garuda 4-70TP (Starter)", "blades/scarletgaruda/default.webp", "blade"),
    "identicalId": ["CrimsonGaruda"],
    "variants": [
      { "name": "Scarlet Garuda 4-70TP (Starter) (HB) (Default)", "image": getPartImage("ScarletGaruda-Scarlet Garuda 4-70TP (Starter)", "blades/scarletgaruda/default.webp", "blade"),"displayedName":"Scarlet Garuda 4-70TP (Starter) (HB)" }
    ]
  },
  {
    "id": "HellsChain",
    "name": "HellsChain",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 33.40,
    "image": getPartImage("HellsChain-BX-21", "blades/hellschain/bx-21.webp", "blade"),
    "identicalId": ["ChainIncendio"],
    "variants": [
      { "name": "BX-21 (TT) (Default)", "image": getPartImage("HellsChain-BX-21", "blades/hellschain/bx-21.webp", "blade"),"displayedName":"BX-21 (TT)" },
      { "name": "BX-31-3 (TT)", "image": getPartImage("HellsChain-BX-31-3", "blades/hellschain/bx-31-3.webp", "blade") },
      { "name": "Rare Bey Get (TT)", "image": getPartImage("HellsChain-Rare Bey Get", "blades/hellschain/rbg.webp", "blade") }
    ]
  },
  {
    "id": "ChainIncendio",
    "name": "Chain Incendio",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 33.40,
    "image": getPartImage("ChainIncendio-Chain Incendio 5-60HT (Dual Pack)", "blades/chainincendio/default.webp", "blade"),
    "identicalId": ["HellsChain"],
    "variants": [
      { "name": "Chain Incendio 5-60HT (Dual Pack) (HB) (Default)", "image": getPartImage("ChainIncendio-Chain Incendio 5-60HT (Dual Pack)", "blades/chainincendio/default.webp", "blade"),"displayedName":"Chain Incendio 5-60HT (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "HellsScythe",
    "name": "HellsScythe",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 33.02,
    "image": getPartImage("HellsScythe-BX-02", "blades/hellsscythe/bx-02.webp", "blade"),
    "identicalId": ["ScytheIncendio"],
    "variants": [
      { "name": "BX-02 (TT) (Default)", "image": getPartImage("HellsScythe-BX-02", "blades/hellsscythe/bx-02.webp", "blade"),"displayedName":"BX-02 (TT)" },
      { "name": "BX-08 (TT)", "image": getPartImage("HellsScythe-BX-08", "blades/hellsscythe/bx-08.webp", "blade") },
      { "name": "BX-14-4 (TT)", "image": getPartImage("HellsScythe-BX-14-4", "blades/hellsscythe/bx-14-4.webp", "blade") },
      { "name": "Rare Bey Get (TT)", "image": getPartImage("HellsScythe-Rare Bey Get", "blades/hellsscythe/rbg.webp", "blade") },
      { "name": "Corocoro (TT)", "image": getPartImage("HellsScythe-Corocoro", "blades/hellsscythe/corocoro.webp", "blade") },
      { "name": "BX-48-4 (TT)", "image": getPartImage("HellsScythe-BX-48-4", "blades/hellsscythe/bx-48-4.webp", "blade") },
    ]
  },
  {
    "id": "ScytheIncendio",
    "name": "Scythe Incendio",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 33.02,
    "image": getPartImage("ScytheIncendio-Scythe Incendio 4-60T (Starter)", "blades/scytheincendio/default.webp", "blade"),
    "identicalId": ["HellsScythe"],
    "variants": [
      { "name": "Scythe Incendio 4-60T (Starter) (HB) (Default)", "image": getPartImage("ScytheIncendio-Scythe Incendio 4-60T (Starter)", "blades/scytheincendio/default.webp", "blade"),"displayedName":"Scythe Incendio 4-60T (Starter) (HB)" },
      { "name": "Scythe Incendio 3-80B (Booster) (HB)", "image": getPartImage("ScytheIncendio-Scythe Incendio 3-80B (Booster)", "blades/scytheincendio/3-80b.webp", "blade") }
    ]
  },
  {
    "id": "SamuraiCalibur",
    "name": "SamuraiCalibur",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 35.84,
    "image": getPartImage("SamuraiCalibur-BX-45", "blades/samuraicalibur/bx-45.webp", "blade"),
    "variants": [
      { "name": "BX-45 (TT) (Default)", "image": getPartImage("SamuraiCalibur-BX-45", "blades/samuraicalibur/bx-45.webp", "blade"),"displayedName":"BX-45 (TT)" }
    ]
  },
  {
    "id": "CaliburSamurai",
    "name": "Calibur Samurai",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 35.84,
    "identicalId": ["SamuraiCalibur"],
    "image": getPartImage("SamuraiCalibur-BX-45", "blades/calibursamurai/default.webp", "blade"),
    "variants": [
      { "name": "Calibur Samurai 6-70M (Dual Pack) (HB) (Default)", "image": getPartImage("SamuraiCalibur-BX-45", "blades/calibursamurai/default.webp", "blade"),"displayedName":"Calibur Samurai 6-70M (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "ShelterDrake",
    "name": "ShelterDrake",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 32.62,
    "image": getPartImage("ShelterDrake-BX-39-1", "blades/shelterdrake/bx-39-1.webp", "blade"),
    "identicalId": ["ShelterDrake-Hasbro"],
    "variants": [
      { "name": "BX-39-1 (TT) (Default)", "image": getPartImage("ShelterDrake-BX-39-1", "blades/shelterdrake/bx-39-1.webp", "blade"),"displayedName":"BX-39-1 (TT)" },
      { "name": "BX-39-2 (TT)", "image": getPartImage("ShelterDrake-BX-39-2", "blades/shelterdrake/bx-39-2.webp", "blade") },
      { "name": "BX-39-3 (TT)", "image": getPartImage("ShelterDrake-BX-39-3", "blades/shelterdrake/bx-39-3.webp", "blade") }
    ]
  },
  {
    "id": "ShelterDrake-Hasbro",
    "name": "Shelter Drake",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 32.62,
    "image": getPartImage("ShelterDrake-Hasbro-Shelter Drake 7-80GP (Starter)", "blades/shelterdrake-hasbro/default.webp", "blade"),
    "identicalId": ["ShelterDrake"],
    "variants": [
      { "name": "Shelter Drake 7-80GP (Starter) (HB) (Default)", "image": getPartImage("ShelterDrake-Hasbro-Shelter Drake 7-80GP (Starter)", "blades/shelterdrake-hasbro/default.webp", "blade"),"displayedName":"Shelter Drake 7-80GP (Starter) (HB)" },
      { "name": "Shelter Drake 5-70O (Booster) (HB)", "image": getPartImage("ShelterDrake-BX-39-2", "blades/shelterdrake-hasbro/5-70o.webp", "blade") },
    ]
  },
  {
    "id": "UnicornSting",
    "name": "UnicornSting",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 33.63,
    "image": getPartImage("UnicornSting-BX-26", "blades/unicornsting/bx-26.webp", "blade"),
    "identicalId": ["StingUnicorn"],
    "variants": [
      { "name": "BX-26 (TT) (Default)", "image": getPartImage("UnicornSting-BX-26", "blades/unicornsting/bx-26.webp", "blade"),"displayedName":"BX-26 (TT)" },
      { "name": "BX-35-3 (TT)", "image": getPartImage("UnicornSting-BX-35-3", "blades/unicornsting/bx-35-3.webp", "blade") },
      { "name": "BBLD (Metal Coat: Pink) (TT)", "image": getPartImage("UnicornSting-BBLD-pink", "blades/unicornsting/bbld_pink.webp", "blade") }
    ]
  },
  {
    "id": "StingUnicorn",
    "name": "Sting Unicorn",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 33.63,
    "image": getPartImage("StingUnicorn-Sting Unicorn 5-60GP (Booster)", "blades/stingunicorn/default.webp", "blade"),
    "identicalId": ["UnicornSting"],
    "variants": [
      { "name": "Sting Unicorn 5-60GP (Booster) (HB) (Default)", "image": getPartImage("StingUnicorn-Sting Unicorn 5-60GP (Booster)", "blades/stingunicorn/default.webp", "blade"),"displayedName":"Sting Unicorn 5-60GP (Booster) (HB)" },
      { "name": "Sting Unicorn 4-60P (Dual Pack) (HB)", "image": getPartImage("StingUnicorn-Sting Unicorn 4-60P (Dual Pack)", "blades/stingunicorn/4-60p.webp", "blade") }
    ]
  },
  {
    "id": "WhaleWave",
    "name": "WhaleWave",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 38.17,
    "image": getPartImage("WhaleWave-BX-36-1", "blades/whalewave/bx-36-1.webp", "blade"),
    "identicalId": ["TideWhale"],
    "variants": [
      { "name": "BX-36-1 (TT) (Default)", "image": getPartImage("WhaleWave-BX-36-1", "blades/whalewave/bx-36-1.webp", "blade"),"displayedName":"BX-36-1 (TT)" },
      { "name": "BX-36-2 (TT)", "image": getPartImage("WhaleWave-BX-36-2", "blades/whalewave/bx-36-2.webp", "blade") },
      { "name": "BX-36-3 (TT)", "image": getPartImage("WhaleWave-BX-36-3", "blades/whalewave/bx-36-3.webp", "blade") },
      { "name": "CX-05-6 (TT)", "image": getPartImage("WhaleWave-CX-05-6", "blades/whalewave/cx-05-6.webp", "blade") },
      { "name": "Metal Coat: Blue Tsuri Spirits Wonder Ver. (Tsuri Spirits Fan Book Vol. 2) (TT)", "image": getPartImage("WhaleWave-Tsuri-Spirits", "blades/whalewave/tsurispirits.webp", "blade") }
    ]
  },
  {
    "id": "TideWhale",
    "name": "Tide Whale",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 38.17,
    "image": getPartImage("TideWhale-Tide whale 5-80E (Booster)", "blades/tidewhale/default.webp", "blade"),
    "identicalId": ["WhaleWave"],
    "variants": [
      { "name": "Tide whale 5-80E (Booster) (HB) (Default)", "image": getPartImage("TideWhale-Tide whale 5-80E (Booster)", "blades/tidewhale/default.webp", "blade"),"displayedName":"Tide whale 5-80E (Booster) (HB)" }
    ]
  },
  {
    "id": "LeonClaw",
    "name": "LeonClaw",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 31.43,
    "image": getPartImage("LeonClaw-BX-15", "blades/leonclaw/bx-15.webp", "blade"),
    "identicalId": ["ClawLeon"],
    "variants": [
      { "name": "BX-15 (TT) (Default)", "image": getPartImage("LeonClaw-BX-15", "blades/leonclaw/bx-15.webp", "blade"),"displayedName":"BX-15 (TT)" },
      { "name": "BX-24-5 (TT)", "image": getPartImage("LeonClaw-BX-24-5", "blades/leonclaw/bx-24-5.webp", "blade") },
      { "name": "UX-12-4 (TT)", "image": getPartImage("LeonClaw-UX-12-4", "blades/leonclaw/ux-12-4.webp", "blade") },
      { "name": "Rare Bey Get (TT)", "image": getPartImage("LeonClaw-Rare Bey Get", "blades/leonclaw/rbg.webp", "blade") }
    ]
  },
  {
    "id": "ClawLeon",
    "name": "Claw Leon",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 31.43,
    "image": getPartImage("ClawLeon-Claw Leon 5-60P (Starter)", "blades/clawleon/default.webp", "blade"),
    "identicalId": ["LeonClaw"],
    "variants": [
      { "name": "Claw Leon 5-60P (Starter) (HB) (Default)", "image": getPartImage("ClawLeon-Claw Leon 5-60P (Starter)", "blades/clawleon/default.webp", "blade"),"displayedName":"Claw Leon 5-60P (Starter) (HB)" }
    ]
  },
  {
    "id": "MammothTusk",
    "name": "MammothTusk",
    "category": "Blade",
    "type": "Balance",
    "series": ["Rare Bey Get", "BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 32.40,
    "image": getPartImage("MammothTusk-Rare Bey Get", "blades/mammothtusk/rbg.webp", "blade"),
    "identicalId": ["TuskMammoth"],
    "echoOf": ["HellsScythe", "ScytheIncendio"],
    "variants": [
      { "name": "Rare Bey Get (TT) (Default)", "image": getPartImage("MammothTusk-Rare Bey Get", "blades/mammothtusk/rbg.webp", "blade"),"displayedName":"Rare Bey Get (TT)" },
      { "name": "BX-48-3 (TT)", "image": getPartImage("MammothTusk-BX-48-3", "blades/mammothtusk/bx-48-3.webp", "blade") }
    ]
  },
  {
    "id": "TuskMammoth",
    "name": "Tusk Mammoth",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 32.40,
    "image": getPartImage("TuskMammoth-Xtreme Battle Set", "blades/tuskmammoth/default.webp", "blade"),
    "identicalId": ["MammothTusk"],
    "echoOf": ["HellsScythe", "ScytheIncendio"],
    "variants": [
      { "name": "Tusk Mammoth 3-60T (Xtreme Battle Set) (HB) (Default)", "image": getPartImage("TuskMammoth-Xtreme Battle Set", "blades/tuskmammoth/default.webp", "blade"),"displayedName":"Tusk Mammoth 3-60T (Xtreme Battle Set) (HB)" }
    ]
  },
  {
    "id": "SamuraiSteel",
    "name": "SamuraiSteel",
    "category": "Blade",
    "type": "Balance",
    "series": ["Corocoro", "BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 31.33,
    "image": getPartImage("SamuraiSteel-Corocoro", "blades/samuraisteel/corocoro.webp", "blade"),
    "identicalId": ["SteelSamurai"],
    "echoOf": ["LeonClaw", "ClawLeon"],
    "variants": [
      { "name": "Corocoro (TT) (Default)", "image": getPartImage("SamuraiSteel-Corocoro", "blades/samuraisteel/corocoro.webp", "blade"),"displayedName":"Corocoro (TT)" }
    ]
  },
  {
    "id": "SteelSamurai",
    "name": "Steel Samurai",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 31.33,
    "image": getPartImage("SteelSamurai-Steel Samurai 4-80T (Booster)", "blades/steelsamurai/default.webp", "blade"),
    "identicalId": ["SamuraiSteel"],
    "echoOf": ["LeonClaw", "ClawLeon"],
    "variants": [
      { "name": "Steel Samurai 4-80T (Booster) (HB) (Default)", "image": getPartImage("SteelSamurai-Steel Samurai 4-80T (Booster)", "blades/steelsamurai/default.webp", "blade"),"displayedName":"Steel Samurai 4-80T (Booster) (HB)" }
    ]
  },
  {
    "id": "WeissTiger",
    "name": "WeissTiger",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 34.81,
    "image": getPartImage("WeissTiger-BX-33", "blades/weisstiger/bx-33.webp", "blade"),
    "identicalId": ["PearlTiger"],
    "variants": [
      { "name": "BX-33 (TT) (Default)", "image": getPartImage("WeissTiger-BX-33", "blades/weisstiger/bx-33.webp", "blade"),"displayedName":"BX-33 (TT)" },
      { "name": "UX-18-6 (TT)", "image": getPartImage("WeissTiger-UX-18-6", "blades/weisstiger/ux-18-6.webp", "blade") }
    ]
  },
  {
    "id": "PearlTiger",
    "name": "Pearl Tiger",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 34.81,
    "image": getPartImage("PearlTiger-Pearl Tiger 3-60U (Dual Pack)", "blades/pearltiger/default.webp", "blade"),
    "identicalId": ["WeissTiger"],
    "variants": [
      { "name": "Pearl Tiger 3-60U (Dual Pack) (HB) (Default)", "image": getPartImage("PearlTiger-Pearl Tiger 3-60U (Dual Pack)", "blades/pearltiger/default.webp", "blade"),"displayedName":"Pearl Tiger 3-60U (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "OptimusPrimal",
    "name": "Optimus Primal",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 35.18,
    "image": getPartImage("OptimusPrimal-Optimus Primal 3-60F (Dual Pack)", "blades/optimusprimal/default.webp", "blade"),
    "echoOf": ["SharkEdge", "KeelShark"],
    "alsoShowUnder": ["Takara Tomy"],
    "variants": [
      { "name": "Optimus Primal 3-60F (Dual Pack) (HB) (Default)", "image": getPartImage("OptimusPrimal-Optimus Primal 3-60F (Dual Pack)", "blades/optimusprimal/default.webp", "blade"),"displayedName":"Optimus Primal 3-60F (Dual Pack) (HB)" },
      { "name": "BXG-37 (TT)", "image": getPartImage("OptimusPrimal-BXG-37", "blades/optimusprimal/default.webp", "blade") }
    ]
  },
  {
    "id": "OptimusPrime",
    "name": "Optimus Prime",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 32.21,
    "image": getPartImage("OptimusPrime-Optimus Prime 4-60P (Dual Pack)", "blades/optimusprime/default.webp", "blade"),
    "echoOf": ["KnightShield", "HelmKnight"],
    "alsoShowUnder": ["Takara Tomy"],
    "variants": [
      { "name": "Optimus Prime 4-60P (Dual Pack) (HB) (Default)", "image": getPartImage("OptimusPrime-Optimus Prime 4-60P (Dual Pack)", "blades/optimusprime/default.webp", "blade"),"displayedName":"Optimus Prime 4-60P (Dual Pack) (HB)" },
      { "name": "BXG-36 (TT)", "image": getPartImage("OptimusPrime-BXG-36", "blades/optimusprime/default.webp", "blade") }
    ]
  },
  {
    "id": "Megatron",
    "name": "Megatron",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 31.40,
    "image": getPartImage("Megatron-Megatron 4-80B (Dual Pack)", "blades/megatron/default.webp", "blade"),
    "echoOf": ["HellsScythe", "ScytheIncendio"],
    "alsoShowUnder": ["Takara Tomy"],
    "variants": [
      { "name": "Megatron 4-80B (Dual Pack) (HB) (Default)", "image": getPartImage("Megatron-Megatron 4-80B (Dual Pack)", "blades/megatron/default.webp", "blade"),"displayedName":"Megatron 4-80B (Dual Pack) (HB)" },
      { "name": "BXG-36 (TT)", "image": getPartImage("Megatron-BXG-36", "blades/megatron/default.webp", "blade") }
    ]
  },
  {
    "id": "Starscream",
    "name": "Starscream",
    "category": "Blade",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 29.81,
    "image": getPartImage("Starscream-Starscream 3-80N (Dual Pack)", "blades/starscream/default.webp", "blade"),
    "echoOf": ["WizardArrow", "ArrowWizard"],
    "alsoShowUnder": ["Takara Tomy"],
    "variants": [
      { "name": "Starscream 3-80N (Dual Pack) (HB) (Default)", "image": getPartImage("Starscream-Starscream 3-80N (Dual Pack)", "blades/starscream/default.webp", "blade"),"displayedName":"Starscream 3-80N (Dual Pack) (HB)" },
      { "name": "BXG-37 (TT)", "image": getPartImage("Starscream-BXG-37", "blades/starscream/default.webp", "blade") }
    ]
  },
  {
    "id": "Bumblebee",
    "name": "Bumblebee",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 31.86,
    "image": getPartImage("Bumblebee-Bumblebee 3-60GP (Dual Pack) (HB) (Default)", "blades/bumblebee/bumblebee.webp", "blade"),
    "echoOf": ["KnightShield", "HelmKnight"],
    "variants": [
      { "name": "Bumblebee 3-60GP (Dual Pack) (HB) (Default)", "image": getPartImage("Bumblebee-Bumblebee 3-60GP (Dual Pack) (HB) (Default)", "blades/bumblebee/bumblebee.webp", "blade"),"displayedName":"Bumblebee 3-60GP (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Shockwave",
    "name": "Shockwave",
    "category": "Blade",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 32.80,
    "image": getPartImage("Shockwave-Shockwave 5-80O (Dual Pack) (HB) (Default)", "blades/shockwave/default.webp", "blade"),
    "echoOf": ["ViperTail", "TailViper"],
    "variants": [
      { "name": "Shockwave 5-80O (Dual Pack) (HB) (Default)", "image": getPartImage("Bumblebee-Bumblebee 3-60GP (Dual Pack) (HB) (Default)", "blades/shockwave/default.webp", "blade"),"displayedName":"Shockwave 5-80O (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "Venom",
    "name": "Venom",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 34.51,
    "image": getPartImage("Venom-Venom 3-80N (Dual Pack)", "blades/venom/default.webp", "blade"),
    "echoOf": ["DranSword", "SwordDran"],
    "alsoShowUnder": ["Takara Tomy"],
    "variants": [
      { "name": "Venom 3-80N (Dual Pack) (HB) (Default)", "image": getPartImage("Venom-Venom 3-80N (Dual Pack)", "blades/venom/default.webp", "blade"),"displayedName":"Venom 3-80N (Dual Pack) (HB)" },
      { "name": "BXG-30 (TT)", "image": getPartImage("Venom-BXG-30", "blades/venom/default.webp", "blade") }
    ]
  },
  {
    "id": "Spider-Man",
    "name": "Spider-Man",
    "category": "Blade",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 33.02,
    "image": getPartImage("Spider-Man-Spider-Man 3-60F (Dual Pack)", "blades/spider-man/default.webp", "blade"),
    "echoOf": ["ViperTail", "TailViper"],
    "alsoShowUnder": ["Takara Tomy"],
    "variants": [
      { "name": "Spider-Man 3-60F (Dual Pack) (HB) (Default)", "image": getPartImage("Spider-Man-Spider-Man 3-60F (Dual Pack)", "blades/spider-man/default.webp", "blade"),"displayedName":"Spider-Man 3-60F (Dual Pack) (HB)" },
      { "name": "BXG-30 (TT)", "image": getPartImage("Spider-Man-BXG-30", "blades/spider-man/default.webp", "blade") }
    ]
  },
  {
    "id": "MilesMorales",
    "name": "Miles Morales",
    "category": "Blade",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 31.14,
    "image": getPartImage("Miles-Morales-Miles Morales 1-60GN (Dual Pack)", "blades/milesmorales/default.webp", "blade"),
    "echoOf": ["WizardArrow", "ArrowWizard"],
    "variants": [
      { "name": "Miles Morales 1-60GN (Dual Pack) (HB) (Default)", "image": getPartImage("Miles-Morales-Miles Morales 1-60GN (Dual Pack)", "blades/milesmorales/default.webp", "blade"),"displayedName":"Miles Morales 1-60GN (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "GreenGoblin",
    "name": "Green Goblin",
    "category": "Blade",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 31.69,
    "image": getPartImage("Green-Goblin-Green Goblin 9-80HT (Dual Pack)", "blades/greengoblin/greengoblin.webp", "blade"),
    "echoOf": ["WizardArrow", "ArrowWizard"],
    "variants": [
      { "name": "Green Goblin 9-80HT (Dual Pack) (HB) (Default)", "image": getPartImage("Green-Goblin-Green Goblin 9-80HT (Dual Pack)", "blades/greengoblin/greengoblin.webp", "blade"),"displayedName":"Green Goblin 9-80HT (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "CaptainAmerica",
    "name": "Captain America",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 32.43,
    "image": getPartImage("Captain-America-Captain America 4-70GB (Dual Pack)", "blades/captainamerica/captainamerica.webp", "blade"),
    "echoOf": ["DranSword", "SwordDran"],
    "variants": [
      { "name": "Captain America 4-70GB (Dual Pack) (HB) (Default)", "image": getPartImage("Captain-America-Captain America 4-70GB (Dual Pack)", "blades/captainamerica/captainamerica.webp", "blade"),"displayedName":"Captain America 4-70GB (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "RedHulk",
    "name": "Red Hulk",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "image": getPartImage("Red-Hulk-Red Hulk 1-80R (Dual Pack)", "blades/redhulk/redhulk.webp", "blade"),
    "echoOf": ["BeatTyranno", "TyrannoBeat"],
    "weight": 36.10,
    "variants": [
      { "name": "Red Hulk 1-80R (Dual Pack) (HB) (Default)", "image": getPartImage("Red-Hulk-Red Hulk 1-80R (Dual Pack)", "blades/redhulk/redhulk.webp", "blade"),"displayedName":"Red Hulk 1-80R (Dual Pack) (HB)" }
    ]
  },

  {
    "id": "TheMandalorian",
    "name": "The Mandalorian",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 30.24,
    "image": getPartImage("TheMandalorian-The Mandalorian 3-60F (Dual Pack)", "blades/themandalorian/default.webp", "blade"),
    "echoOf": ["LeonClaw", "ClawLeon"],
    "alsoShowUnder": ["Takara Tomy"],
    "variants": [
      { "name": "The Mandalorian 3-60F (Dual Pack) (HB) (Default)", "image": getPartImage("TheMandalorian-The Mandalorian 3-60F (Dual Pack)", "blades/themandalorian/default.webp", "blade"),"displayedName":"The Mandalorian 3-60F (Dual Pack) (HB)" },
      { "name": "BXG-34 (TT)", "image": getPartImage("TheMandalorian-BXG-34", "blades/themandalorian/default.webp", "blade") }
    ]
  },
  {
    "id": "MoffGideon",
    "name": "Moff Gideon",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 30.34,
    "image": getPartImage("MoffGideon-Moff Gideon 3-80N (Dual Pack)", "blades/moffgideon/default.webp", "blade"),
    "echoOf": ["HellsScythe", "ScytheIncendio"],
    "alsoShowUnder": ["Takara Tomy"],
    "variants": [
      { "name": "Moff Gideon 3-80N (Dual Pack) (HB) (Default)", "image": getPartImage("MoffGideon-Moff Gideon 3-80N (Dual Pack)", "blades/moffgideon/default.webp", "blade"),"displayedName":"Moff Gideon 3-80N (Dual Pack) (HB)" },
      { "name": "BXG-34 (TT)", "image": getPartImage("MoffGideon-BXG-34", "blades/moffgideon/default.webp", "blade") }
    ]
  },
  {
    "id": "DarthVader",
    "name": "Darth Vader",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 30.74,
    "image": getPartImage("DarthVader-Darth Vader 4-60P (Dual Pack)", "blades/darthvader/default.webp", "blade"),
    "echoOf": ["KnightLance", "LanceKnight"],
    "alsoShowUnder": ["Takara Tomy"],
    "variants": [
      { "name": "Darth Vader 4-60P (Dual Pack) (HB) (Default)", "image": getPartImage("DarthVader-Darth Vader 4-60P (Dual Pack)", "blades/darthvader/default.webp", "blade"),"displayedName":"Darth Vader 4-60P (Dual Pack) (HB)" },
      { "name": "BXG-33 (TT)", "image": getPartImage("DarthVader-BXG-33", "blades/darthvader/default.webp", "blade") }
    ]
  },
  {
    "id": "LukeSkywalker",
    "name": "Luke Skywalker",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 30.84,
    "image": getPartImage("LukeSkywalker-Luke Skywalker 4-80B (Dual Pack)", "blades/lukeskywalker/default.webp", "blade"),
    "echoOf": ["KnightShield", "HelmKnight"],
    "alsoShowUnder": ["Takara Tomy"],
    "variants": [
      { "name": "Luke Skywalker 4-80B (Dual Pack) (HB) (Default)", "image": getPartImage("LukeSkywalker-Luke Skywalker 4-80B (Dual Pack)", "blades/lukeskywalker/default.webp", "blade"),"displayedName":"Luke Skywalker 4-80B (Dual Pack) (HB)" },
      { "name": "BXG-33 (TT)", "image": getPartImage("LukeSkywalker-BXG-33", "blades/lukeskywalker/default.webp", "blade") }
    ]
  },
  {
    "id": "Chewbacca",
    "name": "Chewbacca",
    "category": "Blade",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 31.63,
    "image": getPartImage("Chewbacca_Chewbacca 4-80LF (Dual Pack) (HB) (Default)", "blades/chewbacca/default.webp", "blade"),
    "echoOf": ["ShelterDrake", "ShelterDrake-Hasbro"],
    "variants": [
      { "name": "Chewbacca 4-80LF (Dual Pack) (HB) (Default)", "image": getPartImage("Chewbacca_Chewbacca 4-80LF (Dual Pack) (HB) (Default)", "blades/chewbacca/default.webp", "blade"),"displayedName":"Chewbacca 4-80LF (Dual Pack) (HB)" }
    ]

  },
  {
    "id": "Stormtrooper",
    "name": "Stormtrooper",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 33.33,
    "image": getPartImage("Stormtrooper_Stormtrooper 5-70B (Dual Pack) (HB) (Default)", "blades/stormtrooper/default.webp", "blade"),
    "echoOf": ["RhinoHorn", "HornRhino"],
    "variants": [
      { "name": "Stormtrooper 5-70B (Dual Pack) (HB) (Default)", "image": getPartImage("Stormtrooper_Stormtrooper 5-70B (Dual Pack) (HB) (Default)", "blades/stormtrooper/default.webp", "blade"),"displayedName":"Stormtrooper 5-70B (Dual Pack) (HB)" }
    ]

  },
  {
    "id": "ObiWanKenobi",
    "name": "Obi-Wan Kenobi",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 30.37,
    "image": getPartImage("ObiWanKenobi_Obi-Wan Kenobi 4-60P (Dual Pack) (HB) (Default)", "blades/obiwankenobi/default.webp", "blade"),
    "echoOf": ["KnightLance", "LanceKnight"],
    "variants": [
      { "name": "Obi-Wan Kenobi 4-60P (Dual Pack) (HB) (Default)", "image": getPartImage("ObiWanKenobi_Obi-Wan Kenobi 4-60P (Dual Pack) (HB) (Default)", "blades/obiwankenobi/default.webp", "blade"),"displayedName":"Obi-Wan Kenobi 4-60P (Dual Pack) (HB)" }
    ]

  },
  {
    "id": "GeneralGrievous",
    "name": "General Grievous",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 31.01,
    "image": getPartImage("GeneralGrievous_General Grievous 3-80HN (Dual Pack) (HB) (Default)", "blades/generalgrievous/default.webp", "blade"),
    "echoOf": ["RhinoHorn", "HornRhino"],
    "variants": [
      { "name": "General Grievous 3-80HN (Dual Pack) (HB) (Default)", "image": getPartImage("GeneralGrievous_General Grievous 3-80HN (Dual Pack) (HB) (Default)", "blades/generalgrievous/default.webp", "blade"),"displayedName":"General Grievous 3-80HN (Dual Pack) (HB)" }
    ]

  },
  {
    "id": "IronMan",
    "name": "Iron Man",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 32.52,
    "image": getPartImage("IronMan-Iron Man 4-80B (Dual Pack)", "blades/ironman/default.webp", "blade"),
    "echoOf": ["KnightShield", "HelmKnight"],
    "alsoShowUnder": ["Takara Tomy"],
    "variants": [
      { "name": "Iron Man 4-80B (Dual Pack) (HB) (Default)", "image": getPartImage("IronMan-Iron Man 4-80B (Dual Pack)", "blades/ironman/default.webp", "blade"),"displayedName":"Iron Man 4-80B (Dual Pack) (HB)" },
      { "name": "BXG-29 (TT)", "image": getPartImage("IronMan-BXG-29", "blades/ironman/default.webp", "blade") }
    ]
  },
  {
    "id": "Thanos",
    "name": "Thanos",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 29.34,
    "image": getPartImage("Thanos-Thanos 4-60P (Dual Pack)", "blades/thanos/default.webp", "blade"),
    "echoOf": ["KnightLance", "LanceKnight"],
    "alsoShowUnder": ["Takara Tomy"],
    "variants": [
      { "name": "Thanos 4-60P (Dual Pack) (HB) (Default)", "image": getPartImage("Thanos-Thanos 4-60P (Dual Pack)", "blades/thanos/default.webp", "blade"),"displayedName":"Thanos 4-60P (Dual Pack) (HB)" },
      { "name": "BXG-29 (TT)", "image": getPartImage("Thanos-BXG-29", "blades/thanos/default.webp", "blade") }
    ]
  },
  {
    "id": "TriceraSpiky",
    "name": "TriceraSpiky",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 29.98,
    "echoOf": ["SphinxCowl", "CowlSphinx"],
    "identicalId": ["RidgeTriceratops", "Mosasaurus"],
    "image": getPartImage("Mosasaurus-Mosasaurus 9-60U (Dual Pack)", "blades/triceraspiky/jurassic.webp", "blade"),
    "variants": [
      { "name": "BXG-41 (Jurassic World Ver.) (TT) (Default)", "image": getPartImage("Mosasaurus-BXG-41", "blades/triceraspiky/jurassic.webp", "blade"),"displayedName":"BXG-40 (Jurassic World Ver.) (TT)" }
    ]
  },
  {
    "id": "RidgeTriceratops",
    "name": "Ridge Triceratops",
    "category": "Blade",
    "type": "Defense",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "echoOf": ["SphinxCowl", "CowlSphinx"],
    "weight": 29.98,
    "identicalId": ["TriceraSpiky", "Mosasaurus"],
    "image": getPartImage("RidgeTriceratops-Booster", "blades/ridgetriceratops/default.webp", "blade"),
    "variants": [
      { "name": "Ridge Triceratops 9-80GN (Booster) (HB) (Default)", "image": getPartImage("RidgeTriceratops-Booster", "blades/ridgetriceratops/default.webp", "blade"),"displayedName":"Ridge Triceratops 9-80GN (Booster) (HB)" },
      { "name": "Mosasaurus 9-60U (Dual Pack) (HB)", "image": getPartImage("Mosasaurus-Mosasaurus 9-60U (Dual Pack)", "blades/ridgetriceratops/jurassic.webp", "blade") }
    ]
  },
  {
    "id": "GillShark",
    "name": "Gill Shark",
    "category": "Blade",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 29.77,
    "image": getPartImage("GillShark-Gill Shark 4-70O (Dual Pack)", "blades/gillshark/default.webp", "blade"),
    "echoOf": ["ShelterDrake", "ShelterDrake-Hasbro"],
    "variants": [
      { "name": "Gill Shark 4-70O (Dual Pack) (HB) (Default)", "image": getPartImage("GillShark-Gill Shark 4-70O (Dual Pack)", "blades/gillshark/default.webp", "blade"),"displayedName":"Gill Shark 4-70O (Dual Pack) (HB)" },
      { "name": "X-Treme Battlers Pack (HB)", "image": getPartImage("GillShark-XBP", "blades/gillshark/xbp.webp", "blade") }
    ]
  },
  {
    "id": "SharkGill",
    "name": "SharkGill",
    "category": "Blade",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 29.77,
    "image": getPartImage("SharkGill-TT-CX-11", "blades/sharkgill/cx-11.webp", "blade"),
    "identicalId": ["GillShark"],
    "echoOf": ["ShelterDrake", "ShelterDrake-Hasbro"],
    "variants": [
      { "name": "CX-11 (TT) (Default)", "image": getPartImage("SharkGill-TT-CX-11", "blades/sharkgill/cx-11.webp", "blade"),"displayedName":"CX-11 (TT)" }
    ]
  },
  {
    "id": "YellKong",
    "name": "Yell Kong",
    "category": "Blade",
    "type": "Stamina",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 31.32,
    "image": getPartImage("YellKong-Yell Kong 3-60GB (Booster)", "blades/yellkong/default.webp", "blade"),
    "echoOf": ["WyvernGale", "GaleWyvern"],
    "variants": [
      { "name": "Yell Kong 3-60GB (Booster) (HB) (Default)", "image": getPartImage("YellKong-Yell Kong 3-60GB (Booster)", "blades/yellkong/default.webp", "blade"),"displayedName":"Yell Kong 3-60GB (Booster) (HB)" },
    ]
  },
  {
    "id": "VictoryValkyrie",
    "name": "VictoryValkyrie",
    "category": "Blade",
    "type": "Attack",
    "series": ["XOver", "BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 33.28,
    "image": getPartImage("VictoryValkyrie-BX-00 25th Anniversary Set", "blades/victoryvalkyrie/default.webp", "blade"),
    "variants": [
      { "name": "BX-00 25th Anniversary Set (TT) (Default)", "image": getPartImage("VictoryValkyrie-BX-00 25th Anniversary Set", "blades/victoryvalkyrie/default.webp", "blade"),"displayedName":"BX-00 25th Anniversary Set (TT)" }
    ]
  },
  {
    "id": "DragoonStorm",
    "name": "DragoonStorm",
    "category": "Blade",
    "type": "Attack",
    "series": ["XOver", "BX"],
    "company": "Takara Tomy",
    "spinDirection": "Left",
    "weight": 25.30,
    "image": getPartImage("DragoonStorm-BX-00 25th Anniversary Set", "blades/dragoonstorm/default.webp", "blade"),
    "variants": [
      { "name": "BX-00 25th Anniversary Set (TT) (Default)", "image": getPartImage("DragoonStorm-BX-00 25th Anniversary Set", "blades/dragoonstorm/default.webp", "blade"),"displayedName":"BX-00 25th Anniversary Set (TT)" }
    ]
  },
  {
    "id": "XenoXcalibur",
    "name": "XenoXcalibur",
    "category": "Blade",
    "type": "Attack",
    "series": ["XOver", "BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 30.96,
    "image": getPartImage("XenoXcalibur-BX-00", "blades/xenoxcalibur/default.webp", "blade"),
    "variants": [
      { "name": "BX-00 (TT) (Default)", "image": getPartImage("XenoXcalibur-BX-00", "blades/xenoxcalibur/default.webp", "blade"),"displayedName":"BX-00 (TT)" }
    ]
  },
  {
    "id": "StormPegasis",
    "name": "StormPegasis",
    "category": "Blade",
    "type": "Attack",
    "series": ["XOver", "BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 30.89,
    "image": getPartImage("StormPegasis-BX-00 25th Anniversary Set", "blades/stormpegasis/default.webp", "blade"),
    "variants": [
      { "name": "BX-00 25th Anniversary Set (TT) (Default)", "image": getPartImage("StormPegasis-BX-00 25th Anniversary Set", "blades/stormpegasis/default.webp", "blade"),"displayedName":"BX-00 25th Anniversary Set (TT)" }
    ]
  },
  {
    "id": "DracielShield",
    "name": "DracielShield",
    "category": "Blade",
    "type": "Defense",
    "series": ["XOver", "BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 28.24,
    "image": getPartImage("DracielShield-BX-00", "blades/dracielshield/default.webp", "blade"),
    "variants": [
      { "name": "BX-00 (TT) (Default)", "image": getPartImage("DracielShield-BX-00", "blades/dracielshield/default.webp", "blade"),"displayedName":"BX-00 (TT)" }
    ]
  },
  {
    "id": "DracielShield-Hasbro",
    "name": "Draciel Shield",
    "category": "Blade",
    "type": "Defense",
    "series": ["XOver", "BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 28.24,
    "image": getPartImage("DracielShield-StarterPack", "blades/dracielshield/default.webp", "blade"),
    "variants": [
      { "name": "Draciel Shield 7-60D (Starter) (Default)", "image": getPartImage("DracielShield-BX-00", "blades/dracielshield/default.webp", "blade"),"displayedName":"Draciel Shield 7-60D (Starter)" }
    ]
  },
  {
    "id": "RockLeone",
    "name": "Rock Leone",
    "category": "Blade",
    "type": "Defense",
    "series": ["XOver", "BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 29.74,
    "image": getPartImage("RockLeone-BX-00", "blades/rockleone/default.webp", "blade"),
    "variants": [
      { "name": "BX-00 (TT) (Default)", "image": getPartImage("RockLeone-BX-00", "blades/rockleone/default.webp", "blade"),"displayedName":"BX-00 (TT)" }
    ]
  },
  {
    "id": "DranzerSpiral",
    "name": "DranzerSpiral",
    "category": "Blade",
    "type": "Balance",
    "series": ["XOver", "BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 27.66,
    "image": getPartImage("DranzerSpiral-BX-00", "blades/dranzerspiral/default.webp", "blade"),
    "identicalId": ["DranzerSpiral-Hasbro"],
    "variants": [
      { "name": "BX-00 (TT) (Default)", "image": getPartImage("DranzerSpiral-BX-00", "blades/dranzerspiral/default.webp", "blade"),"displayedName":"BX-00 (TT)" },
      { "name": "Rare Bey Get (TT)", "image": getPartImage("DranzerSpiral-Rare Bey Get", "blades/dranzerspiral/rbg.webp", "blade") }
    ]
  },
  {
    "id": "DranzerSpiral-Hasbro",
    "name": "Dranzer Spiral",
    "category": "Blade",
    "type": "Balance",
    "series": ["XOver", "BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 27.66,
    "image": getPartImage("DranzerSpiral-Hasbro-Dranzer Spiral 3-80T (Blue Starter)", "blades/dranzerspiral-hasbro/default.webp", "blade"),
    "identicalId": ["DranzerSpiral"],
    "variants": [
      { "name": "Dranzer Spiral 3-80T (Blue Starter) (HB) (Default)", "image": getPartImage("DranzerSpiral-Hasbro-Dranzer Spiral 3-80T (Blue Starter)", "blades/dranzerspiral-hasbro/default.webp", "blade"),"displayedName":"Dranzer Spiral 3-80T (Blue Starter) (HB)" },
      { "name": "Dranzer Spiral 3-80T (Red Starter) (HB)", "image": getPartImage("DranzerSpiral-Hasbro-Dranzer Spiral 3-80T (Red Starter)", "blades/dranzerspiral-hasbro/redstarter.webp", "blade") },
      { "name": "Dranzer Spiral 3-80T (Green Starter) (HB)", "image": getPartImage("DranzerSpiral-Hasbro-Dranzer Spiral 3-80T (Green Starter)", "blades/dranzerspiral-hasbro/greenstarter.webp", "blade") }
    ]
  },
  {
    "id": "DrigerSlash",
    "name": "DrigerSlash",
    "category": "Blade",
    "type": "Balance",
    "series": ["XOver", "BX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 28.56,
    "image": getPartImage("DrigerSlash-BX-00", "blades/drigerslash/default.webp", "blade"),
    "identicalId": ["DrigerSlash-Hasbro"],
    "variants": [
      { "name": "BX-00 (TT) (Default)", "image": getPartImage("DrigerSlash-BX-00", "blades/drigerslash/default.webp", "blade"),"displayedName":"BX-00 (TT)" }
    ]
  },
  {
    "id": "DrigerSlash-Hasbro",
    "name": "Driger Slash",
    "category": "Blade",
    "type": "Balance",
    "series": ["XOver", "BX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 28.56,
    "image": getPartImage("DrigerSlash-Hasbro-Driger Slash 4-80P (Starter)", "blades/drigerslash/default.webp", "blade"),
    "identicalId": ["DrigerSlash"],
    "variants": [
      { "name": "Driger Slash 4-80P (Starter) (HB) (Default)", "image": getPartImage("DrigerSlash-Hasbro-Driger Slash 4-80P (Starter)", "blades/drigerslash/default.webp", "blade"),"displayedName":"Driger Slash 4-80P (Starter) (HB)" }
    ]
  },
  {
    "id": "LightningL-Drago(UpperMode)",
    "name": "Lightning L-Drago (Upper Type)",
    "category": "Blade",
    "type": "Attack",
    "series": ["XOver", "BX"],
    "company": "Takara Tomy",
    "spinDirection": "Left",
    "weight": 33.77,
    "image": getPartImage("LightningL-Drago(UpperMode)-BX-00-1", "blades/ldragoupper/default.webp", "blade"),
    "identicalId": ["LightningL-Drago(BarrageMode)"],
    "variants": [
      { "name": "BX-00-1 (TT) (Default)", "image": getPartImage("LightningL-Drago(UpperMode)-BX-00-1", "blades/ldragoupper/default.webp", "blade"),"displayedName":"BX-00-1 (TT)" }
    ]
  },
  {
    "id": "LightningL-Drago(BarrageMode)",
    "name": "Lightning L-Drago (Rapid-Hit Type)",
    "category": "Blade",
    "type": "Attack",
    "series": ["XOver", "BX"],
    "company": "Takara Tomy",
    "spinDirection": "Left",
    "weight": 33.23,
    "image": getPartImage("LightningL-Drago(BarrageMode)-BX-00-2", "blades/ldragorapid/default.webp", "blade"),
    "identicalId": ["LightningL-Drago(UpperMode)"],
    "variants": [
      { "name": "BX-00-2 (TT) (Default)", "image": getPartImage("LightningL-Drago(BarrageMode)-BX-00-2", "blades/ldragorapid/default.webp", "blade"),"displayedName":"BX-00-2 (TT)" }
    ]
  },
  {
    "id": "CobaltDragoon",
    "name": "CobaltDragoon",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Takara Tomy",
    "spinDirection": "Left",
    "weight": 37.66,
    "image": getPartImage("CobaltDragoon-BX-34", "blades/cobaltdragoon/bx-34.webp", "blade"),
    "identicalId": ["CobaltDragoon-Hasbro"],
    "variants": [
      { "name": "BX-34 (TT) (Default)", "image": getPartImage("CobaltDragoon-BX-34", "blades/cobaltdragoon/bx-34.webp", "blade"),"displayedName":"BX-34 (TT)" },
      { "name": "B4 Store (TT)", "image": getPartImage("CobaltDragoon-B4 Store", "blades/cobaltdragoon/b4.webp", "blade") },
      { "name": "CX-08-6 (TT)", "image": getPartImage("CobaltDragoon-CX-08-6", "blades/cobaltdragoon/cx-08-6.webp", "blade") },
      { "name": "BX-48-1 (TT)", "image": getPartImage("CobaltDragoon-BX-48-1", "blades/cobaltdragoon/bx-48-1.webp", "blade") },
      { "name": "BX-00 Metal Coat: White J.League Ver. (TT)", "image": getPartImage("CobaltDragoon-BX-00_White", "blades/cobaltdragoon/jleague.webp", "blade") }
    ]
  },
  {
    "id": "CobaltDragoon-Hasbro",
    "name": "Cobalt Dragoon",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX"],
    "company": "Hasbro",
    "spinDirection": "Left",
    "weight": 37.66,
    "image": getPartImage("CobaltDragoon-Hasbro-Cobalt Dragoon 2-60C (Deluxe Launcher Set)", "blades/cobaltdragoon-hasbro/default.webp", "blade"),
    "identicalId": ["CobaltDragoon"],
    "variants": [
      { "name": "Cobalt Dragoon 2-60C (Deluxe Launcher Set) (HB) (Default)", "image": getPartImage("CobaltDragoon-Hasbro-Cobalt Dragoon 2-60C (Deluxe Launcher Set)", "blades/cobaltdragoon-hasbro/default.webp", "blade"),"displayedName":"Cobalt Dragoon 2-60C (Deluxe Launcher Set) (HB)" }
    ]
  },
  {
    "id": "AeroPegasus",
    "name": "AeroPegasus",
    "category": "Blade",
    "type": "Attack",
    "series": ["Rare Bey Get", "UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 38.47,
    "image": getPartImage("AeroPegasus-UX-00 Rare Bey Get", "blades/aeropegasus/default.webp", "blade"),
    "variants": [
      { "name": "UX-00 Rare Bey Get (TT) (Default)", "image": getPartImage("AeroPegasus-UX-00 Rare Bey Get", "blades/aeropegasus/default.webp", "blade"),"displayedName":"UX-00 Rare Bey Get (TT)" },
      { "name": "UX-00 Rare Bey Get (Red ver.) (TT)", "image": getPartImage("AeroPegasus-UX-00 Rare Bey Get Red", "blades/aeropegasus/redver.webp", "blade") }
    ]
  },
  {
    "id": "ImpactDrake",
    "name": "ImpactDrake",
    "category": "Blade",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 39.02,
    "image": getPartImage("ImpactDrake-UX-11", "blades/impactdrake/ux-11.webp", "blade"),
    "identicalId": ["ImpactDrake-Hasbro"],
    "variants": [
      { "name": "UX-11 (TT) (Default)", "image": getPartImage("ImpactDrake-UX-11", "blades/impactdrake/ux-11.webp", "blade"),"displayedName":"UX-11 (TT)" }
    ]
  },
  {
    "id": "ImpactDrake-Hasbro",
    "name": "Impact Drake",
    "category": "Blade",
    "type": "Attack",
    "series": ["UX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 39.02,
    "image": getPartImage("ImpactDrake-Hasbro-Drop Attack Battle Set", "blades/impactdrake -hasbro/default.webp", "blade"),
    "identicalId": ["ImpactDrake"],
    "variants": [
      { "name": "Impact Drake 9-60LR (Drop Attack Battle Set) (HB) (Default)", "image": getPartImage("ImpactDrake-Hasbro-Drop Attack Battle Set", "blades/impactdrake -hasbro/default.webp", "blade"),"displayedName":"Impact Drake 9-60LR (Drop Attack Battle Set) (HB)" }
    ]
  },
  {
    "id": "SharkScale",
    "name": "SharkScale",
    "category": "Blade",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 37.50,
    "identicalId": ["ScaleShark"],
    "image": getPartImage("SharkScale-UX-15", "blades/sharkscale/ux-15.webp", "blade"),
    "variants": [
      { "name": "UX-15 (TT) (Default)", "image": getPartImage("SharkScale-UX-15", "blades/sharkscale/ux-15.webp", "blade"),"displayedName":"UX-15 (TT)" }
    ]
  },
  {
    "id": "ScaleShark",
    "name": "Scale Shark",
    "category": "Blade",
    "type": "Attack",
    "series": ["UX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 37.50,
    "identicalId": ["SharkScale"],
    "image": getPartImage("SharkScale-UX-15", "blades/sharkscale/ux-15.webp", "blade"),
    "variants": [
      { "name": "Scale Shark 4-50UF (Booster) (HB) (Default)", "image": getPartImage("SharkScale-UX-15", "blades/sharkscale/ux-15.webp", "blade"),"displayedName":"Scale Shark 4-50UF (Booster) (HB)" }
    ]
  },
  {
    "id": "DranBuster",
    "name": "DranBuster",
    "category": "Blade",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 36.66,
    "image": getPartImage("DranBuster-UX-01", "blades/dranbuster/ux-01.webp", "blade"),
    "identicalId": ["BusterDran"],
    "variants": [
      { "name": "UX-01 (TT) (Default)", "image": getPartImage("DranBuster-UX-01", "blades/dranbuster/ux-01.webp", "blade"),"displayedName":"UX-01 (TT)" },
      { "name": "UX-04 (TT)", "image": getPartImage("DranBuster-UX-04", "blades/dranbuster/ux-04.webp", "blade") },
      { "name": "CX-08-4 (TT)", "image": getPartImage("DranBuster-CX-08-4", "blades/dranbuster/cx-08-4.webp", "blade") },
      { "name": "UX-00 Dran Deck Set (TT)", "image": getPartImage("DranBuster-UX-00 Dran Deck Set", "blades/dranbuster/drandeckset.webp", "blade") },
      { "name": "UX-00 Barcelona Starter (TT)", "image": getPartImage("DranBuster-UX-00 Barcelona Starter", "blades/dranbuster/barcelona.webp", "blade") },
      { "name": "Corocoro (TT)", "image": getPartImage("DranBuster-Corocoro", "blades/dranbuster/corocoro.webp", "blade") },
      { "name": "Dran Choice Booster Black (TT)", "image": getPartImage("DranBuster-Dran Choice Booster Black", "blades/dranbuster/dranchoiceblack.webp", "blade") },
      { "name": "Dran Choice Booster Cyan (TT)", "image": getPartImage("DranBuster-Dran Choice Booster Cyan", "blades/dranbuster/dranchoicecyan.webp", "blade") },
      { "name": "Dran Choice Booster Violet (TT)", "image": getPartImage("DranBuster-Dran Choice Booster Violet", "blades/dranbuster/dranchoiceviolet.webp", "blade") },
      { "name": "BX-48-5 (TT)", "image": getPartImage("DranBuster-BX-48-5", "blades/dranbuster/bx-48-5.webp", "blade") },
    ]
  },
  {
    "id": "BusterDran",
    "name": "Buster Dran",
    "category": "Blade",
    "type": "Attack",
    "series": ["UX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 36.66,
    "image": getPartImage("BusterDran-Buster Dran 1-60A (Starter)", "blades/busterdran/default.webp", "blade"),
    "identicalId": ["DranBuster"],
    "variants": [
      { "name": "Buster Dran 1-60A (Starter) (HB) (Default)", "image": getPartImage("BusterDran-Buster Dran 1-60A (Starter)", "blades/busterdran/default.webp", "blade"),"displayedName":"Buster Dran 1-60A (Starter) (HB)" },
      { "name": "Buster Dran 5-70DB (Starter) (HB)", "image": getPartImage("BusterDran-Buster Dran 5-70DB (Starter)", "blades/busterdran/5-70db.webp", "blade") }
    ]
  },
  {
    "id": "SamuraiSaber",
    "name": "SamuraiSaber",
    "category": "Blade",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 36.36,
    "image": getPartImage("SamuraiSaber-UX-09", "blades/samuraisaber/ux-09.webp", "blade"),
    "identicalId": ["SaberSamurai"],
    "variants": [
      { "name": "UX-09 (TT) (Default)", "image": getPartImage("SamuraiSaber-UX-09", "blades/samuraisaber/ux-09.webp", "blade"),"displayedName":"UX-09 (TT)" },
      { "name": "Corocoro (TT)", "image": getPartImage("SamuraiSaber-corocoro", "blades/samuraisaber/corocoro.webp", "blade") },
      { "name": "CX-17-3 (TT)", "image": getPartImage("SamuraiSaber-CX-17-3", "blades/samuraisaber/cx-17-3.webp", "blade"),"comingSoon":true},
      { "name": "UX-00 Metal Coat: Samurai Blue JFA Ver. (TT)", "image": getPartImage("SamuraiSaber-UX-00", "blades/samuraisaber/jfa.webp", "blade"),"comingSoon":true}
    ]
  },
  {
    "id": "SaberSamurai",
    "name": "Saber Samurai",
    "category": "Blade",
    "type": "Attack",
    "series": ["UX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 36.36,
    "image": getPartImage("SaberSamurai-Saber Samurai 2-70L (Victory Grip Launcher Set)", "blades/sabersamurai/default.webp", "blade"),
    "identicalId": ["SamuraiSaber"],
    "variants": [
      { "name": "Saber Samurai 2-70L (Victory Grip Launcher Set) (HB) (Default)", "image": getPartImage("SaberSamurai-Saber Samurai 2-70L (Victory Grip Launcher Set)", "blades/sabersamurai/default.webp", "blade"),"displayedName":"Saber Samurai 2-70L (Victory Grip Launcher Set) (HB)" }
    ]
  },
  {
    "id": "KnightMail",
    "name": "KnightMail",
    "category": "Blade",
    "type": "Defense",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 36.61,
    "image": getPartImage("KnightMail-UX-10", "blades/knightmail/ux-10.webp", "blade"),
    "identicalId": ["MailKnight"],
    "variants": [
      { "name": "UX-10 (TT) (Default)", "image": getPartImage("KnightMail-UX-10", "blades/knightmail/ux-10.webp", "blade"),"displayedName":"UX-10 (TT)" },
      { "name": "Rare Bey Get (TT)", "image": getPartImage("KnightMail-Rare Bey Get", "blades/knightmail/rbg.webp", "blade") }
    ]
  },
  {
    "id": "MailKnight",
    "name": "Mail Knight",
    "category": "Blade",
    "type": "Defense",
    "series": ["UX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 36.61,
    "image": getPartImage("Mailknight", "blades/mailknight/default.webp", "blade"),
    "identicalId": ["KnightMail"],
    "variants": [
      { "name": "X-treme Expansion Pack (HB) (Default)", "image": getPartImage("KnightMail-Hasbro", "blades/mailknight/default.webp", "blade"),"displayedName":"X-Treme Expansion Pack (HB)" }
    ]
  },
  {
    "id": "GolemRock",
    "name": "GolemRock",
    "category": "Blade",
    "type": "Defense",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 34.22,
    "image": getPartImage("GolemRock-UX-13", "blades/golemrock/ux-13.webp", "blade"),
    "identicalId": ["RockGolem"],
    "variants": [
      { "name": "UX-13 (TT) (Default)", "image": getPartImage("GolemRock-UX-13", "blades/golemrock/ux-13.webp", "blade"),"displayedName":"UX-13 (TT)" },
      { "name": "CX-11 (TT)", "image": getPartImage("GolemRock-CX-11", "blades/golemrock/cx-11.webp", "blade") }
    ]
  },
  {
    "id": "RockGolem",
    "name": "Rock Golem",
    "category": "Blade",
    "type": "Defense",
    "series": ["UX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 34.22,
    "image": getPartImage("RockGolem-Rock Golem 1-60UN (Starter)", "blades/rockgolem/default.webp", "blade"),
    "identicalId": ["GolemRock"],
    "variants": [
      { "name": "Rock Golem 1-60UN (Starter) (HB) (Default)", "image": getPartImage("RockGolem-Rock Golem 1-60UN (Starter)", "blades/rockgolem/default.webp", "blade"),"displayedName":"Rock Golem 1-60UN (Starter) (HB)" },
      { "name": "X-Treme Battlers Pack (HB)", "image": getPartImage("RockGolem-XBP", "blades/rockgolem/xbp.webp", "blade") }
    ]
  },
  {
    "id": "LeonCrest",
    "name": "LeonCrest",
    "category": "Blade",
    "type": "Defense",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 34.76,
    "image": getPartImage("LeonCrest-UX-06", "blades/leoncrest/ux-06.webp", "blade"),
    "identicalId": ["CrestLeon"],
    "variants": [
      { "name": "UX-06 (TT) (Default)", "image": getPartImage("LeonCrest-UX-06", "blades/leoncrest/ux-06.webp", "blade"),"displayedName":"UX-06 (TT)" },
      { "name": "CX-05-4 (TT)", "image": getPartImage("LeonCrest-CX-05-4", "blades/leoncrest/cx-05-4.webp", "blade") }
    ]
  },
  {
    "id": "CrestLeon",
    "name": "Crest Leon",
    "category": "Blade",
    "type": "Defense",
    "series": ["UX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 34.76,
    "image": getPartImage("CrestLeon-Crest Leon 7-60GN (Dual Pack)", "blades/crestleon/default.webp", "blade"),
    "identicalId": ["LeonCrest"],
    "variants": [
      { "name": "Crest Leon 7-60GN (Dual Pack) (HB) (Default)", "image": getPartImage("CrestLeon-Crest Leon 7-60GN (Dual Pack)", "blades/crestleon/default.webp", "blade"),"displayedName":"Crest Leon 7-60GN (Dual Pack) (HB)" }
    ]
  },
  {
    "id": "ShinobiShadow",
    "name": "ShinobiShadow",
    "category": "Blade",
    "type": "Defense",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 28.16,
    "image": getPartImage("ShinobiShadow-UX-05-1", "blades/shinobishadow/ux-05-1.webp", "blade"),
    "identicalId": ["ShadowShinobi"],
    "variants": [
      { "name": "UX-05-1 (TT) (Default)", "image": getPartImage("ShinobiShadow-UX-05-1", "blades/shinobishadow/ux-05-1.webp", "blade"),"displayedName":"UX-05-1 (TT)" },
      { "name": "UX-05-2 (TT)", "image": getPartImage("ShinobiShadow-UX-05-2", "blades/shinobishadow/ux-05-2.webp", "blade") },
      { "name": "UX-05-3 (TT)", "image": getPartImage("ShinobiShadow-UX-05-3", "blades/shinobishadow/ux-05-3.webp", "blade") },
      { "name": "UX-12-3 (TT)", "image": getPartImage("ShinobiShadow-UX-12-3", "blades/shinobishadow/ux-12-3.webp", "blade") }
    ]
  },
  {
    "id": "ShadowShinobi",
    "name": "Shadow Shinobi",
    "category": "Blade",
    "type": "Defense",
    "series": ["UX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 28.16,
    "image": getPartImage("ShadowShinobi-Shadow Shinobi 1-80MN (Starter)", "blades/shadowshinobi/default.webp", "blade"),
    "identicalId": ["ShinobiShadow"],
    "variants": [
      { "name": "Shadow Shinobi 1-80MN (Starter) (HB) (Default)", "image": getPartImage("ShadowShinobi-Shadow Shinobi 1-80MN (Starter)", "blades/shadowshinobi/default.webp", "blade"),"displayedName":"Shadow Shinobi 1-80MN (Starter) (HB)" }
    ]
  },
  {
    "id": "StunMedusa",
    "name": "Stun Medusa",
    "category": "Blade",
    "type": "Defense",
    "series": ["UX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 27.40,
    "image": getPartImage("StunMedusa-9-60-GB-Starter", "blades/stunmedusa/default.webp", "blade"),
    "echoOf": ["ShinobiShadow", "ShadowShinobi"],
    "variants": [
      { "name": "Stun Medusa 9-60GB (Starter) (HB) (Default)", "image": getPartImage("StunMedusa-9-60-GB-Starter", "blades/stunmedusa/default.webp", "blade"),"displayedName":"Stun Medusa 9-60GB (Starter) (HB)" }
    ]
  },
  {
    "id": "SilverWolf",
    "name": "SilverWolf",
    "category": "Blade",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 36.72,
    "image": getPartImage("SilverWolf-UX-08", "blades/silverwolf/ux-08.webp", "blade"),
    "identicalId": ["SterlingWolf"],
    "variants": [
      { "name": "UX-08 (TT) (Default)", "image": getPartImage("SilverWolf-UX-08", "blades/silverwolf/ux-08.webp", "blade"),"displayedName":"UX-08 (TT)" }
    ]
  },
  {
    "id": "SterlingWolf",
    "name": "Sterling Wolf",
    "category": "Blade",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 36.72,
    "image": getPartImage("SterlingWolf-Sterling Wolf 3-80FB (Starter)", "blades/sterlingwolf/default.webp", "blade"),
    "identicalId": ["SilverWolf"],
    "variants": [
      { "name": "Sterling Wolf 3-80FB (Starter) (HB) (Default)", "image": getPartImage("SterlingWolf-Sterling Wolf 3-80FB (Starter)", "blades/sterlingwolf/default.webp", "blade"),"displayedName":"Sterling Wolf 3-80FB (Starter) (HB)" }
    ]
  },
  {
    "id": "WizardRod",
    "name": "WizardRod",
    "category": "Blade",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 35.36,
    "image": getPartImage("WizardRod-UX-03", "blades/wizardrod/ux-03.webp", "blade"),
    "identicalId": ["WandWizard"],
    "variants": [
      { "name": "UX-03 (TT) (Default)", "image": getPartImage("WizardRod-UX-03", "blades/wizardrod/ux-03.webp", "blade"),"displayedName":"UX-03 (TT)" },
      { "name": "UX-04 (TT)", "image": getPartImage("WizardRod-UX-04", "blades/wizardrod/ux-04.webp", "blade") },
      { "name": "BX-35-4 (TT)", "image": getPartImage("WizardRod-BX-35-4", "blades/wizardrod/bx-35-4.webp", "blade") },
      { "name": "G3 3rd Prize (WizardRod Metal Coat Gold) (TT)", "image": getPartImage("WizardRod-G3-1st-Prize", "blades/wizardrod/g3.webp", "blade") }
    ]
  },
  {
    "id": "WandWizard",
    "name": "Wand Wizard",
    "category": "Blade",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 35.36,
    "image": getPartImage("WandWizard-Wand Wizard 5-70DB (Starter)", "blades/wandwizard/default.webp", "blade"),
    "identicalId": ["WizardRod"],
    "variants": [
      { "name": "Wand Wizard 5-70DB (Starter) (HB) (Default)", "image": getPartImage("WandWizard-Wand Wizard 5-70DB (Starter)", "blades/wandwizard/default.webp", "blade"),"displayedName":"Wand Wizard 5-70DB (Starter) (HB)" },
      { "name": "Wand Wizard 1-60R (Starter) (HB)", "image": getPartImage("WandWizard-Wand Wizard 1-60R (Starter)", "blades/wandwizard/1-60r.webp", "blade") }
    ]
  },
  {
    "id": "GhostCircle",
    "name": "GhostCircle",
    "category": "Blade",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 26.70,
    "image": getPartImage("GhostCircle-UX-12-1", "blades/ghostcircle/ux-12-1.webp", "blade"),
    "identicalId": ["CircleGhost"],
    "variants": [
      { "name": "UX-12-1 (TT) (Default)", "image": getPartImage("GhostCircle-UX-12-1", "blades/ghostcircle/ux-12-1.webp", "blade"),"displayedName":"UX-12-1 (TT)" },
      { "name": "UX-12-2 (TT)", "image": getPartImage("GhostCircle-UX-12-2", "blades/ghostcircle/ux-12-2.webp", "blade") }
    ]
  },
  {
    "id": "CircleGhost",
    "name": "Circle Ghost",
    "category": "Blade",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 26.70,
    "image": getPartImage("CircleGhost-Circle Ghost 0-80GB (Dual Pack)", "blades/circleghost/default.webp", "blade"),
    "identicalId": ["GhostCircle"],
    "variants": [
      { "name": "Circle Ghost 0-80GB (Dual Pack) (HB) (Default)", "image": getPartImage("CircleGhost-Circle Ghost 0-80GB (Dual Pack)", "blades/circleghost/default.webp", "blade"),"displayedName":"Circle Ghost 0-80GB (Dual Pack) (HB)" },
      { "name": "X-treme Expansion Pack (HB)", "image": getPartImage("CircleGhost-Circle Ghost 0-80GB (Dual Pack)", "blades/circleghost/default.webp", "blade"),"displayedName":"X-Treme Expansion Pack (HB)" },
      { "name": "Circle Ghost 4-60LR (Dual Pack) (HB)", "image": getPartImage("GhostCircle-UX-12-2", "blades/circleghost/4-60lr.webp", "blade") }
    ]
  },
  {
    "id": "PhoenixRudder",
    "name": "PhoenixRudder",
    "category": "Blade",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 34.59,
    "identicalId": ["RudderPhoenix"],
    "image": getPartImage("PhoenixRudder-UX-07", "blades/phoenixrudder/ux-07.webp", "blade"),
    "variants": [
      { "name": "UX-07 (TT) (Default)", "image": getPartImage("PhoenixRudder-UX-07", "blades/phoenixrudder/ux-07.webp", "blade"),"displayedName":"UX-07 (TT)" },
      { "name": "CX-05-5 (TT)", "image": getPartImage("PhoenixRudder-CX-05-5", "blades/phoenixrudder/cx-05-5.webp", "blade") }
    ]
  },
  {
    "id": "RudderPhoenix",
    "name": "Rudder Phoenix",
    "category": "Blade",
    "type": "Stamina",
    "series": ["UX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 34.59,
    "identicalId": ["PhoenixRudder"],
    "image": getPartImage("PhoenixRudder-UX-07", "blades/rudderphoenix/default.webp", "blade"),
    "variants": [
      { "name": "Yggdrasil Team Pack (HB) (Default)", "image": getPartImage("PhoenixRudder-UX-07", "blades/rudderphoenix/default.webp", "blade"),"displayedName":"Yggdrasil Team Pack (HB)" },
      { "name": "Rudder Phoenix 4-70LF (Starter) (HB)", "image": getPartImage("PhoenixRudder-starter", "blades/rudderphoenix/4-70lf.webp", "blade") }
    ]
  },
  {
    "id": "ScorpioSpear",
    "name": "ScorpioSpear",
    "category": "Blade",
    "type": "Balance",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 39.62,
    "image": getPartImage("ScorpioSpear-UX-14", "blades/scorpiospear/ux-14.webp", "blade"),
    "variants": [
      { "name": "UX-14 (TT) (Default)", "image": getPartImage("ScorpioSpear-UX-14", "blades/scorpiospear/ux-14.webp", "blade"),"displayedName":"UX-14 (TT)" },
      { "name": "UX-00 Metal Coat: Magenta (Beyblade Bar, Rare Bey Get) (TT)", "image": getPartImage("ScorpioSpear-RBG-Magenta", "blades/scorpiospear/rbgmagenta.webp", "blade"), "comingSoon":true }
    ]
  },
  {
    "id": "HellsHammer",
    "name": "HellsHammer",
    "category": "Blade",
    "type": "Balance",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 33.34,
    "image": getPartImage("HellsHammer-UX-02", "blades/hellshammer/ux-02.webp", "blade"),
    "identicalId": ["HammerIncendio"],
    "variants": [
      { "name": "UX-02 (TT) (Default)", "image": getPartImage("HellsHammer-UX-02", "blades/hellshammer/ux-02.webp", "blade"),"displayedName":"UX-02 (TT)" },
      { "name": "UX-10 (TT)", "image": getPartImage("HellsHammer-UX-10", "blades/hellshammer/ux-10.webp", "blade") },
      { "name": "UX-00 Bey Kick Off Set (TT)", "image": getPartImage("HellsHammer-UX-00 Barcelona Stadium Set", "blades/hellshammer/barcelona.webp", "blade") },
      { "name": "CX-17-4 (TT)", "image": getPartImage("HellsHammer-CX-17-4", "blades/hellshammer/cx-17-4.webp", "blade"),"comingSoon":true}
    ]
  },
  {
    "id": "HackViking",
    "name": "Hack Viking",
    "category": "Blade",
    "type": "Balance",
    "series": ["UX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 32.70,
    "echoOf": ["HellsHammer", "HammerIncendio"],
    "image": getPartImage("HackVikingDualPack", "blades/hackviking/default.webp", "blade"),
    "variants": [
      { "name": "Hack Viking 4-55O (Dual Pack) (HB) (Default)", "image": getPartImage("HackVikingDualPack", "blades/hackviking/default.webp", "blade"),"displayedName":"Hack Viking 4-55O (Dual Pack) (HB)" }

    ]
  },
  {
    "id": "HammerIncendio",
    "name": "Hammer Incendio",
    "category": "Blade",
    "type": "Balance",
    "series": ["UX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 33.34,
    "image": getPartImage("HammerIncendio-Hammer Incendio 3-70H (Starter)", "blades/hammerincendio/default.webp", "blade"),
    "identicalId": ["HellsHammer"],
    "variants": [
      { "name": "Hammer Incendio 3-70H (Starter) (HB) (Default)", "image": getPartImage("HammerIncendio-Hammer Incendio 3-70H (Starter)", "blades/hammerincendio/default.webp", "blade"),"displayedName":"Hammer Incendio 3-70H (Starter) (HB)" },
      { "name": "X-treme Expansion Pack (HB)", "image": getPartImage("HellsHammer-UX-10", "blades/hammerincendio/xep.webp", "blade"),"displayedName":"X-Treme Expansion Pack (HB)" }
    ]
  },
  {
    "id": "HoverWyvern",
    "name": "Hover Wyvern",
    "category": "Blade",
    "type": "Defense",
    "series": ["UX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 35.13,
    "image": getPartImage("HoverWyvern-Drop Attack Battle Set", "blades/hoverwyvern/default.webp", "blade"),
    "identicalId": ["WyvernHover"],
    "variants": [
      { "name": "Hover Wyvern 3-85N (Drop Attack Battle Set) (HB) (Default)", "image": getPartImage("HoverWyvern-Drop Attack Battle Set", "blades/hoverwyvern/default.webp", "blade"),"displayedName":"Hover Wyvern 3-85N (Drop Attack Battle Set) (HB)" }
    ]
  },
  {
    "id": "WyvernHover",
    "name": "WyvernHover",
    "category": "Blade",
    "type": "Defense",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 35.13,
    "image": getPartImage("WyvernHover Blade (DMM Lottery exclusive)", "blades/wyvernhover/default.webp", "blade"),
    "identicalId": ["HoverWyvern"],
    "variants": [
      { "name": "UX-00 (DMM Lottery exclusive) (TT) (Default)", "image": getPartImage("WyvernHover (DMM Lottery exclusive)", "blades/wyvernhover/default.webp", "blade"),"displayedName":"UX-00 (DMM Lottery Exclusive) (TT)" },
      { "name": "UX-00 (Metal Coat: Violet) (DMM Lottery exclusive) (TT)", "image": getPartImage("WyvernHover (Metal Coat: Violet) (DMM Lottery exclusive)", "blades/wyvernhover/violet.webp", "blade"),"displayedName":"UX-00 (Metal Coat: Violet) (DMM Lottery Exclusive) (TT)" }
    ]
  },
  {
    "id": "MeteorDragoon",
    "name": "MeteorDragoon",
    "category": "Blade",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Left",
    "identicalId": ["Meteoroid Dragoon"],
    "weight": 39.06,
    "image": getPartImage("UX-17", "blades/meteordragoon/ux-17.webp", "blade"),
    "variants": [
      { "name": "UX-17 (TT) (Default)", "image": getPartImage("UX-17", "blades/meteordragoon/ux-17.webp", "blade"),"displayedName":"UX-17 (TT)" }
    ]
  },
  {
    "id": "MeteoroidDragoon",
    "name": "Meteoroid Dragoon",
    "category": "Blade",
    "type": "Attack",
    "series": ["UX"],
    "company": "Hasbro",
    "spinDirection": "Left",
    "identicalId": ["MeteorDragoon"],
    "weight": 39.06,
    "comingSoon":true,
    "image": getPartImage("Meteoroid Dragoon Starter Pack", "blades/meteordragoon/ux-17.webp", "blade"),
    "variants": [
      { "name": "Meteoroid Dragoon 3-70J (Deluxe Launcher Set) (HB) (Default)", "image": getPartImage("UX-17", "blades/meteordragoon/ux-17.webp", "blade"),"displayedName":"Meteoroid Dragoon 3-70J (Deluxe Launcher Set) (HB)" }
    ]
  },
  {
    "id": "MummyCurse",
    "name": "MummyCurse",
    "category": "Blade",
    "type": "Defense",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 37.48,
    "image": getPartImage("UX-18-1", "blades/mummycurse/ux-18-1.webp", "blade"),
    "variants": [
      { "name": "UX-18-1 (TT) (Default)", "image": getPartImage("UX-18-1", "blades/mummycurse/ux-18-1.webp", "blade"),"displayedName":"UX-18-1 (TT)" },
      { "name": "UX-18-2 (TT)", "image": getPartImage("UX-18-2", "blades/mummycurse/ux-18-2.webp", "blade") }
    ]
  },
  {
    "id": "OrochiCluster",
    "name": "OrochiCluster",
    "category": "Blade",
    "type": "Attack",
    "series": ["UX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 36.16,
    "image": getPartImage("Corocoro Mail Order (TT) (Default)", "blades/orochicluster/default.webp", "blade"),
    "variants": [
      { "name": "Corocoro Mail Order (TT) (Default)", "image": getPartImage("Corocoro Mail Order (TT) (Default)", "blades/orochicluster/default.webp", "blade"),"displayedName":"Corocoro Mail Order (TT)" }
    ]
  },
  {
    "id": "StormSpriggan",
    "name": "StormSpriggan",
    "category": "Blade",
    "type": "Balance",
    "series": ["BX", "XOver"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 31.00,
    "image": getPartImage("StormSpriggan 2-70M", "blades/stormspriggan/default.webp", "blade"),
    "variants": [
      { "name": "BX-00 (TT) (Default)", "image": getPartImage("StormSpriggan 2-70M", "blades/stormspriggan/default.webp", "blade"),"displayedName":"BX-00 (TT)" }
    ]
  },
  {
    "id": "BulletGriffon",
    "name": "BulletGriffon",
    "category": "Blade",
    "type": "Balance",
    "series": ["UX", "UXE"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "identicalId": ["RocketGriffon"],
    "restrictions": {
      "ratchetType": ["Normal", "Simple"]
    },
    "comingSoon": true,
    //"weight": ,
    "image": getPartImage("UX-19 (Default)", "blades/bulletgriffon/ux-19.webp", "blade"),
    "variants": [
      { "name": "UX-19 (TT) (Default)", "image": getPartImage("UX-19 (Default)", "blades/bulletgriffon/ux-19.webp", "blade"),"displayedName":"UX-19 (TT)" }
    ]
  },
  {
    "id": "RocketGriffon",
    "name": "Rocket Griffon",
    "category": "Blade",
    "type": "Balance",
    "series": ["UX", "UXE"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "identicalId": ["BulletGriffon"],
    "restrictions": {
      "ratchetType": ["Normal", "Simple"]
    },
    "comingSoon": true,
    //"weight": ,
    "image": getPartImage("Rocket Griffon H (Starter)", "blades/rocketgriffon/default.webp", "blade"),
    "variants": [
      { "name": "Rocket Griffon H (Starter) (HB) (Default)", "image": getPartImage("Rocket Griffon (Starter)", "blades/rocketgriffon/default.webp", "blade"),"displayedName":"Rocket Griffon H (Starter) (HB)" }
    ]
  },
  {
    "id": "DranStrike",
    "name": "DranStrike",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX", "BXE"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "identicalId": ["StrikeDran"],
    "comingSoon": true,
    //"weight": ,
    "image": getPartImage("BX-49 (Default)", "blades/dranstrike/bx-49.webp", "blade"),
    "variants": [
      { "name": "BX-49 (TT) (Default)", "image": getPartImage("BX-49 (Default)", "blades/dranstrike/bx-49.webp", "blade"),"displayedName":"BX-49 (TT)" }
    ]
  },
  {
    "id": "StrikeDran",
    "name": "Strike Dran",
    "category": "Blade",
    "type": "Attack",
    "series": ["BX", "BXE"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "identicalId": ["DranStrike"],
    "comingSoon": true,
    //"weight": ,
    "image": getPartImage("Strike Dran 4-50FF (Starter)", "blades/strikedran/default.webp", "blade"),
    "variants": [
      { "name": "Strike Dran 4-50FF (Starter) (HB) (Default)", "image": getPartImage("Strike Dran 4-50FF (Starter)", "blades/strikedran/default.webp", "blade"),"displayedName":"Strike Dran 4-50FF (Starter) (HB)" }
    ]
  },
  {
    "id": "CutterShinobi",
    "name": "Cutter Shinobi",
    "category": "Blade",
    "type": "Attack",
    "series": ["UX", "UXE"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "restrictions": {
      "ratchetType": ["Normal", "Simple"]
    },
    "comingSoon": true,
    //"weight": ,
    "image": getPartImage("Cutter Shinobi LF (Sneak Attack Battle Set)", "blades/cuttershinobi/default.webp", "blade"),
    "variants": [
      { "name": "Cutter Shinobi LF (Sneak Attack Battle Set) (HB) (Default)", "image": getPartImage("Cutter Shinobi LF (Sneak Attack Battle Set)", "blades/cuttershinobi/default.webp", "blade"),"displayedName":"Cutter Shinobi LF (Sneak Attack Battle Set) (HB)" }
    ]
  },
  {
    "id": "RampartAegis",
    "name": "Rampart Aegis",
    "category": "Blade",
    "type": "Stamina",
    "series": ["UX", "UXE"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "restrictions": {
      "ratchetType": ["Normal", "Simple"]
    },
    "comingSoon": true,
    //"weight": ,
    "image": getPartImage("Rampart Aegis GB (Sneak Attack Battle Set)", "blades/rampartaegis/default.webp", "blade"),
    "variants": [
      { "name": "Rampart Aegis GB (Sneak Attack Battle Set) (HB) (Default)", "image": getPartImage("Rampart Aegis GB (Sneak Attack Battle Set)", "blades/rampartaegis/default.webp", "blade"),"displayedName":"Rampart Aegis GB (Sneak Attack Battle Set) (HB)" }
    ]
  },



  // Lock Chips
  {
    "id": "Dran-LockChip",
    "name": "Dran",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 1.74,
    "image": getPartImage("Dran-TT-CX-01", "lock_chips/normal/dran/cx-01.webp", "lock chip"),
    "variants": [
      { "name": "CX-01 (TT) (Default)", "image": getPartImage("Dran-TT-CX-01", "lock_chips/normal/dran/cx-01.webp", "lock chip"), "stackedImage": getPartImage("Dran-TT-CX-01", "lock_chips/stacked/dran/cx-01.webp", "lock chip"),"displayedName":"CX-01 (TT)" },
      { "name": "Courage Dran S 6-60V (Starter) (HB)", "image": getPartImage("Dran-TT-CX-01", "lock_chips/normal/dran/couragedran.webp", "lock chip"), "stackedImage": getPartImage("Dran-TT-CX-01", "lock_chips/stacked/dran/couragedran.webp", "lock chip") },
      { "name": "CX-04 (TT)", "image": getPartImage("Dran-TT-CX-04", "lock_chips/normal/dran/cx-04.webp", "lock chip"), "stackedImage": getPartImage("Dran-TT-CX-04", "lock_chips/stacked/dran/cx-04.webp", "lock chip") },
      { "name": "X-Premium Pass (TT)", "image": getPartImage("Dran-TT-Premium-Chip", "lock_chips/normal/dran/x-premium.webp", "lock chip"), "stackedImage": getPartImage("Dran-TT-Premium-Chip", "lock_chips/stacked/dran/x-premium.webp", "lock chip") },
      { "name": "Corocoro (DranArc) (TT)", "image": getPartImage("Dran-TT-DranArc", "lock_chips/normal/dran/dranarc.webp", "lock chip"), "stackedImage": getPartImage("Dran-TT-DranArc", "lock_chips/stacked/dran/dranarc.webp", "lock chip") },
      { "name": "G1 1st Prize (DranBrave Metal Coat: Gold) (TT)", "image": getPartImage("Dran-TT-G1-1st", "lock_chips/normal/dran/gold.webp", "lock chip"), "stackedImage": getPartImage("Dran-TT-G1-1st", "lock_chips/stacked/dran/gold.webp", "lock chip") },
      { "name": "G1 2nd Prize (DranBrave Metal Coat: Silver) (TT)", "image": getPartImage("Dran-TT-G1-2nd", "lock_chips/normal/dran/silver.webp", "lock chip"), "stackedImage": getPartImage("Dran-TT-G1-2nd", "lock_chips/stacked/dran/silver.webp", "lock chip") },
      { "name": "G1 3rd Prize (DranBrave Metal Coat: Bronze) (TT)", "image": getPartImage("Dran-TT-G1-3rd", "lock_chips/normal/dran/bronze.webp", "lock chip"), "stackedImage": getPartImage("Dran-TT-G1-3rd", "lock_chips/stacked/dran/bronze.webp", "lock chip") }

    ]
  },
  {
    "id": "Wizard-LockChip",
    "name": "Wizard",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 1.72,
    "image": getPartImage("Wizard-TT-CX-02", "lock_chips/normal/wizard/cx-02.webp", "lock chip"),
    "variants": [
      { "name": "CX-02 (TT) (Default)", "image": getPartImage("Wizard-TT-CX-02", "lock_chips/normal/wizard/cx-02.webp", "lock chip"), "stackedImage": getPartImage("Wizard-TT-CX-02", "lock_chips/stacked/wizard/cx-02.webp", "lock chip"),"displayedName":"CX-02 (TT)" },
      { "name": "Arc Wizard R 4-55LO (Starter) (HB)", "image": getPartImage("Wizard-TT-CX-02", "lock_chips/normal/wizard/arcwizard.webp", "lock chip"), "stackedImage": getPartImage("Wizard-TT-CX-02", "lock_chips/stacked/wizard/arcwizard.webp", "lock chip") },
      { "name": "CX-00 (WizardArc Metal Coat: Black) (TT)", "image": getPartImage("Wizard-LockChip-CX-00-Metal-Coat-Black", "lock_chips/normal/wizard/rbg.webp", "lock chip"), "stackedImage": getPartImage("Wizard-LockChip-CX-00-Metal-Coat-Black", "lock_chips/stacked/wizard/rbg.webp", "lock chip") }
    ]
  },
  {
    "id": "Perseus-LockChip",
    "name": "Perseus",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 1.72,
    "image": getPartImage("Perseus-TT-CX-03", "lock_chips/normal/perseus/cx-03.webp", "lock chip"),
    "partStack60": true,
    "variants": [
      { "name": "CX-03 (TT) (Default)", "image": getPartImage("Perseus-TT-CX-03", "lock_chips/normal/perseus/cx-03.webp", "lock chip"), "stackedImage": getPartImage("Perseus-TT-CX-03", "lock_chips/stacked/perseus/cx-03.webp", "lock chip"),"displayedName":"CX-03 (TT)" },
      { "name": "Dark Perseus B 6-80W (Starter) (HB)", "image": getPartImage("Perseus-TT-CX-03", "lock_chips/normal/perseus/darkperseus.webp", "lock chip"), "stackedImage": getPartImage("Perseus-TT-CX-03", "lock_chips/stacked/perseus/darkperseus.webp", "lock chip") },
      { "name": "CX-04 (TT)", "image": getPartImage("Perseus-TT-CX-04", "lock_chips/normal/perseus/cx-04.webp", "lock chip"), "stackedImage": getPartImage("Perseus-TT-CX-04", "lock_chips/stacked/perseus/cx-04.webp", "lock chip") },
      { "name": "G3 1st Prize (TT)", "image": getPartImage("Perseus-TT-G3-Prize", "lock_chips/normal/perseus/gold.webp", "lock chip"), "stackedImage": getPartImage("Perseus-TT-G3-Prize", "lock_chips/stacked/perseus/gold.webp", "lock chip") }
    ]
  },
  {
    "id": "Hells-LockChip",
    "name": "Hells",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 1.73,
    "image": getPartImage("Hells-TT-CX-05-1", "lock_chips/normal/hells/cx-05-1.webp", "lock chip"),
    "identicalId": ["Incendio"],
    "variants": [
      { "name": "CX-05-1 (TT) (Default)", "image": getPartImage("Hells-TT-CX-05-1", "lock_chips/normal/hells/cx-05-1.webp", "lock chip"), "stackedImage": getPartImage("Hells-TT-CX-05-1", "lock_chips/stacked/hells/cx-05-1.webp", "lock chip"),"displayedName":"CX-05-1 (TT)" },
      { "name": "Reaper Incendio T 4-70K (Starter) (HB)", "image": getPartImage("Incendio-HB-Reaper-Incendio-T-4-70K", "lock_chips/normal/hells/reaperincendio.webp", "lock chip"), "stackedImage": getPartImage("Hells-TT-CX-05-1", "lock_chips/stacked/hells/reaperincendio.webp", "lock chip") },
      { "name": "CX-05-3 (TT)", "image": getPartImage("Hells-TT-CX-05-3", "lock_chips/normal/hells/cx-05-3.webp", "lock chip"), "stackedImage": getPartImage("Hells-TT-CX-05-3", "lock_chips/stacked/hells/cx-05-3.webp", "lock chip") },
      { "name": "UX-15 (TT)", "image": getPartImage("Hells-TT-UX-15", "lock_chips/normal/hells/ux-15.webp", "lock chip"), "stackedImage": getPartImage("Hells-TT-UX-15", "lock_chips/stacked/hells/ux-15.webp", "lock chip") }
    ]
  },
  {
    "id": "Rhino-TT",
    "name": "Rhino",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "alsoShowUnder": ["Hasbro"],
    "weight": 1.73,
    "partStack60": true,
    "image": getPartImage("Rhino-TT-CX-05-2", "lock_chips/normal/rhino/cx-05-2.webp", "lock chip"),
    "variants": [
      { "name": "CX-05-2 (Default) (TT)", "image": getPartImage("Rhino-TT-CX-05-2", "lock_chips/normal/rhino/cx-05-2.webp", "lock chip"), "stackedImage": getPartImage("Rhino-TT-CX-05-2", "lock_chips/stacked/rhino/cx-05-2.webp", "lock chip"),"displayedName":"CX-05-2 (TT)" },
      { "name": "Reaper Rhino C 4-55D (Starter) (HB)", "image": getPartImage("Rhino-TT-CX-05-2", "lock_chips/normal/rhino/reaperrhino.webp", "lock chip"), "stackedImage": getPartImage("Rhino-TT-CX-05-2", "lock_chips/stacked/rhino/reaperrhino.webp", "lock chip") }
    ]
  },
  {
    "id": "Fox-LockChip",
    "name": "Fox",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 1.74,
    "image": getPartImage("Fox-TT-CX-06-1", "lock_chips/normal/fox/cx-06-1.webp", "lock chip"),
    "partStack60": true,
    "variants": [
      { "name": "CX-06-1 (TT) (Default)", "image": getPartImage("Fox-TT-CX-06-1", "lock_chips/normal/fox/cx-06-1.webp", "lock chip"), "stackedImage": getPartImage("Fox-TT-CX-06-1", "lock_chips/stacked/fox/cx-06-1.webp", "lock chip"),"displayedName":"CX-06-1 (TT)" },
      { "name": "Brush Fox J 9-70GR (Starter) (HB)", "image": getPartImage("Fox-TT-CX-06-1", "lock_chips/normal/fox/brushfox.webp", "lock chip"), "stackedImage": getPartImage("Fox-TT-CX-06-1", "lock_chips/stacked/fox/brushfox.webp", "lock chip") },
      { "name": "CX-06-2 (TT)", "image": getPartImage("Fox-TT-CX-06-2", "lock_chips/normal/fox/cx-06-2.webp", "lock chip"), "stackedImage": getPartImage("Fox-TT-CX-06-2", "lock_chips/stacked/fox/cx-06-2.webp", "lock chip") },
      { "name": "CX-06-3 (TT)", "image": getPartImage("Fox-TT-CX-06-3", "lock_chips/normal/fox/cx-06-3.webp", "lock chip"), "stackedImage": getPartImage("Fox-TT-CX-06-3", "lock_chips/stacked/fox/cx-06-3.webp", "lock chip") }
    ]
  },
  {
    "id": "Pegasus-TT",
    "name": "Pegasus",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 1.72,
    "image": getPartImage("Pegasus-TT-CX-07", "lock_chips/normal/pegasus/cx-07.webp", "lock chip"),
    "variants": [
      { "name": "CX-07 (TT) (Default)", "image": getPartImage("Pegasus-TT-CX-07", "lock_chips/normal/pegasus/cx-07.webp", "lock chip"), "stackedImage": getPartImage("Pegasus-TT-CX-07", "lock_chips/stacked/pegasus/cx-07.webp", "lock chip"),"displayedName":"CX-07 (TT)" },
      { "name": "Tokyo Toy Show (TT)", "image": getPartImage("Pegasus-TT-Tokyo-Toy-Show", "lock_chips/normal/pegasus/tokyotoy.webp", "lock chip"), "stackedImage": getPartImage("Pegasus-TT-Tokyo-Toy-Show", "lock_chips/stacked/pegasus/tokyotoy.webp", "lock chip") },
      { "name": "UX-18-3 (TT)", "image": getPartImage("Pegasus-TT-UX-18-3", "lock_chips/normal/pegasus/ux-18-3.webp", "lock chip"), "stackedImage": getPartImage("Pegasus-TT-UX-18-3", "lock_chips/stacked/pegasus/ux-18-3.webp", "lock chip") },
      { "name": "Blast Pegasus A Tr (Clip & Rip Launcher Set) (HB)", "image": getPartImage("Pegasus-TT-clip&rip", "lock_chips/normal/pegasus/cx-07.webp", "lock chip"), "stackedImage": getPartImage("Pegasus-TT-clip&rip", "lock_chips/stacked/pegasus/cx-07.webp", "lock chip"), "comingSoon": true },
    ]
  },
  {
    "id": "Cerberus-TT",
    "name": "Cerberus",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 1.71,
    "image": getPartImage("Cerberus-TT-CX-08-1", "lock_chips/normal/cerberus/cx-08-1.webp", "lock chip"),
    "variants": [
      { "name": "CX-08-1 (TT) (Default)", "image": getPartImage("Cerberus-TT-CX-08-1", "lock_chips/normal/cerberus/cx-08-1.webp", "lock chip"), "stackedImage": getPartImage("Cerberus-TT-CX-08-1", "lock_chips/stacked/cerberus/cx-08-1.webp", "lock chip"),"displayedName":"CX-08-1 (TT)" },
      { "name": "CX-08-3 (TT)", "image": getPartImage("Cerberus-TT-CX-08-3", "lock_chips/normal/cerberus/cx-08-3.webp", "lock chip"), "stackedImage": getPartImage("Cerberus-TT-CX-08-3", "lock_chips/stacked/cerberus/cx-08-3.webp", "lock chip") },
      { "name": "Flame Cerberus W 5-80WB (Starter) (HB)", "image": getPartImage("Cerberus-TT-CX-08-1", "lock_chips/normal/cerberus/flamecerberus.webp", "lock chip"), "stackedImage": getPartImage("Cerberus-TT-CX-08-1", "lock_chips/stacked/cerberus/flamecerberus.webp", "lock chip") }
    ]
  },
  {
    "id": "Whale-TT",
    "name": "Whale",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 1.73,
    "image": getPartImage("Whale-TT-CX-08-2", "lock_chips/normal/whale/cx-08-2.webp", "lock chip"),
    "variants": [
      { "name": "CX-08-2 (TT) (Default)", "image": getPartImage("Whale-TT-CX-08-2", "lock_chips/normal/whale/cx-08-2.webp", "lock chip"), "stackedImage": getPartImage("Whale-TT-CX-08-2", "lock_chips/stacked/whale/cx-08-2.webp", "lock chip"),"displayedName":"CX-08-2 (TT)" }
    ]
  },
  {
    "id": "Sol-TT",
    "name": "Sol",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 1.71,
    "image": getPartImage("Sol-TT-CX-09", "lock_chips/normal/sol/cx-09.webp", "lock chip"),
    "partStack60": true,
    "variants": [
      { "name": "CX-09 (TT) (Default)", "image": getPartImage("Sol-TT-CX-09", "lock_chips/normal/sol/cx-09.webp", "lock chip"), "stackedImage": getPartImage("Sol-TT-CX-09", "lock_chips/stacked/sol/cx-09.webp", "lock chip"),"displayedName":"CX-09 (TT)" },
      { "name": "UX-18-4 (TT)", "image": getPartImage("Sol-TT-UX-18-4", "lock_chips/normal/sol/ux-18-4.webp", "lock chip"), "stackedImage": getPartImage("Sol-TT-UX-18-4", "lock_chips/stacked/sol/ux-18-4.webp", "lock chip") }
    ]
  },
  {
    "id": "Wolf-LockChip-TT",
    "name": "Wolf",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 1.71,
    "image": getPartImage("Wolf-TT-CX-10", "lock_chips/normal/wolf/cx-10.webp", "lock chip"),
    "partStack60": true,
    "variants": [
      { "name": "CX-10 (TT) (Default)", "image": getPartImage("Wolf-TT-CX-10", "lock_chips/normal/wolf/cx-10.webp", "lock chip"), "stackedImage": getPartImage("Wolf-TT-CX-10", "lock_chips/stacked/wolf/cx-10.webp", "lock chip"),"displayedName":"CX-10 (TT)" }
    ]
  },
  {
    "id": "Emperor-LockChip-TT",
    "name": "Emperor",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 4.76,
    "image": getPartImage("Emperor-TT-CX-11", "lock_chips/normal/emperor/cx-11.webp", "lock chip"),
    "unique": true,
    "type": "Metal",
    "variants": [
      { "name": "CX-11 (TT) (Default)", "image": getPartImage("Emperor-TT-CX-11", "lock_chips/normal/emperor/cx-11.webp", "lock chip"), "stackedImage": getPartImage("Emperor-TT-CX-11", "lock_chips/stacked/emperor/cx-11.webp", "lock chip"),"displayedName":"CX-11 (TT)" },
      { "name": "X-Treme Battlers Pack (HB)", "image": getPartImage("Emperor-HB-XBP", "lock_chips/normal/emperor/xbp.webp", "lock chip"), "stackedImage": getPartImage("Emperor-HB-XBP", "lock_chips/stacked/emperor/xbp.webp", "lock chip") }
    ]
  },
  {
    "id": "Valkyrie-TT",
    "name": "Valkyrie",
    "category": "Lock Chip",
    "series": ["CX", "Rare Bey Get"],
    "company": "Takara Tomy",
    "type": "Metal",
    "spinDirection": "Right",
    "weight": 5.60,
    "identicalId": ["Valkerion"],
    "image": getPartImage("Valkyrie-TT-CX-00-Rare-Bey-Get", "lock_chips/normal/valkyrie/rbg.webp", "lock chip"),
    "partStack60": true,
    "unique": true,
    "variants": [
      { "name": "CX-00 Rare Bey Get (TT) (Default)", "image": getPartImage("Valkyrie-TT-CX-00-Rare-Bey-Get", "lock_chips/normal/valkyrie/rbg.webp", "lock chip"), "stackedImage": getPartImage("Valkyrie-TT-CX-00-Rare-Bey-Get", "lock_chips/stacked/valkyrie/rbg.webp", "lock chip"),"displayedName":"CX-00 Rare Bey Get (TT)" }
    ]
  },
  {
    "id": "Hornet-Hasbro",
    "name": "Hornet",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 1.76,
    "partStack60": true,
    "image": getPartImage("Hornet-Hasbro-Fort-Hornet-R-7-60T", "lock_chips/normal/hornet/forthornet.webp", "lock chip"),
    "variants": [
      { "name": "Fort Hornet R 7-60T (Starter) (HB) (Default)", "image": getPartImage("Hornet-Hasbro-Fort-Hornet-R-7-60T", "lock_chips/normal/hornet/forthornet.webp", "lock chip"), "stackedImage": getPartImage("Hornet-Hasbro-Fort-Hornet-R-7-60T", "lock_chips/stacked/hornet/forthornet.webp", "lock chip"),"displayedName":"Fort Hornet R 7-60T (HB)" }
    ]
  },
  {
    "id": "Kraken-Hasbro",
    "name": "Kraken",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 1.76,
    "image": getPartImage("Kraken-Hasbro-Wriggle-Kraken-S-3-85O", "lock_chips/normal/kraken/wrigglekraken.webp", "lock chip"),
    "variants": [
      { "name": "Wriggle Kraken S 3-85O (Starter) (HB) (Default)", "image": getPartImage("Kraken-Hasbro-Wriggle-Kraken-S-3-85O", "lock_chips/normal/kraken/wrigglekraken.webp", "lock chip"), "stackedImage": getPartImage("Kraken-Hasbro-Wriggle-Kraken-S-3-85O", "lock_chips/stacked/kraken/wrigglekraken.webp", "lock chip"),"displayedName":"Wriggle Kraken S 3-85O (HB)" }
    ]
  },
  {
    "id": "Stag-Hasbro",
    "name": "Stag",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 1.75,
    "image": getPartImage("Stag-Hasbro-Antler-Stag-B-2-60HN", "lock_chips/normal/stag/antlerstag.webp", "lock chip"),
    "partStack60": true,
    "variants": [
      { "name": "Antler Stag B 2-60HN (Starter) (HB) (Default)", "image": getPartImage("Stag-Hasbro-Antler-Stag-B-2-60HN", "lock_chips/normal/stag/antlerstag.webp", "lock chip"), "stackedImage": getPartImage("Stag-Hasbro-Antler-Stag-B-2-60HN", "lock_chips/stacked/stag/antlerstag.webp", "lock chip"),"displayedName":"Antler Stag B 2-60HN (HB)" }
    ]
  },
  {
    "id": "Leon-TT",
    "name": "Leon",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 1.70,
    "image": getPartImage("Leon-TT", "lock_chips/normal/leon/evobattle.webp", "lock chip"),
    "variants": [
      { "name": "Beyblade X Evobattle (LeonFang) (TT) (Default)", "image": getPartImage("Leon-TT-Evobattle", "lock_chips/normal/leon/evobattle.webp", "lock chip"), "stackedImage": getPartImage("Leon-TT-Evobattle", "lock_chips/stacked/leon/evobattle.webp", "lock chip"),"displayedName":"Beyblade X Evobattle (LeonFang) (TT)" },
      { "name": "Fang Leon T 4-60U (Starter) (HB)", "image": getPartImage("Leon-TT-leonfang", "lock_chips/normal/leon/fangleon.webp", "lock chip"), "stackedImage": getPartImage("Leon-TT-leonfang", "lock_chips/stacked/leon/fangleon.webp", "lock chip") }
    ]
  },
  {
    "id": "Phoenix-TT",
    "name": "Phoenix",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 1.72,
    "partStack60": true,
    "image": getPartImage("Phoenix-TT", "lock_chips/normal/phoenix/cx-12.webp", "lock chip"),
    "variants": [
      { "name": "CX-12 (TT) (Default)", "image": getPartImage("Phoenix-TT", "lock_chips/normal/phoenix/cx-12.webp", "lock chip"), "stackedImage": getPartImage("Phoenix-TT", "lock_chips/stacked/phoenix/cx-12.webp", "lock chip"),"displayedName":"CX-12 (TT)" }
    ]
  },
  {
    "id": "Bahamut",
    "name": "Bahamut",
    "category": "Lock Chip",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "alsoShowUnder": ["Hasbro"],
    "weight": 1.71,
    "partStack60": true,
    "image": getPartImage("Bahamut", "lock_chips/normal/bahamut/cx-13.webp", "lock chip"),
    "variants": [
      { "name": "CX-13 (TT) (Default)", "image": getPartImage("Bahamut-cx-13", "lock_chips/normal/bahamut/cx-13.webp", "lock chip"), "stackedImage": getPartImage("Bahamut-cx-13", "lock_chips/stacked/bahamut/cx-13.webp", "lock chip"),"displayedName":"CX-13 (TT)" },
      { "name": "CX-16 (TT)", "image": getPartImage("Bahamut-StartDash", "lock_chips/normal/bahamut/cx-16.webp", "lock chip"), "stackedImage": getPartImage("Bahamut-StartDash", "lock_chips/stacked/bahamut/cx-16.webp", "lock chip") },
      { "name": "Blitz Bahamut BK 1-50I (Starter) (HB)", "image": getPartImage("Bahamut-cx-13", "lock_chips/normal/bahamut/cx-13.webp", "lock chip"), "stackedImage": getPartImage("Bahamut-cx-13", "lock_chips/stacked/bahamut/cx-13.webp", "lock chip"), "comingSoon":true  },
      { "name": "Corocoro (BahamutBlitz Metal Coat: Yellow) (TT)", "image": getPartImage("Bahamut-Corocoro-Yellow", "lock_chips/normal/bahamut/corocoro_yellow.webp", "lock chip",), "stackedImage": getPartImage("Bahamut-corocoro-yellow", "lock_chips/stacked/bahamut/corocoro_yellow.webp", "lock chip",)},
    ]
  },
  {
    "id": "Knight",
    "name": "Knight",
    "category": "Lock Chip",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "alsoShowUnder": ["Hasbro"],
    "weight": 1.72,
    "partStack60": true,
    "image": getPartImage("Knight-cx-14", "lock_chips/normal/knight/cx-14.webp", "lock chip"),
    "variants": [
      { "name": "CX-14 (TT) (Default)", "image": getPartImage("Knight-cx-14", "lock_chips/normal/knight/cx-14.webp", "lock chip"), "stackedImage": getPartImage("Knight-cx-14", "lock_chips/stacked/knight/cx-14.webp", "lock chip"),"displayedName":"CX-14 (TT)" },
      { "name": "Armor Knight GV 8-70UN (Starter) (HB)", "image": getPartImage("Knight-cx-14", "lock_chips/normal/knight/cx-14.webp", "lock chip"), "stackedImage": getPartImage("Knight-cx-14", "lock_chips/stacked/knight/cx-14.webp", "lock chip") }
    ]
  },
  {
    "id": "Ragna",
    "name": "Ragna",
    "category": "Lock Chip",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "alsoShowUnder": ["Hasbro"],
    "weight": 1.71,
    "partStack60": true,
    "image": getPartImage("Ragna-cx-15", "lock_chips/normal/ragna/cx-15.webp", "lock chip"),
    "variants": [
      { "name": "CX-15 (TT) (Default)", "image": getPartImage("Ragna-cx-15", "lock_chips/normal/ragna/cx-15.webp", "lock chip"), "stackedImage": getPartImage("Ragna-cx-15", "lock_chips/stacked/ragna/cx-15.webp", "lock chip"),"displayedName":"CX-15 (TT)" },
      { "name": "Rage Ragna FE 4-55Y (Starter) (HB)", "image": getPartImage("Ragna-cx-15", "lock_chips/normal/ragna/cx-15.webp", "lock chip"), "stackedImage": getPartImage("Ragna-cx-15", "lock_chips/stacked/ragna/cx-15.webp", "lock chip") }
    ]
  },
  {
    "id": "Eva",
    "name": "Eva",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "comingSoon": true,
    "weight": 1.71,
    "image": getPartImage("Eva-01", "lock_chips/normal/eva/eva01.webp", "lock chip"),
    "variants": [
      { "name": "Evangelion Test Type-01 (TT) (Default)", "image": getPartImage("Eva-01", "lock_chips/normal/eva/eva01.webp", "lock chip"), "stackedImage": getPartImage("eva-01", "lock_chips/stacked/eva/eva01.webp", "lock chip"),"displayedName":"Evangelion Test Type-01 (TT)" },
      { "name": "Evangelion Proto Type-00 (TT)", "image": getPartImage("Eva-00", "lock_chips/normal/eva/eva00.webp", "lock chip"), "stackedImage": getPartImage("eva-00", "lock_chips/stacked/eva/eva00.webp", "lock chip") },
      { "name": "Evangelion Production Model-02 (TT)", "image": getPartImage("Eva-02", "lock_chips/normal/eva/eva02.webp", "lock chip"), "stackedImage": getPartImage("eva-02", "lock_chips/stacked/eva/eva02.webp", "lock chip"), "partStack60": true },
    ]
  },
  {
    "id": "Unicorn",
    "name": "Unicorn",
    "category": "Lock Chip",
    "series": ["CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "comingSoon": true,
    "partStack60":true,
    "weight": 1.71,
    "image": getPartImage("Unicorn", "lock_chips/normal/unicorn/cx-17-1.webp", "lock chip"),
    "variants": [
      { "name": "CX-17-1 (TT) (Default)", "image": getPartImage("Unicorn", "lock_chips/normal/unicorn/cx-17-1.webp", "lock chip"), "stackedImage": getPartImage("unicorn", "lock_chips/stacked/unicorn/cx-17-1.webp", "lock chip"),"displayedName":"CX-17-1 (TT)" },
      { "name": "CX-17-2 (TT)", "image": getPartImage("Unicorn", "lock_chips/normal/unicorn/cx-17-2.webp", "lock chip",), "stackedImage": getPartImage("unicorn", "lock_chips/stacked/unicorn/cx-17-2.webp", "lock chip",) },
    ]
  },

  // Over Blades
  {
    "id": "B-Break",
    "name": "B (Break)",
    "category": "Over Blade",
    "type": "Attack",
    "series": ["CXE", "CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 3.78,
    "image": getPartImage("B-Break-cx-13", "over_blades/normal/b/cx-13.webp", "Over Blade"),
    "variants": [
      { "name": "CX-13 (TT) (Default)", "image": getPartImage("B-Break-cx-13", "over_blades/normal/b/cx-13.webp", "Over Blade"), "stackedImage": getPartImage("B-Break-cx-13", "over_blades/stacked/b/cx-13.webp", "Over Blade"),"displayedName":"CX-13 (TT)" },
      { "name": "CX-16 (TT)", "image": getPartImage("B-Break-cx-16", "over_blades/normal/b/cx-16.webp", "Over Blade"), "stackedImage": getPartImage("B-Break-cx-16", "over_blades/stacked/b/cx-16.webp", "Over Blade") },
      { "name": "Blitz Bahamut BK 1-50I (Starter) (HB)", "image": getPartImage("B-Break-cx-13", "over_blades/normal/b/cx-13.webp", "Over Blade"), "stackedImage": getPartImage("B-Break-cx-13", "over_blades/stacked/b/cx-13.webp", "Over Blade"), "comingSoon":true  },
      { "name": "Corocoro (BahamutBlitz Metal Coat: Yellow) (TT)", "image": getPartImage("B-Break-corocoro-yellow", "over_blades/normal/b/corocoro_yellow.webp", "Over Blade",), "stackedImage": getPartImage("B-Break-corocoro-yellow", "over_blades/stacked/b/corocoro_yellow.webp", "Over Blade",)},
    ]
  },
  {
    "id": "G-Guard",
    "name": "G (Guard)",
    "category": "Over Blade",
    "type": "Defense",
    "series": ["CXE", "CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 3.35,
    "image": getPartImage("G-Guard-cx-14", "over_blades/normal/g/cx-14.webp", "Over Blade"),
    "variants": [
      { "name": "CX-14 (TT) (Default)", "image": getPartImage("G-Guard-cx-14", "over_blades/normal/g/cx-14.webp", "Over Blade"), "stackedImage": getPartImage("G-Guard-cx-14", "over_blades/stacked/g/cx-14.webp", "Over Blade"),"displayedName":"CX-14 (TT)" },
      { "name": "Armor Knight GV 8-70UN (Starter) (HB)", "image": getPartImage("G-Guard-cx-14", "over_blades/normal/g/cx-14.webp", "Over Blade"), "stackedImage": getPartImage("G-Guard-cx-14", "over_blades/stacked/g/cx-14.webp", "Over Blade") },
    ]
  },
  {
    "id": "F-Flow",
    "name": "F (Flow)",
    "category": "Over Blade",
    "type": "Stamina",
    "series": ["CXE", "CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 3.74,
    "image": getPartImage("F-Flow-cx-15", "over_blades/normal/f/cx-15.webp", "Over Blade"),
    "variants": [
      { "name": "CX-15 (TT) (Default)", "image": getPartImage("F-Flow-cx-15", "over_blades/normal/f/cx-15.webp", "Over Blade"), "stackedImage": getPartImage("F-Flow-cx-15", "over_blades/stacked/f/cx-15.webp", "Over Blade"),"displayedName":"CX-15 (TT)" },
      { "name": "Rage Ragna FE 4-55Y (Starter) (HB)", "image": getPartImage("F-Flow-cx-15", "over_blades/normal/f/cx-15.webp", "Over Blade"), "stackedImage": getPartImage("F-Flow-cx-15", "over_blades/stacked/f/cx-15.webp", "Over Blade") },
    ]
  },
  {
    "id": "P-Peak",
    "name": "P (Peak)",
    "category": "Over Blade",
    "type": "Balance",
    "series": ["CXE", "CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "comingSoon": true,
    //"weight": 3.74,
    "image": getPartImage("P-Peak-cx-17-1", "over_blades/normal/p/cx-17-1.webp", "Over Blade"),
    "variants": [
      { "name": "CX-17-1 (TT) (Default)", "image": getPartImage("P-Peak-cx-17-1", "over_blades/normal/p/cx-17-1.webp", "Over Blade"), "stackedImage": getPartImage("P-Peak-cx-17-1", "over_blades/stacked/p/cx-17-1.webp", "Over Blade"),"displayedName":"CX-17-1 (TT)" },
      { "name": "CX-17-2 (TT)", "image": getPartImage("P-Peak-cx-17-2", "over_blades/normal/p/cx-17-2.webp", "Over Blade",), "stackedImage": getPartImage("P-Peak-cx-17-2", "over_blades/stacked/p/cx-17-2.webp", "Over Blade",),"displayedName":"CX-17-2 (TT)" },
    ]
  },

  // Metal Blades
  {
    "id": "Blitz",
    "name": "Blitz",
    "category": "Metal Blade",
    "type": "Attack",
    "series": ["CXE", "CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 29.84,
    "image": getPartImage("Blitz-cx-13", "metal_blades/normal/blitz/cx-13.webp", "Metal Blade"),
    "variants": [
      { "name": "CX-13 (TT) (Default)", "image": getPartImage("Blitz-cx-13", "metal_blades/normal/blitz/cx-13.webp", "Metal Blade"), "stackedImage": getPartImage("Blitz-cx-13", "metal_blades/stacked/blitz/cx-13.webp", "Metal Blade"),"displayedName":"CX-13 (TT)" },
      { "name": "CX-16 (TT)", "image": getPartImage("Blitz-cx-16", "metal_blades/normal/blitz/cx-16.webp", "Metal Blade"), "stackedImage": getPartImage("Blitz-cx-16", "metal_blades/stacked/blitz/cx-16.webp", "Metal Blade") },
      { "name": "Blitz Bahamut BK 1-50I (Starter) (HB)", "image": getPartImage("Blitz-cx-13", "metal_blades/normal/blitz/cx-13.webp", "Metal Blade"), "stackedImage": getPartImage("Blitz-cx-13", "metal_blades/stacked/blitz/cx-13.webp", "Metal Blade"), "comingSoon":true  },
      { "name": "Corocoro (BahamutBlitz Metal Coat: Yellow) (TT)", "image": getPartImage("Blitz-corocoro-yellow", "metal_blades/normal/blitz/corocoro_yellow.webp", "Metal Blade",), "stackedImage": getPartImage("Blitz-corocoro-yellow", "metal_blades/stacked/blitz/corocoro_yellow.webp", "Metal Blade",)},
    ]
  },
  {
    "id": "Fortress",
    "name": "Fortress",
    "category": "Metal Blade",
    "type": "Defense",
    "series": ["CXE", "CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "identicalId": ["Armor"],
    "spinDirection": "Right",
    "weight": 27.44,
    "image": getPartImage("Fortress-cx-14", "metal_blades/normal/fortress/cx-14.webp", "Metal Blade"),
    "variants": [
      { "name": "CX-14 (TT) (Default)", "image": getPartImage("Fortress-cx-14", "metal_blades/normal/fortress/cx-14.webp", "Metal Blade"), "stackedImage": getPartImage("Fortress-cx-14", "metal_blades/stacked/fortress/cx-14.webp", "Metal Blade"),"displayedName":"CX-14 (TT)" },
      { "name": "Armor Knight GV 8-70UN (Starter) (HB)", "image": getPartImage("Fortress-cx-14", "metal_blades/normal/fortress/cx-14.webp", "Metal Blade"), "stackedImage": getPartImage("Fortress-cx-14", "metal_blades/stacked/fortress/cx-14.webp", "Metal Blade") },
    ]
  },
  {
    "id": "Rage",
    "name": "Rage",
    "category": "Metal Blade",
    "type": "Stamina",
    "series": ["CXE", "CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 27.11,
    "image": getPartImage("Rage-cx-15", "metal_blades/normal/rage/cx-15.webp", "Metal Blade"),
    "variants": [
      { "name": "CX-15 (TT) (Default)", "image": getPartImage("Rage-cx-15", "metal_blades/normal/rage/cx-15.webp", "Metal Blade"), "stackedImage": getPartImage("Rage-cx-15", "metal_blades/stacked/rage/cx-15.webp", "Metal Blade"),"displayedName":"CX-15 (TT)" },
      { "name": "Rage Ragna FE 4-55Y (Starter) (HB)", "image": getPartImage("Rage-cx-15", "metal_blades/normal/rage/cx-15.webp", "Metal Blade"), "stackedImage": getPartImage("Rage-cx-15", "metal_blades/stacked/rage/cx-15.webp", "Metal Blade") },
    ]
  },
  {
    "id": "Delta",
    "name": "Delta",
    "category": "Metal Blade",
    "type": "Balance",
    "series": ["CXE", "CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "comingSoon":true,
    //"weight": 27.11,
    "image": getPartImage("Delta-cx-17-1", "metal_blades/normal/delta/cx-17-1.webp", "Metal Blade"),
    "variants": [
      { "name": "CX-17-1 (TT) (Default)", "image": getPartImage("Delta-cx-17-1", "metal_blades/normal/delta/cx-17-1.webp", "Metal Blade"), "stackedImage": getPartImage("Delta-cx-17-1", "metal_blades/stacked/delta/cx-17-1.webp", "Metal Blade"),"displayedName":"CX-17-1 (TT)" },
      { "name": "CX-17-2 (TT)", "image": getPartImage("Delta-cx-17-2", "metal_blades/normal/delta/cx-17-2.webp", "Metal Blade",), "stackedImage": getPartImage("Delta-cx-17-2", "metal_blades/stacked/delta/cx-17-2.webp", "Metal Blade",)},
    ]
  },


  // Main Blades
  {
    "id": "Brave-TT",
    "name": "Brave",
    "category": "Blade",
    "type": "Attack",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 31.15,
    "image": getPartImage("Brave-TT-CX-01", "main_blades/normal/brave/cx-01.webp", "blade"),
    "identicalId": ["Courage"],
    "variants": [
      { "name": "CX-01 (TT) (Default)", "image": getPartImage("Brave-TT-CX-01", "main_blades/normal/brave/cx-01.webp", "blade"), "stackedImage": getPartImage("Brave-TT-CX-01", "main_blades/stacked/brave/cx-01.webp", "blade"),"displayedName":"CX-01 (TT)" },
      { "name": "Courage Dran S 6-60V (Starter) (HB)", "image": getPartImage("Brave-TT-CX-01", "main_blades/normal/brave/couragedran.webp", "blade"), "stackedImage": getPartImage("Brave-TT-CX-01", "main_blades/stacked/brave/couragedran.webp", "blade") },
      { "name": "CX-04 (TT)", "image": getPartImage("Brave-TT-CX-04", "main_blades/normal/brave/cx-04.webp", "blade"), "stackedImage": getPartImage("Brave-TT-CX-04", "main_blades/stacked/brave/cx-04.webp", "blade") },
      { "name": "UX-15 (TT)", "image": getPartImage("Brave-TT-UX-15", "main_blades/normal/brave/ux-15.webp", "blade"), "stackedImage": getPartImage("Brave-TT-UX-15", "main_blades/stacked/brave/ux-15.webp", "blade") },
      { "name": "G1 1st Prize (DranBrave Metal Coat: Gold) (TT)", "image": getPartImage("Brave-TT-G1-1st", "main_blades/normal/brave/gold.webp", "blade"), "stackedImage": getPartImage("Brave-TT-G1-1st", "main_blades/stacked/brave/gold.webp", "blade") },
      { "name": "G1 2nd Prize (DranBrave Metal Coat: Silver) (TT)", "image": getPartImage("Brave-TT-G1-2nd", "main_blades/normal/brave/silver.webp", "blade"), "stackedImage": getPartImage("Brave-TT-G1-2nd", "main_blades/stacked/brave/silver.webp", "blade") },
      { "name": "G1 3rd Prize (DranBrave Metal Coat: Bronze) (TT)", "image": getPartImage("Brave-TT-G1-3rd", "main_blades/normal/brave/bronze.webp", "blade"), "stackedImage": getPartImage("Brave-TT-G1-3rd", "main_blades/stacked/brave/bronze.webp", "blade") },
      { "name": "UX-18-4 (TT)", "image": getPartImage("Brave-TT-UX-18-4", "main_blades/normal/brave/ux-18-4.webp", "blade"), "stackedImage": getPartImage("Brave-TT-UX-18-4", "main_blades/stacked/brave/ux-18-4.webp", "blade") },
      { "name": "Evangelion Deck Set (TT)", "image": getPartImage("Brave-TT-evangelion", "main_blades/normal/brave/evangelion.webp", "blade"), "stackedImage": getPartImage("Brave-TT-UX-18-4", "main_blades/stacked/brave/evangelion.webp", "blade"), "comingSoon":true }

    ]
  },
  {
    "id": "Brush-TT",
    "name": "Brush",
    "category": "Blade",
    "type": "Attack",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 30.27,
    "image": getPartImage("Brush-TT-CX-06-1", "main_blades/normal/brush/cx-06-1.webp", "blade"),
    "variants": [
      { "name": "CX-06-1 (TT) (Default)", "image": getPartImage("Brush-TT-CX-06-1", "main_blades/normal/brush/cx-06-1.webp", "blade"), "stackedImage": getPartImage("Brush-TT-CX-06-1", "main_blades/stacked/brush/cx-06-1.webp", "blade"),"displayedName":"CX-06-1 (TT)" },
      { "name": "Brush Fox J 9-70GR (Starter) (HB)", "image": getPartImage("Brush-TT-CX-06-1", "main_blades/normal/brush/brushfox.webp", "blade"), "stackedImage": getPartImage("Brush-TT-CX-06-1", "main_blades/stacked/brush/brushfox.webp", "blade") },
      { "name": "CX-06-2 (TT)", "image": getPartImage("Brush-TT-CX-06-2", "main_blades/normal/brush/cx-06-2.webp", "blade"), "stackedImage": getPartImage("Brush-TT-CX-06-2", "main_blades/stacked/brush/cx-06-2.webp", "blade") },
      { "name": "CX-06-3 (TT)", "image": getPartImage("Brush-TT-CX-06-3", "main_blades/normal/brush/cx-06-3.webp", "blade"), "stackedImage": getPartImage("Brush-TT-CX-06-3", "main_blades/stacked/brush/cx-06-3.webp", "blade") },
      { "name": "UX-18-3 (TT)", "image": getPartImage("Brush-TT-UX-18-3", "main_blades/normal/brush/ux-18-3.webp", "blade"), "stackedImage": getPartImage("Brush-TT-UX-18-3", "main_blades/stacked/brush/ux-18-3.webp", "blade") },
      { "name": "Evangelion Deck Set (TT)", "image": getPartImage("Brush-TT-evangelion", "main_blades/normal/brush/evangelion.webp", "blade"), "stackedImage": getPartImage("Brush-TT-evangelion", "main_blades/stacked/brush/evangelion.webp", "blade"), "comingSoon":true }
    ]
  },
  {
    "id": "Blast-TT",
    "name": "Blast",
    "category": "Blade",
    "type": "Attack",
    "series": ["CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 32.76,
    "image": getPartImage("Blast-TT-CX-07", "main_blades/normal/blast/cx-07.webp", "blade"),
    "variants": [
      { "name": "CX-07 (TT) (Default)", "image": getPartImage("Blast-TT-CX-07", "main_blades/normal/blast/cx-07.webp", "blade"), "stackedImage": getPartImage("Blast-TT-CX-07", "main_blades/stacked/blast/cx-07.webp", "blade"),"displayedName":"CX-07 (TT)" },
      { "name": "Tokyo Toy Show (TT)", "image": getPartImage("Blast-TT-Tokyo-Toy-Show", "main_blades/normal/blast/tokyotoy.webp", "blade"), "stackedImage": getPartImage("Blast-TT-Tokyo-Toy-Show", "main_blades/stacked/blast/tokyotoy.webp", "blade") },
      { "name": "Blast Pegasus A Tr (Clip & Rip Launcher Set) (HB)", "image": getPartImage("Blast-TT-clip&rip", "main_blades/normal/blast/cx-07.webp", "blade"), "stackedImage": getPartImage("Blast-TT-clip&rip", "main_blades/stacked/blast/cx-07.webp", "blade"), "comingSoon":true },
    ]
  },
  {
    "id": "Volt-TT",
    "name": "Volt",
    "category": "Blade",
    "type": "Attack",
    "series": ["CX", "Rare Bey Get"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 31.08,
    "image": getPartImage("Volt-TT-CX-00-Rare-Bey-Get", "main_blades/normal/volt/cx-00.webp", "blade"),
    "variants": [
      { "name": "CX-00 Rare Bey Get (TT) (Default)", "image": getPartImage("Volt-TT-CX-00-Rare-Bey-Get", "main_blades/normal/volt/cx-00.webp", "blade"), "stackedImage": getPartImage("Volt-TT-CX-00-Rare-Bey-Get", "main_blades/stacked/volt/cx-00.webp", "blade"),"displayedName":"CX-00 Rare Bey Get (TT)" }
    ]
  },
  {
    "id": "Dark-TT",
    "name": "Dark",
    "category": "Blade",
    "type": "Defense",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 30.45,
    "image": getPartImage("Dark-TT-CX-03", "main_blades/normal/dark/cx-03.webp", "blade"),
    "variants": [
      { "name": "CX-03 (TT) (Default)", "image": getPartImage("Dark-TT-CX-03", "main_blades/normal/dark/cx-03.webp", "blade"), "stackedImage": getPartImage("Dark-TT-CX-03", "main_blades/stacked/dark/cx-03.webp", "blade"),"displayedName":"CX-03 (TT)" },
      { "name": "Dark Perseus B 6-80W (Starter) (HB)", "image": getPartImage("Dark-TT-CX-03", "main_blades/normal/dark/cx-03.webp", "blade"), "stackedImage": getPartImage("Dark-TT-CX-03", "main_blades/stacked/dark/cx-03.webp", "blade") },
      { "name": "CX-04 (TT)", "image": getPartImage("Dark-TT-CX-04", "main_blades/normal/dark/cx-04.webp", "blade"), "stackedImage": getPartImage("Dark-TT-CX-04", "main_blades/stacked/dark/cx-04.webp", "blade") },
      { "name": "CX-08-3 (TT)", "image": getPartImage("Dark-TT-CX-08-3", "main_blades/normal/dark/cx-08-3.webp", "blade"), "stackedImage": getPartImage("Dark-TT-CX-08-3", "main_blades/stacked/dark/cx-08-3.webp", "blade") },
      { "name": "G3 1st Prize (TT)", "image": getPartImage("Dark-TT-G3-1st-Prize", "main_blades/normal/dark/gold.webp", "blade"), "stackedImage": getPartImage("Dark-TT-G3-1st-Prize", "main_blades/stacked/dark/gold.webp", "blade") }
    ]
  },
  {
    "id": "Arc-TT",
    "name": "Arc",
    "category": "Blade",
    "type": "Stamina",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 29.29,
    "image": getPartImage("Arc-TT-CX-02", "main_blades/normal/arc/cx-02.webp", "blade"),
    "variants": [
      { "name": "CX-02 (TT) (Default)", "image": getPartImage("Arc-TT-CX-02", "main_blades/normal/arc/cx-02.webp", "blade"), "stackedImage": getPartImage("Arc-TT-CX-02", "main_blades/stacked/arc/cx-02.webp", "blade"),"displayedName":"CX-02 (TT)" },
      { "name": "Arc Wizard R 4-55LO (Starter) (HB)", "image": getPartImage("Arc-TT-CX-02", "main_blades/normal/arc/cx-02.webp", "blade"), "stackedImage": getPartImage("Arc-TT-CX-02", "main_blades/stacked/arc/cx-02.webp", "blade") },
      { "name": "CX-05-3 (TT)", "image": getPartImage("Arc-TT-CX-05-3", "main_blades/normal/arc/cx-05-3.webp", "blade"), "stackedImage": getPartImage("Arc-TT-CX-05-3", "main_blades/stacked/arc/cx-05-3.webp", "blade") },
      { "name": "CX-00 (WizardArc Metal Coat: Black) (TT)", "image": getPartImage("Arc-Blade-CX-00-Metal-Coat-Black", "main_blades/normal/arc/rbg.webp", "blade"), "stackedImage": getPartImage("Arc-Blade-CX-00-Metal-Coat-Black", "main_blades/stacked/arc/rbg.webp", "blade") },
      { "name": "Corocoro (DranArc) (TT)", "image": getPartImage("Arc-Blade-DranArc", "main_blades/normal/arc/dranarc.webp", "blade"), "stackedImage": getPartImage("Arc-Blade-DranArc", "main_blades/stacked/arc/dranarc.webp", "blade") },
      { "name": "Evangelion Deck Set (TT)", "image": getPartImage("Arc-Blade-evangelion", "main_blades/normal/arc/evangelion.webp", "blade"), "stackedImage": getPartImage("Arc-Blade-evangelion", "main_blades/stacked/arc/evangelion.webp", "blade"), "comingSoon":true }

    ]
  },
  {
    "id": "Flame-TT",
    "name": "Flame",
    "category": "Blade",
    "type": "Stamina",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 28.57,
    "image": getPartImage("Flame-TT-CX-08-1", "main_blades/normal/flame/cx-08-1.webp", "blade"),
    "variants": [
      { "name": "CX-08-1 (TT) (Default)", "image": getPartImage("Flame-TT-CX-08-1", "main_blades/normal/flame/cx-08-1.webp", "blade"), "stackedImage": getPartImage("Flame-TT-CX-08-1", "main_blades/stacked/flame/cx-08-1.webp", "blade"),"displayedName":"CX-08-1 (TT)" },
      { "name": "CX-08-2 (TT)", "image": getPartImage("Flame-TT-CX-08-2", "main_blades/normal/flame/cx-08-2.webp", "blade"), "stackedImage": getPartImage("Flame-TT-CX-08-2", "main_blades/stacked/flame/cx-08-2.webp", "blade") },
      { "name": "Flame Cerberus W 5-80WB (Starter) (HB)", "image": getPartImage("Flame-TT-CX-08-1", "main_blades/normal/flame/cx-08-1.webp", "blade"), "stackedImage": getPartImage("Flame-TT-CX-08-1", "main_blades/stacked/flame/cx-08-1.webp", "blade") },
    ]
  },
  {
    "id": "Hunt-TT",
    "name": "Hunt",
    "category": "Blade",
    "type": "Stamina",
    "series": ["CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 31.49,
    "image": getPartImage("Hunt-TT-CX-10", "main_blades/normal/hunt/cx-10.webp", "blade"),
    "variants": [
      { "name": "CX-10 (TT) (Default)", "image": getPartImage("Hunt-TT-CX-10", "main_blades/normal/hunt/cx-10.webp", "blade"), "stackedImage": getPartImage("Hunt-TT-CX-10", "main_blades/stacked/hunt/cx-10.webp", "blade"),"displayedName":"CX-10 (TT)" }
    ]
  },
  {
    "id": "Reaper-TT",
    "name": "Reaper",
    "category": "Blade",
    "type": "Balance",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 29.05,
    "image": getPartImage("Reaper-TT-CX-05-1", "main_blades/normal/reaper/cx-05-1.webp", "blade"),
    "variants": [
      { "name": "CX-05-1 (TT) (Default)", "image": getPartImage("Reaper-TT-CX-05-1", "main_blades/normal/reaper/cx-05-1.webp", "blade"), "stackedImage": getPartImage("Reaper-TT-CX-05-1", "main_blades/stacked/reaper/cx-05-1.webp", "blade"),"displayedName":"CX-05-1 (TT)" },
      { "name": "Reaper Incendio T 4-70K (Starter) (HB)", "image": getPartImage("Reaper-TT-CX-05-1", "main_blades/normal/reaper/cx-05-1.webp", "blade"), "stackedImage": getPartImage("Reaper-TT-CX-05-1", "main_blades/stacked/reaper/cx-05-1.webp", "blade") },
      { "name": "CX-05-2 (TT)", "image": getPartImage("Reaper-TT-CX-05-2", "main_blades/normal/reaper/cx-05-2.webp", "blade"), "stackedImage": getPartImage("Reaper-TT-CX-05-2", "main_blades/stacked/reaper/cx-05-2.webp", "blade") },
      { "name": "Reaper Rhino C 4-55D (Starter) (HB)", "image": getPartImage("Reaper-TT-CX-05-2", "main_blades/normal/reaper/cx-05-2.webp", "blade"), "stackedImage": getPartImage("Reaper-TT-CX-05-2", "main_blades/stacked/reaper/cx-05-2.webp", "blade") }
    ]
  },
  {
    "id": "Eclipse-TT",
    "name": "Eclipse",
    "category": "Blade",
    "type": "Balance",
    "series": ["CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "weight": 32.34,
    "image": getPartImage("Eclipse-TT-CX-09-Sun-Mode", "main_blades/normal/eclipse/cx-09_sun.webp", "blade"),
    "attributes": ["Mode Change"],
    "identicalId": ["Umbra"],
    "variants": [
      {
        "name": "CX-09 (TT)",
        "image": getPartImage("Eclipse-TT-CX-09-Sun-Mode", "main_blades/normal/eclipse/cx-09_sun.webp", "blade"),
        "modes": [
          { "name": "CX-09 (Sun Mode) (TT)", "image": getPartImage("Eclipse-TT-CX-09-Sun-Mode", "main_blades/normal/eclipse/cx-09_sun.webp", "blade"), "stackedImage": getPartImage("Eclipse-TT-CX-09-Sun-Mode", "main_blades/stacked/eclipse/cx-09_sun.webp", "blade") },
          { "name": "CX-09 (Moon Mode) (TT)", "image": getPartImage("Eclipse-TT-CX-09-Moon-Mode", "main_blades/normal/eclipse/cx-09_moon.webp", "blade"), "stackedImage": getPartImage("Eclipse-TT-CX-09-Moon-Mode", "main_blades/stacked/eclipse/cx-09_moon.webp", "blade") }
        ]
      }
    ]
  },
  {
    "id": "Might-TT",
    "name": "Might",
    "category": "Blade",
    "type": "Balance",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 33.1,
    "image": getPartImage("Might-TT-CX-11", "main_blades/normal/might/cx-11.webp", "blade"),
    "variants": [
      { "name": "CX-11 (TT) (Default)", "image": getPartImage("Might-TT-CX-11", "main_blades/normal/might/cx-11.webp", "blade"), "stackedImage": getPartImage("Might-TT-CX-11", "main_blades/stacked/might/cx-11.webp", "blade"),"displayedName":"CX-11 (TT)" },
      { "name": "X-Treme Battlers Pack (HB)", "image": getPartImage("Might-HB-XBP", "main_blades/normal/might/cx-11.webp", "blade"), "stackedImage": getPartImage("Might-HB-XBP", "main_blades/stacked/might/cx-11.webp", "blade") }
    ]
  },
  {
    "id": "Wriggle-HB",
    "name": "Wriggle",
    "category": "Blade",
    "type": "Stamina",
    "series": ["CX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "echoOf": ["Arc-TT"],
    "weight": 29.47,
    "image": getPartImage("Wriggle-HB-Wriggle-Kraken-S-3-85O", "main_blades/normal/wriggle/wrigglekrakens3-85o.webp", "blade"),
    "variants": [
      { "name": "Wriggle Kraken S 3-85O (Starter) (HB) (Default)", "image": getPartImage("Wriggle-HB-Wriggle-Kraken-S-3-85O", "main_blades/normal/wriggle/wrigglekrakens3-85o.webp", "blade"), "stackedImage": getPartImage("Wriggle-HB-Wriggle-Kraken-S-3-85O", "main_blades/stacked/wriggle/wrigglekrakens3-85o.webp", "blade"),"displayedName":"Wriggle Kraken S 3-85O (HB)" }
    ]
  },
  {
    "id": "Antler-HB",
    "name": "Antler",
    "category": "Blade",
    "type": "Stamina",
    "series": ["CX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 29.08,
    "echoOf": ["Flame-TT"],
    "image": getPartImage("Antler-HB-Antler-Stag-B-2-60HN", "main_blades/normal/antler/antlerstag.webp", "blade"),
    "variants": [
      { "name": "Antler Stag B 2-60HN (Starter) (HB) (Default)", "image": getPartImage("Antler-HB-Antler-Stag-B-2-60HN", "main_blades/normal/antler/antlerstag.webp", "blade"), "stackedImage": getPartImage("Antler-HB-Antler-Stag-B-2-60HN", "main_blades/stacked/antler/antlerstag.webp", "blade"),"displayedName":"Antler Stag B 2-60HN (HB)" }
    ]
  },
  {
    "id": "Fort-HB",
    "name": "Fort",
    "category": "Blade",
    "type": "Balance",
    "series": ["CX"],
    "company": "Hasbro",
    "spinDirection": "Right",
    "weight": 28.95,
    "echoOf": ["Reaper-TT"],
    "image": getPartImage("Fort-HB-Fort-Hornet-R-7-60T", "main_blades/normal/fort/forthornet.webp", "blade"),
    "variants": [
      { "name": "Fort Hornet R 7-60T (Starter) (HB) (Default)", "image": getPartImage("Fort-HB-Fort-Hornet-R-7-60T", "main_blades/normal/fort/forthornet.webp", "blade"), "stackedImage": getPartImage("Fort-HB-Fort-Hornet-R-7-60T", "main_blades/stacked/fort/forthornet.webp", "blade"),"displayedName":"Fort Hornet R 7-60T (HB)" }
    ]
  },
  {
    "id": "Fang-TT",
    "name": "Fang",
    "category": "Blade",
    "type": "Attack",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "weight": 30.33,
    "image": getPartImage("Fang-TT", "main_blades/normal/fang/evobattle.webp", "blade"),
    "variants": [
      { "name": "Beyblade X Evobattle (LeonFang) (TT) (Default)", "image": getPartImage("Fang-TT", "main_blades/normal/fang/evobattle.webp", "blade"), "stackedImage": getPartImage("Fang-TT", "main_blades/stacked/fang/evobattle.webp", "blade"),"displayedName":"Beyblade X Evobattle (LeonFang) (TT)" },
      { "name": "Fang Leon T 4-60U (Starter) (HB)", "image": getPartImage("Fang-TT-leonfang", "main_blades/stacked/fang/fangleont4-60u.webp", "blade"), "stackedImage": getPartImage("Fang-TT-leonfang", "main_blades/stacked/fang/fangleont4-60u.webp", "blade") }
    ]
  },
  {
    "id": "Flare-TT",
    "name": "Flare",
    "category": "Blade",
    "type": "Defense",
    "series": ["CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "identicalId": ["Radiance"],
    "weight": 31.19,
    "image": getPartImage("Flare-TT", "main_blades/normal/flare/cx-12.webp", "blade"),
    "variants": [
      { "name": "CX-12 (TT) (Default)", "image": getPartImage("Flare-TT", "main_blades/normal/flare/cx-12.webp", "blade"), "stackedImage": getPartImage("Flare-TT", "main_blades/stacked/flare/cx-12.webp", "blade"),"displayedName":"CX-12 (TT)" }
    ]
  },

  // Assist blades
  {
    "id": "S-Slash",
    "name": "S (Slash)",
    "category": "Assist Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "height": "50",
    "weight": 4.70,
    "type": "Attack",
    "image": getPartImage("S-Slash-TT-CX-01", "assist_blades/normal/s/cx-01.webp", "assist blade"),
    "variants": [
      { "name": "CX-01 (TT) (Default)", "image": getPartImage("S-Slash-TT-CX-01", "assist_blades/normal/s/cx-01.webp", "assist blade"), "stackedImage": getPartImage("S-Slash-TT-CX-01", "assist_blades/stacked/s/cx-01.webp", "assist blade"),"displayedName":"CX-01 (TT)" },
      { "name": "Courage Dran S 6-60V (Starter) (HB)", "image": getPartImage("S-Slash-TT-CX-01", "assist_blades/normal/s/cx-01.webp", "assist blade"), "stackedImage": getPartImage("S-Slash-TT-CX-01", "assist_blades/stacked/s/cx-01.webp", "assist blade") },
      { "name": "CX-04 (TT)", "image": getPartImage("S-Slash-TT-CX-04", "assist_blades/normal/s/cx-04.webp", "blade"), "stackedImage": getPartImage("S-Slash-TT-CX-04", "assist_blades/stacked/s/cx-04.webp", "blade") },
      { "name": "Wriggle Kraken S 3-85O (Starter) (HB)", "image": getPartImage("S-Slash-HB-Wriggle-Kraken-S-3-85O", "assist_blades/normal/s/wrigglekrakens3-85o.webp", "assist blade"), "stackedImage": getPartImage("S-Slash-HB-Wriggle-Kraken-S-3-85O", "assist_blades/stacked/s/wrigglekrakens3-85o.webp", "assist blade") },
      { "name": "CX-00 Rare Bey Get (TT)", "image": getPartImage("S-Slash-TT-CX-00-Rare-Bey-Get", "assist_blades/normal/s/valkyrievolt.webp", "assist blade"), "stackedImage": getPartImage("S-Slash-TT-CX-00-Rare-Bey-Get", "assist_blades/stacked/s/valkyrievolt.webp", "assist blade") },
      { "name": "Corocoro (DranArc) (TT)", "image": getPartImage("S-Slash-TT-DranArc", "assist_blades/normal/s/dranarc.webp", "assist blade"), "stackedImage": getPartImage("S-Slash-TT-DranArc", "assist_blades/stacked/s/dranarc.webp", "assist blade") },
      { "name": "G1 1st Prize (DranBrave Metal Coat: Gold) (TT)", "image": getPartImage("Slash-TT-G1-1st", "assist_blades/normal/s/gold.webp", "assist blade"), "stackedImage": getPartImage("Slash-TT-G1-1st", "assist_blades/stacked/s/gold.webp", "assist blade") },
      { "name": "G1 2nd Prize (DranBrave Metal Coat: Silver) (TT)", "image": getPartImage("Slash-TT-G1-2nd", "assist_blades/normal/s/silver.webp", "assist blade"), "stackedImage": getPartImage("Slash-TT-G1-2nd", "assist_blades/stacked/s/silver.webp", "assist blade") },
      { "name": "G1 3rd Prize (DranBrave Metal Coat: Bronze) (TT)", "image": getPartImage("Slash-TT-G1-3rd", "assist_blades/normal/s/bronze.webp", "assist blade"), "stackedImage": getPartImage("Slash-TT-G1-3rd", "assist_blades/stacked/s/bronze.webp", "assist blade") }
    ]
  },
  {
    "id": "R-Round",
    "name": "R (Round)",
    "category": "Assist Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "height": "60",
    "type": "Stamina",
    "weight": 4.68,
    "image": getPartImage("R-Round-TT-CX-02", "assist_blades/normal/r/cx-02.webp", "assist blade"),
    "variants": [
      { "name": "CX-02 (TT) (Default)", "image": getPartImage("R-Round-TT-CX-02", "assist_blades/normal/r/cx-02.webp", "assist blade"), "stackedImage": getPartImage("R-Round-TT-CX-02", "assist_blades/stacked/r/cx-02.webp", "assist blade"),"displayedName":"CX-02 (TT)" },
      { "name": "Arc Wizard R 4-55LO (Starter) (HB)", "image": getPartImage("R-Round-TT-CX-02", "assist_blades/normal/r/cx-02.webp", "assist blade"), "stackedImage": getPartImage("R-Round-TT-CX-02", "assist_blades/stacked/r/cx-02.webp", "assist blade") },
      { "name": "Fort Hornet R 7-60T (Starter) (HB)", "image": getPartImage("R-Round-HB-Fort-Hornet-R-7-60T", "assist_blades/normal/r/forthornet.webp", "assist blade"), "stackedImage": getPartImage("R-Round-HB-Fort-Hornet-R-7-60T", "assist_blades/stacked/r/forthornet.webp", "assist blade") },
      { "name": "CX-00 (WizardArc Metal Coat: Black) (TT)", "image": getPartImage("R-Round-Assist-Blade-CX-00-Metal-Coat-Black", "assist_blades/normal/r/blackarc.webp", "assist blade"), "stackedImage": getPartImage("R-Round-Assist-Blade-CX-00-Metal-Coat-Black", "assist_blades/stacked/r/blackarc.webp", "assist blade") }
    ]
  },
  {
    "id": "B-Bumper",
    "name": "B (Bumper)",
    "category": "Assist Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "height": "60",
    "type": "Defense",
    "weight": 5.24,
    "image": getPartImage("B-Bumper-TT-CX-03", "assist_blades/normal/b/cx-03.webp", "assist blade"),
    "variants": [
      { "name": "CX-03 (TT) (Default)", "image": getPartImage("B-Bumper-TT-CX-03", "assist_blades/normal/b/cx-03.webp", "assist blade"), "stackedImage": getPartImage("B-Bumper-TT-CX-03", "assist_blades/stacked/b/cx-03.webp", "assist blade"),"displayedName":"CX-03 (TT)" },
      { "name": "Dark Perseus B 6-80W (Starter) (HB)", "image": getPartImage("B-Bumper-TT-CX-03", "assist_blades/normal/b/cx-03.webp", "assist blade"), "stackedImage": getPartImage("B-Bumper-TT-CX-03", "assist_blades/stacked/b/cx-03.webp", "assist blade") },
      { "name": "CX-04 (TT)", "image": getPartImage("B-Bumper-TT-CX-04", "assist_blades/normal/b/cx-04.webp", "assist blade"), "stackedImage": getPartImage("B-Bumper-TT-CX-04", "assist_blades/stacked/b/cx-04.webp", "assist blade") },
      { "name": "Antler Stag B 2-60HN (Starter) (HB)", "image": getPartImage("B-Bumper-HB-Antler-Stag-B-2-60HN", "assist_blades/normal/b/antlerstag.webp", "assist blade"), "stackedImage": getPartImage("B-Bumper-HB-Antler-Stag-B-2-60HN", "assist_blades/stacked/b/antlerstag.webp", "assist blade") },
      { "name": "G3 1st Prize (TT)", "image": getPartImage("B-Bumper-TT-G3-1st-Prize", "assist_blades/normal/b/gold.webp", "assist blade"), "stackedImage": getPartImage("B-Bumper-TT-G3-1st-Prize", "assist_blades/stacked/b/gold.webp", "assist blade") },
      { "name": "Evangelion Deck Set (TT)", "image": getPartImage("B-Bumper-TT-evangelion", "assist_blades/normal/b/evangelion.webp", "assist blade"), "stackedImage": getPartImage("B-Bumper-TT-evangelion", "assist_blades/stacked/b/evangelion.webp", "assist blade"), "comingSoon":true }
    ]
  },
  {
    "id": "T-Turn",
    "name": "T (Turn)",
    "category": "Assist Blade",
    "type": "Balance",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "height": "60",
    "weight": 5.82,
    "attributes": ["Mode Change"],
    "image": getPartImage("T-Turn-TT-CX-05-1-CA-Mode", "assist_blades/normal/t/cx-05-1/ca.webp", "assist blade"),
    "variants": [
      {
        "name": "CX-05-1 (TT)",
        "image": getPartImage("T-Turn-TT-CX-05-1-CA-Mode", "assist_blades/normal/t/cx-05-1/ca.webp", "assist blade"),
        "modes": [
          { "name": "CX-05-1 (Continuous Attack Mode) (TT)", "image": getPartImage("T-Turn-TT-CX-05-1-Downward-Mode", "assist_blades/normal/t/cx-05-1/ca.webp", "assist blade"), "stackedImage": getPartImage("T-Turn-TT-CX-05-1-Downward-Mode", "assist_blades/stacked/t/cx-05-1/ca.webp", "assist blade") },
          { "name": "CX-05-1 (Parry Mode) (TT)", "image": getPartImage("T-Turn-TT-CX-05-1-Upper-Mode", "assist_blades/normal/t/cx-05-1/parry.webp", "assist blade"), "stackedImage": getPartImage("T-Turn-TT-CX-05-1-Upper-Mode", "assist_blades/stacked/t/cx-05-1/parry.webp", "assist blade") }
        ]
      },
      {
        "name": "CX-05-3 (TT)",
        "image": getPartImage("T-Turn-TT-CX-05-3-CA-Mode", "assist_blades/normal/t/cx-05-3/ca.webp", "assist blade"),
        "modes": [
          { "name": "CX-05-3 (Continuous Attack Mode) (TT)", "image": getPartImage("T-Turn-TT-CX-05-3-Downward-Mode", "assist_blades/normal/t/cx-05-3/ca.webp", "assist blade"), "stackedImage": getPartImage("T-Turn-TT-CX-05-3-Downward-Mode", "assist_blades/stacked/t/cx-05-3/ca.webp", "assist blade") },
          { "name": "CX-05-3 (Parry Mode) (TT)", "image": getPartImage("T-Turn-TT-CX-05-3-Upper-Mode", "assist_blades/normal/t/cx-05-3/parry.webp", "assist blade"), "stackedImage": getPartImage("T-Turn-TT-CX-05-3-Upper-Mode", "assist_blades/stacked/t/cx-05-3/parry.webp", "assist blade") }
        ]
      },
      {
        "name": "Reaper Incendio T 4-70K (Starter) (HB)",
        "image": getPartImage("T-Turn-TT-CX-05-1-CA-Mode", "assist_blades/normal/t/cx-05-1/ca.webp", "assist blade"),
        "modes": [
          { "name": "Reaper Incendio T 4-70K (Starter) (Continuous Attack Mode) (HB)", "image": getPartImage("T-Turn-TT-CX-05-1-Downward-Mode", "assist_blades/normal/t/cx-05-1/ca.webp", "assist blade"), "stackedImage": getPartImage("T-Turn-TT-CX-05-1-Downward-Mode", "assist_blades/stacked/t/cx-05-1/ca.webp", "assist blade") },
          { "name": "Reaper Incendio T 4-70K (Starter) (Parry Mode) (HB)", "image": getPartImage("T-Turn-TT-CX-05-1-Upper-Mode", "assist_blades/normal/t/cx-05-1/parry.webp", "assist blade"), "stackedImage": getPartImage("T-Turn-TT-CX-05-1-Upper-Mode", "assist_blades/stacked/t/cx-05-1/parry.webp", "assist blade") }
        ]
      },
      {
        "name": "Beyblade X Evobattle (LeonFang) (TT)",
        "image": getPartImage("T-Turn-TT-evobattle-CA-Mode", "assist_blades/normal/t/evobattle/ca.webp", "assist blade"),
        "modes": [
          { "name": "Beyblade X Evobattle LeonFang (Continuous Attack Mode) (TT)", "image": getPartImage("T-Turn-TT-evobattle-barrage-Mode", "assist_blades/normal/t/evobattle/ca.webp", "assist blade"), "stackedImage": getPartImage("T-Turn-TT-evobattle-barrage-Mode", "assist_blades/stacked/t/evobattle/ca.webp", "assist blade") },
          { "name": "Beyblade X Evobattle LeonFang (Parry Mode) (TT)", "image": getPartImage("T-Turn-TT-evobattle-parry-Mode", "assist_blades/normal/t/evobattle/parry.webp", "assist blade"), "stackedImage": getPartImage("T-Turn-TT-evobattle-parry-Mode", "assist_blades/stacked/t/evobattle/parry.webp", "assist blade") }
        ]
      },
      {
        "name": "Fang Leon T 4-60U (Starter) (HB)",
        "image": getPartImage("T-Turn-TT-evobattle-CA-Mode", "assist_blades/normal/t/fangleon/ca.webp", "assist blade"),
        "modes": [
          { "name": "Fang Leon T 4-60U (Continuous Attack Mode) (HB)", "image": getPartImage("T-Turn-TT-leonfang-barrage-Mode", "assist_blades/normal/t/fangleon/ca.webp", "assist blade"), "stackedImage": getPartImage("T-Turn-TT-leonfang-barrage-Mode", "assist_blades/stacked/t/fangleon/ca.webp", "assist blade") },
          { "name": "Fang Leon T 4-60U (Parry Mode) (HB)", "image": getPartImage("T-Turn-TT-leonfang-parry-Mode", "assist_blades/normal/t/fangleon/parry.webp", "assist blade"), "stackedImage": getPartImage("T-Turn-TT-leonfang-parry-Mode", "assist_blades/stacked/t/fangleon/parry.webp", "assist blade") }
        ]
      },
      {
        "name": "Evangelion Deck Set (TT)",
        "image": getPartImage("T-Turn-TT-evangelion-CA", "assist_blades/normal/t/evangelion/ca.webp", "assist blade"),
        "comingSoon":true,
        "modes": [
          { "name": "Evangelion Deck Set (Continuous Attack Mode) (TT)", "image": getPartImage("T-Turn-TT-evangelion-CA", "assist_blades/normal/t/evangelion/ca.webp", "assist blade"), "stackedImage": getPartImage("T-Turn-TT-evangelion-CA", "assist_blades/stacked/t/evangelion/ca.webp", "assist blade") },
          // NEED IMAGE WHEN RELEASED { "name": "Evangelion Deck Set (Parry Mode) (TT)", "image": getPartImage("T-Turn-TT-evangelion-parry-Mode", "assist_blades/normal/t/evangelion/parry.webp", "assist blade"), "stackedImage": getPartImage("T-Turn-TT-evangelion-parry-Mode", "assist_blades/stacked/t/evangelion/parry.webp", "assist blade") }
        ]
      },
    ]
  },
  {
    "id": "J-Jaggy",
    "name": "J (Jaggy)",
    "category": "Assist Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "height": "50",
    "weight": 4.81,
    "type": "Attack",
    "image": getPartImage("J-Jaggy-TT-CX-06-1", "assist_blades/normal/j/cx-06-1.webp", "assist blade"),
    "variants": [
      { "name": "CX-06-1 (TT) (Default)", "image": getPartImage("J-Jaggy-TT-CX-06-1", "assist_blades/normal/j/cx-06-1.webp", "assist blade"), "stackedImage": getPartImage("J-Jaggy-TT-CX-06-1", "assist_blades/stacked/j/cx-06-1.webp", "assist blade"),"displayedName":"CX-06-1 (TT)" },
      { "name": "Brush Fox J 9-70GR (Starter) (HB)", "image": getPartImage("J-Jaggy-TT-CX-06-1", "assist_blades/normal/j/cx-06-1.webp", "assist blade"), "stackedImage": getPartImage("J-Jaggy-TT-CX-06-1", "assist_blades/stacked/j/cx-06-1.webp", "assist blade") },
      { "name": "CX-06-2 (TT)", "image": getPartImage("J-Jaggy-TT-CX-06-2", "assist_blades/normal/j/cx-06-2.webp", "assist blade"), "stackedImage": getPartImage("J-Jaggy-TT-CX-06-2", "assist_blades/stacked/j/cx-06-2.webp", "assist blade") },
      { "name": "CX-06-3 (TT)", "image": getPartImage("J-Jaggy-TT-CX-06-3", "assist_blades/normal/j/cx-06-3.webp", "assist blade"), "stackedImage": getPartImage("J-Jaggy-TT-CX-06-3", "assist_blades/stacked/j/cx-06-3.webp", "assist blade") },
      { "name": "UX-15 (TT)", "image": getPartImage("J-Jaggy-TT-UX-15", "assist_blades/normal/j/ux-15.webp", "assist blade"), "stackedImage": getPartImage("J-Jaggy-TT-UX-15", "assist_blades/stacked/j/ux-15.webp", "assist blade") },
      { "name": "Corocoro (TT)", "image": getPartImage("J-Jaggy-TT-Corocoro", "assist_blades/normal/j/corocoro.webp", "assist blade"), "stackedImage": getPartImage("J-Jaggy-TT-Corocoro", "assist_blades/stacked/j/corocoro.webp", "assist blade") }
    ]
  },
  {
    "id": "C-Charge-TT",
    "name": "C (Charge)",
    "category": "Assist Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "height": "60",
    "weight": 5.0,
    "type": "Defense",
    "image": getPartImage("C-Charge-TT-CX-05-2", "assist_blades/normal/c/cx-05-2.webp", "assist blade"),
    "variants": [
      { "name": "CX-05-2 (TT) (Default)", "image": getPartImage("C-Charge-TT-CX-05-2", "assist_blades/normal/c/cx-05-2.webp", "assist blade"), "stackedImage": getPartImage("C-Charge-TT-CX-05-2", "assist_blades/stacked/c/cx-05-2.webp", "assist blade"),"displayedName":"CX-05-2 (TT)" },
      { "name": "UX-18-4 (TT)", "image": getPartImage("C-Charge-TT-UX-18-4", "assist_blades/normal/c/ux-18-4.webp", "assist blade"), "stackedImage": getPartImage("C-Charge-TT-UX-18-4", "assist_blades/stacked/c/ux-18-4.webp", "assist blade") },
      { "name": "Reaper Rhino C 4-55D (Starter) (HB)", "image": getPartImage("C-Charge-TT-CX-05-2", "assist_blades/normal/c/cx-05-2.webp", "assist blade"), "stackedImage": getPartImage("C-Charge-TT-CX-05-2", "assist_blades/stacked/c/cx-05-2.webp", "assist blade") },
    ]
  },
  {
    "id": "A-Assault-TT",
    "name": "A (Assault)",
    "category": "Assist Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "height": "60",
    "weight": 4.98,
    "type": "Attack",
    "image": getPartImage("A-Assault-TT-CX-07", "assist_blades/normal/a/cx-07.webp", "assist blade"),
    "variants": [
      { "name": "CX-07 (TT) (Default)", "image": getPartImage("A-Assault-TT-CX-07", "assist_blades/normal/a/cx-07.webp", "assist blade"), "stackedImage": getPartImage("A-Assault-TT-CX-07", "assist_blades/stacked/a/cx-07.webp", "assist blade"),"displayedName":"CX-07 (TT)" },
      { "name": "Tokyo Toy Show (TT)", "image": getPartImage("A-Assault-TT-Tokyo-Toy-Show", "assist_blades/normal/a/tokyotoy.webp", "assist blade"), "stackedImage": getPartImage("A-Assault-TT-Tokyo-Toy-Show", "assist_blades/stacked/a/tokyotoy.webp", "assist blade") },
      { "name": "Blast Pegasus A Tr (Clip & Rip Launcher Set) (HB)", "image": getPartImage("A-Assault-TT-clip&rip", "assist_blades/normal/a/cx-07.webp", "assist blade"), "stackedImage": getPartImage("A-Assault-TT-clip&rip", "assist_blades/stacked/a/cx-07.webp", "assist blade"), "comingSoon":true },
      { "name": "Evangelion Deck Set (TT)", "image": getPartImage("A-Assault-TT-evangelion", "assist_blades/normal/a/evangelion.webp", "assist blade"), "stackedImage": getPartImage("A-Assault-TT-evangelion", "assist_blades/stacked/a/evangelion.webp", "assist blade"), "comingSoon":true },
    ]
  },
  {
    "id": "W-Wheel-TT",
    "name": "W (Wheel)",
    "category": "Assist Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "height": "80",
    "weight": 7.11,
    "type": "Stamina",
    "image": getPartImage("W-Wheel-TT-CX-08-1", "assist_blades/normal/w/cx-08-1.webp", "assist blade"),
    "variants": [
      { "name": "CX-08-1 (TT) (Default)", "image": getPartImage("W-Wheel-TT-CX-08-1", "assist_blades/normal/w/cx-08-1.webp", "assist blade"), "stackedImage": getPartImage("W-Wheel-TT-CX-08-1", "assist_blades/stacked/w/cx-08-1.webp", "assist blade"),"displayedName":"CX-08-1 (TT)" },
      { "name": "CX-08-3 (TT)", "image": getPartImage("W-Wheel-TT-CX-08-3", "assist_blades/normal/w/cx-08-3.webp", "assist blade"), "stackedImage": getPartImage("W-Wheel-TT-CX-08-3", "assist_blades/stacked/w/cx-08-3.webp", "assist blade") },
      { "name": "Flame Cerberus W 5-80WB (Starter) (HB)", "image": getPartImage("W-Wheel-TT-CX-08-1", "assist_blades/normal/w/cx-08-1.webp", "assist blade"), "stackedImage": getPartImage("W-Wheel-TT-CX-08-1", "assist_blades/stacked/w/cx-08-1.webp", "assist blade") },
    ]
  },
  {
    "id": "M-Massive-TT",
    "name": "M (Massive)",
    "category": "Assist Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "height": "60",
    "weight": 5.33,
    "type": "Balance",
    "image": getPartImage("M-Massive-TT-CX-08-2", "assist_blades/normal/m/cx-08-2.webp", "assist blade"),
    "variants": [
      { "name": "CX-08-2 (TT) (Default)", "image": getPartImage("M-Massive-TT-CX-08-2", "assist_blades/normal/m/cx-08-2.webp", "assist blade"), "stackedImage": getPartImage("M-Massive-TT-CX-08-2", "assist_blades/stacked/m/cx-08-2.webp", "assist blade"),"displayedName":"CX-08-2 (TT)" },
      { "name": "UX-18-3 (TT) ", "image": getPartImage("M-Massive-TT-UX-18-3", "assist_blades/normal/m/ux-18-3.webp", "Placeholder"), "stackedImage": getPartImage("M-Massive-TT-UX-18-3", "assist_blades/stacked/m/ux-18-3.webp", "Placeholder") }
    ]
  },
  {
    "id": "D-Dual-TT",
    "name": "D (Dual)",
    "category": "Assist Blade",
    "type": "Balance",
    "series": ["CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "height": "60",
    "weight": 5.85,
    "attributes": ["Mode Change"],
    "image": getPartImage("D-Dual-TT-CX-09-Upper-Mode", "assist_blades/normal/d/cx-09/upper.webp", "assist blade"),
    "variants": [
      {
        "name": "CX-09 (TT)",
        "image": getPartImage("D-Dual-TT-CX-09-Upper-Mode", "assist_blades/normal/d/cx-09/upper.webp", "assist blade"),
        "modes": [
          { "name": "CX-09 (Upper Mode) (TT)", "image": getPartImage("D-Dual-TT-CX-09-Upper-Mode", "assist_blades/normal/d/cx-09/upper.webp", "assist blade"), "stackedImage": getPartImage("D-Dual-TT-CX-09-Upper-Mode", "assist_blades/stacked/d/cx-09/upper.webp", "assist blade") },
          { "name": "CX-09 (Smash Mode) (TT)", "image": getPartImage("D-Dual-TT-CX-09-Smash-Mode", "assist_blades/normal/d/cx-09/smash.webp", "assist blade"), "stackedImage": getPartImage("D-Dual-TT-CX-09-Smash-Mode", "assist_blades/stacked/d/cx-09/smash.webp", "assist blade") }
        ]
      }
    ]
  },
  {
    "id": "F-Free-Assist",
    "name": "F (Free)",
    "category": "Assist Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "height": "60",
    "weight": 5.81,
    "type": "Stamina",
    "image": getPartImage("F-Free-Assist-TT-CX-10", "assist_blades/normal/f/cx-10.webp", "assist blade"),
    "variants": [
      { "name": "CX-10 (TT) (Default)", "image": getPartImage("F-Free-Assist-TT-CX-10", "assist_blades/normal/f/cx-10.webp", "assist blade"), "stackedImage": getPartImage("F-Free-Assist-TT-CX-10", "assist_blades/stacked/f/cx-10.webp", "assist blade"),"displayedName":"CX-10 (TT)" }
    ]
  },
  {
    "id": "H-Heavy-Assist",
    "name": "H (Heavy)",
    "category": "Assist Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "height": "50",
    "weight": 7.87,
    "type": "Balance",
    "image": getPartImage("H-Heavy-Assist-TT-CX-11", "assist_blades/normal/h/cx-11.webp", "assist blade"),
    "variants": [
      { "name": "CX-11 (TT) (Default)", "image": getPartImage("H-Heavy-Assist-TT-CX-11", "assist_blades/normal/h/cx-11.webp", "assist blade"), "stackedImage": getPartImage("H-Heavy-Assist-TT-CX-11", "assist_blades/stacked/h/cx-11.webp", "assist blade"),"displayedName":"CX-11 (TT)" },
      { "name": "X-Treme Battlers Pack (HB)", "image": getPartImage("H-Heavy-Assist-HB-XBP", "assist_blades/normal/h/cx-11.webp", "assist blade"), "stackedImage": getPartImage("H-Heavy-Assist-HB-XBP", "assist_blades/stacked/h/cx-11.webp", "assist blade") }
    ]
  },
  {
    "id": "Z-Zillion-Assist",
    "name": "Z (Zillion)",
    "category": "Assist Blade",
    "series": ["CX"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "height": "80",
    "weight": 6.62,
    "type": "Defense",
    "image": getPartImage("Z-Zillion-Assist-TT-CX-12", "assist_blades/normal/z/cx-12.webp", "assist blade"),
    "variants": [
      { "name": "CX-12 (TT) (Default)", "image": getPartImage("Z-Zillion-Assist-TT-CX-12", "assist_blades/normal/z/cx-12.webp", "assist blade"), "stackedImage": getPartImage("Z-Zillion-Assist-TT-CX-12", "assist_blades/stacked/z/cx-12.webp", "assist blade"),"displayedName":"CX-12 (TT)" }
    ]
  },
  {
    "id": "K-Knuckle-Assist",
    "name": "K (Knuckle)",
    "category": "Assist Blade",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "height": "50",
    "weight": 4.90,
    "type": "Attack",
    "image": getPartImage("K-Knuckle-Assist-cx-13", "assist_blades/normal/k/cx-13.webp", "assist blade"),
    "variants": [
      { "name": "CX-13 (TT) (Default)", "image": getPartImage("K-Knuckle-Assist-cx-13", "assist_blades/normal/k/cx-13.webp", "assist blade"), "stackedImage": getPartImage("K-Knuckle-Assist-cx-13", "assist_blades/stacked/k/cx-13.webp", "assist blade"),"displayedName":"CX-13 (TT)" },
      { "name": "CX-16 (TT)", "image": getPartImage("K-Knuckle-Assist-cx-16", "assist_blades/normal/k/cx-16.webp", "assist blade"), "stackedImage": getPartImage("K-Knuckle-Assist-cx-16", "assist_blades/stacked/k/cx-16.webp", "assist blade") },
      { "name": "Blitz Bahamut BK 1-50I (Starter) (HB)", "image": getPartImage("K-Knuckle-Assist-cx-13", "assist_blades/normal/k/cx-13.webp", "assist blade"), "stackedImage": getPartImage("K-Knuckle-Assist-cx-13", "assist_blades/stacked/k/cx-13.webp", "assist blade"), "comingSoon":true },
      { "name": "Corocoro (BahamutBlitz Metal Coat: Yellow) (TT)", "image": getPartImage("K-Knuckle-Assist-corocoro-yellow", "assist_blades/normal/k/corocoro_yellow.webp", "assist blade",), "stackedImage": getPartImage("K-Knuckle-Assist-corocoro-yellow", "assist_blades/stacked/k/cocoroco-yellow.webp", "assist blade",)},

    ]
  },
  {
    "id": "V-Vertical-Assist",
    "name": "V (Vertical)",
    "category": "Assist Blade",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    "alsoShowUnder": ["Hasbro"],
    "height": "60",
    "weight": 5.29,
    "type": "Defense",
    "image": getPartImage("V-Vertical-Assist-cx-14", "assist_blades/normal/v/cx-14.webp", "assist blade"),
    "variants": [
      { "name": "CX-14 (TT) (Default)", "image": getPartImage("V-Vertical-Assist-cx-14", "assist_blades/normal/v/cx-14.webp", "assist blade"), "stackedImage": getPartImage("V-Vertical-Assist-cx-14", "assist_blades/stacked/v/cx-14.webp", "assist blade"),"displayedName":"CX-14 (TT)" },
      { "name": "Armor Knight GV 8-70UN (Starter) (HB)", "image": getPartImage("V-Vertical-Assist-cx-14", "assist_blades/normal/v/cx-14.webp", "assist blade"), "stackedImage": getPartImage("V-Vertical-Assist-cx-14", "assist_blades/stacked/v/cx-14.webp", "assist blade") },
    ]
  },
  {
    "id": "E-Erase-Assist",
    "name": "E (Erase)",
    "category": "Assist Blade",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "alsoShowUnder": ["Hasbro"],
    "spinDirection": "Right",
    "height": "70",
    "weight": 6.06,
    "type": "Stamina",
    "image": getPartImage("E-Erase-Assist-cx-15", "assist_blades/normal/e/cx-15.webp", "assist blade"),
    "variants": [
      { "name": "CX-15 (TT) (Default)", "image": getPartImage("E-Erase-Assist-cx-15", "assist_blades/normal/e/cx-15.webp", "assist blade"), "stackedImage": getPartImage("E-Erase-Assist-cx-15", "assist_blades/stacked/e/cx-15.webp", "assist blade"),"displayedName":"CX-15 (TT)" },
      { "name": "Rage Ragna FE 4-55Y (Starter) (HB)", "image": getPartImage("E-Erase-Assist-cx-15", "assist_blades/normal/e/cx-15.webp", "assist blade"), "stackedImage": getPartImage("E-Erase-Assist-cx-15", "assist_blades/stacked/e/cx-15.webp", "assist blade") },
    ]
  },
  {
    "id": "O-Odd-Assist",
    "name": "O (Odd)",
    "category": "Assist Blade",
    "series": ["CX", "CXE"],
    "company": "Takara Tomy",
    "spinDirection": "Right",
    //"height": "70",
    //"weight": 6.06,
    "comingSoon": true,
    "type": "Balance",
    "image": getPartImage("O-Odd-Assist-cx-17-1", "assist_blades/normal/o/cx-17-1.webp", "assist blade"),
    "variants": [
      { "name": "CX-17-1 (TT) (Default)", "image": getPartImage("O-Odd-Assist-cx-17-1", "assist_blades/normal/o/cx-17-1.webp", "assist blade"), "stackedImage": getPartImage("O-Odd-Assist-cx-17-1", "assist_blades/stacked/o/cx-17-1.webp", "assist blade"),"displayedName":"CX-17-1 (TT)" },
      { "name": "CX-17-2 (TT)", "image": getPartImage("O-Odd-Assist-cx-17-2", "assist_blades/normal/o/cx-17-2.webp", "assist blade",), "stackedImage": getPartImage("O-Odd-Assist-cx-17-2", "assist_blades/stacked/o/cx-17-2.webp", "assist blade",)},
    ]
  },


  // Launchers
  {
    "id": "TT_WinderLauncher",
    "name": "Winder Launcher (Takara Tomy)",
    "category": "Launchers",
    "company": "Takara Tomy",
    "type": "Winder",
    "image": getPartImage("Winder-Launcher-Default-TT", "launchers/tt_winder_launcher/bx_winder.webp", "winder launcher"),
    "variants": [
      { "name": "BX Winder", "image": getPartImage("Winder-Launcher-Default-TT", "launchers/tt_winder_launcher/bx_winder.webp", "winder launcher") },
      { "name": "BX-15", "image": getPartImage("Winder-Launcher-LeonClaw-TT", "launchers/tt_winder_launcher/bx-15.webp", "winder launcher") },
      { "name": "BX-17 (Red)", "image": getPartImage("Winder-Launcher-BX-17-1-TT", "launchers/tt_winder_launcher/bx-17_red.webp", "winder launcher") },
      { "name": "BX-17 (Blue)", "image": getPartImage("Winder-Launcher-BX-17-2-TT", "launchers/tt_winder_launcher/bx-17_blue.webp", "winder launcher") },
      { "name": "BX-37", "image": getPartImage("Winder-Launcher-BX-37-TT", "launchers/tt_winder_launcher/bx-37.webp", "winder launcher") },
      { "name": "BX-46 (Red)", "image": getPartImage("Winder-Launcher-BX-46-red-TT", "launchers/tt_winder_launcher/bx-46_red.webp", "winder launcher") },
      { "name": "BX-46 (Black)", "image": getPartImage("Winder-Launcher-BX-46-black-TT", "launchers/tt_winder_launcher/bx-46_black.webp", "winder launcher") },
      { "name": "UX-01", "image": getPartImage("Winder-Launcher-UX-01-TT", "launchers/tt_winder_launcher/ux-01.webp", "winder launcher") },
      { "name": "UX-02", "image": getPartImage("Winder-Launcher-UX-02-TT", "launchers/tt_winder_launcher/ux-02.webp", "winder launcher") },
      { "name": "UX-04 (White)", "image": getPartImage("Winder-Launcher-UX-04-1-TT", "launchers/tt_winder_launcher/ux-04_white.webp", "winder launcher") },
      { "name": "UX-04 (Black)", "image": getPartImage("Winder-Launcher-UX-04-2-TT", "launchers/tt_winder_launcher/ux-04_black.webp", "winder launcher") },
      { "name": "UX-08", "image": getPartImage("Winder-Launcher-UX-08-TT", "launchers/tt_winder_launcher/ux-08.webp", "winder launcher") },
      { "name": "CX Winder", "image": getPartImage("CX-Winder-Launcher-TT", "launchers/tt_winder_launcher/cx_winder.webp", "winder launcher") },
      { "name": "CX-04 (Black)", "image": getPartImage("CX-04-Black-Launcher-TT", "launchers/tt_winder_launcher/cx-04_black.webp", "winder launcher") },
      { "name": "CX-04 (White)", "image": getPartImage("CX-04-White-Launcher-TT", "launchers/tt_winder_launcher/cx-04_white.webp", "winder launcher") },
      { "name": "BX-00 DranDagger Giants Crossover", "image": getPartImage("Winder-Launcher-BX-00-Giants-TT", "launchers/tt_winder_launcher/drandagger_giants.webp", "winder launcher") },
      { "name": "25th Anniversary Set", "image": getPartImage("Winder-Launcher-anniversary-TT", "launchers/tt_winder_launcher/25_anniversary.webp", "winder launcher") },
      { "name": "UX-00 Bey Kickoff Set", "image": getPartImage("Winder-Launcher-barcelona-kickoff-TT", "launchers/tt_winder_launcher/bey_kickoff.webp", "winder launcher") },
      { "name": "UX-00 Dranbuster FC Barcelona", "image": getPartImage("Winder-Launcher-barcelona-TT", "launchers/tt_winder_launcher/dranbuster_barcelona.webp", "winder launcher") },
      { "name": "BX-00 PhoenixWing Metal Coat Black", "image": getPartImage("Winder-Launcher-phoenixwing-black-TT", "launchers/tt_winder_launcher/phoenixwing_black.webp", "winder launcher") },
      { "name": "BX-00 CobaltDragoon Metal Coat: White J.League Ver.", "image": getPartImage("Winder-Launcher-white-goon", "launchers/tt_winder_launcher/white_goon.webp", "winder launcher") },
      { "name": "BX-00 DranSword Metal Coat: Black J.League Ver.", "image": getPartImage("Winder-Launcher-black-dransword", "launchers/tt_winder_launcher/black_sword.webp", "winder launcher") },
      { "name": "BX-00 (StormSpriggan)", "image": getPartImage("Winder-Launcher-stormspriggan", "launchers/tt_winder_launcher/stormspriggan.webp", "winder launcher") },
      { "name": "CX-13", "image": getPartImage("Winder-Launcher-CX-13", "launchers/tt_winder_launcher/cx-13.webp", "winder launcher")},
      { "name": "CX-14", "image": getPartImage("Winder-Launcher-CX-14", "launchers/tt_winder_launcher/cx-14.webp", "winder launcher")},
      { "name": "CX-16", "image": getPartImage("Winder-Launcher-CX-16", "launchers/tt_winder_launcher/cx-16.webp", "winder launcher")},
      { "name": "BBLD (Black)", "image": getPartImage("Winder-Launcher-BBLD-Black", "launchers/tt_winder_launcher/bbld_black.webp", "winder launcher")},
      { "name": "BBLD (Blue)", "image": getPartImage("Winder-Launcher-BBLD-Blue", "launchers/tt_winder_launcher/bbld_blue.webp", "winder launcher")},
      { "name": "BBLD (Pink)", "image": getPartImage("Winder-Launcher-BBLD-Pink", "launchers/tt_winder_launcher/bbld_pink.webp", "winder launcher")},
      { "name": "BBLD (Green)", "image": getPartImage("Winder-Launcher-BBLD-Green", "launchers/tt_winder_launcher/bbld_green.webp", "winder launcher")},
      { "name": "BBLD (Orange)", "image": getPartImage("Winder-Launcher-BBLD-Orange", "launchers/tt_winder_launcher/bbld_orange.webp", "winder launcher")},
      { "name": "BX-49", "image": getPartImage("Winder-Launcher-BX-49", "launchers/tt_winder_launcher/bx-49.webp", "winder launcher"), "comingSoon": true },
      {"name": "UX-00 (SamuraiSaber Metal Coat: Samurai Blue JFA Ver.)", "image": getPartImage("Winder-Launcher-UX-00-(SamuraiSaber-Metal-Coat:-Samurai-Blue-JFA-Ver.)", "launchers/tt_winder_launcher/samuraisaber_jfa.webp", "winder launcher"), "comingSoon":true}
    ]
  },
  {
    "id": "HB_WinderLauncher",
    "name": "Winder Launcher (Hasbro)",
    "category": "Launchers",
    "company": "Hasbro",
    "type": "Winder",
    "image": getPartImage("Winder-Launcher-Default-HB", "launchers/hb_winder_launcher/winder_black.webp", "winder launcher"),
    "variants": [
      { "name": "Winder Launcher (Black)", "image": getPartImage("Winder-Launcher-Default-HB", "launchers/hb_winder_launcher/winder_black.webp", "winder launcher") },
    ]

  },
  {
    "id": "TT_LongWinderLauncher",
    "name": "Long Winder Launcher (Takara Tomy)",
    "category": "Launchers",
    "company": "Takara Tomy",
    "type": "Winder",
    "image": getPartImage("LongWinder-Launcher-Default-TT", "launchers/tt_longwinder_launcher/ux-14.webp", "winder launcher"),
    "variants": [
      { "name": "UX-14", "image": getPartImage("Winder-Launcher-UX-14-TT", "launchers/tt_longwinder_launcher/ux-14.webp", "winder launcher") },
      { "name": "CX-07", "image": getPartImage("Winder-Launcher-CX-07-TT", "launchers/tt_longwinder_launcher/cx-07.webp", "winder launcher") },
      { "name": "CX-09", "image": getPartImage("Winder-Launcher-CX-09-TT", "launchers/tt_longwinder_launcher/cx-09.webp", "winder launcher") },
      { "name": "CX-00 PegasusBlast", "image": getPartImage("Winder-Launcher-CX-00-Pegasus-TT", "launchers/tt_longwinder_launcher/tokyotoy.webp", "winder launcher") },
      { "name": "UX-19", "image": getPartImage("Winder-Launcher-UX-19", "launchers/tt_longwinder_launcher/ux-19.webp", "winder launcher"), "comingSoon": true },
      { "name": "Evangelion Deck Set (Black)", "image": getPartImage("Winder-Launcher-EvangelionDeckSet-(Black)", "launchers/tt_longwinder_launcher/evangelion_black.webp", "winder launcher"), "comingSoon": true },
      { "name": "Evangelion Deck Set (White)", "image": getPartImage("Winder-Launcher-EvangelionDeckSet-(White)", "launchers/tt_longwinder_launcher/evangelion_white.webp", "winder launcher"), "comingSoon": true }

    ]
  },
  {
    "id": "TT_DragonWinderLauncher",
    "name": "Dragon Winder Launcher (Takara Tomy)",
    "category": "Launchers",
    "company": "Takara Tomy",
    "type": "Winder",
    "image": getPartImage("DragonWinder-Launcher-Default-TT", "launchers/tt_dragonwinder/25_anniversary.webp", "winder launcher"),
    "variants": [
      { "name": "25th Anniversary Set", "image": getPartImage("DragonWinder-Launcher-Default-TT", "launchers/tt_dragonwinder/25_anniversary.webp", "winder launcher") },
      { "name": "UX-17", "image": getPartImage("UX-17-TT", "launchers/tt_dragonwinder/ux-17.webp", "winder launcher") }
    ]

  },
  {
    "id": "TT_WinderLauncher_L",
    "name": "Winder Launcher L (Takara Tomy)",
    "category": "Launchers",
    "company": "Takara Tomy",
    "type": "Winder",
    "image": getPartImage("Winder-Launcher-L-Default-TT", "launchers/tt_winderlauncher_l/bx-40.webp", "winder launcher"),
    "variants": [
      { "name": "BX-40", "image": getPartImage("Winder-Launcher-L-Default-TT", "launchers/tt_winderlauncher_l/bx-40.webp", "winder launcher") }
    ]
  },
  {
    "id": "TT_StringLauncher",
    "name": "String Launcher (Takara Tomy)",
    "category": "Launchers",
    "company": "Takara Tomy",
    "type": "String",
    "image": getPartImage("String-Launcher-Default-TT", "launchers/tt_string_launcher/start_dash.webp", "String launcher"),
    "variants": [
      { "name": "Start Dash Set", "image": getPartImage("String-Launcher-Start-Dash", "launchers/tt_string_launcher/start_dash.webp", "String Launcher"), "displayedName": "BX-07" },
      { "name": "BX-18", "image": getPartImage("String-Launcher-Default-TT", "launchers/tt_string_launcher/bx-18.webp", "String launcher") },
      { "name": "BX-23", "image": getPartImage("String-BX-23-TT", "launchers/tt_string_launcher/bx-23.webp", "String launcher") },
      { "name": "BX-28", "image": getPartImage("String-BX-28-TT", "launchers/tt_string_launcher/bx-28.webp", "String launcher") },
      { "name": "UX-11", "image": getPartImage("String-UX-11-TT", "launchers/tt_string_launcher/ux-11.webp", "String launcher") },
      { "name": "UX-00 Dran Deck Starter", "image": getPartImage("String-UX-00-Dran-Deck-TT", "launchers/tt_string_launcher/drandeck.webp", "String launcher") },
      { "name": "25th Anniversary Set (StormPegasis)", "image": getPartImage("String-25-anniversary-Pegasis-TT", "launchers/tt_string_launcher/pegasis.webp", "String launcher") },
      { "name": "25th Anniversary Set (VictoryValkyrie)", "image": getPartImage("String-25-anniversary-Valkyrie-TT", "launchers/tt_string_launcher/valkyrie.webp", "String launcher") },
      { "name": "G2 Prize (Bronze Ver.)", "image": getPartImage("String-g2-bronze-TT", "launchers/tt_string_launcher/bronze.webp", "String launcher") },
      { "name": "G2 Prize (Silver Ver.)", "image": getPartImage("String-g2-silver-TT", "launchers/tt_string_launcher/silver.webp", "String launcher") },
      { "name": "G2 Prize (Gold Ver.)", "image": getPartImage("String-g2-gold-TT", "launchers/tt_string_launcher/gold.webp", "String launcher") },
      { "name": "DMM Lottory Exclusive", "image": getPartImage("String-DMM-TT", "launchers/tt_string_launcher/dmm_lotto.webp", "String launcher") },
      { "name": "B4 Exclusive Color Ver. (Green)", "image": getPartImage("String-B4-Green", "launchers/tt_string_launcher/green.webp", "String launcher") },
      { "name": "B4 Exclusive Color Ver. (Pink)", "image": getPartImage("String-B4-Green", "launchers/tt_string_launcher/pink.webp", "String launcher") },
      { "name": "B4 Exclusive Color Ver. (Orange)", "image": getPartImage("String-B4-Green", "launchers/tt_string_launcher/orange.webp", "String launcher") }
    ]

  },
  {
    "id": "HB_StringLauncher",
    "name": "String Launcher (Hasbro)",
    "category": "Launchers",
    "company": "Hasbro",
    "type": "String",
    "image": getPartImage("String-Launcher-Default-HB", "launchers/hb_string_launcher/soarphoenix.webp", "String launcher"),
    "variants": [
      { "name": "Soar Phoenix Deluxe String Launcher Set", "image": getPartImage("String-Launcher-Default-HB", "launchers/hb_string_launcher/soarphoenix.webp", "String launcher") },
      { "name": "Bite Croc Deluxe String Launcher & Custom Grip Set", "image": getPartImage("String-Launcher-bitecroc-HB", "launchers/hb_string_launcher/bitecroc.webp", "String launcher") }

    ]

  },
  {
    "id": "TT_StringLauncher_L",
    "name": "String Launcher L (Takara Tomy)",
    "category": "Launchers",
    "company": "Takara Tomy",
    "type": "String",
    "image": getPartImage("String-Launcher-L-Default-TT", "launchers/tt_string_launcher_l/bx-34.webp", "String launcher"),
    "variants": [
      { "name": "BX-34", "image": getPartImage("String-Launcher-L-Default-TT", "launchers/tt_string_launcher_l/bx-34.webp", "String launcher") },
      { "name": "BX-47", "image": getPartImage("String-Launcher-L-BX-47-TT", "launchers/tt_string_launcher_l/bx-47.webp", "String launcher") },
      { "name": "BX-00 CobaltDragoon (Metal Coat: Black)", "image": getPartImage("String-Launcher-L-BX-00-Goon-TT", "launchers/tt_string_launcher_l/black_goon.webp", "String launcher") }
    ]
  },
  {
    "id": "HB_StringLauncher_L",
    "name": "String Launcher L (Hasbro)",
    "category": "Launchers",
    "company": "Hasbro",
    "type": "String",
    "image": getPartImage("String-Launcher-L-Default-HB", "launchers/hb_string_launcher_l/cobaltdragoon.webp", "String launcher"),
    "variants": [
      { "name": "Cobalt Dragoon Deluxe Left-Spin String Launcher Set", "image": getPartImage("String-Launcher-L-Default-HB", "launchers/hb_string_launcher_l/cobaltdragoon.webp", "String launcher") },
      { "name": "Meteoroid Dragoon 3-70J (Deluxe Launcher Set)", "image": getPartImage("String-Launcher-L-meteoroiddraggon", "launchers/tt_string_launcher_l/bx-47.webp", "String launcher"), "comingSoon":true },

    ]

  },
  {
    "id": "TT_EntryLauncher",
    "name": "Entry Launcher (Takara Tomy)",
    "category": "Launchers",
    "company": "Takara Tomy",
    "type": "Entry",
    "image": getPartImage("Entry-Launcher-Default-TT", "launchers/tt_entry_launcher/bx-22.webp", "Entry launcher"),
    "variants": [
      { "name": "BX-22", "image": getPartImage("Entry-Launcher-Default-TT", "launchers/tt_entry_launcher/bx-22.webp", "Entry launcher") },
      { "name": "Marvel", "image": getPartImage("Entry-Launcher-Marvel-TT", "launchers/tt_entry_launcher/marvel.webp", "Entry launcher") },
      { "name": "Star Wars", "image": getPartImage("Entry-Launcher-StarWars-TT", "launchers/tt_entry_launcher/starwars.webp", "Entry launcher") },
      { "name": "Transformers", "image": getPartImage("Entry-Launcher-Transformers-TT", "launchers/tt_entry_launcher/transformers.webp", "Entry launcher") },
      { "name": "Jurassic World", "image": getPartImage("Entry-Launcher-Jurassic-TT", "launchers/tt_entry_launcher/jurassic.webp", "Entry launcher") }
    ]
  },
  {
    "id": "HB_EntryLauncher",
    "name": "Entry Launcher (Hasbro)",
    "category": "Launchers",
    "company": "Hasbro",
    "type": "Entry",
    "image": getPartImage("Entry-Launcher-Default-HB", "launchers/hb_entry_launcher/starter.webp", "Entry launcher"),
    "variants": [
      { "name": "Starter", "image": getPartImage("Entry-Launcher-Default-HB", "launchers/hb_entry_launcher/starter.webp", "Entry launcher") },
      { "name": "Marvel", "image": getPartImage("Entry-Launcher-Marvel-HB", "launchers/hb_entry_launcher/marvel.webp", "Entry launcher") },
      { "name": "Star Wars", "image": getPartImage("Entry-Launcher-StarWars-HB", "launchers/hb_entry_launcher/starwars.webp", "Entry launcher") },
      { "name": "Transformers", "image": getPartImage("Entry-Launcher-Transformers-HB", "launchers/hb_entry_launcher/transformers.webp", "Entry launcher") },
      { "name": "Jurassic World", "image": getPartImage("Entry-Launcher-Jurassic-HB", "launchers/hb_entry_launcher/jurassic.webp", "Entry launcher") },
      { "name": "Buster Dran", "image": getPartImage("Entry-Launcher-Buster-Dran-HB", "launchers/hb_entry_launcher/buster.webp", "Entry launcher") },
      { "name": "Hammer Incendio", "image": getPartImage("Entry-Launcher-Hammer-Incendio-HB", "launchers/hb_entry_launcher/hammer.webp", "Entry launcher") },
      { "name": "Stadium Set", "image": getPartImage("Entry-Launcher-Black-HB", "launchers/hb_entry_launcher/stadiumset.webp", "Entry launcher") }
    ]
  },
  {
    "id": "TT_HoldLauncher",
    "name": "Hold Launcher (Takara Tomy)",
    "category": "Launchers",
    "company": "Takara Tomy",
    "type": "Hold",
    "image": getPartImage("Hold-Launcher-Default-TT", "launchers/tt_hold_launcher/ux-09.webp", "Entry launcher"),
    "variants": [
      { "name": "UX-09", "image": getPartImage("Hold-Launcher-Default-TT", "launchers/tt_hold_launcher/ux-09.webp", "Hold launcher") },
      { "name": "BX-00 XenoXcalibur", "image": getPartImage("Hold-Launcher-Xcalibur-TT", "launchers/tt_hold_launcher/xcalibur.webp", "Hold launcher") }
    ]
  },
  {
    "id": "HB_HoldLauncher",
    "name": "Victory Grip Launcher (Hasbro)",
    "category": "Launchers",
    "company": "Hasbro",
    "type": "Hold",
    "image": getPartImage("Hold-Launcher-Default-HB", "launchers/hb_hold_launcher/victory_grip.webp", "Hold launcher"),
    "variants": [
      { "name": "Victory Grip Launcher Set", "image": getPartImage("Hold-Launcher-Default-HB", "launchers/hb_hold_launcher/victory_grip.webp", "Hold launcher") }
    ]

  },
  {
    "id": "HB_Clip&RipLauncher",
    "name": "Clip & Rip Launcher (Hasbro)",
    "category": "Launchers",
    "company": "Hasbro",
    "type": "Clip & Rip",
    "comingSoon": true,
    "image": getPartImage("Clip&Rip-Launcher-Default-HB", "launchers/hb_clip&rip/clip&rip.webp", "Clip & Rip launcher"),
    "variants": [
      { "name": "Clip & Rip Launcher Set", "image": getPartImage("Clip&Rip-Launcher-Default-HB", "launchers/hb_clip&rip/clip&rip.webp", "Clip & Rip launcher") }
    ]

  },

  // Grips
  {
    "id": "TT_LauncherGrip",
    "name": "Launcher Grip (Takara Tomy)",
    "category": "Launcher Grips",
    "company": "Takara Tomy",
    "image": getPartImage("Launcher-Grip-Default-TT", "launcher_grips/tt_launcher_grip/startdash.webp", "Launcher Grip"),
    "variants": [
      { "name": "Start Dash Set", "image": getPartImage("Launcher_Grip_Start_Dash", "launcher_grips/tt_launcher_grip/startdash.webp", "Launcher Grip"), "displayedName": "BX-07" },
      { "name": "BX-11", "image": getPartImage("Launcher-Grip-Default-TT", "launcher_grips/tt_launcher_grip/bx-11.webp", "Launcher Grip") },
      { "name": "BX-29", "image": getPartImage("Launcher-Grip-BX-29-TT", "launcher_grips/tt_launcher_grip/bx-29.webp", "Launcher Grip") },
      { "name": "BX-30", "image": getPartImage("Launcher-Grip-BX-30-TT", "launcher_grips/tt_launcher_grip/bx-30.webp", "Launcher Grip") },
      { "name": "BX-41", "image": getPartImage("Launcher-Grip-BX-41-TT", "launcher_grips/tt_launcher_grip/bx-41.webp", "Launcher Grip") },
      { "name": "BX-42", "image": getPartImage("Launcher-Grip-BX-42-TT", "launcher_grips/tt_launcher_grip/bx-42.webp", "Launcher Grip") },
      { "name": "BX-00 Clear Black Ver.", "image": getPartImage("Launcher-Grip-BX-00-Green-black-TT", "launcher_grips/tt_launcher_grip/bx-00_black.webp", "Launcher Grip") },
      { "name": "CX-16", "image": getPartImage("Launcher-Grip-CX-16", "launcher_grips/tt_launcher_grip/cx-16.webp", "Launcher Grip"), "comingSoon": true }
    ]
  },
  {
    "id": "HB_LauncherGrip",
    "name": "Launcher Grip (Hasbro)",
    "category": "Launcher Grips",
    "company": "Hasbro",
    "image": getPartImage("Launcher-Grip-Croc-HB", "launcher_grips/hb_launcher_grip/bitecroc.webp", "Launcher Grip"),
    "variants": [
      { "name": "Bite Croc Deluxe String Launcher & Custom Grip Set", "image": getPartImage("Launcher-Grip-Croc-HB", "launcher_grips/hb_launcher_grip/bitecroc.webp", "Launcher Grip") }
    ]
  },

  // Stadiums
  {
    "id": "TT_XtremeStadium",
    "name": "Xtreme Stadium",
    "category": "Stadiums",
    "company": "Takara Tomy",
    "image": getPartImage("Stadium-Default-TT", "stadiums/tt_xtreme_stadium/bx-10.webp", "Stadium"),
    "variants": [
      { "name": "Start Dash Set", "image": getPartImage("Stadium-Start-dash", "stadiums/tt_xtreme_stadium/startdash.webp", "Stadium") },
      { "name": "BX-10", "image": getPartImage("Stadium-Default-TT", "stadiums/tt_xtreme_stadium/bx-10.webp", "Stadium") },
      { "name": "BX-00", "image": getPartImage("Stadium-Red-TT", "stadiums/tt_xtreme_stadium/tokyotoy.webp", "Stadium") },
      { "name": "BX-17", "image": getPartImage("Stadium-BX-17-TT", "stadiums/tt_xtreme_stadium/bx-17.webp", "Stadium") },
      { "name": "UX-04", "image": getPartImage("Stadium-UX-04-TT", "stadiums/tt_xtreme_stadium/ux-04.webp", "Stadium") },
      { "name": "CX-04", "image": getPartImage("Stadium-CX-04-TT", "stadiums/tt_xtreme_stadium/cx-04.webp", "Stadium") },
      { "name": "UX-00 Bey Kick Off Set", "image": getPartImage("Stadium-barcelona-TT", "stadiums/tt_xtreme_stadium/beykickoff.webp", "Stadium") },
      { "name": "CX-16", "image": getPartImage("Stadium-CX-16", "stadiums/tt_xtreme_stadium/cx-16.webp", "Stadium"), "comingSoon": true }

    ]
  },
  {
    "id": "HB_TournamentStadium",
    "name": "Tournament Stadium",
    "category": "Stadiums",
    "company": "Hasbro",
    "image": getPartImage("Stadium-Default-Tournament-HB", "stadiums/hb_tournament_stadium/tournament_stadium.webp", "Stadium"),
    "variants": [
      { "name": "Tournament Stadium", "image": getPartImage("Stadium-Default-Tournament-HB", "stadiums/hb_tournament_stadium/tournament_stadium.webp", "Stadium") }
    ]

  },
  {
    "id": "HB_XtremeBeystadium",
    "name": "Xtreme Beystadium",
    "category": "Stadiums",
    "company": "Hasbro",
    "image": getPartImage("Stadium-Default-HB", "stadiums/hb_xtreme_beystadium/xtremebattle.webp", "Stadium"),
    "variants": [
      { "name": "Xtreme Battle Set", "image": getPartImage("Stadium-Default-HB", "stadiums/hb_xtreme_beystadium/xtremebattle.webp", "Stadium") }
    ]

  },
  {
    "id": "HB_DropAttackBeystadium",
    "name": "Drop Attack Beystadium",
    "category": "Stadiums",
    "company": "Hasbro",
    "image": getPartImage("Drop-Attack-HB", "stadiums/hb_dropattack_beystadium/dropattack.webp", "Stadium"),
    "variants": [
      { "name": "Drop Attack Battle Set", "image": getPartImage("Drop-Attack-HB", "stadiums/hb_dropattack_beystadium/dropattack.webp", "Stadium") }
    ]

  },
  {
    "id": "HB_ClashCarryBeystadium",
    "name": "Clash & Carry Beystadium",
    "category": "Stadiums",
    "company": "Hasbro",
    "image": getPartImage("CC-Stadium-HB", "stadiums/hb_clashcarry_beystadium/clashcarry.webp", "Stadium"),
    "variants": [
      { "name": "Clash & Carry Beystadium", "image": getPartImage("CC-Stadium-HB", "stadiums/hb_clashcarry_beystadium/clashcarry.webp", "Stadium") }

    ]

  },
  {
    "id": "HB_SneakAttackBeystadium",
    "name": "Sneak Attack Beystadium",
    "category": "Stadiums",
    "company": "Hasbro",
    "comingSoon": true,
    "image": getPartImage("SA-Stadium-HB", "stadiums/hb_sneakattack/sneakattack.webp", "Stadium"),
    "variants": [
      { "name": "Sneak Attack Battle Set", "image": getPartImage("SA-Stadium-HB", "stadiums/hb_sneakattack/sneakattack.webp", "Stadium") }
    ]

  },
  {
    "id": "HB_Beystadium",
    "name": "Beystadium",
    "category": "Stadiums",
    "company": "Hasbro",
    "image": getPartImage("Stadium-HB", "stadiums/hb_beystadium/beystadium.webp", "Stadium"),
    "variants": [
      { "name": "Beystadium", "image": getPartImage("Stadium-HB", "stadiums/hb_beystadium/beystadium.webp", "Stadium") },
      { "name": "Beystadium (V2)", "image": getPartImage("Stadium-HB", "stadiums/hb_beystadium/beystadium (V2).webp", "Stadium") }
    ]

  },
  {
    "id": "TT_WideXtremeStadium",
    "name": "Wide Xtreme Stadium",
    "category": "Stadiums",
    "company": "Takara Tomy",
    "image": getPartImage("WideStadium-Default-TT", "stadiums/tt_wide_xtreme_stadium/bx-32.webp", "Stadium"),
    "variants": [
      { "name": "BX-32", "image": getPartImage("WideStadium-Default-TT", "stadiums/tt_wide_xtreme_stadium/bx-32.webp", "Stadium") }
    ]
  },
  {

    "id": "HB_WideBeystadium",
    "name": "Wide BeyStadium",
    "category": "Stadiums",
    "company": "Hasbro",
    "image": getPartImage("WideStadium-Default-HB", "stadiums/hb_wide_beystadium/wide_beystadium.webp", "Stadium"),
    "variants": [
      { "name": "Wide Beystadium", "image": getPartImage("WideStadium-Default-HB", "stadiums/hb_wide_beystadium/wide_beystadium.webp", "Stadium") }
    ]


  },
  {
    "id": "TT_DoubleXtremeStadium",
    "name": "Double Xtreme Stadium",
    "category": "Stadiums",
    "company": "Takara Tomy",
    "image": getPartImage("DoubleStadium-Default-TT", "stadiums/tt_double_xtreme_stadium/bx-37.webp", "Stadium"),
    "variants": [
      { "name": "BX-37", "image": getPartImage("DoubleStadium-Default-TT", "stadiums/tt_double_xtreme_stadium/bx-37.webp", "Stadium") }
    ]
  },
  {
    "id": "HB_DoubleXtremeStadium",
    "name": "Double Xtreme Motorized Beystadium",
    "category": "Stadiums",
    "company": "Hasbro",
    "image": getPartImage("DoubleStadium-Default-HB", "stadiums/hb_double_xtreme_stadium/double_xtreme.webp", "Stadium"),
    "variants": [
      { "name": "Double Xtreme Motorized Beystadium", "image": getPartImage("DoubleStadium-Default-HB", "stadiums/hb_double_xtreme_stadium/double_xtreme.webp", "Stadium") }
    ]
  },
  {
    "id": "TT_InfinityStadium",
    "name": "Infinity Stadium",
    "category": "Stadiums",
    "company": "Takara Tomy",
    "image": getPartImage("InfinityStadium-Default-TT", "stadiums/tt_infinitystadium/bx-46.webp", "Stadium"),
    "variants": [
      { "name": "BX-46", "image": getPartImage("InfinityStadium-Default-TT", "stadiums/tt_infinitystadium/bx-46.webp", "Stadium") }
    ]
  },

  //Accessories
  {
    "id": "TT_BeybattlePass",
    "name": "Beybattle Pass",
    "category": "Accessories",
    "company": "Takara Tomy",
    "image": getPartImage("Pass-Default-TT", "accessories/tt_battlepass/bx-09.webp", "Beybattle Pass"),
    "variants": [
      { "name": "BX-09", "image": getPartImage("Pass-Default-TT", "accessories/tt_battlepass/bx-09.webp", "Beybattle Pass") }
    ]
  },
  {
    "id": "TT_DeckCase",
    "name": "3on3 Deck Case",
    "category": "Accessories",
    "company": "Takara Tomy",
    "image": getPartImage("DeckCase-Default-TT", "accessories/tt_deckcase/bx-12.webp", "Deck Case"),
    "variants": [
      { "name": "BX-12", "image": getPartImage("DeckCase-Default-TT", "accessories/tt_deckcase/bx-12.webp", "Deck Case") },
      { "name": "Evangelion Deck Set", "image": getPartImage("DeckCase-Evangelion-TT", "accessories/tt_deckcase/evangelion.webp", "Deck Case"), "comingSoon":true }
    ]
  },
  {
    "id": "Corocoro_XtremeContainer",
    "name": "X-treme Container",
    "category": "Accessories",
    "company": "Takara Tomy",
    "series": ["Corocoro"],
    "image": getPartImage("DeckCase-Default-corocoro", "accessories/corocoro_xtreme_container/xtremecontainer.webp", "Deck Case"),
    "variants":[
      { "name": "X-treme Container (Corocoro)", "image": getPartImage("DeckCase-corocoro", "accessories/corocoro_xtreme_container/xtremecontainer.webp", "Deck Case") },
      { "name": "World Championship 2025 (Corocoro)", "image": getPartImage("DeckCase-worldchamp2025-corocoro", "accessories/corocoro_xtreme_container/worldchamp2025.webp", "Deck Case") },
    ]

  },
  {
    "id": "Corocoro_XtremeBox",
    "name": "X-treme Box",
    "category": "Accessories",
    "company": "Takara Tomy",
    "series": ["Corocoro"],
    "image": getPartImage("Xtremebox-V1-corocoro", "accessories/corocoro_xtreme_box/xtremeboxv1.webp", "Beyblade Case"),
    "variants":[
      { "name": "X-treme Box (V1 Corocoro)", "image": getPartImage("Xtremebox-V1-corocoro", "accessories/corocoro_xtreme_box/xtremeboxv1.webp", "Beyblade Case") },
      { "name": "X-treme Box (V2 Corocoro)", "image": getPartImage("Xtremebox-V2-corocoro", "accessories/corocoro_xtreme_box/xtremeboxv2.webp", "Beyblade Case") },
    ]

  },
  {
    "id": "TT_GearCase",
    "name": "Gear Case",
    "category": "Accessories",
    "company": "Takara Tomy",
    "image": getPartImage("GearCase-Default-TT", "accessories/tt_gearcase/bx-25.webp", "Gear Case"),
    "variants": [
      { "name": "BX-25", "image": getPartImage("GearCase-Default-TT", "accessories/tt_gearcase/bx-25.webp", "Gear Case") },
      { "name": "BX-43", "image": getPartImage("GearCase-White-TT", "accessories/tt_gearcase/bx-43.webp", "Gear Case") }
    ]
  },
  // Bits
  ...([
    {
      "id": "A",
      "name": "A (Accel)",
      "category": "Bit",
      "type": "Attack",
      "attributes": ["Attack", "High", "16-tooth (Accel)"],
      "resistance": "High",
      "xDashGear": "16-tooth (Accel)",
      "weight": 2.58,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("A-UX-01", "bits/a/ux-01.webp", "bit"),
      "variants": [
        { "name": "UX-01 (TT)", "image": getPartImage("A-UX-01", "bits/a/ux-01.webp", "bit"), "identicalVariants": ["Buster Dran 1-60A (Starter) (HB)"] },
        { "name": "UX-04 (TT)", "image": getPartImage("A-UX-04", "bits/a/ux-04.webp", "bit") },
        { "name": "Corocoro (DranBuster Metal Coat Red) (TT)", "image": getPartImage("A-Corocoro", "bits/a/corocoro_dranbuster.webp", "bit") },
        { "name": "UX-00 Rare Bey Get (AeroPegasus) (TT)", "image": getPartImage("A-Rare-Bey-Get", "bits/a/rbg_aeropegasus.webp", "bit") },
        { "name": "UX-00 (DranBuster Barcelona Starter) (TT)", "image": getPartImage("A-Barcelona", "bits/a/barcelona.webp", "bit") },
        { "name": "Dran Choice Booster Cyan 1 (TT)", "image": getPartImage("A-Cyan-1", "bits/a/cyan1.webp", "bit") },
        { "name": "Dran Choice Booster Cyan 2 (TT)", "image": getPartImage("A-Cyan-2", "bits/a/cyan2.webp", "bit") },
        { "name": "Dran Choice Booster Violet 1 (TT)", "image": getPartImage("A-Violet-1", "bits/a/violet1.webp", "bit") },
        { "name": "Dran Choice Booster Violet 2 (TT)", "image": getPartImage("A-Violet-2", "bits/a/violet2.webp", "bit") },
        { "name": "Dran Choice Booster Black 1 (TT)", "image": getPartImage("A-Black-1", "bits/a/black1.webp", "bit") },
        { "name": "Dran Choice Booster Black 2 (TT)", "image": getPartImage("A-Black-2", "bits/a/black2.webp", "bit") },
        { "name": "BXG-41 (Spinosaurus) (TT)", "image": getPartImage("A-Spinosaurus", "bits/a/spinosaurus.webp", "bit"), "identicalVariants": ["Spinosaurus 3-85A (Dual Pack) (HB)"] },
        { "name": "Buster Dran 1-60A (Starter) (HB)", "image": getPartImage("A-UX-01", "bits/a/ux-01.webp", "bit"), "identicalVariants": ["UX-01 (TT)"] },
        { "name": "Spinosaurus 3-85A (Dual Pack) (HB)", "image": getPartImage("A-Spinosaurus", "bits/a/spinosaurus.webp", "bit"), "identicalVariants": ["BXG-41 (Spinosaurus) (TT)"] },
        { "name": "Beyblade X Evobattle (LeonFang) (TT)", "image": getPartImage("A-LeonFang", "bits/a/evobattle.webp", "bit") },
        { "name": "UX-00 Rare Bey Get (AeroPegasus Red Ver.) (TT)", "image": getPartImage("A-Rare-Bey-Get-red", "bits/a/aeropegasus_redver.webp", "bit") },
        { "name": "Evangelion Deck Set (TT)", "image": getPartImage("A-evangelion", "bits/a/evangelion.webp", "bit"), "comingSoon":true },
      ]
    },
    {
      "id": "B",
      "name": "B (Ball)",
      "category": "Bit",
      "type": "Stamina",
      "attributes": ["Stamina", "Low", "12-tooth (Normal)"],
      "resistance": "Low",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.02,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("B-BX-03", "bits/b/bx-03.webp", "bit"),
      "variants": [
        { "name": "BX-03 (TT)", "image": getPartImage("B-BX-03", "bits/b/bx-03.webp", "bit"), "identicalVariants": ["Arrow Wizard 4-80B (Starter) (HB)"] },
        { "name": "BX-05 (TT)", "image": getPartImage("B-BX-05", "bits/b/bx-05.webp", "bit") },
        { "name": "BX-08 (TT)", "image": getPartImage("B-BX-08", "bits/b/bx-08.webp", "bit"), "identicalVariants": ["Scythe Incendio 3-80B (Booster) (HB)"] },
        { "name": "BX-14-3 (TT)", "image": getPartImage("B-BX-14-3", "bits/b/bx-14-3.webp", "bit"), "identicalVariants": ["Sword Dran 3-80B (Dual Pack) (HB)"] },
        { "name": "BX-17 (TT)", "image": getPartImage("B-BX-17", "bits/b/bx-17.webp", "bit") },
        { "name": "BX-35-2 (TT)", "image": getPartImage("B-BX-35-2", "bits/b/bx-35-2.webp", "bit") },
        { "name": "BXG-29 (Iron Man) (TT)", "image": getPartImage("B-Iron-Man", "bits/b/ironman.webp", "bit"), "identicalVariants": ["Iron Man 4-80B (Dual Pack) (HB)"] },
        { "name": "BXG-36 (Megatron) (TT)", "image": getPartImage("B-Megatron", "bits/b/megatron.webp", "bit"), "identicalVariants": ["Megatron 4-80B (Dual Pack) (HB)"] },
        { "name": "BXG-33 (Luke Skywalker) (TT)", "image": getPartImage("Luke Skywalker 4-80B (Dual Pack)", "bits/b/lukeskywalker.webp", "bit") },
        { "name": "Rare Bey Get (Bit Set 1) (TT)", "image": getPartImage("B-Rare-Bey-Get", "bits/b/bitset1.webp", "bit") },
        { "name": "Rare Bey Get (Bit Set 2) (TT)", "image": getPartImage("B-Rare-Bey-Get-Bit-Set-2", "bits/b/bitset2.webp", "bit") },
        { "name": "UX-10 (TT)", "image": getPartImage("B-UX-10", "bits/b/ux-10.webp", "bit") },
        { "name": "UX-16-1 (TT)", "image": getPartImage("B-UX-16-1", "bits/b/ux-16-1.webp", "bit") },
        { "name": "UX-16-2 (TT)", "image": getPartImage("B-UX-16-2", "bits/b/ux-16-2.webp", "bit") },
        { "name": "UX-16-3 (TT)", "image": getPartImage("B-UX-16-3", "bits/b/ux-16-3.webp", "bit") },
        { "name": "Arrow Wizard 4-80B (Starter) (HB)", "image": getPartImage("B-BX-03", "bits/b/arrowwizard4-80b.webp", "bit"), "identicalVariants": ["BX-03 (TT)"] },
        { "name": "Scythe Incendio 3-80B (Booster) (HB)", "image": getPartImage("B-BX-08", "bits/b/scytheincendio3-80b.webp", "bit"), "identicalVariants": ["BX-08 (TT)"] },
        { "name": "Sword Dran 3-80B (Dual Pack) (HB)", "image": getPartImage("B-BX-14-3", "bits/b/sworddran3-80b.webp", "bit"), "identicalVariants": ["BX-14-3 (TT)"] },
        { "name": "Luke Skywalker 4-80B (Dual Pack) (HB)", "image": getPartImage("Luke Skywalker 4-80B (Dual Pack)", "bits/b/lukeskywalker.webp", "bit") },
        { "name": "Iron Man 4-80B (Dual Pack) (HB)", "image": getPartImage("B-Iron-Man", "bits/b/ironman.webp", "bit"), "identicalVariants": ["BXG-29 (Iron Man) (TT)"] },
        { "name": "Megatron 4-80B (Dual Pack) (HB)", "image": getPartImage("B-Megatron", "bits/b/megatron.webp", "bit"), "identicalVariants": ["BXG-36 (Megatron) (TT)"] },
        { "name": "Talon Ptera 3-80B (Booster) (HB)", "image": getPartImage("B-Talon-Ptera", "bits/b/talonptera.webp", "bit") },
        { "name": "Stormtrooper 5-70B (Dual Pack) (HB)", "image": getPartImage("B-Stormtrooper", "bits/b/stormtrooper.webp", "bit") },
        { "name": "X-treme Expansion Pack (HB)", "image": getPartImage("B-UX-10", "bits/b/xep.webp", "bit") },
      ]
    },
    {
      "id": "BS",
      "name": "BS (Bound Spike)",
      "category": "Bit",
      "type": "Defense",
      "attributes": ["Defense", "Low", "12-tooth (Normal)"],
      "resistance": "Low",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.02,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("BS-UX-10", "bits/bs/ux-10.webp", "bit"),
      "variants": [
        { "name": "UX-10 (TT)", "image": getPartImage("BS-UX-10", "bits/bs/ux-10.webp", "bit") },
        { "name": "BX-44 (TT)", "image": getPartImage("BS-BX-44", "bits/bs/bx-44.webp", "bit") },
        { "name": "Rare Bey Get (KnightMail Metal Coat Navy) (TT)", "image": getPartImage("BS-Rare-Bey-Get", "bits/bs/ux-00knightmail.webp", "bit") },
        { "name": "X-treme Expansion Pack (HB)", "image": getPartImage("BS-UX-10", "bits/bs/xep.webp", "bit") }
      ]
    },
    {
      "id": "C",
      "name": "C (Cyclone)",
      "category": "Bit",
      "type": "Attack",
      "attributes": ["Attack", "High", "12-tooth (Normal)"],
      "resistance": "High",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.12,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("C-BX-34", "bits/c/bx-34.webp", "bit"),
      "variants": [
        { "name": "BX-34 (TT)", "image": getPartImage("C-BX-34", "bits/c/bx-34.webp", "bit"), "identicalVariants": ["Cobalt Dragoon 2-60C (Deluxe Launcher Set) (HB)"] },
        { "name": "Tokyo Toy Show (CobaltDragoon Metal Coat Black) (TT)", "image": getPartImage("C-Tokyo-Toy-Show", "bits/c/tokyotoy.webp", "bit") },
        { "name": "UX-12-6 (TT)", "image": getPartImage("C-UX-12-6", "bits/c/ux-12-6.webp", "bit") },
        { "name": "Cobalt Dragoon 2-60C (Deluxe Launcher Set) (HB)", "image": getPartImage("C-BX-34", "bits/c/cobaltdragoon2-60c.webp", "bit"), "identicalVariants": ["BX-34 (TT)"] },
        { "name": "UX-18-2 (TT)", "image": getPartImage("C-UX-18-2", "bits/c/ux-18-2.webp", "bit") }
      ]
    },
    {
      "id": "D",
      "name": "D (Dot)",
      "category": "Bit",
      "type": "Defense",
      "attributes": ["Defense", "Low", "12-tooth (Normal)"],
      "resistance": "Low",
      "xDashGear": "12-tooth (Normal)",
      "weight": 1.99,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("D-BX-35-1", "bits/d/bx-35-1.webp", "bit"),
      "variants": [
        { "name": "BX-35-1 (TT)", "image": getPartImage("D-BX-35-1", "bits/d/bx-35-1.webp", "bit"), "identicalVariants": ["Obsidian Shell 4-60D (Booster) (HB)"] },
        { "name": "BXG-41 (Quetzalcoatlus) (TT)", "image": getPartImage("D-Quetzalcoatlus", "bits/d/quetzalcoatlus.webp", "bit"), "identicalVariants": ["Quetzalcoatlus 4-55D (Dual Pack) (HB)"] },
        { "name": "BX-35-3 (TT)", "image": getPartImage("D-BX-35-3", "bits/d/bx-35-3.webp", "bit") },
        { "name": "BX-35-6 (TT)", "image": getPartImage("D-BX-35-6", "bits/d/bx-35-6.webp", "bit") },
        { "name": "BX-39-3 (TT)", "image": getPartImage("D-BX-39-3", "bits/d/bx-39-3.webp", "bit") },
        { "name": "BX-00 (DracielShield) (TT)", "image": getPartImage("D-DracielShield", "bits/d/dracielshield.webp", "bit") },
        { "name": "CX-05-2 (TT)", "image": getPartImage("D-CX-05-2", "bits/d/cx-05-2.webp", "bit") },
        { "name": "Obsidian Shell 4-60D (Booster) (HB)", "image": getPartImage("D-BX-35-1", "bits/d/obsidianshell4-60d.webp", "bit"), "identicalVariants": ["BX-35-1 (TT)"] },
        { "name": "Quetzalcoatlus 4-55D (Dual Pack) (HB)", "image": getPartImage("D-Quetzalcoatlus", "bits/d/quetzalcoatlus.webp", "bit"), "identicalVariants": ["BXG-41 (Quetzalcoatlus) (TT)"] },
        { "name": "TT Mall Campaign (Transparent Shaft) (TT)", "image": getPartImage("D-TT-Mall", "bits/d/ttmall.webp", "bit") },
        { "name": "Draciel Shield 7-60D (Starter) (HB)", "image": getPartImage("D-DracielShield", "bits/d/dracielshield.webp", "bit") },
        { "name": "Reaper Rhino C 4-55D (Starter) (HB)", "image": getPartImage("D-CX-05-2", "bits/d/reaperrhino.webp", "bit") },
      ]
    },
    {
      "id": "DB",
      "name": "DB (Disc Ball)",
      "category": "Bit",
      "type": "Stamina",
      "attributes": ["Stamina", "Low", "12-tooth (Normal)"],
      "resistance": "Low",
      "xDashGear": "12-tooth (Normal)",
      "weight": 3.19,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("DB-UX-03", "bits/db/ux-03.webp", "bit"),
      "variants": [
        { "name": "UX-03 (TT)", "image": getPartImage("DB-UX-03", "bits/db/ux-03.webp", "bit"), "identicalVariants": ["Wand Wizard 5-70DB (Starter) (HB)"] },
        { "name": "UX-04 (TT)", "image": getPartImage("DB-UX-04", "bits/db/ux-04.webp", "bit"), "identicalVariants": ["Buster Dran 5-70DB (Starter) (HB)"] },
        { "name": "G3 2nd Prize (WizardRod Metal Coat Gold) (TT)", "image": getPartImage("DB-G3-2nd-Prize", "bits/db/g3.webp", "bit") },
        { "name": "Corocoro (PhoenixWing Metal Coat Blue) (TT)", "image": getPartImage("DB-Corocoro", "bits/db/phoenixwing_corocoro.webp", "bit") },
        { "name": "UX-00 (Dran Deck Set) (TT)", "image": getPartImage("DB-UX-00", "bits/db/drandeck.webp", "bit") },
        { "name": "CX-06-2 (TT)", "image": getPartImage("DB-CX-06-2", "bits/db/cx-06-2.webp", "bit") },
        { "name": "CX-10 (TT)", "image": getPartImage("DB-CX-10", "bits/db/cx-10.webp", "bit") },
        { "name": "Wand Wizard 5-70DB (Starter) (HB)", "image": getPartImage("DB-UX-03", "bits/db/wandwizard5-70db.webp", "bit"), "identicalVariants": ["UX-03 (TT)"] },
        { "name": "Buster Dran 5-70DB (Starter) (HB)", "image": getPartImage("DB-UX-04", "bits/db/busterdran5-70db.webp", "bit"), "identicalVariants": ["UX-04 (TT)"] }
      ]
    },
    {
      "id": "E",
      "name": "E (Elevate)",
      "category": "Bit",
      "type": "Balance",
      "attributes": ["Balance", "Low", "12-tooth (Normal)"],
      "resistance": "Low",
      "xDashGear": "12-tooth (Normal)",
      "weight": 3.25,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("E-BX-36-1", "bits/e/bx-36-1.webp", "bit"),
      "variants": [
        { "name": "BX-36-1 (TT)", "image": getPartImage("E-BX-36-1", "bits/e/bx-36-1.webp", "bit"), "identicalVariants": ["Tide Whale 5-80E (Booster) (HB)"] },
        { "name": "UX-12-4 (TT)", "image": getPartImage("E-UX-12-3", "bits/e/ux-12-4.webp", "bit") },
        { "name": "Rare Bey Get (MammothTusk Metal Coat Black) (TT)", "image": getPartImage("E-Rare-Bey-Get", "bits/e/mammothtusk.webp", "bit") },
        { "name": "Tide Whale 5-80E (Booster) (HB)", "image": getPartImage("E-BX-36-1", "bits/e/tidewhalestater.webp", "bit"), "identicalVariants": ["BX-36-1 (TT)"] },
        { "name": "BX-48-2 (TT)", "image": getPartImage("E-BX-48-2", "bits/e/bx-48-2.webp", "bit") },
        { "name": "Evangelion Deck Set (TT)", "image": getPartImage("E-evangelion", "bits/e/evangelion.webp", "bit"), "comingSoon":true },
      ]
    },
    {
      "id": "F",
      "name": "F (Flat)",
      "category": "Bit",
      "type": "Attack",
      "attributes": ["Attack", "High", "12-tooth (Normal)"],
      "resistance": "High",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.20,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("F-BX-01", "bits/f/bx-01.webp", "bit"),
      "variants": [
        { "name": "BX-01 (TT)", "image": getPartImage("F-BX-01", "bits/f/bx-01.webp", "bit"), "identicalVariants": ["Sword Dran 3-60F (Starter) (HB)"] },
        { "name": "BX-07 (TT)", "image": getPartImage("F-BX-07", "bits/f/bx-07.webp", "bit") },
        { "name": "BX-16-2 (TT)", "image": getPartImage("F-BX-16-2", "bits/f/bx-16-2.webp", "bit") },
        { "name": "BX-17 (TT)", "image": getPartImage("F-BX-17", "bits/f/bx-17.webp", "bit"), "identicalVariants": ["Sword Dran 3-60F (Dual Pack) (HB)"] },
        { "name": "BX-20 (TT)", "image": getPartImage("F-BX-20", "bits/f/bx-20.webp", "bit"), "identicalVariants": ["Keel Shark 3-80F (Dual Pack) (HB)"] },
        { "name": "BX-24-4 (TT)", "image": getPartImage("F-BX-24-4", "bits/f/bx-24-4.webp", "bit") },
        { "name": "BX-37 (TT)", "image": getPartImage("F-BX-37", "bits/f/bx-37.webp", "bit") },
        { "name": "BXA-01 (Shushiro DranSword) (TT)", "image": getPartImage("F-Shushiro", "bits/f/shushiro.webp", "bit") },
        { "name": "BX-00 (Lightning L-Drago) (TT)", "image": getPartImage("F-L-Drago", "bits/f/ldrago.webp", "bit") },
        { "name": "BXG-30 (Spider-Man) (TT)", "image": getPartImage("F-Spider-Man", "bits/f/spiderman.webp", "bit"), "identicalVariants": ["Spider-Man 3-60F (Dual Pack) (HB)"] },
        { "name": "BXG-34 (The Mandalorian) (TT)", "image": getPartImage("F-Mandalorian", "bits/f/mandalorian.webp", "bit"), "identicalVariants": ["The Mandalorian 3-60F (Dual Pack) (HB)"] },
        { "name": "BXG-37 (Optimus Primal) (TT)", "image": getPartImage("F-Optimus-Primal", "bits/f/optimusprimal.webp", "bit"), "identicalVariants": ["Optimus Primal 3-60F (Dual Pack) (HB)"] },
        { "name": "Corocoro (Persona HellsScythe) (TT)", "image": getPartImage("F-Corocoro-HellsScythe", "bits/f/personascythe.webp", "bit") },
        { "name": "CX-08-3 (TT)", "image": getPartImage("F-CX-08-3", "bits/f/cx-08-3.webp", "bit") },
        { "name": "G1 1st Place (DranSword Metal Coat Gold) (TT)", "image": getPartImage("F-G1-1st", "bits/f/gold.webp", "bit") },
        { "name": "G1 2nd Place (Dransword Silver) (TT)", "image": getPartImage("F-G1-2nd", "bits/f/silver.webp", "bit") },
        { "name": "G1 3rd Place (DranSword Metal Coat Bronze) (TT)", "image": getPartImage("F-G1-3rd", "bits/f/bronze.webp", "bit") },
        { "name": "Rare Bey Get (Bit Set 1) (TT)", "image": getPartImage("F-Rare-Bey-Get-Bit-Set", "bits/f/bitset1.webp", "bit") },
        { "name": "Rare Bey Get (Bit Set 2) (TT)", "image": getPartImage("F-Rare-Bey-Get-Bit-Set-2", "bits/f/bitset2.webp", "bit") },
        { "name": "Rare Bey Get (CobaltDrake Clear) (TT)", "image": getPartImage("F-Rare-Bey-Get-CobaltDrake-Clear", "bits/f/cobaltdrake_clear.webp", "bit") },
        { "name": "Rare Bey Get (CobaltDrake Metal Coat Blue) (TT)", "image": getPartImage("F-Rare-Bey-Get-CobaltDrake-Blue", "bits/f/cobaltdrake_blue.webp", "bit") },
        { "name": "UX-12-3 (TT)", "image": getPartImage("F-UX-12-3", "bits/f/ux-12-3.webp", "bit") },
        { "name": "Sword Dran 3-60F (Starter) (HB)", "image": getPartImage("F-BX-01", "bits/f/dranswordstarter.webp", "bit"), "identicalVariants": ["BX-01 (TT)"] },
        { "name": "Sword Dran 3-60F (Dual Pack) (HB)", "image": getPartImage("F-BX-17", "bits/f/dranswordred.webp", "bit"), "identicalVariants": ["BX-17 (TT)"] },
        { "name": "Keel Shark 3-80F (Dual Pack) (HB)", "image": getPartImage("F-BX-20", "bits/f/keelsharkgreen.webp", "bit"), "identicalVariants": ["BX-20 (TT)"] },
        { "name": "Spider-Man 3-60F (Dual Pack) (HB)", "image": getPartImage("F-Spider-Man", "bits/f/spiderman.webp", "bit"), "identicalVariants": ["BXG-30 (Spider-Man) (TT)"] },
        { "name": "The Mandalorian 3-60F (Dual Pack) (HB)", "image": getPartImage("F-Mandalorian", "bits/f/mandalorian.webp", "bit"), "identicalVariants": ["BXG-34 (The Mandalorian) (TT)"] },
        { "name": "Optimus Primal 3-60F (Dual Pack) (HB)", "image": getPartImage("F-Optimus-Primal", "bits/f/optimusprimal.webp", "bit"), "identicalVariants": ["BXG-37 (Optimus Primal) (TT)"] },
        { "name": "BX-48-1 (TT)", "image": getPartImage("F-BX-48-1", "bits/f/bx-48-1.webp", "bit") },
        { "name": "BX-00 CobaltDragoon Metal Coat: White J.League Ver. (TT)", "image": getPartImage("F-BX-00_white_goon", "bits/f/whitegoon.webp", "bit") },
      ]
    },
    {
      "id": "FB",
      "name": "FB (Free Ball)",
      "category": "Bit",
      "type": "Stamina",
      "attributes": ["Stamina", "Low", "12-tooth (Normal)"],
      "resistance": "Low",
      "xDashGear": "12-tooth (Normal)",
      "weight": 1.92,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("FB-UX-08", "bits/fb/ux-08.webp", "bit"),
      "variants": [
        { "name": "UX-08 (TT)", "image": getPartImage("FB-UX-08", "bits/fb/ux-08.webp", "bit"), "identicalVariants": ["Sterling Wolf 3-80FB (Starter) (HB)"] },
        { "name": "CX-11 (TT)", "image": getPartImage("FB-CX-11", "bits/fb/cx-11.webp", "bit") },
        { "name": "Sterling Wolf 3-80FB (Starter) (HB)", "image": getPartImage("FB-UX-08", "bits/fb/sterlingwolf.webp", "bit"), "identicalVariants": ["UX-08 (TT)"] },
        { "name": "X-Treme Battlers Pack (HB)", "image": getPartImage("FB-XBP", "bits/fb/xbp.webp", "bit") },
      ]
    },
    {
      "id": "FF",
      "name": "FF (Free Flat)",
      "category": "Bit",
      "type": "Attack",
      "attributes": ["Attack", "High", "12-tooth (Normal)"],
      "resistance": "High",
      "xDashGear": "12-tooth (Normal)",
      //"weight": ,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "comingSoon": true,
      "image": getPartImage("FF-BX-49", "bits/ff/bx-49.webp", "bit"),
      "variants": [
        { "name": "BX-49 (TT)", "image": getPartImage("FF-BX-49", "bits/ff/bx-49.webp", "bit") },
        { "name": "Strike Dran 4-50FF (Starter) (HB)", "image": getPartImage("FF-strikedran", "bits/ff/bx-49.webp", "bit") }
      ]

    },
    {
      "id": "G",
      "name": "G (Glide)",
      "category": "Bit",
      "type": "Stamina",
      "attributes": ["Stamina", "Low", "16-tooth (Accel)"],
      "resistance": "Low",
      "xDashGear": "16-tooth (Accel)",
      "weight": 2.53,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("G-UX-07", "bits/g/ux-07.webp", "bit"),
      "variants": [
        { "name": "UX-07 (TT)", "image": getPartImage("G-UX-07", "bits/g/ux-07.webp", "bit") },
        { "name": "Yggdrasil Team Pack (HB)", "image": getPartImage("G-UX-07", "bits/g/ytp.webp", "bit") },
        { "name": "UX-18-5 (TT)", "image": getPartImage("G-UX-18-5", "bits/g/ux-18-5.webp", "bit") }
      ]
    },
    {
      "id": "GB",
      "name": "GB (Gear Ball)",
      "category": "Bit",
      "type": "Stamina",
      "attributes": ["Stamina", "Low", "12-tooth (Normal)"],
      "resistance": "Low",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.02,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("GB-BX-24-1", "bits/gb/bx-24-1.webp", "bit"),
      "variants": [
        { "name": "BX-24-1 (TT)", "image": getPartImage("GB-BX-24-1", "bits/gb/bx-24-1.webp", "bit"), "identicalVariants": ["Gale Wyvern 5-80GB (Dual Pack) (HB)"] },
        { "name": "BX-24-3 (TT)", "image": getPartImage("GB-BX-24-3", "bits/gb/bx-24-3.webp", "bit") },
        { "name": "BX-24-6 (TT)", "image": getPartImage("GB-BX-24-6", "bits/gb/bx-24-6.webp", "bit"), "identicalVariants": ["Arrow Wizard 4-80GB (Booster) (HB)"] },
        { "name": "BX-36-3 (TT)", "image": getPartImage("GB-BX-36-3", "bits/gb/bx-36-3.webp", "bit") },
        { "name": "UX-12-1 (TT)", "image": getPartImage("GB-UX-12-1", "bits/gb/ux-12-1.webp", "bit"), "identicalVariants": ["Circle Ghost 0-80GB (Dual Pack) (HB)"] },
        { "name": "BXG-40 (T. Rex) (TT)", "image": getPartImage("GB-T-Rex", "bits/gb/t.rex.webp", "bit"), "identicalVariants": ["T. Rex 1-80GB (Dual Pack) (HB)"] },
        { "name": "Gale Wyvern 5-80GB (Dual Pack) (HB)", "image": getPartImage("GB-BX-24-1", "bits/gb/galewyvern.webp", "bit"), "identicalVariants": ["BX-24-1 (TT)"] },
        { "name": "Arrow Wizard 4-80GB (Booster) (HB)", "image": getPartImage("GB-BX-24-6", "bits/gb/arrowwizard4-80gb.webp", "bit"), "identicalVariants": ["BX-24-6 (TT)"] },
        { "name": "Circle Ghost 0-80GB (Dual Pack) (HB)", "image": getPartImage("GB-UX-12-1", "bits/gb/circleghoststock.webp", "bit"), "identicalVariants": ["UX-12-1 (TT)"] },
        { "name": "T. Rex 1-80GB (Dual Pack) (HB)", "image": getPartImage("GB-T-Rex", "bits/gb/t.rex.webp", "bit"), "identicalVariants": ["BXG-40 (T. Rex) (TT)"] },
        { "name": "Yell Kong 3-60GB (Booster, Dual Pack) (HB)", "image": getPartImage("GB-Yell-Kong", "bits/gb/yellkong.webp", "bit") },
        { "name": "Captain America 4-70GB (Dual Pack) (HB)", "image": getPartImage("GB-Captain-America", "bits/gb/captainamerica.webp", "bit") },
        { "name": "Stun Medusa 9-60GB (Starter) (HB)", "image": getPartImage("GB-Stun-Medusa", "bits/gb/stunmedusa.webp", "bit") },
        { "name": "BX-48-4 (TT)", "image": getPartImage("GB-BX-48-4", "bits/gb/bx-48-4.webp", "bit") },
        { "name": "BBLD (WyvernGale Metal Coat: Orange) (TT)", "image": getPartImage("GB-BBLD-Orange", "bits/gb/bbld_orange.webp", "bit") },
        { "name": "Rampart Aegis GB (Sneak Attack Battle Set) (HB)", "image": getPartImage("GB-Rampart-Aegis", "bits/gb/rampartaegisgb.webp", "bit"), "comingSoon": true },
      ]
    },
    {
      "id": "GF",
      "name": "GF (Gear Flat)",
      "category": "Bit",
      "type": "Attack",
      "attributes": ["Attack", "High", "12-tooth (Normal)"],
      "resistance": "High",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.26,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("GF-BX-23", "bits/gf/bx-23.webp", "bit"),
      "variants": [
        { "name": "BX-23 (TT)", "image": getPartImage("GF-BX-23", "bits/gf/bx-23.webp", "bit"), "identicalVariants": ["Soar Phoenix 9-60GF (Deluxe Launcher Set) (HB)"] },
        { "name": "UX-07 (TT)", "image": getPartImage("GF-UX-07", "bits/gf/ux-07.webp", "bit"), "identicalVariants": ["Cowl Sphinx 1-80GF (Dual Pack) (HB)"] },
        { "name": "UX-15 (TT)", "image": getPartImage("GF-UX-15", "bits/gf/ux-15.webp", "bit") },
        { "name": "B4 Exclusive (PhoenixWing Metal Coat Black) (TT)", "image": getPartImage("GF-B4-PhoenixWing", "bits/gf/b4_phoenixwing.webp", "bit") },
        { "name": "BX-00 (B4 Exclusive, SharkEdge Metal Coat Blue) (TT)", "image": getPartImage("GF-B4-SharkEdge", "bits/gf/b4_sharkedge.webp", "bit") },
        { "name": "BX-00 (XenoXcalibur) (TT)", "image": getPartImage("GF-XenoXcalibur", "bits/gf/xcalibur.webp", "bit") },
        { "name": "Corocoro (SamuraiSteel) (TT)", "image": getPartImage("GF-Corocoro", "bits/gf/samuraisteel.webp", "bit") },
        { "name": "Soar Phoenix 9-60GF (Deluxe Launcher Set) (HB)", "image": getPartImage("GF-BX-23", "bits/gf/soarphoenix.webp", "bit"), "identicalVariants": ["BX-23 (TT)"] },
        { "name": "Cowl Sphinx 1-80GF (Dual Pack) (HB)", "image": getPartImage("GF-UX-07", "bits/gf/cowlsphinx1-80gf.webp", "bit"), "identicalVariants": ["UX-07 (TT)"] },
        { "name": "Roar Tyranno 9-60GF (Booster) (HB)", "image": getPartImage("GF-Roar-Tyranno", "bits/gf/roartyranno.webp", "bit") },
        { "name": "WhaleWave Tsuri Spirits Wonder Ver. (TT)", "image": getPartImage("GF-WhaleWave-Tsuri-Spirits", "bits/gf/tsurispirits(whalewave).webp", "bit") },
      ]
    },
    {
      "id": "GN",
      "name": "GN (Gear Needle)",
      "category": "Bit",
      "type": "Defense",
      "attributes": ["Defense", "Low", "12-tooth (Normal)"],
      "resistance": "Low",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.01,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("GN-BX-27-1", "bits/gn/bx-27-1.webp", "bit"),
      "variants": [
        { "name": "BX-27-1 (TT)", "image": getPartImage("GN-BX-27-1", "bits/gn/bx-27-1.webp", "bit"), "identicalVariants": ["Cowl Sphinx 9-80GN (Booster) (HB)"] },
        { "name": "UX-06 (TT)", "image": getPartImage("GN-UX-06", "bits/gn/ux-06.webp", "bit"), "identicalVariants": ["Crest Leon 7-60GN (Dual Pack) (HB)"] },
        { "name": "BX-00 (Rock Leone) (TT)", "image": getPartImage("GN-RockLeone", "bits/gn/rockleone.webp", "bit") },
        { "name": "Cowl Sphinx 9-80GN (Booster) (HB)", "image": getPartImage("GN-BX-27-1", "bits/gn/cowlsphinx.webp", "bit"), "identicalVariants": ["BX-27-1 (TT)"] },
        { "name": "Crest Leon 7-60GN (Dual Pack) (HB)", "image": getPartImage("GN-UX-06", "bits/gn/crestleon.webp", "bit"), "identicalVariants": ["UX-06 (TT)"] },
        { "name": "Miles Morales 1-60GN (Dual Pack) (HB)", "image": getPartImage("GN-Miles-Morales", "bits/gn/milesmorales.webp", "bit") },
        { "name": "UX-00 WyvernHover (DMM Lottery exclusive) (TT)", "image": getPartImage("GN UX-00 WyvernHover (DMM Lottery exclusive)", "bits/gn/wyvernhover.webp", "bit") },
        { "name": "UX-00 WyvernHover (Metal Coat: Violet) (DMM Lottery exclusive) (TT)", "image": getPartImage("GN UX-00 WyvernHover (Metal Coat: Violet) (DMM Lottery exclusive)", "bits/gn/wyvernhoverpurple.webp", "bit") },
        { "name": "Ridge Triceratops 9-80GN (Booster) (HB)", "image": getPartImage("GN-RidgeTriceratops", "bits/gn/ridgetriceratops.webp", "bit") },
      ]
    },
    {
      "id": "GP",
      "name": "GP (Gear Point)",
      "category": "Bit",
      "type": "Balance",
      "attributes": ["Balance", "High", "12-tooth (Normal)"],
      "resistance": "High",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.27,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("GP-BX-26", "bits/gp/bx-26.webp", "bit"),
      "variants": [
        { "name": "BX-26 (TT)", "image": getPartImage("GP-BX-26", "bits/gp/bx-26.webp", "bit"), "identicalVariants": ["Sting Unicorn 5-60GP (Booster) (HB)"] },
        { "name": "BX-39-1 (TT)", "image": getPartImage("GP-BX-39-1", "bits/gp/bx-39-1.webp", "bit"), "identicalVariants": ["Shelter Drake 7-80GP (Starter) (HB)"] },
        { "name": "UX-05-3 (TT)", "image": getPartImage("GP-UX-05-3", "bits/gp/ux-05-3.webp", "bit") },
        { "name": "BX-00 (B4 Exclusive DranDagger Metal Coat Black) (TT)", "image": getPartImage("GP-B4-DranDagger", "bits/gp/giants_drandagger.webp", "bit") },
        { "name": "Sting Unicorn 5-60GP (Booster) (HB)", "image": getPartImage("GP-BX-26", "bits/gp/stingunicorn.webp", "bit"), "identicalVariants": ["BX-26 (TT)"] },
        { "name": "Shelter Drake 7-80GP (Starter) (HB)", "image": getPartImage("GP-BX-39-1", "bits/gp/shelterdrake.webp", "bit"), "identicalVariants": ["BX-39-1 (TT)"] },
        { "name": "Bumblebee 3-60GP (Dual Pack) (HB)", "image": getPartImage("GP-Bumblebee", "bits/gp/bumblebee.webp", "bit") },
        { "name": "Tsuri Spirits Promo (SharkEdge Metal Coat Black) (TT)", "image": getPartImage("GP-TsuriSpirits", "bits/gp/tsurishark.webp", "ratchet") },
        { "name": "BBLD (UnicornSting Metal Coat: Pink) (TT)", "image": getPartImage("GP-BBLD-Pink", "bits/gp/bbld_pink.webp", "ratchet") }

      ]
    },
    {
      "id": "GR",
      "name": "GR (Gear Rush)",
      "category": "Bit",
      "type": "Attack",
      "attributes": ["Attack", "High", "10-tooth (Rush)"],
      "resistance": "High",
      "xDashGear": "10-tooth (Rush)",
      "weight": 2.1,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("GR-CX-06-1", "bits/gr/cx-06-1.webp", "bit"),
      "variants": [
        { "name": "CX-06-1 (TT)", "image": getPartImage("GR-CX-06-1", "bits/gr/cx-06-1.webp", "bit"), "identicalVariants": ["Brush Fox J 9-70 GR (Starter) (HB)"] },
        { "name": "Brush Fox J 9-70GR (Starter) (HB)", "image": getPartImage("GR-CX-06-1", "bits/gr/brushfox.webp", "bit"), "identicalVariants": ["CX-06-1 (TT)"] },
        { "name": "CX-17-2 (TT)", "image": getPartImage("GR-CX-17-2", "bits/gr/cx-17-2.webp", "bit",), "comingSoon":true},
      ]
    },
    {
      "id": "GU",
      "name": "GU (Gear Unite)",
      "category": "Bit",
      "type": "Balance",
      "attributes": ["Balance", "High", "12-tooth (Normal)"],
      "resistance": "High",
      "xDashGear": "12-tooth (Normal)",
      //"weight": 2.1,
      "company": "Takara Tomy",
      "comingSoon": true,
      "image": getPartImage("GU-CX-17-1", "bits/gu/cx-17-1.webp", "bit"),
      "variants": [
        { "name": "CX-17-1 (TT)", "image": getPartImage("GU-CX-17-1", "bits/gu/cx-17-1.webp", "bit")},
        { "name": "CX-17-4 (TT)", "image": getPartImage("GU-CX-17-4", "bits/gu/cx-17-4.webp", "bit",)},
        { "name": "CX-17-6 (TT)", "image": getPartImage("GU-CX-17-6", "bits/gu/cx-17-6.webp", "bit",)},
      ]
    },
    {
      "id": "H",
      "name": "H (Hexa)",
      "category": "Bit",
      "type": "Balance",
      "attributes": ["Balance", "High", "16-tooth (Accel)"],
      "resistance": "High",
      "xDashGear": "16-tooth (Accel)",
      "weight": 2.54,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("H-UX-02", "bits/h/ux-02.webp", "bit"),
      "variants": [
        { "name": "UX-02 (TT)", "image": getPartImage("H-UX-02", "bits/h/ux-02.webp", "bit"), "identicalVariants": ["Hammer Incendio 3-70H (Starter) (HB)"] },
        { "name": "UX-12-2 (TT)", "image": getPartImage("H-UX-12-2", "bits/h/ux-12-2.webp", "bit") },
        { "name": "BX-35-5 (TT)", "image": getPartImage("H-BX-35-5", "bits/h/bx-35-5.webp", "bit"), "identicalVariants": ["Soar Phoenix 5-80H (Booster) (HB)"] },
        { "name": "UX-00 (Bey Kick Off Set HellsHammer) (TT)", "image": getPartImage("H-Barcelona", "bits/h/barcelona.webp", "bit") },
        { "name": "Hammer Incendio 3-70H (Starter) (HB)", "image": getPartImage("H-UX-02", "bits/h/hammerincendio.webp", "bit"), "identicalVariants": ["UX-02 (TT)"] },
        { "name": "Soar Phoenix 5-80H (Booster) (HB)", "image": getPartImage("H-BX-35-5", "bits/h/soarphoenix5-80h.webp", "bit"), "identicalVariants": ["BX-35-5 (TT)"] },
        { "name": "UX-19 (TT)", "image": getPartImage("H-UX-19", "bits/h/ux-19.webp", "bit"), "comingSoon": true },
        { "name": "Rocket Griffon H (Starter) (HB)", "image": getPartImage("H-rocketgriffon", "bits/h/ux-19.webp", "bit"), "comingSoon": true },
      ]
    },
    {
      "id": "HN",
      "name": "HN (High Needle)",
      "category": "Bit",
      "type": "Defense",
      "attributes": ["Defense", "Low", "12-tooth (Normal)"],
      "resistance": "Low",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.12,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("HN-BX-13", "bits/hn/bx-13.webp", "bit"),
      "variants": [
        { "name": "BX-13 (TT)", "image": getPartImage("HN-BX-13", "bits/hn/bx-13.webp", "bit"), "identicalVariants": ["Lance Knight 4-80HN (Starter) (HB)"] },
        { "name": "BX-16-3 (TT)", "image": getPartImage("HN-BX-16-3", "bits/hn/bx-16-3.webp", "bit"), "identicalVariants": ["Tail Viper 3-80HN (Dual Pack) (HB)"] },
        { "name": "BX-24-5 (TT)", "image": getPartImage("HN-BX-24-5", "bits/hn/bx-24-5.webp", "bit") },
        { "name": "BX-36-2 (TT)", "image": getPartImage("HN-BX-36-2", "bits/hn/bx-36-2.webp", "bit") },
        { "name": "CX-11 (TT)", "image": getPartImage("HN-CX-11", "bits/hn/cx-11.webp", "bit") },
        { "name": "Lance Knight 4-80HN (Starter) (HB)", "image": getPartImage("HN-BX-13", "bits/hn/lanceknight.webp", "bit"), "identicalVariants": ["BX-13 (TT)"] },
        { "name": "Tail Viper 3-80HN (Dual Pack) (HB)", "image": getPartImage("HN-BX-16-3", "bits/hn/tailviper.webp", "bit"), "identicalVariants": ["BX-16-3 (TT)"] },
        { "name": "Knife Shinobi 4-80HN (Dual Pack) (HB)", "image": getPartImage("HN-Knife-Shinobi", "bits/hn/knifeshinobi.webp", "bit") },
        { "name": "General Grievous 3-80HN (Dual Pack) (HB)", "image": getPartImage("HN-General-Grievous", "bits/hn/generalgreivous.webp", "bit") },
        { "name": "Antler Stag B 2-60HN (Starter) (HB)", "image": getPartImage("HN-Antler-Stag", "bits/hn/antlerstag.webp", "bit") },
        { "name": "X-Treme Battlers Pack (HB)", "image": getPartImage("HN-XBP", "bits/hn/xbp.webp", "bit") },
        { "name": "BBLD (KnightLance Metal Coat: Green) (TT)", "image": getPartImage("HN-BBLD-Green", "bits/hn/bbld_green.webp", "bit") },
      ]
    },
    {
      "id": "HT",
      "name": "HT (High Taper)",
      "category": "Bit",
      "type": "Balance",
      "attributes": ["Balance", "High", "12-tooth (Normal)"],
      "resistance": "High",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.29,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("HT-BX-21", "bits/ht/bx-21.webp", "bit"),
      "variants": [
        { "name": "BX-21 (TT)", "image": getPartImage("HT-BX-21", "bits/ht/bx-21.webp", "bit"), "identicalVariants": ["Chain Incendio 5-60HT (Dual Pack) (HB)"] },
        { "name": "BX-27-2 (TT)", "image": getPartImage("HT-BX-27-2", "bits/ht/bx-27-2.webp", "bit") },
        { "name": "CX-08-2 (TT)", "image": getPartImage("HT-CX-08-2", "bits/ht/cx-08-2.webp", "bit") },
        { "name": "Rare Bey Get (HellsChain Metal Coat Black) (TT)", "image": getPartImage("HT-Rare-Bey-Get", "bits/ht/rbghellschain.webp", "bit") },
        { "name": "Chain Incendio 5-60HT (Dual Pack) (HB)", "image": getPartImage("HT-BX-21", "bits/ht/chainincendio.webp", "bit"), "identicalVariants": ["BX-21 (TT)"] },
        { "name": "Green Goblin 9-80HT (Dual Pack) (HB)", "image": getPartImage("HT-Green-Goblin", "bits/ht/greengoblin.webp", "bit") }
      ]
    },
    {
      "id": "I",
      "name": "I (Ignition)",
      "category": "Bit",
      "type": "Attack",
      "attributes": ["Attack", "High", "16-tooth (Accel)"],
      "resistance": "High",
      "xDashGear": "16-tooth (Accel)",
      "weight": 2.40,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("I-CX-13", "bits/i/cx-13.webp", "bit"),
      "variants": [
        { "name": "CX-13 (TT)", "image": getPartImage("I-CX-13", "bits/i/cx-13.webp", "bit") },
        { "name": "CX-16 (TT)", "image": getPartImage("I-CX-16", "bits/i/cx-16.webp", "bit") },
        { "name": "Blitz Bahamut BK 1-50I (Starter) (HB)", "image": getPartImage("I-CX-13", "bits/i/cx-13.webp", "bit"), "comingSoon":true },
        { "name": "Corocoro (BahamutBlitz Metal Coat: Yellow) (TT)", "image": getPartImage("I-corocoro-yellow", "bits/i/corocoro_yellow.webp", "bit",)},
      
      ]
    },
    {
      "id": "J",
      "name": "J (Jolt)",
      "category": "Bit",
      "type": "Attack",
      "attributes": ["Attack", "High", "16-tooth (Accel)"],
      "resistance": "High",
      "xDashGear": "16-tooth (Accel)",
      "weight": 2.56,
      "company": "Takara Tomy",
      "image": getPartImage("J-UX-17", "bits/j/ux-17.webp", "bit"),
      "variants": [
        { "name": "UX-17 (TT)", "image": getPartImage("J-UX-17", "bits/j/ux-17.webp", "bit") },
        { "name": "Meteoroid Dragoon 3-70J (Deluxe Launcher Set) (HB)", "image": getPartImage("J-UX-17", "bits/j/ux-17.webp", "bit"), "comingSoon":true }
        
      ]

    },
    {
      "id": "K",
      "name": "K (Kick)",
      "category": "Bit",
      "type": "Balance",
      "attributes": ["Balance", "High", "12-tooth (Normal)"],
      "resistance": "High",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.18,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("K-CX-05-1", "bits/k/cx-05-1.webp", "bit"),
      "variants": [
        { "name": "CX-05-1 (TT)", "image": getPartImage("K-CX-05-1", "bits/k/cx-05-1.webp", "bit"), "identicalVariants": ["Reaper Incendio T 4-70K (Starter) (HB)"] },
        { "name": "CX-05-4 (TT)", "image": getPartImage("K-CX-05-4", "bits/k/cx-05-4.webp", "bit") },
        { "name": "CX-05-6 (TT)", "image": getPartImage("K-CX-05-6", "bits/k/cx-05-6.webp", "bit") },
        { "name": "Reaper Incendio T 4-70K (Starter) (HB)", "image": getPartImage("K-CX-05-1", "bits/k/reaperincendio.webp", "bit"), "identicalVariants": ["CX-05-1 (TT)"] },
        { "name": "Corocoro (DranArc) (TT)", "image": getPartImage("K-DranArc", "bits/k/dranarc.webp", "bit") },
        { "name": "UX-00 (SamuraiSaber Metal Coat: Samurai Blue JFA Ver.) (TT)", "image": getPartImage("K-UX-00-SamuraiSaber-Metal-Coat-Samurai-Blue-JFA-Ver.", "bits/k/samuraisaber_jfa.webp", "bit"), "comingSoon": true}
      ]
    },
    {
      "id": "L",
      "name": "L (Level)",
      "category": "Bit",
      "type": "Attack",
      "attributes": ["Attack", "High", "16-tooth (Accel)"],
      "resistance": "High",
      "xDashGear": "16-tooth (Accel)",
      "weight": 2.65,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("L-UX-09", "bits/l/ux-09.webp", "bit"),
      "variants": [
        { "name": "UX-09 (TT)", "image": getPartImage("L-UX-09", "bits/l/ux-09.webp", "bit"), "identicalVariants": ["Saber Samurai 2-70L (Victory Grip Launcher Set) (HB)"] },
        { "name": "Corocoro (SamuraiSaber) (TT)", "image": getPartImage("L-SamuraiSaber-corocoro", "bits/l/corocoro_carrotsaber.webp", "bit") },
        { "name": "UX-15 (TT)", "image": getPartImage("L-UX-15", "bits/l/ux-15.webp", "bit") },
        { "name": "Saber Samurai 2-70L (Victory Grip Launcher Set) (HB)", "image": getPartImage("L-UX-09", "bits/l/sabersamurai.webp", "bit"), "identicalVariants": ["UX-09 (TT)"] }
      ]
    },
    {
      "id": "LF",
      "name": "LF (Low Flat)",
      "category": "Bit",
      "type": "Attack",
      "attributes": ["Attack", "High", "12-tooth (Normal)"],
      "resistance": "High",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.13,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("LF-BX-14-1", "bits/lf/bx-14-1.webp", "bit"),
      "variants": [
        { "name": "BX-14-1 (TT)", "image": getPartImage("LF-BX-14-1", "bits/lf/bx-14-1.webp", "bit"), "identicalVariants": ["Keel Shark 3-60LF (Booster) (HB)"] },
        { "name": "BX-14-4 (TT)", "image": getPartImage("LF-BX-14-4", "bits/lf/bx-14-4.webp", "bit") },
        { "name": "BX-14-5 (TT)", "image": getPartImage("LF-BX-14-5", "bits/lf/bx-14-5.webp", "bit") },
        { "name": "BX-21 (TT)", "image": getPartImage("LF-BX-21", "bits/lf/bx-21.webp", "bit"), "identicalVariants": ["Lance Knight 3-60LF (Booster) (HB)"] },
        { "name": "CX-05-5 (TT)", "image": getPartImage("LF-CX-05-5", "bits/lf/cx-05-5.webp", "bit") },
        { "name": "UX-05-2 (TT)", "image": getPartImage("LF-UX-05-2", "bits/lf/ux-05-2.webp", "bit") },
        { "name": "Beyblade X XONE (ShinobiKnife) (TT)", "image": getPartImage("LF-ShinobiKnife", "bits/lf/xone.webp", "bit") },
        { "name": "UX-00 (Dran Deck Set) (TT)", "image": getPartImage("LF-UX-00", "bits/lf/drandeck.webp", "bit") },
        { "name": "Keel Shark 3-60LF (Booster) (HB)", "image": getPartImage("LF-BX-14-1", "bits/lf/keelshark.webp", "bit"), "identicalVariants": ["BX-14-1 (TT)"] },
        { "name": "Lance Knight 3-60LF (Booster) (HB)", "image": getPartImage("LF-BX-21", "bits/lf/lanceknight.webp", "bit"), "identicalVariants": ["BX-21 (TT)"] },
        { "name": "Bite Croc 3-60LF (Dual Pack) (HB)", "image": getPartImage("LF-Bite-Croc", "bits/lf/bitecroc.webp", "bit") },
        { "name": "Chewbacca 4-80LF (Dual Pack) (HB)", "image": getPartImage("LF-Chewbacca", "bits/lf/chewbacca.webp", "bit") },
        { "name": "Corocoro Mail Order (OrochiCluster) (TT)", "image": getPartImage("LF-OrochiCluster", "bits/lf/orochicluster.webp", "bit") },
        { "name": "Rudder Phoenix 4-70LF (Starter) (HB)", "image": getPartImage("LF-CX-05-5", "bits/lf/rudderphoenix.webp", "bit") },
        { "name": "Cutter Shinobi LF (Sneak Attack Battle Set) (HB)", "image": getPartImage("LF-Cuttershinobi", "bits/lf/cuttershinobilf.webp", "bit"), "comingSoon": true },
      ]
    },
    {
      "id": "LO",
      "name": "LO (Low Orb)",
      "category": "Bit",
      "type": "Stamina",
      "attributes": ["Stamina", "Low", "12-tooth (Normal)"],
      "resistance": "Low",
      "weight": 1.87,
      "xDashGear": "12-tooth (Normal)",
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("LO-CX-02", "bits/lo/cx-02.webp", "bit"),
      "variants": [
        { "name": "CX-02 (TT)", "image": getPartImage("LO-CX-02", "bits/lo/cx-02.webp", "bit"), "identicalVariants": ["Arc Wizard R 4-55LO (Starter) (HB)"] },
        { "name": "Arc Wizard R 4-55LO (Starter) (HB)", "image": getPartImage("LO-CX-02", "bits/lo/arcwizard.webp", "bit"), "identicalVariants": ["CX-02 (TT)"] },
        { "name": "CX-00 (WizardArc Metal Coat: Black) (TT)", "image": getPartImage("LO-Bit-CX-00-Metal-Coat-Black", "bits/lo/black_wizard.webp", "bit") },
        { "name": "CX-17-3 (TT)", "image": getPartImage("LO-CX-17-3", "bits/lo/cx-17-3.webp", "bit",),"comingSoon":true}
      ]
    },
    {
      "id": "LR",
      "name": "LR (Low Rush)",
      "category": "Bit",
      "type": "Attack",
      "attributes": ["Attack", "High", "10-tooth (Rush)"],
      "resistance": "High",
      "xDashGear": "10-tooth (Rush)",
      "weight": 1.94,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("LR-UX-11", "bits/lr/ux-11.webp", "bit"),
      "variants": [
        { "name": "UX-11 (TT)", "image": getPartImage("LR-UX-11", "bits/lr/ux-11.webp", "bit"), "identicalVariants": ["Impact Drake 9-60LR (Drop Attack Battle Set) (HB)"] },
        { "name": "Impact Drake 9-60LR (Drop Attack Battle Set) (HB)", "image": getPartImage("LR-UX-11", "bits/lr/impactdrake.webp", "bit"), "identicalVariants": ["UX-11 (TT)"] },
        { "name": "UX-18-6 (TT)", "image": getPartImage("LR-UX-18-6", "bits/lr/ux-18-6.webp", "bit") },
        { "name": "Circle Ghost 4-60LR (Dual Pack) (HB)", "image": getPartImage("LR-circleghost", "bits/lr/circleghost.webp", "bit") }

      ]
    },
    {
      "id": "M",
      "name": "M (Merge)",
      "category": "Bit",
      "type": "Balance",
      "attributes": ["Balance", "High", "18-tooth (Merge)"],
      "rubber": true,
      "resistance": "High",
      "xDashGear": "18-tooth (Merge)",
      "weight": 3.36,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("M-BX-45", "bits/m/bx-45.webp", "bit"),
      "variants": [
        { "name": "BX-45 (TT)", "image": getPartImage("M-BX-45", "bits/m/bx-45.webp", "bit") },
        { "name": "Calibur Samurai 6-70M (Dual Pack) (HB)", "image": getPartImage("M-BX-45", "bits/m/calibursamurai.webp", "bit") },
        { "name": "BX-00 (StormSpriggan) (TT)", "image": getPartImage("M-stormspriggan", "bits/m/stormspriggan.webp", "bit") },
      ]
    },
    {
      "id": "MN",
      "name": "MN (Metal Needle)",
      "category": "Bit",
      "type": "Defense",
      "attributes": ["Defense", "Low", "12-tooth (Normal)"],
      "resistance": "Low",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.79,
      "bannedInRanked": true,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("MN-UX-05-1", "bits/mn/ux-05-1.webp", "bit"),
      "variants": [
        { "name": "UX-05-1 (TT)", "image": getPartImage("MN-UX-05-1", "bits/mn/ux-05-1.webp", "bit"), "identicalVariants": ["Shadow Shinobi 1-80MN (Starter) (HB)"] },
        { "name": "UX-10 (TT)", "image": getPartImage("MN-UX-10", "bits/mn/ux-10.webp", "bit") },
        { "name": "CX-08-4 (TT)", "image": getPartImage("MN-CX-08-4", "bits/mn/cx-08-4.webp", "bit") },
        { "name": "Shadow Shinobi 1-80MN (Starter) (HB)", "image": getPartImage("MN-UX-05-1", "bits/mn/shadowshinobi.webp", "bit"), "identicalVariants": ["UX-05-1 (TT)"] },
        { "name": "X-treme Expansion Pack (HB)", "image": getPartImage("MN-UX-10", "bits/mn/xep.webp", "bit") }
      ]
    },
    {
      "id": "N",
      "name": "N (Needle)",
      "category": "Bit",
      "type": "Defense",
      "attributes": ["Defense", "Low", "12-tooth (Normal)"],
      "resistance": "Low",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.0,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("N-BX-04", "bits/n/bx-04.webp", "bit"),
      "variants": [
        { "name": "BX-04 (TT)", "image": getPartImage("N-BX-04", "bits/n/bx-04.webp", "bit"), "identicalVariants": ["Helm Knight 3-80N (Starter) (HB)"] },
        { "name": "BX-06 (TT)", "image": getPartImage("N-BX-06", "bits/n/bx-06.webp", "bit") },
        { "name": "BX-08 (TT)", "image": getPartImage("N-BX-08", "bits/n/bx-08.webp", "bit"), "identicalVariants": ["Arrow Wizard 4-60N (Dual Pack) (HB)"] },
        { "name": "BX-14-2 (TT)", "image": getPartImage("N-BX-14-2", "bits/n/bx-14-2.webp", "bit") },
        { "name": "BX-21 (TT)", "image": getPartImage("N-BX-21", "bits/n/bx-21.webp", "bit") },
        { "name": "BXG-34 (Moff Gideon) (TT)", "image": getPartImage("N-Moff-Gideon", "bits/n/moffgideon.webp", "bit"), "identicalVariants": ["Moff Gideon 3-80N (Dual Pack) (HB)"] },
        { "name": "BXG-37 (Starscream) (TT)", "image": getPartImage("N-Starscream", "bits/n/starscream.webp", "bit"), "identicalVariants": ["Starscream 3-80N (Dual Pack) (HB)"] },
        { "name": "UX-12-5 (TT)", "image": getPartImage("N-UX-12-5", "bits/n/ux-12-5.webp", "bit") },
        { "name": "BXG-30 (Venom) (TT)", "image": getPartImage("N-UX-12-4", "bits/n/venom.webp", "bit"), "identicalVariants": ["Venom 3-80N (Dual Pack) (HB)"] },
        { "name": "G3 2nd Prize (KnightShield Metal Coat Gold) (TT)", "image": getPartImage("N-G3-2nd-Prize", "bits/n/g3.webp", "bit") },
        { "name": "Rare Bey Get (Bit Set 1) (TT)", "image": getPartImage("N-Rare-Bey-Get", "bits/n/bitset1.webp", "bit") },
        { "name": "Rare Bey Get (Bit Set 2) (TT)", "image": getPartImage("N-Rare-Bey-Get-Bit-Set-2", "bits/n/bitset2.webp", "bit") },
        { "name": "UX-00 (Dran Deck Set) (TT)", "image": getPartImage("N-UX-00", "bits/n/drandeck.webp", "bit") },
        { "name": "Helm Knight 3-80N (Starter) (HB)", "image": getPartImage("N-BX-04", "bits/n/helmknight.webp", "bit"), "identicalVariants": ["BX-04 (TT)"] },
        { "name": "Arrow Wizard 4-60N (Dual Pack) (HB)", "image": getPartImage("N-BX-08", "bits/n/arrowwizard.webp", "bit"), "identicalVariants": ["BX-08 (TT)"] },
        { "name": "Hover Wyvern 3-85N (Drop Attack Battle Set) (HB)", "image": getPartImage("N-Hover-Wyvern", "bits/n/hoverwyvern.webp", "bit") },
        { "name": "Tackle Goat 2-70N (Dual Pack) (HB)", "image": getPartImage("N-Tackle-Goat", "bits/n/tacklegoat.webp", "bit") },
        { "name": "Moff Gideon 3-80N (Dual Pack) (HB)", "image": getPartImage("N-Moff-Gideon", "bits/n/moffgideon.webp", "bit"), "identicalVariants": ["BXG-34 (Moff Gideon) (TT)"] },
        { "name": "Starscream 3-80N (Dual Pack) (HB)", "image": getPartImage("N-Starscream", "bits/n/starscream.webp", "bit"), "identicalVariants": ["BXG-37 (Starscream) (TT)"] },
        { "name": "Venom 3-80N (Dual Pack) (HB)", "image": getPartImage("N-UX-12-4", "bits/n/venom.webp", "bit"), "identicalVariants": ["UX-12-4 (TT)", "BXG-30 (Venom) (TT)"] },
        { "name": "Feather Phoenix 2-60N (Starter) (HB)", "image": getPartImage("N-UX-12-5", "bits/n/featherphoenix.webp", "bit") },
        { "name": "CX-17-5 (TT)", "image": getPartImage("N-CX-17-5", "bits/n/cx-17-5.webp", "bit",),"comingSoon":true}
      ]
    },
    {
      "id": "O",
      "name": "O (Orb)",
      "category": "Bit",
      "type": "Stamina",
      "attributes": ["Stamina", "Low", "12-tooth (Normal)"],
      "resistance": "Low",
      "xDashGear": "12-tooth (Normal)",
      "weight": 1.97,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("O-BX-16-1", "bits/o/bx-16-1.webp", "bit"),
      "variants": [
        { "name": "BX-16-1 (TT)", "image": getPartImage("O-BX-16-1", "bits/o/bx-16-1.webp", "bit"), "identicalVariants": ["Tail Viper 5-80O (Dual Pack) (HB)"] },
        { "name": "BX-27-3 (TT)", "image": getPartImage("O-BX-27-3", "bits/o/bx-27-3.webp", "bit") },
        { "name": "BX-31-3 (TT)", "image": getPartImage("O-BX-31-3", "bits/o/bx-31-3.webp", "bit") },
        { "name": "BX-39-2 (TT)", "image": getPartImage("O-BX-39-2", "bits/o/bx-39-2.webp", "bit") },
        { "name": "CX-05-3 (TT)", "image": getPartImage("O-CX-05-3", "bits/o/cx-05-3.webp", "bit") },
        { "name": "Tail Viper 5-80O (Dual Pack) (HB)", "image": getPartImage("O-BX-16-1", "bits/o/tailviper.webp", "bit"), "identicalVariants": ["BX-16-1 (TT)"] },
        { "name": "Gill Shark 4-70O (Dual Pack) (HB)", "image": getPartImage("O-Gill-Shark", "bits/o/gillshark.webp", "bit") },
        { "name": "Wriggle Kraken S 3-85O (Starter) (HB)", "image": getPartImage("O-Wriggle-Kraken", "bits/o/wrigglekrakens3-85o.webp", "bit") },
        { "name": "Arrow Wizard 4-80O (Booster) (HB)", "image": getPartImage("O-Arrow-Wizard", "bits/o/arrowwizard.webp", "bit") },
        { "name": "Shockwave 5-80O (Dual Pack) (HB)", "image": getPartImage("O-Shockwave", "bits/o/shockwave.webp", "bit") },
        { "name": "TT Mall Campaign (Transparent Shaft) (TT)", "image": getPartImage("O-TT-Mall", "bits/o/ttmall.webp", "bit") },
        { "name": "Hack Viking 4-55O (Dual Pack) (HB)", "image": getPartImage("O-HackVikingDualPack", "bits/o/hackviking.webp", "bit") },
        { "name": "Shelter Drake 5-70O (Booster) (HB)", "image": getPartImage("O-BX-39-2", "bits/o/shelterdrake.webp", "bit") },
      ]
    },
    {
      "id": "P",
      "name": "P (Point)",
      "category": "Bit",
      "type": "Balance",
      "attributes": ["Balance", "High", "12-tooth (Normal)"],
      "resistance": "High",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.19,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("P-BX-15", "bits/p/bx-15.webp", "bit"),
      "variants": [
        { "name": "BX-15 (TT)", "image": getPartImage("P-BX-15", "bits/p/bx-15.webp", "bit"), "identicalVariants": ["Claw Leon 5-60P (Starter) (HB)"] },
        { "name": "BX-00 (DrigerSlash) (TT)", "image": getPartImage("P-BX-00-DrigerSlash", "bits/p/driger.webp", "bit"), "identical": ["Driger Slash 4-80P (Starter) (HB)"] },
        { "name": "BX-31-4 (TT)", "image": getPartImage("P-BX-31-4", "bits/p/bx-31-4.webp", "bit") },
        { "name": "Rare Bey Get (LeonClaw Metal Coat Gold) (TT)", "image": getPartImage("P-Rare-Bey-Get-LeonClaw", "bits/p/gold_leonclaw.webp", "bit") },
        { "name": "UX-10 (TT)", "image": getPartImage("P-UX-10", "bits/p/ux-10.webp", "bit") },
        { "name": "BXG-29 (Thanos) (TT)", "image": getPartImage("P-BXG-29-Thanos", "bits/p/thanos.webp", "bit"), "identicalVariants": ["Thanos 4-60P (Dual Pack) (HB)"] },
        { "name": "BXG-33 (Darth Vader) (TT)", "image": getPartImage("P-BXG-33-Darth-Vader", "bits/p/darthvader.webp", "bit"), "identicalVariants": ["Darth Vader 4-60P (Dual Pack) (HB)"] },
        { "name": "BXG-36 (Optimus Prime) (TT)", "image": getPartImage("P-BXG-36-Optimus-Prime", "bits/p/optimusprime.webp", "bit"), "identicalVariants": ["Optimus Prime 4-60P (Dual Pack) (HB)"] },
        { "name": "Claw Leon 5-60P (Starter) (HB)", "image": getPartImage("P-BX-15", "bits/p/clawleon.webp", "bit"), "identicalVariants": ["BX-15 (TT)"] },
        { "name": "Driger Slash 4-80P (Starter) (HB)", "image": getPartImage("P-BX-00-DrigerSlash", "bits/p/driger.webp", "bit"), "identicalVariants": ["BX-00 (DrigerSlash) (TT)"] },
        { "name": "Sting Unicorn 4-60P (Dual Pack) (HB)", "image": getPartImage("P-Sting-Unicorn", "bits/p/stingunicornbitecroc.webp", "bit") },
        { "name": "Thanos 4-60P (Dual Pack) (HB)", "image": getPartImage("P-BXG-29-Thanos", "bits/p/thanos.webp", "bit"), "identicalVariants": ["BXG-29 (Thanos) (TT)"] },
        { "name": "Darth Vader 4-60P (Dual Pack) (HB)", "image": getPartImage("P-BXG-33-Darth-Vader", "bits/p/darthvader.webp", "bit"), "identicalVariants": ["BXG-33 (Darth Vader) (TT)"] },
        { "name": "Optimus Prime 4-60P (Dual Pack) (HB)", "image": getPartImage("P-BXG-36-Optimus-Prime", "bits/p/optimusprime.webp", "bit"), "identicalVariants": ["BXG-36 (Optimus Prime) (TT)"] },
        { "name": "Obi-Wan Kenobi 4-60P (Dual Pack) (HB)", "image": getPartImage("P-Obi-Wan-Kenobi", "bits/p/obiwan.webp", "bit") },
        { "name": "X-treme Expansion Pack (HB)", "image": getPartImage("P-XEP-Hasbro", "bits/p/xep.webp", "bit") }
      ]
    },
    {
      "id": "Q",
      "name": "Q (Quake)",
      "category": "Bit",
      "type": "Attack",
      "attributes": ["Attack", "High", "12-tooth (Normal)"],
      "resistance": "High",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.2,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("Q-BX-31-1", "bits/q/bx-31-1.webp", "bit"),
      "variants": [
        { "name": "BX-31-1 (TT)", "image": getPartImage("Q-BX-31-1", "bits/q/bx-31-1.webp", "bit"), "identicalVariants": ["Beat Tyranno 4-70Q (Dual Pack) (HB)"] },
        { "name": "BX-31-5 (TT)", "image": getPartImage("Q-BX-31-5", "bits/q/bx-31-5.webp", "bit"), "identicalVariants": ["Keel Shark 1-60Q (Booster) (HB)"] },
        { "name": "BX-31-6 (TT)", "image": getPartImage("Q-BX-31-6", "bits/q/bx-31-6.webp", "bit") },
        { "name": "Corocoro (CrocoCrunch) (TT)", "image": getPartImage("Q-Corocoro", "bits/q/crococrunch.webp", "bit") },
        { "name": "Beat Tyranno 4-70Q (Dual Pack) (HB)", "image": getPartImage("Q-BX-31-1", "bits/q/beattyranno.webp", "bit"), "identicalVariants": ["BX-31-1 (TT)"] },
        { "name": "Keel Shark 1-60Q (Booster) (HB)", "image": getPartImage("Q-BX-31-5", "bits/q/keelshark1-60q.webp", "bit"), "identicalVariants": ["BX-31-5 (TT)"] },
        { "name": "Dagger Dran 4-70Q (Booster) (HB)", "image": getPartImage("Q-Dagger-Dran", "bits/q/daggerdran4-70q.webp", "bit") },
        { "name": "BX-48-5 (TT)", "image": getPartImage("Q-BX-48-5", "bits/q/bx-48-5.webp", "bit") },
        { "name": "Bite Croc 2-60Q (Deluxe String Launcher & Custom Grip Set) (HB)", "image": getPartImage("Q-Corocoro", "bits/q/bitecroc2-60q.webp", "bit") },
      ]
    },
    {
      "id": "R",
      "name": "R (Rush)",
      "category": "Bit",
      "type": "Attack",
      "attributes": ["Attack", "High", "10-tooth (Rush)"],
      "resistance": "High",
      "xDashGear": "10-tooth (Rush)",
      "weight": 2.01,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("R-BX-20", "bits/r/bx-20.webp", "bit"),
      "variants": [
        { "name": "BX-20 (TT)", "image": getPartImage("R-BX-20", "bits/r/bx-20.webp", "bit"), "identicalVariants": ["Dagger Dran 4-60R (Xtreme Battle Set) (HB)"] },
        { "name": "BX-35-4 (TT)", "image": getPartImage("R-BX-35-4", "bits/r/bx-35-4.webp", "bit"), "identicalVariants": ["Wand Wizard 1-60R (Starter) (HB)"] },
        { "name": "UX-10 (TT)", "image": getPartImage("R-UX-10", "bits/r/ux-10.webp", "bit") },
        { "name": "BX-46 (TT)", "image": getPartImage("R-BX-46", "bits/r/bx-46.webp", "bit") },
        { "name": "Dagger Dran 4-60R (Xtreme Battle Set) (HB)", "image": getPartImage("R-BX-20", "bits/r/daggerdran.webp", "bit"), "identicalVariants": ["BX-20 (TT)"] },
        { "name": "Wand Wizard 1-60R (Starter) (HB)", "image": getPartImage("R-BX-35-4", "bits/r/wandwizard1-60r.webp", "bit"), "identicalVariants": ["BX-35-4 (TT)"] },
        { "name": "Red Hulk 1-80R (Dual Pack) (HB)", "image": getPartImage("R-Red-Hulk", "bits/r/redhulk.webp", "bit") },
        { "name": "BBLD (Drandagger Metal Coat: Black) (TT)", "image": getPartImage("R-BBLD-Black", "bits/r/bbld_black.webp", "bit") },
        { "name": "BBLD (Drandagger Metal Coat: Blue) (TT)", "image": getPartImage("R-BBLD-Blue", "bits/r/bbld_blue.webp", "bit") },
      ]
    },
    {
      "id": "RA",
      "name": "RA (Rubber Accel)",
      "category": "Bit",
      "type": "Attack",
      "attributes": ["Attack", "High", "16 tooth Gear", "Rubber"],
      "rubber": true,
      "resistance": "High",
      "xDashGear": "16-tooth (Accel)",
      "weight": 3.11,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("RA-UX-10", "bits/ra/ux-10.webp", "bit"),
      "variants": [
        { "name": "UX-10 (TT)", "image": getPartImage("RA-UX-10", "bits/ra/ux-10.webp", "bit") },
        { "name": "25th Anniversary Set (DragoonStorm) (TT)", "image": getPartImage("RA-25th-Anniversary-DragoonStorm", "bits/ra/dragoonstorm.webp", "bit") },
        { "name": "25th Anniversary Set (StormPegasis) (TT)", "image": getPartImage("RA-25th-Anniversary-StormPegasis", "bits/ra/stormpegasis.webp", "bit") },
        { "name": "25th Anniversary Set (VictoryValkyrie) (TT)", "image": getPartImage("RA-25th-Anniversary-VictoryValkyrie", "bits/ra/valkyrie.webp", "bit") },
        { "name": "X-treme Expansion Pack (HB)", "image": getPartImage("RA-UX-10", "bits/ra/xep.webp", "bit") }
      ]
    },
    {
      "id": "S",
      "name": "S (Spike)",
      "category": "Bit",
      "type": "Defense",
      "attributes": ["Defense", "Low", "12-tooth (Normal)"],
      "resistance": "Low",
      "xDashGear": "12-tooth (Normal)",
      "weight": 1.96,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("S-BX-19", "bits/s/bx-19.webp", "bit"),
      "variants": [
        { "name": "BX-19 (TT)", "image": getPartImage("S-BX-19", "bits/s/bx-19.webp", "bit"), "identicalVariants": ["Horn Rhino 3-80S (Booster) (HB)"] },
        { "name": "BX-31-2 (TT)", "image": getPartImage("S-BX-31-2", "bits/s/bx-31-2.webp", "bit") },
        { "name": "UX-07 (TT)", "image": getPartImage("S-UX-07", "bits/s/ux-07.webp", "bit") },
        { "name": "Horn Rhino 3-80S (Booster) (HB)", "image": getPartImage("S-BX-19", "bits/s/hornrhino.webp", "bit"), "identicalVariants": ["BX-19 (TT)"] },
        { "name": "Savage Bear 3-60S (Booster) (HB)", "image": getPartImage("S-Savage-Bear", "bits/s/savagebear.webp", "bit") },
        { "name": "Obsidian Shell 3-85S (Dual Pack) (HB)", "image": getPartImage("S-Yellow_Shell", "bits/s/obsidianshell3-85bs.webp", "bit") },
        { "name": "BX-48-3 (TT)", "image": getPartImage("S-BX-48-3", "bits/s/bx-48-3.webp", "bit") },
      ]
    },
    {
      "id": "T",
      "name": "T (Taper)",
      "category": "Bit",
      "type": "Balance",
      "attributes": ["Balance", "High", "12-tooth (Normal)"],
      "resistance": "High",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.20,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("T-BX-02", "bits/t/bx-02.webp", "bit"),
      "variants": [
        { "name": "BX-02 (TT)", "image": getPartImage("T-BX-02", "bits/t/bx-02.webp", "bit"), "identicalVariants": ["Scythe Incendio 4-60T (Starter) (HB)"] },
        { "name": "BX-00 (DranzerSpiral) (TT)", "image": getPartImage("T-BX-00-DranzerSpiral", "bits/t/dranzerspiral_blue.webp", "bit"), "identicalVariants": ["Dranzer Spiral 3-80T (Starter) (HB)"] },
        { "name": "BX-08 (TT)", "image": getPartImage("T-BX-08", "bits/t/bx-08.webp", "bit") },
        { "name": "BX-14-6 (TT)", "image": getPartImage("T-BX-14-6", "bits/t/bx-14-6.webp", "bit") },
        { "name": "BX-20 (TT)", "image": getPartImage("T-BX-20", "bits/t/bx-20.webp", "bit"), "identicalVariants": ["Helm Knight 5-80T (Dual Pack) (HB)"] },
        { "name": "BX-24-2 (TT)", "image": getPartImage("T-BX-24-2", "bits/t/bx-24-2.webp", "ratchet"), "identicalVariants": ["Gale Wyvern 3-60T (Dual Pack) (HB)"] },
        { "name": "BX-46 (TT)", "image": getPartImage("T-BX-46", "bits/t/bx-46.webp", "bit") },
        { "name": "Rare Bey Get (Bit Set 1) (TT)", "image": getPartImage("T-Rare-Bey-Get-Bit-Set", "bits/t/bitset1.webp", "bit") },
        { "name": "Rare Bey Get (Bit Set 2) (TT)", "image": getPartImage("T-Rare-Bey-Get-Bit-Set-2", "bits/t/bitset2.webp", "bit") },
        { "name": "Rare Bey Get (DranzerSpiral Black) (TT)", "image": getPartImage("T-Rare-Bey-Get-DranzerSpiral", "bits/t/dranzerspiral_black.webp", "bit") },
        { "name": "Rare Bey Get (HellsScythe Metal Coat Gold) (TT)", "image": getPartImage("T-Rare-Bey-Get-HellsScythe", "bits/t/gold_hellsscythe.webp", "bit") },
        { "name": "Scythe Incendio 4-60T (Starter) (HB)", "image": getPartImage("T-BX-02", "bits/t/scytheincendio.webp", "bit"), "identicalVariants": ["BX-02 (TT)"] },
        { "name": "Dranzer Spiral 3-80T (Starter) (HB)", "image": getPartImage("T-BX-00-DranzerSpiral", "bits/t/dranzerspiral_blue.webp", "bit"), "identicalVariants": ["BX-00 (DranzerSpiral) (TT)"] },
        { "name": "Dranzer Spiral 3-80T (Green Starter) (HB)", "image": getPartImage("T-Dranzer-Spiral-Green", "bits/t/dranzerspiral_green.webp", "bit") },
        { "name": "Dranzer Spiral 3-80T (Red Starter) (HB)", "image": getPartImage("T-Dranzer-Spiral-Red", "bits/t/dranzerspiral_red.webp", "bit") },
        { "name": "Helm Knight 5-80T (Dual Pack) (HB)", "image": getPartImage("T-BX-20", "bits/t/helmknight5-80t.webp", "bit"), "identicalVariants": ["BX-20 (TT)"] },
        { "name": "Gale Wyvern 3-60T (Dual Pack) (HB)", "image": getPartImage("T-BX-24-2", "bits/t/galewyvern3-60t.webp", "ratchet"), "identicalVariants": ["BX-24-2 (TT)"] },
        { "name": "Fort Hornet R 7-60T (Starter) (HB)", "image": getPartImage("T-Fort-Hornet", "bits/t/forthornet.webp", "bit") },
        { "name": "Steel Samurai 4-80T (Booster) (HB)", "image": getPartImage("T-Steel-Samurai", "bits/t/steelsamurai.webp", "bit") },
        { "name": "Tusk Mammoth 3-60T (Xtreme Battle Set) (HB)", "image": getPartImage("T-Tusk-Mammoth", "bits/t/tuskmammoth.webp", "bit") }
      ]
    },
    {
      "id": "TK",
      "name": "TK (Trans Kick)",
      "category": "Bit",
      "type": "Balance",
      "attributes": ["Balance", "High", "12-tooth (Normal)"],
      "resistance": "High",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.23,
      "company": "Takara Tomy",
      "image": getPartImage("TK-CX-09", "bits/tk/cx-09.webp", "bit"),
      "variants": [
        { "name": "CX-09 (TT)", "image": getPartImage("TK-CX-09", "bits/tk/cx-09.webp", "bit") }
      ]
    },
    {
      "id": "TP",
      "name": "TP (Trans Point)",
      "category": "Bit",
      "type": "Balance",
      "attributes": ["Balance", "High", "12-tooth (Normal)"],
      "resistance": "High",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.19,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("TP-BX-37", "bits/tp/bx-38.webp", "bit"),
      "variants": [
        { "name": "BX-38 (TT)", "image": getPartImage("TP-BX-38", "bits/tp/bx-38.webp", "bit"), "identicalVariants": ["Scarlet Garuda 4-70TP (Starter) (HB)"] },
        { "name": "Scarlet Garuda 4-70TP (Starter) (HB)", "image": getPartImage("TP-BX-37", "bits/tp/scarletgaruda.webp", "bit"), "identicalVariants": ["BX-37 (TT)"] },
        { "name": "UX-18-4 (TT)", "image": getPartImage("TP-UX-18-4", "bits/tp/ux-18-4.webp", "bit") }
      ]
    },
    {
      "id": "U",
      "name": "U (Unite)",
      "category": "Bit",
      "type": "Balance",
      "attributes": ["Balance", "High", "12-tooth (Normal)"],
      "resistance": "High",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.14,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("U-BX-33", "bits/u/bx-33.webp", "bit"),
      "variants": [
        { "name": "BX-33 (TT)", "image": getPartImage("U-BX-33", "bits/u/bx-33.webp", "bit"), "identicalVariants": ["Pearl Tiger 3-60U (Dual Pack) (HB)"] },
        { "name": "BXG-40 (Mosasaurus) (TT)", "image": getPartImage("U-BXG-40-Mosasaurus", "bits/u/mosasaurus.webp", "bit"), "identicalVariants": ["Mosasaurus 9-60U (Dual Pack) (HB)"] },
        { "name": "CX-06-3 (TT)", "image": getPartImage("U-CX-06-3", "bits/u/cx-06-3.webp", "bit") },
        { "name": "Pearl Tiger 3-60U (Dual Pack) (HB)", "image": getPartImage("U-BX-33", "bits/u/pearltiger.webp", "bit"), "identicalVariants": ["BX-33 (TT)"] },
        { "name": "Mosasaurus 9-60U (Dual Pack) (HB)", "image": getPartImage("U-BXG-40-Mosasaurus", "bits/u/mosasaurus.webp", "bit"), "identicalVariants": ["BXG-40 (Mosasaurus)"] },
        { "name": "Fang Leon T 4-60U (Starter) (HB)", "image": getPartImage("U-leonfang", "bits/u/fangleon.webp", "bit") },
      ]
    },
    {
      "id": "UF",
      "name": "UF (Under Flat)",
      "category": "Bit",
      "type": "Attack",
      "attributes": ["Attack", "High", "12-tooth (Normal)"],
      "resistance": "High",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.04,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("UF-UX-15", "bits/uf/ux-15.webp", "bit"),
      "variants": [
        { "name": "UX-15 (TT)", "image": getPartImage("UF-UX-15", "bits/uf/ux-15.webp", "bit") },
        { "name": "Scale Shark 4-50UF (Booster) (HB)", "image": getPartImage("UF-UX-15", "bits/uf/scaleshark.webp", "bit") }
      ]
    },
    {
      "id": "UN",
      "name": "UN (Under Needle)",
      "category": "Bit",
      "type": "Defense",
      "attributes": ["Defense", "Low", "12-tooth (Normal)"],
      "resistance": "Low",
      "xDashGear": "12-tooth (Normal)",
      "weight": 1.87,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("UN-UX-13", "bits/un/ux-13.webp", "bit"),
      "variants": [
        { "name": "UX-13 (TT)", "image": getPartImage("UN-UX-13", "bits/un/ux-13.webp", "bit"), "identicalVariants": ["Rock Golem 1-60UN (Starter) (HB)"] },
        { "name": "Rock Golem 1-60UN (Starter) (HB)", "image": getPartImage("UN-UX-13", "bits/un/rockgolem.webp", "bit"), "identicalVariants": ["UX-13 (TT)"] },
        { "name": "CX-14 (TT)", "image": getPartImage("UN-CX-14", "bits/un/cx-14.webp", "bit"), "comingSoon": true },
        { "name": "Armor Knight GV 8-70UN (Starter) (HB)", "image": getPartImage("UN-CX-14", "bits/un/cx-14.webp", "bit"), "comingSoon": true },
      ]
    },
    {
      "id": "V",
      "name": "V (Vortex)",
      "category": "Bit",
      "type": "Attack",
      "attributes": ["Attack", "High", "12-tooth (Normal)"],
      "resistance": "High",
      "xDashGear": "12-tooth (Normal)",
      "weight": 2.15,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("V-CX-01", "bits/v/cx-01.webp", "bit"),
      "variants": [
        { "name": "CX-01 (TT)", "image": getPartImage("V-CX-01", "bits/v/cx-01.webp", "bit"), "identicalVariants": ["Courage Dran S 6-60V (Starter) (HB)"] },
        { "name": "CX-04 (TT)", "image": getPartImage("V-CX-04", "bits/v/cx-04.webp", "bit") },
        { "name": "Rare Bey Get (ValkyrieVolt) (TT)", "image": getPartImage("V-Rare-Bey-Get", "bits/v/valkyrievolt.webp", "bit") },
        { "name": "Courage Dran S 6-60V (Starter) (HB)", "image": getPartImage("V-CX-01", "bits/v/couragedran.webp", "bit"), "identicalVariants": ["CX-01 (TT)"] },
        { "name": "G1 1st Prize (DranBrave Metal Coat: Gold) (TT)", "image": getPartImage("v-TT-G1-1st", "bits/v/gold.webp", "bit") },
        { "name": "G1 2nd Prize (DranBrave Metal Coat: Silver) (TT)", "image": getPartImage("v-TT-G1-2nd", "bits/v/silver.webp", "bit") },
        { "name": "G1 3rd Prize (DranBrave Metal Coat: Bronze) (TT)", "image": getPartImage("v-TT-G1-3rd", "bits/v/bronze.webp", "bit") },
        { "name": "TT Mall Campaign (Transparent Shaft) (TT)", "image": getPartImage("V-TT-Mall", "bits/v/ttmall.webp", "bit") },
        { "name": "BX-00 (DranSword Metal Coat: Black J.League Ver.) (TT)", "image": getPartImage("BX-00 (DranSword Metal Coat: Black J.League Ver.) (TT)", "bits/v/jleague.webp", "bit") },
        { "name": "Evangelion Deck Set (TT)", "image": getPartImage("v-TT-evangelion", "bits/v/evangelion.webp", "bit"),"comingSoon":true },

      ]
    },
    {
      "id": "W",
      "name": "W (Wedge)",
      "category": "Bit",
      "type": "Defense",
      "attributes": ["Defense", "Low", "10-tooth (Rush)"],
      "resistance": "Low",
      "xDashGear": "10-tooth (Rush)",
      "weight": 1.82,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("W-CX-03", "bits/w/cx-03.webp", "bit"),
      "variants": [
        { "name": "CX-03 (TT)", "image": getPartImage("W-CX-03", "bits/w/cx-03.webp", "bit"), "identicalVariants": ["Dark Perseus B 6-80W (Starter) (HB)"] },
        { "name": "CX-04 (TT)", "image": getPartImage("W-CX-04", "bits/w/cx-04.webp", "bit") },
        { "name": "G3 2nd Prize (PerseusDark Metal Coat Gold) (TT)", "image": getPartImage("W-G3-2nd-Prize", "bits/w/g3.webp", "bit") },
        { "name": "Dark Perseus B 6-80W (Starter) (HB)", "image": getPartImage("W-CX-03", "bits/w/darkperseus.webp", "bit"), "identicalVariants": ["CX-03 (TT)"] },
        { "name": "UX-18-1 (TT)", "image": getPartImage("W-UX-18-1", "bits/w/ux-18-1.webp", "bit") },
        { "name": "UX-18-3 (TT)", "image": getPartImage("W-UX-18-3", "bits/w/ux-18-3.webp", "bit") }
      ]
    },
    {
      "id": "WB",
      "name": "WB (Wall Ball)",
      "category": "Bit",
      "type": "Stamina",
      "attributes": ["Stamina", "Low", "16-tooth (Accel)"],
      "resistance": "Low",
      "xDashGear": "16-tooth (Accel)",
      "weight": 2.41,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("WB-CX-08-1", "bits/wb/cx-08-1.webp", "bit"),
      "variants": [
        { "name": "CX-08-1 (TT)", "image": getPartImage("WB-CX-08-1", "bits/wb/cx-08-1.webp", "bit") },
        { "name": "CX-08-5 (TT)", "image": getPartImage("WB-CX-08-5", "bits/wb/cx-08-5.webp", "bit") },
        { "name": "CX-08-6 (TT)", "image": getPartImage("WB-CX-08-6", "bits/wb/cx-08-6.webp", "bit") },
        { "name": "Flame Cerberus W 5-80WB (Starter) (HB)", "image": getPartImage("WB-CX-08-1", "bits/wb/flamecerberus.webp", "bit") },
      ]
    },
    {
      "id": "WW",
      "name": "WW (Wall Wedge)",
      "category": "Bit",
      "type": "Defense",
      "attributes": ["Defense", "Low", "16-tooth (Accel)"],
      "resistance": "Low",
      "xDashGear": "16-tooth (Accel)",
      "weight": 2.42,
      "company": "Takara Tomy",
      "image": getPartImage("WW-CX-12", "bits/ww/cx-12.webp", "bit"),
      "variants": [
        { "name": "CX-12 (TT)", "image": getPartImage("WW-CX-12", "bits/ww/cx-12.webp", "bit") },
      ]
    },
    {
      "id": "Y",
      "name": "Y (Yielding)",
      "category": "Bit",
      "type": "Stamina",
      "attributes": ["Stamina", "Low", "16-tooth (Accel)"],
      "resistance": "Low",
      "xDashGear": "16-tooth (Accel)",
      "weight": 4.24,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("Y-CX-15", "bits/y/cx-15.webp", "bit"),
      "variants": [
        { "name": "CX-15 (TT)", "image": getPartImage("Y-CX-15", "bits/y/cx-15.webp", "bit") },
        { "name": "Rage Ragna FE 4-55Y (Starter) (HB)", "image": getPartImage("Y-CX-15", "bits/y/cx-15.webp", "bit"), "comingSoon":true },
      ]
    },
    {
      "id": "Z",
      "name": "Z (Zap)",
      "category": "Bit",
      "type": "Balance",
      "attributes": ["Balance", "High", "16-tooth (Accel)"],
      "resistance": "High",
      "xDashGear": "16-tooth (Accel)",
      "weight": 2.51,
      "company": "Takara Tomy",
      "image": getPartImage("Z-UX-14", "bits/z/ux-14.webp", "bit"),
      "variants": [
        { "name": "UX-14 (TT)", "image": getPartImage("Z-UX-14", "bits/z/ux-14.webp", "bit") },
        { "name": "UX-00 (ScorpioSpear Metal Coat: Magenta) (TT)", "image": getPartImage("Z-RBG-ScorpioSpear-Magenta", "bits/z/scorpiospearmagenta.webp", "bit"), "comingSoon":true }
      ]
    }
  ] as Part[]),
  // Ratchets
  ...([
    {
      "id": "Tr",
      "name": "Tr (Turbo)",
      "category": "Ratchet",
      "type": "Fusion",
      "attributes": ["4", "16-tooth (Accel)"],
      "weight": 12.64,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("Tr-CX-07", "fusion-ratchet-bit/tr/cx-07.webp", "fusion"),
      "variants": [
        { "name": "CX-07 (TT) (Default)", "image": getPartImage("Tr-CX-07", "fusion-ratchet-bit/tr/cx-07.webp", "fusion"),"displayedName":"CX-07 (TT)" },
        { "name": "Tokyo Toy Show (PegasusBlast Metal Coat Red) (TT)", "image": getPartImage("Tr-Tokyo-Toy-Show", "fusion-ratchet-bit/tr/tokyotoy.webp", "fusion") },
        { "name": "Blast Pegasus A Tr (Clip & Rip Launcher Set) (HB)", "image": getPartImage("Tr-CX-07", "fusion-ratchet-bit/tr/cx-07.webp", "fusion"), "comingSoon":true },
      ]
    },
    {
      "id": "Op",
      "name": "Op (Operate)",
      "category": "Ratchet",
      "type": "Fusion",
      "weight": 14.10,
      "company": "Takara Tomy",
      "attributes": ["Mode Change", "Balance", "14-tooth"],
      "image": getPartImage("Op-TT-CX-11", "fusion-ratchet-bit/op/cx-11/defense.webp", "fusion"),
      "variants": [
        {
          "name": "CX-11 (TT)",
          "image": getPartImage("Op-TT-CX-11", "fusion-ratchet-bit/op/cx-11/defense.webp", "fusion"),
          "modes": [
            { "name": "CX-11 (Defense Mode) (TT) (Default)", "image": getPartImage("Op-TT-CX-11", "fusion-ratchet-bit/op/cx-11/defense.webp", "fusion"),"displayedName":"CX-11 (Defense Mode) (TT)" },
            { "name": "CX-11 (Attack Mode) (TT)", "image": getPartImage("Op-TT-CX-11-Attack", "fusion-ratchet-bit/op/cx-11/attack.webp", "fusion") }
          ]
        },
        {
          "name": "X-Treme Battlers Pack (HB)",
          "image": getPartImage("Op-HB-XBP", "fusion-ratchet-bit/op/xbp/defense.webp", "fusion"),
          "modes": [
            { "name": "X-Treme Battlers Pack (Defense Mode) (HB) (Default)", "image": getPartImage("Op-TT-CX-11", "fusion-ratchet-bit/op/xbp/defense.webp", "fusion") },
            { "name": "X-Treme Battlers Pack (Attack Mode) (HB)", "image": getPartImage("Op-TT-CX-11-Attack", "fusion-ratchet-bit/op/xbp/attack.webp", "fusion") }
          ]
        }
      ]
    },
    {
      "id": "0-60",
      "name": "0-60",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["0", "x-60"],
      "weight": 6.84,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("0-60-CX-10", "ratchets/0-60/cx-10.webp", "ratchet"),
      "variants": [
        { "name": "CX-10 (TT) (Default)", "image": getPartImage("0-60-CX-10", "ratchets/0-60/cx-10.webp", "ratchet"),"displayedName":"CX-10 (TT)" }
      ]
    },
    {
      "id": "0-70",
      "name": "0-70",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["0", "x-70"],
      "weight": 7.00,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("0-70-UX-14", "ratchets/0-70/ux-14.webp", "ratchet"),
      "variants": [
        { "name": "UX-14 (TT) (Default)", "image": getPartImage("0-70-UX-14", "ratchets/0-70/ux-14.webp", "ratchet"),"displayedName":"UX-14 (TT)" },
        { "name": "UX-00 (ScorpioSpear Metal Coat: Magenta) (TT)", "image": getPartImage("0-70-RBG-Scorpiospear-Magenta", "ratchets/0-70/scorpiospearmagenta.webp", "ratchet"), "comingSoon":true },
        { "name": "Evangelion Deck Set (TT)", "image": getPartImage("0-70-evangelion", "ratchets/0-70/evangelion.webp", "ratchet"), "comingSoon":true },
      ]
    },
    {
      "id": "0-80",
      "name": "0-80",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["0", "x-80"],
      "weight": 7.54,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("0-80-UX-12-1", "ratchets/0-80/ux-12-1.webp", "ratchet"),
      "variants": [
        { "name": "UX-12-1 (TT)", "image": getPartImage("0-80-UX-12-1", "ratchets/0-80/ux-12-1.webp", "ratchet"), "identicalVariants": ["Circle Ghost 0-80GB (Dual Pack)"] },
        { "name": "UX-12-4 (TT)", "image": getPartImage("0-80-UX-12-4", "ratchets/0-80/ux-12-4.webp", "ratchet") },
        { "name": "UX-12-6 (TT)", "image": getPartImage("0-80-UX-12-6", "ratchets/0-80/ux-12-6.webp", "ratchet") },
        { "name": "CX-06-2 (TT)", "image": getPartImage("0-80-CX-06-2", "ratchets/0-80/cx-06-2.webp", "ratchet") },
        { "name": "Circle Ghost 0-80GB (Dual Pack) (HB)", "image": getPartImage("0-80-UX-12-1", "ratchets/0-80/circleghost.webp", "ratchet"), "identicalVariants": ["UX-12-1"] }
      ]
    },
    {
      "id": "1-50",
      "name": "1-50",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["1", "x-50"],
      "weight": 5.66,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("1-50-CX-13", "ratchets/1-50/cx-13.webp", "ratchet"),
      "variants": [
        { "name": "CX-13 (TT)", "image": getPartImage("1-50-CX-13", "ratchets/1-50/cx-13.webp", "ratchet") },
        { "name": "CX-16 (TT)", "image": getPartImage("1-50-CX-16", "ratchets/1-50/cx-16.webp", "ratchet") },
        { "name": "Blitz Bahamut BK 1-50I (Starter) (HB)", "image": getPartImage("1-50-CX-13", "ratchets/1-50/cx-13.webp", "ratchet"), "comingSoon":true},
        { "name": "Corocoro (BahamutBlitz Metal Coat: Yellow) (TT)", "image": getPartImage("1-50-corocoro-yellow", "ratchets/1-50/corocoro_yellow.webp", "ratchet",)},
      ]
    },
    {
      "id": "1-60",
      "name": "1-60",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["1", "x-60"],
      "weight": 5.96,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("1-60-UX-01", "ratchets/1-60/ux-01.webp", "ratchet"),
      "variants": [
        { "name": "UX-01 (TT)", "image": getPartImage("1-60-UX-01", "ratchets/1-60/ux-01.webp", "ratchet"), "identicalVariants": ["Buster Dran 1-60A (Starter)"] },
        { "name": "UX-04 (TT)", "image": getPartImage("1-60-UX-04", "ratchets/1-60/ux-04.webp", "ratchet") },
        { "name": "UX-10 (TT)", "image": getPartImage("1-60-UX-10", "ratchets/1-60/ux-10.webp", "ratchet") },
        { "name": "UX-13 (TT)", "image": getPartImage("1-60-UX-13", "ratchets/1-60/ux-13.webp", "ratchet"), "identicalVariants": ["Rock Golem 1-60UN (Starter)"] },
        { "name": "BX-00 (Lightning L-Drago) (TT)", "image": getPartImage("1-60-BX-00-Lightning-L-Drago", "ratchets/1-60/ldrago.webp", "ratchet") },
        { "name": "BX-31-5 (TT)", "image": getPartImage("1-60-BX-31-5", "ratchets/1-60/bx-31-5.webp", "ratchet"), "identicalVariants": ["Keel Shark 1-60Q (Booster)"] },
        { "name": "BX-35-4 (TT)", "image": getPartImage("1-60-BX-35-4", "ratchets/1-60/bx-35-4.webp", "ratchet"), "identicalVariants": ["Wand Wizard 1-60R (Starter)"] },
        { "name": "CX-08-3 (TT)", "image": getPartImage("1-60-CX-08-3", "ratchets/1-60/cx-08-3.webp", "ratchet") },
        { "name": "UX-00 (DranBuster Barcelona Starter) (TT)", "image": getPartImage("1-60-Barcelona", "ratchets/1-60/barcelonabuster.webp", "ratchet") },
        { "name": "Corocoro (Lottery, DranBuster Metal Coat Red) (TT)", "image": getPartImage("1-60-Corocoro-Lottery-DranBuster-Metal-Coat-Red", "ratchets/1-60/corocoro_mcred.webp", "ratchet") },
        { "name": "Dran Choice Booster Black 1 (TT)", "image": getPartImage("1-60-Dran-Choice-Booster-Black-1", "ratchets/1-60/black1.webp", "ratchet") },
        { "name": "Dran Choice Booster Black 2 (TT)", "image": getPartImage("1-60-Dran-Choice-Booster-Black-2", "ratchets/1-60/black2.webp", "ratchet") },
        { "name": "Dran Choice Booster Cyan 1 (TT)", "image": getPartImage("1-60-Dran-Choice-Booster-Cyan-1", "ratchets/1-60/cyan1.webp", "ratchet") },
        { "name": "Dran Choice Booster Cyan 2 (TT)", "image": getPartImage("1-60-Dran-Choice-Booster-Cyan-2", "ratchets/1-60/cyan2.webp", "ratchet") },
        { "name": "Dran Choice Booster Violet 1 (TT)", "image": getPartImage("1-60-Dran-Choice-Booster-Violet-1", "ratchets/1-60/violet1.webp", "ratchet") },
        { "name": "Dran Choice Booster Violet 2 (TT)", "image": getPartImage("1-60-Dran-Choice-Booster-Violet-2", "ratchets/1-60/violet2.webp", "ratchet") },
        { "name": "Buster Dran 1-60A (Starter) (HB)", "image": getPartImage("1-60-UX-01", "ratchets/1-60/busterdran.webp", "ratchet"), "identicalVariants": ["UX-01 (TT)"] },
        { "name": "Rock Golem 1-60UN (Starter) (HB)", "image": getPartImage("1-60-UX-13", "ratchets/1-60/rockgolem.webp", "ratchet"), "identicalVariants": ["UX-13 (TT)"] },
        { "name": "Keel Shark 1-60Q (Booster) (HB)", "image": getPartImage("1-60-BX-31-5", "ratchets/1-60/keelshark1-60q.webp", "ratchet"), "identicalVariants": ["BX-31-5 (TT)"] },
        { "name": "Wand Wizard 1-60R (Starter) (HB)", "image": getPartImage("1-60-BX-35-4", "ratchets/1-60/wandwizard1-60r.webp", "ratchet"), "identicalVariants": ["BX-35-4 (TT)"] },
        { "name": "Miles Morales 1-60GN (Dual Pack) (HB)", "image": getPartImage("1-60-Miles-Morales", "ratchets/1-60/milesmorales.webp", "ratchet") },
        { "name": "BX-00 (DranSword Metal Coat: Black J.League Ver.) (TT)", "image": getPartImage("BX-00 (DranSword Metal Coat: Black J.League Ver.) (TT)", "ratchets/1-60/jleague.webp", "ratchet") }
      ]
    },
    {
      "id": "1-70",
      "name": "1-70",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["1", "x-70"],
      "weight": 6.13,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("1-70-UX-15", "ratchets/1-70/ux-15.webp", "ratchet"),
      "variants": [
        { "name": "UX-15 (TT) (Default)", "image": getPartImage("1-70-UX-15", "ratchets/1-70/ux-15.webp", "ratchet"),"displayedName":"UX-15 (TT)" },
        { "name": "Evangelion Deck Set (TT)", "image": getPartImage("1-70-evangelion", "ratchets/1-70/evangelion.webp", "ratchet"),"comingSoon":true },
      ]
    },
    {
      "id": "1-80",
      "name": "1-80",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["1", "x-80"],
      "weight": 6.69,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("1-80-UX-05-1", "ratchets/1-80/ux-05-1.webp", "ratchet"),
      "variants": [
        { "name": "UX-05-1 (TT)", "image": getPartImage("1-80-UX-05-1", "ratchets/1-80/ux-05-1.webp", "ratchet"), "identicalVariants": ["Shadow Shinobi 1-80MN (Starter)"] },
        { "name": "UX-07 (TT)", "image": getPartImage("1-80-UX-07", "ratchets/1-80/ux-07.webp", "ratchet"), "identicalVariants": ["Cowl Sphinx 1-80GF (Dual Pack)"] },
        { "name": "BXG-40 (T. Rex) (TT)", "image": getPartImage("1-80-BXG-40-T-Rex", "ratchets/1-80/trex.webp", "ratchet"), "identicalVariants": ["T. Rex 1-80GB (Dual Pack)"] },
        { "name": "Shadow Shinobi 1-80MN (Starter) (HB)", "image": getPartImage("1-80-UX-05-1", "ratchets/1-80/shadowshinobi.webp", "ratchet"), "identicalVariants": ["UX-05-1 (TT)"] },
        { "name": "Cowl Sphinx 1-80GF (Dual Pack) (HB)", "image": getPartImage("1-80-UX-07", "ratchets/1-80/cowlsphinx1-80gf.webp", "ratchet"), "identicalVariants": ["UX-07 (TT)"] },
        { "name": "T. Rex 1-80GB (Dual Pack) (HB)", "image": getPartImage("1-80-BXG-40-T-Rex", "ratchets/1-80/trex.webp", "ratchet"), "identicalVariants": ["BXG-40 (T. Rex) (TT)"] },
        { "name": "Red Hulk 1-80R (Dual Pack) (HB)", "image": getPartImage("1-80-Red-Hulk", "ratchets/1-80/redhulk.webp", "ratchet") },
        { "name": "WhaleWave Tsuri Spirits Wonder Ver. (TT)", "image": getPartImage("1-80-WhaleWave-TsuriSpirits", "ratchets/1-80/tsurispirits(whalewave).webp", "ratchet") },
        { "name": "CX-17-2 (TT)", "image": getPartImage("1-80-CX-17-2", "ratchets/1-80/cx-17-2.webp", "ratchet",), "comingSoon":true},
      ]
    },
    {
      "id": "2-60",
      "name": "2-60",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["2", "x-60"],
      "weight": 6.17,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("2-60-BX-34", "ratchets/2-60/bx-34.webp", "ratchet"),
      "variants": [
        { "name": "BX-34 (TT)", "image": getPartImage("2-60-BX-34", "ratchets/2-60/bx-34.webp", "ratchet"), "identicalVariants": ["Cobalt Dragoon 2-60C (Deluxe Launcher Set)"] },
        { "name": "UX-07 (TT)", "image": getPartImage("2-60-UX-07", "ratchets/2-60/ux-07.webp", "ratchet") },
        { "name": "UX-12-5 (TT)", "image": getPartImage("2-60-UX-12-5", "ratchets/2-60/ux-12-5.webp", "ratchet") },
        { "name": "Tokyo Toy Show (CobaltDragoon Metal Coat Black) (TT)", "image": getPartImage("2-60-Tokyo-Toy-Show-CobaltDragoon-Metal-Coat-Black", "ratchets/2-60/tokyotoy.webp", "ratchet")},
        { "name": "Corocoro (CrocoCrunch) (TT)", "image": getPartImage("2-60-Corocoro-CrocoCrunch", "ratchets/2-60/crococrunch.webp", "ratchet") },
        { "name": "25th Anniversary Set (Victory Valkyrie) (TT)", "image": getPartImage("2-60-25th-Anniversary-Set-Victory-Valkyrie", "ratchets/2-60/valkyrie.webp", "ratchet") },
        { "name": "Cobalt Dragoon 2-60C (Deluxe Launcher Set) (HB)", "image": getPartImage("2-60-BX-34", "ratchets/2-60/cobaltdragoonhasbro.webp", "ratchet"), "identicalVariants": ["BX-34 (TT)"] },
        { "name": "Antler Stag B 2-60HN (Starter) (HB)", "image": getPartImage("2-60-Antler-Stag", "ratchets/2-60/antlerstag.webp", "ratchet") },
        { "name": "CX-06-3 (TT)", "image": getPartImage("2-70-CX-06-3", "ratchets/2-60/cx-06-3.webp", "ratchet") },
        { "name": "Tsuri Spirits Promo (SharkEdge Metal Coat Black) (TT)", "image": getPartImage("2-60-TsuriSpirits", "ratchets/2-60/tsurispirits.webp", "ratchet") },
        { "name": "Feather Phoenix 2-60N (Starter) (HB)", "image": getPartImage("2-60-UX-12-5", "ratchets/2-60/featherphoenix2-60n.webp", "ratchet") },
        { "name": "Bite Croc 2-60Q (Deluxe String Launcher & Custom Grip Set) (HB)", "image": getPartImage("2-60-Corocoro-CrocoCrunch", "ratchets/2-60/bitecroc2-60q.webp", "ratchet") },

      ]
    },
    {
      "id": "2-70",
      "name": "2-70",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["2", "x-70"],
      "weight": 6.33,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("2-70-UX-09", "ratchets/2-70/ux-09.webp", "ratchet"),
      "variants": [
        { "name": "UX-09 (TT)", "image": getPartImage("2-70-UX-09", "ratchets/2-70/ux-09.webp", "ratchet"), "identicalVariants": ["Saber Samurai 2-70L (Victory Grip Launcher Set)"] },
        { "name": "Corocoro (SamuraiSaber) (TT)", "image": getPartImage("2-70-SamuraiSaber-corocoro", "ratchets/2-70/carrotsaber.webp", "ratchet") },
        { "name": "Saber Samurai 2-70L (Victory Grip Launcher Set) (HB)", "image": getPartImage("2-70-UX-09", "ratchets/2-70/sabersamurai.webp", "ratchet"), "identicalVariants": ["UX-09 (TT)"] },
        { "name": "Tackle Goat 2-70N (Dual Pack) (HB)", "image": getPartImage("2-70-Tackle-Goat", "ratchets/2-70/tacklegoat.webp", "ratchet") },
        { "name": "Corocoro (DranArc) (TT)", "image": getPartImage("2-70-DranArc-corocoro", "ratchets/2-70/dranarc.webp", "ratchet") },
        { "name": "BX-00 (StormSpriggan) (TT)", "image": getPartImage("2-70-stormspriggan", "ratchets/2-70/stormspriggan.webp", "ratchet") },
        { "name": "Evangelion Deck Set (TT)", "image": getPartImage("2-70-evangelion", "ratchets/2-70/evangelion.webp", "ratchet"),"comingSoon":true }
      
      ]
    },
    {
      "id": "2-80",
      "name": "2-80",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["2", "x-80"],
      "weight": 6.88,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("2-80-BX-00-Giants-Crossover-DranDagger-B4-Exclusive", "ratchets/2-80/giantsdagger.webp", "ratchet"),
      "variants": [
        { "name": "BX-00 (Giants Crossover DranDagger B4 Exclusive) (TT) (Default)", "image": getPartImage("2-80-BX-00-Giants-Crossover-DranDagger-B4-Exclusive", "ratchets/2-80/giantsdagger.webp", "ratchet"),"displayedName":"BX-00 (Giants Crossover DranDagger B4 Exclusive) (TT)" },
        { "name": "BX-00 (Rare Bey Get, MammothTusk) (TT)", "image": getPartImage("2-80-BX-00-Rare-Bey-Get-MammothTusk", "ratchets/2-80/blackmammothtusk.webp", "ratchet") },
        { "name": "UX-00 WyvernHover (DMM Lottery exclusive) (TT)", "image": getPartImage("2-80 UX-00 WyvernHover (DMM Lottery exclusive)", "ratchets/2-80/wyvernhoverdmm.webp", "ratchet") },
        { "name": "UX-00 WyvernHover (Metal Coat: Violet) (DMM Lottery exclusive) (TT)", "image": getPartImage("2-80 UX-00 WyvernHover (Metal Coat: Violet) (DMM Lottery exclusive)", "ratchets/2-80/wyvernhoverdmmviolet.webp", "ratchet") },
        { "name": "BX-48-5 (TT)", "image": getPartImage("2-80-BX-48-5", "ratchets/2-80/bx-48-5.webp", "ratchet") }
      ]
    },
    {
      "id": "3-60",
      "name": "3-60",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["3", "x-60"],
      "weight": 6.29,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("3-60-BX-01", "ratchets/3-60/bx-01.webp", "ratchet"),
      "variants": [
        { "name": "BX-01 (TT)", "image": getPartImage("3-60-BX-01", "ratchets/3-60/bx-01.webp", "ratchet"), "identicalVariants": ["Sword Dran 3-60F (Starter)"] },
        { "name": "BX-07 (TT)", "image": getPartImage("3-60-BX-07", "ratchets/3-60/bx-07.webp", "ratchet") },
        { "name": "BX-14-1 (TT)", "image": getPartImage("3-60-BX-14-1", "ratchets/3-60/bx-14-1.webp", "ratchet"), "identical": ["Keel Shark 3-60LF (Booster)"] },
        { "name": "BX-14-6 (TT)", "image": getPartImage("3-60-BX-14-6", "ratchets/3-60/bx-14-6.webp", "ratchet") },
        { "name": "BX-17 (TT)", "image": getPartImage("3-60-BX-17", "ratchets/3-60/bx-17.webp", "ratchet"), "identicalVariants": ["Sword Dran 3-60F (Dual Pack)"] },
        { "name": "BX-21 (TT)", "image": getPartImage("3-60-BX-21", "ratchets/3-60/bx-21.webp", "ratchet") },
        { "name": "BX-24-2 (TT)", "image": getPartImage("3-60-BX-24-2", "ratchets/3-60/bx-24-2.webp", "ratchet"), "identicalVariants": ["Gale Wyvern 3-60T (Dual Pack)"] },
        { "name": "BX-31-2 (TT)", "image": getPartImage("3-60-BX-31-2", "ratchets/3-60/bx-31-2.webp", "ratchet") },
        { "name": "BX-33 (TT)", "image": getPartImage("3-60-BX-33", "ratchets/3-60/bx-33.webp", "ratchet"), "identicalVariants": ["Pearl Tiger 3-60U (Dual Pack)"] },
        { "name": "BX-39-3 (TT)", "image": getPartImage("3-60-BX-39-3", "ratchets/3-60/bx-39-3.webp", "ratchet") },
        { "name": "BX-00 (XenoXcalibur) (TT)", "image": getPartImage("3-60-BX-00-XenoXcalibur", "ratchets/3-60/xenoxcalibur.webp", "ratchet") },
        { "name": "UX-15 (TT)", "image": getPartImage("3-60-UX-15", "ratchets/3-60/ux-15.webp", "ratchet") },
        { "name": "BXA-01 (Shushiro DranSword) (TT)", "image": getPartImage("3-60-BXA-01-Shushiro-DranSword", "ratchets/3-60/shushiro.webp", "ratchet") },
        { "name": "BXG-30 (Spider-Man) (TT)", "image": getPartImage("3-60-BXG-30-Spider-Man", "ratchets/3-60/spiderman.webp", "ratchet"), "identicalVariants": ["Spider-Man 3-60F (Dual Pack)"] },
        { "name": "BXG-34 (The Mandalorian) (TT)", "image": getPartImage("3-60-BXG-34-The-Mandalorian", "ratchets/3-60/mandalorian.webp", "ratchet") },
        { "name": "BXG-37 (Optimus Primal) (TT)", "image": getPartImage("3-60-BXG-37-Optimus-Primal", "ratchets/3-60/optimusprimal.webp", "ratchet"), "identicalVariants": ["Optimus Primal 3-60F (Dual Pack)"] },
        { "name": "G1 1st Prize (DranSword Gold) (TT)", "image": getPartImage("3-60-G1-1st-Prize-DranSword-Gold", "ratchets/3-60/gold.webp", "ratchet") },
        { "name": "G1 2nd Prize (Dransword Silver) (TT)", "image": getPartImage("3-60-G1-2nd-Prize-Dransword-Silver", "ratchets/3-60/silver.webp", "ratchet") },
        { "name": "G1 3rd Prize (DranSword Bronze) (TT)", "image": getPartImage("3-60-G1-3rd-Prize-DranSword-Bronze", "ratchets/3-60/bronze.webp", "ratchet") },
        { "name": "Sword Dran 3-60F (Starter) (HB)", "image": getPartImage("3-60-BX-01", "ratchets/3-60/sworddranstarter.webp", "ratchet"), "identicalVariants": ["BX-01 (TT)"] },
        { "name": "Keel Shark 3-60LF (Booster) (HB)", "image": getPartImage("3-60-BX-14-1", "ratchets/3-60/keelsharkstock.webp", "ratchet"), "identicalVariants": ["BX-14-1 (TT)"] },
        { "name": "Sword Dran 3-60F (Dual Pack) (HB)", "image": getPartImage("3-60-BX-17", "ratchets/3-60/sworddranred.webp", "ratchet"), "identicalVariants": ["BX-17 (TT)"] },
        { "name": "Gale Wyvern 3-60T (Dual Pack) (HB)", "image": getPartImage("3-60-BX-24-2", "ratchets/3-60/galewyvern3-60t.webp", "ratchet"), "identicalVariants": ["BX-24-2 (TT)"] },
        { "name": "Pearl Tiger 3-60U (Dual Pack) (HB)", "image": getPartImage("3-60-BX-33", "ratchets/3-60/pearltiger3-60u.webp", "ratchet"), "identicalVariants": ["BX-33 (TT)"] },
        { "name": "Spider-Man 3-60F (Dual Pack) (HB)", "image": getPartImage("3-60-BXG-30-Spider-Man", "ratchets/3-60/spiderman.webp", "ratchet"), "identicalVariants": ["BXG-30 (Spider-Man) (TT)"] },
        { "name": "The Mandalorian 3-60F (Dual Pack) (HB)", "image": getPartImage("3-60-BXG-34-The-Mandalorian", "ratchets/3-60/mandalorian.webp", "ratchet") },
        { "name": "Optimus Primal 3-60F (Dual Pack) (HB)", "image": getPartImage("3-60-BXG-37-Optimus-Primal", "ratchets/3-60/optimusprimal.webp", "ratchet"), "identicalVariants": ["BXG-37 (Optimus Primal) (TT)"] },
        { "name": "Bite Croc 3-60LF (Dual Pack) (HB)", "image": getPartImage("3-60-Bite-Croc", "ratchets/3-60/bitecroc3-60lf.webp", "ratchet") },
        { "name": "Savage Bear 3-60S (Booster) (HB)", "image": getPartImage("3-60-Savage-Bear", "ratchets/3-60/savagebear3-60s.webp", "ratchet") },
        { "name": "Tusk Mammoth 3-60T (Xtreme Battle Set) (HB)", "image": getPartImage("3-60-Tusk-Mammoth", "ratchets/3-60/tuskmammoth.webp", "ratchet") },
        { "name": "Yell Kong 3-60GB (Booster, Dual Pack) (HB)", "image": getPartImage("3-60-Yell-Kong-Booster", "ratchets/3-60/yellkong.webp", "ratchet") },
        { "name": "Lance Knight 3-60LF (Booster) (HB)", "image": getPartImage("3-60-BX-21", "ratchets/3-60/lanceknight3-60lf.webp", "bit"), "identicalVariants": ["BX-21 (TT)"] },
        { "name": "Bumblebee 3-60GP (Dual Pack) (HB)", "image": getPartImage("3-60-Bumblebee", "ratchets/3-60/bumblebee.webp", "ratchet") },
        { "name": "CX-17-1 (TT)", "image": getPartImage("3-60-CX-17-1", "ratchets/3-60/cx-17-1.webp", "ratchet",), "comingSoon":true},
        { "name": "CX-17-5 (TT)", "image": getPartImage("3-60-CX-17-5", "ratchets/3-60/cx-17-5.webp", "ratchet",), "comingSoon":true},
      ]
    },
    {
      "id": "3-70",
      "name": "3-70",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["3", "x-70"],
      "weight": 6.41,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("3-70-UX-02", "ratchets/3-70/ux-02.webp", "ratchet"),
      "variants": [
        { "name": "UX-02 (TT)", "image": getPartImage("3-70-UX-02", "ratchets/3-70/ux-02.webp", "ratchet"), "identicalVariants": ["Hammer Incendio 3-70H (Starter)"] },
        { "name": "UX-05-3 (TT)", "image": getPartImage("3-70-UX-05-3", "ratchets/3-70/ux-05-3.webp", "ratchet") },
        { "name": "BX-35-3 (TT)", "image": getPartImage("3-70-BX-35-3", "ratchets/3-70/bx-35-3.webp", "ratchet") },
        { "name": "UX-00 (Dran Deck Set) (TT)", "image": getPartImage("3-70-UX-00-Dran-Deck-Set", "ratchets/3-70/drandeck.webp", "ratchet") },
        { "name": "UX-00 (Bey Kick Off Set HellsHammer) (TT)", "image": getPartImage("3-70-UX-00-Barcelona-Stadium-Set", "ratchets/3-70/beykickoffset.webp", "ratchet") },
        { "name": "UX-00 (Rare Bey Get, AeroPegasus) (TT)", "image": getPartImage("3-70-UX-00-Rare-Bey-Get-AeroPegasus", "ratchets/3-70/aeropegasusmc.webp", "ratchet") },
        { "name": "25th Anniversary Set (StormPegasis) (TT)", "image": getPartImage("3-70-25th-Anniversary-Set-StormPegasis", "ratchets/3-70/stormpegasis.webp", "ratchet") },
        { "name": "Hammer Incendio 3-70H (Starter) (HB)", "image": getPartImage("3-70-UX-02", "ratchets/3-70/hammerincendio.webp", "ratchet"), "identicalVariants": ["UX-02"] },
        { "name": "UX-17 (TT)", "image": getPartImage("3-70-UX-17", "ratchets/3-70/ux-17.webp", "ratchet") },
        { "name": "UX-00 Rare Bey Get (AeroPegasus Red Ver.) (TT)", "image": getPartImage("3-70-UX-00-Rare-Bey-Get-AeroPegasus", "ratchets/3-70/aeropegasus_redver.webp", "ratchet") },
        { "name": "Meteoroid Dragoon 3-70J (Deluxe Launcher Set) (HB)", "image": getPartImage("3-70-UX-17", "ratchets/3-70/ux-17.webp", "ratchet"), "comingSoon": true },

      ]
    },
    {
      "id": "3-80",
      "name": "3-80",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["3", "x-80"],
      "weight": 6.96,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("3-80-BX-04", "ratchets/3-80/bx-04.webp", "ratchet"),
      "variants": [
        { "name": "BX-04 (TT)", "image": getPartImage("3-80-BX-04", "ratchets/3-80/bx-04.webp", "ratchet"), "identicalVariants": ["Helm Knight 3-80N (Starter)"] },
        { "name": "BX-06 (TT)", "image": getPartImage("3-80-BX-06", "ratchets/3-80/bx-06.webp", "ratchet") },
        { "name": "BX-08 (TT)", "image": getPartImage("3-80-BX-08", "ratchets/3-80/bx-08.webp", "ratchet"), "identicalVariants": ["Scythe Incendio 3-80B (Booster)"] },
        { "name": "BX-14-3 (TT)", "image": getPartImage("3-80-BX-14-3", "ratchets/3-80/bx-14-3.webp", "ratchet"), "identicalVariants": ["Sword Dran 3-80B (Dual Pack)"] },
        { "name": "BX-16-3 (TT)", "image": getPartImage("3-80-BX-16-3", "ratchets/3-80/bx-16-3.webp", "ratchet"), "identicalVariants": ["Tail Viper 3-80HN (Dual Pack)"] },
        { "name": "BX-19 (TT)", "image": getPartImage("3-80-BX-19", "ratchets/3-80/bx-19.webp", "ratchet"), "identicalVariants": ["Horn Rhino 3-80S (Booster)"] },
        { "name": "BX-20 (TT)", "image": getPartImage("3-80-BX-20", "ratchets/3-80/bx-20.webp", "ratchet"), "identicalVariants": ["Keel Shark 3-80F (Dual Pack)"] },
        { "name": "BX-24-5 (TT)", "image": getPartImage("3-80-BX-24-5", "ratchets/3-80/bx-24-5.webp", "ratchet") },
        { "name": "BX-36-3 (TT)", "image": getPartImage("3-80-BX-36-3", "ratchets/3-80/bx-36-3.webp", "ratchet") },
        { "name": "UX-08 (TT)", "image": getPartImage("3-80-UX-08", "ratchets/3-80/ux-08.webp", "ratchet"), "identicalVariants": ["Sterling Wolf 3-80FB (Starter)"] },
        { "name": "UX-12-3 (TT)", "image": getPartImage("3-80-UX-12-3", "ratchets/3-80/ux-12-3.webp", "ratchet") },
        { "name": "BX-00 (DranzerSpiral) (TT)", "image": getPartImage("3-80-BX-00-DranzerSpiral", "ratchets/3-80/dranzerblue.webp", "ratchet"), "identicalVariants": ["Dranzer Spiral 3-80T (Starter)"] },
        { "name": "Rare Bey Get (DranzerSpiral Black) (TT)", "image": getPartImage("3-80-BX-00-Rare-Bey-Get-Black-DranzerSpiral", "ratchets/3-80/dranzerblack.webp", "ratchet") },
        { "name": "BXG-30 (Venom) (TT)", "image": getPartImage("3-80-BXG-30-Venom", "ratchets/3-80/venom.webp", "ratchet"), "identicalVariants": ["Venom 3-80N (Dual Pack)"] },
        { "name": "BXG-34 (Moff Gideon) (TT)", "image": getPartImage("3-80-BXG-34-Moff-Gideon", "ratchets/3-80/moffgideon.webp", "ratchet"), "identicalVariants": ["Moff Gideon 3-80N (Dual Pack)"] },
        { "name": "BXG-37 Starscream (TT)", "image": getPartImage("3-80-BXG-37-Starscream", "ratchets/3-80/starscream.webp", "ratchet"), "identicalVariants": ["Starscream 3-80N (Dual Pack)"] },
        { "name": "Corocoro (Persona HellsScythe) (TT)", "image": getPartImage("3-80-Corocoro-Persona-HellsScythe", "ratchets/3-80/personascythe.webp", "ratchet") },
        { "name": "G3 3rd Prize (KnightShield Metal Coat Gold) (TT)", "image": getPartImage("3-80-G3-3rd-Prize-KnightShield-Metal-Coat-Gold", "ratchets/3-80/g3.webp", "ratchet") },
        { "name": "Helm Knight 3-80N (Starter) (HB)", "image": getPartImage("3-80-BX-04", "ratchets/3-80/helmknightstockstarter.webp", "ratchet"), "identicalVariants": ["BX-04 (TT)"] },
        { "name": "Scythe Incendio 3-80B (Booster) (HB)", "image": getPartImage("3-80-BX-08", "ratchets/3-80/scytheincendio3-80b.webp", "ratchet"), "identicalVariants": ["BX-08 (TT)"] },
        { "name": "Tail Viper 3-80HN (Dual Pack) (HB)", "image": getPartImage("3-80-BX-16-3", "ratchets/3-80/tailviper3-80hn.webp", "ratchet"), "identicalVariants": ["BX-16-3 (TT)"] },
        { "name": "Horn Rhino 3-80S (Booster) (HB)", "image": getPartImage("3-80-BX-19", "ratchets/3-80/hornrhino3-80s.webp", "ratchet"), "identicalVariants": ["BX-19 (TT)"] },
        { "name": "Keel Shark 3-80F (Dual Pack) (HB)", "image": getPartImage("3-80-BX-20", "ratchets/3-80/keelshark3-80f.webp", "ratchet"), "identicalVariants": ["BX-20 (TT)"] },
        { "name": "Sword Dran 3-80B (Dual Pack) (HB)", "image": getPartImage("3-80-BX-14-3", "ratchets/3-80/sworddran3-80b.webp", "ratchet"), "identicalVariants": ["BX-14-3 (TT)"] },
        { "name": "Sterling Wolf 3-80FB (Starter) (HB)", "image": getPartImage("3-80-UX-08", "ratchets/3-80/sterlingwolf3-80fb.webp", "ratchet"), "identicalVariants": ["UX-08 (TT)"] },
        { "name": "Venom 3-80N (Dual Pack) (HB)", "image": getPartImage("3-80-BXG-30-Venom", "ratchets/3-80/venom.webp", "ratchet"), "identicalVariants": ["BXG-30 (Venom) (TT)"] },
        { "name": "Moff Gideon 3-80N (Dual Pack) (HB)", "image": getPartImage("3-80-BXG-34-Moff-Gideon", "ratchets/3-80/moffgideon.webp", "ratchet"), "identicalVariants": ["BXG-34 (Moff Gideon) (TT)"] },
        { "name": "Starscream 3-80N (Dual Pack) (HB)", "image": getPartImage("3-80-BXG-37-Starscream", "ratchets/3-80/starscream.webp", "ratchet"), "identicalVariants": ["BXG-37 Starscream (TT)"] },
        { "name": "Dranzer Spiral 3-80T (Starter) (HB)", "image": getPartImage("3-80-BX-00-DranzerSpiral", "ratchets/3-80/dranzerblue.webp", "ratchet"), "identicalVariants": ["BX-00 (DranzerSpiral) (TT)"] },
        { "name": "Dranzer Spiral 3-80T (Green Starter) (HB)", "image": getPartImage("3-80-Dranzer-Spiral-Green", "ratchets/3-80/dranzergreen.webp", "ratchet") },
        { "name": "Dranzer Spiral 3-80T (Red Starter) (HB)", "image": getPartImage("3-80-Dranzer-Spiral-Red", "ratchets/3-80/dranzerred.webp", "ratchet") },
        { "name": "Talon Ptera 3-80B (Booster) (HB)", "image": getPartImage("3-80-Talon-Ptera", "ratchets/3-80/talonptera3-80b.webp", "ratchet") },
        { "name": "General Grievous 3-80HN (Dual Pack) (HB)", "image": getPartImage("3-80-General-Grievous", "ratchets/3-80/generalgrievous3-80hn.webp", "ratchet") }
      ]
    },
    {
      "id": "3-85",
      "name": "3-85",
      "category": "Ratchet",
      "type": "Simple",
      "attributes": ["3", "x-85"],
      "weight": 4.75,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("3-85-UX-10", "ratchets/3-85/ux-10.webp", "ratchet"),
      "variants": [
        { "name": "UX-10 (TT)", "image": getPartImage("3-85-UX-10", "ratchets/3-85/ux-10.webp", "ratchet") },
        { "name": "CX-05-3 (TT)", "image": getPartImage("3-85-CX-05-3", "ratchets/3-85/cx-05-3.webp", "ratchet") },
        { "name": "CX-08-2 (TT)", "image": getPartImage("3-85-CX-08-2", "ratchets/3-85/cx-08-2.webp", "ratchet") },
        { "name": "UX-00 (Rare Bey Get, KnightMail Metal Coat Navy) (TT)", "image": getPartImage("3-85-UX-00-Rare-Bey-Get-KnightMail-Metal-Coat-Blue", "ratchets/3-85/knightmailblue.webp", "ratchet") },
        { "name": "BXG-41 (Spinosaurus) (TT)", "image": getPartImage("3-85-BXG-41-Spinosaurus", "ratchets/3-85/spinosaurus.webp", "ratchet"), "identicalVariants": ["Spinosaurus 3-85A (Dual Pack)"] },
        { "name": "Hover Wyvern 3-85N (Drop Attack Battle Set) (HB)", "image": getPartImage("3-85-Hover-Wyvern", "ratchets/3-85/hoverwyvern.webp", "ratchet") },
        { "name": "Spinosaurus 3-85A (Dual Pack) (HB)", "image": getPartImage("3-85-BXG-41-Spinosaurus", "ratchets/3-85/spinosaurus.webp", "ratchet"), "identicalVariants": ["BXG-41 (Spinosaurus)"] },
        { "name": "Wriggle Kraken S 3-85O (Starter) (HB)", "image": getPartImage("3-85-Wriggle-Kraken", "ratchets/3-85/wrigglekraken.webp", "ratchet") },
        { "name": "UX-18-3 (TT)", "image": getPartImage("3-85-UX-18-3", "ratchets/3-85/ux-18-3.webp", "placeholder") },
        { "name": "X-treme Expansion Pack (HB)", "image": getPartImage("3-85-UX-10", "ratchets/3-85/xep.webp", "ratchet"),"displayedName": "X-Treme Expansion Pack (HB)" },
        { "name": "Obsidian Shell 3-85S (Dual Pack) (HB)", "image": getPartImage("3-85-Yellow_Shell", "ratchets/3-85/obsidianshell3-85s.webp", "ratchet") },
        { "name": "BX-48-4 (TT)", "image": getPartImage("3-85-BX-48-4", "ratchets/3-85/bx-48-4.webp", "ratchet") },
        { "name": "CX-17-4 (TT)", "image": getPartImage("3-85-CX-17-4", "ratchets/3-85/cx-17-4.webp", "ratchet",),"comingSoon":true}
      ]
    },
    {
      "id": "4-50",
      "name": "4-50",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["4", "x-50"],
      "weight": 5.90,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("4-50-UX-15", "ratchets/4-50/ux-15.webp", "ratchet"),
      "variants": [
        { "name": "UX-15 (TT) (Default)", "image": getPartImage("4-50-UX-15", "ratchets/4-50/ux-15.webp", "ratchet"),"displayedName": "UX-15 (TT)" },
        { "name": "Scale Shark 4-50UF (Booster) (HB)", "image": getPartImage("4-50-UX-15", "ratchets/4-50/scaleshark4-50uf.webp", "ratchet") },
        { "name": "BX-49 (TT)", "image": getPartImage("4-50-BX-49", "ratchets/4-50/bx-49.webp", "ratchet"), "comingSoon": true },
        { "name": "Strike Dran 4-50FF (Starter) (HB)", "image": getPartImage("4-50-strikedran", "ratchets/4-50/bx-49.webp", "ratchet"), "comingSoon": true }
      ]
    },
    {
      "id": "4-55",
      "name": "4-55",
      "category": "Ratchet",
      "type": "Simple",
      "attributes": ["4", "x-55"],
      "weight": 4.72,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("4-55-CX-02", "ratchets/4-55/cx-02.webp", "ratchet"),
      "variants": [
        { "name": "CX-02 (TT)", "image": getPartImage("4-55-CX-02", "ratchets/4-55/cx-02.webp", "ratchet"), "identicalVariants": ["Arc Wizard R 4-55LO (Starter)"] },
        { "name": "CX-05-2 (TT)", "image": getPartImage("4-55-CX-05-2", "ratchets/4-55/cx-05-2.webp", "ratchet") },
        { "name": "CX-08-6 (TT)", "image": getPartImage("4-55-CX-08-6", "ratchets/4-55/cx-08-6.webp", "ratchet") },
        { "name": "BXG-41 (Quetzalcoatlus) (TT)", "image": getPartImage("4-55-BXG-41-Quetzalcoatlus", "ratchets/4-55/quetzalcoatlus.webp", "ratchet"), "identical": ["Quetzalcoatlus 4-55D (Dual Pack)"] },
        { "name": "Arc Wizard R 4-55LO (Starter) (HB)", "image": getPartImage("4-55-CX-02", "ratchets/4-55/arcwizardr4-55lo.webp", "ratchet"), "identicalVariants": ["CX-02 (TT)"] },
        { "name": "Quetzalcoatlus 4-55D (Dual Pack) (HB)", "image": getPartImage("4-55-BXG-41-Quetzalcoatlus", "ratchets/4-55/quetzalcoatlus.webp", "ratchet"), "identicalVariants": ["BXG-41 (Quetzalcoatlus)"] },
        { "name": "CX-00 (WizardArc Metal Coat: Black) (TT)", "image": getPartImage("4-55-Ratchet-CX-00-Metal-Coat-Black", "ratchets/4-55/wizardarcmcblack.webp", "ratchet") },
        { "name": "X-treme Expansion Pack (HB)", "image": getPartImage("4-55-XEP-Hasbro", "ratchets/4-55/xep.webp", "ratchet"),"displayedName": "X-Treme Expansion Pack (HB)" },
        { "name": "Hack Viking 4-55O (Dual Pack) (HB)", "image": getPartImage("4-55-HackVikingDualPack-Hasbro", "ratchets/4-55/hackviking.webp", "ratchet") },
        { "name": "Reaper Rhino C 4-55D (Starter) (HB)", "image": getPartImage("4-55-CX-05-2", "ratchets/4-55/reaperrhinoc4-55d.webp", "ratchet") },
        { "name": "CX-15 (TT)", "image": getPartImage("4-55-CX-15", "ratchets/4-55/cx-15.webp", "ratchet")},
        { "name": "Rage Ragna FE 4-55Y (Starter) (HB)", "image": getPartImage("4-55-CX-15", "ratchets/4-55/cx-15.webp", "ratchet"), "comingSoon": true }
      ]
    },
    {
      "id": "4-60",
      "name": "4-60",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["4", "x-60"],
      "weight": 6.26,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("4-60-BX-02", "ratchets/4-60/bx-02.webp", "ratchet"),
      "variants": [
        { "name": "BX-02 (TT)", "image": getPartImage("4-60-BX-02", "ratchets/4-60/bx-02.webp", "ratchet"), "identicalVariants": ["Scythe Incendio 4-60T (Starter)"] },
        { "name": "BX-08 (TT)", "image": getPartImage("4-60-BX-08", "ratchets/4-60/bx-08.webp", "ratchet"), "identicalVariants": ["Arrow Wizard 4-60N (Dual Pack)"] },
        { "name": "BX-14-5 (TT)", "image": getPartImage("4-60-BX-14-5", "ratchets/4-60/bx-14-5.webp", "ratchet") },
        { "name": "BX-16-2 (TT)", "image": getPartImage("4-60-BX-16-2", "ratchets/4-60/bx-16-2.webp", "ratchet"), },
        { "name": "BX-20 (TT)", "image": getPartImage("4-60-BX-20", "ratchets/4-60/bx-20.webp", "ratchet"), "identicalVariants": ["Dagger Dran 4-60R (Xtreme Battle Set)"] },
        { "name": "BX-24-3 (TT)", "image": getPartImage("4-60-BX-24-3", "ratchets/4-60/bx-24-3.webp", "ratchet"), "identicalVariants": ["BX-16-2"] },
        { "name": "BX-35-1 (TT)", "image": getPartImage("4-60-BX-35-1", "ratchets/4-60/bx-35-1.webp", "ratchet"), "identicalVariants": ["Obsidian Shell 4-60D (Booster)"] },
        { "name": "UX-12-2 (TT)", "image": getPartImage("4-60-UX-12-2", "ratchets/4-60/ux-12-2.webp", "ratchet") },
        { "name": "25th Anniversary Set (DragoonStorm) (TT)", "image": getPartImage("4-60-25th-Anniversary-Set-DragoonStorm", "ratchets/4-60/dragoonstorm.webp", "ratchet") },
        { "name": "Beyblade X XONE (ShinobiKnife) (TT)", "image": getPartImage("4-60-Beyblade-X-XONE-ShinobiKnife", "ratchets/4-60/xone.webp", "ratchet") },
        { "name": "BX-00 Rare Bey Get (CobaltDrake Metal Coat Blue) (TT)", "image": getPartImage("4-60-BX-00-Rare-Bey-Get-CobaltDrake-Metal-Coat-Blue", "ratchets/4-60/cobaltdrakeblue.webp", "ratchet") },
        { "name": "BX-00 Rare Bey Get (Cobalt Drake Clear) (TT)", "image": getPartImage("4-60-BX-00-Rare-Bey-Get-Cobalt-Drake-Clear", "ratchets/4-60/cobaltdrakeclear.webp", "ratchet") },
        { "name": "BX-00 Rare Bey Get (HellsScythe Metal Coat Gold) (TT)", "image": getPartImage("4-60-BX-00-Rare-Bey-Get-HellsScythe-Metal-Coat-Gold", "ratchets/4-60/goldhellsscythe.webp", "ratchet") },
        { "name": "BXG-29 (Thanos) (TT)", "image": getPartImage("4-60-BXG-29-Thanos", "ratchets/4-60/thanos.webp", "ratchet"), "identicalVariants": ["Thanos 4-60P (Dual Pack)"] },
        { "name": "BXG-33 (Darth Vader) (TT)", "image": getPartImage("4-60-BXG-33-Darth-Vader", "ratchets/4-60/darthvader.webp", "ratchet"), "identicalVariants": ["Darth Vader 4-60P (Dual Pack)"] },
        { "name": "BXG-36 (Optimus Prime) (TT)", "image": getPartImage("4-60-BXG-36-Optimus-Prime", "ratchets/4-60/optimusprime.webp", "ratchet"), "identicalVariants": ["Optimus Prime 4-60P (Dual Pack)"] },
        { "name": "Scythe Incendio 4-60T (Starter) (HB)", "image": getPartImage("4-60-BX-02", "ratchets/4-60/scytheincendio.webp", "ratchet"), "identicalVariants": ["BX-02 (TT)"] },
        { "name": "Arrow Wizard 4-60N (Dual Pack) (HB)", "image": getPartImage("4-60-BX-08", "ratchets/4-60/wizardarrow4-60n.webp", "ratchet"), "identicalVariants": ["BX-08 (TT)"] },
        { "name": "Dagger Dran 4-60R (Xtreme Battle Set) (HB)", "image": getPartImage("4-60-BX-20", "ratchets/4-60/daggerdran.webp", "ratchet"), "identicalVariants": ["BX-20 (TT)"] },
        { "name": "Obsidian Shell 4-60D (Booster) (HB)", "image": getPartImage("4-60-BX-35-1", "ratchets/4-60/obsidianshell4-60d.webp", "ratchet"), "identicalVariants": ["BX-35-3 (TT)"] },
        { "name": "Thanos 4-60P (Dual Pack) (HB)", "image": getPartImage("4-60-BXG-29-Thanos", "ratchets/4-60/thanos.webp", "ratchet"), "identicalVariants": ["BXG-29 (Thanos) (TT)"] },
        { "name": "Darth Vader 4-60P (Dual Pack) (HB)", "image": getPartImage("4-60-BXG-33-Darth-Vader", "ratchets/4-60/darthvader.webp", "ratchet"), "identicalVariants": ["BXG-33 (Darth Vader) (TT)"] },
        { "name": "Optimus Prime 4-60P (Dual Pack) (HB)", "image": getPartImage("4-60-BXG-36-Optimus-Prime", "ratchets/4-60/optimusprime.webp", "ratchet"), "identicalVariants": ["BXG-36 (Optimus Prime) (TT)"] },
        { "name": "Obi-Wan Kenobi 4-60P (Dual Pack) (HB)", "image": getPartImage("4-60-Obi-Wan-Kenobi", "ratchets/4-60/obiwan.webp", "ratchet") },
        { "name": "Sting Unicorn 4-60P (Dual Pack) (HB)", "image": getPartImage("4-60-Sting-Unicorn", "ratchets/4-60/stingunicorn4-60p.webp", "ratchet") },
        { "name": "Beyblade X Evobattle (LeonFang) (TT)", "image": getPartImage("4-60-evobattle", "ratchets/4-60/evobattle.webp", "ratchet") },
        { "name": "UX-18-2 (TT)", "image": getPartImage("4-60-UX-18-2", "ratchets/4-60/ux-18-2.webp", "ratchet") },
        { "name": "Circle Ghost 4-60LR (Dual Pack) (HB)", "image": getPartImage("4-60-circleGhost", "ratchets/4-60/circleghost4-60lr.webp", "ratchet") },
        { "name": "Fang Leon T 4-60U (Starter) (HB)", "image": getPartImage("4-60-leonfang", "ratchets/4-60/fangleont4-60u.webp", "ratchet") },
        { "name": "BBLD (Drandagger Metal Coat: Black) (TT)", "image": getPartImage("4-60-BBLD-Black", "ratchets/4-60/bbld_black.webp", "ratchet") },
        { "name": "BBLD (Drandagger Metal Coat: Blue) (TT)", "image": getPartImage("4-60-BBLD-Blue", "ratchets/4-60/bbld_blue.webp", "ratchet") },
      ]
    },
    {
      "id": "4-70",
      "name": "4-70",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["4", "x-70"],
      "weight": 6.41,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("4-70-BX-31-1", "ratchets/4-70/bx-31-1.webp", "ratchet"),
      "variants": [
        { "name": "BX-31-1 (TT)", "image": getPartImage("4-70-BX-31-1", "ratchets/4-70/bx-31-1.webp", "ratchet"), "identicalVariants": ["Beat Tyranno 4-70Q (Dual Pack)"] },
        { "name": "BX-31-4 (TT)", "image": getPartImage("4-70-BX-31-4", "ratchets/4-70/bx-31-4.webp", "ratchet"), "identicalVariants": ["Dagger Dran 4-70Q (Booster)"] },
        { "name": "BX-36-2 (TT)", "image": getPartImage("4-70-BX-36-2", "ratchets/4-70/bx-36-2.webp", "ratchet") },
        { "name": "BX-38 (TT)", "image": getPartImage("4-70-BX-38", "ratchets/4-70/bx-38.webp", "ratchet"), "identicalVariants": ["Scarlet Garuda 4-70TP (Starter)"] },
        { "name": "CX-05-1 (TT)", "image": getPartImage("4-70-CX-05-1", "ratchets/4-70/cx-05-1.webp", "ratchet"), "identicalVariants": ["Reaper Incendio T 4-70K (Starter)"] },
        { "name": "CX-05-5 (TT)", "image": getPartImage("4-70-CX-05-5", "ratchets/4-70/cx-05-5.webp", "ratchet") },
        { "name": "CX-00 (Rare Bey Get, ValkyrieVolt) (TT)", "image": getPartImage("4-70-CX-00-Rare-Bey-Get-ValkyrieVolt", "ratchets/4-70/valkyrievolt.webp", "ratchet") },
        { "name": "Beat Tyranno 4-70Q (Dual Pack) (HB)", "image": getPartImage("4-70-BX-31-1", "ratchets/4-70/beattyranno4-70q.webp", "ratchet"), "identicalVariants": ["BX-31-1 (TT)"] },
        { "name": "Dagger Dran 4-70Q (Booster) (HB)", "image": getPartImage("4-70-BX-31-4", "ratchets/4-70/daggerdran4-70q.webp", "ratchet"), "identicalVariants": ["BX-31-4 (TT)"] },
        { "name": "Scarlet Garuda 4-70TP (Starter) (HB)", "image": getPartImage("4-70-BX-38", "ratchets/4-70/scarletgaruda4-70tp.webp", "ratchet"), "identicalVariants": ["BX-38 (TT)"] },
        { "name": "Reaper Incendio T 4-70K (Starter) (HB)", "image": getPartImage("4-70-CX-05-1", "ratchets/4-70/reaperincendiot4-70k.webp", "ratchet"), "identicalVariants": ["CX-05-1 (TT)"] },
        { "name": "Gill Shark 4-70O (Dual Pack) (HB)", "image": getPartImage("4-70-Gill-Shark", "ratchets/4-70/gillshark4-70o.webp", "ratchet") },
        { "name": "Captain America 4-70GB (Dual Pack) (HB)", "image": getPartImage("4-70-Captain-America", "ratchets/4-70/captainamerica.webp", "ratchet") },
        { "name": "Rudder Phoenix 4-70LF (Starter) (HB)", "image": getPartImage("4-70-CX-05-5", "ratchets/4-70/rudderphoenix4-70lf.webp", "ratchet") },
        { "name": "BX-48-2 (TT)", "image": getPartImage("4-70-BX-48-2", "ratchets/4-70/bx-48-2.webp", "ratchet") },
      ]
    },
    {
      "id": "4-80",
      "name": "4-80",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["4", "x-80"],
      "weight": 6.93,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("4-80-BX-03", "ratchets/4-80/bx-03.webp", "ratchet"),
      "variants": [
        { "name": "BX-03 (TT)", "image": getPartImage("4-80-BX-03", "ratchets/4-80/bx-03.webp", "ratchet"), "identicalVariants": ["Arrow Wizard 4-80B (Starter)"] },
        { "name": "BX-05 (TT)", "image": getPartImage("4-80-BX-05", "ratchets/4-80/bx-05.webp", "ratchet") },
        { "name": "BX-08 (TT)", "image": getPartImage("4-80-BX-05", "ratchets/4-80/bx-08.webp", "ratchet") },
        { "name": "BX-13 (TT)", "image": getPartImage("4-80-BX-13", "ratchets/4-80/bx-13.webp", "ratchet"), "identicalVariants": ["Lance Knight 4-80HN (Starter)"] },
        { "name": "BX-14-2 (TT)", "image": getPartImage("4-80-BX-14-2", "ratchets/4-80/bx-14-2.webp", "ratchet") },
        { "name": "BX-14-4 (TT)", "image": getPartImage("4-80-BX-14-4", "ratchets/4-80/bx-14-4.webp", "ratchet") },
        { "name": "BX-17 (TT)", "image": getPartImage("4-80-BX-17", "ratchets/4-80/bx-17.webp", "ratchet") },
        { "name": "BX-21 (TT)", "image": getPartImage("4-80-BX-21", "ratchets/4-80/bx-21.webp", "ratchet") },
        { "name": "BX-24-6 (TT)", "image": getPartImage("4-80-BX-24-6", "ratchets/4-80/bx-24-6.webp", "ratchet"), "identicalVariants": ["Arrow Wizard 4-80GB (Booster)"] },
        { "name": "BX-27-2 (TT)", "image": getPartImage("4-80-BX-27-2", "ratchets/4-80/bx-27-2.webp", "ratchet") },
        { "name": "BX-00 (DrigerSlash) (TT)", "image": getPartImage("4-80-BX-00-DrigerSlash", "ratchets/4-80/drigerslash.webp", "ratchet"), "identical": ["Driger Slash 4-80P (Starter)"] },
        { "name": "BXG-29 (Iron Man) (TT)", "image": getPartImage("4-80-BXG-29-Iron-Man", "ratchets/4-80/ironman.webp", "ratchet"), "identicalVariants": ["Iron Man 4-80B (Dual Pack)"] },
        { "name": "BXG-33 (Luke Skywalker) (TT)", "image": getPartImage("4-80-BXG-33-Luke-Skywalker", "ratchets/4-80/lukeskywalker.webp", "ratchet"), "identicalVariants": ["Luke Skywalker 4-80B (Dual Pack)"] },
        { "name": "BXG-36 (Megatron) (TT)", "image": getPartImage("4-80-BXG-36-Megatron", "ratchets/4-80/megatron.webp", "ratchet"), "identical": ["Megatron 4-80B (Dual Pack)"] },
        { "name": "UX-00 (Dran Deck Set) (TT)", "image": getPartImage("4-80-UX-00-Dran-Deck-Set", "ratchets/4-80/drandeck.webp", "ratchet") },
        { "name": "Arrow Wizard 4-80B (Starter) (HB)", "image": getPartImage("4-80-BX-03", "ratchets/4-80/arrowwizard4-80b.webp", "ratchet"), "identicalVariants": ["BX-03 (TT)"] },
        { "name": "Lance Knight 4-80HN (Starter) (HB)", "image": getPartImage("4-80-BX-13", "ratchets/4-80/lanceknight4-80hn.webp", "ratchet"), "identicalVariants": ["BX-13 (TT)"] },
        { "name": "Arrow Wizard 4-80GB (Booster) (HB)", "image": getPartImage("4-80-BX-24-6", "ratchets/4-80/arrowwizard4-80gb.webp", "ratchet"), "identicalVariants": ["BX-24-6 (TT)"] },
        { "name": "Arrow Wizard 4-80O (Booster) (HB)", "image": getPartImage("4-80-BX-21", "ratchets/4-80/bx-21.webp", "ratchet"), "identicalVariants": ["BX-21 (TT)"] },
        { "name": "Driger Slash 4-80P (Starter) (HB)", "image": getPartImage("4-80-BX-00-DrigerSlash", "ratchets/4-80/drigerslash.webp", "ratchet"), "identicalVariants": ["BX-00 (DrigerSlash) (TT)"] },
        { "name": "Iron Man 4-80B (Dual Pack) (HB)", "image": getPartImage("4-80-BXG-29-Iron-Man", "ratchets/4-80/ironman.webp", "ratchet"), "identicalVariants": ["BXG-29 (Iron Man) (TT)"] },
        { "name": "Luke Skywalker 4-80B (Dual Pack) (HB)", "image": getPartImage("4-80-BXG-33-Luke-Skywalker", "ratchets/4-80/lukeskywalker.webp", "ratchet"), "identicalVariants": ["BXG-33 (Luke Skywalker) (TT)"] },
        { "name": "Megatron 4-80B (Dual Pack) (HB)", "image": getPartImage("4-80-BXG-36-Megatron", "ratchets/4-80/megatron.webp", "ratchet"), "identicalVariants": ["BXG-36 (Megatron) (TT)"] },
        { "name": "Steel Samurai 4-80T (Booster) (HB)", "image": getPartImage("4-80-Steel-Samurai", "ratchets/4-80/steelsamurai4-80t.webp", "ratchet") },
        { "name": "Knife Shinobi 4-80HN (Dual Pack) (HB)", "image": getPartImage("4-80-Knife-Shinobi", "ratchets/4-80/knifeshinobi4-80hn.webp", "ratchet") },
        { "name": "Chewbacca 4-80LF (Dual Pack) (HB)", "image": getPartImage("4-80-Chewbacca", "ratchets/4-80/chewbacca.webp", "ratchet") },
        { "name": "UX-18-6 (TT)", "image": getPartImage("4-80-UX-18-6", "ratchets/4-80/ux-18-6.webp", "ratchet") },
        { "name": "BBLD (KnightLance Metal Coat: Green) (TT)", "image": getPartImage("4-80-BBLD_Green", "ratchets/4-80/bbld_green.webp", "ratchet") }
      ]
    },
    {
      "id": "5-60",
      "name": "5-60",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["5", "x-60"],
      "weight": 6.58,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("5-60-BX-15", "ratchets/5-60/bx-15.webp", "ratchet"),
      "variants": [
        { "name": "BX-15 (TT)", "image": getPartImage("5-60-BX-15", "ratchets/5-60/bx-15.webp", "ratchet"), "identicalVariants": ["Claw Leon 5-60P (Starter)"] },
        { "name": "BX-21 (TT)", "image": getPartImage("5-60-BX-21", "ratchets/5-60/bx-21.webp", "ratchet"), "identicalVariants": ["Chain Incendio 5-60 HT (Dual Pack)"] },
        { "name": "BX-24-4 (TT)", "image": getPartImage("5-60-BX-24-4", "ratchets/5-60/bx-24-4.webp", "ratchet") },
        { "name": "BX-26 (TT)", "image": getPartImage("5-60-BX-26", "ratchets/5-60/bx-26.webp", "ratchet"), "identicalVariants": ["Sting Unicorn 5-60GP (Booster)"] },
        { "name": "BX-27-3 (TT)", "image": getPartImage("5-60-BX-27-3", "ratchets/5-60/bx-27-3.webp", "ratchet") },
        { "name": "BX-37 (TT)", "image": getPartImage("5-60-BX-37", "ratchets/5-60/bx-37.webp", "ratchet") },
        { "name": "CX-11 (TT)", "image": getPartImage("5-60-CX-11", "ratchets/5-60/cx-11.webp", "ratchet") },
        { "name": "BX-00 B4 Exclusive (SharkEdge Metal Coat Blue) (TT)", "image": getPartImage("5-60-BX-00-B4-Exclusive-SharkEdge-Metal-Coat-Blue", "ratchets/5-60/b4sharkedge.webp", "ratchet") },
        { "name": "BX-00 (Rare Bey Get, HellsChain Metal Coat Black) (TT)", "image": getPartImage("5-60-BX-00-Rare-Bey-Get-HellsChain-Metal-Coat-Black", "ratchets/5-60/hellschainblack.webp", "ratchet") },
        { "name": "BX-00 (Rare Bey Get, LeonClaw Metal Coat Gold) (TT)", "image": getPartImage("5-60-BX-00-Rare-Bey-Get-LeonClaw-Metal-Coat-Gold", "ratchets/5-60/leonclawgold.webp", "ratchet") },
        { "name": "Claw Leon 5-60P (Starter) (HB)", "image": getPartImage("5-60-BX-15", "ratchets/5-60/leonclaw5-60p.webp", "ratchet"), "identicalVariants": ["BX-15 (TT)"] },
        { "name": "Chain Incendio 5-60HT (Dual Pack) (HB)", "image": getPartImage("5-60-BX-21", "ratchets/5-60/chainincendio5-60ht.webp", "ratchet"), "identicalVariants": ["BX-21 (TT)"] },
        { "name": "Sting Unicorn 5-60GP (Booster) (HB)", "image": getPartImage("5-60-BX-26", "ratchets/5-60/stingunicorn4-60gp.webp", "ratchet"), "identicalVariants": ["BX-26 (TT)"] },
        { "name": "X-Treme Battlers Pack (HB)", "image": getPartImage("5-60-XBP", "ratchets/5-60/xbp.webp", "ratchet") },
        { "name": "BBLD (UnicornSting Metal Coat: Pink) (TT)", "image": getPartImage("5-60-BBLD-Pink", "ratchets/5-60/bbld_pink.webp", "ratchet") },
        { "name": "UX-00 (SamuraiSaber Metal Coat: Samurai Blue JFA Ver.) (TT)", "image": getPartImage("5-60-UX-00-SamuraiSaber-Metal-Coat-Samurai-Blue-JFA-Ver.", "ratchets/5-60/samuraisaber_jfa.webp", "ratchet"), "comingSoon": true}
      ]
    },
    {
      "id": "5-70",
      "name": "5-70",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["5", "x-70"],
      "weight": 6.72,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("5-70-UX-03", "ratchets/5-70/ux-03.webp", "ratchet"),
      "variants": [
        { "name": "UX-03 (TT)", "image": getPartImage("5-70-UX-03", "ratchets/5-70/ux-03.webp", "ratchet"), "identicalVariants": ["Wand Wizard 5-70DB (Starter)"] },
        { "name": "UX-04 (TT)", "image": getPartImage("5-70-UX-04", "ratchets/5-70/ux-04.webp", "ratchet") },
        { "name": "BX-35-6 (TT)", "image": getPartImage("5-70-BX-35-6", "ratchets/5-70/bx-35-6.webp", "ratchet") },
        { "name": "BX-39-2 (TT)", "image": getPartImage("5-70-BX-39-2", "ratchets/5-70/bx-39-2.webp", "ratchet") },
        { "name": "CX-09 (TT)", "image": getPartImage("5-70-CX-09", "ratchets/5-70/cx-09.webp", "ratchet") },
        { "name": "Corocoro (SamuraiSteel) (TT)", "image": getPartImage("5-70-Corocoro-SamuraiSteel", "ratchets/5-70/samuraisteel.webp", "ratchet") },
        { "name": "G3 1st Prize (WizardRod Metal Coat Gold) (TT)", "image": getPartImage("5-70-G3-1st-Prize-WizardRod-Metal-Coat-Gold", "ratchets/5-70/g3.webp", "ratchet"),"displayedName": "G3 3rd Prize (WizardRod Metal Coat Gold) (TT)" },
        { "name": "Wand Wizard 5-70DB (Starter) (HB)", "image": getPartImage("5-70-UX-03", "ratchets/5-70/wandwizard5-70db.webp", "ratchet"), "identicalVariants": ["UX-03 (TT)"] },
        { "name": "Buster Dran 5-70DB (Starter) (HB)", "image": getPartImage("5-70-Buster-Dran", "ratchets/5-70/busterdran5-70db.webp", "ratchet") },
        { "name": "Stormtrooper 5-70B (Dual Pack) (HB)", "image": getPartImage("5-70-Stormtrooper", "ratchets/5-70/stormtrooper.webp", "ratchet") },
        { "name": "Shelter Drake 5-70O (Booster) (HB)", "image": getPartImage("5-70-BX-39-2", "ratchets/5-70/shelterdrake5-70o.webp", "ratchet") },
      ]
    },
    {
      "id": "5-80",
      "name": "5-80",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["5", "x-80"],
      "weight": 7.27,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("5-80-BX-16-1", "ratchets/5-80/bx-16-1.webp", "ratchet"),
      "variants": [
        { "name": "BX-16-1 (TT)", "image": getPartImage("5-80-BX-16-1", "ratchets/5-80/bx-16-1.webp", "ratchet"), "identicalVariants": ["Tail Viper 5-80O (Dual Pack)"] },
        { "name": "BX-20 (TT)", "image": getPartImage("5-80-BX-20", "ratchets/5-80/bx-20.webp", "ratchet"), "identicalVariants": ["Helm Knight 5-80T (Dual Pack)"] },
        { "name": "BX-24-1 (TT)", "image": getPartImage("5-80-BX-24-1", "ratchets/5-80/bx-24-1.webp", "ratchet"), "identicalVariants": ["Gale Wyvern 5-80GB (Dual Pack)"] },
        { "name": "BX-31-6 (TT)", "image": getPartImage("5-80-BX-31-6", "ratchets/5-80/bx-31-6.webp", "ratchet") },
        { "name": "BX-35-5 (TT)", "image": getPartImage("5-80-BX-35-3", "ratchets/5-80/bx-35-5.webp", "ratchet"), "identicalVariants": ["Soar Phoenix 5-80H (Booster)"] },
        { "name": "BX-36-1 (TT)", "image": getPartImage("5-80-BX-36-1", "ratchets/5-80/bx-36-1.webp", "ratchet"), "identicalVariants": ["Tide Whale 5-80E (Booster)"] },
        { "name": "CX-08-1 (TT)", "image": getPartImage("5-80-CX-08-1", "ratchets/5-80/cx-08-1.webp", "ratchet") },
        { "name": "CX-08-4 (TT)", "image": getPartImage("5-80-CX-08-4", "ratchets/5-80/cx-08-4.webp", "ratchet") },
        { "name": "Tail Viper 5-80O (Dual Pack) (HB)", "image": getPartImage("5-80-BX-16-1", "ratchets/5-80/tailviper5-80o.webp", "ratchet"), "identicalVariants": ["BX-16-1 (TT)"] },
        { "name": "Helm Knight 5-80T (Dual Pack) (HB)", "image": getPartImage("5-80-BX-20", "ratchets/5-80/bx-20.webp", "ratchet"), "identicalVariants": ["BX-20 (TT)"] },
        { "name": "Gale Wyvern 5-80GB (Dual Pack) (HB)", "image": getPartImage("5-80-BX-24-1", "ratchets/5-80/galewyvern5-80gb.webp", "ratchet"), "identicalVariants": ["BX-24-1 (TT)"] },
        { "name": "Soar Phoenix 5-80H (Booster) (HB)", "image": getPartImage("5-80-BX-35-3", "ratchets/5-80/soarphoenix5-80h.webp", "ratchet"), "identicalVariants": ["BX-53-3 (TT)"] },
        { "name": "Tide Whale 5-80E (Booster) (HB)", "image": getPartImage("5-80-BX-36-1", "ratchets/5-80/tidewhale5-80e.webp", "ratchet"), "identicalVariants": ["BX-36-1 (TT)"] },
        { "name": "Shockwave 5-80O (Dual Pack) (HB)", "image": getPartImage("5-80-Shockwave", "ratchets/5-80/shockwave.webp", "ratchet") },
        { "name": "Flame Cerberus W 5-80WB (Starter) (HB)", "image": getPartImage("5-80-CX-08-1", "ratchets/5-80/flamecerberusw5-80wb.webp", "ratchet") },
        { "name": "BBLD (WyvernGale Metal Coat: Orange) (TT)", "image": getPartImage("5-80-BBLD-Orange", "ratchets/5-80/bbld_orange.webp", "ratchet") },
      ]
    },
    {
      "id": "M-85",
      "name": "M-85",
      "category": "Ratchet",
      "type": "Simple",
      "attributes": ["5", "x-85"],
      "weight": 10.7,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("M-85-BX-44", "ratchets/m-85/bx-44.webp", "ratchet"),
      "variants": [
        { "name": "BX-44 (TT)", "image": getPartImage("M-85-BX-44", "ratchets/m-85/bx-44.webp", "ratchet") },
        { "name": "CX-11 (TT)", "image": getPartImage("M-85-CX-11", "ratchets/m-85/cx-11.webp", "ratchet") },
        { "name": "X-Treme Battlers Pack (HB)", "image": getPartImage("M-85-XBP", "ratchets/m-85/xbp.webp", "ratchet") }
      ]
    },
    {
      "id": "6-60",
      "name": "6-60",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["6", "x-60"],
      "weight": 6.16,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("6-60-CX-01", "ratchets/6-60/cx-01.webp", "ratchet"),
      "variants": [
        { "name": "CX-01 (TT)", "image": getPartImage("6-60-CX-01", "ratchets/6-60/cx-01.webp", "ratchet"), "identicalVariants": ["Courage Dran S 6-60V (Starter)"] },
        { "name": "CX-04 (TT)", "image": getPartImage("6-60-CX-04", "ratchets/6-60/cx-04.webp", "ratchet") },
        { "name": "Courage Dran S 6-60V (Starter) (HB)", "image": getPartImage("6-60-CX-01", "ratchets/6-60/couragedrans6-60v.webp", "ratchet"), "identicalVariants": ["CX-01 (TT)"] },
        { "name": "G1 1st Prize (DranBrave Metal Coat: Gold) (TT)", "image": getPartImage("6-60-TT-G1-1st", "ratchets/6-60/gold.webp", "ratchet") },
        { "name": "G1 2nd Prize (DranBrave Metal Coat: Silver) (TT)", "image": getPartImage("6-60-TT-G1-2nd", "ratchets/6-60/silver.webp", "ratchet") },
        { "name": "G1 3rd Prize (DranBrave Metal Coat: Bronze) (TT)", "image": getPartImage("6-60-TT-G1-3rd", "ratchets/6-60/bronze.webp", "ratchet") },
        { "name": "Corocoro Mail Order (OrochiCluster) (TT)", "image": getPartImage("6-60-OrochiCluster", "ratchets/6-60/orochicluster.webp", "ratchet") }
      ]
    },
    {
      "id": "6-70",
      "name": "6-70",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["6", "x-70"],
      "weight": 6.36,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("6-70-BX-45", "ratchets/6-70/bx-45.webp", "ratchet"),
      "variants": [
        { "name": "BX-45 (TT)", "image": getPartImage("6-70-BX-45", "ratchets/6-70/bx-45.webp", "ratchet") },
        { "name": "Calibur Samurai 6-70M (Dual Pack) (HB)", "image": getPartImage("6-70-BX-45", "ratchets/6-70/calibursamurai6-70m.webp", "ratchet") }
      ]
    },
    {
      "id": "6-80",
      "name": "6-80",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["6", "x-80"],
      "weight": 6.9,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("6-80-CX-03", "ratchets/6-80/cx-03.webp", "ratchet"),
      "variants": [
        { "name": "CX-03 (TT)", "image": getPartImage("6-80-CX-03", "ratchets/6-80/cx-03.webp", "ratchet"), "identicalVariants": ["Dark Perseus B 6-80W (Starter)"] },
        { "name": "CX-04 (TT)", "image": getPartImage("6-80-CX-04", "ratchets/6-80/cx-04.webp", "ratchet") },
        { "name": "BX-00 (Rock Leone) (TT)", "image": getPartImage("6-80-BX-00-Rock-Leone", "ratchets/6-80/rockleone.webp", "ratchet") },
        { "name": "G3 3rd Prize (PerseusDark Metal Coat Gold) (TT)", "image": getPartImage("6-80-G3-3rd-Prize-PerseusDark-Metal-Coat-Gold", "ratchets/6-80/g3.webp", "ratchet") },
        { "name": "Dark Perseus B 6-80W (Starter) (HB)", "image": getPartImage("6-80-CX-03", "ratchets/6-80/darkperseusw6-80w.webp", "ratchet"), "identicalVariants": ["CX-03 (TT)"] }
      ]
    },
    {
      "id": "7-55",
      "name": "7-55",
      "category": "Ratchet",
      "type": "Simple",
      "attributes": ["7", "x-55"],
      "weight": 5.26,
      "company": "Takara Tomy",
      "image": getPartImage("7-55-UX-18-1", "ratchets/7-55/ux-18-1.webp", "ratchet"),
      "variants": [
        { "name": "UX-18-1 (TT) (Default)", "image": getPartImage("7-55-UX-18-1", "ratchets/7-55/ux-18-1.webp", "ratchet"),"displayedName": "UX-18-1 (TT)" },
        { "name": "UX-18-5 (TT)", "image": getPartImage("7-55-UX-18-5", "ratchets/7-55/ux-18-5.webp", "ratchet") }

      ]

    },
    {
      "id": "7-60",
      "name": "7-60",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["7", "x-60"],
      "weight": 7.06,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("7-60-UX-06", "ratchets/7-60/ux-06.webp", "ratchet"),
      "variants": [
        { "name": "UX-06 (TT)", "image": getPartImage("7-60-UX-06", "ratchets/7-60/ux-06.webp", "ratchet"), "identicalVariants": ["Crest Leon 7-60GN (Dual Pack)"] },
        { "name": "CX-05-6 (TT)", "image": getPartImage("7-60-CX-05-6", "ratchets/7-60/cx-05-6.webp", "ratchet") },
        { "name": "BX-00 (DracielShield) (TT)", "image": getPartImage("7-60-BX-00-DracielShield", "ratchets/7-60/dracienshield.webp", "ratchet") },
        { "name": "Crest Leon 7-60GN (Dual Pack) (HB)", "image": getPartImage("7-60-UX-06", "ratchets/7-60/crestleon7-60gn.webp", "ratchet"), "identicalVariants": ["UX-06 (TT)"] },
        { "name": "Fort Hornet R 7-60T (Starter) (HB)", "image": getPartImage("7-60-Fort-Hornet", "ratchets/7-60/forthornet.webp", "ratchet") },
        { "name": "Draciel Shield 7-60D (Starter) (HB)", "image": getPartImage("7-60-BX-00-DracielShield", "ratchets/7-60/dracienshield.webp", "ratchet") },
        { "name": "BX-48-3 (TT)", "image": getPartImage("7-60-BX-48-3", "ratchets/7-60/bx-48-3.webp", "ratchet") },
      ]
    },
    {
      "id": "7-70",
      "name": "7-70",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["7", "x-70"],
      "weight": 7.25,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("7-70-UX-10", "ratchets/7-70/ux-10.webp", "ratchet"),
      "variants": [
        { "name": "UX-10 (TT)", "image": getPartImage("7-70-UX-10", "ratchets/7-70/ux-10.webp", "ratchet") },
        { "name": "CX-08-5 (TT)", "image": getPartImage("7-70-CX-08-5", "ratchets/7-70/cx-08-5.webp", "ratchet") },
        { "name": "BX-46 (TT)", "image": getPartImage("7-70-BX-46", "ratchets/7-70/bx-46.webp", "ratchet") },
        { "name": "X-treme Expansion Pack (HB)", "image": getPartImage("7-70-XEP-Hasbro", "ratchets/7-70/xep.webp", "ratchet"),"displayedName": "X-Treme Expansion Pack (HB)" }
      ]
    },
    {
      "id": "7-80",
      "name": "7-80",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["7", "x-80"],
      "weight": 7.79,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("7-80-BX-39-1", "ratchets/7-80/bx-39-1.webp", "ratchet"),
      "variants": [
        { "name": "BX-39-1 (TT)", "image": getPartImage("7-80-BX-39-1", "ratchets/7-80/bx-39-1.webp", "ratchet"), "identicalVariants": ["Shelter Drake 7-80GP (Starter)"] },
        { "name": "Shelter Drake 7-80GP (Starter) (HB)", "image": getPartImage("7-80-BX-39-1", "ratchets/7-80/shelterdrake7-80gp.webp", "ratchet"), "identicalVariants": ["BX-39-1 (TT)"] },
        { "name": "CX-17-6 (TT)", "image": getPartImage("7-80-CX-17-6", "ratchets/7-80/cx-17-6.webp", "ratchet",),"comingSoon":true}
      ]
    },
    {
      "id": "8-70",
      "name": "8-70",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["8", "x-70"],
      "weight": 7.73,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("8-70-CX-14", "ratchets/8-70/cx-14.webp", "ratchet"),
      "variants": [
        { "name": "CX-14 (TT)", "image": getPartImage("8-70-CX-14", "ratchets/8-70/cx-14.webp", "ratchet") },
        { "name": "Armor Knight GV 8-70UN (Starter) (HB)", "image": getPartImage("8-70-CX-14", "ratchets/8-70/cx-14.webp", "ratchet"), "comingSoon":true},

      ]
    },
    {
      "id": "9-60",
      "name": "9-60",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["9", "x-60"],
      "weight": 6.14,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("9-60-BX-23", "ratchets/9-60/bx-23.webp", "ratchet"),
      "variants": [
        { "name": "BX-23 (TT)", "image": getPartImage("9-60-BX-23", "ratchets/9-60/bx-23.webp", "ratchet"), "identicalVariants": ["Soar Phoenix 9-60GF (Deluxe Launcher Set)"] },
        { "name": "BX-46 (TT)", "image": getPartImage("9-60-BX-46", "ratchets/9-60/bx-46.webp", "ratchet") },
        { "name": "UX-05-2 (TT)", "image": getPartImage("9-60-UX-05-2", "ratchets/9-60/ux-05-2.webp", "ratchet") },
        { "name": "UX-11 (TT)", "image": getPartImage("9-60-UX-11", "ratchets/9-60/ux-11.webp", "ratchet"), "identical": ["Impact Drake 9-60LR (Drop Attack Battle Set)"] },
        { "name": "UX-00 (Dran Deck Set) (TT)", "image": getPartImage("9-60-UX-00-Dran-Deck-Set", "ratchets/9-60/drandeck.webp", "ratchet") },
        { "name": "BXG-40 (Mosasaurus) (TT)", "image": getPartImage("9-60-BXG-40-Mosasaurus", "ratchets/9-60/mosasaurus.webp", "ratchet"), "identicalVariants": ["Mosasaurus 9-60U (Dual Pack)"] },
        { "name": "B4 Exclusive (PhoenixWing Metal Coat Black) (TT)", "image": getPartImage("9-60-B4-Exclusive-PhoenixWing-Metal-Coat-Black", "/ratchets/9-60/b4blackphoenixwing.webp", "ratchet") },
        { "name": "Soar Phoenix 9-60GF (Deluxe Launcher Set) (HB)", "image": getPartImage("9-60-BX-23", "ratchets/9-60/soarphoenix9-60gf.webp", "ratchet"), "identicalVariants": ["BX-23 (TT)"] },
        { "name": "Impact Drake 9-60LR (Drop Attack Battle Set) (HB)", "image": getPartImage("9-60-UX-11", "ratchets/9-60/impactdrake9-60lr.webp", "ratchet"), "identicalVariants": ["UX-11 (TT)"] },
        { "name": "Mosasaurus 9-60U (Dual Pack) (HB)", "image": getPartImage("9-60-BXG-40-Mosasaurus", "ratchets/9-60/mosasaurus.webp", "ratchet"), "identicalVariants": ["BXG-40 (Mosasaurus)"] },
        { "name": "Roar Tyranno 9-60GF (Booster) (HB)", "image": getPartImage("9-60-Roar-Tyranno", "ratchets/9-60/roartyranno.webp", "ratchet") },
        { "name": "Stun Medusa 9-60GB (Starter) (HB)", "image": getPartImage("9-60-Stun-Medusa", "ratchets/9-60/stunmedusa.webp", "ratchet") },
        { "name": "BX-00 CobaltDragoon Metal Coat: White J.League Ver. (TT)", "image": getPartImage("9-60-BX-00_White_Goon", "ratchets/9-60/jleague.webp", "ratchet") }
      ]
    },
    {
      "id": "9-65",
      "name": "9-65",
      "category": "Ratchet",
      "type": "Simple",
      "attributes": ["9", "x-65"],
      "weight": 4.47,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("9-65-UX-16-1", "ratchets/9-65/ux-16-1.webp", "ratchet"),
      "variants": [
        { "name": "UX-16-1 (TT)", "image": getPartImage("9-65-UX-16-1", "ratchets/9-65/ux-16-1.webp", "ratchet") },
        { "name": "UX-16-2 (TT)", "image": getPartImage("9-65-UX-16-2", "ratchets/9-65/ux-16-2.webp", "ratchet") },
        { "name": "UX-16-3 (TT)", "image": getPartImage("9-65-UX-16-3", "ratchets/9-65/ux-16-3.webp", "ratchet") },
        { "name": "X-treme Expansion Pack (HB)", "image": getPartImage("9-65-XEP-Hasbro", "ratchets/9-65/xep.webp", "ratchet"),"displayedName": "X-Treme Expansion Pack (HB)" },
        { "name": "CX-17-3 (TT)", "image": getPartImage("9-65-CX-17-3", "ratchets/9-65/cx-17-3.webp", "ratchet",),"comingSoon":true}      
      ]
    },
    {
      "id": "9-70",
      "name": "9-70",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["9", "x-70"],
      "weight": 6.3,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("9-70-UX-07", "ratchets/9-70/ux-07.webp", "ratchet"),
      "variants": [
        { "name": "UX-07 (TT)", "image": getPartImage("9-70-UX-07", "ratchets/9-70/ux-07.webp", "ratchet") },
        { "name": "CX-06-1 (TT)", "image": getPartImage("9-70-CX-06-1", "ratchets/9-70/cx-06-1.webp", "ratchet"), "identicalVariants": ["Brush Fox J 9-70GR (Starter)"] },
        { "name": "Brush Fox J 9-70GR (Starter) (HB)", "image": getPartImage("9-70-CX-06-1", "ratchets/9-70/brushfoxj9-70gr.webp", "ratchet"), "identicalVariants": ["CX-06-1 (TT)"] },
        { "name": "Yggdrasil Team Pack (HB)", "image": getPartImage("9-70-UX-07", "ratchets/9-70/ytp.webp", "ratchet") },
        { "name": "UX-18-4 (TT)", "image": getPartImage("9-70-UX-18-4", "ratchets/9-70/ux-18-4.webp", "ratchet") }
      ]
    },
    {
      "id": "9-80",
      "name": "9-80",
      "category": "Ratchet",
      "type": "Normal",
      "attributes": ["9", "x-80"],
      "weight": 6.84,
      "company": "Takara Tomy",
      "alsoShowUnder": ["Hasbro"],
      "image": getPartImage("9-80-BX-27-1", "ratchets/9-80/bx-27-1.webp", "ratchet"),
      "variants": [
        { "name": "BX-27-1 (TT)", "image": getPartImage("9-80-BX-27-1", "ratchets/9-80/bx-27-1.webp", "ratchet"), "identicalVariants": ["Cowl Sphinx 9-80GN (Booster)"] },
        { "name": "BX-31-3 (TT)", "image": getPartImage("9-80-Bx-31-3", "ratchets/9-80/bx-31-3.webp", "ratchet") },
        { "name": "BX-35-2 (TT)", "image": getPartImage("9-80-BX-35-2", "ratchets/9-80/bx-35-2.webp", "ratchet") },
        { "name": "CX-05-4 (TT)", "image": getPartImage("9-80-CX-05-4", "ratchets/9-80/cx-05-4.webp", "ratchet") },
        { "name": "Corocoro (PhoenixWing Metal Coat Blue) (TT)", "image": getPartImage("9-80-Corocoro-PhoenixWing-Metal-Coat-Blue", "ratchets/9-80/corocoronavyphoenixwing.webp", "ratchet") },
        { "name": "Cowl Sphinx 9-80GN (Booster) (HB)", "image": getPartImage("9-80-BX-27-1", "ratchets/9-80/cowlsphinx9-80gn.webp", "ratchet"), "identicalVariants": ["BX-27-1 (TT)"] },
        { "name": "Green Goblin 9-80HT (Dual Pack) (HB)", "image": getPartImage("9-80-Green-Goblin", "ratchets/9-80/greengoblin.webp", "ratchet") },
        { "name": "CX-12 (TT)", "image": getPartImage("9-80-CX-12", "ratchets/9-80/cx-12.webp", "ratchet") },
        { "name": "Ridge Triceratops 9-80GN (Booster) (HB)", "image": getPartImage("9-80-RidgeTriceratops", "ratchets/9-80/ridgetriceratops.webp", "ratchet") },
        { "name": "BX-48-1 (TT)", "image": getPartImage("9-80-BX-48-1", "ratchets/9-80/bx-48-1.webp", "ratchet") },
      ]
    }
  ] as Part[])
];

export const filterOptions = {
  cxCommon: {
    brand: ['Takara Tomy', 'Hasbro'],
    spinDirection: ['Left', 'Right']
  },
  cxLockChip: {
    type: ['Metal']
  },
  cxBlade: {
    type: ['Attack', 'Defense', 'Stamina', 'Balance', 'Mode Change']
  },
  cxOverBlade: {
    type: ['Attack', 'Defense', 'Stamina', 'Balance']
  },
  cxMetalBlade: {
    type: ['Attack', 'Defense', 'Stamina', 'Balance']
  },
  cxAssistBlade: {
    type: ['Attack', 'Defense', 'Stamina', 'Balance'],
    height: ['50', '60', '80']
  },
  blade: {
    brand: ['Takara Tomy', 'Hasbro'],
    series: ['BX', 'UX', 'CX', 'XOver', 'Corocoro', 'Rare Bey Get'] as Series[],
    type: ['Attack', 'Defense', 'Stamina', 'Balance'],
    spinDirection: ['Right', 'Left'],
    '35g+': ['Yes', 'No']
  },
  ratchets: {
    type: ['Simple', 'Normal', 'Fusion'],
    numberOfSides: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    height: ['x-50', 'x-55', 'x-60', 'x-65', 'x-70', 'x-80', 'x-85']
  },
  bits: {
    type: ['Attack', 'Defense', 'Stamina', 'Balance'],
    resistance: ['High', 'Low'],
    xDashGear: ['10-tooth (Rush)', '12-tooth (Normal)', '14-tooth', '16-tooth (Accel)', '18-tooth (Merge)'],
    rubber: ['Yes', 'No']
  },
  launchers: {
    brand: ['Takara Tomy', 'Hasbro'],
    type: ['Entry', 'Winder', 'String', 'Hold', 'Clip & Rip']
  }

};
