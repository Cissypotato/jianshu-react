import React from 'react'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button} from './style'

export default class Header extends React.Component{
    render(){
        return(
            <HeaderWrapper>
                <Logo href="/"/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载app</NavItem>
                    {/* <NavItem className="search"></NavItem> */}
                    <NavItem className="right">Aa</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavSearch/>
                    <Addition>
                        <Button className="reg">注册</Button>
                        <Button className="writting">写文章</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }
}