import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as y}from"./IconMonoCheck-BK_tYEQw.js";import{S as u}from"./IconMonoCopy-BHCnYk-6.js";import{B as i}from"./button-Dn6_MprM.js";import{U as t,a as o}from"./enums-j1G55Avl.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-xf0-QVxD.js";import"./loader-DjLiw7AR.js";const g={title:"Components/Atoms/Button",component:i,parameters:{layout:"centered",docs:{description:{component:'<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37420&t=soOUYrXPdQi41gl1-4" target="_blank"><b>Figma Design</b></a>'}}},tags:["autodocs"],argTypes:{size:{control:"radio",options:[t.sm,t.md],description:"Button sizes",table:{type:{summary:"Exclude<UISize, UISize.lg | UISize.xl>"},defaultValue:{summary:t.md}}},color:{options:[o.primary,o.secondary,o.special],control:{type:"radio"},description:"Button colors",table:{type:{summary:"UIColor"},defaultValue:{summary:o.primary}}},title:{control:{type:"text"},description:"Button text content",table:{type:{summary:"string"}}},disabled:{control:{type:"boolean"},description:"Disable button interaction",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},iconLeft:{control:{type:"select"},description:"Icon to display before text",table:{type:{summary:"ReactNode"}}},iconRight:{control:{type:"select"},description:"Icon to display after text",table:{type:{summary:"ReactNode"}}},isLoading:{control:{type:"boolean"},description:"Show loading state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{description:"Click event handler",table:{type:{summary:"() => void"}}},classes:{control:{type:"object"},description:"Classes to apply to the button",table:{type:{summary:"String: {root, title, icon, loader}"}}}},args:{color:o.primary,size:t.md,title:"Button",disabled:!1,isLoading:!1,iconLeft:e.jsx(y,{}),iconRight:null,classes:{}},decorators:[r=>e.jsx(r,{})]},a={args:{color:o.primary}},s={render:r=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"},children:[e.jsx(i,{...r,color:o.primary,size:t.md,title:"Primary"}),e.jsx(i,{...r,color:o.secondary,size:t.md,title:"Secondary"}),e.jsx(i,{...r,color:o.special,size:t.md,title:"Special"}),e.jsx(i,{...r,color:o.primary,size:t.sm,title:"Small"}),e.jsx(i,{...r,color:o.primary,size:t.md,disabled:!0,title:"Disabled"}),e.jsx(i,{...r,color:o.primary,size:t.md,isLoading:!0,title:"Loading"}),e.jsx(i,{...r,color:o.primary,size:t.md,iconLeft:e.jsx(y,{}),iconRight:e.jsx(u,{}),title:"With Icons"})]}),args:{...g.args}};var l,n,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    color: UIColor.primary
  }
}`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var c,d,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem'
  }}>
      <Button {...args} color={UIColor.primary} size={UISize.md} title="Primary" />
      <Button {...args} color={UIColor.secondary} size={UISize.md} title="Secondary" />
      <Button {...args} color={UIColor.special} size={UISize.md} title="Special" />
      <Button {...args} color={UIColor.primary} size={UISize.sm} title="Small" />
      <Button {...args} color={UIColor.primary} size={UISize.md} disabled title="Disabled" />
      <Button {...args} color={UIColor.primary} size={UISize.md} isLoading title="Loading" />
      <Button {...args} color={UIColor.primary} size={UISize.md} iconLeft={<IconMonoCheck />} iconRight={<IconMonoCopy />} title="With Icons" />
    </div>,
  args: {
    ...meta.args
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const h=["Default","AllVariants"];export{s as AllVariants,a as Default,h as __namedExportsOrder,g as default};
