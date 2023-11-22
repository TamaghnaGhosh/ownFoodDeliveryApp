import { useState } from 'react';
import ItemMenuOfcards from './ItemMenuOfcards';
const RestrurantMenuCard = ({ item }) => {
    const [showItems, setShowItems] = useState(false);
    const handleClickOpenAccordion = () => {
        setShowItems(!showItems);
    }
    return (
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer">
                <div className="flex justify-between" onClick={() => handleClickOpenAccordion()}>
                    <span className='font-bold text-lg pl-3'>{item?.title} ({item?.itemCards?.length})</span>
                    <span>{showItems ? "🔽" : "🔼"}</span>

                </div>

                {/* Accordion Body */}
                {showItems && <ItemMenuOfcards items={item?.itemCards} />}
            </div>



        </div>
    )
}

export default RestrurantMenuCard;


{/* <li className='justify-between flex items-start p-1 pb-[35px]'>
                {item?.card?.info?.name} - {" Rs."} {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                {item?.card?.info?.imageId ? <img
                    className="items-logo w-[200px] h-24 rounded-md object-cover border border-solid #f1c675"
                    alt="res-card" width={256}
                    src={`${MENU_API_CDN_IMG}${item?.card?.info?.imageId}`}
                /> : <div className='w-[200px] h-24 rounded-md object-cover border border-solid #f1c675'><h3 className="mr-[6px] pt-[35]"> No Image</h3></div>
            }
</li> */}