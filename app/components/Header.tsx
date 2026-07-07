import Logo from "./Logo"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
      <Logo />
      <nav className="flex items-center gap-6 text-sm text-white/60">
        <a href="/signup" className="hover:text-white transition-colors">Sign up</a>
        <a href="/login" className="hover:text-white transition-colors">Log in</a>
        <a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a>
      </nav>
    </header>
  )
}
