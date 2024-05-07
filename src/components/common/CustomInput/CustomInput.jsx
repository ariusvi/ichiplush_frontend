import './CustomInput.css'

export const CustomInput = ({ className, type, name, value, placeholder, changeEmit, }) => {
    return (
        <input
            className={className}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={(e) => changeEmit(e)}
        />
    )
}