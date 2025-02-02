import React from 'react';
import { Tilt } from 'react-tilt'; // or the correct named export
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import PropTypes from 'prop-types';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div 
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

          </div>

        </motion.div>
      </Tilt>
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I'm currently studying computer engineering at ENIT, where I've developed a strong passion for software engineering, cloud technologies, and AI development. I enjoy creating scalable and efficient systems, with a special focus on leveraging cloud platforms and artificial intelligence to solve complex problems. As a quick learner, I thrive on tackling new challenges and delivering user-friendly, impactful solutions. I’m excited by how AI can transform industries and improve everyday life, and I aim to contribute to cutting-edge innovations in this field. Let's work together to turn your ideas into reality and create innovative systems that make a difference.
        </motion.p>
        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
            // Pass the index explicitly along with the service data
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired, // index is required and should be a number
  title: PropTypes.string.isRequired, // title is required and should be a string
  icon: PropTypes.string.isRequired, // icon should be a string (URL)
};

export default SectionWrapper(About, "about");
