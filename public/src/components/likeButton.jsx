import React from 'react';
import { Button } from 'react-bootstrap';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Like It',
      isLiked: false,
      isProcessing: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // Handle the state with the promise returned by upper level method
    this.setState({ text: 'Processing...'});
    setTimeout(() => {
      this.setState({ text: 'Liked!' });
    }, 1500);
  }

  render() {
    return (
      <Button
        className="col-sm-10 small-tile-button"
        onClick={this.handleClick}
      >
        { this.state.text }
      </Button>
    );
  }
}

export default LikeButton;