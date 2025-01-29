import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { SportAchievement } from "../types";

type WinnersScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Winners">;
};

export function WinnersScreen({ navigation }: WinnersScreenProps) {
  // Mock data - replace with actual API calls
  const achievements: SportAchievement[] = [
    {
      id: "1",
      sport: "Cricket",
      position: 1,
      competition: "Inter-College Tournament 2024",
      date: "2024-03-15",
      level: "state",
      medal: "gold"
    },
    {
      id: "2",
      sport: "Basketball",
      position: 2,
      competition: "District Championship",
      date: "2024-02-20",
      level: "district",
      medal: "silver"
    },
    {
      id: "3",
      sport: "Athletics",
      position: 1,
      competition: "Annual Sports Meet",
      date: "2024-01-10",
      level: "intramural",
      medal: "gold"
    }
  ];

  const getMedalEmoji = (medal?: string) => {
    switch (medal) {
      case 'gold': return '🥇';
      case 'silver': return '🥈';
      case 'bronze': return '🥉';
      default: return '🏅';
    }
  };

  const getSportEmoji = (sport: string) => {
    const emojis: { [key: string]: string } = {
      'Cricket': '🏏',
      'Basketball': '🏀',
      'Football': '⚽',
      'Athletics': '🏃',
      'Volleyball': '🏐',
      'Tennis': '🎾',
      'Table Tennis': '🏓',
      'Badminton': '🏸'
    };
    return emojis[sport] || '🎮';
  };

  return (
    <flexboxLayout style={styles.container}>
      <stackLayout className="mb-6">
        <label className="text-3xl font-bold text-blue-600">Winners Gallery 🏆</label>
        <label className="text-sm text-gray-500 mt-1">Celebrating Excellence in Sports</label>
      </stackLayout>

      <scrollView>
        <stackLayout>
          {achievements.map((achievement) => (
            <stackLayout
              key={achievement.id}
              className="bg-white m-2 p-4 rounded-xl shadow-sm border-l-4 border-yellow-400"
            >
              <gridLayout columns="auto, *, auto" className="mb-2">
                <label col="0" className="text-3xl mr-2">{getSportEmoji(achievement.sport)}</label>
                <stackLayout col="1">
                  <label className="font-bold text-lg">{achievement.sport}</label>
                  <label className="text-sm text-gray-600">{achievement.competition}</label>
                </stackLayout>
                <label col="2" className="text-3xl">{getMedalEmoji(achievement.medal)}</label>
              </gridLayout>

              <stackLayout className="mt-2">
                <gridLayout columns="auto, *" rows="auto, auto">
                  <label col="0" row="0" className="text-gray-500">Position:</label>
                  <label col="1" row="0" className="font-semibold">{achievement.position}</label>
                  
                  <label col="0" row="1" className="text-gray-500">Level:</label>
                  <label col="1" row="1" className="font-semibold capitalize">{achievement.level}</label>
                </gridLayout>

                <label className="text-xs text-gray-400 mt-2">
                  {new Date(achievement.date).toLocaleDateString()}
                </label>
              </stackLayout>
            </stackLayout>
          ))}
        </stackLayout>
      </scrollView>

      <button
        className="bg-blue-600 text-white p-4 rounded-lg m-4"
        text="View All Achievements"
        onTap={() => navigation.navigate("Achievements")}
      />
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    padding: 16,
    backgroundColor: "#f8fafc",
  }
});