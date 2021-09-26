import {
  AccessTimeOutlined,
  CollectionsBookmarkOutlined,
  ExploreOutlined,
  HistorySharp,
  HomeSharp,
  OndemandVideoOutlined,
  PlaylistPlayOutlined,
  SubscriptionsOutlined,
  ThumbUpAltOutlined,
  VideoLibraryOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { tablet } from "../responsive";
import components from "../components/components.css";

const Container = styled.div`
  ${tablet({ paddingTop: "50px" })}
  padding-top: 10vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: #191b1c;
  color: white;
  height: 100%;
  overflow-y: hidden;
  width: 18%;
  ${tablet({ width: "10%" })};
`;

const MenuItem = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin: 7px;
  padding: 4px;
  :hover {
    background-color: #242728;
  }
  &:focus {
    background-color: grey;
  }
`;

const Hr = styled.div`
  background-color: #eee;
  border: none;
  height: 2px;
  margin: 9px 10px;
`;

const Title = styled.p`
  font-size: 15px;
  position: absolute;
  padding-left: 25%;
  ${tablet({
    fonttSize: "10px",
    textAlign: "center",
    paddingBottom: "20px",
    flexDirection: "space-between",
  })};
`;

const ImgSubs = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding-left: 4%;
`;

const Navmenu = () => {
  return (
    <Container>
      <Wrapper>
        {/* <Scrollview/> */}
        <MenuItem>
          <HomeSharp className="items" />
          <Title>Beranda</Title>
        </MenuItem>
        <MenuItem>
          <ExploreOutlined className="items" />
          <Title>Eksplorasi</Title>
        </MenuItem>
        <MenuItem>
          <SubscriptionsOutlined className="items" />
          <Title>Subcription</Title>
        </MenuItem>
        <Hr />
        <MenuItem>
          <VideoLibraryOutlined className="items" />
          <Title>koleksi</Title>
        </MenuItem>
        <MenuItem>
          <HistorySharp className="items" />
          <Title>Histori</Title>
        </MenuItem>
        <MenuItem>
          <OndemandVideoOutlined className="items" />
          <Title>Video Anda</Title>
        </MenuItem>
        <MenuItem>
          <AccessTimeOutlined className="items" />
          <Title>Tonton nanti</Title>
        </MenuItem>
        <MenuItem>
          <ThumbUpAltOutlined className="items" />
          <Title>Video yang disukai</Title>
        </MenuItem>
        <MenuItem>
          <PlaylistPlayOutlined className="items" />
          <Title>Music</Title>
        </MenuItem>
        <Hr />
        <h1
          style={{
            fontSize: 14,
            paddingLeft: "9%",
            margin: 5,
            color: "#8F8A83",
          }}
        >
          SUBSCRIPTION
        </h1>
        <MenuItem>
          <ImgSubs src="https://images.pexels.com/photos/5012108/pexels-photo-5012108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <Title>Siskaeee</Title>
        </MenuItem>
        <MenuItem>
          <ImgSubs src="https://images.pexels.com/photos/6205486/pexels-photo-6205486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <Title>Edi Santososro</Title>
        </MenuItem>
        <MenuItem>
          <ImgSubs src="https://images.pexels.com/photos/5538001/pexels-photo-5538001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <Title>koleksi</Title>
        </MenuItem>
      </Wrapper>
    </Container>
  );
};

export default Navmenu;
