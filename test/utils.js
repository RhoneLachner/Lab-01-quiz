import { countsAsAYes } from '../countsAsAYes.js';

const test = QUnit.test;


test('countsAsAYes should consider a response starting with "Y || y" to be true.', (expect) => {
    
    const yes = 'yesssssssssssssss';
    const expected = true;
    
    const actual = countsAsAYes(yes);

    expect.equal(actual, expected);
});

test('countsAsAYes should take in a no-like and return false', (expect) => {
   
    const no = 'anytihng that is not a yes';
    const expected = false;
    

    const actual = countsAsAYes(no);

    expect.equal(actual, expected);
});
