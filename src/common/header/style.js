import styled from 'styled-components'
import logoPic from './../../static/logo.png'

export const HeaderWrapper=styled.div`
    position:relative;
    height:56px;
    width:100%;
    border-bottom:1px solid #f0f0f0;
`

export const Logo=styled.a`
    position:absolute;
    display:block;
    width:100px;
    height:56px;
    left:0;
    top:0;
    background:url(${logoPic});
    background-size:cover;
`
export const Nav=styled.div`
    box-sizing:border-box;
    width:70%;
    height:56px;
    margin:0 auto;
    padding-right:15px;
    // border:1px solid green;
`
export const NavItem=styled.div`
    font-weight:500;
    box-sizing:border-box;
    height:100%;
    line-height:26px;
    color:#333;
    padding:15px;
    fontsize:17px;
    &.left{float:left;}
    &.active{color:#ea6f5a}
    &.right{float:right;color:#969696}
`
export const SearchWrapper=styled.div`
    // border:1px solid red;
    float:left;
    position:relative;
    margin-left:10px;
    .iconfont{
        position:absolute;
        bottom:5px;
        right:15px;
        width:30px;
        line-height:30px;
        text-align:center;
        border-radius:15px;
        color:#999;
        &.focused{
            color:#fff;
            background:#969696;
        }
    }

`
export const NavSearch=styled.input.attrs({
    placeholder:"搜索"
})`
    box-sizing:border-box;
    height:38px;
    width:160px;
    border-radius:19px;
    border:none;
    outline:none;
    background:#eee;
    padding-left:20px;
    padding-right:40px;
    font-size:14px;
    margin:9px 10px 0 0px;
    color:#666;
    &::placeholder{
        color:#999
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
    
    
`
export const SearchInfo=styled.div`
    position:absolute;
    box-sizing:border-box;
    padding:20px 20px 10px;
    width:250px;
    left:0;
    top:100%;
    margin-top:9px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    
`
export const SearchHeading=styled.div`
    // border:1px solid red;
    overflow:hidden;
    margin-bottom:10px;
`
export const SearchTitle=styled.span`
    color:#969696;
    font-size:14px;
    float:left;
    
`
export const SearchSwitch=styled.a`
    color:#969696;
    font-size:13px;
    float:right;
    
`
export const SearchList=styled.div`
    // border:1px solid red;
    overflow:hidden;
    
`
export const SearchItem=styled.a`
    display:block;
    line-height:16px;
    color:#787878;
    margin-bottom:10px;
    padding:2px 6px;
    margin-right:10px;
    border:1px solid #ddd;
    font-size:12px;
    border-radius:3px
    float:left;  
`
export const Addition=styled.div`
    position:absolute;
    display:block;
    height:56px;
    right:0;
    top:0;
    // border:1px solid red;
    display:felx;
`

export const Button=styled.div`
    box-sizing:border-box;
    height:38px;
    line-height:24px;
    margin-top:9px;
    padding:6px 12px;
    font-size:14px;
    border:1px solid #ea6f5a;
    border-radius:19px;
    text-align:center
    &.reg{
        color:#ea6f5a;
        width:80px;
    }
    &.writting{
        width:100px;
        background:#ea6f5a;
        color:#fff;
        margin-left:12px;
        margin-right:12px;
    }
`