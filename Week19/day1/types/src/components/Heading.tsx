import { ReactElement } from "react";

type HeadingProps = {
    title: string;
    subTitle: string;
}

const Heading = ({ title, subTitle }: HeadingProps): ReactElement => {
    return (<>
    <h1>Title {title}</h1>
    <h2>{subTitle}</h2>
    </>
)};

export default Heading