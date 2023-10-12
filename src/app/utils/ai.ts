import {OpenAI } from 'langchain/llms/openai'

export const analysis = async (prompt)=>{
    // first use the gpt3 model from the open ai by langchain library
    const model = new OpenAI();
    // get the respnse response form the open ai
    const respnse = await model.call(prompt)
    // log the resule
   console.log(respnse);
}