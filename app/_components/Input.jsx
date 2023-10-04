import { Space } from "./Space";

export const Input = ({ icon, type, placeholder, textarea, className, onChange }) => {
    return (
        <div className={`input ${className}`}>
            {icon}
            <Space p={".25rem"} />
            {textarea ? (
                <textarea type={type} placeholder={placeholder} onChange={e => onChange(e.target.value)}></textarea>
            ) : (
                <input type={type} placeholder={placeholder} onChange={e => onChange(e.target.value)} />
            )}
        </div>
    );
};
