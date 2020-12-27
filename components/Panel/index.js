import styled from 'styled-components';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const Wrapper = styled.section`
  display: block;
  max-height: 430px;
  padding: 4em;
  background: #a6a6a6;
`;
const items = [
  {
    src: 'https://raw.githubusercontent.com/maromo71/app6/main/assets/images/1.png',
    altText: 'Imagem do Bootstrap',
    urlDestination: '#',
    caption: 'Aulas do Bootstrap',

  },
  {
    src: 'https://raw.githubusercontent.com/maromo71/app6/main/assets/images/2.png',
    altText: 'Imagem do Git',
    urlDestination: '#',
    caption: 'Aulas de Git'
  },
  {
    src: 'https://raw.githubusercontent.com/maromo71/app6/main/assets/images/3.png',
    altText: 'Imagem do Next-js',
    urlDestination: '#',
    caption: 'Aulas de Next-js'
  },
  {
    src: 'https://raw.githubusercontent.com/maromo71/app6/main/assets/images/4.png',
    altText: 'Imagem do Java',
    urlDestination: '#',
    caption: 'Aulas de Java'
  }

];

const Painel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <a  href={item.urlDestination}>
          <img style={{ maxHeight: '100%', maxWidth: '100%', display: 'block', margin: '0 auto', textAlign: 'center' }} src={item.src} alt={item.altText} />
          <CarouselCaption style={{textAlign: 'center'}} captionHeader={item.caption} />
        </a>
      </CarouselItem>

    );
  });

  return (
    <Wrapper>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Anterior" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Próxima" onClickHandler={next} />
      </Carousel>
    </Wrapper>

  );
}

export default Painel;