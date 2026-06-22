import SectionHeader from '../SectionHeader.jsx';
import { assets } from '../../constants/assets.js';
import { workExperiences } from '../../constants/index.js';

const WorkExperience = () => {
  return (
    <section className="c-space my-12 lg:my-16" id="experience">
      <SectionHeader
        title="My Work Experience"
        subtitle="Freelance delivery, product builds, and open roles — focused on shipping real software."
      />

      <div className="mt-12 rounded-lg bg-black-200 border border-black-300">
        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
          {workExperiences.map((item) => (
            <div key={item.id} className="work-content_container group">
              <div className="flex flex-col h-full justify-start items-center py-2">
                <div className="work-content_logo">
                  <img className="w-full h-full" src={item.icon} alt="" />
                </div>

                <div className="work-content_bar" />
              </div>

              <div className="sm:p-5 px-2.5 py-5">
                <p className="font-bold text-white-800">{item.name}</p>
                <p className="text-sm mb-4 md:mb-5 text-white-700 md:text-white-600">
                  {item.pos}
                  <span className="text-white-600"> · </span>
                  <span>{item.duration}</span>
                </p>
                <p className="text-white-700 md:text-white-600 text-[0.95rem] leading-relaxed group-hover:text-white-800 transition-colors duration-300">
                  {item.title}
                </p>
                {item.id === 3 ? (
                  <a
                    href={assets.media.cv}
                    className="inline-flex mt-4 text-sm text-[#8fb7ff] hover:text-white transition-colors underline underline-offset-2"
                  >
                    Download CV
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
