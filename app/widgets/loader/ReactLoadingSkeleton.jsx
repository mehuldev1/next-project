import React from 'react';
import Skeleton from 'react-loading-skeleton';

const DynamicSkeleton = ({ shape, count, animated }) => {
  console.log('sd')
  const renderSkeletons = () => {
    const skeletons = [];
    for (let i = 0; i < count; i++) {
      if (shape === 'circle') {
        skeletons.push(
          <div key={i} style={{ margin: '10px' }}>
            <Skeleton circle={true} height={50} width={50} enableAnimation={animated} />
          </div>
        );
      } else {
        skeletons.push(
          <div key={i} style={{ margin: '10px' }}>
            <Skeleton height={50} width={100} />
          </div>
        );
      }
    }
    return skeletons;
  };

  return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{renderSkeletons()}</div>;
};

export default DynamicSkeleton;
