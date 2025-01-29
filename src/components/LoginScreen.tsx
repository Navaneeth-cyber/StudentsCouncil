import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type LoginScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Login">;
};

export function LoginScreen({ navigation }: LoginScreenProps) {
  const [role, setRole] = React.useState<'student' | 'teacher' | 'parent'>('student');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("Dashboard", { role });
    }, 1000);
  };

  return (
    <flexboxLayout style={styles.container}>
      <stackLayout style={styles.header}>
        <image src="~/assets/logo.png" style={styles.logo} />
        <label className="text-3xl font-bold text-blue-600">Students Council</label>
        <label className="text-sm text-gray-500 mt-2">Connect • Learn • Grow</label>
      </stackLayout>
      
      <stackLayout style={styles.form}>
        <textField
          hint="Username"
          text={username}
          onTextChange={(e) => setUsername(e.value)}
          className="input p-4 rounded-lg bg-gray-100 border-l-4 border-blue-500"
        />
        <textField
          hint="Password"
          text={password}
          secure={true}
          onTextChange={(e) => setPassword(e.value)}
          className="input p-4 mt-4 rounded-lg bg-gray-100 border-l-4 border-blue-500"
        />
        
        <stackLayout className="mt-4 p-2 rounded-lg bg-gray-100">
          <label className="text-sm text-gray-600 ml-2 mb-1">Select Role</label>
          <listPicker
            items={['Student', 'Teacher', 'Parent']}
            selectedIndex={0}
            onSelectedIndexChange={(e) => {
              setRole(e.value.toLowerCase() as any);
            }}
            className="text-blue-600"
          />
        </stackLayout>

        <button
          text={isLoading ? "Logging in..." : "Login"}
          onTap={handleLogin}
          isEnabled={!isLoading}
          className={`mt-6 p-4 rounded-lg ${isLoading ? 'bg-blue-300' : 'bg-blue-600'} text-white font-bold`}
        />
        
        <button
          text="New user? Register here"
          onTap={() => navigation.navigate("Register")}
          className="mt-4 text-blue-600"
        />

        <button
          text="Forgot Password?"
          onTap={() => navigation.navigate("ForgotPassword")}
          className="mt-2 text-gray-500"
        />
      </stackLayout>

      <stackLayout className="mt-auto">
        <label className="text-center text-gray-500">Version 1.0.0</label>
      </stackLayout>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  header: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  form: {
    width: "100%",
  },
});