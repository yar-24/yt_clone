import { AccessTimeOutlined, PlaylistPlayOutlined, TitleTwoTone } from "@material-ui/icons";
import styled from "styled-components";
import { tablet } from "../responsive";
import { videoItems } from "../data";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  margin-top: 50px;
  z-index: 1;
  padding: 10px;
  width: 97%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: initial;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 20px;
  padding: 20px;
  padding-left: 19%;
  position: initial;
  background-color: transparent;
  flex-direction: row;
  ${tablet({paddingLeft: "15%"})}
`;

const Info = styled.div`
  diplay: flex;
  flex-wrap: wrap;
  margin: 7px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 50%;
  cursor: pointer;
`;

const Image = styled.img`
  display: flex;
  width: 100%;
  height: 150px;
  border-radius: 3px;
  object-fit: cover;
  align-items: center;
  justify-content: center;
  ${tablet({ })}
`;

const ContainerImgSubs = styled.div`
  flex: 1;
  height: 100%;
  width: 50px;
`;

const ImgSubs = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding-top: 10px;
  margin-right: 10px;
`;

const Desc = styled.div`
  width: 200;
  margin-left: 50px;
  margin-top: -50%;
  padding-top: 10px;
  height: 20vh;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const Channel = styled.p`
  padding-top: 5px;
  color: #858686;
`;

const Watch = styled.p`
  color: #858686;
`;
const Date = styled.p`
  color: #858686;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Wrapper>
        {videoItems.map((item) => (
        <Info>
          <Image src={item.img} />
          <ContainerImgSubs>
            <ImgSubs src={item.imgSubs} />
          </ContainerImgSubs>
          <Desc>
              <Title>{item.title}</Title>
              <Channel>{item.channel}</Channel>
              <Watch>{item.watch}</Watch>
              <Date>{item.date}</Date>
          </Desc>
          </Info>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Product;
