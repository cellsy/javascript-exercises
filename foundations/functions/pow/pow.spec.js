const pow = require('./pow')

describe('pow', () => { 
    test ('3 ^ 2 == 9', () => {
        expect(pow(3,2)).toEqual(9)
    });
});

    