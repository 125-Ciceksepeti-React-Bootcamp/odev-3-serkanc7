import './Header.scss';
import logo from "@/assets/svg/logo.svg";
import searchSvg from '@/assets/svg/search.svg';
import profile from '@/assets/svg/profile.svg';

function Header({ searchTerm, setSearchTerm }) {

    //Hande Search
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <header className="header">
            <div className="header__container container">
                <a href="/" className="header__logo">
                    <img src={logo} alt="logo" />
                </a>
                <div className="header__search">
                    <input
                        type="text"
                        className="header__input"
                        placeholder="What are you looking for?"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <img className="header__input-svg" src={searchSvg} alt="search" />
                </div>
                <a href="https://github.com/serkanc7" target="_blank" rel="noreferrer" className="header__profile">
                    <img src={profile} alt="profile" />
                </a>
            </div>
        </header>
    )
}

export default Header;