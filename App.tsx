import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import theme from './src/theme';
import Login from './src/screens/Login';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Login />
    </ThemeProvider>
  );
}

