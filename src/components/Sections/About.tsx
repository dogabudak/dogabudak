import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-6', {'md:grid-cols-4 md:gap-x-8': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-orange-500/50 shadow-lg md:h-40 md:w-40">
              <Image alt="about-me-image" layout="fill" objectFit="cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-2xl font-bold text-white">About Me</h2>
            {description}
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex items-center gap-x-3 rounded-lg bg-neutral-700/50 p-3" key={idx}>
                {Icon && <Icon className="h-5 w-5 shrink-0 text-orange-500" />}
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-400">{label}</span>
                  <span className="text-sm font-medium text-white">{text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
