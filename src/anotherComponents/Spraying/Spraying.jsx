import { Help } from "../common/Help/Help";
import { AboutService } from "./AboutService/AboutService";
import { BenefitsOfSpraying } from "./BenefitsOfSpraying/BenefitsOfSpraying";
import { Disadvantages } from "./Disadvantages/Disadvantages";
import { MainInfo } from "./MainInfo/MainInfo";
import { MethodOfWork } from "./MethodOfWork/MethodOfWork";

export const Spraying = () => {
    return (
        <>
            <MainInfo />
            <AboutService />
            <BenefitsOfSpraying />
            <Disadvantages />
            <MethodOfWork />
            <Help />
        </>
    );
};
