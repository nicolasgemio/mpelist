
export function ListItem(){
    return (<div>
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Nombre de Pelicula</h5>
                <small>Hace 3 dias</small>
            </div>
            <p className="mb-1">Descripción</p>
            <small>Donec id elit non mi porta.</small>
        </a>
        </div>)
}