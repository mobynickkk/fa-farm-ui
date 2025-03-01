import './App.css';
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import Header from "./components/controls/Header"
import {createContext, useState} from "react";
import SideBar from "./components/controls/SideBar";
import Cattle from "./components/view/Cattle";
import Box from "@mui/joy/Box";
import Crop from "./components/view/Crop";
import Sell from "./components/view/Sell";
import Fields from "./components/view/Fields";
import Snackbar from "./components/view/Snackbar";
import Modal from "./components/view/Modal"
import Corral from "./components/view/Corral";
import {apis, INITIAL_STATE} from "./utils/utils";
import Buy from "./components/view/Buy";

export const UserContext = createContext(null);

function App() {
    const [state, setState] = useState(INITIAL_STATE);
    const api = apis(state);
    console.log(state)
    let currentScreen;
    switch (state.tab) {
        case 0:
            currentScreen = <Crop state={state} setState={setState} api={api} />;
            break;
        case 1:
            currentScreen = <Cattle state={state} setState={setState} api={api} />
            break;
        case 2:
            currentScreen = <Fields state={state} setState={setState} api={api} />
            break;
        case 3:
            currentScreen = <Corral state={state} setState={setState} api={api} />
            break;
        case 4:
            currentScreen = <Sell state={state} setState={setState} api={api} />
            break;
        case 5:
            currentScreen = <Buy state={state} setState={setState} api={api} />
            break;
    }
    return (
        <UserContext.Provider value={{api}}>
            <div className="App">
                <Header user={state?.user} state={state} setState={setState} api={api} />
                {
                    !state?.user?.token
                        ? (state?.sign
                            ? <Login state={state} setState={setState} toggleState={() => setState({...state, sign: false})} />
                            : <SignUp state={state} setState={setState} toggleState={() => setState({...state, sign: true})} />)
                        : <Box sx={{display: 'flex', flexDirection: 'row', height: 'auto'}} component="main">
                            <SideBar state={state} setState={setState} />
                            {currentScreen}
                        </Box>
                }
                <Snackbar state={state} setState={setState} />
                <Modal state={state} setState={setState} api={api} />
            </div>
        </UserContext.Provider>
    );
}

export default App;
