import separateCapitalise from "./separateCapitalise";

test("separateCapitalise returns a string, removing the hyphen and capitalising the passed string", () => {
  expect(separateCapitalise("not-recommended")).toBe("Not Recommended");
  expect(separateCapitalise("richard")).toBe("Richard");
  expect(separateCapitalise("ACADEMY-SCHOLARS")).toBe("ACADEMY SCHOLARS");
});
