import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./grid.css";

class Grid extends PureComponent {

  renderCheckBox = (enableSelection, index) => {
    if (enableSelection && index === 0) {
      return <td key={index}><input type="checkbox"></input></td>
    }
  }

  render = () => {
 
    const {rows, columnsConfig, enableSelection} = this.props;

    return (
      <table className="campaign-table">
        <thead>
            <tr>
              { enableSelection && <td> <input type="checkbox"></input> </td>}
              {columnsConfig.map(columnConfig => (
                <th key={columnConfig.id}>{columnConfig.label}</th>
              ))}
            </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={JSON.stringify(row)}>
              {Object.keys(row).map((field, index) => (
                [
                  this.renderCheckBox(enableSelection, index),
                  <td key={row[field]}>{row[field]}</td>
                ]
              ))}
            </tr>
          ))}
        </tbody>
    </table>
    );
  };
}

Grid.defaultProps = {
  enableSelection: false,
  columnsConfig: [],
  rows: [],
};

Grid.propTypes = {
  columnsConfig: PropTypes.array,
  rows: PropTypes.array,
  enableSelection: PropTypes.bool
};

export default Grid;
