import jsonServerProvider from "ra-data-json-server";

const apiUrl = import.meta.env.VITE_SERVER_URL;

export const dataProvider = jsonServerProvider(
  apiUrl
);
