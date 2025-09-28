import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as t}from"./paperStatus-Nc_ueS_S.js";import"./index-xf0-QVxD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IconMonoCheck-BK_tYEQw.js";import"./index-BKyFwriW.js";import"./IconMonoDownload-ChYAXVJF.js";const f={title:"Components/Atoms/PaperStatus",component:t,parameters:{layout:"centered",docs:{description:{component:'<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37318&m=dev" target="_blank"><b>Figma Design</b></a>'}}},tags:["autodocs"],argTypes:{status:{control:{type:"radio"},options:["inactive","opened","downloaded","shared","shared_downloaded"],description:"Status of the document",table:{type:{summary:"'inactive' | 'opened' | 'downloaded' | 'shared' | 'shared_downloaded'"},defaultValue:{summary:"'inactive'"}}},classes:{control:{type:"object"},description:"Custom classes for styling",table:{type:{summary:'Partial<Record<"root" | "item", string>>'}}}},args:{status:"inactive",classes:{}}},a={args:{status:"inactive"},decorators:[c=>e.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%",padding:"1rem",backgroundColor:"var(--blue-8)",borderRadius:"var(--radius-md)"},children:e.jsx(c,{})})]},s={render:()=>e.jsxs("div",{style:{gap:"0.5rem",display:"flex",justifyContent:"center",width:"100%",padding:"1rem",backgroundColor:"var(--blue-8)",borderRadius:"var(--radius-md)"},children:[e.jsx(t,{status:"inactive"}),e.jsx(t,{status:"opened"}),e.jsx(t,{status:"downloaded"}),e.jsx(t,{status:"shared"}),e.jsx(t,{status:"shared_downloaded"})]})};var r,d,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    status: 'inactive'
  },
  decorators: [Story => <div style={{
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '1rem',
    backgroundColor: 'var(--blue-8)',
    borderRadius: 'var(--radius-md)'
  }}>
        <Story />
      </div>]
}`,...(o=(d=a.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var n,i,u;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    gap: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '1rem',
    backgroundColor: 'var(--blue-8)',
    borderRadius: 'var(--radius-md)'
  }}>
      <PaperStatus status="inactive" />
      <PaperStatus status="opened" />
      <PaperStatus status="downloaded" />
      <PaperStatus status="shared" />
      <PaperStatus status="shared_downloaded" />
    </div>
}`,...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const h=["Default","AllVariants"];export{s as AllVariants,a as Default,h as __namedExportsOrder,f as default};
