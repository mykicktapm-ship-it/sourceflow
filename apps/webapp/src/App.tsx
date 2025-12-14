import { identifierSchema } from "shared";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
const sampleIdentifier = identifierSchema.parse("demo-identifier");

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 text-slate-900">
      <div className="rounded-lg bg-white p-8 shadow-sm">
        <p className="text-lg font-semibold">EVILS Webapp placeholder</p>
        <p className="mt-2 text-sm text-slate-600">Phase 0 bootstrap</p>
        <p className="mt-4 text-sm text-slate-600">API base URL: {apiBaseUrl}</p>
        <p className="mt-1 text-xs text-slate-500">Shared identifier example: {sampleIdentifier}</p>
      </div>
    </main>
  );
}

export default App;
