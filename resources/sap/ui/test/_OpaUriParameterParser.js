/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/test/_OpaLogger","sap/ui/thirdparty/jquery","sap/ui/thirdparty/URI"],function(r,a,e,t){"use strict";var s=r.extend("sap.ui.test._OpaUriParameterParser",{});var i=a.getLogger("sap.ui.test._OpaUriParameterParser");s.PREFIX="opa";s.BLACKLIST_PATTERNS=[/^opa((?!(Frame)).*)$/,/hidepassed/,/noglobals/,/notrycatch/,/coverage/,/module/,/filter/];s._getOpaParams=function(){var r={};var a=(new t).search(true);for(var e in a){if(e.startsWith(s.PREFIX)){var i=e.substr(s.PREFIX.length);i=i.charAt(0).toLowerCase()+i.substr(1);r[i]=s._parseParam(a[e])}}return r};s._getAppParams=function(){var r={};var a=(new t).search(true);for(var e in a){if(s._isBlacklistedParam(e)){i.debug("URI parameter '"+e+"' is recognized as OPA parameter and will not be set in application frame!")}else{r[e]=a[e]}}return r};s._isBlacklistedParam=function(r){var a=false;s.BLACKLIST_PATTERNS.forEach(function(e){a=a||r&&r.match(e)});return a};s._parseParam=function(r){var a=r;["bool","integer","floating"].forEach(function(e){var t=s._parsers[e](r);a=t.parsed?t.value:a});return a};s._parsers={bool:function(r){var a={};if(r&&r.match(/^true$/i)){a={parsed:true,value:true}}if(r&&r.match(/^false$/i)){a={parsed:true,value:false}}return a},integer:function(r){var a=parseInt(r);return{parsed:s._isNumber(a),value:a}},floating:function(r){var a=parseFloat(r);return{parsed:s._isNumber(a),value:a}}};s._isNumber=function(r){return typeof r==="number"&&!isNaN(r)};return s});