import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{S as h}from"./IconMonoAccount-hN_A1RiC.js";import{b as e,U as n}from"./enums-j1G55Avl.js";import"./etag-C4mhMif4.js";import"./link-i8Vdy082.js";import"./logo-CpEpTeSO.js";import"./input-Cb6zUZKs.js";import"./title-DMBq_gjU.js";import{B as i}from"./button-Dn6_MprM.js";import"./avatar-Dw7VE7nt.js";import"./loader-DjLiw7AR.js";import"./select-BiNXl3aT.js";import"./tokenID-BtSuzah3.js";import{T as o}from"./tooltip-BZIAJRfH.js";import"./switcher-CYqRQcCk.js";import"./snackbar-3enaQt1z.js";import"./textarea-Cxlbd_yw.js";import"./copyLink-BytqdUi0.js";import"./envelope-UyDJcHHj.js";import"./separator-Lc8UIbZS.js";import"./sortButton-DO6JhAAs.js";import"./backButton-I5T8UvXO.js";import"./navBarItem-BmhEqPzT.js";import"./paperStatus-Nc_ueS_S.js";import"./actionMenuItem-D6ZAt_0h.js";import"./copyLinkSecure-DKkeiFSN.js";import"./privateMessage-DzZNFr4S.js";import"./greenTechnology-BbfY9D-t.js";import"./actionMenuButton-BDwytS_X.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-xf0-QVxD.js";import"./IconMonoClose-COlRpOzk.js";import"./IconMultiLogoDocumentGPS-ByIKl3WH.js";import"./IconMonoVisibilityOff-CrMAnSJv.js";import"./useAppType-DQSG-477.js";import"./IconMonoCaretDown-nbCVVf6N.js";import"./IconMonoKey-genEvUgq.js";import"./useTranslation-CO63FDpr.js";import"./nonIterableRest-DsePzpQ9.js";import"./IconMonoCopy-BHCnYk-6.js";import"./IconMultiEnvelope-DJwiFN9O.js";import"./IconMonoArrowDown-DIN74zz8.js";import"./IconMonoChevronLeft-DNt7JkQa.js";import"./IconMonoCheck-BK_tYEQw.js";import"./IconMonoDownload-ChYAXVJF.js";import"./IconMonoCopyLinkSecure-DMFOQmOk.js";import"./IconMonoChevronDown-Cg9ovnWJ.js";import"./IconMonoLeaf-BVG7aNLw.js";import"./IconMonoInlineDots-B8UHOh6O.js";const ct={title:"Components/Atoms/Tooltip",component:o,parameters:{layout:"centered",docs:{description:{component:'<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-36867&t=7YFvqNnwPTCVedNF-4" target="_blank"><b>Figma Design</b></a>'}}},tags:["autodocs"],argTypes:{placement:{options:[e.top,e.bottom,e.left,e.right,e.topStart,e.bottomStart,e.leftStart,e.rightStart,e.topEnd,e.bottomEnd,e.leftEnd,e.rightEnd],control:{type:"select"},description:"Tooltip placement",table:{type:{summary:"UIPlacement"},defaultValue:{summary:e.bottom}}},content:{control:{type:"text"},description:"Tooltip content",table:{type:{summary:"string"}}},classes:{control:{type:"object"},description:"Classes to apply to the tooltip",table:{type:{summary:"String: {root}"}}}},args:{placement:e.bottom,content:"Tooltip content",classes:{}},decorators:[r=>t.jsx("div",{style:{paddingBlock:"1rem"},children:t.jsx(r,{})})]},l={render:r=>t.jsx(o,{...r,children:t.jsx(i,{size:n.sm,title:"Hover me",children:"Hover me"})}),args:{content:"Default tooltip content"}},m={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3rem",padding:"2rem"},children:[t.jsxs("div",{style:{display:"grid",gap:"1rem",placeItems:"center"},children:[t.jsx(o,{content:"Account icon tooltip",children:t.jsx(h,{})}),t.jsx(o,{content:"This is a very long tooltip content that exceeds 30 characters and demonstrates automatic styling",children:t.jsx(i,{size:n.sm,title:"Long",children:"Long"})}),t.jsx(o,{content:"Short content",children:t.jsx(i,{size:n.sm,title:"Short",children:"Short"})})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2rem"},children:[t.jsx(o,{content:"Top placement",placement:e.top,children:t.jsx(i,{size:n.sm,title:"Top"})}),t.jsx(o,{content:"Top start placement",placement:e.topStart,children:t.jsx(i,{size:n.sm,title:"Top Start"})}),t.jsx(o,{content:"Top end placement",placement:e.topEnd,children:t.jsx(i,{size:n.sm,title:"Top End"})}),t.jsx(o,{content:"Left placement",placement:e.left,children:t.jsx(i,{size:n.sm,title:"Left"})}),t.jsx(o,{content:"Left start placement",placement:e.leftStart,children:t.jsx(i,{size:n.sm,title:"Left Start"})}),t.jsx(o,{content:"Left end placement",placement:e.leftEnd,children:t.jsx(i,{size:n.sm,title:"Left End"})}),t.jsx(o,{content:"Right placement",placement:e.right,children:t.jsx(i,{size:n.sm,title:"Right"})}),t.jsx(o,{content:"Right start placement",placement:e.rightStart,children:t.jsx(i,{size:n.sm,title:"Right Start"})}),t.jsx(o,{content:"Right end placement",placement:e.rightEnd,children:t.jsx(i,{size:n.sm,title:"Right End"})}),t.jsx(o,{content:"Bottom placement",placement:e.bottom,children:t.jsx(i,{size:n.sm,title:"Bottom"})}),t.jsx(o,{content:"Bottom start placement",placement:e.bottomStart,children:t.jsx(i,{size:n.sm,title:"Bottom Start"})}),t.jsx(o,{content:"Bottom end placement",placement:e.bottomEnd,children:t.jsx(i,{size:n.sm,title:"Bottom End"})})]})]})};var p,s,a;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <Button size={UISize.sm} title="Hover me">
        Hover me
      </Button>
    </Tooltip>,
  args: {
    content: 'Default tooltip content'
  }
}`,...(a=(s=l.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var c,d,g;m.parameters={...m.parameters,docs:{...(c=m.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    padding: '2rem'
  }}>
      <div style={{
      display: 'grid',
      gap: '1rem',
      placeItems: 'center'
    }}>
        <Tooltip content="Account icon tooltip">
          <IconMonoAccount />
        </Tooltip>
        <Tooltip content="This is a very long tooltip content that exceeds 30 characters and demonstrates automatic styling">
          <Button size={UISize.sm} title="Long">
            Long
          </Button>
        </Tooltip>
        <Tooltip content="Short content">
          <Button size={UISize.sm} title="Short">
            Short
          </Button>
        </Tooltip>
      </div>

      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem'
    }}>
        <Tooltip content="Top placement" placement={UIPlacement.top}>
          <Button size={UISize.sm} title="Top" />
        </Tooltip>
        <Tooltip content="Top start placement" placement={UIPlacement.topStart}>
          <Button size={UISize.sm} title="Top Start" />
        </Tooltip>
        <Tooltip content="Top end placement" placement={UIPlacement.topEnd}>
          <Button size={UISize.sm} title="Top End" />
        </Tooltip>
        <Tooltip content="Left placement" placement={UIPlacement.left}>
          <Button size={UISize.sm} title="Left" />
        </Tooltip>
        <Tooltip content="Left start placement" placement={UIPlacement.leftStart}>
          <Button size={UISize.sm} title="Left Start" />
        </Tooltip>
        <Tooltip content="Left end placement" placement={UIPlacement.leftEnd}>
          <Button size={UISize.sm} title="Left End" />
        </Tooltip>
        <Tooltip content="Right placement" placement={UIPlacement.right}>
          <Button size={UISize.sm} title="Right" />
        </Tooltip>
        <Tooltip content="Right start placement" placement={UIPlacement.rightStart}>
          <Button size={UISize.sm} title="Right Start" />
        </Tooltip>
        <Tooltip content="Right end placement" placement={UIPlacement.rightEnd}>
          <Button size={UISize.sm} title="Right End" />
        </Tooltip>
        <Tooltip content="Bottom placement" placement={UIPlacement.bottom}>
          <Button size={UISize.sm} title="Bottom" />
        </Tooltip>
        <Tooltip content="Bottom start placement" placement={UIPlacement.bottomStart}>
          <Button size={UISize.sm} title="Bottom Start" />
        </Tooltip>
        <Tooltip content="Bottom end placement" placement={UIPlacement.bottomEnd}>
          <Button size={UISize.sm} title="Bottom End" />
        </Tooltip>
      </div>
    </div>
}`,...(g=(d=m.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const dt=["Default","AllVariants"];export{m as AllVariants,l as Default,dt as __namedExportsOrder,ct as default};
