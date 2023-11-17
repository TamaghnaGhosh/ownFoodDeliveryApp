import { useEffect, useState } from 'react'
import { MENU_API } from './constants';

const useResrurantMenu = (resId) => {

    const [resturantMenu, setResturantMenu] = useState(null);
    const [resturantMenuAllCards, setResturantMenuAllCards] = useState(null);

    useEffect(() => {
        fectMenuPage();
    }, [])

    const fectMenuPage = async () => {
        const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const result = await data.json();
        setResturantMenu(result?.data);
        setResturantMenuAllCards(result?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }
    return { resturantMenu, resturantMenuAllCards };
}

export default useResrurantMenu