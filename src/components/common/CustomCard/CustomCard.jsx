import "./CustomCard.css";

export const CustomCard = ({ title, image, description }) => {
    return (
        <div className="cardDesign">
            <div className="cardImage">{image}</div>
            <div className="cardTitle">{title}</div>
            <div className="cardDescription">{description}</div>
        </div>
    );
}