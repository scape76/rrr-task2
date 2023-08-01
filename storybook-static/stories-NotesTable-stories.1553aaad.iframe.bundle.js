"use strict";(self.webpackChunktask2=self.webpackChunktask2||[]).push([[510],{"./src/stories/NotesTable.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:function(){return Active},Archived:function(){return Archived},Empty:function(){return Empty},Loading:function(){return Loading},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return NotesTable_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),table=__webpack_require__("./src/components/ui/table.tsx"),Button=__webpack_require__("./src/stories/Button.tsx"),archive_restore=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/archive-restore.mjs"),archive=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/archive.mjs"),trash_2=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/trash-2.mjs"),Icons=__webpack_require__("./src/components/Icons.tsx"),NoteElementList=__webpack_require__("./src/stories/NoteElementList.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function NotesTable(_ref){var notes=_ref.notes,isArchived=_ref.isArchived,isLoading=_ref.isLoading;return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:"w-full flex justify-end my-2",children:(0,jsx_runtime.jsxs)(Button.z,{variant:"ghost",children:[(0,jsx_runtime.jsx)(Icons.P.plus,{className:"mr-2 h-4 w-4"}),"Create note"]})}),(0,jsx_runtime.jsxs)(table.iA,{children:[(0,jsx_runtime.jsxs)(table.Rn,{children:["A list of your ",isArchived?"archived":"active"," notes."]}),(0,jsx_runtime.jsx)(table.xD,{children:(0,jsx_runtime.jsxs)(table.SC,{children:[(0,jsx_runtime.jsx)(table.ss,{children:"Name"}),(0,jsx_runtime.jsx)(table.ss,{children:"Created"}),(0,jsx_runtime.jsx)(table.ss,{children:"Category"}),(0,jsx_runtime.jsx)(table.ss,{children:"Content"}),(0,jsx_runtime.jsx)(table.ss,{children:"Dates"}),(0,jsx_runtime.jsx)(table.ss,{children:(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-2 ml-11",children:[(0,jsx_runtime.jsx)(Button.z,{size:"icon",children:isArchived?(0,jsx_runtime.jsx)(archive_restore.Z,{className:"w-4 h-4"}):(0,jsx_runtime.jsx)(archive.Z,{className:"w-4 h-4"})}),(0,jsx_runtime.jsx)(Button.z,{size:"icon",variant:"destructive",children:(0,jsx_runtime.jsx)(trash_2.Z,{className:"w-4 h-4"})})]})})]})}),(0,jsx_runtime.jsx)(table.RM,{children:notes.length?notes.map((function(note){return(0,jsx_runtime.jsx)(NoteElementList.Z,(0,objectSpread2.Z)((0,objectSpread2.Z)({},note),{},{isArchived:isArchived,isLoading:isLoading}))})):(0,jsx_runtime.jsx)(table.SC,{children:(0,jsx_runtime.jsx)(table.pj,{colSpan:6,className:"h-24 text-center",children:"No results."})})})]})]})}try{NotesTable.displayName="NotesTable",NotesTable.__docgenInfo={description:"",displayName:"NotesTable",props:{notes:{defaultValue:null,description:"",name:"notes",required:!0,type:{name:"Note[]"}},isArchived:{defaultValue:null,description:"",name:"isArchived",required:!0,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/NotesTable.tsx#NotesTable"]={docgenInfo:NotesTable.__docgenInfo,name:"NotesTable",path:"src/stories/NotesTable.tsx#NotesTable"})}catch(__react_docgen_typescript_loader_error){}var _Active$parameters,_Active$parameters2,_Active$parameters2$d,_Archived$parameters,_Archived$parameters2,_Archived$parameters3,_Loading$parameters,_Loading$parameters2,_Loading$parameters2$,_Empty$parameters,_Empty$parameters2,_Empty$parameters2$do,note=__webpack_require__("./src/types/note.ts"),NotesTable_stories={title:"Example/Notes table",component:NotesTable,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},notes=[{id:"12aosdkas",category:note.W.TASK,content:"tomatoes, bread 3/9/2021",createdAt:new Date,name:"Shopping list",isArchived:!1},{id:"asdokoa12",category:note.W.THOUGHT,content:"build a house 21/01/2022",createdAt:new Date,name:"idk",isArchived:!1},{id:"asdas12",category:note.W.THOUGHT,content:"build a house 23/09/2022 24/10/2022",createdAt:new Date,name:"idk",isArchived:!1},{id:"12312312",category:note.W.IDEA,content:"plant a tree",createdAt:new Date,name:"3",isArchived:!1},{id:"asda2",category:note.W.THOUGHT,content:"build a house 09/23/2022 10/24/2022",createdAt:new Date,name:"idk",isArchived:!0},{id:"asdasd12",category:note.W.THOUGHT,content:"build a house",createdAt:new Date,name:"idk",isArchived:!0},{id:"123",category:note.W.IDEA,content:"run",createdAt:new Date,name:"idk",isArchived:!0}],Active={args:{notes:notes.filter((function(n){return!n.isArchived})),isArchived:!1}},Archived={args:{notes:notes.filter((function(n){return n.isArchived})),isArchived:!0}},Loading={args:{notes:notes,isLoading:!0}},Empty={args:{notes:[]}};Active.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Active.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Active$parameters=Active.parameters)||void 0===_Active$parameters?void 0:_Active$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    notes: notes.filter(n => !n.isArchived),\n    isArchived: false\n  }\n}"},null===(_Active$parameters2=Active.parameters)||void 0===_Active$parameters2||null===(_Active$parameters2$d=_Active$parameters2.docs)||void 0===_Active$parameters2$d?void 0:_Active$parameters2$d.source)})}),Archived.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Archived.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Archived$parameters=Archived.parameters)||void 0===_Archived$parameters?void 0:_Archived$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    notes: notes.filter(n => n.isArchived),\n    isArchived: true\n  }\n}"},null===(_Archived$parameters2=Archived.parameters)||void 0===_Archived$parameters2||null===(_Archived$parameters3=_Archived$parameters2.docs)||void 0===_Archived$parameters3?void 0:_Archived$parameters3.source)})}),Loading.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Loading.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Loading$parameters=Loading.parameters)||void 0===_Loading$parameters?void 0:_Loading$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    notes,\n    isLoading: true\n  }\n}"},null===(_Loading$parameters2=Loading.parameters)||void 0===_Loading$parameters2||null===(_Loading$parameters2$=_Loading$parameters2.docs)||void 0===_Loading$parameters2$?void 0:_Loading$parameters2$.source)})}),Empty.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Empty.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Empty$parameters=Empty.parameters)||void 0===_Empty$parameters?void 0:_Empty$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    notes: []\n  }\n}"},null===(_Empty$parameters2=Empty.parameters)||void 0===_Empty$parameters2||null===(_Empty$parameters2$do=_Empty$parameters2.docs)||void 0===_Empty$parameters2$do?void 0:_Empty$parameters2$do.source)})});var __namedExportsOrder=["Active","Archived","Loading","Empty"]},"./src/components/Icons.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{P:function(){return Icons}});var createLucideIcon=__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");var Icons={task:(0,createLucideIcon.Z)("ListTodo",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]),thought:(0,createLucideIcon.Z)("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]),idea:(0,createLucideIcon.Z)("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),plus:(0,createLucideIcon.Z)("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]),x:(0,createLucideIcon.Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])}},"./src/components/ui/table.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{RM:function(){return TableBody},Rn:function(){return TableCaption},SC:function(){return TableRow},iA:function(){return Table},pj:function(){return TableCell},ss:function(){return TableHead},xD:function(){return TableHeader}});var D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className"],_excluded2=["className"],_excluded3=["className"],_excluded4=["className"],_excluded5=["className"],_excluded6=["className"],_excluded7=["className"],_excluded8=["className"],Table=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"w-full overflow-auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("table",(0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:ref,className:(0,lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("w-full caption-bottom text-sm",className)},props))})}));Table.displayName="Table";var TableHeader=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref2,_excluded2);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("thead",(0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:ref,className:(0,lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("[&_tr]:border-b",className)},props))}));TableHeader.displayName="TableHeader";var TableBody=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref3,ref){var className=_ref3.className,props=(0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref3,_excluded3);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tbody",(0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:ref,className:(0,lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("[&_tr:last-child]:border-0",className)},props))}));TableBody.displayName="TableBody",react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref4,ref){var className=_ref4.className,props=(0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref4,_excluded4);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tfoot",(0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:ref,className:(0,lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("bg-primary font-medium text-primary-foreground",className)},props))})).displayName="TableFooter";var TableRow=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref5,ref){var className=_ref5.className,props=(0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref5,_excluded5);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tr",(0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:ref,className:(0,lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",className)},props))}));TableRow.displayName="TableRow";var TableHead=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref6,ref){var className=_ref6.className,props=(0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref6,_excluded6);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th",(0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:ref,className:(0,lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",className)},props))}));TableHead.displayName="TableHead";var TableCell=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref7,ref){var className=_ref7.className,props=(0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref7,_excluded7);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",(0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:ref,className:(0,lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",className)},props))}));TableCell.displayName="TableCell";var TableCaption=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref8,ref){var className=_ref8.className,props=(0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref8,_excluded8);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("caption",(0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:ref,className:(0,lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("mt-4 text-sm text-muted-foreground",className)},props))}));TableCaption.displayName="TableCaption";try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/components/ui/table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{J:function(){return getCreatedTimeToString},Z:function(){return searchForDatesInContent},cn:function(){return cn}});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))}var getCreatedTimeToString=function getCreatedTimeToString(date){return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][date.getMonth()]," ").concat(date.getDate(),", ").concat(date.getFullYear())},searchForDatesInContent=function searchForDatesInContent(str){return(str.match(/\d{1,2}([\/.-])\d{1,2}\1\d{4}/g)||[]).join(" ")}},"./src/stories/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return Button}});var D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),lib_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/lib/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","variant","size","children","asChild"],buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,variant=_ref.variant,size=_ref.size,_ref$children=_ref.children,children=void 0===_ref$children?"Click me":_ref$children,_ref$asChild=_ref.asChild,asChild=void 0!==_ref$asChild&&_ref$asChild,props=(0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded),Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.g7:"button";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Comp,(0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_Documents_Coding_Tasks_radency_task2_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({className:(0,lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)(buttonVariants({variant:variant,size:size,className:className})),ref:ref},props),{},{children:children}))}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/stories/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/NoteElementList.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return NoteElementList}});var note=__webpack_require__("./src/types/note.ts"),utils=__webpack_require__("./src/lib/utils.ts"),table=__webpack_require__("./src/components/ui/table.tsx"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority_dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","variant","size","asChild"],buttonVariants=(0,class_variance_authority_dist.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Button=react.forwardRef((function(_ref,ref){var className=_ref.className,variant=_ref.variant,size=_ref.size,_ref$asChild=_ref.asChild,asChild=void 0!==_ref$asChild&&_ref$asChild,props=(0,objectWithoutProperties.Z)(_ref,_excluded),Comp=asChild?dist.g7:"button";return(0,jsx_runtime.jsx)(Comp,(0,objectSpread2.Z)({className:(0,utils.cn)(buttonVariants({variant:variant,size:size,className:className})),ref:ref},props))}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/ui/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}const Pen=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.mjs").Z)("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);var archive_restore=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/archive-restore.mjs"),archive=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/archive.mjs"),trash_2=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/trash-2.mjs"),Icons=__webpack_require__("./src/components/Icons.tsx"),skeleton_excluded=["className"];function Skeleton(_ref){var className=_ref.className,props=(0,objectWithoutProperties.Z)(_ref,skeleton_excluded);return(0,jsx_runtime.jsx)("div",(0,objectSpread2.Z)({className:(0,utils.cn)("animate-pulse rounded-md bg-muted",className)},props))}try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/ui/skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}note.W.TASK,new Date;function NoteElementList(_ref){var name=_ref.name,createdAt=_ref.createdAt,content=_ref.content,category=_ref.category,isArchived=_ref.isArchived,isLoading=_ref.isLoading,Icon=(_ref.id,Icons.P[category]);return isLoading?(0,jsx_runtime.jsx)(NoteElementListSkeleton,{}):(0,jsx_runtime.jsxs)(table.SC,{children:[(0,jsx_runtime.jsx)(table.pj,{className:"font-medium",children:(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-2",children:[(0,jsx_runtime.jsx)(Icon,{}),name]})}),(0,jsx_runtime.jsx)(table.pj,{className:"font-medium",children:(0,utils.J)(createdAt)}),(0,jsx_runtime.jsx)(table.pj,{className:"font-medium",children:category}),(0,jsx_runtime.jsx)(table.pj,{className:"font-medium",children:content}),(0,jsx_runtime.jsx)(table.pj,{className:"font-medium",children:(0,utils.Z)(content)}),(0,jsx_runtime.jsx)(table.pj,{className:"font-medium",children:(0,jsx_runtime.jsxs)("div",{className:"flex gap-2",children:[(0,jsx_runtime.jsx)(Button,{size:"icon",children:(0,jsx_runtime.jsx)(Pen,{className:"w-4 h-4"})}),(0,jsx_runtime.jsx)(Button,{size:"icon",children:isArchived?(0,jsx_runtime.jsx)(archive_restore.Z,{className:"w-4 h-4"}):(0,jsx_runtime.jsx)(archive.Z,{className:"w-4 h-4"})}),(0,jsx_runtime.jsx)(Button,{size:"icon",variant:"destructive",children:(0,jsx_runtime.jsx)(trash_2.Z,{className:"w-4 h-4"})})]})})]})}function NoteElementListSkeleton(){return(0,jsx_runtime.jsxs)(table.SC,{children:[(0,jsx_runtime.jsx)(table.pj,{children:(0,jsx_runtime.jsxs)("div",{className:"flex gap-2",children:[(0,jsx_runtime.jsx)(Skeleton,{className:"w-6 h-6"}),(0,jsx_runtime.jsx)(Skeleton,{className:"w-24 h-6"})]})}),(0,jsx_runtime.jsx)(table.pj,{children:(0,jsx_runtime.jsx)(Skeleton,{className:"w-24 h-6"})}),(0,jsx_runtime.jsx)(table.pj,{children:(0,jsx_runtime.jsx)(Skeleton,{className:"w-10 h-6"})}),(0,jsx_runtime.jsx)(table.pj,{children:(0,jsx_runtime.jsx)(Skeleton,{className:"w-48 h-6"})}),(0,jsx_runtime.jsx)(table.pj,{children:(0,jsx_runtime.jsx)(Skeleton,{className:"w-16 h-6"})}),(0,jsx_runtime.jsx)(table.pj,{children:(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-2",children:[(0,jsx_runtime.jsx)(Skeleton,{className:"w-9 h-9"}),(0,jsx_runtime.jsx)(Skeleton,{className:"w-9 h-9"}),(0,jsx_runtime.jsx)(Skeleton,{className:"w-9 h-9"})]})})]})}try{NoteElementList.displayName="NoteElementList",NoteElementList.__docgenInfo={description:"",displayName:"NoteElementList",props:{id:{defaultValue:{value:"1"},description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},createdAt:{defaultValue:null,description:"",name:"createdAt",required:!0,type:{name:"Date"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"enum",value:[{value:'"idea"'},{value:'"task"'},{value:'"thought"'}]}},isArchived:{defaultValue:null,description:"",name:"isArchived",required:!0,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/NoteElementList.tsx#NoteElementList"]={docgenInfo:NoteElementList.__docgenInfo,name:"NoteElementList",path:"src/stories/NoteElementList.tsx#NoteElementList"})}catch(__react_docgen_typescript_loader_error){}},"./src/types/note.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var Category;__webpack_require__.d(__webpack_exports__,{W:function(){return Category}}),function(Category){Category.IDEA="idea",Category.TASK="task",Category.THOUGHT="thought"}(Category||(Category={}))},"./node_modules/lucide-react/dist/esm/createLucideIcon.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return createLucideIcon$1}});var react=__webpack_require__("./node_modules/react/index.js"),defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var createLucideIcon$1=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({color:color="currentColor",size:size=24,strokeWidth:strokeWidth=2,absoluteStrokeWidth:absoluteStrokeWidth,children:children,...rest},ref)=>{return(0,react.createElement)("svg",{ref:ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:`lucide lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...(Array.isArray(children)?children:[children])||[]]);var string}));return Component.displayName=`${iconName}`,Component}},"./node_modules/lucide-react/dist/esm/icons/archive-restore.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ArchiveRestore}});const ArchiveRestore=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.mjs").Z)("ArchiveRestore",[["rect",{width:"20",height:"5",x:"2",y:"4",rx:"2",key:"uhwcea"}],["path",{d:"M12 13v7",key:"1arz7h"}],["path",{d:"m9 16 3-3 3 3",key:"1idcnm"}],["path",{d:"M4 9v9a2 2 0 0 0 2 2h2",key:"qxnby6"}],["path",{d:"M20 9v9a2 2 0 0 1-2 2h-2",key:"gz3jmx"}]])},"./node_modules/lucide-react/dist/esm/icons/archive.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Archive}});const Archive=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.mjs").Z)("Archive",[["rect",{width:"20",height:"5",x:"2",y:"4",rx:"2",key:"uhwcea"}],["path",{d:"M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9",key:"shkvi4"}],["path",{d:"M10 13h4",key:"ytezjc"}]])},"./node_modules/lucide-react/dist/esm/icons/trash-2.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Trash2}});const Trash2=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.mjs").Z)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])}}]);