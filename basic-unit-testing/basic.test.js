import { describe, expect, it } from "vitest";
import { add } from "./basic";

// Baisc Math
it("should sum all the number of array", () =>{
    // Follow AAA pattern 
    // Arrange
    const numbers = [1,2,3];
    const expectedResult = numbers.reduce((acc,cur) => (acc += cur),0)
    //Act
    const result = add(numbers);
    //Assertion
    expect(result).toBe(expectedResult)
})

// Described way
describe("add", ()=>{
    it("should throw NaN if at least one invalid number is provided", () =>{
        const numbers = [1, 'Invalid', 2];
        const result = add (numbers);
        expect(result).toBeNaN();
    })

    it('Should give the correct result if an array of numeric string value is provided', () => {
        const numbers = ['1', '2'];
        const expectedResult = numbers.reduce((acc, curr) => +acc + +curr, 0);
     
        // Act
        const result = add(numbers);
     
        // Assertion
        expect(result).toBe(expectedResult);
     });
     
     it('Should return 0 if empty array is provided', () => {
        const numbers = [];
     
        // Act
        const result = add(numbers);
     
        // Assertion
        expect(result).toBe(0);
     });
     
     it('Should throw an error if multiple args is provided', () => {
        // Arrange
        const number1 = 1;
        const number2 = 2;
     
        const resultFunc = () => {
           add(number1, number2);
        };
        expect(resultFunc).toThrow(/is not iterable/);
        // alternate approach could be
        // try{
        //    add(number1, number2);
     
        // }catch(err) {
        //    console.log(err)
     
        //    expect(err).toBeDefined();
        // }
     });

})