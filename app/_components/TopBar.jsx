import { useRouter } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa6";
import { Space } from "./Space";
import { SearchBar } from "./SearchBar";


export const TopBar = ({ text, search, other, actions, textBtm, full }) => {
    const router = useRouter();

    return <div className="header col" style={{
        paddingBottom: `${full == true ? ".5rem" : "0rem"}`
    }}>


        <div className="col">
            <div className="col">
                <div className="row">
                    <Space p={".5rem"} />

                    <FaArrowLeft className="btn" onClick={() => router.back()} />
                    {search === true && <>
                        <Space p={".5rem"} />
                        <SearchBar className={"top-search"} />
                    </>}
                    <Space p={".5rem"} />

                    <div className="col">
                        {text !== "" && <h1>{text}</h1>}
                        {textBtm !== "" && <>
                            <p>{textBtm}</p>
                            <Space p={".25rem"} />
                        </>}
                    </div>

                </div>
                {other === true && actions}
            </div>
        </div>

    </div>
}