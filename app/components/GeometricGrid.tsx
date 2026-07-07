export default function GeometricGrid() {
  return (
    <div className="mt-16 grid grid-cols-3 gap-3">
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className={`w-12 h-12 border border-white/10 rounded ${
            i % 2 === 0 ? "bg-white/5" : ""
          }`}
        />
      ))}
    </div>
  )
}
