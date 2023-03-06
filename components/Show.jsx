export default function Show({ when, fallback, children }) {
  if (when) {
    return children;
  }
  return fallback;
}
