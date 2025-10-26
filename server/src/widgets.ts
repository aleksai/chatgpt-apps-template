import { z } from "zod";
import { Widget } from "./types";

const widgets: Widget[] = [
  {
    id: "default",
    hash: "6ad9",
    title: "Default widget",
    description: "Default widget of ChatGPT Apps Template",
    templateUri: "ui://widget/default.html",
    invoking: "Helloworlding...",
    invoked: "Hello World!",
    responseText: "This is default response written after rendered widget.",
    toolInputSchema: {
      type: "object",
      properties: {
        context: {
          type: "string",
          description: "Context of conversation with ChatGPT",
        },
      },
      required: [],
      additionalProperties: false,
    },
    toolInputParser: z.object({
      context: z.string().optional(),
    }),
  },
];

export default widgets;