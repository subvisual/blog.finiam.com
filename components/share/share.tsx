import { useRouter } from 'next/router';
import Button, { BUTTON_COLORS } from '../button/button';

import styles from './share.module.scss';

export default function Share() {
  const { asPath } = useRouter();
  const post_url = 'https://blog.finiam.com' + asPath;

  return (
    <div className={styles.share}>
      <p>Share</p>
      <div className={styles['share-buttons']}>
        <Button
          className='cta-social'
          buttonColor={BUTTON_COLORS.TransparentDark}
          href={`https://twitter.com/intent/tweet?url=${post_url}`}
          rel='noreferrer'
          target='_blank'
        >
          TW
        </Button>
        <Button
          className='cta-social'
          buttonColor={BUTTON_COLORS.TransparentDark}
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${post_url}`}
          rel='noreferrer'
          target='_blank'
        >
          IN
        </Button>
      </div>
    </div>
  );
}
