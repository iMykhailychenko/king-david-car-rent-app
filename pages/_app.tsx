import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Modal from '../components/modal';
import Loader from '../components/loader';
import Success from '../components/success';
import { useStore } from '../redux/store';

const theme = createMuiTheme({
    palette: {
        primary: { light: '#33ab9f', main: '#009688', dark: '#00695f' },
        secondary: { light: '#6573c3', main: '#3f51b5', dark: '#2c387e' },
    },
    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
    shape: {
        borderRadius: 10,
    },
});

const CustomApp = ({ Component, pageProps }: AppProps) => {
    const store = useStore(pageProps.state);
    const persistor = persistStore(store);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Modal />
                    <Loader />
                    <Success />
                    <Component {...pageProps} />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default CustomApp;
