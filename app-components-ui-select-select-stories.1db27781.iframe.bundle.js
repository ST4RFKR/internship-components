"use strict";(self.webpackChunkinternship_components=self.webpackChunkinternship_components||[]).push([[898],{"./src/app/components/ui/select/select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Label:()=>Label,SelectIcon:()=>SelectIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>select_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.1.5_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/next@15.1.5_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-select@2.1.4_@types+react-dom@19.0.3_@types+react@19.0.7__@types+react@19.0.7_3goj3jngaetblmil5kgkgnzt6q/node_modules/@radix-ui/react-select/dist/index.mjs"),cn=__webpack_require__("./src/app/utils/cn.ts"),typography=__webpack_require__("./src/app/components/ui/typography/typography.tsx"),components=__webpack_require__("./src/app/assets/icon/components/index.ts");const Select=dist.bL,SelectValue=(dist.YJ,dist.WT),SelectTrigger=react.forwardRef((({icon,label,className,children,...props},ref)=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[label&&(0,jsx_runtime.jsx)(typography.A,{variant:"regular_text_14",className:(0,cn.cn)("text-sm leading-6  text-light-900 disabled:text-light-900 ",className),children:label}),(0,jsx_runtime.jsxs)(dist.l9,{ref,className:(0,cn.cn)("group flex h-9 w-full items-center justify-between whitespace-nowrap rounded-sm border border-dark-100 bg-transparent px-3 py-1.5 text-base hover:border-light-900 hover:text-light-900 placeholder:text-muted-foreground focus:border-2 focus:border-accent-500 disabled:cursor-not-allowed disabled:text-dark-100 disabled:border-dark-100 [&>span]:line-clamp-1 data-[state=open]:rounded-b-none data-[state=open]:border-light-100",className),...props,children:[(0,jsx_runtime.jsxs)("div",{className:"flex",children:[" ",icon&&(0,jsx_runtime.jsx)(dist.In,{asChild:!0,className:"mr-3",children:icon}),children]}),(0,jsx_runtime.jsx)(dist.In,{asChild:!0,children:(0,jsx_runtime.jsx)(components.yQ,{className:"group-data-[state=open]:rotate-180"})})]})]})));SelectTrigger.displayName=dist.l9.displayName;const SelectContent=react.forwardRef((({className,children,position="popper",...props},ref)=>(0,jsx_runtime.jsx)(dist.ZL,{children:(0,jsx_runtime.jsx)(dist.UC,{ref,className:(0,cn.cn)("max-w-[210px] relative z-50 max-h-96 min-w-[8rem] overflow-hidden border-dark-100  rounded-sm border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=open]:rounded-t-none data-[state=open]:border-light-100","popper"===position&&"data-[side=bottom]:translate-y-0 data-[side=left]:-translate-x-0 data-[side=right]:translate-x-0 data-[side=top]:-translate-y-0",className),position,...props,children:(0,jsx_runtime.jsx)(dist.LM,{className:(0,cn.cn)("p-1","popper"===position&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children})})})));SelectContent.displayName=dist.UC.displayName;const SelectLabel=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)(dist.JU,{ref,className:(0,cn.cn)("px-2 py-1.5 text-base font-semibold",className),...props})));SelectLabel.displayName=dist.JU.displayName;const SelectItem=react.forwardRef((({icon,className,children,...props},ref)=>(0,jsx_runtime.jsxs)(dist.q7,{ref,className:(0,cn.cn)("relative flex w-full h-full cursor-default select-none items-center pl-2 pr-8 text-base outline-none hover:text-accent-500 hover:bg-dark-300 focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",className),...props,children:[(0,jsx_runtime.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center"}),icon&&(0,jsx_runtime.jsx)(dist.In,{asChild:!0,className:(0,cn.cn)("mr-[12px]"),children:icon}),(0,jsx_runtime.jsx)(dist.p4,{children})]})));SelectItem.displayName=dist.q7.displayName,SelectTrigger.__docgenInfo={description:"",methods:[],props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}},SelectContent.__docgenInfo={description:"",methods:[],props:{position:{defaultValue:{value:"'popper'",computed:!1},required:!1}}},SelectLabel.__docgenInfo={description:"",methods:[]},SelectItem.__docgenInfo={description:"",methods:[],props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const select_stories={title:"Select",component:Select},Default={args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(SelectTrigger,{className:"w-[210px]",children:(0,jsx_runtime.jsx)(SelectValue,{placeholder:"Select-box"})}),(0,jsx_runtime.jsxs)(SelectContent,{children:[(0,jsx_runtime.jsx)(SelectItem,{value:"Select-box",children:"Light"}),(0,jsx_runtime.jsx)(SelectItem,{value:"Select-box",children:"Dark"}),(0,jsx_runtime.jsx)(SelectItem,{value:"Select-box",children:"System"})]})]}),disabled:!1},argTypes:{disabled:{control:"boolean"}}},Label={args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(SelectTrigger,{className:"w-[210px]",label:"Select-box",children:(0,jsx_runtime.jsx)(SelectValue,{placeholder:"Select-box"})}),(0,jsx_runtime.jsxs)(SelectContent,{children:[(0,jsx_runtime.jsx)(SelectItem,{value:"Select-box",children:"Light"}),(0,jsx_runtime.jsx)(SelectItem,{value:"Select-box",children:"Dark"}),(0,jsx_runtime.jsx)(SelectItem,{value:"Select-box",children:"System"})]})]}),disabled:!1},argTypes:{disabled:{control:"boolean"}}},SelectIcon={args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(SelectTrigger,{className:"w-[210px]",icon:(0,jsx_runtime.jsx)(components.O,{}),children:(0,jsx_runtime.jsx)(SelectValue,{placeholder:"Russia"})}),(0,jsx_runtime.jsx)(SelectContent,{children:(0,jsx_runtime.jsx)(SelectItem,{value:"Select-box",icon:(0,jsx_runtime.jsx)(components.$p,{}),children:"English"})})]}),disabled:!1},argTypes:{disabled:{control:"boolean"}}},__namedExportsOrder=["Default","Label","SelectIcon"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\r\n        <SelectTrigger className="w-[210px]">\r\n          <SelectValue placeholder="Select-box" />\r\n        </SelectTrigger>\r\n        <SelectContent>\r\n          <SelectItem value="Select-box">Light</SelectItem>\r\n          <SelectItem value="Select-box">Dark</SelectItem>\r\n          <SelectItem value="Select-box">System</SelectItem>\r\n        </SelectContent>\r\n      </>,\n    disabled: false\n  },\n  argTypes: {\n    disabled: {\n      control: \'boolean\'\n    }\n  }\n}',...Default.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\r\n        <SelectTrigger className="w-[210px]" label={\'Select-box\'}>\r\n          <SelectValue placeholder="Select-box" />\r\n        </SelectTrigger>\r\n        <SelectContent>\r\n          <SelectItem value="Select-box">Light</SelectItem>\r\n          <SelectItem value="Select-box">Dark</SelectItem>\r\n          <SelectItem value="Select-box">System</SelectItem>\r\n        </SelectContent>\r\n      </>,\n    disabled: false\n  },\n  argTypes: {\n    disabled: {\n      control: \'boolean\'\n    }\n  }\n}',...Label.parameters?.docs?.source}}},SelectIcon.parameters={...SelectIcon.parameters,docs:{...SelectIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\r\n        <SelectTrigger className="w-[210px]" icon={<RussianFlag />}>\r\n          <SelectValue placeholder="Russia" />\r\n        </SelectTrigger>\r\n        <SelectContent>\r\n          <SelectItem value="Select-box" icon={<EnglishFlag />}>\r\n            English\r\n          </SelectItem>\r\n        </SelectContent>\r\n      </>,\n    disabled: false\n  },\n  argTypes: {\n    disabled: {\n      control: \'boolean\'\n    }\n  }\n}',...SelectIcon.parameters?.docs?.source}}}}}]);