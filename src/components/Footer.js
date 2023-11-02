export default Footer = () => {
  return (
    <div className="footer">
      <h1>{`© Copyright is ${new Date().getFullYear()}`}</h1>
      <div className="nav-items">
        <ul>
          <li>links</li>
          <li>Barrackpore, North 24 pgs </li>
          <li>pin - 700122</li>
          <li>contact us - 9163299575</li>
        </ul>
      </div>
    </div>
  );
};
