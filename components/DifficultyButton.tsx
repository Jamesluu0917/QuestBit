import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import DifficultyPopUp from "./DifficultyPopUp";
import { getButtonImage } from "../utils/utils";

interface DifficultyButtonProps {
  text: string;
  questbitId?: string;
  isLoading?: boolean;
  imageStyle?: string;
  textStyle?: string;
  color?: "red" | "blue" | "pink" | "yellow" | "green";
  onUpdate?: (value: string) => void;
}

const DifficultyButton: React.FC<DifficultyButtonProps> = ({
  text,
  questbitId,
  isLoading = false,
  imageStyle = {},
  textStyle = {},
  color = "green",
  onUpdate,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        className="items-center justify-center"
        onPress={() => setModalVisible(true)}
      >
        <Image
          source={getButtonImage(color)}
          className={`w-[25vw] h-10 ${imageStyle}`}
        />
        <Text
          className={`text-white font-zcool absolute text-xl pb-1 ${textStyle}`}
        >
          {text}
        </Text>
        {isLoading && (
          <ActivityIndicator
            animating={isLoading}
            color="#fff"
            size="small"
            className="absolute"
          />
        )}
      </TouchableOpacity>
      <DifficultyPopUp
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        initial={text}
        questbitId={questbitId}
        onUpdate={onUpdate}
      />
    </View>
  );
};

export default DifficultyButton;