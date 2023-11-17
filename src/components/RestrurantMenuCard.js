import { MENU_API_CDN_IMG } from '../utils/constants';
const RestrurantMenuCard = ({item}) => {
    return (
        <>
            <li className='li_items'>
                {item?.card?.info?.name} - {" Rs."} {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                {item?.card?.info?.imageId ? <img
                    className="items-logo"
                    alt="res-card" width={256}
                    src={`${MENU_API_CDN_IMG}${item?.card?.info?.imageId}`}
                /> : <div><h3 style={{ marginRight: "65px" }}> No Image</h3></div>}
            </li>
        </>
    )
}

export default RestrurantMenuCard