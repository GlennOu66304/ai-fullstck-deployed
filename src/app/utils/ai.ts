import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { z } from "zod";
import {
  OutputFixingParser,
  StructuredOutputParser,
} from "langchain/output_parsers";

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    sentimentScore: z.number().describe("On a scale from 0 to 10, please rate it,0 represents an xtremely negative sentiment,5 represents a **neutral sentiment, and 10 represents the **most positive** sentiment."),
    mood: z
      .string()
      .describe("the mood of the person who wrote the journal entry."),
    subject: z.string().describe("the subject of the journal entry."),
    negative: z
      .boolean()
      .describe(
        "is the journal entry negative? (i.e. does it contain negative emotions?)."
      ),
    summary: z.string().describe("quick summary of the entire entry."),
    color: z
      .string()
      .describe(
        "a hexidecimal color code that represents the mood of the entry. Example #0101fe for blue representing happiness."
      ),
  })
);

const getPrompt = async (content) => {
  const format_instructions = parser.getFormatInstructions();
  const prompt = new PromptTemplate({
    template:
      "Analyze the following journal entry. Follow the intrusctions and format your response to match the format instructions, No Matter What! \n{format_instructions}\n{entry}",
    inputVariables: ["entry"],
    partialVariables: { format_instructions },
  });
  const input = await prompt.format({ entry: content });
  return input;
};

export const analysis2 = async (entry) => {
  const prompt = await getPrompt(entry);
  //  console.log(prompt)
  const model = new OpenAI({ temperature: 0, modelName: "gpt-3.5-turbo" });
  const response = await model.call(prompt);
  //   // log the resule
  // console.log(response);
  try {
    return parser.parse(response);
  } catch (error) {
    // console.log(error)
    const fixParser = OutputFixingParser.fromLLM(
      new OpenAI({ temperature: 0, modelName: "gpt-3.5-turbo" }),
      parser
    );
    const fix = await fixParser.parse(response);
    return fix;
  }
};
