import { SiteLogo } from './SiteLogo';

import './index.css';

const logo = {
    title: 'Logo do site de animes',
    source: '../../images/icons/site-logo.png'
};

export function NavigationTop(props) {
    return (
        <div className="nav-container">
            <SiteLogo source={logo.source} title={logo.title} />
        </div>
    );
}