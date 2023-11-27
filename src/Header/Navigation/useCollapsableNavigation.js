import { useState } from "react";
import { useScreenWidth } from "./useScreenWidth";

export const useCollapsableNavigation = () => {
    const screenWidth = useScreenWidth();

    const [menu, setMenu] = useState(
        {
            navigation: false,
            projects: false,
        });

    const displayNavigation = () => (
        screenWidth >= 767
            ? true
            : (
                menu.navigation
                    ? true
                    : false
            )
    );

    const toggleNavigation = () => {
        setMenu(menu => {
            return { ...menu, navigation: !menu.navigation };
        });
    };

    const toggleProjects = () => {
        setMenu(menu => {
            return { ...menu, projects: !menu.projects };
        });
    };

    return {
        menu,
        displayNavigation,
        toggleNavigation,
        toggleProjects
    };
};
