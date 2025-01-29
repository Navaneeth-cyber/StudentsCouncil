import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type DashboardScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Dashboard">;
  route: { params: { role: string } };
};

export function DashboardScreen({ navigation, route }: DashboardScreenProps) {
  const { role } = route.params;

  const menuItems = React.useMemo(() => {
    const items = [
      { title: "Profile", icon: "👤", route: "Profile", color: "bg-blue-100" },
      { title: "Department Rankings", icon: "🏆", route: "Rankings", color: "bg-yellow-100" },
      { title: "College Events", icon: "📅", route: "Events", color: "bg-green-100" },
      { title: "Announcements", icon: "📢", route: "Announcements", color: "bg-purple-100" },
      { title: "Academic Calendar", icon: "📚", route: "Calendar", color: "bg-red-100" },
      { title: "Sports Zone", icon: "⚽", route: "Sports", color: "bg-emerald-100" },
      { title: "Winners Gallery", icon: "🎯", route: "Winners", color: "bg-amber-100" },
    ];

    if (role === 'student') {
      items.push(
        { title: "Chat", icon: "💬", route: "Chat", color: "bg-pink-100" },
        { title: "Assignment Hub", icon: "📝", route: "Assignments", color: "bg-indigo-100" },
        { title: "Student Directory", icon: "🔍", route: "Search", color: "bg-orange-100" },
        { title: "Achievement Gallery", icon: "🌟", route: "Achievements", color: "bg-teal-100" },
        { title: "Tournament Schedule", icon: "🎮", route: "Tournaments", color: "bg-cyan-100" },
        { title: "Join Sports Team", icon: "🤾", route: "JoinSports", color: "bg-lime-100" }
      );
    }

    if (role === 'teacher') {
      items.push(
        { title: "Class Management", icon: "👥", route: "Classes", color: "bg-pink-100" },
        { title: "Award Rep Badge", icon: "🎖️", route: "RepBadge", color: "bg-indigo-100" },
        { title: "Student Progress", icon: "📊", route: "Progress", color: "bg-orange-100" },
        { title: "Post Assignment", icon: "✍️", route: "PostAssignment", color: "bg-teal-100" },
        { title: "Sports Management", icon: "🏃", route: "ManageSports", color: "bg-cyan-100" },
        { title: "Team Selection", icon: "⭐", route: "TeamSelection", color: "bg-lime-100" }
      );
    }

    if (role === 'parent') {
      items.push(
        { title: "Fees Structure", icon: "💰", route: "Fees", color: "bg-pink-100" },
        { title: "Attendance Report", icon: "📊", route: "Attendance", color: "bg-indigo-100" },
        { title: "Academic Progress", icon: "📈", route: "Progress", color: "bg-orange-100" },
        { title: "Parent-Teacher Meeting", icon: "🤝", route: "PTMeeting", color: "bg-teal-100" },
        { title: "Sports Performance", icon: "🎽", route: "SportsProgress", color: "bg-cyan-100" }
      );
    }

    return items;
  }, [role]);

  const roleEmoji = role === 'student' ? '🎓' : role === 'teacher' ? '👨‍🏫' : '👪';

  return (
    <flexboxLayout style={styles.container}>
      <stackLayout className="mb-6">
        <label className="text-3xl font-bold text-blue-600">Welcome {roleEmoji}</label>
        <label className="text-sm text-gray-500 mt-1">Explore your digital campus</label>
      </stackLayout>
      
      <scrollView>
        <gridLayout columns="*, *" rows="auto, auto, auto, auto, auto, auto" style={styles.menu}>
          {menuItems.map((item, index) => (
            <stackLayout
              key={item.route}
              col={index % 2}
              row={Math.floor(index / 2)}
              className={`m-2 p-6 rounded-xl shadow-sm ${item.color}`}
              onTap={() => navigation.navigate(item.route)}
            >
              <label className="text-4xl text-center mb-2">{item.icon}</label>
              <label className="text-center font-semibold">{item.title}</label>
            </stackLayout>
          ))}
        </gridLayout>
      </scrollView>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#f8fafc",
  },
  menu: {
    width: "100%",
  },
});