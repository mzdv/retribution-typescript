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

class Armor extends Item {
    slot: string;       // determines the slot for the armor item
                        // head, chest, legs, feet

    constructor(name: string, durability: number, material: string, bonus: number, slot: string) {
        super(name, durability, material, bonus);

        this.slot = slot;
    }
}

class Weapon extends Item {
    damage: number;
    oneHanded: boolean; // if true, the weapon is onehanded, else twohanded

    constructor(name: string, durability: number, material: string, bonus: number, damage: number, oneHanded: boolean) {
        super(name, durability, material, bonus);

        this.damage = damage;
        this.oneHanded = oneHanded;

    }
}

var SwordOfDoom = new Weapon("Sword of Doom", 10, "Steel", 0, 10, true);
var PikeOfPain = new Weapon("Pike of Pain", 5, "Adamantium", 5, 11, false);
var CircletOfHealing = new Armor("Circlet of Healing", 4, "Mithril", 1, "Head");

console.log(SwordOfDoom);
console.log(PikeOfPain);
console.log(CircletOfHealing);