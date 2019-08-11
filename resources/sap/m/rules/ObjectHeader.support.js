/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/support/library"],function(e){"use strict";var t=e.Categories,a=e.Severity,r=e.Audiences;var s={id:"objectHeaderMarkers",audiences:[r.Control],categories:[t.Usage],enabled:true,minversion:"1.42",title:"ObjectHeader: markers aggregation",description:"Checks if markers aggregation is used together with deprecated properties markFlagged or markFavorite",resolution:"Use markers aggregation",resolutionurls:[{text:"API Reference: sap.m.ObjectHeader",href:"https://sapui5.hana.ondemand.com/#/api/sap.m.ObjectHeader"}],check:function(e,t,r){r.getElementsByClassName("sap.m.ObjectHeader").forEach(function(t){var r=t.getId(),s=t.getMetadata().getElementName(),i=t.getMarkFlagged()+t.getMarkFavorite();if(t.getMarkers().length>i&&i>0){e.addIssue({severity:a.High,details:"ObjectHeader '"+s+"' ("+r+") uses both markers aggregation and deprecated properties markFlagged or markFavorite.",context:{id:r}})}})}};var i={id:"objectHeaderStatuses",audiences:[r.Control],categories:[t.Usage],enabled:true,minversion:"1.16",title:"ObjectHeader: statuses aggregation",description:"Checks if statuses aggregation is used together with deprecated aggregation firstStatus or secondStatus",resolution:"Use statuses aggregation",resolutionurls:[{text:"API Reference: sap.m.ObjectHeader",href:"https://sapui5.hana.ondemand.com/#/api/sap.m.ObjectHeader"}],check:function(e,t,r){r.getElementsByClassName("sap.m.ObjectHeader").forEach(function(t){var r=t.getId(),s=t.getMetadata().getElementName();if(t.getStatuses().length&&(t.getFirstStatus()||t.getSecondStatus())){e.addIssue({severity:a.Medium,details:"ObjectHeader '"+s+"' ("+r+") uses both statuses aggregation and deprecated aggregations firstStatus or secondStatus.",context:{id:r}})}})}};var n={id:"objectHeaderCondensed",audiences:[r.Control],categories:[t.Usage],enabled:true,minversion:"1.21",title:"ObjectHeader: condensed property",description:"Checks if condensed property is set to true and responsive property is set to false",resolution:"Change the responsive property to false",resolutionurls:[{text:"API Reference: sap.m.ObjectHeader",href:"https://sapui5.hana.ondemand.com/#/api/sap.m.ObjectHeader"}],check:function(e,t,r){r.getElementsByClassName("sap.m.ObjectHeader").forEach(function(t){var r=t.getId(),s=t.getMetadata().getElementName();if(t.getCondensed()&&t.getResponsive()){e.addIssue({severity:a.Medium,details:"ObjectHeader '"+s+"' ("+r+") sets both condensed and responsive property to true.",context:{id:r}})}})}};var o={id:"objectHeaderFullScreenOptimized",audiences:[r.Control],categories:[t.Usage],enabled:true,minversion:"1.28",title:"ObjectHeader: fullScreenOptimized property",description:"Checks if fullScreenOptimized property is set to true and responsive property is set to true",resolution:"Change the responsive property to true",resolutionurls:[{text:"API Reference: sap.m.ObjectHeader",href:"https://sapui5.hana.ondemand.com/#/api/sap.m.ObjectHeader"}],check:function(e,t,r){r.getElementsByClassName("sap.m.ObjectHeader").forEach(function(t){var r=t.getId(),s=t.getMetadata().getElementName();if(t.getFullScreenOptimized()&&!t.getResponsive()){e.addIssue({severity:a.Medium,details:"ObjectHeader '"+s+"' ("+r+") sets fullScreenOptimized to true but responsive property is false.",context:{id:r}})}})}};var d={id:"objectHeaderAdditionalNumbers",audiences:[r.Control],categories:[t.Usage],enabled:true,minversion:"1.38",title:"ObjectHeader: additionalNumbers aggregation",description:"Checks if additionalNumbers aggregation is used and responsive property is set to false",resolution:"Change the responsive property to false",resolutionurls:[{text:"API Reference: sap.m.ObjectHeader",href:"https://sapui5.hana.ondemand.com/#/api/sap.m.ObjectHeader"}],check:function(e,t,r){r.getElementsByClassName("sap.m.ObjectHeader").forEach(function(t){var r=t.getId(),s=t.getMetadata().getElementName();if(t.getAdditionalNumbers().length&&t.getResponsive()){e.addIssue({severity:a.Medium,details:"ObjectHeader '"+s+"' ("+r+") uses additionalNumbers aggregation and responsive property is true.",context:{id:r}})}})}};var c={id:"objectHeaderHeaderContainer",audiences:[r.Control],categories:[t.Usage],enabled:true,minversion:"1.21",title:"ObjectHeader: headerContainer aggregation",description:"Checks if headerContainer aggregation is used and responsive property is set to true",resolution:"Change the responsive property to true",resolutionurls:[{text:"API Reference: sap.m.ObjectHeader",href:"https://sapui5.hana.ondemand.com/#/api/sap.m.ObjectHeader"}],check:function(e,t,r){r.getElementsByClassName("sap.m.ObjectHeader").forEach(function(t){var r=t.getId(),s=t.getMetadata().getElementName();if(t.getHeaderContainer()&&!t.getResponsive()){e.addIssue({severity:a.Medium,details:"ObjectHeader '"+s+"' ("+r+") sets headerContainer aggregation but responsive property is false.",context:{id:r}})}})}};return[s,i,n,o,d,c]},true);