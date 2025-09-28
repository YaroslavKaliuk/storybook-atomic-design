import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{a as r}from"./enums-j1G55Avl.js";import{L as p}from"./link-i8Vdy082.js";import"./index-xf0-QVxD.js";import"./_commonjsHelpers-CqkleIqs.js";const L={title:"Components/Atoms/Link",component:p,parameters:{layout:"centered",docs:{description:{component:'<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37627&t=soOUYrXPdQi41gl1-4" target="_blank"><b>Figma Design</b></a>'}}},tags:["autodocs"],argTypes:{as:{options:["a","button"],control:{type:"radio"},description:"HTML element to render",table:{type:{summary:"a | button"},defaultValue:{summary:"a"}}},color:{options:[r.primary,r.secondary,r.special],control:{type:"radio"},description:"Link colors",table:{type:{summary:"UIColor"},defaultValue:{summary:r.primary}}},href:{control:{type:"text"},description:"URL for anchor tag",table:{type:{summary:"string"}},if:{arg:"as",eq:"a"}},children:{control:{type:"text"},description:"Link text content",table:{type:{summary:"string"}}},onClick:{description:"Click event handler",table:{type:{summary:"() => void"}}},classes:{control:{type:"object"},description:"Classes to apply to the link",table:{type:{summary:"String: {root}"}}}},args:{color:r.primary,as:"a",href:"#",children:"Link",classes:{}},decorators:[t=>n.jsx(t,{})]},e={args:{color:r.primary}},o={render:t=>{const m=[{color:r.primary,children:"Primary",description:""},{color:r.secondary,children:"Secondary",description:""},{color:r.special,children:"Special",description:""},{as:"button",children:"As button",href:void 0,description:""}];return n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:m.map((y,u)=>{const{description:g,...f}=y;return n.jsxs("div",{children:[n.jsx(p,{...t,...f}),n.jsx("div",{style:{fontSize:12,color:"#888"},children:g})]},u)})})}};var i,s,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: UIColor.primary
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const variants: Array<Partial<LinkProps> & {
      description: string;
    }> = [{
      color: UIColor.primary,
      children: 'Primary',
      description: ''
    }, {
      color: UIColor.secondary,
      children: 'Secondary',
      description: ''
    }, {
      color: UIColor.special,
      children: 'Special',
      description: ''
    }, {
      as: 'button',
      children: 'As button',
      href: undefined,
      description: ''
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        {variants.map((variant, i) => {
        const {
          description,
          ...linkProps
        } = variant;
        return <div key={i}>
              <Link {...args} {...linkProps} />
              <div style={{
            fontSize: 12,
            color: '#888'
          }}>{description}</div>
            </div>;
      })}
      </div>;
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const S=["Default","AllVariants"];export{o as AllVariants,e as Default,S as __namedExportsOrder,L as default};
