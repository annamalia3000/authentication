import {Card} from '../Card/Card';
import classes from "./news.module.css";

type NewsItem = {
  id: number;
  title: string;
  image: string
  content: string;
};

type NewsProps = {
  news: NewsItem[];
};

export const News: React.FC<NewsProps> = ({ news }) => {
  return (
    <div className={classes["news-container"]}>
      {news.map((item) => (
        <Card
        key={item.id}
        img={item.image}
        title={item.title}
        content={item.content}
        />
      ))}
    </div>
  );
};
