/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/core/ElementMetadata","sap/base/Log"],function(e,t,r){"use strict";var i=function(e,r){t.apply(this,arguments);this._mViews=r.metadata.views||{}};i.prototype=Object.create(t.prototype);i.prototype.applySettings=function(e){var r=e.hasOwnProperty("renderer")?e.renderer||"":undefined;t.prototype.applySettings.call(this,e);if(r==null){this._sRendererName=null}};i.prototype.getRendererName=function(){if(!this._sBlockRenderer){this._sBlockRenderer=this._resolveRendererName();r.debug("BlockBaseMetadata :: "+this.getName()+" is renderer with "+this._sBlockRenderer)}return this._sBlockRenderer};i.prototype._resolveRendererName=function(){var e=t.prototype.getRendererName.call(this);if(e==null){var r=this.getParent();if(r){e=i.prototype._resolveRendererName.apply(r)}else{throw new Error("BlockBaseMetadata :: no renderer found for "+this.getName())}}return e};i.prototype.getView=function(e){return this._mViews[e]};i.prototype.getViews=function(){return this._mViews};i.prototype.setView=function(e,t){this._mViews[e]=t;return this};i.prototype.hasViews=function(){return!e.isEmptyObject(this._mViews)};return i},true);