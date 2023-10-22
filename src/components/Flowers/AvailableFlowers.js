import classes from "./AvailableFlowers.module.css";
import Card from "../UI/Card";
import FlowerItem from "./FlowerItem/FlowerItem";
const DUMMY_FLOWERS = [
  {
    id: "f1",
    name: "Lilies",
    description:
      "Lilium is a genus of herbaceous flowering plants growing from bulbs, all with large prominent flowers. They are the true lilies. Lilies are a group of flowering plants which are important in culture and literature in much of the world.",
    price: 42.75,
  },
  {
    id: "f3",
    name: "Tulips",
    description:
      "Tulips are a genus of spring-blooming perennial herbaceous bulbiferous geophytes. The flowers are usually large, showy, and brightly coloured, generally red, orange, pink, yellow, or white. They often have a different coloured blotch at the base of the tepals, internally.",
    price: 100.0,
  },
  {
    id: "f4",
    name: "Daisies",
    description:
      "Lilium is a genus of herbaceous flowering plants growing from bulbs, all with large prominent flowers. They are the true lilies. Lilies are a group of flowering plants which are important in culture and literature in much of the world.",
    price: 30.0,
  },
];
const AvailableFlowers = () => {
  const flowersList = DUMMY_FLOWERS.map((flower) => (
    <FlowerItem
      key={flower.id}
      name={flower.name}
      description={flower.description}
      price={flower.price}
      id={flower.id}
    />
  ));
  return (
    <section className={classes.flowers}>
      <Card>
        <ul>{flowersList}</ul>
      </Card>
    </section>
  );
};

export default AvailableFlowers;
