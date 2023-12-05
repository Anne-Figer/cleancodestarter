const {Chance} = require("./chance")

describe('Chance...', () => {

    test('the chance of a null event is impossible', () => {
      expect(new Chance(0).isImpossible()).toBe(true)
    });

    test('the chance of a possible event is not impossible', () => {
        expect(new Chance(0.5).isImpossible()).toBe(false)
    });

    test('the chance of a certain event is certain', () => {
        expect(new Chance(1).isCertain()).toBe(true)
    });

    test('the chance of an impossible event is not certain', () => {
        expect(new Chance(0).isCertain()).toBe(false)
    });

    test('the chance of one event is equal to the chance of another if the likelihood is the same', () => {
        expect(new Chance(0.5).isEqual(new Chance(0.5))).toBe(true)
    })

    test('the chance of two events occuring with one of them being impossible is zero', () => {
        expect(new Chance(1).and(new Chance(0)).isEqual(new Chance(0))).toBe(true)
    })

    test('the chance of two events with a the same likelihood is half of that likelihood', () => {
        expect(new Chance(0.5).and(new Chance(0.5)).isEqual(new Chance(0.25))).toBe(true)
        expect(new Chance(0.1).and(new Chance(0.75)).isEqual(new Chance(0.075))).toBe(true)
    })
    


})