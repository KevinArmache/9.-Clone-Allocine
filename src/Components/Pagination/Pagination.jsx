function Pagination ({NextPage}) {
    return (
        <>
        <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      < button className="page-link" href="..." aria-label="Previous">
        <span onClick="ToThePreviousPage" aria-hidden="true">&laquo;</span>
      </button>
    </li>
    <li className="page-item"><button className="page-link" href="...">1</button></li>
    <li className="page-item"><button className="page-link" href="...">2</button></li>
    <li className="page-item"><button className="page-link" href="...">3</button></li>
    <li className="page-item">
      <button className="page-link" href="..." aria-label="Next">
        <span onClick="NextPage" aria-hidden="true">&raquo;</span>
      </button>
    </li>
  </ul>
</nav>
        </>
    )
}

export default Pagination;