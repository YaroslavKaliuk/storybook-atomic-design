import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{U as t}from"./enums-j1G55Avl.js";import{T as s}from"./title-DMBq_gjU.js";import"./index-xf0-QVxD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BKyFwriW.js";import"./useAppType-DQSG-477.js";const f={title:"Components/Atoms/Title",component:s,parameters:{layout:"centered",docs:{description:{component:'<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36226&m=dev" target="_blank"><b>Figma Design</b></a>'}}},tags:["autodocs"],argTypes:{children:{control:{type:"text"},description:"Title text content",table:{type:{summary:"string"},defaultValue:{summary:"Title"}}},classes:{control:{type:"object"},description:"Classes to apply to the title",table:{type:{summary:"String: {root}"}}},size:{options:[t.sm,t.md],control:{type:"radio"},description:"Title size variant",table:{type:{summary:"UISize.sm | UISize.md"},defaultValue:{summary:"UISize.md"}}}},args:{children:"Title",size:t.md,classes:{}},decorators:[o=>e.jsx(o,{})]},i={render:o=>e.jsx(s,{...o})},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"22.5rem"},children:[e.jsx(s,{size:t.sm,children:"Small Title"}),e.jsx(s,{size:t.md,children:"Medium Title"}),e.jsx(s,{size:t.md,children:"This is a very long title text that should demonstrate text overflow behavior with ellipsis This is a very long title text that should demonstrate text overflow behavior with ellipsis"})]})};var l,a,n;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Title {...args} />
}`,...(n=(a=i.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '22.5rem'
  }}>
      <Title size={UISize.sm}>Small Title</Title>
      <Title size={UISize.md}>Medium Title</Title>
      <Title size={UISize.md}>
        This is a very long title text that should demonstrate text overflow behavior with ellipsis
        This is a very long title text that should demonstrate text overflow behavior with ellipsis
      </Title>
    </div>
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const v=["Default","AllVariants"];export{r as AllVariants,i as Default,v as __namedExportsOrder,f as default};
