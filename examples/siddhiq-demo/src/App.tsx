import { useState } from "react";
import { consent } from "./siddhiq/agent";
import profile from "./siddhiq/profile.json";

export default function App() {
  const [status, setStatus] = useState("consent not given");
  const grant = () => {
    try {
      consent({ store: true, share: true });
      setStatus(`ok — ${profile.name}: ${profile.mission}`);
    } catch (e: any) {
      setStatus(`blocked: ${e.message}`);
    }
  };
  const deny = () => {
    try {
      consent({ store: false, share: true });
    } catch (e: any) {
      setStatus(`blocked: ${e.message}`);
    }
  };
  return (
    <div style={{ padding: 24 }}>
      <h1>SiddhiQ Quickstart</h1>
      <p>Status: {status}</p>
      <button onClick={grant}>Grant consent</button>
      <button onClick={deny} style={{ marginLeft: 12 }}>
        Deny consent
      </button>
    </div>
  );
}
