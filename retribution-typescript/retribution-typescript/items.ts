class Item {
    name: string;
    durability: number;
    material: string;
    bonus: number;

    constructor(name: string, durability: number, material: string, bonus: number) {
        this.name = name;
        this.durability = durability;
        this.material = material;
        this.bonus = bonus;

    }
}
    export class Armor extends Item {
        slot: string;       // determines the slot for the armor item
        // head, chest, legs, feet

        constructor(name: string, durability: number, material: string, bonus: number, slot: string) {
            super(name, durability, material, bonus);

            this.slot = slot;
        }
    }

    export class Weapon extends Item {
    damage: number;
    oneHanded: boolean; // if true, the weapon is onehanded, else twohanded

    constructor(name: string, durability: number, material: string, bonus: number, damage: number, oneHanded: boolean) {
        super(name, durability, material, bonus);

        this.damage = damage;
        this.oneHanded = oneHanded;

    }
}