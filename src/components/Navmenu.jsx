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
  width: 18%;
  ${tablet({ width: "6%" })};
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
  ${tablet({
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
    marginTop: "25px",
    backgroundColor: "transparent"
  })};
`;

const MenuItemTambahan = styled.div`
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
  ${tablet({ display: "none" })};
`;

const Hr = styled.div`
  background-color: #eee;
  border: none;
  height: 2px;
  margin: 9px 10px;
  ${tablet({ display: "none" })};
`;

const Title = styled.p`
  display: flex;
  font-size: 15px;
  position: absolute;
  padding-left: 25%;
  ${tablet({
    textAlign: "center",
    padding: "5px",
    marginTop: "45px",
    fontSize: "10px"
  })};
`;

const ImgSubs = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding-left: 4%;
`;

const Text = styled.h1`
  font-size: 14px;
  margin: 5px;
  padding-left: 15px;
  color: #8f8a83;
  ${tablet({
    display: "none",
  })};
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
        <MenuItemTambahan>
          <HistorySharp className="items" />
          <Title>Histori</Title>
        </MenuItemTambahan>
        <MenuItemTambahan>
          <OndemandVideoOutlined className="items" />
          <Title>Video Anda</Title>
        </MenuItemTambahan>
        <MenuItemTambahan>
          <AccessTimeOutlined className="items" />
          <Title>Tonton nanti</Title>
        </MenuItemTambahan>
        <MenuItemTambahan>
          <ThumbUpAltOutlined className="items" />
          <Title>Video yang disukai</Title>
        </MenuItemTambahan>
        <MenuItemTambahan>
          <PlaylistPlayOutlined className="items" />
          <Title>Music</Title>
        </MenuItemTambahan>
        <Hr />
        <Text>SUBSCRIPTION</Text>
        <MenuItemTambahan>
          <ImgSubs src="https://images.pexels.com/photos/5012108/pexels-photo-5012108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <Title>Siskaeee</Title>
        </MenuItemTambahan>
        <MenuItemTambahan>
          <ImgSubs src="https://images.pexels.com/photos/6205486/pexels-photo-6205486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <Title>Edi Santososro</Title>
        </MenuItemTambahan>
        <MenuItemTambahan>
          <ImgSubs src="https://images.pexels.com/photos/5538001/pexels-photo-5538001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <Title>koleksi</Title>
        </MenuItemTambahan>
      </Wrapper>
    </Container>
  );
};

export default Navmenu;
