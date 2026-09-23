import type { MetadataRoute } from "next";
import { profile } from "@/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name.en} — ${profile.role.en}`,
    short_name: profile.name.en,
    start_url: "/",
    display: "browser",
    background_color: "#f5f4f0",
    theme_color: "#f5f4f0",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
