import { assets } from '../../constants/assets.js';

import { profile } from '../../constants/profile.js';



const Footer = () => {

  return (

    <footer className="c-space pt-7 pb-3 border-t border-black-300">

      <div className="footer-inner">

        <div className="flex gap-3">

          <a

            href={profile.socials.github}

            target="_blank"

            rel="noreferrer"

            className="social-icon"

            aria-label="GitHub"

          >

            <img src={assets.icons.github} alt="" className="w-1/2 h-1/2" />

          </a>

          <a

            href={profile.socials.linkedin}

            target="_blank"

            rel="noreferrer"

            className="social-icon"

            aria-label="LinkedIn"

          >

            <img src={assets.icons.linkedin} alt="" className="w-1/2 h-1/2" />

          </a>

        </div>



        <p className="text-white-600 text-sm">{profile.copyright}</p>

      </div>

    </footer>

  );

};



export default Footer;

