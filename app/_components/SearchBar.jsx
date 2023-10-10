import { AiOutlineSearch } from "react-icons/ai"

export const SearchBar = ({ className }) => {
    return <div className={`${className} row`}>
        <AiOutlineSearch className="btn" fontSize={40}/>
        <div className="space"></div>
        <input type="text" placeholder="Search" />
    </div>
}