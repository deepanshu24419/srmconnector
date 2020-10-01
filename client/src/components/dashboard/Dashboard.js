import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Spinner from '../Layouts/Spinner';
import DashboardAction from './DashboardAction';
import Experience from './Experience';
import Education from './Education';


import {getCurrentProfile, deleteAccount} from '../../action/profile';
import { Link } from 'react-router-dom';

const Dashboard = ({getCurrentProfile,
  deleteAccount,auth:{user},profile: {profile,loading} }) => {
  useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return loading && profile === null ? <Spinner /> : <> 
    <h1 className="large text-primary">Dashboard</h1>
    <p className="lead">
    <i className="fas fa-user"></i>
      Welcome { user && user.name}
    </p>
    {profile !== null ? 
    
    <>
    <DashboardAction />
    <Experience experience={profile.experience} />
    <Education education={profile.education} />
     <div className="my-2">
       <button onClick={() => deleteAccount()} className="btn btn-danger">
         <i className="fas fa-user-minus"> Delete My Acount</i>
       </button>
     </div>
    </> :
     <>
    <p>You have not yet setup a profile,please add some information about you</p>
    <Link to='/create-profile' className="btn btn-primary my-1">
        create profile
    </Link>
    </>}
    </>;
}

Dashboard.propTypes = {
getCurrentProfile: PropTypes.func.isRequired,
deleteAccount:PropTypes.func.isRequired,
auth: PropTypes.object.isRequired,
profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps,{getCurrentProfile,deleteAccount})(Dashboard);
