import includes from "lodash/includes";

export default function submarine(input) {
  if (includes(input, "error")) {
    return "Application failed";
  }

  return "Application running successfully";
}
