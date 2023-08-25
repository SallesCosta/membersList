import * as S from './style'
import * as T from '@/styles/text'
import logoBranca from '@/assets/logo_branca.png'
import { FacebookIcon } from '@/assets/facebookIcon'
import { InstagramIcon } from '@/assets/instagramIcon'
import { LinkedinIcon } from '@/assets/linkedinIcon'

export const Footer = () => {
  return (
    <S.Footer__internal>
      <S.Footer__container>
        <S.Footer__Hstack>
          <S.Footer__logo src={logoBranca} />
          <S.Footer__wrap>
            <S.Footer__text>JUNTOS</S.Footer__text>
            <S.Footer__text>SOMOS +</S.Footer__text>
          </S.Footer__wrap>
        </S.Footer__Hstack>
        <S.Footer__ajuste16>
          <T.Text16>Juntos Somos mais Fidelização S.A.</T.Text16>
        </S.Footer__ajuste16>
        <T.Text14>Siga-nos nas redes dociais:</T.Text14>
        <S.Footer__Hstack>
          <S.Footer__icons__fb><FacebookIcon /> </S.Footer__icons__fb>
          <S.Footer__icons__in><InstagramIcon /></S.Footer__icons__in>
          <S.Footer__icons__lk><LinkedinIcon /></S.Footer__icons__lk>
        </S.Footer__Hstack>
      </S.Footer__container>
    </S.Footer__internal>
  )
}
