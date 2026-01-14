import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Contact Ranchod Consulting";
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
              fontSize: "72px",
              marginBottom: "30px",
            }}
          >
            📧
          </div>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              marginBottom: "30px",
              lineHeight: 1.2,
            }}
          >
            Get In Touch
          </h1>
          <p
            style={{
              fontSize: "36px",
              color: "#fbbf24",
              textAlign: "center",
              maxWidth: "900px",
              lineHeight: 1.4,
              marginBottom: "50px",
            }}
          >
            Ready to take your business to the next level?
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                padding: "20px 40px",
                backgroundColor: "rgba(251, 191, 36, 0.2)",
                borderRadius: "12px",
              }}
            >
              <p
                style={{
                  fontSize: "32px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Ranchod Consulting
              </p>
            </div>
            <p
              style={{
                fontSize: "28px",
                color: "#e5e7eb",
                textAlign: "center",
              }}
            >
              Expert team • Professional service • Proven results
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
