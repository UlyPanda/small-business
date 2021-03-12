import { connect } from 'react-redux';
import Login from '../components/Login';
import { logIn, logOut, addUser } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: () => dispatch(logIn()),
        logOut: () => dispatch(logOut()),
        addUser: (user) => dispatch(addUser(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);