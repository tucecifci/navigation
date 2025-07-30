import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView
} from "react-native";

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.profileImage}>
            <Text style={styles.profileInitial}>M</Text>
          </View>
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Hey 👋 </Text>
            <Text style={styles.greeting}>Mason James</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceLeft}>
            <Text style={styles.balanceTitle}>My Balance</Text>
            <View style={styles.balanceAmount}>
              <Text style={styles.coinIcon}>🪙</Text>
              <Text style={styles.balanceText}>$1.00</Text>
            </View>
          </View>
          <View style={styles.giftIcon}>
            <Text style={styles.giftEmoji}>🎁</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.rewardsLink}>
          <Text style={styles.rewardsText}>See Your Claimed Rewards</Text>
          <Text style={styles.arrowIcon}>→</Text>
        </TouchableOpacity>

        {/* Unlock Reward Card */}
        <View style={styles.rewardCard}>
          <Text style={styles.rewardTitle}>Unlock $10 Reward</Text>
          <Text style={styles.rewardDescription}>
            Scan 10 diapers, earn $10 Pampers Cash.
          </Text>

          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={styles.progressFilled} />
              <View style={styles.progressEmpty} />
            </View>
            <View style={styles.progressNumbers}>
              <Text style={styles.progressNumber}>0</Text>
              <Text style={styles.progressNumber}>1</Text>
              <Text style={styles.progressNumber}>2</Text>
              <Text style={styles.progressNumber}>3</Text>
              <Text style={styles.progressNumber}>4</Text>
              <Text style={styles.progressNumber}>5</Text>
              <Text style={styles.progressNumber}>6</Text>
              <Text style={styles.progressNumber}>7</Text>
              <Text style={styles.progressNumber}>8</Text>
              <Text style={styles.progressNumber}>9</Text>
              <Text style={styles.progressNumber}>10</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.scanButton}>
            <Text style={styles.scanIcon}>📷</Text>
            <Text style={styles.scanText}>Scan Now</Text>
          </TouchableOpacity>
        </View>

        {/* Baby Care Section */}
        <Text style={styles.sectionTitle}>2-Month-Old Baby</Text>
        <View style={styles.careCards}>
          <TouchableOpacity style={styles.careCard}>
            <Text style={styles.careTitle}>Feeding</Text>
            <Text style={styles.careIcon}>🍼</Text>
            <Text style={styles.careQuestion}>
              How much milk or formula does my baby need?
            </Text>
            <Text style={styles.careArrow}>↗</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.careCard}>
            <Text style={styles.careTitle}>Sleep</Text>
            <Text style={styles.careIcon}>🛏️</Text>
            <Text style={styles.careQuestion}>
              When might my baby start sleeping longer during?
            </Text>
            <Text style={styles.careArrow}>↗</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  profileInitial: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  greetingContainer: {
    flexDirection: "column",
  },
  greeting: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333",
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationIcon: {
    fontSize: 20,
  },
  content: {
    padding: 20,
  },
  balanceCard: {
    backgroundColor: "#FFE5F1",
    borderRadius: 16,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  balanceLeft: {
    flex: 1,
  },
  balanceTitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  balanceAmount: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  balanceText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700",
  },
  giftIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FF69B4",
    justifyContent: "center",
    alignItems: "center",
  },
  giftEmoji: {
    fontSize: 24,
  },
  rewardsLink: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 20,
  },
  rewardsText: {
    fontSize: 14,
    color: "#007AFF",
  },
  arrowIcon: {
    fontSize: 16,
    color: "#007AFF",
  },
  rewardCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rewardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  rewardDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressBar: {
    flexDirection: "row",
    height: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
    marginBottom: 10,
  },
  progressFilled: {
    width: "10%",
    backgroundColor: "#FFD700",
    borderRadius: 4,
  },
  progressEmpty: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
  },
  progressNumbers: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressNumber: {
    fontSize: 12,
    color: "#666",
  },
  scanButton: {
    backgroundColor: "#00CED1",
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  scanIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  scanText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  careCards: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  careCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    flex: 0.48,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  careTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  careIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  careQuestion: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 12,
  },
  careArrow: {
    fontSize: 16,
    color: "#007AFF",
    textAlign: "right",
  },
});
