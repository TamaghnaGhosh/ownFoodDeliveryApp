export default Footer = () => {
  return (
    <div className="flex items-center justify-between shadow-lg border-solid bg-gray-400 mt-4 w-fit md:w-screen" >
      <h1 className="text-zinc-50">{`© Copyright is ${new Date().getFullYear()}`}</h1>
      <div className="nav-items flex items-center text-sl">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-lg text-zinc-50">links</li>
          <li className="px-4 text-lg text-zinc-50">Barrackpore, North 24 pgs </li>
          <li className="px-4 text-lg text-zinc-50">pin - 700122</li>
          <li className="px-4 text-lg text-zinc-50">contact us - 9163299575</li>
        </ul>
      </div>
    </div>
  );
};
