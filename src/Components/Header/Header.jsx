import notification from '../../images/notification.svg'; 
import Avatar from '../../images/Avatar.svg'; 
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header-left">
            <a href="" className="href">Overview</a>
            <a href="" className="href">Invest</a>
            <a href="" className="href"><b>Auto-Invest</b></a>
            <a href="" className="href">My Portfolio</a>
      </div>
     
      <div className="header-right">
        <div className="language">En</div>
        
        <div className="notification">
          <img className="notification-image" src={notification}  />
          <div className="notification-count">2</div>
        </div>
          
        <img className="avatar" src={Avatar} alt="" />
      </div>
    </div>
  );
}

export default Header;
