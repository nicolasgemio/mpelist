
export function ListItem(props){
    const p = props.Item;

    return (<div>
        <div className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{p.Nombre}</h5>
                <small>{p.Tiempo}</small>
            </div>
            <p className="mb-1">{p.Descripcion}</p>
            <small>{p.Texto}</small>
        </div>
        </div>)
}