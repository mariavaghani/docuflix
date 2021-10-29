import { connect } from 'react-redux'
import { login } from "../../actions/session_actions";

import SessionForm from "./session_form";


const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "Login",
  sessionPath: "/signup",
  btnContent: "Sign Up"
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (formUser) => dispatch(login(formUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);