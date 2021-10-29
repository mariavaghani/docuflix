import { connect } from 'react-redux'
import { createNewUser } from "../../actions/session_actions";

import SessionForm from "./session_form";


const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "Sign Up",
  sessionPath: "/login",
  btnContent: "Log In"
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (formUser) => dispatch(createNewUser(formUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);