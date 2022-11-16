type ItemProps = {
  imageUrl: string;
  title: string;
};

const Item = ({ imageUrl, title }: ItemProps) => {
  return (
    <div className="items">
      <figure>
        <img src={imageUrl} />
      </figure>
      <div className="info-product">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Item;
