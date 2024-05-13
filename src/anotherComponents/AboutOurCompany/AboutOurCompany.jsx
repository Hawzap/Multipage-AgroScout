import { Help } from "../common/Help/Help";
import { WhereWeWork } from "../common/WhereWeWork/WhereWeWork";
import { MainInfo } from "./MainInfo/MainInfo";
import { OurTeam } from "./OurTeam/OurTeam";
import { ShortText } from "./ShortText/ShortText";

export const AboutOurCompany = () => {
    return (
        <>
            <MainInfo />
            <ShortText />
            <OurTeam />
            <WhereWeWork mb={160} />
            <Help />
        </>
    );
};
