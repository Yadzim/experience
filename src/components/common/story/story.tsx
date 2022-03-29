import { FC } from 'react';
import { StoryProps } from './story.t';
import { Container } from '..';
import { Subtitle, Title } from '../global-style/global-style';
import { StoryWrapper, Texts, Warning } from './story.e';

const Story: FC<StoryProps> = ({
  title,
  texts1,
  warning,
  subtitle,
  texts2,
}) => {
  return (
    <StoryWrapper>
      <Container>
        <Title>{title}</Title>
        <Texts>{texts1}</Texts>
        <Warning>{warning}</Warning>
        <Subtitle>{subtitle}</Subtitle>
        <Texts>{texts2}</Texts>
      </Container>
    </StoryWrapper>
  );
};

export default Story;
