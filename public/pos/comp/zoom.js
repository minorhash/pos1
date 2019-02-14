import React from 'react';

class ZoomImg extends React.Component {
  render() {
    const { imageWidth, imageHeight, ...props } = this.props;

    return (
      <div
        className="image-frame"
        style={{ width: imageWidth, height: imageHeight }}
      >
        <img {...props} />
      </div>
    );
  }
}

export default ZoomImg;
