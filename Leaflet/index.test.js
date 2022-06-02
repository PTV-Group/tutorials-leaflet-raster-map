import "@testing-library/jest-dom/extend-expect";
import fs from "fs";
import path from "path";

import { JSDOM } from "jsdom";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let container;

describe("Leaflet map", () => {
  beforeEach(() => {
    dom = new JSDOM(html);
    container = dom.window.document.body;
  });

  it("renders leaflet map", () => {
    expect(container.querySelector("#map")).toBeInTheDocument();
  });
});
