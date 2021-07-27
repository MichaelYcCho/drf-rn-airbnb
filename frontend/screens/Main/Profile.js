import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";
import colors from "../../colors";
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get("screen");

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Button = styled.View`
  margin-bottom: 25px;
  border: 1px solid ${props => (props.accent ? "transparent" : colors.black)};
  border-radius: 30px;
  padding: 12.5px 0px;
  align-items: center;
  width: ${width / 1.5}px;
  background-color: ${props => (props.accent ? colors.red : "transparent")};
`;

const Text = styled.Text``;



export default () => {

  clearAsyncStorage = async () => {
    AsyncStorage.clear();
  }

  return (<Container>
    <TouchableOpacity onPress={clearAsyncStorage}>
      <Button >
        <Text>Logout</Text>
      </Button>
    </TouchableOpacity>
  </Container>


  )
};