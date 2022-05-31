
export function PaginationMoviesGrid(){
    return (<div className="paginationGrid"><nav aria-label="Page navigation example">
    <ul className="pagination">
      <li className="page-item">
        <div className="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </div>
      </li>
      <li className="page-item"><div className="page-link">1</div></li>
      <li className="page-item"><div className="page-link">2</div></li>
      <li className="page-item"><div className="page-link">3</div></li>
      <li className="page-item"><div className="page-link">4</div></li>
      <li className="page-item"><div className="page-link">5</div></li>

      <li className="page-item">
        <div className="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </div>
      </li>
    </ul>
  </nav>
  </div>)
}