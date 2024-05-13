import { Help } from "../common/Help/Help";
import { AboutService } from "./AboutService/AboutService";
import { BenefitsOfEntomophages } from "./BenefitsOfEntomophages/BenefitsOfEntomophages";
import { Gabrobrakon } from "./Gabrobrakon/Gabrobrakon";
import { Goldeneye } from "./Goldeneye/Goldeneye";
import { MainInfo } from "./MainInfo/MainInfo";
import { Solutions } from "./Solutions/Solutions";
import { Stages } from "./Stages/Stages";
import { Trichogramma } from "./Trichogramma/Trichogramma";

export const EntomophagousPage = () => {
    return (
        <>
            <MainInfo />
            <AboutService />
            <BenefitsOfEntomophages />
            <Solutions />
            <Trichogramma />
            <Goldeneye />
            <Gabrobrakon />
            <Stages />
            <Help />
        </>
    );
};
