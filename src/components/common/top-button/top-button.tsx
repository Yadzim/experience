import { FC, useState } from 'react';
import { TopButtonProps } from './top-button.t';
import { Button } from './top-button.e';
import ToTopIcon from '../../../assets/images/icon/toTop.svg';

const TopButton: FC<TopButtonProps> = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <Button
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}>
      <img src={ToTopIcon} alt='' />
    </Button>
  );
};

export default TopButton;
