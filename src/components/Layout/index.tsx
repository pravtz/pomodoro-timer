import { Wrapper } from "./styled"


type layoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: layoutProps) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Layout