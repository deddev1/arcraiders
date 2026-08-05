export type GearSlot = "weapon" | "shield" | "gadget" | "utility";

export interface GearItem {
  id: string;
  name: string;
  slot: GearSlot;
  rarity: "common" | "rare" | "epic" | "legendary";
  weight: number;
  power: number;
}

export const CATALOG: GearItem[] = [
  { id: "kettle", name: "Kettle Repeater", slot: "weapon", rarity: "rare", weight: 6, power: 42 },
  { id: "venator", name: "Venator Rifle", slot: "weapon", rarity: "epic", weight: 8, power: 61 },
  { id: "warden", name: "Warden Barrier", slot: "shield", rarity: "epic", weight: 5, power: 48 },
  { id: "bulwark", name: "Bulwark Plating", slot: "shield", rarity: "legendary", weight: 9, power: 70 },
  { id: "pulse", name: "Pulse Decoy", slot: "gadget", rarity: "common", weight: 2, power: 18 },
  { id: "emp", name: "EMP Charge", slot: "gadget", rarity: "rare", weight: 3, power: 33 },
  { id: "medkit", name: "Field Medkit", slot: "utility", rarity: "common", weight: 2, power: 12 },
  { id: "scanner", name: "Recon Scanner", slot: "utility", rarity: "epic", weight: 4, power: 40 },
];

export const WEIGHT_LIMIT = 24;
