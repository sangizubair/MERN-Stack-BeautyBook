// import React from 'react';
import Founder from '../../assets/images/founder.jpg';
import CoFounder from '../../assets/images/cofounder.jpg';
import MernStack from '../../assets/images/usama.jpg';
import Amna from '../../assets/images/AmnaSaleem.jpg';
import Zunera from '../../assets/images/zunaira.jpg';
import Zeenat from '../../assets/images/zeenat.jpg';
import Dua from '../../assets/images/dua.jpg';
import Horia from '../../assets/images/horia.jpg';
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin , FaInstagram  } from 'react-icons/fa';
// import insta icon
// import { FaInstagram } from 'react-icons/fa';

const Teams = ()=> {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our team</h2>
        </div> 
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Team member card - Bonnie */}
          <TeamMemberCard
            name="Amna Somroo"
            role="CEO & founder"
            avatarUrl={CoFounder}
            socialLinks={[
              // { url: "#", icon: <FaFacebook /> },
              { url: "https://www.linkedin.com/in/amna-soomro-738ab7265", icon: <FaInstagram /> },
              { url: "https://www.linkedin.com/in/amna-soomro-738ab7265", icon: <FaLinkedin /> }
            ]}
          />
            <TeamMemberCard
            name="Shafique Ahmed"
            role="Frontend Developer"
            avatarUrl={Founder}
            socialLinks={[
              { url: "https://instagram.com/shafique_ahmed079?igshid=OGQ5ZDc2ODk2ZA==", icon: <FaInstagram /> },
              { url: "https://www.linkedin.com/in/shafique-ahmed-b26028252/", icon: <FaLinkedin /> }
            ]}
          />
           <TeamMemberCard
            name="Usama Qureshi"
            role="MERN Stack Developer"
            avatarUrl={MernStack}
            socialLinks={[
              { url: "https://instagram.com/muhammadusama_369?igshid=MzNlNGNkZWQ4Mg==", icon: <FaInstagram /> },  
              { url: " https://www.linkedin.com/in/muhammad-usama-qureshi-655301225", icon: <FaLinkedin /> }
            ]}
          />
           <TeamMemberCard
            name="Amna Saleem"
            role="UI/UX Designer"
            avatarUrl={Amna}
            socialLinks={[
              { url: "https://instagram.com/amna54636?igshid=OGQ5ZDc2ODk2ZA==", icon: <FaInstagram /> },
              { url: "https://www.linkedin.com/in/theamnasaleem/?fbclid=PAAaZ_3SARRxSRtEerjQjC6IFGRRAqd_d-U8vGAWm2tl_S5obLCZFdASwsTtk", icon: <FaLinkedin /> }
            ]}
          />
           <TeamMemberCard
            name="Zunera"
            role="Marketing Handler"
            avatarUrl={Zunera}
            socialLinks={[
              { url: "https://instagram.com/zoiy_ali?utm_source=qr", icon: <FaInstagram /> },
              { url: "#", icon: <FaLinkedin /> }
            ]}
          />
           <TeamMemberCard
            name="Dua Iraj"
            role="Content Writer Intern"
            avatarUrl={Dua}
            socialLinks={[
              { url: "#", icon: <FaInstagram /> },
              { url: "https://www.linkedin.com/in/duaairaj?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <FaLinkedin /> }
            ]}
          />
           <TeamMemberCard
            name="Zeenat"
            role="Digital Marketing Intern"
            avatarUrl={Zeenat}
            socialLinks={[
              { url: "https://www.instagram.com/zeenat_arain_?igsh=MW1lOHB0M2w3NHFkaA==", icon: <FaInstagram /> },
              { url: "https://www.linkedin.com/in/zeenat-shahid-a93377240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <FaLinkedin /> }
            ]}
          />
          <TeamMemberCard
            name="Horia"
            role="Video Editor Intern"
            avatarUrl={Horia}
            socialLinks={[
              { url: "#", icon: <FaInstagram /> },
              { url: "https://www.instagram.com/huriyarasheed?igsh=MXV5emxuZTJwdGs2eQ==", icon: <FaLinkedin /> }
            ]}
          />
          {/* Repeat the TeamMemberCard component for other team members */}
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ name, role, avatarUrl, socialLinks }) {
  return (
    <div className="text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
    <img className="mx-auto mb-4 w-40 h-40 rounded-full" src={avatarUrl} alt={`${name} Avatar`} />
    <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      <a href="#">{name}</a>
    </h3>
    <p>{role}</p>
    {/* Social media links */}
    <ul className="flex justify-center mt-4 space-x-4">
      {socialLinks.map((link, index) => (
        <li key={index}>
          <a href={link.url} className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default Teams;

