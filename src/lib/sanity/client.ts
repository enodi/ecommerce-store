import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "j66ee8q0",
  dataset: "production",
};

const client = createClient(config);

export default client;