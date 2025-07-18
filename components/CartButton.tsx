import { images } from "@/constants";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CartButton = () => {
  const TotalItems = 10;
  return (
    <TouchableOpacity className="cart-btn" onPress={() => {}}>
      <Image source={images.bag} className="size-5" resizeMode="contain" />
      {TotalItems > 0 && (
        <View className="cart-badge">
          <Text className="cart-badge-text">{TotalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartButton;
