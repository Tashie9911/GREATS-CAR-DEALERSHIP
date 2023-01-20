import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://imgs.search.brave.com/xQm0ZwhtD2qc9Yp1SruK_tF9zvXUcVE9CJkNhvhyKI8/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/MkNZWWlNU2J1MVJv/VDFMTmNrS3pnSGFF/NyZwaWQ9QXBp',
    altText: 'TOYOTA',
    caption: 'GD6'
  },
  {
    src: 'https://imgs.search.brave.com/GLKqW0DU820iJHzbqvTBpfhQkjyIZ0OhQuik8E2RydE/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/MlVTOGxBZ2U5Ml96/NHBiWXlDNkJ3SGFG/aiZwaWQ9QXBp',
    altText: 'ISUSU',
    caption: 'D TECH'
  },
  {
    src: 'https://imgs.search.brave.com/NOqXZcblmaLougAB5o7ggTsSHaOTUyXc4IntT9RgC_s/rs:fit:870:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5n/QWtWblpJMUtEZDVI/Rkh2NFVlaE5nSGFF/QyZwaWQ9QXBp',
    altText: 'NISSAN',
    caption: 'NAVARA'
  }
];

class JumboTron extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div className="container">
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}


export default JumboTron;





// import React, { Component } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption
// } from 'reactstrap';
//
// const items = [
//   {
//     id: 'https://imgs.search.brave.com/KCq0BJ9vCkDSDXK80tlxFAbtkdoBmUSpQ_Oirjy9AkY/rs:fit:715:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/RHBza05OZmZGaTFn/YVlQWTVyUjVRSGFF/NiZwaWQ9QXBp',
//     altText: 'Slide 1',
//     caption: 'Slide 1'
//   },
//   {
//     id: 'https://s3.amazonaws.com/cartool/background.jpg',
//     altText: 'Slide 2',
//     caption: 'Slide 2'
//   },
//   {
//     id: 3,
//     altText: 'Slide 3',
//     caption: 'Slide 3'
//   }
// ];
//
// class JumboTron extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { activeIndex: 0 };
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//     this.goToIndex = this.goToIndex.bind(this);
//     this.onExiting = this.onExiting.bind(this);
//     this.onExited = this.onExited.bind(this);
//   }
//
//   onExiting() {
//     this.animating = true;
//   }
//
//   onExited() {
//     this.animating = false;
//   }
//
//   next() {
//     if (this.animating) return;
//     const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
//     this.setState({ activeIndex: nextIndex });
//   }
//
//   previous() {
//     if (this.animating) return;
//     const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
//     this.setState({ activeIndex: nextIndex });
//   }
//
//   goToIndex(newIndex) {
//     if (this.animating) return;
//     this.setState({ activeIndex: newIndex });
//   }
//
//   render() {
//     const { activeIndex } = this.state;
//
//     const slides = items.map((item) => {
//       return (
//         <CarouselItem
//           className="custom-tag"
//           tag="div"
//           key={item.id}
//           onExiting={this.onExiting}
//           onExited={this.onExited}
//         >
//           <CarouselCaption className="text-success" captionText={item.caption} captionHeader={item.caption} />
//         </CarouselItem>
//       );
//     });
//
//     return (
//       <div className="container">
//         <style>
//           {
//             `.custom-tag {
//                 max-width: 100%;
//                 height: 550px;
//                 background-repeat: no-repeat;
//                 background-position: center;
//                 background-image: url('');
//               }`
//           }
//         </style>
//         <Carousel
//           activeIndex={activeIndex}
//           next={this.next}
//           previous={this.previous}
//         >
//           <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
//           {slides}
//           <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
//           <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
//         </Carousel>
//       </div>
//     );
//   }
// }
//
// export default JumboTron;
