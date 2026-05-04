import React, { useEffect, useState } from "react";

import Header from "@components/Header";
import Loader from "@components/loader";

import "@styles/setup-pix-gate.scss";

const GATE_STORAGE_KEY = "gabiscaro-setup-pix-gate";
const GATE_PASSWORD =
  (typeof process !== "undefined" &&
    process.env.GATSBY_SETUP_PIX_GATE_PASSWORD) ||
  "953278";

const SetupPixGate = ({ children }) => {
  const [isOpened, setIsOpened] = useState(true);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      if (sessionStorage.getItem(GATE_STORAGE_KEY) === "1") {
        setUnlocked(true);
      }
    } catch (_) {
      // sessionStorage unavailable
    }
  }, []);

  useEffect(() => {
    if (!unlocked) return;
    const t = setTimeout(() => {
      setIsOpened(false);
    }, 3000);
    return () => clearTimeout(t);
  }, [unlocked]);

  return (
    <div className="scroll-content">
      {!unlocked ? (
        <>
          <Header />
          <main className="setup-pix-gate">
            <form
              className="setup-pix-gate__form"
              onSubmit={(e) => {
                e.preventDefault();
                setError("");
                if (password === GATE_PASSWORD) {
                  try {
                    sessionStorage.setItem(GATE_STORAGE_KEY, "1");
                  } catch (_) {}
                  setUnlocked(true);
                } else {
                  setError("Incorrect password.");
                }
              }}
            >
              <p className="setup-pix-gate__title">
                This case study is password protected.
              </p>
              <input
                className="setup-pix-gate__field"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="setup-pix-gate__submit" type="submit">
                View case
              </button>
              {error ? <p className="setup-pix-gate__error">{error}</p> : null}
            </form>
          </main>
        </>
      ) : (
        <>
          <Loader isOpened={isOpened} />
          <Header />
          {children}
        </>
      )}
    </div>
  );
};

export default SetupPixGate;
