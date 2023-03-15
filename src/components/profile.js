import React from "react";
import { Component } from "react";
import "../css/profile.css";
import {  Github_UserName , Github_Repository_Name,Github_API_User , options } from '../../constant';
import {Github_link,Github_Repo_link,Twitter_link,Insta_link,Fb_link} from '../../constant'
// Github API for User

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        bio: "",
      },
    };
  }
  async componentDidMount()
  {
    const data = await fetch( Github_API_User + Github_UserName, options);
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo:json,
    })
  } 

  render() {
    const {userInfo} = this.state; 
    return (

      <>
        <div className="wrapper">
          <div className="profile-card js-profile-card">
            <div className="profile-card__img">
              <img
                src={userInfo.avatar_url}
                alt="profile card"
              />
            </div>

            <div className="profile-card__cnt js-profile-cnt">
              <div className="profile-card__name">{userInfo.name}</div>
              <div className="profile-card__txt">
                {userInfo.bio} <strong> from India</strong>
              </div>
              <div className="profile-card-loc">
                <span className="profile-card-loc__icon">
                  <svg className="icon">
                    <use xlinkHref="#icon-location"></use>
                  </svg>
                </span>

                <span className="profile-card-loc__txt">{userInfo.location}</span>
              </div>

              <div className="profile-card-inf">
                <div className="profile-card-inf__item">
                  <div className="profile-card-inf__title">{userInfo.followers}</div>
                  <div className="profile-card-inf__txt">Followers</div>
                </div>

                <div className="profile-card-inf__item">
                  <div className="profile-card-inf__title">{userInfo.following}</div>
                  <div className="profile-card-inf__txt">Following</div>
                </div>

                <div className="profile-card-inf__item">
                  <div className="profile-card-inf__title">{userInfo.public_repos}</div>
                  <div className="profile-card-inf__txt">Repo</div>
                </div>

                <div className="profile-card-inf__item">
                  <div className="profile-card-inf__title">85</div>
                  <div className="profile-card-inf__txt">Stars</div>
                </div>
              </div>

              <div className="profile-card-social">
                <a
                  href={Fb_link}
                  className="profile-card-social__item facebook"
                  target="_blank"
                >
                  <span className="icon-font">
                  <svg xmlns="http://www.w3.org/2000/svg"  className="twitter" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </span>
                </a>

                <a
                  href={Twitter_link}
                  className="profile-card-social__item twitter"
                  target="_blank"
                >
                  <span className="icon-font">
                
                    <svg xmlns="http://www.w3.org/2000/svg" className="twitter" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </span>
                </a>

                <a
                  href={Insta_link}
                  className="profile-card-social__item instagram"
                  target="_blank"
                >
                  <span className="icon-font">
                  <svg xmlns="http://www.w3.org/2000/svg" className="twitter" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </span>
                </a>

                <a
                  href={Github_link}
                  className="profile-card-social__item github"
                  target="_blank"
                >
                  <span className="icon-font">
                  <svg xmlns="http://www.w3.org/2000/svg" className="twitter" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </span>
                </a>

                <a
                  href={Github_Repo_link}
                  className="profile-card-social__item link"
                  target="_blank"
                >
                  <span className="icon-font">
                  <svg xmlns="http://www.w3.org/2000/svg" className="twitter" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>
                  </span>
                </a>
              </div>

              <div className="profile-card-ctr">
                <button className="profile-card__button button--blue js-message-btn">
                 <a href={Github_link} >More Projects</a>
                </button>
                <button className="profile-card__button button--orange">
                  Follow
                </button>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }
}
export default Profile;
