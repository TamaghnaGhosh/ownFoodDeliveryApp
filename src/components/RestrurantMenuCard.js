import { MENU_API_CDN_IMG } from '../utils/constants';
const RestrurantMenuCard = ({item}) => {
    return (
        <>
            <li className='justify-between flex items-start p-1 pb-[35px]'>
                {item?.card?.info?.name} - {" Rs."} {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                {item?.card?.info?.imageId ? <img
                    className="items-logo w-[200px] h-24 rounded-md object-cover border border-solid #f1c675"
                    alt="res-card" width={256}
                    src={`${MENU_API_CDN_IMG}${item?.card?.info?.imageId}`}
                /> : <div><h3 style={{ marginRight: "65px" }}> No Image</h3></div>}
            </li>
        </>
    )
}

export default RestrurantMenuCard