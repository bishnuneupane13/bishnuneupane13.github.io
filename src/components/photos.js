import image1 from '../image1.jpg';
import image2 from '../image2.jpg';
import image3 from '../image3.jpg';
import image4 from '../image4.jpg';
import image5 from '../image5.jpg';
import logo from '../logo.png';
import pic from '../pic.png';
import image6 from '../image6.jpg';
import image7 from '../image7.jpg';
import profile from '../profile.png';

function Photos() {
  return (
    <div className="photo-section">
      <h2>Photo Gallery</h2>

      <div className="photo-list">
        <img src={image3} alt="Bishnu Neupane - Personal Photo 1" />
        <img src={logo} alt="Bishnu Neupane - Official Logo" />
        <img src={image4} alt="Bishnu Neupane - Personal Photo 2" />
        <img src={pic} alt="Bishnu Neupane - Profile Illustration" />
        <img src={image2} alt="Bishnu Neupane - Personal Photo 3" />
        <img src={image1} alt="Bishnu Neupane - Personal Photo 4" />
        <img src={profile} alt="Bishnu Neupane - Professional Profile" />
        <img src={image5} alt="Bishnu Neupane - Personal Photo 5" />
        <img src={image6} alt="Bishnu Neupane - Personal Photo 6" />
        <img src={image7} alt="Bishnu Neupane - Personal Photo 7" />
      </div>
    </div>
  );
}

export default Photos;