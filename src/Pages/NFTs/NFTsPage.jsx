import { useGetOpenSeaNFTsQuery } from "../../Features/blockSpanApi";
import classes from "./NFTsPage.module.css";
import NftPlaceHolder from "../../Assets/NftBanner.png";

const NFTsPage = () => {
  const { data, error, isLoading } = useGetOpenSeaNFTsQuery();

  if (isLoading) {
    return <div>Loading.</div>;
  }
  if (error) {
    return <div>Error on Page</div>;
  }
  console.log(data);
  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}>New NFT Collections</div>
      {data?.results.map((item) => (
        <div className={classes.cardContainer} key={item.key}>
          <a href={item.exchange_url}>
            <img
              className={classes.bannerImage}
              src={item.image_url ? item.image_url : NftPlaceHolder}
              alt="NFT Image not Present"
            />
            <div className={classes.titleContainer}>
              <h1 className={classes.title}>{item.name.slice(0, 20)}...</h1>
            </div>

            <div className={classes.container}>
              <div className={classes.leftContainer}>
                <h1 className={classes.subTitle}>Floor:</h1>
                <p className={classes.text}>
                  {item.stats.floor_price.toFixed(3)}&nbsp;&nbsp;
                  {item.stats.floor_price_symbol}
                </p>
              </div>
              <div className={classes.rightContainer}>
                <h1 className={classes.subTitle}>24hr Volume</h1>
                <p className={classes.text}>
                  {item.stats.one_day_volume.toFixed(3)}
                  {item.stats.floor_price_symbol}
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NFTsPage;
