import { useRouteError, useParams } from "react-router-dom"
const Error = () => {

    const error = useRouteError();
    const errorPage = useParams();

    return (
        <div className="text-center">
            <h1>Oops!!!!</h1>
            <h2>Spmethings went wrong!! </h2>
            <h3>{error?.status || "This" + " " + " " + "(" + errorPage.resId + ")"} : {error?.statusText || 'restrurant is not found'}</h3>
        </div>
    )
}
export default Error;