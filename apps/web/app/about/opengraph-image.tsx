import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "About Ranchod Consulting";
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1e3a8a",
          backgroundImage:
            "linear-gradient(to bottom right, #1e3a8a 0%, #374151 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              color: "#fbbf24",
              marginBottom: "30px",
            }}
          >
            About Us
          </div>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              marginBottom: "40px",
              lineHeight: 1.2,
            }}
          >
            Ranchod Consulting
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "#e5e7eb",
              textAlign: "center",
              maxWidth: "900px",
              lineHeight: 1.5,
            }}
          >
            Professional consultants for the SMME business sector, established in
            2003
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "50px",
              padding: "20px 40px",
              backgroundColor: "rgba(251, 191, 36, 0.2)",
              borderRadius: "12px",
            }}
          >
            <p
              style={{
                fontSize: "28px",
                color: "#fbbf24",
                fontWeight: "bold",
              }}
            >
              Excellence • Innovation • Commitment
            </p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
