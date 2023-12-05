import { Sum } from "../Sum"

test('Sum function ', () => {
    const resULT = Sum(2, 5);

    //Assertion
    expect(resULT).toBe(7);
})