export default function Carrusel({ title, data, imgBaseUrl }) {

    return (
        <div className="mt-4">

            {/* Título */}
            <h2 className="text-white">{title}</h2>

            {/* Contenedor horizontal */}
            <div
                className="d-flex flex-nowrap overflow-auto p-3"
                style={{ gap: "1rem" }}
            >
                {data.map((item) => {

                    return (
                        <div
                            className="card bg-dark text-white"
                            style={{ width: "14rem" }}
                            key={item.uid}
                        >

                            {/* Imagen */}
                            <img
                                src={`${imgBaseUrl}/${item.uid}.jpg`}
                                className="card-img-top"
                                alt={item.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src =
                                        "https://res.cloudinary.com/dra2cr3uw/image/upload/v1765366742/IMAGEN_MUY_MUY_LEJANA_NO_DISPONIBLE_TEMPORALMENTE_pj0r6g.png";
                                }}
                            />

                            {/* Contenido */}
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>

                                <button className="btn btn-primary">
                                    Details
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
