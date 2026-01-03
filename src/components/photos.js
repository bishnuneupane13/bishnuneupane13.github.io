import image1 from '../medias/image1.jpg';
import image2 from '../medias/image2.jpg';
import image3 from '../medias/image3.jpg';
import image4 from '../medias/image4.jpg';
import image5 from '../medias/image5.jpg';
import image6 from '../medias/image6.jpg';
import image7 from '../medias/image7.jpg';
import image8 from '../medias/image8.jpg';
import image9 from '../medias/image9.jpg';


import logo from '../medias/logo.png';
import pic from '../medias/pic.png';
import profile from '../medias/profile.png';


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
        <img src={image8} alt="Bishnu Neupane - Personal Photo 8" />
        <img src={image9} alt="Bishnu Neupane - Personal Photo 9" />
      </div>
    </div>
  );
}

export default Photos;