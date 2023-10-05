import { useRouter } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa6";
import { Space } from "./Space";
import { SearchBar } from "./SearchBar";


export const TopBar = ({ text, search, other, actions }) => {
    const router = useRouter();

    return <div className="header col">
        <div className="row">
            <Space p={".5rem"} />
            <FaArrowLeft className="btn" onClick={() => router.back()} />
            {search === true && <>
                <Space p={".5rem"} />
                <SearchBar className={"top-search"} />
            </>}
            {text !== "" && <h1>{text}</h1>}
        </div>
        {other === true && actions}

    </div>
}