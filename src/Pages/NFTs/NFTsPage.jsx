import { useState } from "react";
import { useGetOpenSeaRankingsQuery } from "../../Features/blockSpanApi";
import classes from "./NFTsPage.module.css";
import NftPlaceHolder from "../../assets/NftBanner.png";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import looksRare from "../../assets/icon-lightbg.svg";
import openSea from "../../Assets/opensealogo.png";
import magicEden from "../../Assets/magicEdenLogo.png";
import { green, red, yellow, purple } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";
import NFTsRanking from "./NFTsRanking";
import NFTsByUpdate from "./NFTsByUpdate";
import NFTsBySales from "./NFTsBySales";
import NFTsByCreationDate from "./NFTsByCreationDate";

const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: green[600],
    "&:hover": {
      backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: green[500],
  },
}));
const RedSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: red[500],
    "&:hover": {
      backgroundColor: alpha(red[500], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: red[500],
  },
}));
const YellowSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: yellow[500],
    "&:hover": {
      backgroundColor: alpha(yellow[500], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: yellow[500],
  },
}));
const PurpleSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: purple[300],

    "&:hover": {
      backgroundColor: alpha(purple[300], theme.palette.action.hoverOpacity),
    },
  },

  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: purple[300],
  },
}));

const NFTsPage = () => {
  const {
    data: rankingData,
    error: rankingError,
    isLoading: rankingIsLoading,
  } = useGetOpenSeaRankingsQuery();
  const [checkedNftRanking, setCheckedNftRanking] = useState(true);
  const [checkedLatestNft, setCheckedLatestNft] = useState(false);
  const [checkedNftSales, setCheckedNftSales] = useState(false);
  const [checkedNftCreation, setCheckedNftCreation] = useState(false);

  if (rankingIsLoading) {
    return <div>Loading</div>;
  }
  if (rankingError) {
    return <div>Error on Page</div>;
  }

  const handleChangeNftRanking = (event) => {
    setCheckedNftRanking(event.target.checked);
  };
  const handleChangeLatestNft = (event) => {
    setCheckedLatestNft(event.target.checked);
  };
  const handleChangeNftSales = (event) => {
    setCheckedNftSales(event.target.checked);
  };
  const handleChangeNftCreation = (event) => {
    setCheckedNftCreation(event.target.checked);
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftHeader}></div>
      <div className={classes.middleHeader}>
        {rankingData?.results.slice(0, 1).map((item) => (
          <div className={classes.nftHeaderContainer} key={item.key}>
            <a href={item.exchange_url}>
              <img
                className={classes.nftHeaderImage}
                src={
                  item.banner_image_url ? item.banner_image_url : NftPlaceHolder
                }
                alt="NFT Image not Present"
              />
              <div className={classes.subHeader}>
                <img
                  className={classes.headerNormalImage}
                  src={item.image_url}
                />
                <div className={classes.headerTitle}> {item.name}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className={classes.rightHeader}></div>
      {/*    Body Section */}

      <div className={classes.bodyContainer}>
        <div className={classes.leftMenuBar}>
          <h1>Markets</h1>
          <FormGroup>
            <div className={classes.selector}>
              {" "}
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="OpenSea"
              />
              <img className={classes.marketLogo} src={openSea} />
            </div>
            <div className={classes.selector}>
              <FormControlLabel control={<GreenSwitch />} label="Looks Rare" />
              <img className={classes.marketLogo} src={looksRare} />
            </div>
            <div className={classes.selector}>
              <FormControlLabel control={<PurpleSwitch />} label="Magic Eden" />
              <img className={classes.marketLogo} src={magicEden} />
            </div>
          </FormGroup>
          <br />
          <br />
          <h1>Type</h1>
          <FormGroup>
            <FormControlLabel
              control={
                <RedSwitch
                  checked={checkedNftRanking}
                  onChange={handleChangeNftRanking}
                />
              }
              label="By Ranking"
            />
            <FormControlLabel
              control={
                <GreenSwitch
                  checked={checkedNftSales}
                  onChange={handleChangeNftSales}
                />
              }
              label="By Sales"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={checkedNftCreation}
                  onChange={handleChangeNftCreation}
                />
              }
              label="New Nfts"
            />
            <FormControlLabel
              control={
                <YellowSwitch
                  checked={checkedLatestNft}
                  onChange={handleChangeLatestNft}
                />
              }
              label="Latest Update"
            />
          </FormGroup>
        </div>
        <div className={classes.nftSection}>
          {checkedNftRanking ? <NFTsRanking /> : null}
          {checkedLatestNft ? <NFTsByUpdate /> : null}
          {checkedNftSales ? <NFTsBySales /> : null}
          {checkedNftCreation ? <NFTsByCreationDate /> : null}
        </div>
      </div>
    </div>
  );
};

export default NFTsPage;
