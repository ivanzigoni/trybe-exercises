const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
    return Math.floor(Math.random() * (dragon.strength - 15) + 15);
}


const warriorDamage = () => {
    return Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);
}

const mageManaDamage = () => {
    return {
        dmg: Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence),
        mana() {mage.mana === 0 ? 'sem mana' : 15}
    }
}

const gameActions = {
    1: 
  };