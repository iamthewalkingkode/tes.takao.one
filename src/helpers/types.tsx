
export interface Order {
    id: number;
    type: OrderTypes;
    item: Item;
    category: ItemCategory;
    description: string;
    created_at: string;
}

export interface Item {
    id: number;
    name: string;
}

export enum OrderTypes {
    EDF = 'EDF',
    CAO = 'CAO',
    SFO = 'SFO',
}

export interface ItemCategory {
    id: number;
    name: string;
}