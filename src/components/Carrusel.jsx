import Card from "./Card";

export default function Carrusel({ title, data, imgBaseUrl, favorites, toggleFavorite }) {

    return (
        <div className="mt-4">

            {/* Título */}
            <h2 className="text-white">{title}</h2>

            {/* Contenedor horizontal */}
            <div
                className="d-flex flex-nowrap overflow-auto p-3"
                style={{ gap: "1rem" }}
            >
                {data.map(item => (
                    <Card
                        key={item.uid}
                        item={item}
                        imgUrl={`${imgBaseUrl}/${item.uid}.jpg`}
                        isFavorite={favorites.includes(item.uid)}
                        onFavoriteToggle={() => toggleFavorite(item.uid)}
                    /> 
                ))}     
            </div>
        </div>
    );
}
