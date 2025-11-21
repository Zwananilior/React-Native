import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  children?: React.ReactNode;
  style?: any;
};

export default function IconPlaceholder({ children, style }: Props) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#161217",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "700",
  },
});
