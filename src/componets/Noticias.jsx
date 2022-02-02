import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Noticias() {
    const [noticias, setNoticias] = useState();
    const [noticiasCargadas, setNoticiasCargadas] = useState(false);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Titulo de la noticia 1</h5>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                <Link to="/info" className="btn btn-primary">Ver Mas</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Titulo de la noticia 2</h5>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                <Link to="/info" className="btn btn-primary">Ver Mas</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Noticias;