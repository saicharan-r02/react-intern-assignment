export default function Button({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
}) {
  return (
    <button
      className={variant==='primary' ? 'btn-primary' : 'btn-secondary'}
      onClick={onClick}
      disabled={disabled}>
      
      {label}
    </button>
  )
}
