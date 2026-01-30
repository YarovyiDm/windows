import { LoaderItem, LoaderWrapper } from "Components/Loader/Loader.styled";

const Loader = () => {
    return (
        <LoaderWrapper>
            {Array.from({ length: 5 }).map((_, index) => { return <LoaderItem key={index}/>;})}
        </LoaderWrapper>
    );
};

export default Loader;
