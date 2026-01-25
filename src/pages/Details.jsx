import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Details() {
    const { category, uid } = useParams();
    const navigate = useNavigate();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        async function fetchDetails() {
            try {
                const res = await fetch(`https://www.swapi.tech/api/${category}/${uid}`);
                const data = await res.json();
                setDetails(data.result);
            } catch (error) {
                console.error("Error cargando el detalle:", error);
            }
        }

        fetchDetails();
    }, [category, uid]);

    if (!details) {
        return <h2 className="text-white text-center mt-5">Cargando...</h2>;
    }

    const imageFolder = category === "people" ? "characters" : category;
    const imageUrl = `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/${imageFolder}/${uid}.jpg`;

    return (
        <div className="container text-white mt-5">

            <button
                className="btn btn-outline-warning mb-4"
                onClick={() => navigate(-1)}
            >
                ⬅ Volver
            </button>

            <h1 className="text-center mb-4">{details.properties.name}</h1>

            <div className="row align-items-start">

                <div className="col-md-5">
                    <img
                        src={imageUrl}
                        alt={details.properties.name}
                        className="img-fluid rounded shadow"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                                "https://res.cloudinary.com/dra2cr3uw/image/upload/v1765366742/IMAGEN_MUY_MUY_LEJANA_NO_DISPONIBLE_TEMPORALMENTE_pj0r6g.png";
                        }}
                    />
                </div>

                <div className="col-md-7">
                    <h3>Descripción</h3>
                    <p>{details.description}</p>

                    <h3 className="mt-4">Propiedades</h3>
                    <ul className="list-group list-group-flush bg-transparent">
                        {Object.entries(details.properties).map(([key, value]) => (
                            key !== "name" &&
                            key !== "uid" &&
                            key !== "description" &&
                            (
                                <li
                                    key={key}
                                    className="list-group-item bg-transparent text-white border-secondary"
                                >
                                    <strong>{key}: </strong> {value}
                                </li>
                            )
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}
