;/*FB_PKG_DELIM*/

__d("PolarisUnknownTextString",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("unknown");g.UNKNOWN_TEXT=a}),98);
__d("PolarisRevampDogfooding",["PolarisConfig","PolarisIsEmployee","PolarisNavigationUtils","PolarisPanavisionQEHelpers","PolarisQueryParamsHelper","PolarisUA"],(function(a,b,c,d,e,f,g){"use strict";function a(){return d("PolarisUA").isMobile()?!1:d("PolarisConfig").isOnVPN()&&c("PolarisIsEmployee")()}function b(){var a={};d("PolarisPanavisionQEHelpers").hasPolarisFeedRevamp()?a={gk_disable:"ig_web_revamp_bleeding_edge",gk_enable:""}:a={gk_enable:"ig_web_revamp_bleeding_edge",gk_disable:""};a=d("PolarisQueryParamsHelper").appendQueryParams(window.location.href,a);d("PolarisNavigationUtils").openURLWithFullPageReload(a)}g.hasPolarisRevampDogfooding=a;g.toggleRevampDogfooding=b}),98);
__d("PolarisMoreNavMenu.react",["fbt","IGRouter","PolarisAuthStrings","PolarisBugReportContext.react","PolarisConfig","PolarisDarkModeQEUtils","PolarisDevtoolsContext.react","PolarisIGCoreClockDottedPanoOutline24Icon.react","PolarisIGCoreMoonIcon","PolarisIGCoreReportPanoOutline24Icon","PolarisIGCoreSavePanoOutlineIcon","PolarisIGCoreSettingsPanoOutlineIcon","PolarisIGTheme.react","PolarisIgBloksSettingsFalcoEvent","PolarisLinkBuilder","PolarisLogger","PolarisLoggingOutDialog.react","PolarisLogoutActions","PolarisLogoutModal.react","PolarisNavigationActions","PolarisNavigationPopover.react","PolarisNavigationStrings","PolarisODS","PolarisPanavisionQEHelpers","PolarisQEHelper","PolarisRevampDogfooding","PolarisRoutes","PolarisSavedCollectionStrings","PolarisThemeStrings","PolarisuserSelectors","cr:3777","cr:3791","cr:3792","emptyFunction","qex","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");e=d("react");var j=e.useContext,k=e.useEffect,l=e.useState,m="desktop_nav_menu",n=(e=b("cr:3777"))!=null?e:c("emptyFunction"),o=(e=b("cr:3791"))!=null?e:c("emptyFunction"),p=(e=b("cr:3792"))!=null?e:c("emptyFunction");function a(a){var b=a.history,e=a.isVisible;a=a.onClose;a=a===void 0?c("emptyFunction"):a;var f=l(!1),g=f[0],q=f[1];f=l(!1);var r=f[0],s=f[1],t=j(d("PolarisDevtoolsContext.react").PolarisDevtoolsContext),u=j(d("PolarisBugReportContext.react").PolarisBugReportContext),v=d("react-redux-wwwig").useDispatch(),w=d("PolarisIGTheme.react").useTheme();k(function(){d("PolarisDarkModeQEUtils").maybeLogDarkModeQEExposure()});f=function(){w.toggleTheme(),c("PolarisODS").incr("web.nav.toggle_theme_click"),d("PolarisLogger").logAction("appThemeToggled")};var x=function(){var a={event_name:"settings_entered",entrypoint:"settings"};c("PolarisIgBloksSettingsFalcoEvent").log(function(){return a})},y=function(){var a={event_name:"your_activity_entered",entrypoint:"your_activity"};c("PolarisIgBloksSettingsFalcoEvent").log(function(){return a})},z=e&&d("PolarisQEHelper").hasAccountSwitching(),A=b.location.pathname;b=function(){B()};var B=function(){s(!0),v(d("PolarisLogoutActions").logout({viewerId:d("PolarisConfig").getViewerId(),source:m}))},C=d("react-redux-wwwig").useSelector(d("PolarisuserSelectors").getViewer);C=(C=C==null?void 0:C.username)!=null?C:"";var D=24,E=n(),F=p(),G=o();x=[{actionName:"userMenuSettingsClick",bodyHref:d("PolarisRoutes").PROFILE_EDIT_PATH,icon:i.jsx(c("PolarisIGCoreSettingsPanoOutlineIcon"),{alt:d("PolarisNavigationStrings").SETTINGS_TEXT,size:D}),onClick:x,title:d("PolarisNavigationStrings").SETTINGS_TEXT},{actionName:"userMenuSavedClick",bodyHref:d("PolarisLinkBuilder").buildUserPathLink(C,"saved"),icon:i.jsx(c("PolarisIGCoreSavePanoOutlineIcon"),{alt:d("PolarisSavedCollectionStrings").SAVED_TEXT,size:D}),onClick:function(){},title:d("PolarisSavedCollectionStrings").SAVED_TEXT},E,G,F,d("PolarisDarkModeQEUtils").hasDarkModeToggleEnabled()?{icon:i.jsx(c("PolarisIGCoreMoonIcon"),{alt:h._("Theme icon"),size:D}),onClick:f,title:d("PolarisThemeStrings").SWITCH_APPEARANCE_TEXT}:null,c("qex")._("1707")?{bodyHref:d("PolarisRoutes").YOUR_ACTIVITY_INTERACTIONS_PATH,icon:i.jsx(c("PolarisIGCoreClockDottedPanoOutline24Icon.react"),{alt:d("PolarisNavigationStrings").YOUR_ACTIVITY_TEXT,size:D}),onClick:y,title:d("PolarisNavigationStrings").YOUR_ACTIVITY_TEXT}:null,(u==null?void 0:u.canUseBugReport)?{actionName:"userMenuFlytrapClick",icon:i.jsx(c("PolarisIGCoreReportPanoOutline24Icon"),{alt:d("PolarisNavigationStrings").REPORT_PROBLEM_TEXT,size:D}),onClick:function(){u==null?void 0:u.openModal("desktop_nav_menu")},title:d("PolarisNavigationStrings").REPORT_PROBLEM_TEXT}:null,d("PolarisRevampDogfooding").hasPolarisRevampDogfooding()?{onClick:d("PolarisRevampDogfooding").toggleRevampDogfooding,title:d("PolarisPanavisionQEHelpers").hasPolarisFeedRevamp()?h._("[meta-only] Disable revamp"):h._("[meta-only] Enable revamp")}:null,(t==null?void 0:t.canUseDevTools)?{onClick:function(){return t==null?void 0:t.setShowDevtoolsModal(!0)},title:h._("[meta-only] Dev tools")}:null,z?{actionName:"userMenuAccountSwitcherClick",onClick:function(){v(d("PolarisNavigationActions").openAccountSwitcher({next:A,source:m}))},title:d("PolarisAuthStrings").SWITCH_ACCOUNTS,newSection:!0}:null,{actionName:"userMenuLogOutClick",onClick:b,title:d("PolarisNavigationStrings").LOG_OUT_SENTENCE_CASE_TEXT,newSection:!z}];C=x.filter(Boolean);return i.jsxs(i.Fragment,{children:[i.jsx(c("PolarisNavigationPopover.react"),{isVisible:e,items:C,onClose:a,popoverStyle:{bottom:0,width:238}}),g&&i.jsx(c("PolarisLogoutModal.react"),{onCloseConfirm:B,onCloseModal:function(){return q(!1)}}),r&&i.jsx(c("PolarisLoggingOutDialog.react"),{})]})}a.displayName=a.name+" [from "+f.id+"]";b=d("IGRouter").withIGRouter(a);g["default"]=b}),98);