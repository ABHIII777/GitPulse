interface EmptyStateProps {
  icon?: string
  title: string
  description: string
  action?: { label: string; onClick?: () => void }
}

export function EmptyState({ icon = "📭", title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 border border-dashed border-white/10 rounded-lg">
      <span className="text-3xl mb-3">{icon}</span>
      <h3 className="text-sm font-medium text-white/70 mb-1">{title}</h3>
      <p className="text-xs text-white/40 text-center max-w-xs">{description}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="mt-4 px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  )
}
