export type Widget = {
  id: string;
  hash: string;
  title: string;
  description: string;
  templateUri: string;
  invoking: string;
  invoked: string;
  responseText: string;
  toolInputSchema: ToolInputSchema;
};

export type SessionRecord = {
  server: Server;
  transport: SSEServerTransport;
};