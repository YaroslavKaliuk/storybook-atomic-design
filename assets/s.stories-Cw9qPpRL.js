import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BKyFwriW.js";import{S as s}from"./switcher-CYqRQcCk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-xf0-QVxD.js";const V={title:"Components/Atoms/Switcher",component:s,parameters:{layout:"centered",docs:{description:{component:'<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=2409-25253&t=V4rkNQDpTDex6YmT-0" target="_blank"><b>Figma Design</b></a>'}}},tags:["autodocs"],argTypes:{title:{control:{type:"text"},description:"Title of the switcher",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},disabled:{control:{type:"boolean"},description:"Disable the switcher",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},checked:{control:{type:"boolean"},description:"Control the switcher state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onChange:{description:"Callback when switcher state changes",table:{type:{summary:"(event: React.ChangeEvent<HTMLInputElement>) => void"}}},id:{control:{type:"text"},description:"ID attribute for the input element",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},name:{control:{type:"text"},description:"Name attribute for the input element",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},classes:{control:{type:"object"},description:"Classes to apply to the switcher",table:{type:{summary:"String: {root, title, input}"}}}},args:{title:"",disabled:!1,checked:!1,id:"",name:"",classes:{}},decorators:[(r,a)=>{const[d,n]=c.useState(a.args.checked);return a.args.checked!==d&&n(a.args.checked),t.jsx(r,{args:{...a.args,checked:d,onChange:l=>n(l.target.checked)}})}]},o={render:r=>t.jsx(s,{...r})},i={render:function(){const[a,d]=c.useState(!1),[n,l]=c.useState(!0),[y,f]=c.useState(!1),[C,b]=c.useState(!0);return t.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[t.jsx(s,{title:"Default",checked:a,onChange:e=>d(e.target.checked)}),t.jsx(s,{title:"Checked",checked:n,onChange:e=>l(e.target.checked)}),t.jsx(s,{title:"Disabled",disabled:!0,checked:y,onChange:e=>f(e.target.checked)}),t.jsx(s,{title:"Disabled Checked",disabled:!0,checked:C,onChange:e=>b(e.target.checked)})]})}};var h,u,m;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Switcher {...args} />
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,k,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function AllVariantsRender() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(true);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(true);
    return <div style={{
      display: 'grid',
      gap: '1rem'
    }}>
        <Switcher title="Default" checked={checked1} onChange={e => setChecked1(e.target.checked)} />
        <Switcher title="Checked" checked={checked2} onChange={e => setChecked2(e.target.checked)} />
        <Switcher title="Disabled" disabled checked={checked3} onChange={e => setChecked3(e.target.checked)} />
        <Switcher title="Disabled Checked" disabled checked={checked4} onChange={e => setChecked4(e.target.checked)} />
      </div>;
  }
}`,...(g=(k=i.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const v=["Default","AllVariants"];export{i as AllVariants,o as Default,v as __namedExportsOrder,V as default};
