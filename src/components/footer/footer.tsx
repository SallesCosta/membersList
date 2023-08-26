import * as S from './style'
import * as T from '@/styles/text'
import { FacebookIcon } from '@/assets/facebookIcon'
import { InstagramIcon } from '@/assets/instagramIcon'
import { LinkedinIcon } from '@/assets/linkedinIcon'
import { LucideBoxes } from '@/assets/LucideBoxes'

export const Footer = () => {
  return (
    <S.Footer__internal>
      <S.Footer__container>
        <S.Footer__Hstack>
          <LucideBoxes width='48px' height='48px' />
          <S.Footer__wrap>
            <S.Footer__text>Together</S.Footer__text>
            <S.Footer__text>Corporation</S.Footer__text>
          </S.Footer__wrap>
        </S.Footer__Hstack>
        <S.Footer__ajuste16>
          <T.Text16>Together Corporation S.A. yeah</T.Text16>
        </S.Footer__ajuste16>
        <T.Text14>Follow us:</T.Text14>
        <S.Footer__Hstack>
          <S.Footer__icons__fb><FacebookIcon /> </S.Footer__icons__fb>
          <S.Footer__icons__in><InstagramIcon /></S.Footer__icons__in>
          <S.Footer__icons__lk><LinkedinIcon /></S.Footer__icons__lk>
        </S.Footer__Hstack>
      </S.Footer__container>
    </S.Footer__internal>
  )
}
