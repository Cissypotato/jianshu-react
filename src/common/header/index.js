import React from 'react'
import { CSSTransition } from 'react-transition-group';
import {HeaderWrapper,Logo,Nav,NavItem,SearchWrapper,NavSearch,Addition,Button} from './style'
import {IconfontStyle} from './../../static/iconfont/iconfontStyle.js'

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            focused:false
        }
    }
    handleFocus=()=>{
        this.setState({
            focused:true
        })
    }
    handleBlur=()=>{
        this.setState({
            focused:false
        })
    }
    render(){
        return(
            <HeaderWrapper>
                <IconfontStyle/>
                <Logo href="/"/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载app</NavItem>
                    {/* <NavItem className="search"></NavItem> */}
                    <NavItem className="right">
                        <span className="iconfont">&#xe607;</span>
                        {/* Aa */}
                    </NavItem>
                    <NavItem className="right">登录</NavItem>
                    <SearchWrapper>
                        <CSSTransition 
                            in={this.state.focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch className={this.state.focused ? 'focused':''}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            />
                        </CSSTransition>
                        <span className={this.state.focused ? 'focused iconfont':'iconfont'}>&#xe600;</span>
                    </SearchWrapper>
                    <Addition>
                        <Button className="reg">注册</Button>
                        <Button className="writting">
                            <span className="iconfont">&#xe616;</span>
                            写文章
                        </Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }
}