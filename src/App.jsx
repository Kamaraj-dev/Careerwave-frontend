import './App.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/tiptap/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import { Provider } from 'react-redux';
import Store from './Store';
import AppRoutes from './Pages/AppRoutes';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
    
    return (
        <BrowserRouter>
        <Provider store={Store}>
        <MantineProvider>
            <Notifications position="top-center" zIndex={1000} />
            <AppRoutes/>
        </MantineProvider>
        </Provider>
        </BrowserRouter>
    );
}

export default App;
