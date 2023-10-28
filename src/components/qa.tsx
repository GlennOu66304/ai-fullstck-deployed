"use client";

import { useState } from "react";
import {getQaData} from "../app/utils/api";
const Qa = (entries2) => {

  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAskQuestion = async () => {
    // console.log(entries2,question);
    const qaData = await getQaData(entries2, question);
    // console.log(qaData);
    setResponse(qaData.data);
  };

  return (
    <div className="w-full md:w-1/3">
      <div className="bg-blue-500 p-4 rounded-md">
        <input
          type="text"
          placeholder="Ask me anything here"
          className="w-full p-2 rounded-md"
          value={question}
          onChange={handleQuestionChange}
        />
        <button
          className="bg-white text-blue-500 px-4 py-2 rounded-md mt-2"
          onClick={handleAskQuestion}
        >
          Ask
        </button>
      </div>
      <div>{response}</div>
    </div>
  );
};
export default Qa;
