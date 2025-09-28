import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{U as e}from"./enums-j1G55Avl.js";import{L as o}from"./logo-CpEpTeSO.js";import"./index-xf0-QVxD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IconMultiLogoDocumentGPS-ByIKl3WH.js";import"./index-BKyFwriW.js";const f={title:"Components/Atoms/Logo",component:o,parameters:{layout:"centered",docs:{description:{component:'<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36848&t=MtlmuLFpYmTrC7kn-4" target="_blank"><b>Figma Design</b></a>'}}},tags:["autodocs"],argTypes:{size:{options:[e.sm,e.md,e.lg],control:{type:"radio"},description:"Logo size variant",table:{type:{summary:"UISize.sm | UISize.md | UISize.lg"},defaultValue:{summary:"UISize.md"}}},classes:{control:{type:"object"},description:"Custom CSS classes",table:{type:{summary:"Object: {root}"}}}},args:{size:e.md,classes:{}},decorators:[a=>s.jsx(a,{})]},r={render:a=>s.jsx(o,{...a})},t={render:()=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center"},children:[s.jsx(o,{size:e.sm}),s.jsx(o,{size:e.md}),s.jsx(o,{size:e.lg})]})};var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Logo {...args} />
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var c,l,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center'
  }}>
      <Logo size={UISize.sm} />
      <Logo size={UISize.md} />
      <Logo size={UISize.lg} />
    </div>
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const j=["Default","AllVariants"];export{t as AllVariants,r as Default,j as __namedExportsOrder,f as default};
