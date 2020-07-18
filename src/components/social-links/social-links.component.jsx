import React from 'react';
import './social-links.styles.scss';
import ExternalLinkIcon from '../../assets/icons/external-link.svg';
import GithubIcon from '../../assets/icons/github.svg'
import TwitterIcon from '../../assets/icons/twitter.svg'

const SocialLinks = () => (
    <div className="social-links">
        <ul>
            <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="icon">
                        <GithubIcon/>
                    </div>
                    <span className="title">Github</span>
                    <div className="icon"><ExternalLinkIcon/></div>
                </a>
            </li>

            <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="icon">
                        <TwitterIcon/>
                    </div>
                    <span className="title">Twitter</span>
                    <div className="icon"><ExternalLinkIcon/></div>
                </a>
            </li>
        </ul>
    </div>
);

export default SocialLinks;