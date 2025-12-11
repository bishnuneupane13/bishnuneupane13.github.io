import React from 'react';
import './reviews.css';



const defaultAvatar = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

const Reviews = () => {
    const reviewsData = [
        { id: 1, name: "Sandeep K.C.", text: "Bishnu is an exceptional developer. His understanding of cybersecurity principles adds a unique layer of reliability to his frontend work.", stars: 5 },
        { id: 2, name: "Anjali Shrestha", text: "Working with Bishnu was a breeze. He writes clean, efficient code and always delivers on time.", stars: 5 },
        { id: 3, name: "Rohan Pradhan", text: "Impressed by his problem‑solving skills. He turned complex requirements into a smooth UI.", stars: 5 },
        { id: 4, name: "Nita Gurung", text: "Great character and work ethic. Bishnu pays attention to the tiny details that make a site stand out.", stars: 5 },
        { id: 5, name: "Creative Studio", text: "A talented developer with a bright future. His portfolio screams modern, responsive, and secure.", stars: 5 },
        { id: 6, name: "Ram Bahadur", text: "He is very talented and hardworking and always puts his best effort into his work. He is a great team player and always helps his team members.", stars: 5 },

    ];

    return (
        <section className="reviews-section" id="reviews">
            <div className="container section-animate" style={{ '--delay': '0.1s' }}>
                <h2 className="section-title">What People Say</h2>
                <p className="section-subtitle">Feedback about my work and character.</p>
                <div className="reviews-grid">
                    {reviewsData.map((review) => (
                        <div className="card review-card" key={review.id}>
                            <div className="review-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                                <img src={defaultAvatar} alt="Avatar" className="review-avatar" style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
                                <div className="review-info">
                                    <h3 className="review-name" style={{ margin: 0, fontSize: '1rem', color: '#fff' }}>{review.name}</h3>
                                    <div className="review-stars" style={{ color: '#ffb400' }}>
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className={`fa-solid fa-star${i < review.stars ? '' : ' fa-regular'}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="review-text" style={{ color: '#e0e0e0', lineHeight: '1.5' }}>{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;