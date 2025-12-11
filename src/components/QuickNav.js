import { NavLink } from 'react-router-dom';

function QuickNav() {
    return (
        <div className="quick-nav">
            <a href="https://bishnuneupane13.github.io/blogs/" target="_blank" rel="noopener noreferrer" className="quick-nav-item">
                <i className="fa-solid fa-newspaper"></i>
                <span>Blogs</span>
            </a>
            <a href="https://github.com/bishnuneupane13" target="_blank" rel="noopener noreferrer" className="quick-nav-item">
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/bishnuneupane13" target="_blank" rel="noopener noreferrer" className="quick-nav-item">
                <i className="fa-brands fa-linkedin"></i>
                <span>LinkedIn</span>
            </a>
            <NavLink exact to="/reviews" className="quick-nav-item" activeClassName="active">
                <i className="fa-solid fa-star"></i>
                <span>Reviews</span>
            </NavLink>
        </div >
    );
}

export default QuickNav;
