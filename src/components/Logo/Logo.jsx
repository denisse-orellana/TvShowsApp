import { LogoContainer, LogoImg, LogoTitle, LogoSubtitle } from './StyledLogo';
import s from './style.module.css'

const Logo = ({ image, title, subtitle }) => (
  <div>
    <div className={s.container}>
      <img className={s.img} src={image} alt="logo" />
      <span className={s.title}>{title}</span>
    </div>
    <span className={s.subtitle}>{subtitle}</span>
  </div>
)

// Styled components
// const Logo = ({ image, title, subtitle }) => {
//   <div>
//     <LogoContainer>
//       <LogoImg src={image} alt='logo' />
//       <LogoTitle>{title}</LogoTitle>
//     </LogoContainer>
//   </div>
// }

export default Logo;
