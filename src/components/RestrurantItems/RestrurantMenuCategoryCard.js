import ItemMenuOfcards from './ItemMenuOfcards';
const RestrurantMenuCategoryCard = ({ item, activeIndex, index, onItemClick }) => {

    const showItems = index === activeIndex;
    
    return (
        <div>
            {/* Header */}
            {
                item.itemCards.length > 0 &&
                <div className="w-full md:w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer">
                    <div className="flex justify-between" onClick={() => onItemClick(index)}>
                        <span className='font-bold text-lg pl-3'>{item?.title} ({item?.itemCards?.length})</span>
                        <span>{showItems ? "🔽" : "🔼"}</span>
                    </div>
                    {/* Accordion Body */}
                    {showItems && <ItemMenuOfcards items={item?.itemCards} />}
                </div>
            }
        </div>
    )
}

export default RestrurantMenuCategoryCard;
