import Button, { BUTTON_COLORS } from '../button/button';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='navigation'>
        <ul className='links'>{/* li */}</ul>
      </div>
      <div className='ctas'>
        <Button className='cta' buttonColor={BUTTON_COLORS.White} href={'#'}>
          Book a call
        </Button>
        <Button className='cta' buttonColor={BUTTON_COLORS.Green} href={'#'}>
          Join our team
        </Button>
      </div>
      <div className='circle'></div>
      <h2>Let&apos;s build the next big thing, together.</h2>
      <div className='social'>
        <Button className='cta' buttonColor={BUTTON_COLORS.Transparent} href={'#'}>
          contact@finiam.com
        </Button>
        <Button className='cta cta-social' buttonColor={BUTTON_COLORS.Transparent} href={'#'}>
          TW
        </Button>
        <Button className='cta cta-social' buttonColor={BUTTON_COLORS.Transparent} href={'#'}>
          IN
        </Button>
      </div>
    </div>
  );
}
