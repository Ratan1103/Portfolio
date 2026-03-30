"use client";

export default function Moon() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative">

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl"></div>

        {/* Moon */}
        <img
          src="/assets/3d/moon_texture.png"
          alt="Moon"
          style={{
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 0 60px rgba(255,255,255,0.25)",
            animation: "spin 25s linear infinite",
          }}
        />

      </div>
    </div>
  );
}