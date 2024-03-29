
export function StatusMovieBar(props){
    //const ChangeStatus = props.ChangeStatus;

    var changeStatus = function(value){
      props.setListStatus(value);
    };

    return (
      <div className="btn-group px-5 statusBarStyle center" role="group" aria-label="radio toggle button group">
        <input type="radio" className="btn-check statusBarStyle" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked onChange={() => changeStatus(0)}/>
        <label className="btn btn-outline-primary statusBarStyle" htmlFor="btnradio1">Todas</label>
        
        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onChange={() => changeStatus(1)}/>
        <label className="btn btn-outline-primary statusBarStyle" htmlFor="btnradio2">Pendientes</label>
        
        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onChange={() => changeStatus(2)}/>
        <label className="btn btn-outline-primary statusBarStyle" htmlFor="btnradio3">Viendo</label>
        
        <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" onChange={() => changeStatus(3)}/>
        <label className="btn btn-outline-primary statusBarStyle" htmlFor="btnradio4">Vistas</label>
</div>)
}