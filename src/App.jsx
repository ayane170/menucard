import "normalize.css"
import './App.css'
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NumbersPage} from "./pages/NumbersPage.jsx"
import {MenuCardPage} from "./pages/MenuCardPage.jsx";
import {NUMBER_DATA, PRODUCTS_DATA} from "./data/data.js";
import {PicturesPage} from "./pages/PicturesPage.jsx";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

function App() {
    return (
        <>
            <Tabs>
                <TabList>
                    <Tab>menu</Tab>
                    <Tab>pics</Tab>
                    <Tab>numbers</Tab>
                </TabList>
                <TabPanel>
                    <MenuCardPage products={PRODUCTS_DATA}/>
                </TabPanel>
                <TabPanel>
                    <PicturesPage/>
                </TabPanel>
                <TabPanel>
                    <NumbersPage numbers={NUMBER_DATA}/>
                </TabPanel>
            </Tabs>
        </>
    )
}

export default App