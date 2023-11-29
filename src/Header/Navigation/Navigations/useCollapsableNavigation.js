import { useState } from "react";

export const useCollapsableNavigation = () => {

    const [expand, setExpand] = useState(
        {
            navigation: false,
            projects: false,
        });

    const toggleNavigation = () => {
        setExpand(expand => {
            return { ...expand, navigation: !expand.navigation };
        });
    };

    const toggleProjects = () => {
        setExpand(expand => {
            return { ...expand, projects: !expand.projects };
        });
    };

    return {
        expand,
        toggleNavigation,
        toggleProjects
    };
};
