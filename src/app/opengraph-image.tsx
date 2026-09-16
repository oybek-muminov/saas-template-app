import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} - ${siteConfig.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B0B10",
          color: "#EDECF0",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "rgba(95, 90, 232, 0.2)",
            borderRadius: "999px",
            filter: "blur(48px)",
            height: "280px",
            position: "absolute",
            right: "120px",
            top: "80px",
            width: "280px",
          }}
        />
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "24px",
            position: "relative",
          }}
        >
          <div
            style={{
              alignItems: "center",
              background: "#5F5AE8",
              borderRadius: "20px",
              display: "flex",
              fontSize: "48px",
              fontWeight: 700,
              height: "96px",
              justifyContent: "center",
              width: "96px",
            }}
          >
            A
          </div>
          <div style={{ fontSize: "42px", fontWeight: 600 }}>{siteConfig.name}</div>
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            letterSpacing: "-2px",
            lineHeight: 1.1,
            marginTop: "56px",
            maxWidth: "900px",
            position: "relative",
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            color: "#8D8D98",
            fontSize: "26px",
            lineHeight: 1.4,
            marginTop: "28px",
            maxWidth: "760px",
            position: "relative",
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
