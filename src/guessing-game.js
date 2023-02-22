class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.result = Math.round((this.max - this.min) / 2 + this.min);
    }

    lower() {
        this.setRange(this.min, this.result);
    }

    greater() {
        this.setRange(this.result, this.max);
    }
}

module.exports = GuessingGame;
