import React from 'react';

const carouselImages = [
  {
    imageURL: 'https://static.wikia.nocookie.net/ssb/images/5/5f/Donkey_Kong_-_Super_Smash_Bros._Ultimate.png/revision/latest/scale-to-width-down/1000?cb=20180612204654'
  },

  {
    imageURL: 'https://static.wikia.nocookie.net/ssb/images/4/44/Mario_SSBU.png/revision/latest/scale-to-width-down/1000?cb=20180612204958'
  },

  {
    imageURL: 'https://static.wikia.nocookie.net/ssb/images/7/7e/Dark_Samus_-_Super_Smash_Bros._Ultimate.png/revision/latest/scale-to-width-down/1000?cb=20180808153139'
  },

  {
    imageURL: 'https://static.wikia.nocookie.net/ssb/images/e/eb/Lucina_-_Super_Smash_Bros._Ultimate.png/revision/latest/scale-to-width-down/1000?cb=20180612204957'
  },

  {
    imageURL: 'https://static.wikia.nocookie.net/ssb/images/8/8c/Mr._Game_%26_Watch_-_Super_Smash_Bros._Ultimate.png/revision/latest/scale-to-width-down/1000?cb=20180612205002'
  }
];

const dotsArray = [null, null, null, null, null];
const length = carouselImages.length;

class ImageSlides extends React.Component {
  render() {
    return (
      <div className="slides-container">
        <button className="left-arrow" onClick={this.props.prevSlide}>
          <i className="fas fa-chevron-left fa-3x"></i>
        </button>
        <div className="images-container">
         {carouselImages.map((obj, index) => {
           return (
            <div key={index}>
              {index === this.props.current && (<img src={obj.imageURL}></img>)}
            </div>
           );
         })}
        </div>
        <button className="right-arrow" onClick={this.props.nextSlide}>
          <i className="fas fa-chevron-right fa-3x"></i>
        </button>
        <div className="dots-container">
         {dotsArray.map((obj, index) => {
           return (
             <div key={index} className={this.props.current === index ? 'dot active' : 'dot'} onClick={() => this.props.moveDotIndex(index)}>
             </div>
           );
         })}
        </div>
      </div>
    );
  }
}

class AppCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.moveDotIndex = this.moveDotIndex.bind(this);
  }

  nextSlide() {
    const isCurrent = this.state.current;
    this.setState({
      current: isCurrent === length - 1 ? 0 : isCurrent + 1
    });
  }

  prevSlide() {
    const isCurrent = this.state.current;
    this.setState({
      current: isCurrent === 0 ? length - 1 : isCurrent - 1
    });
  }

  moveDotIndex(index) {
    this.setState({
      current: index
    });
  }

  moveForward() {
    const isCurrent = this.state.current;
    this.setState({
      current: isCurrent === length - 1 ? 0 : isCurrent + 1
    });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.moveForward(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="carousel-container">
        <ImageSlides current={this.state.current} nextSlide={this.nextSlide} prevSlide={this.prevSlide} moveDotIndex={this.moveDotIndex} />
      </div>
    );
  }
}

export default AppCarousel;
