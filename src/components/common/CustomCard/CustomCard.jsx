import "./CustomCard.css";

export const CustomCard = ({ title, user, image, description }) => {
    return (
        <div className="cardDesign">
            <div className="cardImage"><img src={image} alt={title} /></div>
            <div className="cardUser">{user}</div>
            <div className="cardTitle">{title}</div>
            <div className="cardDescription">{description}</div>
        </div>
    );
}