import React, { Component } from 'react'

export class CategoryButton extends Component {
  render() {
    return (
        <div className="categoryButtons d-flex justify-content-around align-items-center">
        <button type="button" class="btn btn-secondary">General</button>
        <button type="button" class="btn btn-success">Business</button>
        <button type="button" class="btn btn-danger">Health</button>
        <button type="button" class="btn btn-warning">Entertainment</button>
        <button type="button" class="btn btn-info">Science</button>
        <button type="button" class="btn btn-success">Sports</button>
        <button type="button" class="btn btn-dark">Technology</button>
    </div>
    )
  }
}

export default CategoryButton