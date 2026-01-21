import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Anil Magar - Backend Developer & AI Enthusiast";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#050505",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Grid Background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.3,
          }}
        />

        {/* Corner Accents */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            width: 60,
            height: 60,
            borderTop: "3px solid #FF4500",
            borderLeft: "3px solid #FF4500",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            width: 60,
            height: 60,
            borderBottom: "3px solid #FF4500",
            borderRight: "3px solid #FF4500",
          }}
        />

        {/* Identifier */}
        <div
          style={{
            color: "#FF4500",
            fontSize: 18,
            fontFamily: "monospace",
            letterSpacing: "0.3em",
            marginBottom: 24,
            display: "flex",
          }}
        >
          {"// PORTFOLIO_2026"}
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            color: "white",
            letterSpacing: "-0.02em",
            lineHeight: 0.9,
            marginBottom: 24,
            display: "flex",
          }}
        >
          ANIL
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#e5e5e5",
            marginBottom: 32,
            display: "flex",
          }}
        >
          Builder & AI Enthusiast
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 24,
            color: "#888888",
            maxWidth: 700,
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          Backend Developer | ICT Award 2025 Finalist | Building the future of
          tech in Nepal
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                backgroundColor: "#22c55e",
                borderRadius: "50%",
              }}
            />
            <span
              style={{
                color: "#888888",
                fontSize: 16,
                fontFamily: "monospace",
              }}
            >
              AVAILABLE FOR WORK
            </span>
          </div>
          <div
            style={{
              color: "#FF4500",
              fontSize: 16,
              fontFamily: "monospace",
              display: "flex",
            }}
          >
            anilmagar.dev
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 8,
          }}
        >
          <div
            style={{
              color: "#444444",
              fontSize: 14,
              fontFamily: "monospace",
              display: "flex",
            }}
          >
            LOC: NEPAL
          </div>
          <div
            style={{
              color: "#444444",
              fontSize: 14,
              fontFamily: "monospace",
              display: "flex",
            }}
          >
            PROJECTS: 4+
          </div>
        </div>

        {/* Hazard Line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: 4,
            backgroundColor: "#FF4500",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
