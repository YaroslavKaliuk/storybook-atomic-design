import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{C as d}from"./copyLink-BytqdUi0.js";import"./index-xf0-QVxD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BKyFwriW.js";import"./IconMonoCopy-BHCnYk-6.js";const h={title:"Components/Atoms/CopyLink",component:d,parameters:{layout:"centered",docs:{description:{component:'<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=3594-7908&t=s9IlRjdegsE5NxJ3-0" target="_blank"><b>Figma Design</b></a>'}}},tags:["autodocs"],argTypes:{title:{control:{type:"text"},description:"Link to be copied",table:{type:{summary:"string"}}},onCopy:{description:"Callback function triggered after successful copy",table:{type:{summary:"() => void"}}},classes:{control:{type:"object"},description:"Classes to apply to the copy link",table:{type:{summary:"String: {root, icon, title}"}}}},args:{title:"https://app.dev.shelterzoom.com/paper-view/66d8541209202fa9abc9d161?",classes:{}},decorators:[c=>i.jsx(c,{})]},e={args:{title:"https://app.dev.shelterzoom.com/paper-view/66d8541209202fa9abc9d161?"},parameters:{docs:{description:{story:"Default copy link component with icon and text."}}}},t={args:{title:"https://app.dev.shelterzoom.com/paper-view/66d8541209202fa9abc9d161?",onCopy:()=>alert("Link copied!")},parameters:{docs:{description:{story:"Copy link with callback function triggered after successful copy."}}}};var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: 'https://app.dev.shelterzoom.com/paper-view/66d8541209202fa9abc9d161?'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default copy link component with icon and text.'
      }
    }
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var r,p,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: 'https://app.dev.shelterzoom.com/paper-view/66d8541209202fa9abc9d161?',
    onCopy: () => alert('Link copied!')
  },
  parameters: {
    docs: {
      description: {
        story: 'Copy link with callback function triggered after successful copy.'
      }
    }
  }
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const b=["Default","WithCallback"];export{e as Default,t as WithCallback,b as __namedExportsOrder,h as default};
