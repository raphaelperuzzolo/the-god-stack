import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { usePersistedState } from 'hooks'
import {
  GenericTemplate, Block, Button, Link, Input, Row, Col,
} from 'components'

const StyledBlock = styled(Block)`
  padding: 0;
  margin: 10px 0;
`

const HomePage = ({ toggleTheme, t, ...props }) => {
  const { i18n } = useTranslation()
  const [lang, setLang] = usePersistedState('language', JSON.parse(localStorage.getItem('language')) || 'enUS')
  const [theme, setTheme] = usePersistedState('theme', JSON.parse(localStorage.getItem('theme')) || 'light')

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    toggleTheme()
  }

  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
    setLang(lang)
  }

  return (
    <GenericTemplate {...props}>
      <Block>{t('pages.HomePage.home')}</Block>
      <StyledBlock>
        <Link to="/login">Login</Link>
      </StyledBlock>
      <StyledBlock>
        <Button
          type="button"
          onClick={() => changeTheme()}
        >
          {t('pages.HomePage.changeTheme')}
        </Button>
      </StyledBlock>


      <StyledBlock>
        <Input password />
      </StyledBlock>

      <Row textalign="center" justifycontent="space-between">
        <Col textalign="left" sm={3}>
          <Button
            type="button"
            onClick={() => changeLang('ptBR')}
          >
            PT
          </Button>
        </Col>
        <Col textalign="right" sm={3}>
          <Button
            type="button"
            onClick={() => changeLang('enUS')}
          >
            EN
          </Button>
        </Col>
      </Row>
    </GenericTemplate>
  )
}

HomePage.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  t: PropTypes.func,
}

export default HomePage
