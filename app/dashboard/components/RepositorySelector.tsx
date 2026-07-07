"use client"

import { useState } from "react"
import { repositories } from "./mock"

export default function RepositorySelector() {
  const [selected, setSelected] = useState(repositories[0].name)

  return (
    <div className="flex items-center gap-2">
      <label className="text-xs text-white/40 font-medium uppercase tracking-wider">Repo</label>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="bg-transparent border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer"
      >
        <option value="" disabled className="bg-[#0a0a0a]">Select a repository</option>
        {repositories.map((r) => (
          <option key={r.id} value={r.name} className="bg-[#0a0a0a]">
            {r.name}
          </option>
        ))}
        <option value="all" className="bg-[#0a0a0a]">All repositories</option>
      </select>
    </div>
  )
}
