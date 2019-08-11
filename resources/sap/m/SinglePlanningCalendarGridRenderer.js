/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/unified/calendar/CalendarDate","sap/ui/unified/calendar/CalendarUtils","sap/ui/core/date/UniversalDate","sap/ui/core/InvisibleText","sap/ui/unified/library"],function(e,t,a,i,r){"use strict";var l=2;var s=2;var d=1;var n=r.CalendarDayType;var o={};o.render=function(e,t){e.write("<div");e.writeControlData(t);e.addClass("sapMSinglePCGrid");e.writeClasses();e.write(">");e.renderControl(t.getAggregation("_columnHeaders"));this.renderBlockersContainer(e,t);e.write("<div");e.writeAttribute("role","grid");e.addClass("sapMSinglePCGridContent");e.writeClasses();e.write(">");this.renderRowHeaders(e,t);this.renderNowMarker(e,t);this.renderColumns(e,t);e.write("</div>");e.write("</div>")};o.renderBlockersContainer=function(a,r){var l=r._getColumns(),s=r._getBlockersToRender().iMaxlevel,d=r.getStartDate(),n=(s+1)*r._getBlockerRowHeight()+3,o=r._getDateFormatter(),p=r.getSpecialDates(),w=e.fromLocalJSDate(d),C=r._getColumnHeaders()._getDateTypes(w),g,u;a.write("<div");a.writeAttribute("role","grid");a.addClass("sapMSinglePCBlockersRow");a.writeClasses();a.write(">");a.write("<div");a.writeAttribute("role","row");a.addClass("sapMSinglePCBlockersColumns");if(p&&r._getColumns()===1){if(C&&C[0]){g=C[0];a.addClass("sapUiCalItem"+g.type);u=r._findCorrespondingLegendItem(r,g)}a.addClass("sapMSpecialDaysInDayView")}a.addStyle("height",n+"px");a.writeClasses();a.writeStyles();a.write(">");this.renderDndPlaceholders(a,r,r.getAggregation("_blockersPlaceholders"));for(var c=0;c<l;c++){var f=new e(d.getFullYear(),d.getMonth(),d.getDate()+c);a.write("<div");a.writeAttribute("role","gridcell");a.writeAttribute("data-sap-start-date",o.format(f.toLocalJSDate()));a.writeAttribute("data-sap-end-date",o.format(f.toLocalJSDate()));a.writeAttribute("aria-labelledby",i.getStaticId("sap.m","SPC_BLOCKERS")+" "+"fullDay-"+o.format(f.toLocalJSDate())+"-Descr");a.addClass("sapMSinglePCBlockersColumn");a.writeAttribute("tabindex",-1);if(f.isSame(new e)){a.addClass("sapMSinglePCBlockersColumnToday")}if(t._isWeekend(f,r._getCoreLocaleData())){a.addClass("sapMSinglePCBlockersColumnWeekend")}a.writeClasses();a.writeStyles();a.write(">");a.write("<span");a.writeAttribute("id","fullDay-"+o.format(f.toLocalJSDate())+"-Descr");a.addClass("sapUiInvisibleText");a.writeClasses();a.write(">");a.write(r._getCellStartEndInfo(f.toLocalJSDate()));if(r._sLegendId&&u){a.writeEscaped(u)}a.write("</span>");a.write("</div>")}this.renderBlockers(a,r);a.write("</div>");a.write("</div>")};o.renderBlockers=function(e,t){var a=this,r=t._getBlockersToRender().oBlockersList;e.write("<div");e.writeAttribute("role","grid");e.writeAttribute("aria-labelledby",i.getStaticId("sap.m","SPC_BLOCKERS"));e.addClass("sapMSinglePCBlockers");e.addClass("sapUiCalendarRowVisFilled");e.writeClasses();e.write(">");r.getIterator().forEach(function(i){a.renderBlockerAppointment(e,t,i)});e.write("</div>")};o.renderBlockerAppointment=function(a,r,l){var s=e.fromLocalJSDate(r.getStartDate()),d=l.getData(),o=e.fromLocalJSDate(d.getStartDate()),p=e.fromLocalJSDate(d.getEndDate()),w=t._daysBetween(o,s),C=t._daysBetween(p,s),g=r._getColumns(),u=r._getBlockerRowHeight(),c=l.level,f=l.width,b=d.getTooltip_AsString(),S=d.getType(),A=d.getColor(),v=d.getTitle(),m=d.getText(),y=d.getIcon(),M=d.getId(),T={role:"gridcell",labelledby:{value:i.getStaticId("sap.ui.unified","APPOINTMENT"),append:true},selected:d.getSelected()?true:false},_=r.getAriaLabelledBy(),D=w*(100/g),P=(g-C-1)*(100/g),h=sap.ui.getCore().getConfiguration().getRTL(),I;if(_.length>0){T["labelledby"].value=T["labelledby"].value+" "+_.join(" ")}if(v){T["labelledby"].value=T["labelledby"].value+" "+M+"-Title"}T["labelledby"].value=T["labelledby"].value+" "+M+"-Descr";if(m){T["labelledby"].value=T["labelledby"].value+" "+M+"-Text"}if(d.getTentative()){T["labelledby"].value=T["labelledby"].value+" "+i.getStaticId("sap.ui.unified","APPOINTMENT_TENTATIVE")}a.write("<div");a.writeElementData(d);a.writeAttribute("data-sap-level",c);a.writeAttribute("data-sap-width",f);a.writeAttribute("tabindex",0);if(b){a.writeAttributeEscaped("title",b)}a.writeAccessibilityState(d,T);a.addClass("sapMSinglePCAppointmentWrap");a.addClass("sapUiCalendarRowApps");if(!A&&S!==n.None){a.addClass("sapUiCalendarApp"+S)}if(A){if(sap.ui.getCore().getConfiguration().getRTL()){a.addStyle("border-right-color",A)}else{a.addStyle("border-left-color",A)}}a.addStyle("top",u*c+1+"px");a.addStyle(h?"right":"left",Math.max(D,0)+"%");a.addStyle(h?"left":"right",Math.max(P,0)+"%");a.writeClasses();a.writeStyles();a.write(">");a.write("<div");a.addClass("sapUiCalendarApp");if(d.getSelected()){a.addClass("sapUiCalendarAppSel")}if(d.getTentative()){a.addClass("sapUiCalendarAppTent")}if(y){a.addClass("sapUiCalendarAppWithIcon")}a.writeClasses();a.writeStyles();a.write(">");a.write("<div");a.addClass("sapUiCalendarAppCont");if(A){a.addStyle("background-color",d._getCSSColorForBackground(A));a.writeStyles()}a.writeClasses();a.write(">");if(D<0){I=["sapUiCalendarAppArrowIconLeft","sapUiCalendarAppArrowIcon"];a.writeIcon("sap-icon://arrow-left",I,{title:null})}if(y){I=["sapUiCalendarAppIcon"];var U={};U["id"]=M+"-Icon";U["title"]=null;a.writeIcon(y,I,U)}if(v){a.write("<span");a.writeAttribute("id",M+"-Title");a.addClass("sapUiCalendarAppTitle");a.writeClasses();a.write(">");a.writeEscaped(v,true);a.write("</span>")}if(P<0){I=["sapUiCalendarAppArrowIconRight","sapUiCalendarAppArrowIcon"];a.writeIcon("sap-icon://arrow-right",I,{title:null})}a.write('<span id="'+M+'-Descr" class="sapUiInvisibleText">'+r._getAppointmentAnnouncementInfo(d)+"</span>");a.write("</div>");a.write("</div>");a.write("</div>")};o.renderRowHeaders=function(e,t){var a=t._getVisibleStartHour(),i=t._getVisibleEndHour(),r=new Date,l=t._getHoursFormat(),s=t._getAMPMFormat();e.write("<div");e.addClass("sapMSinglePCRowHeaders");e.writeClasses();e.write(">");for(var d=a;d<=i;d++){r.setHours(d);e.write("<span");e.addClass("sapMSinglePCRowHeader");e.addClass("sapMSinglePCRowHeader"+d);if(t._shouldHideRowHeader(d)){e.addClass("sapMSinglePCRowHeaderHidden")}e.writeClasses();e.write(">");e.write(l.format(r));if(t._hasAMPM()){e.write("<span");e.addClass("sapMSinglePCRowHeaderAMPM");e.writeClasses();e.write(">");e.write(" "+s.format(r));e.write("</span>")}e.write("</span>")}e.write("</div>")};o.renderColumns=function(a,r){var l=r._getColumns(),s=r.getStartDate(),d=r._getAppointmentsToRender();a.write("<div");a.writeAttribute("role","grid");a.writeAttribute("aria-labelledby",i.getStaticId("sap.m","SPC_APPOINTMENTS"));a.addClass("sapMSinglePCColumns");a.writeClasses();a.write(">");for(var n=0;n<l;n++){var o=new e(s.getFullYear(),s.getMonth(),s.getDate()+n),p=r._getDateFormatter(),w=p.format(o.toLocalJSDate());a.write("<div");a.writeAttribute("data-sap-day",w);a.addClass("sapMSinglePCColumn");if(o.isSame(new e)){a.addClass("sapMSinglePCColumnToday")}if(t._isWeekend(o,r._getCoreLocaleData())){a.addClass("sapMSinglePCColumnWeekend")}a.writeClasses();a.write(">");this.renderDndPlaceholders(a,r,r._dndPlaceholdersMap[o]);this.renderRows(a,r,w);this.renderAppointments(a,r,d[w],o);a.write("</div>")}a.write("</div>")};o.renderDndPlaceholders=function(e,t,a){e.write('<div class="sapMSinglePCOverlay">');a.forEach(e.renderControl);e.write("</div>")};o.renderRows=function(e,t,a){var i=t._getVisibleStartHour(),r=t._getVisibleEndHour(),l=t._getDateFormatter(),s,d;for(var n=i;n<=r;n++){s=t._parseDateStringAndHours(a,n);d=new Date(s.getFullYear(),s.getMonth(),s.getDate(),s.getHours()+1);e.write("<div");e.addClass("sapMSinglePCRow");if(!t._isVisibleHour(n)){e.addClass("sapMSinglePCNonWorkingRow")}e.writeAttribute("data-sap-hour",n);e.writeAttribute("data-sap-start-date",l.format(s));e.writeAttribute("data-sap-end-date",l.format(d));e.writeAttribute("aria-labelledby",l.format(s)+"-Descr");e.writeAttribute("tabindex",-1);e.writeClasses();e.writeStyles();e.write(">");e.write("<span");e.writeAttribute("id",l.format(s)+"-Descr");e.addClass("sapUiInvisibleText");e.writeClasses();e.write(">");e.write(t._getCellStartEndInfo(s,d));e.write("</span>");e.write("</div>")}};o.renderAppointments=function(e,t,a,i){var r=this;if(a){e.write("<div");e.addClass("sapMSinglePCAppointments");e.addClass("sapUiCalendarRowVisFilled");e.writeClasses();e.write(">");a.oAppointmentsList.getIterator().forEach(function(l){var s=a.iMaxLevel,d=l.level,n=l.width,o=l.getData();r.renderAppointment(e,t,s,d,n,o,i)});e.write("</div>")}};o.renderAppointment=function(r,o,p,w,C,g,u){var c=e.fromLocalJSDate(o.getStartDate()),f=new e(c),b=o._getRowHeight(),S=new a(u.getYear(),u.getMonth(),u.getDate(),o._getVisibleStartHour()),A=new a(u.getYear(),u.getMonth(),u.getDate(),o._getVisibleEndHour(),59,59),v=g.getStartDate(),m=g.getEndDate(),y=e.fromLocalJSDate(v),M=e.fromLocalJSDate(m),T=g.getTooltip_AsString(),_=g.getType(),D=g.getColor(),P=g.getTitle(),h=g.getText(),I=g.getIcon(),U=g.getId(),k=this._getLineClamp(v,m),R={role:"gridcell",labelledby:{value:i.getStaticId("sap.ui.unified","APPOINTMENT"),append:true},selected:g.getSelected()?true:false},H=o.getAriaLabelledBy(),L=S.getTime()>v.getTime(),B=A.getTime()<m.getTime(),E=L?0:o._calculateTopPosition(v),x=B?0:o._calculateBottomPosition(m),N=100/(p+1),J,V,F,W,O;f.setDate(f.getDate()+o._getColumns()-1);J=t._daysBetween(y,c);V=t._daysBetween(f,M);F=u.isSame(c);W=u.isSame(f);if(H.length>0){R["labelledby"].value=R["labelledby"].value+" "+H.join(" ")}if(P){R["labelledby"].value=R["labelledby"].value+" "+U+"-Title"}R["labelledby"].value=R["labelledby"].value+" "+U+"-Descr";if(h){R["labelledby"].value=R["labelledby"].value+" "+U+"-Text"}if(g.getTentative()){R["labelledby"].value=R["labelledby"].value+" "+i.getStaticId("sap.ui.unified","APPOINTMENT_TENTATIVE")}r.write("<div");r.writeElementData(g);r.writeAttribute("data-sap-level",w);r.writeAttribute("data-sap-width",C);r.writeAttribute("tabindex",0);if(T){r.writeAttributeEscaped("title",T)}r.writeAccessibilityState(g,R);r.addClass("sapMSinglePCAppointmentWrap");r.addClass("sapUiCalendarRowApps");if(!D&&_!==n.None){r.addClass("sapUiCalendarApp"+_)}if(D){if(sap.ui.getCore().getConfiguration().getRTL()){r.addStyle("border-right-color",D)}else{r.addStyle("border-left-color",D)}}r.addStyle("top",E+"px");r.addStyle("bottom",x+"px");r.addStyle(sap.ui.getCore().getConfiguration().getRTL()?"right":"left",N*w+"%");r.addStyle("width",N*C+"%");r.writeClasses();r.writeStyles();r.write(">");r.write("<div");r.addClass("sapUiCalendarApp");r.addStyle("min-height",(b-(l+s+d))/2+"px");if(g.getSelected()){r.addClass("sapUiCalendarAppSel")}if(g.getTentative()){r.addClass("sapUiCalendarAppTent")}if(I){r.addClass("sapUiCalendarAppWithIcon")}r.writeClasses();r.writeStyles();r.write(">");r.write("<div");r.addClass("sapUiCalendarAppCont");if(D){r.addStyle("background-color",g._getCSSColorForBackground(D));r.writeStyles()}r.writeClasses();r.write(">");if(F&&J<0){O=["sapUiCalendarAppArrowIconLeft","sapUiCalendarAppArrowIcon"];r.writeIcon("sap-icon://arrow-left",O,{title:null})}if(I){O=["sapUiCalendarAppIcon"];var z={};z["id"]=U+"-Icon";z["title"]=null;r.writeIcon(I,O,z)}r.write("<div");r.addClass("sapUiCalendarAppTitleWrapper");r.addClass("sapUiSPCAppLineClamp"+k);r.writeClasses();r.write(">");if(P){r.write("<span");r.writeAttribute("id",U+"-Title");r.addClass("sapUiCalendarAppTitle");r.writeClasses();r.write(">");r.writeEscaped(P,true);r.write("</span>")}if(h){r.write("<span");r.writeAttribute("id",U+"-Text");r.addClass("sapUiCalendarAppText");r.writeClasses();r.write(">");r.writeEscaped(h,true);r.write("</span>")}r.write("</div>");if(W&&V<0){O=["sapUiCalendarAppArrowIconRight","sapUiCalendarAppArrowIcon"];r.writeIcon("sap-icon://arrow-right",O,{title:null})}r.write('<span id="'+U+'-Descr" class="sapUiInvisibleText">'+o._getAppointmentAnnouncementInfo(g)+"</span>");r.write("</div>");if(o.getEnableAppointmentsResize()&&!L&&!B){this.renderResizeHandles(r)}r.write("</div>");r.write("</div>")};o.renderNowMarker=function(e,t){var a=new Date;e.write("<div");e.writeAttribute("id",t.getId()+"-nowMarker");e.addStyle("top",t._calculateTopPosition(a)+"px");e.addClass("sapMSinglePCNowMarker");if(t._isOutsideVisibleHours(a.getHours())){e.addClass("sapMSinglePCNowMarkerHidden")}e.writeClasses();e.writeStyles();e.write(">");e.write("<span");e.writeAttribute("id",t.getId()+"-nowMarkerText");e.addClass("sapMSinglePCNowMarkerText");e.writeClasses();e.write(">");e.write(t._formatTimeAsString(a));if(t._hasAMPM()){e.write("<span");e.writeAttribute("id",t.getId()+"-nowMarkerAMPM");e.addClass("sapMSinglePCNowMarkerAMPM");e.writeClasses();e.write(">");e.write(t._addAMPM(a));e.write("</span>")}e.write("</span>");e.write("</div>")};o.renderResizeHandles=function(e){e.write("<span");e.addClass("sapMSinglePCAppResizeHandleBottom");e.writeClasses();e.write(">");e.write("</span>");e.write("<span");e.addClass("sapMSinglePCAppResizeHandleTop");e.writeClasses();e.write(">");e.write("</span>")};o._getLineClamp=function(e,a){var i=t._minutesBetween(e,a);if(i>=51&&i<69){return"2"}else if(i>=69&&i<90){return"3"}else if(i>=90&&i<110){return"4"}else if(i>=110&&i<130){return"5"}else if(i>=130&&i<150){return"6"}else if(i>=150&&i<170){return"7"}else if(i>=170&&i<190){return"8"}else if(i>=190){return"9"}else{return"1"}};return o},true);