import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class CategoryButton extends Component {
  render() {
    return (
      <div className="categoryButtons d-flex justify-content-around align-items-center">
        <Link to="/general">
          <button type="button" class="btn btn-secondary">General</button>
        </Link>
        <Link to="/business">
          <button type="button" class="btn btn-success">Business</button>
        </Link>
        <Link to="/health">
          <button type="button" class="btn btn-danger">Health</button>
        </Link>
        <Link to="/entertainment">
          <button type="button" class="btn btn-warning">Entertainment</button>
        </Link>
        <Link to="/science">
          <button type="button" class="btn btn-info">Science</button>
        </Link>
        <Link to="/sports">
          <button type="button" class="btn btn-success">Sports</button>
        </Link>
        <Link to="/technology">
          <button type="button" class="btn btn-dark">Technology</button>
        </Link>
      </div>
    )
  }
}

export default CategoryButton