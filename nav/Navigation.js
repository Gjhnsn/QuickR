import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../components/Dashboard/Dashboard";
import EditFolderPage from "../components/folder/EditFolderPage/EditFolderPage";
import AddFolderPage from '../components/folder/AddFolderPage/AddFolderPage'

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="EditFolderPage" component={EditFolderPage} />
      <Stack.Screen name='AddFolderPage' component={AddFolderPage} />
    </Stack.Navigator>
  );
};

export default Navigation;
