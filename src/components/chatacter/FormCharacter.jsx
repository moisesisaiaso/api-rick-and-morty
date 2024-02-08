import { useRef } from "react";
import headerStyles from "../../assets/styles/headerStyles.module.css";

export const FormCharacter = ({ setName, setPage, setId, name }) => {
    const textInput = useRef();

    const handleChange = () => {
        const inputValue = textInput.current.value;

        setName(inputValue);
        setPage(
            ""
        ); /* este fue el problema ya que aunque la busqueda sea nueva los personajes no cambian por que la pagina sigue siendo la misma por eso hay que setear el valor para que no interfiera en la busqueda por name */
        setId("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className={headerStyles.header__formContainer}>
            <form onSubmit={handleSubmit} className={headerStyles.formContainer__form}>
                <input
                    type="text"
                    onChange={handleChange}
                    className={headerStyles.form__Input}
                    ref={textInput}
                    placeholder="Search for Characters"
                    value={name}
                />
            </form>
        </section>
    );
};
