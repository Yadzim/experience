import { FC, useRef } from 'react';
import { SlidersProps } from './sliders.t';
import { Card, SlidersSection } from './sliders.e';
import { Rerousel } from 'rerousel';

// Images
import pdp from '../../../../assets/images/sliders/pdp.svg';
import korzinka from '../../../../assets/images/sliders/korzinka.svg';
import makro from '../../../../assets/images/sliders/makro.svg';
import najot from '../../../../assets/images/sliders/najot.svg';
import elmakon from '../../../../assets/images/sliders/elmakon.svg';
import terra from '../../../../assets/images/sliders/terra.svg';
import elporta from '../../../../assets/images/sliders/elporta.svg';

const Sliders: FC<SlidersProps> = (props) => {
  const ref = useRef(null);
  return (
    <SlidersSection>
      <Rerousel itemRef={ref}>
        <Card ref={ref}>
          <img src={pdp} alt='pdp' />
        </Card>
        <Card>
          <img src={korzinka} alt='pdp' />
        </Card>
        <Card>
          <img src={makro} alt='pdp' />
        </Card>
        <Card>
          <img src={najot} alt='pdp' />
        </Card>
        <Card>
          <img src={elmakon} alt='pdp' />
        </Card>
        <Card>
          <img src={terra} alt='pdp' />
        </Card>
        <Card>
          <img src={elporta} alt='pdp' />
        </Card>
        <Card>
          <img src={makro} alt='pdp' />
        </Card>
      </Rerousel>
    </SlidersSection>
  );
};

export default Sliders;
