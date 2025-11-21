import React from "react";
import {
  Dimensions,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CurrencyCard from "../../components/CurrencyCard";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const isSmall = SCREEN_WIDTH < 360;

export default function ExchangeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#0b0709" />
      <View style={styles.container}>
       
        <View style={styles.headerRow}>
          <Pressable style={styles.iconBtn}>
            <Text style={styles.headerChevron}>‹</Text>
          </Pressable>

          <Text style={styles.headerTitle}>Exchange</Text>

          <View style={styles.rightBellWrap}>
            <Pressable style={styles.iconBtn}>
              <Text style={styles.bell}>🔔</Text>
            </Pressable>
            <View style={styles.notifyDot} />
          </View>
        </View>

        
        <View style={styles.cardBlock}>
          
          <CurrencyCard
            symbol="⟠"
            label="ETH"
            value="12,695"
            balance="293.0187"
            showCaret={true}
          />

        
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <View style={styles.swapCircle}>
              <Text style={styles.swapIcon}>⇅</Text>
            </View>
          </View>

         
          <CurrencyCard
            symbol="$"
            label="USD"
            value="43,937.4"
            balance="12,987.21"
            showCaret={true}
          />
        </View>

        <Text style={styles.rateText}>1 ETH = 3,461.02 USD</Text>

        <Pressable style={styles.buyBtn}>
          <Text style={styles.buyBtnText}>Buy ETH</Text>
        </Pressable>

        <View style={styles.infoBox}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Estimate fee</Text>
            <Text style={styles.infoValue}>4.28 usd</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>You will recieve</Text>
            <Text style={styles.infoValue}>43,941.68 USD</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Spread</Text>
            <Text style={styles.infoValue}>0.2%</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Gas fee</Text>
            <Text style={styles.infoValue}>0.0045 ETH</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}


const PAD = 18;
const CARD_RADIUS = 20;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0b0709",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: PAD,
    alignItems: "center",
  },

  headerRow: {
    width: "100%",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
    marginBottom: 8,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerChevron: {
    color: "#ffffff",
    fontSize: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  rightBellWrap: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  bell: { color: "#fff", fontSize: 18 },
  notifyDot: {
    position: "absolute",
    right: 8,
    top: 8,
    width: 10,
    height: 10,
    borderRadius: 6,
    backgroundColor: "#ff6fa3",
    borderWidth: 1.5,
    borderColor: "#0b0709",
  },

  cardBlock: {
    width: "100%",
    borderRadius: CARD_RADIUS,
    backgroundColor: "rgba(255,255,255,0.03)",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 8,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 4,
  },

  dividerRow: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 6,
    overflow: "visible",
  },
  dividerLine: {
    position: "absolute",
    top: "50%",
    left: -12,
    right: -12,
    width: "100%",
    height: 1.2,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  swapCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#0f0b10",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.04)",
    zIndex: 2,
  },
  swapIcon: { color: "#d6d1d8", fontSize: 20 },

  rateText: {
    color: "#bdb6c6",
    marginTop: 12,
    fontSize: 12,
    textAlign: "center",
  },

  buyBtn: {
    marginTop: 16,
    width: "100%",
    paddingVertical: 14,
    borderRadius: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buyBtnText: {
    color: "#0b0709",
    fontWeight: "700",
    fontSize: isSmall ? 15 : 16,
  },

  infoBox: { width: "100%", marginTop: 18, paddingVertical: 8 },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  infoLabel: { color: "#bfb9c4", fontSize: 12 },
  infoValue: { color: "#e9e6ee", fontSize: 12, fontWeight: "600" },
});
