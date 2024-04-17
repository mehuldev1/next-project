import React from 'react';
import './ResponsiveTable.css'
import DynamicSkeleton from '../loader/ReactLoadingSkeleton';


const ResponsiveTable = ({ data = [1,1,1] }) => {


  console.log('q')

  return (
    <div className="responsive-table">
      <div className="table-header">
        <div className="column">Header 1</div>
        <div className="column">Header 2</div>
        <div className="column">Header 3</div>
      </div>
      <div className="table-body">
        {data.map((item, index) => (
          <div className="row" key={index}>
            <div className="column">{item.column1 || <DynamicSkeleton shape="circle" count={5} animated={true} />}</div>
            <div className="column">{item.column2 ||  <DynamicSkeleton shape="box" count={3} animated={false} />}</div>
            <div className="column">{item.column3 }</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveTable;
