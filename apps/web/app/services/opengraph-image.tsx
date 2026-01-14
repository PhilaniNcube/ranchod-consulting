import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Our Services - Ranchod Consulting";
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
            padding: "60px",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              color: "#fbbf24",
              marginBottom: "30px",
            }}
          >
            Our Services
          </div>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              marginBottom: "50px",
              lineHeight: 1.2,
            }}
          >
            Comprehensive Consulting Solutions
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
              maxWidth: "1000px",
            }}
          >
            {[
              "Business Strategy",
              "Financial Management",
              "Operations",
              "Marketing",
              "HR Solutions",
              "Technology",
            ].map((service) => (
              <div
                key={service}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "15px 30px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  border: "2px solid #fbbf24",
                }}
              >
                <p
                  style={{
                    fontSize: "24px",
                    color: "white",
                  }}
                >
                  {service}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: "28px",
              color: "#e5e7eb",
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            Tailored solutions for your business growth
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
