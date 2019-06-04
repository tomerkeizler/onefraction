import * as React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import MenuIcon from './MenuIcon'

const Wrapper = styled(View)`
  flex: 1;
  flex-direction: row;
  height: 100%;
  min-height: 100vh;
  background: var(--light-grayish-blue);
`

interface MainLayoutProps {
  children: JSX.Element
}

export const SidebarContext = React.createContext({ sidebarOpen: false })

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true)
  return (
    <SidebarContext.Provider value={{ sidebarOpen }}>
      <Wrapper>
        <Sidebar open={sidebarOpen} />
        <MenuIcon onPress={() => setSidebarOpen(!sidebarOpen)} />
        {children}
      </Wrapper>
    </SidebarContext.Provider>
  )
}

export default MainLayout
