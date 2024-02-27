import { describe, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import { pageSpecification } from "../../tests/specifications/pageSpecification";
import { LandingPage } from "./LandingPage";

afterEach(cleanup);

describe("LandingPage", () => {
  pageSpecification(LandingPage);
});
