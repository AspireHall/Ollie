import { useGetOpenSeaByCreationDateQuery } from "../../Features/openSeaApi";
import NftPlaceHolder from "../../Assets/NftBanner.png";
import classes from "./NFTsPage.module.css";

const NFTsByCreationDate = () => {
  const { data, error, isLoading } = useGetOpenSeaByCreationDateQuery();
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error on Page</div>;
  }
  console.log(data);
  return (
    <>
      <div className={classes.bodyHeader}>Collection By Creation Date</div>
      {data?.collections.map((item) => (
        <div className={classes.cardContainer} key={item.opensea_url}>
          <a href={item.opensea_url}>
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
                <p className={classes.text}></p>
              </div>
              <div className={classes.rightContainer}>
                <h1 className={classes.subTitle}>Creation Date</h1>
                <p className={classes.text}></p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default NFTsByCreationDate;
