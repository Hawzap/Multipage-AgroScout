import { Help } from "../common/Help/Help";
import { AboutUs } from "./AboutUs/AboutUs";
import { AerialPhotographs } from "./AerialPhotographs/AerialPhotographs";
import { AerialPhotographyProcess } from "./AerialPhotographyProcess/AerialPhotographyProcess";
import { AerialViewBenefits } from "./AerialViewBenefits/AerialViewBenefits";
import { MainInfo } from "./MainInfo/MainInfo";
import { UseOfPhotography } from "./UseOfPhotography/UseOfPhotography";

export const Cartography = () => {
    return (
        <>
            <MainInfo />
            <AboutUs />
            <AerialViewBenefits />
            <AerialPhotographyProcess />
            <AerialPhotographs />
            <UseOfPhotography />
            <Help />
        </>
    );
};
