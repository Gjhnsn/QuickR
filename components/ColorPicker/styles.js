import styled from "styled-components/native";

export const Red = styled.Pressable`
  background-color: #ff453a;
  flex: 1;
  height: 50px;
  width: 50px;
  border-width: 2px;
  border-top-left-radius: 10px;
`;

export const Orange = styled.Pressable`
  background-color: #ff9f0a;
  width: 50px;
  flex: 1;
  height: 50px;
`;

export const Yellow = styled.Pressable`
  background-color: #ffd60a;
  width: 50px;
  flex: 1;
  height: 50px;
`;

export const Green = styled.Pressable`
  background-color: #32d74b;
  width: 50px;
  flex: 1;
  height: 50px;
`;

export const LightBlue = styled.Pressable`
  background-color: #64d2ff;
  width: 50px;
  flex: 1;
  height: 50px;
`;

export const Blue = styled.Pressable`
  background-color: #0a84ff;
  width: 50px;
  flex: 1;
  height: 50px;
`;

export const Indigo = styled.Pressable`
  background-color: #5e5ce6;
  width: 50px;
  flex: 1;
  height: 50px;
  border-top-right-radius: 10px;
`;

export const Pink = styled.Pressable`
  background-color: #ff2d55;
  width: 50px;
  flex: 1;
  height: 50px;
`;

export const Purple = styled.Pressable`
  background-color: #bf5af2;
  width: 50px;
  flex: 1;
  height: 50px;
`;

export const Lime = styled.Pressable`
  background-color: #cedc3a;
  width: 50px;
  flex: 1;
  height: 50px;
`;

export const Teal = styled.Pressable`
  background-color: #009688;
  width: 50px;
  flex: 1;
  height: 50px;
`;

export const ColorGrid = styled.View`
  width: 100%;
  overflow: hidden;
  background-color: #3b3b3d;
  height: 100px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* border: 2px solid white; */
  justify-content: flex-start;
`;

export const ColorGridRow = styled.View`
  display: flex;
  width: 100%;
  height: 50%;
  flex-direction: row;
`;
