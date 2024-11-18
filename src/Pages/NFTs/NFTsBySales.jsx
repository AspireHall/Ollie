import { useGetOpenSeaSalesQuery } from "../../Features/blockSpanApi";
import NftPlaceHolder from "../../Assets/NftBanner.png";
import classes from "./NFTsPage.module.css";

const NFTsBySales = () => {
  const { data, error, isLoading } = useGetOpenSeaSalesQuery();
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error on Page</div>;
  }

  function formatNumberWithK(str) {
    const number = Number(str);

    // Handle invalid number
    if (isNaN(number)) {
      return "Invalid number";
    }

    // If the number is 1000 or more, divide by 1000 and add "K"
    if (number >= 1000 && number < 1000000) {
      const numberInK = (number / 1000).toFixed(1); // Convert to "K" format with one decimal
      return `${parseFloat(numberInK).toLocaleString()}K`; // Add thousands separator
    }

    // If the number is 1 million or more, handle "M" format
    if (number >= 1000000) {
      const numberInM = (number / 1000000).toFixed(1); // Convert to "M" format with one decimal
      return `${parseFloat(numberInM).toLocaleString()}M`; // Add thousands separator
    }

    // For numbers less than 1000, just return the number with a separator
    return number.toLocaleString(); // Add thousands separator for numbers below 1000
  }
  console.log(data);
  return (
    <>
      <div className={classes.bodyHeader}>Collection By Sales</div>
      {data?.results.map((item) => (
        <div className={classes.cardContainer} key={item.key}>
          <a href={item.exchange_url}>
            <img
              className={classes.bannerImage}
              src={item.image_url ? item.image_url : NftPlaceHolder}
              alt="NFT Image not Present"
            />
            <label className={classes.cardtitle}>
              {item.name.slice(0, 25)}...
            </label>
            <div className={classes.container}>
              <div className={classes.leftContainer}>
                <h1 className={classes.subTitle}>Total Sales</h1>
                <p className={classes.text}>
                  {formatNumberWithK(item.total_sales)}
                </p>
              </div>
              <div className={classes.rightContainer}>
                <h1 className={classes.subTitle}>Average Price</h1>
                <p className={classes.text}>
                  {parseFloat(Number(item.one_day_average_price).toFixed(5))}
                  ETH
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default NFTsBySales;
