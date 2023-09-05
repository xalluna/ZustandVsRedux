export type Vendor = {
  name: string;
  inventory: FruitInventory[];
};

export type FruitInventory = {
  name: string;
  quantity: number | undefined;
};
