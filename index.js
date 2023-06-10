import includes from "lodash/includes";

export default function checkAppliactionStatus(input) {
  if (includes(input, "error")) {
    return "Application failed.";
  }

  return "Application running.";
}
