import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as s}from"./textarea-Cxlbd_yw.js";import"./index-xf0-QVxD.js";import"./_commonjsHelpers-CqkleIqs.js";const x={title:"Components/Atoms/Textarea",component:s,parameters:{layout:"centered",docs:{description:{component:'<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36566&t=ufJEB4XGwoXvB0ef-4" target="_blank"><b>Figma Design</b></a>'}}},tags:["autodocs"],argTypes:{classes:{control:{type:"object"},description:"Classes to apply to the textarea",table:{type:{summary:"String: {root, textarea}"}}},disabled:{control:{type:"boolean"},description:"Disable the textarea",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:{type:"text"},description:"Placeholder text",table:{type:{summary:"string"},defaultValue:{summary:"Message…"}}},value:{control:{type:"text"},description:"Textarea content",table:{type:{summary:"string"}}},onChange:{description:"Callback when textarea content changes",table:{type:{summary:"(event: ChangeEvent<HTMLTextAreaElement>) => void"}}}},args:{placeholder:"Message…",value:"",disabled:!1},decorators:[c=>e.jsx("div",{style:{width:"22.5rem"},children:e.jsx(c,{})})]},t={args:{classes:{}}},a={render:()=>e.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[e.jsx(s,{placeholder:"Default"}),e.jsx(s,{value:"With Content. This is a sample text that demonstrates how the textarea looks with content."}),e.jsx(s,{placeholder:"Disabled",disabled:!0})]})};var r,o,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    classes: {}
  }
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var n,i,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '1rem'
  }}>
      <Textarea placeholder="Default" />
      <Textarea value="With Content. This is a sample text that demonstrates how the textarea looks with content." />
      <Textarea placeholder="Disabled" disabled />
    </div>
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const y=["Default","AllVariants"];export{a as AllVariants,t as Default,y as __namedExportsOrder,x as default};
