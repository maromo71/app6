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
  max-height: 330px;
  padding: 4em;
  background: #8d99ae;
`;
const items = [
  {
    src: 'https://raw.githubusercontent.com/maromo71/app6/main/assets/images/github_cat.png',
    altText: 'Imagem do Bootstrap',
    caption: 'Aulas de Bootstrap',

  },
  {
    src: 'https://raw.githubusercontent.com/maromo71/app6/main/assets/images/nextjs.png',
    altText: 'Imagem do React',
    caption: 'Aulas de React'
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
        <img style={{ maxHeight: '50%', maxWidth: '50%', display: 'block', margin: '0 auto' }} src={item.src} alt={item.altText} />
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