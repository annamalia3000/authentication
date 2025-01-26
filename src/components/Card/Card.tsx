import classes from "./card.module.css"

type CardProps = {
  img: string;
  title: string;
  content: string;
};

export const Card: React.FC<CardProps> = ({ img, title,content }) => {
    return (
      <div className={classes["card-container"]}>
          <img src={img} alt={title} className={classes["card-img"]} />
          <div className={classes["card-content"]}>
          <h2 className={classes["card-title"]}>{title}</h2>
          <span className={classes["card-text"]}>{content}</span>
          </div>
      </div>
    )
  }