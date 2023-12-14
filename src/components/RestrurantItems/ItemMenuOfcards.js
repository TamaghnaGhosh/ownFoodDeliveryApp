import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { MENU_API_CDN_IMG } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../utils/cartSlice';
import useTostify from '../../utils/useTostify';

const ItemMenuOfcards = ({ items, filterMenuItemSearchCardProps }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store?.cart?.items);

    const handleAddButton = (product) => {
        if (filterMenuItemSearchCardProps === "filterMenuItemSearchCardProps") {
            const cardPopertyAdd = { 'card': product };
            dispatch(addItem(cardPopertyAdd));
        } else {
            dispatch(addItem(product));
        }
        useTostify({ toastType: 'success', toastName: 'Added to the Cart' })
    }

    const handleRemoveButton = (RmVproduct) => {
        dispatch(removeItem(RmVproduct));
        useTostify({ toastType: 'error', toastName: 'Already added to the Cart' })
    }

    const goToCart = () => {
        navigate('/cart');
    }

    let uniqueItems = (items);

    return (
        <div className={filterMenuItemSearchCardProps === "filterMenuItemSearchCardProps" ? "w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer" : null}>
            {uniqueItems?.map((item, i) => (
                <div
                    data-testid="foodItems"
                    key={item?.card?.info?.id || item?.info?.id}
                    className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>
                    <div className='w-9/12'>
                        <div className='py-2'>
                            <span>{item?.card?.info?.name || item?.info?.name}</span>
                            <span className='font-semibold'> - ₹{(item?.card?.info?.price || item.info?.price) / 100 || (item?.card?.info?.defaultPrice || item.info?.defaultPrice) / 100}</span>
                        </div>
                        <p className='text-xs'>{item?.card?.info?.description || item?.info?.description}</p>
                    </div>
                    <div className='w-3/12 p-4'>
                        <div className='absolute'>
                            {/* <button className='p-2 mx-10 my-16 w-[100px] bg-white text-green-500 rounded-lg  object-cover border border-solid hover:bg-gray-400 hover:text-white hover:shadow-xl'
                                onClick={() => handleAddButton(item)}>
                                Add +
                            </button> */}
                            {(cartItems?.find((cart) => cart?.card?.info?.id === (item?.card?.info?.id || item?.info?.id)) ?
                                (
                                    location.pathname === '/cart' ?
                                        <button className='p-2 mx-10 my-16 w-[100px] bg-red-500 text-white shadow-lg rounded-lg  object-cover border border-solid hover:bg-red-300'
                                            onClick={() => handleRemoveButton((item?.card?.info?.id))}>
                                            Remove -</button> :
                                        <button className='p-2 mx-10 my-16 w-[100px] bg-slate-600 text-white shadow-lg rounded-lg  object-cover border border-solid hover:bg-slate-400'
                                            onClick={() => goToCart()}>Go To Cart</button>
                                ) :
                                <button className='p-2 mx-10 my-16 w-[100px] bg-white text-green-500 shadow-lg rounded-lg  object-cover border border-solid hover:bg-green-200'
                                    onClick={() => handleAddButton(item)}>
                                    Add +</button>
                            )}
                        </div>
                        {
                            (item?.card?.info?.imageId || item?.info?.imageId) ? <img src={`${MENU_API_CDN_IMG}${item?.card?.info?.imageId || item?.info?.imageId}`}
                                className="w-[180] h-24 rounded-md object-cover border border-solid #f1c675" /> :
                                <div className="w-[180] h-24 rounded-md object-cover border border-solid #f1c675 text-center">
                                    No image
                                </div>
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemMenuOfcards