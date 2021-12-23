import React from 'react'
import { connect } from 'react-redux'
import { ContactButton } from '../ui_elements/contact_button'
import { ChangeLanguageButton } from '../ui_elements/change_language_button';
import { useTranslation } from 'react-i18next';

export const Footer = (props) => {
  const { t } = useTranslation();
  return (
    <footer className={props.footerClass}>
      <h6>{t("Questions? Be sure to check out the Contacts link!!")}</h6>
      <div>
        <div>
          <h6>{t("These are not real links")}</h6>
          <h6>{t("But if this website was real")}</h6>
          <h6>{t("Here would be a list")}</h6>
          <h6>{t("Of all the legal info")}</h6>
          <h6>{t("That an average user")}</h6>
        </div>
        <div>
          <h6>{t("Would not even read")}</h6>
          <h6>{t("But once in a while")}</h6>
          <h6>{t("There would be people")}</h6>
          <h6>{t("Who would find this content")}</h6>
        </div>
        <div>
          <h6>{t("Very helpful")}</h6>
          <h6>{t("And for these people")}</h6>
          <h6>{t("We create footers")}</h6>
          <h6>{t("Because")}</h6>
        </div>
        <div>
          <h6>{t("These people")}</h6>
          <h6>{t("Know exactly")}</h6>
          <h6>{t("Where to look")}</h6>
          <h6>{t("Here")}</h6>
        </div>
      </div>
      <div>
        <ContactButton
          btnClass={"contact-btn-muted"}
          dropClass={"contact-drpdwn-footer"}/>
        <ChangeLanguageButton
          btnClass={"contact-btn-muted"}
          dropClass={"contact-drpdwn-footer"}/>
      </div>
    </footer>
  )
}

// const mapStateToProps = (state) => ({
//   muted: state.videoControls.muted
// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(VideoPreview)
