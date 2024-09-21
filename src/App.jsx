import "normalize.css"
import './App.css'
// import {MenuProduct} from "./components/MenuProduct.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MenuCardPage} from "./pages/MenuCardPage.jsx";
import {PRODUCTS_DATA} from "./data/data.js";
import {PicturesPage} from "./pages/PicturesPage.jsx";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";


function App() {
    return (
        <>
        <Tabs>
            <TabList>
                <Tab>menu</Tab>
                <Tab>pics</Tab>
            </TabList>
            <TabPanel>
                <MenuCardPage products= {PRODUCTS_DATA}/>
            </TabPanel>
            <TabPanel>
                <PicturesPage/>
            </TabPanel>
        </Tabs>
</>

)
}

export default App
