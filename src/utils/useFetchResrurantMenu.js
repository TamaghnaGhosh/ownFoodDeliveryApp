import { useEffect, useState } from "react";
import { MENU_API, MENU_API_MOBILE } from "./constants";

const useResrurantMenu = (resId) => {
  const [resturantMenu, setResturantMenu] = useState(null);
  const [resturantMenuAllCards, setResturantMenuAllCards] = useState(null);

  useEffect(() => {
    fectMenuPage();
  }, []);

  const fectMenuPage = async () => {
    try {
      const data = await fetch(`${MENU_API}${resId}&catalog_qa=undefined&submitAction=ENTER`);
      const result = await data?.json();
      setResturantMenu(result?.data);
      const selectedMenusOfData = result?.data?.cards?.filter(
        (c) => c?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
      setResturantMenuAllCards(
        selectedMenusOfData?.[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
    } catch (error) {
      debugger;
      console.log(error);
    }
  };
  return { resturantMenu, resturantMenuAllCards };
};

export default useResrurantMenu;
