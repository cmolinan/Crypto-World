import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import JSCharting from 'jscharting-react';

const config = {
  series: [
    {
      points: [
        { x: 'A', y: 50 },
        { x: 'B', y: 30 },
        { x: 'C', y: 50 },
      ],
    },
  ],
};

const divStyle = {
  maxWidth: '700px',
  height: '400px',
  margin: '0px auto',
};

// eslint-disable-next-line react/prefer-stateless-function
class SimpleChart extends React.Component {
  render() {
    return (
      <div style={divStyle}><JSCharting options={config} /></div>
    );
  }
}

export default SimpleChart;
