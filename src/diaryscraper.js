import { InvokeCommand } from "@aws-sdk/client-lambda";
import { lambdaClient } from "./lambdaClient.js";

// add export keyword back later

export const fetchDiary = async (username) => {
  return new Promise(function (resolve, reject) {
    try {
      const params = {
        FunctionName: "fetchDiaryInfo",
        Payload: JSON.stringify({
          username: username
        })
      }
      lambdaClient.send(new InvokeCommand(params))
        .then((result) => {
          const response = JSON.parse(Buffer.from(result.Payload))
          console.log("fetch diary complete");
          resolve(response.body)
        }
        )
    } catch (err) {
      alert("error occured.");
      console.log("error", err);
      reject()
    }
  });

}
