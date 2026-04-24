// src/utils/getInitials.js
export function getInitials(name = "") {
    return name
      .trim()
      .split(" ")
      .filter(Boolean)
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  }