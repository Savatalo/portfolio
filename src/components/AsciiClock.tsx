// src/components/AsciiClock.tsx
import { useState, useEffect, useMemo } from 'react';
import "./AsciiClock.css";

const DIGITS: Record<string, string[]> = {
  "0": [" ███ ", "█   █", "█  ██", "█ █ █", "██  █", "█   █", " ███ "],
  "1": ["  █  ", " ██  ", "  █  ", "  █  ", "  █  ", "  █  ", " ███ "],
  "2": [" ███ ", "█   █", "    █", "   █ ", "  █  ", " █   ", "█████"],
  "3": [" ███ ", "█   █", "    █", " ███ ", "    █", "█   █", " ███ "],
  "4": ["   █ ", "  ██ ", " █ █ ", "█  █ ", "█████", "   █ ", "   █ "],
  "5": ["█████", "█    ", "█    ", "████ ", "    █", "█   █", " ███ "],
  "6": [" ███ ", "█   █", "█    ", "████ ", "█   █", "█   █", " ███ "],
  "7": ["█████", "    █", "   █ ", "  █  ", " █   ", " █   ", " █   "],
  "8": [" ███ ", "█   █", "█   █", " ███ ", "█   █", "█   █", " ███ "],
  "9": [" ███ ", "█   █", "█   █", " ████", "    █", "█   █", " ███ "],
  ":": ["     ", "  █  ", "  █  ", "     ", "  █  ", "  █  ", "     "],
  " ": ["     ", "     ", "     ", "     ", "     ", "     ", "     "]
};

function pad2(n: number) {
  return n.toString().padStart(2, "0");
}

export default function AsciiClock() {
  const [timeString, setTimeString] = useState(() => {
    const d = new Date();
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
  });

  const [showColon, setShowColon] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      const d = new Date();
      setTimeString(`${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`);
      setShowColon((prev) => !prev);
    }, 500);
    return () => clearInterval(t);
  }, []);

  const asciiLines = useMemo(() => {
    const text = showColon ? timeString : timeString.replace(/:/g, " ");

    const chars = text.split("");
    const finalRows = Array.from({ length: 7 }, () => [] as string[]);

    chars.forEach((ch) => {
      const lines = DIGITS[ch] || DIGITS[" "];
      lines.forEach((line, i) => finalRows[i].push(line));
      finalRows.forEach((row) => row.push(" "));
    });

    return finalRows.map((row) => row.join(""));
  }, [timeString, showColon]);

  return (
    <div className="ascii-clock-wrap">
      <pre className="ascii-clock">{asciiLines.join("\n")}</pre>

      <div className="ascii-clock-foot">
        <span className="small">Current time: </span>
        <span className="time-string">{timeString}</span>
      </div>
    </div>
  );
}
