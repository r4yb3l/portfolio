import type { ReactNode } from 'react'

interface CodeWindowProps {
  children: ReactNode
  filename?: string
  note?: string
}

const CodeWindow = ({ children, filename, note }: CodeWindowProps) => (
  <div className="rounded-[11px] bg-black border border-white/10 overflow-hidden">
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
      <span aria-hidden="true" className="w-3 h-3 rounded-full bg-[#ff5f57]" />
      <span aria-hidden="true" className="w-3 h-3 rounded-full bg-[#febc2e]" />
      <span aria-hidden="true" className="w-3 h-3 rounded-full bg-[#28c840]" />
      {filename && <span className="ml-2 font-mono text-xs text-white/60 truncate">{filename}</span>}
    </div>
    <div className="p-4 md:p-5 overflow-x-auto">
      {children}
      {note && <p className="mt-4 type-caption text-white/60">{note}</p>}
    </div>
  </div>
)

export default CodeWindow
