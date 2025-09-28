import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as r,U as a}from"./enums-j1G55Avl.js";import{E as t}from"./etag-C4mhMif4.js";import"./index-xf0-QVxD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IconMonoClose-COlRpOzk.js";import"./index-BKyFwriW.js";const E={title:"Components/Atoms/Etag",component:t,parameters:{layout:"centered",docs:{description:{component:'<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37077&m=dev" target="_blank"><b>Figma Design</b></a>'}}},tags:["autodocs"],argTypes:{title:{control:{type:"text"},description:"Etag text content",table:{type:{summary:"string"},defaultValue:{summary:"Etag"}}},size:{options:[a.sm,a.md],control:{type:"radio"},description:"Etag size variant",table:{type:{summary:"UISize.sm | UISize.md"},defaultValue:{summary:"UISize.md"}}},color:{options:[r.primary,r.secondary,r.special],control:{type:"radio"},description:"Etag color variant",table:{type:{summary:"UIColor"},defaultValue:{summary:"UIColor.primary"}}},disabled:{control:{type:"boolean"},description:"Disable (automatically removed when isAdd or isRemove is true)",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},isAdd:{control:{type:"boolean"},description:"Show add icon",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isRemove:{control:{type:"boolean"},description:"Show remove icon",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},classes:{control:{type:"object"},description:"Classes to apply to the etag",table:{type:{summary:"String: {root, icon, title}"}}}},args:{title:"Etag",size:a.md,color:r.primary,disabled:!0,isAdd:!1,isRemove:!1,classes:{}},decorators:[i=>e.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",padding:"1rem",backgroundColor:"var(--blue-8)",borderRadius:"var(--radius-md)"},children:e.jsx(i,{})})]},o={render:i=>e.jsx(t,{...i})},s={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem",alignItems:"center",justifyItems:"center",width:"22.5rem"},children:[e.jsx(t,{title:"Long etag text that should demonstrate text overflow behavior",size:a.md}),e.jsx(t,{title:"Add",isAdd:!0}),e.jsx(t,{title:"Remove",isRemove:!0}),e.jsx(t,{title:"Primary",color:r.primary}),e.jsx(t,{title:"Secondary",color:r.secondary}),e.jsx(t,{title:"Special",color:r.special}),e.jsx(t,{title:"Small",size:a.sm}),e.jsx(t,{title:"Medium",size:a.md})]})};var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Etag {...args} />
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var n,c,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    alignItems: 'center',
    justifyItems: 'center',
    width: '22.5rem'
  }}>
      <Etag title="Long etag text that should demonstrate text overflow behavior" size={UISize.md} />
      <Etag title="Add" isAdd />
      <Etag title="Remove" isRemove />
      <Etag title="Primary" color={UIColor.primary} />
      <Etag title="Secondary" color={UIColor.secondary} />
      <Etag title="Special" color={UIColor.special} />
      <Etag title="Small" size={UISize.sm} />
      <Etag title="Medium" size={UISize.md} />
    </div>
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const S=["Default","AllVariants"];export{s as AllVariants,o as Default,S as __namedExportsOrder,E as default};
