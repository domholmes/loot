var Build = function() {

    this.name = "Crusader";

    this.attacksPerSecond = 1.23;

    this.armour = 14287;

    this.physicalResistance = 740;

    this.meleeDamageReductionPercent = 5;

    this.vitality = 7198;

    this.maxLife = function() {
      return this.vitality * 80; 
    };

    this.lifePerSecond = 1291;

    this.lifeOnHit = 4776;

    this.maxMeter = 130;

    this.primaryAttack = {
        damage: 400000,
        meterCost: 0,
        meterOnHit: 5
    };

    this.secondaryAttack = {
        damage: 1715000,
        meterCost: 25,
        meterOnHit: 0
    };
};
