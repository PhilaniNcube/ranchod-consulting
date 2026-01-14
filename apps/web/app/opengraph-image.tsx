import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Ranchod Consulting - Professional Business Solutions";
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
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            Ranchod Consulting
          </h1>
          <p
            style={{
              fontSize: "36px",
              color: "#fbbf24",
              textAlign: "center",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Professional Business Solutions for SMMEs
          </p>
          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "60px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "10px",
                }}
              >
                🎯
              </div>
              <p
                style={{
                  fontSize: "24px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Strategic
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "10px",
                }}
              >
                💡
              </div>
              <p
                style={{
                  fontSize: "24px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Innovative
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "10px",
                }}
              >
                🤝
              </div>
              <p
                style={{
                  fontSize: "24px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Expert
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
