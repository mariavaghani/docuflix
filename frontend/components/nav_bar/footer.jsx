import React from 'react'
import { connect } from 'react-redux'
import { ContactButton } from '../ui_elements/contact_button'
import { ChangeLanguageButton } from '../ui_elements/change_language_button';

export const Footer = (props) => {

  return (
    <footer className={props.footerClass}>
      <h6>Questions? Be sure to check out the Contacts link!!</h6>
      <div>
        <div>
          <h6>These are not real links</h6>
          <h6>But if this website was real</h6>
          <h6>Here would be a list</h6>
          <h6>Of all the legal info</h6>
          <h6>That an average user</h6>
        </div>
        <div>
          <h6>Would not even read</h6>
          <h6>But once in a while</h6>
          <h6>There would be people</h6>
          <h6>Who would find this content</h6>
        </div>
        <div>
          <h6>Very helpful</h6>
          <h6>And for these people</h6>
          <h6>We create footers</h6>
          <h6>Because</h6>
        </div>
        <div>
          <h6>These people</h6>
          <h6>Know exactly</h6>
          <h6>Where to look</h6>
          <h6>Here</h6>
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
