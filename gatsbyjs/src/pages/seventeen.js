import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import Modal from 'react-modal';
import { Icon } from 'react-icons-kit';
import { iosBell } from 'react-icons-kit/ionicons/iosBell';
import { iosArrowThinRight } from 'react-icons-kit/ionicons/iosArrowThinRight';
import { location } from 'react-icons-kit/icomoon/location';
import { phone } from 'react-icons-kit/icomoon/phone';
import { home } from 'react-icons-kit/entypo/home';
import { x } from 'react-icons-kit/feather/x';
import LanguageProvider from '@deadline/common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from '@deadline/common/LanguageSwitcher';
import languageConfig from '@deadline/common/LanguageSwitcher/config';
import NormalClock from '@deadline/components/NormalClock/NormalClock.js';
import Button from '@deadline/components/Button';
import ContactForm from '@deadline/components/MaterialContactFormTwo/MaterialContactForm';
import SubscribeModal from '@deadline/components/SubscribeModal/SubscribeModal';
import MainContentWrapper, {
  MainContentSection,
  NormalClockWrapper,
  LogoImageContainer,
  ButtonWrapper,
  MainWrapper,
  SideBar,
  Overlay,
  SidebarContent,
  About,
  Contact,
  Info,
  InfoItem,
  InfoIcon,
  SidebarClose,
  FooterSection,
  ModalStyle,
} from '@deadline/common/ui/seventeen.style';
import LogoImage from '@deadline/common/static/images/logoTwo.png';
// Language translation files
import localEng from '@deadline/common/data/translation/seventeen/en.json';
import localAr from '@deadline/common/data/translation/seventeen/ar.json';
import localEs from '@deadline/common/data/translation/seventeen/es.json';
import localDe from '@deadline/common/data/translation/seventeen/de.json';
import localCn from '@deadline/common/data/translation/seventeen/zh.json';
import localIl from '@deadline/common/data/translation/seventeen/he.json';
import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/seventeen';
import { Container, SocialShare, Seo } from '../components';
// Language translation Config
const messages = {
  en: localEng,
  ar: localAr,
  es: localEs,
  de: localDe,
  zh: localCn,
  he: localIl,
};

const deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);

const IndexPage = () => {
  const [state, setState] = useState({
    toggle: false,
  });
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const toggleHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    });
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <LanguageProvider messages={messages}>
      <React.Fragment>
        <Seo title="title" />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel="Selected Option"
          className="newsletter-modal"
        >
          <SubscribeModal closeHandler={closeModal} />
        </Modal>
        <ModalStyle />
        <ModalStyle />
        <MainWrapper>
          <MainContentWrapper>
            <LogoImageContainer>
              <Link to={'/seventeen'}>
                <img src={LogoImage} alt="logo" />
              </Link>
            </LogoImageContainer>
            <Container className="mainContainer">
              <MainContentSection>
                <NormalClockWrapper>
                  <NormalClock countdown={deadline} />
                </NormalClockWrapper>
                <h2>
                  <FormattedMessage id="mainMessage" />
                </h2>
                <p>
                  <FormattedMessage id="description" />
                </p>

                <ButtonWrapper>
                  <Button
                    type="submit"
                    title="modalButtonText"
                    icon={<Icon icon={iosBell} size={20} />}
                    className="notify"
                    onClick={() => setIsOpen(true)}
                  />
                  <Button
                    type="submit"
                    title="sidebarButtonText"
                    icon={<Icon icon={iosArrowThinRight} size={25} />}
                    className="info"
                    onClick={toggleHandle}
                  />
                </ButtonWrapper>
              </MainContentSection>
            </Container>
            <FooterSection>
              <SocialShare items={SOCIAL_PROFILES} />
              <p>
                <FormattedMessage id="copyrightText" />
              </p>
            </FooterSection>
          </MainContentWrapper>
          <SideBar className={state.toggle === true ? 'expand' : ''}>
            <SidebarContent>
              <SidebarClose type="submit" aria-label="close">
                <Icon icon={x} size={33} onClick={toggleHandle} />
              </SidebarClose>
              <About>
                <h2>
                  <FormattedMessage id="aboutTitle" />
                </h2>
                <p>
                  <FormattedMessage id="aboutText" />
                </p>
              </About>

              <Contact>
                <h2>
                  <FormattedMessage id="contactTitle" />
                </h2>
                <ContactForm />
              </Contact>

              <Info>
                <InfoItem>
                  <InfoIcon>
                    <Icon icon={location} size={33} />
                  </InfoIcon>
                  <h4>
                    <FormattedMessage id="addressTitle" />
                  </h4>
                  <p>
                    <FormattedMessage id="addressDetails" />
                  </p>
                </InfoItem>

                <InfoItem>
                  <InfoIcon>
                    <Icon icon={phone} size={32} />
                  </InfoIcon>
                  <h4>
                    <FormattedMessage id="phoneTitle" />
                  </h4>
                  <p>
                    <FormattedMessage id="phoneNumbers" />
                  </p>
                </InfoItem>

                <InfoItem>
                  <InfoIcon>
                    <Icon icon={home} size={32} />
                  </InfoIcon>
                  <h4>
                    <FormattedMessage id="websiteTitle" />
                  </h4>
                  <p>
                    <FormattedMessage id="Websites" />
                  </p>
                </InfoItem>
              </Info>
            </SidebarContent>
            <Overlay className={state.toggle === true ? 'expand' : ''} />
          </SideBar>
        </MainWrapper>
        <LanguageSwitcher languageConfig={languageConfig} />
      </React.Fragment>
    </LanguageProvider>
  );
};

export default IndexPage;
