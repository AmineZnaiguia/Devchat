import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd';
const ProfileTop = ({profile:{
    status,
    company,
    location,
    website,
    social,
    user:{login, avatar}
}}) => {
    const IconFont = Icon.createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
      });
    return (
        <div class="profile-top bg-antd p2">
            <img className="round-img my-1" 
            src={avatar}
            />

    <h1 style={{color:'#fff'}}> { login }</h1>
            <p> {status} at  <span>{ company }</span></p>
<p>{location}</p>
            <div className="icons my1">
            <Icon type="facebook" className='icon-size' />
            <Icon type="twitter" className='icon-size' />
            <Icon type="linkedin" className='icon-size'/>
            </div>
        </div>
    )
}

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileTop
