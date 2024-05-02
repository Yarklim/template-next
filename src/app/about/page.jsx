import Image from 'next/image';
import imageAbout from '../../../public/images/about.png';

import s from './about.module.scss';

const AboutPage = () => {
  return (
    <article className={s.wrapper}>
      <Image src={imageAbout} alt="about" width={300} height={'auto'} />
      <p className={s.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores pariatur magnam
        veniam necessitatibus exercitationem eius soluta quibusdam ipsa asperiores nobis velit
        placeat qui blanditiis, nisi iusto? Inventore, tempora molestiae?
      </p>
    </article>
  );
};

export default AboutPage;
