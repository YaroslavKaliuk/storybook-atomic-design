import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{S as u}from"./IconMonoApple-B2aEdNl5.js";import{S as p,a as d}from"./IconMultiMicrosoft-DwhGREV2.js";import{a as t}from"./enums-j1G55Avl.js";import{S as m}from"./signInButtons-C5Hi3YF-.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-xf0-QVxD.js";import"./button-Dn6_MprM.js";import"./loader-DjLiw7AR.js";const j={title:"Components/Molecules/SignInButtons",component:m,parameters:{layout:"centered",docs:{description:{component:'<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=2402-50893&t=ADxqx5NalxgkbIxw-0" target="_blank"><b>Figma Design</b></a>'}}},tags:["autodocs"],argTypes:{buttons:{control:{type:"object"},description:"Buttons",table:{type:{summary:"SignInButtonProps[]"}}},classes:{control:{type:"object"},description:"Classes to apply to the component",table:{type:{summary:"String: {root}"}}}},args:{buttons:[],classes:{}},decorators:[g=>o.jsx("div",{style:{width:"22.5rem"},children:o.jsx(g,{})})]},n={args:{buttons:[{title:"Sign in with google",onClick:()=>{},color:t.primary,iconLeft:o.jsx(p,{})}]}},i={render:()=>o.jsx(m,{buttons:[{title:"Sign in with google",onClick:()=>{},color:t.primary,iconLeft:o.jsx(p,{})},{title:"Sign in with microsoft",onClick:()=>{},color:t.primary,iconLeft:o.jsx(d,{})},{title:"Sign in with Apple",onClick:()=>{},color:t.secondary,iconLeft:o.jsx(u,{})},{title:"Sign in with email",onClick:()=>{},color:t.primary}]})};var r,e,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    buttons: [{
      title: 'Sign in with google',
      onClick: () => {},
      color: UIColor.primary,
      iconLeft: <IconMultiGoogle />
    }]
  }
}`,...(s=(e=n.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};var l,c,a;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <SignInButtons buttons={[{
    title: 'Sign in with google',
    onClick: () => {},
    color: UIColor.primary,
    iconLeft: <IconMultiGoogle />
  }, {
    title: 'Sign in with microsoft',
    onClick: () => {},
    color: UIColor.primary,
    iconLeft: <IconMultiMicrosoft />
  }, {
    title: 'Sign in with Apple',
    onClick: () => {},
    color: UIColor.secondary,
    iconLeft: <IconMonoApple />
  }, {
    title: 'Sign in with email',
    onClick: () => {},
    color: UIColor.primary
  }]} />
}`,...(a=(c=i.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const M=["Default","AllVariants"];export{i as AllVariants,n as Default,M as __namedExportsOrder,j as default};
