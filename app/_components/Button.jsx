import { Loader } from "./Loader"
import { Space } from "./Space"

export const Button = ({ onClick, loading, text, icon, className, loadColor, space }) => {
    return <button className={className} onClick={() => onClick()}>
        {loading ? <Loader color={loadColor} /> : <div className="row justify-center">
            {icon}
            {space === true ? <>
                <Space p={".5rem"} />
                <p>{text}</p>
            </> :
                <p>{text}</p>
            }

        </div>}
    </button>
}