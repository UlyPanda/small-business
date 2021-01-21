import { connect } from 'react-redux';
import BusinessList from '../components/BusinessList';
import { removeBusiness } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        businesses: state.businesses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessList)