import React from 'react'

export const FrontPage = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" to="#">Navnar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" to="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="#">About</a>
            </li>
          </ul>
          <input className="form-control me-5" type="search" placeholder="Search" size={4} aria-label="Search" />
          <p>&nbsp;&nbsp;</p>
          <button className="btn btn-outline-success" type="submit" size={3}>Search</button>
          {/* {props.searchbar? <form className="d-flex" role="search">
                        <input className="form-control me-5"  type="search" placeholder="Search" aria-label="Search" />
                        <p>&nbsp;&nbsp;</p>
                        <button className="btn btn-outline-success" type="submit" size={4}>Search</button>
                    </form>: "search bar not available"} */}
        </div>
      </div>
    </nav>
  )
}