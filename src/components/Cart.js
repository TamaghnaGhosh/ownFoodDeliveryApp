import { useDispatch, useSelector } from 'react-redux'
import ItemMenuOfcards from './RestrurantItems/ItemMenuOfcards'
import { clearCart } from '../utils/cartSlice';


const Cart = () => {
    // subscribing to the store using a selector
    const cartItems = useSelector((store) => store?.cart?.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className='text-center m-4 p-4'>
            <h1 className='text-2xl font-bold'>Cart</h1>
            <button className="p-1 m-2 bg-slate-400 rounded-lg text-white" onClick={handleClearCart}>Clear Cart</button>
            <div className='w-6/12 m-auto'>
                {cartItems.length === 0 ? <h1>Cart is empty. Add items to the cart!</h1> : <ItemMenuOfcards items={cartItems} />}
            </div>
        </div>
    )
}

export default Cart;