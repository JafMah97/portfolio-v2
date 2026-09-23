import { ImageResponse } from "next/og";
import { locales, profile, site } from "@/content";

// Rendered once at build time. The card is in English for both languages:
// the built-in OG renderer has no Arabic font or right-to-left shaping.
export const alt = `${profile.name.en} — ${profile.role.en}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default function OpengraphImage() {
  const domain = new URL(site.url).host;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f5f4f0",
          color: "#171716",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#6c6b66" }}>{domain}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, letterSpacing: -3, lineHeight: 1 }}>{profile.name.en}</div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 28, fontSize: 40, color: "#6c6b66" }}>
            <div style={{ width: 14, height: 14, borderRadius: 7, background: "#b1451b", marginRight: 20 }} />
            {profile.role.en}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
