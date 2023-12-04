import { Mestwina, Komandorska, Poborzanska, Minska, Ratibora, Rakowiecka, Dabrowskiego, Lubicz, Izabelin, Dachowa, Pilsudskiego } from "../projects";

export const useRenderProjectContent = (project) => {

    const renderProjectContent = (project) => {
        switch (project.title) {
            case "mestwina":
                return <Mestwina />;
            case "dąbrowskiego":
                return <Dabrowskiego />;
            case "lubicz":
                return <Lubicz />;
            case "rakowiecka":
                return <Rakowiecka />;
            case "komandorska":
                return <Komandorska />;
            case "poborzańska":
                return <Poborzanska />;
            case "mińska":
                return <Minska />;
            case "ratibora":
                return <Ratibora />;
            case "izabelin":
                return <Izabelin />;
            case "dachowa":
                return <Dachowa />;
            case "piłsudskiego":
                return <Pilsudskiego />;
            default: return 'ups.. coś poszło nie tak';
        };
    };

    return renderProjectContent;
};
