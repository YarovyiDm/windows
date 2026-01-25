import { LoaderItem, LoaderWrapper } from "Components/Loader/Loader.styled";

const Loader = () => {
    return (
        <LoaderWrapper>
            {Array.from({ length: 5 }).map(() => { return <LoaderItem />;})}
        </LoaderWrapper>
    );
};

export default Loader;
