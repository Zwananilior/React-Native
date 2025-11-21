import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import IconPlaceholder from "./IconPlaceholder";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const isSmall = SCREEN_WIDTH < 360;

type Props = {
  symbol: string;      
  label: string;       
  value: string;       
  balance?: string;    
  showCaret?: boolean; 
};

export default function CurrencyCard({
  symbol,
  label,
  value,
  balance = "",
  showCaret = true,
}: Props) {
  return (
    <View style={styles.card}>
     
      <View style={styles.topRow}>
        <IconPlaceholder style={styles.iconWrap}>{symbol}</IconPlaceholder>

        <View style={{ marginLeft: 8 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.labelText}>{label}</Text>
            {showCaret ? <Text style={styles.caret}>▾</Text> : null}
          </View>
        </View>

        <View style={{ flex: 1 }} />
       
      </View>

     
      <View style={styles.valueRow}>
        <Text style={styles.bigValue}>{value}</Text>
      </View>

     
      <View style={styles.bottomRow}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <View style={{ flex: 1 }} />
        <Text style={styles.bottomBalance}>{balance}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "transparent",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  iconWrap: {
    backgroundColor: "#0f0b10",
  },
  labelText: {
    color: "#e9e6ee",
    fontSize: 14,
    marginRight: 6,
    fontWeight: "600",
  },
  caret: {
    color: "#a9a2b0",
    fontSize: 12,
    marginLeft: 2,
  },

  valueRow: {
    marginTop: 2,
  },
  bigValue: {
    color: "#ffffff",
    fontWeight: "900",
    fontSize: isSmall ? 44 : 58,
    lineHeight: isSmall ? 46 : 62,
    letterSpacing: 0.3,
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  balanceLabel: {
    color: "#9b93a0",
    fontSize: 12,
  },
  bottomBalance: {
    color: "#a89fb0",
    fontSize: 12,
  },
});
