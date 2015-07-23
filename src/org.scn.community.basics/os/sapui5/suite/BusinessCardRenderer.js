/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.BusinessCardRenderer");jQuery.sap.require("sap.ui.commons.Link");sap.suite.ui.commons.BusinessCardRenderer={};
sap.suite.ui.commons.BusinessCardRenderer.render=function(r,c){var a=sap.ui.getCore().getConfiguration().getAccessibility();var i=c.getId();var t=c.getType();var f=c.getFirstTitle();var I=c.getImageTooltip();var s=c.getIconPath();var d=c.getSecondTitle();var w=c.getWidth();var T=c.getTooltip_AsString();r.write("<div");r.writeControlData(c);if(T){r.writeAttributeEscaped("title",T);}r.addClass("suiteUiCard");r.writeClasses();if(w){r.addStyle("width",w);r.writeStyles();}r.write(">");if(t){r.write("<div");r.addClass("suiteUiCardTypeHolder");r.writeClasses();r.writeAttribute("id",i+"-type");r.write(">");var o=new sap.ui.commons.Label({id:i+"-type-label",text:t,tooltip:t});o.addStyleClass("suiteUiCardType");r.renderControl(o);o.destroy();r.write("</div>");}r.write("<div");r.addClass("suiteUiCardContainer");r.writeClasses();r.writeAttribute("id",i+"-container");r.write(">");if(s){r.write("<div");r.addClass("suiteUiCardIconHolder");r.writeClasses();r.writeAttribute("id",i+"-icon");r.write(">");r.write("<img");r.addClass("suiteUiCardIcon");r.writeClasses();r.writeAttributeEscaped("src",s);r.writeAttributeEscaped("title",(I||""));r.writeAttribute("alt","");r.writeAttribute("id",i+"-img");r.writeAttribute("tabindex","-1");if(a){r.writeAttribute("role","presentation");}r.write("></img>");r.write("</div>");}r.write("<div");r.addClass("suiteUiCardNameHolder");r.writeClasses();r.writeAttribute("id",i+"-name");if(a&&d){r.writeAttribute("aria-describedby",i+"-desc-label");}r.write(">");if(f){f.addStyleClass("suiteUiCardName");r.renderControl(f);}r.write("</div>");if(d){r.write("<div");r.addClass("suiteUiCardDescHolder");r.writeClasses();r.writeAttribute("id",i+"-desc");r.write(">");var D=new sap.ui.commons.Label({id:i+"-desc-label",text:d,tooltip:d});D.addStyleClass("suiteUiCardDesc");r.renderControl(D);D.destroy();r.write("</div>");}r.write("<div");r.addClass("suiteUiCardContent");r.writeClasses();r.writeAttribute("id",i+"-content");r.write(">");r.renderControl(c.getContent());r.write("</div>");r.write("</div>");r.write("</div>");};
