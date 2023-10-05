import { formatNumber } from "../utils/helpers"
import { Space } from "./Space"

export const TrendBar = ({ where, title, posts }) => {
    return <div className="trend col">
        <div className="row">
            <small className="black">Trending in {where}</small>
        </div>
        <b className="b-900 blue">{title}</b>
        <div className="row">
            <p className="b-100">{formatNumber(posts)}</p>
            <Space p={".25rem"} />
            <small className="black"> posts</small>
        </div>
    </div>
}