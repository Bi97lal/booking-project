import React from 'react';
import { Link, useParams } from 'react-router-dom';
import logoImage from '../image/2 (1).png';
import circit1Image from '../image/undraw_hello_re_3evm.svg';
import circit2Image from '../image/undraw_freelancer_re_irh4.svg';
import circitImage from '../image/undraw_proud_coder_re_exuy.svg';

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    width: '100%',
    backgroundColor: '#A9C6F9',
    color: '#fff',
    padding: '20px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  rectangl1: {
    width: '1200px',
    height: '700px',
    backgroundColor: '#FBFBFB',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    borderRadius: '15px',
  },
  rectangl2: {
    width: '450px',
    height: '500px',
    backgroundColor: '#75A4EE',
    position: 'absolute',
    left: '75%',
    top: '47%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '15px',
  },
  textStyles1: {
    color: 'white',
    fontSize: '17px',
    position: 'absolute',
    fontWeight: 'bold',
    left: '5%',
    right: '5%',
  },
  circleStyles1: {
    width: '500px',
    height: '500px',
    backgroundColor: '#4EA4F7',
    position: 'absolute',
    left: '28%',
    top: '47%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
  },
  circleStyles2: {
    width: '380px',
    height: '380px',
    backgroundColor: '#81BAFC',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
  },
  textStyles2: {
    color: 'white',
    fontSize: '50px',
    position: 'absolute',
    top: '50%',
    left: '10%',
    padding: '20px',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '25px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '10px 20px',
    backgroundColor: '#1A8CF7',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  nestedBoxButton: {
    padding: '10px',
    backgroundColor: '#1A8CF7',
    color: '#fff',
    textAlign: 'center',
    border: 'none',
  },
};

function Course() {
  const { id } = useParams();

  const courseData = {
    frontend: {
      title: 'Front-End Developer',
      description: 'Your front-end journey starts here...',
      image: circit2Image,
    },
    ccna: {
      title: 'CCNA 2023',
      description: 'Learn the key features of computer networks...',
      image: circit1Image,
    },
    web50x: {
      title: 'Web50X',
      description: 'Dive into web app development with Python, JavaScript, and more...',
      image: circitImage,
    },
  };

  const course = courseData[id];

  return (
    <div style={styles.body}>
      <div style={styles.header}>
        <Link to="/">
          <img src={logoImage} alt="Your Logo" />
        </Link>
      </div>
      <div style={styles.rectangl1}>
        <div className="button-container">
          <button className="nested-box-button">
            <Link to={`/courses/${id}/booking`} className="nested-box-button">
              Booking
            </Link>
          </button>
        </div>
        <div style={styles.rectangl2}>
          <div style={styles.textStyles1}>
            <p>{course.title}</p>
            <p>{course.description}</p>
          </div>
        </div>
        <div style={styles.circleStyles1}>
          <div style={styles.circleStyles2}>
            <img src={course.image} alt={course.title} />
            <div style={styles.textStyles2}>
              <p>{course.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
