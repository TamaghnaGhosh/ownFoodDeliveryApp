export default Shimmer = ({ name }) => {
  return (
    <div className="flex flex-wrap justify-start p-1 m-4">
      <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md mt-[100px]"></div>
      <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md mt-[100px]"></div>
      <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md mt-[100px]"></div>
      <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md mt-[100px]"></div>
      <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md mt-[100px]"></div>

      <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md mt-[100px]"></div>
      <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md mt-[100px]"></div>
      <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md mt-[100px]"></div>
      {name !== "allTheMenusOfIndexFiveUndefined" ? <>
        <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md"></div>
        <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md"></div>

        <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md"></div>
        <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md"></div>
        <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md"></div>
        <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md"></div>
        <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md"></div>

        <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md"></div>
        <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md"></div>
        <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md"></div>
        <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md"></div>
        <div className="bg-gray-100 w-[220px] h-[350px] m-1 p-4 rounded-md"></div>
      </> : <h1 className="m-auto">No data Found</h1>}
    </div>
  );
};
