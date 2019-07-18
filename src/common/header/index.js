import React from 'react'
import {connect} from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import {HeaderWrapper,Logo,Nav,NavItem,SearchWrapper,NavSearch,SearchInfo,
    SearchHeading,SearchTitle,SearchSwitch,SearchList,SearchItem,Addition,Button} from './style'
import {IconfontStyle} from './../../static/iconfont/iconfontStyle.js'
import {actionCreator} from './store'

//无状态组件可以直接...,优化性能
 
class Header extends React.Component{
    getSearchInfo=()=>{
        const {focused,list,page,mouseChange}=this.props
        const newList=list.toJS()
        const pageList=[]
        for(let i=(page-1)*10;i<page*10;i++){
            pageList.push(<SearchItem key={newList[i]}>{newList[i]}</SearchItem>)
        }
        if(focused){
            return(
               <SearchInfo onMouseEnter={mouseChange}>       
                   <SearchHeading>
                       <SearchTitle>热门搜索</SearchTitle>
                       <SearchSwitch>换一批</SearchSwitch>
                   </SearchHeading>
                   <SearchList>
                       {pageList}
                      
                   </SearchList>
                   
               </SearchInfo>
            )
        }else{
            return null
        }
    }
    render(){
        return (
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
                            in={this.props.focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch className={this.props.focused ? 'focused':''}
                            onFocus={this.props.handleFocus}
                            onBlur={this.props.handleBlur}
                            />
                        </CSSTransition>
                        <span className={this.props.focused ? 'focused iconfont':'iconfont'}>&#xe600;</span>
                        {this.getSearchInfo(this.props.focused)}
        
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




// class Header extends React.Component{

const mapStateToProps=(state)=>{
    return {
        focused:state.get('header').get('focused'),//等同于 state.getIn(['header','focused'])
        list:state.get('header').get('list'),
        page:state.get('header').get('page')
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleFocus(){
            dispatch(actionCreator.getList())
            dispatch(actionCreator.focusAction)
        },
        handleBlur(){
            
            dispatch(actionCreator.blurAction)
        },
        mouseChange(){
            console.log(1)
            dispatch(actionCreator.mouseChange)
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Header)