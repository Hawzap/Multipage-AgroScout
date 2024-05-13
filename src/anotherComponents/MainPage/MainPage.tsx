import { WhereWeWork } from "../common/WhereWeWork/WhereWeWork";
import { AboutUs } from "./AboutUs/AboutUs";
import { Benefits } from "./Benefits/Benefits";
import { MainInfo } from "./MainInfo/MainInfo";
import { News } from "./News/News";
import { OurClients } from "./OurClients/OurClients";
import { Products } from "./Products/Products";
import { Service } from "./Service/Service";

export const MainPage = () => {
    return (
        <>
            <MainInfo />
            <Benefits />
            <Products />
            <Service />
            <AboutUs />
            <WhereWeWork />
            <OurClients />
            <News />
        </>
    );
};
