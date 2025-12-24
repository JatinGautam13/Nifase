"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const StockLoader = dynamic(() => import("@/components/Home/StockLoader"), { ssr: false });

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (typeof window !== 'undefined' && window.__hideSplash) window.__hideSplash();
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <StockLoader />}
      <div style={{ filter: loading ? 'blur(2px)' : 'none', pointerEvents: loading ? 'none' : 'auto' }}>
        {children}
      </div>
    </>
  );
}