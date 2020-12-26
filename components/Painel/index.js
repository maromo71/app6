import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
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
  height: 330px;
  padding: 4em;
  background: #a6a6a6;
`;
const items = [
  {
    src: 'https://raw.githubusercontent.com/maromo71/app6/main/assets/images/1.png',
    altText: 'Imagem do Bootstrap',
    caption: 'Aulas de Bootstrap',

  },
  {
    src: 'https://raw.githubusercontent.com/maromo71/app6/main/assets/images/2.png',
    altText: 'Imagem do Git',
    caption: 'Aulas de Git'
  },
  {
    src: 'https://raw.githubusercontent.com/maromo71/app6/main/assets/images/3.png',
    altText: 'Imagem do Next-js',
    caption: 'Aulas de Next-js'
  },
  {
    src: 'https://raw.githubusercontent.com/maromo71/app6/main/assets/images/4.png',
    altText: 'Imagem do Java',
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
        <img style={{ maxHeight: '100%', maxWidth: '100%', display: 'block', margin: '0 auto' }} src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
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