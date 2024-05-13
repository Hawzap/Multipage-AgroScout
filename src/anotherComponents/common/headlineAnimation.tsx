import gsap from "gsap";

export const animateHeadline = (className: string, additional?: string) => {
    gsap.fromTo(
        `.${className}`,
        {
            scale: 0,
            transformOrigin: "left",
            opacity: 0,
        },
        {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            scrollTrigger: `.${additional || className}`,
        }
    );
};
