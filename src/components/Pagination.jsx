import mainStyles from "../assets/styles/mainStyles.module.css";

export const Pagination = ({ info, setPage }) => {
    console.log(info);

    const handlePage = (type) => {
        const { prev, next } = info;
        if (type === "prev" && prev) {
            const prevArray = prev.split("=");
            const pagePrev = prevArray[1];
            setPage(pagePrev);
        } else if (type === "next" && next) {
            const nextArray = next.split("=");
            const pageNext = nextArray[1];
            setPage(pageNext);
        }
    };

    return (
        <>
            <section
                className={mainStyles.main__pagination}
                style={info === undefined ? { display: "none" } : {}}
            >
                <button
                    className={mainStyles.Pagination__btnPrev}
                    onClick={() => handlePage("prev")}
                >
                    Prev
                </button>
                <button
                    className={mainStyles.Pagination__btnNext}
                    onClick={() => handlePage("next")}
                >
                    Next
                </button>
            </section>
        </>
    );
};
