export const Msg = ({ text, type, size }) => {
    return (text !== "" || text !== undefined || text !== null) ? (
        <div style={{fontSize: `${size}`}} className={`msg ${type}`}>{text}</div>
    ): <small></small>
};
