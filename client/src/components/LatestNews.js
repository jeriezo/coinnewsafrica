import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src:
      'https://banner2.kisspng.com/20180331/bsw/kisspng-logo-brand-font-coming-soon-5abfa76c2c02a1.3844708615225096761803.jpg',
    altText: 'Slide 1',
    header: 'Coming Soon'
  },
  {
    src:
      'https://banner2.kisspng.com/20180331/bsw/kisspng-logo-brand-font-coming-soon-5abfa76c2c02a1.3844708615225096761803.jpg',
    altText: 'Slide 2',
    header: 'Coming Soon'
  }
];

const SliderCarousel = () => <UncontrolledCarousel items={items} />;

export default SliderCarousel;
