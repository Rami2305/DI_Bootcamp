import { ReactElement } from "react"

interface SectionProps {
    children: ReactElement;
    content: string;

}
const Section = ({children, content}: SectionProps): ReactElement => {
    return (
        <>
        {children}
        <p>{content}</p>    
        </>
    )
}

export default Section