"use client";

import { useState } from "react";
import type { Member, Scores } from "./data";

function total(a: (number | null)[] | undefined) {
  const vals = (a ?? []).filter((v): v is number => v != null);
  return vals.length ? Math.round(vals.reduce((s, v) => s + v, 0) * 100) / 100 : "–";
}

export default function ScoreTable({ members, scores }: { members: Member[]; scores: Scores }) {
  const thisYear = new Date().getFullYear();
  const [year, setYear] = useState(thisYear);
  const yearScores = scores[year] ?? {};

  return (
    <>
      <div className="scbar">
        <label>
          Жил{" "}
          <select value={year} onChange={(e) => setYear(+e.target.value)}>
            {[thisYear - 1, thisYear, thisYear + 1].map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="tbl">
        <table className="sc">
          <thead>
            <tr>
              <th>Гишүүн</th>
              <th>I улирал</th>
              <th>II улирал</th>
              <th>III улирал</th>
              <th>IV улирал</th>
              <th>Нийт</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m) => {
              const a = yearScores[m.id];
              return (
                <tr key={m.id}>
                  <td>
                    {m.name || <span style={{ color: "var(--muted)" }}>Нэр оруулаагүй</span>}
                    <small>{m.role}</small>
                  </td>
                  {[0, 1, 2, 3].map((q) => (
                    <td key={q}>{a?.[q] ?? "–"}</td>
                  ))}
                  <td className="tot">{total(a)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
