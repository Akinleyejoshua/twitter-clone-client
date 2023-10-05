import { useRouter } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa6";
import { Space } from "./Space";


export const TopBar = ({ text }) => {
    const router = useRouter();

    return <div className="header row">
        <FaArrowLeft className="btn" onClick={() => router.back()} />
        <Space p={".25rem"} />
        <h1>{text}</h1>
    </div>
}