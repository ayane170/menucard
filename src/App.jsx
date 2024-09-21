import "normalize.css"
import './App.css'
// import {MenuProduct} from "./components/MenuProduct.jsx";
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
    {/*{PRODUCTS_DATA.map(p => <MenuProduct key={p.name} product = {p}/>)}*/
    }

</>

)
}

export default App
