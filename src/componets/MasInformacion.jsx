import { useEffect, useState } from "react";

function MasInformacion() {
    const [noticias, setNoticias] = useState();
    const [noticiasCargadas, setNoticiasCargadas] = useState(false);

    useEffect(() => {
        fetch('http://api.mediastack.com/v1/news?access_key=aba7c464890517f8dd4dee84750276f2', {
            'mode': 'no-cors',
            'headers': { 'Content-Type': 'application/json' }
        })
        // .then(response => response.json())
        // .then(data => console.log(data));
    }, []);
    return (
        <>
            <div className="container">
                <div className="card text-center">
                    <div className="card-header">
                        Titulo de la noticia 1
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Autor 1</h5>
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>F
                    </div>
                    <div className="card-footer text-muted">
                        2022-01-02
                    </div>
                </div>
            </div>
        </>
    )
}

export default MasInformacion;