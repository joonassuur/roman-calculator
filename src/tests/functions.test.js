import functions from './functions';

//convert Roman numbers to Arabic
test(' Should be "[1000, 100, 40, 4]" ', () => {
    expect(functions.convertToArabic()).toStrictEqual([1000, 100, 40, 4])
});

//Calculate value
test(' Should be "3475" ', () => {
    expect(functions.calculate()).toBe(3475)
});

//Convert calculated value back to Roman numbers
test(' Should be "MMMCDLXXV" ', () => {
    expect(functions.convertToRoman()).toBe("MMMCDLXXV")
});
