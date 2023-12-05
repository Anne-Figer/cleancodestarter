class Chance {

    constructor(likelihood){
        this.likelihood = likelihood;
    }

    getLikelihood() {
        return this.likelihood
    }

    isImpossible() {
        return this.likelihood === 0;
    }

    isCertain() {
        return this.likelihood === 1;
    }

    isEqual(chance) {
        return (chance.getLikelihood() - this.likelihood) < 10e10 ;
    }

    and(chance) {
        let result = new Chance(this.likelihood * chance.getLikelihood());
        console.log(result)
        return result
    }

}

module.exports = {Chance}