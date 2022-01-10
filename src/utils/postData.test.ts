import postData from "./postData";

test("posting a new recommendation returns a success status and the correct data", async () => {
  let response = await postData("/rec", {
    title: "Resource on reduce function",
    link: "https://google.com/reduce",
    author: "Nico",
    type: "podcast",
    status: "recommend",
    reason: "just because",
    summary: "dummy summary",
    tags: ["creative-coding"],
    user_id: 1,
  });
  if (response) {
    expect(response.data[0].author).toStrictEqual("Nico");
    expect(response.data[0].status).toStrictEqual("recommend");
    expect(response.status).toStrictEqual("success");
  }
});
