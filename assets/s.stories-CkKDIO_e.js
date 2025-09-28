import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{a as r}from"./avatar-BKnVde2b.js";import{R as o}from"./recipientList-Bv7J1EhI.js";import"./index-xf0-QVxD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./modal-CHjJKAc3.js";import"./index-BKyFwriW.js";import"./IconMonoClose-COlRpOzk.js";import"./enums-j1G55Avl.js";import"./appBar-tFPqSx4O.js";import"./IconMonoFullscreenExit-BikgWgQk.js";import"./etag-C4mhMif4.js";import"./link-i8Vdy082.js";import"./logo-CpEpTeSO.js";import"./IconMultiLogoDocumentGPS-ByIKl3WH.js";import"./input-Cb6zUZKs.js";import"./IconMonoVisibilityOff-CrMAnSJv.js";import"./title-DMBq_gjU.js";import"./useAppType-DQSG-477.js";import"./button-Dn6_MprM.js";import"./loader-DjLiw7AR.js";import"./avatar-Dw7VE7nt.js";import"./select-BiNXl3aT.js";import"./IconMonoCaretDown-nbCVVf6N.js";import"./tokenID-BtSuzah3.js";import"./IconMonoKey-genEvUgq.js";import"./tooltip-BZIAJRfH.js";import"./switcher-CYqRQcCk.js";import"./snackbar-3enaQt1z.js";import"./useTranslation-CO63FDpr.js";import"./nonIterableRest-DsePzpQ9.js";import"./textarea-Cxlbd_yw.js";import"./copyLink-BytqdUi0.js";import"./IconMonoCopy-BHCnYk-6.js";import"./envelope-UyDJcHHj.js";import"./IconMultiEnvelope-DJwiFN9O.js";import"./separator-Lc8UIbZS.js";import"./sortButton-DO6JhAAs.js";import"./IconMonoArrowDown-DIN74zz8.js";import"./backButton-I5T8UvXO.js";import"./IconMonoChevronLeft-DNt7JkQa.js";import"./navBarItem-BmhEqPzT.js";import"./paperStatus-Nc_ueS_S.js";import"./IconMonoCheck-BK_tYEQw.js";import"./IconMonoDownload-ChYAXVJF.js";import"./actionMenuItem-D6ZAt_0h.js";import"./copyLinkSecure-DKkeiFSN.js";import"./IconMonoCopyLinkSecure-DMFOQmOk.js";import"./privateMessage-DzZNFr4S.js";import"./IconMonoChevronDown-Cg9ovnWJ.js";import"./greenTechnology-BbfY9D-t.js";import"./IconMonoLeaf-BVG7aNLw.js";import"./actionMenuButton-BDwytS_X.js";import"./IconMonoInlineDots-B8UHOh6O.js";import"./navBar-CX-554lM.js";import"./IconMonoAccount-hN_A1RiC.js";import"./IconMonoHome-E6OPFzdv.js";import"./IconMonoUpload-srTbPqSq.js";import"./addEtag-DJoOLYjC.js";import"./paperItem-4Av-XX6g.js";import"./notificationItem-D8bqYN2Q.js";import"./actionMenu-BD3Mn7Jf.js";import"./signInForm-BV5xVnZg.js";import"./index.esm-Bjq5LNFj.js";import"./signInFooter-CoHUJtuQ.js";import"./signInButtons-C5Hi3YF-.js";import"./gpsStatusItem-CrYPUUtw.js";import"./recipientItem-C4-sqzHe.js";import"./IconMonoEdit-DaKRr6or.js";import"./paperParticipantList-CL6EDBBa.js";import"./signInContinueWithEmail-BgQSP4FW.js";const Ai={title:"Components/Organisms/RecipientList",component:o,parameters:{layout:"centered",docs:{description:{component:'<a href="https://www.figma.com/design/ywExpWsTLdXvZ9ZEelZdAq/Document-GPS---Design-System-1?node-id=738-37140&m=dev" target="_blank"><b>Figma Design</b></a>'}}},tags:["autodocs"],argTypes:{recipients:{control:{type:"object"},description:"Array of recipient data",table:{type:{summary:"RecipientData[]"}}},classes:{control:{type:"object"},description:"Classes to apply to the component",table:{type:{summary:"String: {root}"}}}},args:{recipients:[{id:"1",email:"john.doe@example.com",avatarImage:r,userInitials:"JD"},{id:"2",email:"jane.smith@company.org",avatarImage:r,userInitials:"JS"}],classes:{}},decorators:[m=>i.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%",padding:"1rem",backgroundColor:"var(--blue-8)",borderRadius:"var(--radius-md)",transition:"background-color 0.3s"},children:i.jsx("div",{style:{width:"22.5rem"},children:i.jsx(m,{})})})]},t={render:m=>i.jsx(o,{...m})},e={render:()=>i.jsxs("div",{style:{gap:"1rem",display:"flex",alignItems:"center",flexDirection:"column"},children:[i.jsx("div",{style:{width:"22.5rem"},children:i.jsx(o,{recipients:[{id:"1",email:"john.doe@example.com",avatarImage:r,userInitials:"JD"},{id:"2",email:"jane.smith@company.org",avatarImage:r,userInitials:"JS"}]})}),i.jsx("div",{style:{width:"40rem"},children:i.jsx(o,{recipients:[{id:"3",email:"user1@domain.com",avatarImage:r,userInitials:"U1"},{id:"4",email:"user2@domain.com",avatarImage:r,userInitials:"U2"}]})})]})};var n,a,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <RecipientList {...args} />
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var p,d,c;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    gap: '1rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }}>
      <div style={{
      width: '22.5rem'
    }}>
        <RecipientList recipients={[{
        id: '1',
        email: 'john.doe@example.com',
        avatarImage,
        userInitials: 'JD'
      }, {
        id: '2',
        email: 'jane.smith@company.org',
        avatarImage,
        userInitials: 'JS'
      }]} />
      </div>
      <div style={{
      width: '40rem'
    }}>
        <RecipientList recipients={[{
        id: '3',
        email: 'user1@domain.com',
        avatarImage,
        userInitials: 'U1'
      }, {
        id: '4',
        email: 'user2@domain.com',
        avatarImage,
        userInitials: 'U2'
      }]} />
      </div>
    </div>
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Ci=["Default","AllVariants"];export{e as AllVariants,t as Default,Ci as __namedExportsOrder,Ai as default};
