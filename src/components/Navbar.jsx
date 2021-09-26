import {
    AccountCircleSharp,
  AppsTwoTone,
  DehazeSharp,
  Mic,
  NotificationsNoneSharp,
  Search,
  VideoCallTwoTone,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 65px;
  width: 100%;
  background-color: #191a1b;
  color: white;
  position: fixed;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  cursor: pointer;
  width: 5vh;
  margin-left: 25px;
`;

const Title = styled.h1`
  font-size: 20px;
  margin-right: 20px;
`;

const SearchContainer = styled.div`
  position: relative;
  align-items: center;
  border: 1px solid transparent;
  border-right: none;
  border-radius: 2px 0 0 2px;
  padding: 2px 6px;
  flex: 1;
  flex-basis: 0.000000001px;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
`;

const Input = styled.input`
  border: 0.5px solid grey;
  padding: 10px;
  background-color: #0e0f0f;
  width: 40vw;
  height: 20px;
  outline: none;
  color: white;
  border-right: none;
  &:focus {
    border: 0.5px solid blue;
  }
`;

const Button = styled.button`
  width: 60px;
  height: 40px;
  background-color: rgba(53, 67, 69, 0.11);
  border: 0.5px solid grey;
  cursor: pointer;
  
`;

const ButtonMic = styled.button`
  border-radius: 50%;
  background-color: #0e0f0f;
  margin-left: 10px;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
display: flex;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
              <Left>
                  <DehazeSharp style={{cursor:"pointer"}}/>
          <Image src="https://www.freepnglogos.com/uploads/youtube-vector-logo-png-9.png" />
          <Title>YouSufe</Title>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <Button>
              <Search
                style={{
                  color: "white",
                  padding: "0px",
                  textDecorationThickness: "1px",
                }}
              />
            </Button>
            <ButtonMic>
              <Mic style={{ color: "white" }} />
            </ButtonMic>
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>
            <VideoCallTwoTone />
          </MenuItem>
          <MenuItem>
            <AppsTwoTone />
          </MenuItem>
          <MenuItem>
            <NotificationsNoneSharp />
          </MenuItem>
          <MenuItem>
            <AccountCircleSharp />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
