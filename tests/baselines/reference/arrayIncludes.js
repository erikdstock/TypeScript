//// [tests/cases/compiler/arrayIncludes.ts] ////

//// [arrayIncludes.ts]
var includes: boolean;
var myArray: Array<string> = ["a", "b"]

type MaybeNull = string | null;
var included = "a" as MaybeNull
var notIncluded = "c" as MaybeNull
var aNull = null as MaybeNull

// Should be OK
includes = myArray.includes(included);
includes = myArray.includes(notIncluded);
includes = myArray.includes(aNull);

// Should be an error because the argument does not extend the array element type
// @ts-expect-error
includes = myArray.includes(123);


//// [arrayIncludes.js]
var includes;
var myArray = ["a", "b"];
var included = "a";
var notIncluded = "c";
var aNull = null;
// Should be OK
includes = myArray.includes(included);
includes = myArray.includes(notIncluded);
includes = myArray.includes(aNull);
// Should be an error because the argument does not extend the array element type
// @ts-expect-error
includes = myArray.includes(123);
