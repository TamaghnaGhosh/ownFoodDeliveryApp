import { useDispatch, useSelector } from 'react-redux'
import emptycart from "../../public/images/empty-cart.webp";
import ItemMenuOfcards from './RestrurantItems/ItemMenuOfcards'
import { clearCart } from '../utils/cartSlice';
import { Link } from 'react-router-dom';
import useTostify from '../utils/useTostify';

const Cart = () => {
    // subscribing to the store using a selector
    const cartItems = useSelector((store) => store?.cart?.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
        useTostify({ toastType: 'success', toastName: 'Clear All the Cart' })
    }
    return (
        <>
            <div className='text-center m-4 p-4'>
                <h1 className='text-2xl font-bold'>Cart</h1>
                {cartItems.length !== 0 && <button className="p-1 m-2 bg-slate-400 rounded-lg text-white" onClick={handleClearCart}>Clear Cart</button>}
                <div className='w-full md:w-6/12 m-auto'>
                    {cartItems.length === 0 ?
                        <div className='flex items-center justify-center flex-col'>
                            <img src={emptycart} alt="empty-cart" className='w-72 h-64 object-cover' />
                            <h2 className='font-ProximaNovaSemiBold text-[#535665] mt-6 text-xl'>Your cart is empty</h2>
                            <p className='mt-2 text-[#7e808c] font-ProximaNovaThin text-sm'>You can go to home page to view more restaurants</p>
                            <Link to="/" className='uppercase bg-orange-500 text-white font-ProximaNovaSemiBold mt-4 px-5 py-[11px] cursor-pointer text-[15px]'>see restaurants near you</Link>
                        </div>
                        : <ItemMenuOfcards items={cartItems} />}
                </div>
            </div>
        </>
    )
}

export default Cart;