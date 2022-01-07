import { NewRecProps } from "./NewRecProps";

export default async function postData(
  postEndpoint: string,
  info: NewRecProps
): Promise<void> {
  //postType: newRec, comment, studyList

  try {
    // if (postEndpoint )
    const response = await fetch(
      `https://backend-c3c4.herokuapp.com${postEndpoint}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
