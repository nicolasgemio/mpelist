
export function StatusMovieBar(props){
    //const ChangeStatus = props.ChangeStatus;

    return (<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked/>
      <label className="btn btn-outline-primary" for="btnradio1">Pendientes</label>
      
      <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
      <label className="btn btn-outline-primary" for="btnradio2">Viendo</label>
      
      <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
      <label className="btn btn-outline-primary" for="btnradio3">Vistas</label>
</div>)
}