"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["53637"],{56252:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>s,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-tap/index","title":"TAP","description":"Sch\xe9ma de connexion TAP !","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/fly-tap/index.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-tap","slug":"/ProductDoc/ExtensionBoard/fly-tap/","permalink":"/fly-docs-next/fr/docs/ProductDoc/ExtensionBoard/fly-tap/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-tap/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Introduction"},"sidebar":"tutorialSidebar","previous":{"title":"FLY-TAP","permalink":"/fly-docs-next/fr/docs/category/fly-tap"},"next":{"title":"BDsensor-m","permalink":"/fly-docs-next/fr/docs/category/bdsensor-m"}}'),a=r("52676"),i=r("79938");let o={sidebar_position:1,sidebar_label:"Introduction"},s="TAP",d={},c=[{value:"Sch\xe9ma de connexion TAP !",id:"sch\xe9ma-de-connexion-tap-",level:2},{value:"Tutoriel de configuration du TAP",id:"tutoriel-de-configuration-du-tap",level:2},{value:"Modification des macros de d\xe9marrage",id:"modification-des-macros-de-d\xe9marrage",level:2},{value:"Modification des macros de d\xe9marrage pour PrusaSlicer",id:"modification-des-macros-de-d\xe9marrage-pour-prusaslicer",level:3},{value:"Modification des macros de d\xe9marrage pour CURA",id:"modification-des-macros-de-d\xe9marrage-pour-cura",level:3},{value:"Modification des macros de d\xe9marrage pour Orca-Slicer",id:"modification-des-macros-de-d\xe9marrage-pour-orca-slicer",level:3}];function l(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{ImageView:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"tap",children:"TAP"})}),"\n",(0,a.jsx)(n.h2,{id:"sch\xe9ma-de-connexion-tap-",children:"Sch\xe9ma de connexion TAP !"}),"\n",(0,a.jsx)(n.admonition,{title:"Attention",type:"warning",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Veuillez noter qu'il ne faut pas connecter le TAP \xe0 la sortie du servo, mais \xe0 la sortie de la but\xe9e !!!"}),"\n"]})}),"\n",(0,a.jsx)(t,{image:r(87806).Z,size:"90%",align:"left"}),"\n",(0,a.jsx)(n.h2,{id:"tutoriel-de-configuration-du-tap",children:"Tutoriel de configuration du TAP"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Parce que le TAP utilise directement la buse comme d\xe9clencheur de but\xe9e, il n'y a aucun d\xe9calage XY"}),"\n"]})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Les modifications pour le TAP concernent uniquement la but\xe9e Z et la sonde"}),"\n"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cfg",children:"\n[stepper_z]\nendstop_pin: probe:z_virtual_endstop\n# endstop_pin: ^sht36:PA1  \n# position_endstop: -0.5        \n\n[probe]\npin: ^sht36:PA1              # Interface de signal\nx_offset: 0                  # D\xe9calage X - capteur par rapport \xe0 la buse\ny_offset: 0                  # D\xe9calage Y - capteur par rapport \xe0 la buse\n#z_offset: 0                 # D\xe9calage Z - capteur par rapport \xe0 la buse\nspeed: 3.0                   # Vitesse de nivellement\nlift_speed: 5                # Vitesse de lev\xe9e de la sonde\nsamples: 3                   # Nombre d'\xe9chantillons\nsamples_result: median       # M\xe9thode de calcul (par d\xe9faut median - m\xe9diane)\nsample_retract_dist: 3.0     # Distance de r\xe9traction lors du nivellement\nsamples_tolerance: 0.075     # Tol\xe9rance d'\xe9chantillonnage (notez que des valeurs trop faibles peuvent augmenter le nombre d'\xe9chantillons)\nsamples_tolerance_retries: 3 # Nombre de tentatives de r\xe9essai si tol\xe9rance d\xe9pass\xe9e\nactivate_gcode:\n    {% set PROBE_TEMP = 150 %}\n    {% set MAX_TEMP = PROBE_TEMP + 5 %}\n    {% set ACTUAL_TEMP = printer.extruder.temperature %}\n    {% set TARGET_TEMP = printer.extruder.target %}\n\n    {% if TARGET_TEMP > PROBE_TEMP %}\n        { action_respond_info('La temp\xe9rature cible de l'extrudeur de %.1fC est trop \xe9lev\xe9e, la r\xe9duisant \xe0 %.1fC' % (TARGET_TEMP, PROBE_TEMP)) }\n        M106 S255\n        M109 S{ PROBE_TEMP }\n        M106 S26\n    {% else %}\n        # La temp\xe9rature cible est d\xe9j\xe0 suffisamment basse, mais la buse peut encore \xeatre trop chaude.\n        {% if ACTUAL_TEMP > MAX_TEMP %}\n            { action_respond_info('La temp\xe9rature de l'extrudeur %.1fC est encore trop \xe9lev\xe9e, en attente jusqu'\xe0 ce qu'elle soit en dessous de %.1fC' % (ACTUAL_TEMP, MAX_TEMP)) }\n            TEMPERATURE_WAIT SENSOR=extruder MAXIMUM={ MAX_TEMP }\n        {% endif %}\n    {% endif %}\n\n"})}),"\n",(0,a.jsx)(n.h2,{id:"modification-des-macros-de-d\xe9marrage",children:"Modification des macros de d\xe9marrage"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Effet"}),"\n"]}),"\n",(0,a.jsx)(t,{image:r(89139).Z,size:"80%",align:"left"}),"\n",(0,a.jsx)(n.h3,{id:"modification-des-macros-de-d\xe9marrage-pour-prusaslicer",children:"Modification des macros de d\xe9marrage pour PrusaSlicer"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"M109 S150\nprint_start\nM109 S[first_layer_temperature]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"modification-des-macros-de-d\xe9marrage-pour-cura",children:"Modification des macros de d\xe9marrage pour CURA"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"M109 S150\nprint_start\nM109 S{material_print_temperature_layer_0} ;D\xe9but de chauffage de l'extrudeur\n"})}),"\n",(0,a.jsx)(n.h3,{id:"modification-des-macros-de-d\xe9marrage-pour-orca-slicer",children:"Modification des macros de d\xe9marrage pour Orca-Slicer"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"M190 S[bed_temperature_initial_layer_single]\nM109 S150\nprint_start  PRINT_MIN={first_layer_print_min[0]},{first_layer_print_min[1]} PRINT_MAX={first_layer_print_max[0]},{first_layer_print_max[1]}\nM109 S[nozzle_temperature_initial_layer]\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},89139:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/klipper-806cbb29b38164762eb78bec7f5691c9.webp"},87806:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/tap-a19dbb1ae76e5d3aa668019273995cc7.webp"},79938:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return o}});var t=r(75271);let a={},i=t.createContext(a);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);