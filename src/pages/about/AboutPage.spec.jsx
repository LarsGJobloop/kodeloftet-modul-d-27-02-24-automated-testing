import { describe, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import { pageSpecification } from "../../../tests/specifications/pageSpecification";
import { AboutPage } from "./AboutPage";

afterEach(cleanup);

describe("AboutPage", () => {
  pageSpecification(AboutPage);
});
