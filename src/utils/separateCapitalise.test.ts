import separateCapitalise from "./separateCapitalise";

test("separateCapitalise returns the input string with the first letter capitalised", () => {
    expect(separateCapitalise("hello world")).toStrictEqual("Hello World");
    expect(separateCapitalise("hello-world")).toStrictEqual("Hello World");
    expect(separateCapitalise("-world")).toStrictEqual("World");
    expect(separateCapitalise(" hello world")).toStrictEqual("Hello World");
    expect(separateCapitalise(" -world")).toStrictEqual("World");
})