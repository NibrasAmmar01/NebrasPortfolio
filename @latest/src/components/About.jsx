import React from 'react';
import { Tilt } from 'react-tilt'; // or the correct named export
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ title, icon }) => {
  return (
    <div>
      <img src={icon} alt={title} />
      <p>{title}</p>
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
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default About;
