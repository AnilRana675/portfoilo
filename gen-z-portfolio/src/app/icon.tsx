import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FF4500",
          fontWeight: 900,
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Border */}
        <div
          style={{
            position: "absolute",
            top: 2,
            left: 2,
            right: 2,
            bottom: 2,
            border: "2px solid #FF4500",
          }}
        />
        A
      </div>
    ),
    {
      ...size,
    }
  );
}
