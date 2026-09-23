import { notFound } from "next/navigation";

// Any unknown path under /en or /ar renders the 404 page inside the site layout.
export default function CatchAll() {
  notFound();
}
