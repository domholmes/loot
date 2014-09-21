var buildViewModel = function (scope, interval) {

    scope.p1Stats = new Build();

    scope.p2Stats = new Build();

    scope.update = function () {

        scope.p1Life = scope.battle.p1.life;
        scope.p1MaxLife = scope.battle.p1.maxLife;
        scope.p1Meter = scope.battle.p1.meter;
        scope.p1MaxMeter = scope.battle.p1.maxMeter;
        scope.p1Status = scope.battle.p1.status;

        scope.p2Life = scope.battle.p2.life;
        scope.p2MaxLife = scope.battle.p2.maxLife;
        scope.p2Meter = scope.battle.p2.meter;
        scope.p2MaxMeter = scope.battle.p2.maxMeter;
        scope.p2Status = scope.battle.p2.status;

        scope.battleStatus = scope.battle.status;
    };

    scope.intervalLengthInMillis = 16.66;
    scope.battle = new Battle(scope.p1Stats, scope.p2Stats);
    scope.update();
    scope.battle.begin();
    scope.p1Name = scope.battle.p1.name;
    scope.p2Name = scope.battle.p2.name;

    interval(scope.update, scope.intervalLengthInMillis);
}
