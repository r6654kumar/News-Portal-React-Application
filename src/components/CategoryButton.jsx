import React from 'react'
import { Link } from 'react-router-dom'
const CategoryButton = ()=>{
    return (
      <div className="categoryButtons d-flex justify-content-around align-items-center">
        <Link to="/general">
          <button type="button" className="btn btn-secondary">General</button>
        </Link>
        <Link to="/business">
          <button type="button" className="btn btn-success">Business</button>
        </Link>
        <Link to="/health">
          <button type="button" className="btn btn-danger">Health</button>
        </Link>
        <Link to="/entertainment">
          <button type="button" className="btn btn-warning">Entertainment</button>
        </Link>
        <Link to="/science">
          <button type="button" className="btn btn-info">Science</button>
        </Link>
        <Link to="/sports">
          <button type="button" className="btn btn-success">Sports</button>
        </Link>
        <Link to="/technology">
          <button type="button" className="btn btn-dark">Technology</button>
        </Link>
      </div>
    )
  }

export default CategoryButton