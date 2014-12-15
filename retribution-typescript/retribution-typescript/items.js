var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Item = (function () {
    function Item(name, durability, material, bonus) {
        this.name = name;
        this.durability = durability;
        this.material = material;
        this.bonus = bonus;
    }
    return Item;
})();
var Armor = (function (_super) {
    __extends(Armor, _super);
    // head, chest, legs, feet
    function Armor(name, durability, material, bonus, slot) {
        _super.call(this, name, durability, material, bonus);
        this.slot = slot;
    }
    return Armor;
})(Item);
exports.Armor = Armor;
var Weapon = (function (_super) {
    __extends(Weapon, _super);
    function Weapon(name, durability, material, bonus, damage, oneHanded) {
        _super.call(this, name, durability, material, bonus);
        this.damage = damage;
        this.oneHanded = oneHanded;
    }
    return Weapon;
})(Item);
exports.Weapon = Weapon;
//# sourceMappingURL=items.js.map