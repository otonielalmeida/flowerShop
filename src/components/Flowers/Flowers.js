import { Fragment } from "react";
import AvailableFlowers from "./AvailableFlowers";
import FlowersSummary from "./FlowersSummary";
const Flowers = () => {
  return (
    <Fragment>
      <FlowersSummary />
      <AvailableFlowers />
    </Fragment>
  );
};

export default Flowers;
