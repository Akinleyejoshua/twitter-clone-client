export const FollowBar = ({ _id, id, img, name }) => {
    return <div className="trend col" key={_id}>
        <div className="row">
            <img src={img} alt="" className="img" />
            <div className="space"></div>
            <div className="col">
                <p className="b-900">{name}</p>
                <small className="black">{id}</small>
            </div>
            <button className="m-left">Follow</button>

        </div>
    </div>
}