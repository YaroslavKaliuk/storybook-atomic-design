import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{U as e}from"./enums-j1G55Avl.js";import{C as g}from"./copyLinkSecure-DKkeiFSN.js";import"./index-xf0-QVxD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BKyFwriW.js";import"./IconMonoCopyLinkSecure-DMFOQmOk.js";import"./useTranslation-CO63FDpr.js";import"./nonIterableRest-DsePzpQ9.js";const w={title:"Components/Atoms/CopyLinkSecure",component:g,parameters:{layout:"centered",docs:{description:{component:'<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37612&m=dev" target="_blank"><b>Figma Design</b></a>'}}},tags:["autodocs"],argTypes:{title:{control:{type:"text"},description:"Link to be copied",table:{type:{summary:"string"}}},onCopy:{description:"Callback function triggered after successful copy",table:{type:{summary:"() => void"}}},size:{control:"radio",options:[e.sm,e.md],description:"Component size",table:{type:{summary:"Exclude<UISize, UISize.lg | UISize.xl>"},defaultValue:{summary:e.md}}},classes:{control:{type:"object"},description:"Classes to apply to the copy link secure",table:{type:{summary:"String: {root, icon, title}"}}}},args:{size:e.md,title:"plugins.copyLinkSecure.title",classes:{}},decorators:[u=>y.jsx(u,{})]},t={args:{title:"plugins.copyLinkSecure.title"},parameters:{docs:{description:{story:"Default copy link component with icon and text."}}}},o={args:{title:"plugins.copyLinkSecure.title",onCopy:()=>alert("Link copied!")},parameters:{docs:{description:{story:"Copy link with callback function triggered after successful copy."}}}},s={args:{title:"Copy secure upload link",size:e.sm}};var r,i,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: 'plugins.copyLinkSecure.title'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default copy link component with icon and text.'
      }
    }
  }
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var a,c,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'plugins.copyLinkSecure.title',
    onCopy: () => alert('Link copied!')
  },
  parameters: {
    docs: {
      description: {
        story: 'Copy link with callback function triggered after successful copy.'
      }
    }
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Copy secure upload link',
    size: UISize.sm
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const D=["Default","WithCallback","Small"];export{t as Default,s as Small,o as WithCallback,D as __namedExportsOrder,w as default};
