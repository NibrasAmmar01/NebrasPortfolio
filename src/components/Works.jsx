import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import PropTypes from 'prop-types';

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className='w-full hfull object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")
              }
              className="black-gradient w-10 h-10 rounded-full flex justify-center cursor-pointer"
            >
              <img 
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
              <p className={`${styles.sectionSubText} text-center`}>My Work</p>
              <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          During my educational journey and internships, I’ve had the opportunity to work on a variety of projects that have helped me develop a strong foundation in both theoretical knowledge and practical application. These projects range from web development and AI-driven technologies to immersive 3D models, each contributing to my growth as a developer. I am passionate about creating solutions that are both innovative and user-centric, and through these experiences, I’ve been able to refine my skills and explore new areas of technology. Below are some of the projects that highlight my progress and achievements so far.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  );
};
ProjectCard.propTypes = {
  index: PropTypes.number.isRequired, // index is required and should be a number
  name: PropTypes.string.isRequired, // name is required and should be a string
  description: PropTypes.string.isRequired, // description is required and should be a string
  tags: PropTypes.arrayOf(
      PropTypes.shape({
          name: PropTypes.string.isRequired, // tag name is required and should be a string
          color: PropTypes.string.isRequired, // tag color is required and should be a string
      })
  ).isRequired, // tags should be an array of objects with name and color fields
  image: PropTypes.string.isRequired, // image should be a string (URL)
  source_code_link: PropTypes.string.isRequired, // source_code_link should be a string (URL)
};

export default SectionWrapper(Works, "");