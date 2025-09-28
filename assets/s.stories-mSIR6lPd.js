import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{U as e}from"./enums-j1G55Avl.js";import{A as t}from"./avatar-Dw7VE7nt.js";import{a as d}from"./avatar-BKnVde2b.js";import"./index-xf0-QVxD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BKyFwriW.js";const g={title:"Components/Atoms/Avatar",component:t,parameters:{layout:"centered",docs:{description:{component:'<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37097&m=dev" target="_blank"><b>Figma Design</b></a>'}}},tags:["autodocs"],argTypes:{size:{control:"radio",options:[e.sm,e.md,e.lg],description:"Avatar sizes",table:{type:{summary:"Exclude<UISize, UISize.xl>"},defaultValue:{summary:e.md}}},userInitials:{control:{type:"text"},description:"User initials to display when image is not available",table:{type:{summary:"string"}}},imgSrc:{control:{type:"text"},description:"URL of the avatar image",table:{type:{summary:"string"}}},href:{control:{type:"text"},description:"Optional link URL for clickable avatar",table:{type:{summary:"string"}}},classes:{control:{type:"object"},description:"Classes to apply to the avatar",table:{type:{summary:"String: {root, img, initials}"}}}},args:{size:e.md,userInitials:"YK",imgSrc:d,href:"#",classes:{}},decorators:[a=>s.jsx(a,{})]},r={args:{size:e.md}},i={render:a=>s.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap"},children:[s.jsx(t,{...a,size:e.sm}),s.jsx(t,{...a,size:e.md}),s.jsx(t,{...a,size:e.lg}),s.jsx(t,{...a,size:e.md,imgSrc:"",userInitials:"YK"})]}),args:{...g.args}};var o,m,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    size: UISize.md
  }
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var l,p,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Avatar {...args} size={UISize.sm} />
      <Avatar {...args} size={UISize.md} />
      <Avatar {...args} size={UISize.lg} />
      <Avatar {...args} size={UISize.md} imgSrc="" userInitials="YK" />
    </div>,
  args: {
    ...meta.args
  }
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const I=["Default","AllVariants"];export{i as AllVariants,r as Default,I as __namedExportsOrder,g as default};
