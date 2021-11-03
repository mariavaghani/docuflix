import { connect } from 'react-redux'
import { clearSessionErrors, createNewUser } from "../../actions/session_actions";

import SessionForm from "./session_form";


const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "Sign Up",
  sessionPath: "/login",
  btnContent: "Log In"
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (formUser) => dispatch(createNewUser(formUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);