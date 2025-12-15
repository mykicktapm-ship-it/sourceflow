import { useEffect, useState } from "react";
import { healthHttpContract, type HealthResponse } from "shared";

import { fetchContract } from "./lib/api";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

type HealthStatus =
  | { status: "loading" }
  | { status: "ok"; data: HealthResponse }
  | { status: "error"; message: string };

function App() {
  const [health, setHealth] = useState<HealthStatus>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    const fetchHealth = async () => {
      try {
        const data = await fetchContract(apiBaseUrl, healthHttpContract);

        if (!cancelled) {
          setHealth({ status: "ok", data });
        }
      } catch (error) {
        if (!cancelled) {
          const message = error instanceof Error ? error.message : "Unknown error";
          setHealth({ status: "error", message });
        }
      }
    };

    fetchHealth();

    return () => {
      cancelled = true;
    };
  }, []);

  const renderStatus = () => {
    switch (health.status) {
      case "loading":
        return <p className="text-sm text-slate-600">Checking API health…</p>;
      case "ok":
        return (
          <div className="text-sm text-slate-700">
            <p className="font-semibold text-green-700">API is healthy</p>
            <p className="mt-1 text-xs text-slate-500">Status: {health.data.status}</p>
            <p className="text-xs text-slate-500">Timestamp: {health.data.timestamp}</p>
          </div>
        );
      case "error":
        return (
          <div className="text-sm text-red-700">
            <p className="font-semibold">Health check failed</p>
            <p className="text-xs text-red-600">{health.message}</p>
          </div>
        );
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 text-slate-900">
      <div className="rounded-lg bg-white p-8 shadow-sm">
        <p className="text-lg font-semibold">EVILS Webapp placeholder</p>
        <p className="mt-2 text-sm text-slate-600">Phase 3 shared integration</p>
        <p className="mt-4 text-sm text-slate-600">API base URL: {apiBaseUrl}</p>
        <div className="mt-4 rounded border border-slate-200 bg-slate-50 p-3">
          {renderStatus()}
        </div>
      </div>
    </main>
  );
}

export default App;
