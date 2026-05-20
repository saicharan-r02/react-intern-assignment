export default function InputField({
  label,
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  )
}