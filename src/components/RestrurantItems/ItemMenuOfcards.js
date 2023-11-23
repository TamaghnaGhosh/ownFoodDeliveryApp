import React from 'react'
import { MENU_API_CDN_IMG } from '../../utils/constants'

const ItemMenuOfcards = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item?.card?.info?.id}
                    className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>

                    <div className='w-9/12'>
                        <div className='py-2'>
                            <span>{item?.card?.info?.name}</span>
                            <span> - ₹{item?.card?.info?.price / 100 ?? item?.card?.info?.defaultPrice / 100}</span>
                        </div>

                        <p className='text-xs'>{item?.card?.info?.description}</p>
                    </div>
                    <div className='w-3/12 p-4'>
                        <div className='absolute'>
                            <button className='p-2 mx-10 my-16 w-[100px] bg-white text-green-500 shadow-lg rounded-lg  object-cover border border-solid'>Add +</button>
                        </div>
                        <img src={`${MENU_API_CDN_IMG}${item?.card?.info?.imageId}`} className="w-[180] h-24 rounded-md object-cover border border-solid #f1c675" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemMenuOfcards