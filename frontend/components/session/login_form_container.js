import { connect } from 'react-redux'
import { clearSessionErrors, login } from "../../actions/session_actions";

import SessionForm from "./session_form";


const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "Login",
  sessionPath: "/signup",
  btnContent: "Sign Up"
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (formUser) => dispatch(login(formUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);