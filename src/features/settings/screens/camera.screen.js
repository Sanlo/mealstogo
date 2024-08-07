import { CameraView, useCameraPermissions } from "expo-camera";
import React, { useContext, useRef } from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { CameraType } from "expo-camera/build/legacy/Camera.types";
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/anthentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileCamera = styled(CameraView)`
  height: 100%;
  width: 100%;
`;

export const CameraScreen = ({ navigation }) => {
  const [permission, reqPermission] = useCameraPermissions();
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      console.log("photo uri:", photo.uri);
      navigation.goBack();
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    // Camera permission is not granted
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={reqPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        facing={CameraType.front}
      ></ProfileCamera>
    </TouchableOpacity>
  );
};
