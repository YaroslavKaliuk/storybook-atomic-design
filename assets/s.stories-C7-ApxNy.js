import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-BKyFwriW.js";import{S as m}from"./select-BiNXl3aT.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-xf0-QVxD.js";import"./IconMonoCaretDown-nbCVVf6N.js";const w={title:"Components/Atoms/Select",component:m,parameters:{layout:"centered",docs:{description:{component:'<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36380&m=dev" target="_blank"><b>Figma Design</b></a>'}}},tags:["autodocs"],argTypes:{isFilter:{control:{type:"boolean"},description:"Enable filtering dropdown items based on input text",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Disable the select input",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:{type:"text"},description:"Placeholder text for the input",table:{type:{summary:"string"},defaultValue:{summary:"Placeholder"}}},dropdown:{control:{type:"object"},description:"Array of options for the dropdown",table:{type:{summary:"{ value: string }[]"}}},onChange:{description:"Callback when selection changes",table:{type:{summary:"(value: string) => void"}}},classes:{control:{type:"object"},description:"Classes to apply to the select",table:{type:{summary:"String: {root, selected, dropdown, dropdownScroll, dropdownItem, icon}"}}}},args:{isFilter:!1,disabled:!1,placeholder:"Placeholder",dropdown:[{value:"Apple"},{value:"Banana"},{value:"Orange"},{value:"Grapes"},{value:"Mango"},{value:"Pear"}],classes:{}},decorators:[(t,n)=>{const[,r]=u.useState("");return e.jsx("div",{style:{gap:"1rem",display:"flex",flexDirection:"column",alignItems:"center",width:"100%",padding:"1rem",backgroundColor:"var(--blue-8)",borderRadius:"var(--radius-md)"},children:e.jsx("div",{style:{width:"22.5rem",height:"20rem"},children:e.jsx(t,{args:{...n.args,onChange:r}})})})}]},a={},o={render:t=>{const n=[{args:{...t,placeholder:"Default"}},{args:{...t,isFilter:!0,placeholder:"Type to filter..."}},{args:{...t,placeholder:"Dropdown items with long text",dropdown:[{value:"Very long option name that might wrap to multiple lines"},{value:"Another long option with different text content"},{value:"Short option"},{value:"Yet another long option to demonstrate text wrapping"}]}},{args:{...t,disabled:!0,placeholder:"Disabled"}}];return e.jsx(e.Fragment,{children:n.map(r=>e.jsx("div",{style:{marginBottom:"1rem"},children:e.jsx(m,{...r.args,onChange:()=>{}})},r.args.placeholder))})}};var l,s,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,p,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const variants = [{
      args: {
        ...args,
        placeholder: 'Default'
      }
    }, {
      args: {
        ...args,
        isFilter: true,
        placeholder: 'Type to filter...'
      }
    }, {
      args: {
        ...args,
        placeholder: 'Dropdown items with long text',
        dropdown: [{
          value: 'Very long option name that might wrap to multiple lines'
        }, {
          value: 'Another long option with different text content'
        }, {
          value: 'Short option'
        }, {
          value: 'Yet another long option to demonstrate text wrapping'
        }]
      }
    }, {
      args: {
        ...args,
        disabled: true,
        placeholder: 'Disabled'
      }
    }];
    return <>
        {variants.map(variant => <div key={variant.args.placeholder} style={{
        marginBottom: '1rem'
      }}>
            <Select {...variant.args} onChange={() => {}} />
          </div>)}
      </>;
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const x=["Default","AllVariants"];export{o as AllVariants,a as Default,x as __namedExportsOrder,w as default};
