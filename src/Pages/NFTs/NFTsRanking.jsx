import { useGetOpenSeaRankingsQuery } from "../../Features/blockSpanApi";
import classes from "./NFTsPage.module.css";
import bannerImage from "../../Assets/NftBanner.png";

const NFTsRanking = () => {
  const { data, error, isLoading } = useGetOpenSeaRankingsQuery();
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  function formatNumberWithK(str) {
    // Convert the string to a number
    const number = Number(str);
    // Handle invalid number
    if (isNaN(number)) {
      return "Invalid number";
    }
    // If the number is 1000 or more, divide by 1000 and add "K"..
    if (number >= 1000) {
      const numberInK = (number / 1000).toFixed(1); // Convert to "K" format with one decimal
      return `${parseFloat(numberInK).toLocaleString()}K`; // Add thousands separator
    }
    // For numbers less than 1000, just return the number with a separator
    return number.toLocaleString(); // Add thousands separator for numbers below 1000
  }
  return (
    <>
      <div className={classes.bodyHeader}>Collection By Ranking</div>
      {data?.results.map((item) => (
        <div className={classes.cardContainer} key={item.key}>
          <a href={item.exchange_url}>
            <img
              className={classes.bannerImage}
              src={item.image_url ? item.image_url : bannerImage}
              alt="NFT Image not Present"
            />
            <div className={classes.cardtitle}>{item.name.slice(0, 25)}...</div>
            <div className={classes.container}>
              <div className={classes.leftContainer}>
                <h1 className={classes.subTitle}>Total Sales</h1>
                <p className={classes.text}>
                  <div>{formatNumberWithK(item.total_sales)}</div>
                </p>
              </div>
              <div className={classes.rightContainer}>
                <h1 className={classes.subTitle}>Total Volume</h1>
                <p className={classes.text}>
                  {formatNumberWithK(item?.total_volume.slice(0, 8))} ETH
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default NFTsRanking;
