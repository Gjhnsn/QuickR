import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../components/Dashboard/Dashboard";
import FolderActionPage from "../components/folder/FolderActionPage/FolderActionPage";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="FolderActionPage" component={FolderActionPage} />
    </Stack.Navigator>
  );
};

export default Navigation;
