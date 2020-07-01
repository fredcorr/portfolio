import React from 'react';

const ProgressiveImage = React.forwardRef((props, ref) => {
  
  return (
    <div className={ props.classPassed } ref={ ref } style={{
      backgroundImage: `url(${ props.image.metadata.lqip })`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}>
      <img
      src={ props.image.url}
      width={ '100%' }
      alt={ props.alt ? props.alt : null }
      />
    </div>
  )
})

export default ProgressiveImage;
