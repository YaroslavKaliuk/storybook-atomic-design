import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as s}from"./avatar-BKnVde2b.js";import{R as r}from"./recipientItem-C4-sqzHe.js";import"./index-xf0-QVxD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IconMonoEdit-DaKRr6or.js";import"./index-BKyFwriW.js";import"./avatar-Dw7VE7nt.js";import"./enums-j1G55Avl.js";import"./useTranslation-CO63FDpr.js";import"./nonIterableRest-DsePzpQ9.js";const D={title:"Components/Molecules/RecipientItem",component:r,parameters:{layout:"centered",docs:{description:{component:'<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37140&m=dev" target="_blank"><b>Figma Design</b></a>'}}},tags:["autodocs"],argTypes:{email:{control:{type:"text"},description:"Recipient email address",table:{type:{summary:"string"}}},avatarImage:{control:{type:"text"},description:"Avatar image URL",table:{type:{summary:"string"}}},userInitials:{control:{type:"text"},description:"User initials for avatar fallback",table:{type:{summary:"string"}}},classes:{control:{type:"object"},description:"Custom CSS classes for styling",table:{type:{summary:"Partial<Record<'root' | 'avatar' | 'actions' | 'button' | 'buttonText' | 'buttonDelete', string>>"}}}},args:{email:"john.doe@example.com",avatarImage:s,userInitials:"JD"},decorators:[i=>e.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%",padding:"1rem",backgroundColor:"var(--blue-8)",borderRadius:"var(--radius-md)",transition:"background-color 0.3s"},children:e.jsx("div",{style:{width:"22.5rem"},children:e.jsx(i,{})})})]},t={render:i=>e.jsx(r,{...i})},a={render:()=>e.jsxs("div",{style:{gap:"1rem",display:"flex",alignItems:"center",flexDirection:"column"},children:[e.jsx("div",{style:{width:"22.5rem"},children:e.jsx(r,{email:"john.doe@example.com",avatarImage:s,userInitials:"JD"})}),e.jsx("div",{style:{width:"40rem"},children:e.jsx(r,{email:"jane.smith@company.org",avatarImage:s,userInitials:"JS"})})]})};var o,n,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <RecipientItem {...args} />
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var l,d,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    gap: '1rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }}>
      <div style={{
      width: '22.5rem'
    }}>
        <RecipientItem email="john.doe@example.com" avatarImage={avatarImage} userInitials="JD" />
      </div>
      <div style={{
      width: '40rem'
    }}>
        <RecipientItem email="jane.smith@company.org" avatarImage={avatarImage} userInitials="JS" />
      </div>
    </div>
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const R=["Default","AllVariants"];export{a as AllVariants,t as Default,R as __namedExportsOrder,D as default};
