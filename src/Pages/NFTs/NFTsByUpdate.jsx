import { useGetOpenSeaNFTsQuery } from "../../Features/blockSpanApi";
import NftPlaceHolder from "../../Assets/NftBanner.png";
import classes from "./NFTsPage.module.css";

const NFTsByUpdate = () => {
  const { data, error, isLoading } = useGetOpenSeaNFTsQuery();
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error on Page</div>;
  }
  return (
    <>
      <div className={classes.bodyHeader}>Collection By Latest Update</div>
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
                <h1 className={classes.subTitle}>Floor</h1>
                <p className={classes.text}>
                  {item.stats.floor_price.toFixed(4)}&nbsp;&nbsp;
                  {item.stats.floor_price_symbol}
                </p>
              </div>
              <div className={classes.rightContainer}>
                <h1 className={classes.subTitle}>24hr Volume</h1>
                <p className={classes.text}>
                  {item.stats.one_day_volume.toFixed(4)}&nbsp;&nbsp;
                  {item.stats.floor_price_symbol}
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default NFTsByUpdate;
