/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/f/cards/BaseContent","sap/viz/ui5/controls/VizFrame","sap/viz/ui5/controls/common/feeds/FeedItem","sap/viz/ui5/data/FlattenedDataset","sap/base/Log","sap/ui/core/Core","jquery.sap.global","sap/f/cards/ActionEnablement"],function(e,t,i,a,n,r,o,s){"use strict";var l={Top:"top",Bottom:"bottom",Left:"left",Right:"right"};var u={TopLeft:"topLeft",Center:"center"};var p={Left:"left",Center:"center",Right:"right"};var g={Line:"line",StackedColumn:"stacked_column",StackedBar:"stacked_bar",Donut:"donut"};var d=e.extend("sap.f.cards.AnalyticalContent",{renderer:{}});d.prototype._getVizPropertiesObject=function(e){var t=e.title,i=e.legend,a=e.plotArea;if(!e){return this}var n={title:{style:{fontWeight:"normal"},layout:{respectPlotPosition:false}},legend:{},legendGroup:{layout:{}},plotArea:{window:{start:"firstDataPoint",end:"lastDataPoint"}},categoryAxis:{title:{}},valueAxis:{title:{}},interaction:{noninteractiveMode:true}};if(t){n.title.text=t.text;n.title.visible=t.visible;n.title.alignment=p[t.alignment]}if(i){n.legend.visible=i.visible;n.legendGroup.layout.position=l[i.position];n.legendGroup.layout.alignment=u[i.alignment]}if(a){if(a.dataLabel){n.plotArea.dataLabel=a.dataLabel}if(a.categoryAxisText){n.categoryAxis.title.visible=a.categoryAxisText.visible}if(a.valueAxisText){n.valueAxis.title.visible=a.valueAxisText.visible}}return n};d.prototype._updateModel=function(){this._createChart();e.prototype._updateModel.apply(this,arguments)};d.prototype._createChart=function(){var e=this.getConfiguration();if(!e.chartType){n.error("ChartType is a mandatory property");return}var r=[];if(e.dimensions){var o=[];for(var s=0;s<e.dimensions.length;s++){var l=e.dimensions[s];var u=l.value.substring(1,l.value.length-1);r.push(u);var p={name:u,value:l.value};o.push(p)}}var d=[];if(e.measures){var v=[];for(var s=0;s<e.measures.length;s++){var f=e.measures[s];var u=f.value.substring(1,f.value.length-1);d.push(u);var c={name:u,value:f.value};v.push(c)}}var h=new a({measures:v,dimensions:o,data:{path:this.getBindingContext().getPath()}});var m=new t({uiConfig:{applicationSet:"fiori"},height:"100%",width:"100%",vizType:g[e.chartType],dataset:h,legendVisible:e.legend,feeds:[new i({uid:e.measureAxis,type:"Measure",values:d}),new i({uid:e.dimensionAxis,type:"Dimension",values:r})]});var y=this._getVizPropertiesObject(e);m.setVizProperties(y);this._attachActions(e,this);this.setAggregation("_content",m)};d.prototype.onBeforeRendering=function(){if(this._handleHostConfiguration){this._handleHostConfiguration()}};d.prototype._handleHostConfiguration=function(){var e=this.getParent(),t=this.getAggregation("_content");if(e&&e.getHostConfigurationId&&t){var i=r.byId(e.getHostConfigurationId());if(i){var a=i.generateJSONSettings("vizProperties"),n=t.getVizProperties();n=o.extend(true,n,a);t.setVizProperties(n)}}};s.enrich(d);return d});