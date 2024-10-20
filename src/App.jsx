import "normalize.css"
import './App.css'
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NumbersPage} from "./pages/NumbersPage.jsx"
import {MenuCardPage} from "./pages/MenuCardPage.jsx";
import {CAR_DATA, NUMBER_DATA, PERSON_DATA, PRODUCTS_DATA} from "./data/data.js";
import {PicturesPage} from "./pages/PicturesPage.jsx";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {CarsPage} from "./pages/CarsPage.jsx";
import {EventsPage} from "./pages/EventsPage.jsx";
import {PersonsPage} from "./pages/PersonsPage.jsx"
import {StatePage} from "./pages/StatePage.jsx";
import {FavoriteNumberPage} from "./pages/FavoriteNumberPage.jsx";
import {InputPage} from "./pages/InputPage.jsx";

function App() {
    return (
        <>
            <Tabs>
                <TabList>
                    <Tab>menu</Tab>
                    <Tab>pics</Tab>
                    <Tab>numbers</Tab>
                    <Tab>cars</Tab>
                    <Tab>Persons</Tab>
                    <Tab>events</Tab>
                    <Tab>state</Tab>
                    <Tab>Fav Numbers</Tab>
                    <Tab>input</Tab>

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
                <TabPanel>
                    <CarsPage cars={CAR_DATA}/>
                </TabPanel>
                <TabPanel>
                   <PersonsPage  persons={PERSON_DATA}/>
                </TabPanel>
                <TabPanel>
                    <EventsPage />
                </TabPanel>
                <TabPanel>
                    <StatePage/>
                </TabPanel>
                <TabPanel>
                    <FavoriteNumberPage  numbers={NUMBER_DATA}/>
                </TabPanel>
                <TabPanel>
                    <InputPage/>
                </TabPanel>
            </Tabs>
        </>
    )
}

export default App