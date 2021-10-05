import React from 'react';

class Movie extends React.Component {
  render() { 
    return (
      <table className = 'table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table> 
    );
  }
}
 
export default Movie;