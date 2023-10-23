import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../image/2 (1).png';




const styles = {
  header: {
    width: '100%',
    backgroundColor: '#A9C6F9',
    color: '#fff',
    padding: '20px',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '1',
  },
  headerImg: {
    width: '180px',
    height: 'auto',
    marginRight: '10px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    marginTop: '80px',
  },
  text: {
    flex: '1',
    padding: '0',
    margin: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  photo: {
    flex: '1',
    padding: '20px',
  },
  box: {
    width: '98%',
    height: '561px',
    padding: '20px',
    backgroundColor: 'rgba(153, 189, 249, 0.61)',
    borderRadius: '25px',
    position: 'relative',
  },
  boxText: {
    textAlign: 'justify',
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '0',
  },
  nestedBox: {
    width: '297px',
    height: '445px',
    backgroundColor: '#EDF4FF',
    borderRadius: '25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '4px',
    padding: '20px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
  },
  nestedBoxButton: {
    width: '48%',
    padding: '10px',
    backgroundColor: '#1A8CF7',
    color: '#fff',
    textAlign: 'center',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '5px',
  },
};

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the list of courses from your API or data source
    fetch('/get_courses/') // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching courses: ', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div style={styles.header}>
        <img src={logoImage} alt="Your Logo" style={styles.headerImg} />
      </div>
      <div style={styles.container}>
        {courses.map((course) => (
          <div key={course.id} style={styles.nestedBox}>
            <img src={course.image} alt={course.title} style={{ width: '100%', maxHeight: '200px' }} />
            <p style={{ fontWeight: 'bold', fontSize: '22.8px' }}>{course.title}</p>
            <p style={{ fontWeight: 'bold' }}>{course.description}</p>
            <div style={styles.buttonContainer}>
              <Link to={`/courses/${course.id}`} className="nested-box-button">
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
