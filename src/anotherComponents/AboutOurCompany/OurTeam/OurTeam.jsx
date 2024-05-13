import s from "./OurTeam.module.scss";
import leader from "../../../images/leader.jpg";
import { useEffect } from "react";
import { animateHeadline } from "../../common/headlineAnimation";
import gsap from "gsap";

export const OurTeam = () => {
    const team = [
        {
            img: leader,
            name: "Олег Иванченко",
            position: "Генеральный директор компнии",
            aboutPerson:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi facilisi ultrices ut consectetur nibh tincidunt. Elit nunc, volutpat, eu ac egestas suspendisse vulputate. Sed feugiat gravida pellentesque dictum nisi rhoncus montes. Duis tellus auctor eget nibh sed erat risus lorem.",
        },
        {
            img: leader,
            name: "Олег Иванченко",
            position: "Генеральный директор компнии",
            aboutPerson:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi facilisi ultrices ut consectetur nibh tincidunt. Elit nunc, volutpat, eu ac egestas suspendisse vulputate. Sed feugiat gravida pellentesque dictum nisi rhoncus montes. Duis tellus auctor eget nibh sed erat risus lorem.",
        },
        {
            img: leader,
            name: "Олег Иванченко",
            position: "Генеральный директор компнии",
            aboutPerson:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi facilisi ultrices ut consectetur nibh tincidunt. Elit nunc, volutpat, eu ac egestas suspendisse vulputate. Sed feugiat gravida pellentesque dictum nisi rhoncus montes. Duis tellus auctor eget nibh sed erat risus lorem.",
        },
    ];
    useEffect(() => {
        animateHeadline(s.headline);
        gsap.fromTo(
            `.${s.person}`,
            {
                x: -200,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.3,
                ease: "circ.out",
                scrollTrigger: `.${s.team}`,
                onComplete: () => {
                    gsap.to(`.${s.person}`, {
                        scaleY: 0,
                        opacity: 0,
                        stagger: 0.3,
                        scrollTrigger: {
                            trigger: `.${s.team}`,
                            start: `70% center`,
                            end: `150% center`,
                            scrub: 0.5,
                        },
                    });
                },
            }
        );
    }, []);
    return (
        <div className={`wrapper ${s.team__wrapper}`}>
            <h2 className={s.headline}>О нас</h2>
            <div className={s.team}>
                {team.map((e) => {
                    return (
                        <div className={s.person}>
                            <span>
                                <img src={e.img} alt="" />
                            </span>
                            <h3>{e.name}</h3>
                            <p className={s.position}>{e.position}</p>
                            <p className={s.about}>{e.aboutPerson}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
