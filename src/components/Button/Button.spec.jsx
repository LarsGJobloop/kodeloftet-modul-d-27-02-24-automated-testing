import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "./Button";
import style from "./Button.module.css";

describe("Button", () => {
  it("should render any children passed in correctly", () => {
    // Arrange
    // Act
    // Assert
  });

  it("should apply correct styling for the info variant", () => {
    // Arrange
    // Act
    // Assert
  });

  it("should apply correct styling for the action variant", () => {
    // Arrange
    // Act
    // Assert
  });

  it("should apply correct styling for the destructive variant", () => {
    // Arrange
    // Act
    // Assert
  });

  it("should render the loading variant when in the loading state", () => {
    // Arrange
    // Act
    // Assert
  });

  it("should NOT call the onClick handler when clicked and is disabled", () => {
    // Arrange
    // Act
    // Assert
  });

  it("should NOT call the onClick handler when clicked and is loading", () => {
    // Arrange
    // Act
    // Assert
  });

  it("should call the onClick handler when clicked and is not loading or disabled", () => {
    // Arrange
    // Act
    // Assert
  });
});
