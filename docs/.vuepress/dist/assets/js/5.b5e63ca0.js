(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{232:function(t,e,i){"use strict";var s=i(85);i.n(s).a},233:function(t,e,i){"use strict";var s=i(86);i.n(s).a},235:function(t,e,i){"use strict";var s=i(87);i.n(s).a},237:function(t,e,i){"use strict";i.r(e);i(209),i(33),i(31);var s=i(0),r=(i(210),i(211)),n=(i(96),i(97),i(84),i(227));class o{constructor({id:t,x:e,y:i,width:s,height:r,colWidth:h,rowHeight:a,margin:d,draggable:g,resizable:u,resizeEdges:l,resizeHandleSize:p}){this._moved=!1,this.onDragStartEvent=void 0,this.onDragStartLeft=0,this.onDragStartTop=0,this._onDragStartEvent=new n.SimpleEventDispatcher,this._onDragEvent=new n.SimpleEventDispatcher,this._onDragEndEvent=new n.SimpleEventDispatcher,this.onResizeStartEvent=void 0,this.onResizeStartLeft=0,this.onResizeStartTop=0,this.onResizeStartingWidth=0,this.onResizeStartingHeight=0,this._onResizeStartEvent=new n.SimpleEventDispatcher,this._onResizeEvent=new n.SimpleEventDispatcher,this._onResizeEndEvent=new n.SimpleEventDispatcher,this._id=t,this._colWidth=void 0!==h?h:1,this._rowHeight=void 0!==a?a:1,this._margin=void 0!==d?d:{x:1,y:1},this._x=void 0!==e?e:0,this._left=o.getLeftFromX(this._x,this._colWidth,this._margin),this._y=void 0!==i?i:0,this._top=o.getTopFromY(this._y,this._rowHeight,this._margin),this._width=void 0!==s?s:0,this._widthPx=o.getWidthInPx(this._width,this._colWidth,this._margin),this._height=void 0!==r?r:0,this._heightPx=o.getHeightInPx(this._height,this._rowHeight,this._margin),this._draggable=void 0===g||g,this._resizable=void 0===u||u,this._resizeEdges=void 0!==l?l:"top bottom left right",this._resizeHandleSize=void 0!==p?p:8}get id(){return this._id}get x(){return this._x}set x(t){this._x=t,this.updatePositionAndSize()}get y(){return this._y}set y(t){this._y=t,this.updatePositionAndSize()}get colWidth(){return this._colWidth}set colWidth(t){this._colWidth=t,this.updatePositionAndSize()}get rowHeight(){return this._rowHeight}set rowHeight(t){this._rowHeight=t,this.updatePositionAndSize()}get margin(){return this._margin}set margin(t){this._margin=t,this.updatePositionAndSize()}get left(){return this._left}set left(t){this._left=t}get top(){return this._top}set top(t){this._top=t}get width(){return this._width}set width(t){this._width=t,this.updatePositionAndSize()}get height(){return this._height}set height(t){this._height=t,this.updatePositionAndSize()}get widthPx(){return this._widthPx}set widthPx(t){this._widthPx=t}get heightPx(){return this._heightPx}set heightPx(t){this._heightPx=t}updatePositionAndSize(){this.left=o.getLeftFromX(this.x,this.colWidth,this.margin),this.top=o.getTopFromY(this.y,this.rowHeight,this.margin),this.widthPx=o.getWidthInPx(this.width,this.colWidth,this.margin),this.heightPx=o.getHeightInPx(this.height,this.rowHeight,this.margin)}get draggable(){return this._draggable}set draggable(t){this._draggable=t}get resizable(){return this._resizable}set resizable(t){this._resizable=t}get resizeEdges(){return this._resizeEdges}set resizeEdges(t){this._resizeEdges=t}get resizeHandleSize(){return this._resizeHandleSize}set resizeHandleSize(t){this._resizeHandleSize=t}get moved(){return this._moved}set moved(t){this._moved=t}toItem(){return{id:this.id,x:this.x,y:this.y,top:this.top,left:this.left,width:this.width,widthPx:this.widthPx,height:this.height,heightPx:this.heightPx,draggable:this.draggable,resizable:this.resizable}}fromItem(t){this._x=t.x,this._y=t.y,this._width=t.width,this._height=t.height,this.updatePositionAndSize()}_onDragStart(t){t&&t.dataTransfer&&(this.onDragStartEvent=t,t.dataTransfer.setData("text/plain",this.id.toString())),this.onDragStartLeft=this.left,this.onDragStartTop=this.top,this._onDragStartEvent.dispatch(this.toItem())}_onDrag(t){if(void 0!==this.onDragStartEvent&&t.screenX>0&&t.screenY>0){let e=+this.onDragStartLeft-this.onDragStartEvent.screenX+t.screenX,i=+this.onDragStartTop-this.onDragStartEvent.screenY+t.screenY;this.left=e,this.top=i,this._onDragEvent.dispatch(this.toItem())}}_onDragEnd(t){t.preventDefault(),this._onDrag(t),this.onDragStartEvent=void 0,this.onDragStartLeft=0,this.onDragStartTop=0,t.dataTransfer&&t.dataTransfer.clearData(),this._onDragEndEvent.dispatch(this.toItem())}get onDragStart(){return this._onDragStartEvent.asEvent()}get onDrag(){return this._onDragEvent.asEvent()}get onDragEnd(){return this._onDragEndEvent.asEvent()}_onResizeStart(t,e){t&&t.dataTransfer&&(this.onResizeStartEvent=t,t.dataTransfer.setData("text/plain",this.id.toString())),this.onResizeStartLeft=this.left,this.onResizeStartTop=this.top,this.onResizeStartingWidth=this.widthPx,this.onResizeStartingHeight=this.heightPx,this._onResizeStartEvent.dispatch(this.toItem())}_onResize(t,e){if(e.includes("left")){let e=+this.onResizeStartLeft-this.onResizeStartEvent.screenX+t.screenX;this.left=e;let i=+this.onResizeStartingWidth+this.onResizeStartEvent.screenX-t.screenX;this.widthPx=i}if(e.includes("right")){let e=+this.onResizeStartingWidth-this.onResizeStartEvent.screenX+t.screenX;this.widthPx=e}if(e.includes("top")){let e=+this.onResizeStartTop-this.onResizeStartEvent.screenY+t.screenY;this.top=e;let i=+this.onResizeStartingHeight+this.onResizeStartEvent.screenY-t.screenY;this.heightPx=i}if(e.includes("bottom")){let e=+this.onResizeStartingHeight-this.onResizeStartEvent.screenY+t.screenY;this.heightPx=e}this._onResizeEvent.dispatch(this.toItem())}_onResizeEnd(t,e){t.preventDefault(),this._onResize(t,e),this.onResizeStartEvent=void 0,this.onResizeStartLeft=0,this.onResizeStartTop=0,this.onResizeStartingHeight=0,this.onResizeStartingWidth=0,this._onResizeEndEvent.dispatch(this.toItem())}get onResizeStart(){return this._onResizeStartEvent.asEvent()}get onResize(){return this._onResizeEvent.asEvent()}get onResizeEnd(){return this._onResizeEndEvent.asEvent()}static getLeftFromX(t,e,i){return Math.round(e*t+(t+1)*i.x)}static getXFromLeft(t,e,i){return Math.round((t-i.x)/(e+i.x))}static getTopFromY(t,e,i){return Math.round(e*t+(t+1)*i.y)}static getYFromTop(t,e,i){return Math.round((t-i.y)/(e+i.y))}static getWidthInPx(t,e,i){return Math.round(e*t+Math.max(0,t-1)*i.x)}static getWidthFromPx(t,e,i){return Math.round((t+i.x)/(e+i.x))}static getHeightInPx(t,e,i){return Math.round(e*t+Math.max(0,t-1)*i.y)}static getHeightFromPx(t,e,i){return Math.round((t+i.y)/(e+i.y))}}var h,a,d,g=["x","y","width","height"],u={name:"item",inheritAttrs:!1,props:{id:{type:[Number,String],required:!0},x:{type:Number,default:0},y:{type:Number,default:0},width:{type:Number,default:1},height:{type:Number,default:1},draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},resizeEdges:{type:String,default:"bottom right"},resizeHandleSize:{type:Number,default:8}},inject:["$layout"],provide:function(){var t=this;return{$item:function(){return t.item}}},data:function(){return{item:null,dragging:!1,resizing:!1}},computed:{resizingOrDragging:function(){return this.resizing||this.dragging},classObj:function(){return{dragging:this.resizingOrDragging}},layout:function(){return this.$layout()},left:function(){return this.item.left},top:function(){return this.item.top},widthPx:function(){return this.item.widthPx},heightPx:function(){return this.item.heightPx},resizeTop:function(){return this.resizeEdges.includes("top")},resizeBottom:function(){return this.resizeEdges.includes("bottom")},resizeLeft:function(){return this.resizeEdges.includes("left")},resizeRight:function(){return this.resizeEdges.includes("right")},resizeTopLeft:function(){return this.resizeTop&&this.resizeLeft},resizeBottomLeft:function(){return this.resizeBottom&&this.resizeLeft},resizeTopRight:function(){return this.resizeTop&&this.resizeRight},resizeBottomRight:function(){return this.resizeBottom&&this.resizeRight}},methods:{onDragStart:(d=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.dragging=!0,this.item._onDragStart(e),this.$emit("dragStart",this.item),e.target.style.opacity=0;case 4:case"end":return t.stop()}}),t,this)}))),function(t){return d.apply(this,arguments)}),onDrag:function(t){this.item._onDrag(t),this.$emit("drag",this.item)},onDragEnd:(a=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.item._onDragEnd(e),this.$emit("dragEnd",this.item),e.target.style.opacity=1,t.next=5,this.$nextTick();case 5:this.dragging=!1;case 6:case"end":return t.stop()}}),t,this)}))),function(t){return a.apply(this,arguments)}),onResizeStart:function(t,e){this.resizing=!0,this.item._onResizeStart(t,e),this.$emit("resizeStart",this.item),t.target.style.opacity=0},onResize:function(t,e){this.item._onResize(t,e),this.$emit("resize",this.item)},onResizeEnd:(h=Object(r.a)(regeneratorRuntime.mark((function t(e,i){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.item._onResizeEnd(e,i),this.$emit("resizeEnd",this.item),e.target.style.opacity=1,t.next=5,this.$nextTick();case 5:this.resize=!1;case 6:case"end":return t.stop()}}),t,this)}))),function(t,e){return h.apply(this,arguments)}),createPropWatchers:function(){var t=this;Object.keys(this.$props).forEach((function(e){t.$watch(e,function(t,e){return{handler:function(e){this.item[t]!==e&&(this.item[t]=e)},deep:e}}(e,!0))}))},createDashItemWatchers:function(){var t=this;g.forEach((function(e){var i;t.$watch("item."+e,(i=e,{handler:function(t){this.$props[i]!==t&&this.$emit("update:"+i,t)},deep:!0}))}))}},mounted:function(){this.item=new o(this.$props),this.layout.addDashItem(this.item),this.createPropWatchers(),this.createDashItemWatchers()},beforeDestroy:function(){this.layout&&this.layout.removeDashItem(this.item)}},l=(i(232),i(1)),p=Object(l.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.item?i("div",{ref:t.id,staticClass:"item",class:t.classObj,style:{width:t.widthPx+"px",height:t.heightPx+"px",left:t.left+"px",top:t.top+"px"},attrs:{id:t.id}},[t.draggable?i("div",{ref:t.id+"-overlay",style:{top:"0px",left:"0px",bottom:"0px",right:"0px",position:"absolute",cursor:"move"},attrs:{draggable:"",id:t.id+"-overlay"},on:{dragstart:function(e){return e.stopPropagation(),t.onDragStart(e)},drag:function(e){return e.stopPropagation(),t.onDrag(e)},dragend:function(e){return e.stopPropagation(),t.onDragEnd(e)}}},[t.resizeTop&&!t.dragging?i("div",{ref:t.id+"-resizeTop",style:{height:t.resizeHandleSize+"px",left:0,right:0,cursor:"ns-resize",position:"absolute"},attrs:{draggable:"",id:t.id+"-resizeTop"},on:{dragstart:function(e){return e.stopPropagation(),t.onResizeStart(e,"top")},drag:function(e){return e.stopPropagation(),t.onResize(e,"top")},dragend:function(e){return e.stopPropagation(),t.onResizeEnd(e,"top")}}},[t._t("resizeTop")],2):t._e(),t._v(" "),t.resizeBottom&&!t.dragging?i("div",{ref:t.id+"-resizeBottom",style:{height:t.resizeHandleSize+"px",left:"0px",right:"0px",bottom:"0px",cursor:"ns-resize",position:"absolute"},attrs:{draggable:"",id:t.id+"-resizeBottom"},on:{dragstart:function(e){return e.stopPropagation(),t.onResizeStart(e,"bottom")},drag:function(e){return e.stopPropagation(),t.onResize(e,"bottom")},dragend:function(e){return e.stopPropagation(),t.onResizeEnd(e,"bottom")}}},[t._t("resizeBottom")],2):t._e(),t._v(" "),t.resizeLeft&&!t.dragging?i("div",{ref:t.id+"-resizeLeft",style:{width:t.resizeHandleSize+"px",top:"0px",bottom:"0px",left:"0px",cursor:"ew-resize",position:"absolute"},attrs:{draggable:"",id:t.id+"-resizeLeft"},on:{dragstart:function(e){return e.stopPropagation(),t.onResizeStart(e,"left")},drag:function(e){return e.stopPropagation(),t.onResize(e,"left")},dragend:function(e){return e.stopPropagation(),t.onResizeEnd(e,"left")}}},[t._t("resizeLeft")],2):t._e(),t._v(" "),t.resizeRight&&!t.dragging?i("div",{ref:t.id+"-resizeRight",style:{width:t.resizeHandleSize+"px",top:"0px",bottom:"0px",right:"0px",cursor:"ew-resize",position:"absolute"},attrs:{draggable:"",id:t.id+"-resizeRight"},on:{dragstart:function(e){return e.stopPropagation(),t.onResizeStart(e,"right")},drag:function(e){return e.stopPropagation(),t.onResize(e,"right")},dragend:function(e){return e.stopPropagation(),t.onResizeEnd(e,"right")}}},[t._t("resizeRight")],2):t._e(),t._v(" "),t.resizeTopLeft&&!t.dragging?i("div",{ref:t.id+"-resizeTopLeft",style:{width:2*t.resizeHandleSize+"px",height:2*t.resizeHandleSize+"px",top:t.resizeHandleSize/-2+"px",left:t.resizeHandleSize/-2+"px",cursor:"nw-resize",position:"absolute"},attrs:{draggable:"",id:t.id+"-resizeTopLeft"},on:{dragstart:function(e){return e.stopPropagation(),t.onResizeStart(e,"top left")},drag:function(e){return e.stopPropagation(),t.onResize(e,"top left")},dragend:function(e){return e.stopPropagation(),t.onResizeEnd(e,"top left")}}},[t._t("resizeTopLeft")],2):t._e(),t._v(" "),t.resizeTopRight&&!t.dragging?i("div",{ref:t.id+"-resizeTopRight",style:{width:2*t.resizeHandleSize+"px",height:2*t.resizeHandleSize+"px",top:t.resizeHandleSize/-2+"px",right:t.resizeHandleSize/-2+"px",cursor:"ne-resize",position:"absolute"},attrs:{draggable:"",id:t.id+"-resizeTopRight"},on:{dragstart:function(e){return e.stopPropagation(),t.onResizeStart(e,"top right")},drag:function(e){return e.stopPropagation(),t.onResize(e,"top right")},dragend:function(e){return e.stopPropagation(),t.onResizeEnd(e,"top right")}}},[t._t("resizeTopRight")],2):t._e(),t._v(" "),t.resizeBottomLeft&&!t.dragging?i("div",{ref:t.id+"-resizeBottomLeft",style:{width:2*t.resizeHandleSize+"px",height:2*t.resizeHandleSize+"px",bottom:t.resizeHandleSize/-2+"px",left:t.resizeHandleSize/-2+"px",cursor:"ne-resize",position:"absolute"},attrs:{draggable:"",id:t.id+"-resizeBottomLeft"},on:{dragstart:function(e){return e.stopPropagation(),t.onResizeStart(e,"bottom left")},drag:function(e){return e.stopPropagation(),t.onResize(e,"bottom left")},dragend:function(e){return e.stopPropagation(),t.onResizeEnd(e,"bottom left")}}},[t._t("resizeBottomLeft")],2):t._e(),t._v(" "),t.resizeBottomRight&&!t.dragging?i("div",{ref:t.id+"-resizeBottomRight",style:{width:2*t.resizeHandleSize+"px",height:2*t.resizeHandleSize+"px",bottom:t.resizeHandleSize/-2+"px",right:t.resizeHandleSize/-2+"px",cursor:"nw-resize",position:"absolute"},attrs:{draggable:"",id:t.id+"-resizeBottomRight"},on:{dragstart:function(e){return e.stopPropagation(),t.onResizeStart(e,"bottom right")},drag:function(e){return e.stopPropagation(),t.onResize(e,"bottom right")},dragend:function(e){return e.stopPropagation(),t.onResizeEnd(e,"bottom right")}}},[t._t("resizeBottomRight")],2):t._e()]):t._e(),t._v(" "),t._t("default")],2):t._e()}),[],!1,null,null,null).exports;class c{constructor({breakpoint:t,numberOfCols:e,breakpointWidth:i,margin:s,autoHeight:r,keepSquare:n,width:o,height:h,rowHeight:a}){this._itemBeingDragged=!1,this._itemBeingResized=!1,this._dashItems=[],this._dragStartListeners=[],this._dragListeners=[],this._dragEndListeners=[],this._resizeStartListeners=[],this._resizeListeners=[],this._resizeEndListeners=[],this._breakpoint=t,this._numberOfCols=e,this._breakpointWidth=void 0!==i?i:void 0,this._margin=void 0!==s?s:{x:10,y:10},this._autoHeight=void 0===r||r,this._keepSquare=void 0===n||n,this._width=void 0!==o?o:400,this._height=void 0!==h?h:400,this._rowHeight=void 0!==a?a:200}get breakpoint(){return this._breakpoint}set breakpoint(t){this._breakpoint=t}get breakpointWidth(){return this._breakpointWidth}set breakpointWidth(t){this._breakpointWidth=t}get margin(){return this._margin}set margin(t){this._margin=t}get width(){return this._width}set width(t){this._width=t,this.updateDashItems()}get height(){return this.autoHeight?this.calculateHeight():this._height}set height(t){this._height=t}get numberOfCols(){return this._numberOfCols}set numberOfCols(t){this._numberOfCols=t,this.updateDashItems()}get autoHeight(){return this._autoHeight}set autoHeight(t){this._autoHeight=t}get keepSquare(){return this._keepSquare}set keepSquare(t){this._keepSquare=t}get rowHeight(){return this.keepSquare?this.colWidth:this._rowHeight}set rowHeight(t){this._rowHeight=t}get colWidth(){return(this.width-this.margin.x*(this.numberOfCols+1))/this.numberOfCols}get itemBeingDragged(){return this._itemBeingDragged}set itemBeingDragged(t){this._itemBeingDragged=t}get itemBeingResized(){return this._itemBeingResized}set itemBeingResized(t){this._itemBeingResized=t}get placeholder(){return this.getDashItemById("-1Placeholder")}set placeholder(t){this.placeholder=t}calculateHeight(){let t=0,e=0;for(let i of this._dashItems)e=i.y+i.height,e>t&&(t=e);return t*(this.rowHeight+this.margin.y)+this.margin.y}addDashItem(t){this._dashItems.push(t),this.updateDashItems();let e=t.onDragStart.subscribe(t=>{this.itemDragging(t)});this._dragStartListeners.push({id:t.id,unsubscribe:e});let i=t.onDrag.subscribe(t=>{this.itemDragging(t)});this._dragListeners.push({id:t.id,unsubscribe:i});let s=t.onDragEnd.subscribe(t=>{this.itemDraggingComplete(t)});this._dragEndListeners.push({id:t.id,unsubscribe:s});let r=t.onResizeStart.subscribe(t=>{this.itemResizing(t)});this._resizeStartListeners.push({id:t.id,unsubscribe:r});let n=t.onResize.subscribe(t=>{this.itemResizing(t)});this._resizeListeners.push({id:t.id,unsubscribe:n});let o=t.onResizeEnd.subscribe(t=>{this.itemResizingComplete(t)});this._resizeEndListeners.push({id:t.id,unsubscribe:o})}removeDashItem(t){let e=this._dashItems.findIndex(e=>e.id===t.id);e>=0&&this._dashItems.splice(e,1),e=this._dragStartListeners.findIndex(e=>e.id===t.id),e>=0&&(this._dragStartListeners[e].unsubscribe(),this._dragStartListeners.splice(e,1)),e=this._dragListeners.findIndex(e=>e.id===t.id),e>=0&&(this._dragListeners[e].unsubscribe(),this._dragListeners.splice(e,1)),e=this._dragEndListeners.findIndex(e=>e.id===t.id),e>=0&&(this._dragEndListeners[e].unsubscribe(),this._dragEndListeners.splice(e,1)),e=this._resizeStartListeners.findIndex(e=>e.id===t.id),e>=0&&(this._resizeStartListeners[e].unsubscribe(),this._resizeStartListeners.splice(e,1)),e=this._resizeListeners.findIndex(e=>e.id===t.id),e>=0&&(this._resizeListeners[e].unsubscribe(),this._resizeListeners.splice(e,1)),e=this._resizeEndListeners.findIndex(e=>e.id===t.id),e>=0&&(this._resizeEndListeners[e].unsubscribe(),this._resizeEndListeners.splice(e,1))}getDashItemById(t){let e=this._dashItems.findIndex(e=>e.id===t);return e>=0?this._dashItems[e]:null}updateDashItems(){this._dashItems.forEach(t=>{t.colWidth=this.colWidth,t.rowHeight=this.rowHeight,t.margin=this.margin})}get items(){let t=[];return this._dashItems.forEach(e=>{t.push(e.toItem())}),t}itemDragging(t){this.itemBeingDragged||(this.placeholder.x=t.x,this.placeholder.y=t.y,this.placeholder.width=t.width,this.placeholder.height=t.height,this.itemBeingDragged=!0);let e=JSON.parse(JSON.stringify(this.items)).filter(e=>e.id!==t.id),i=e.findIndex(t=>t.id===this.placeholder.id);e=this.moveItem(e,e[i],o.getXFromLeft(t.left,this.colWidth,this.margin),o.getYFromTop(t.top,this.rowHeight,this.margin),!0),e=this.compact(e),this.syncItems(e)}itemDraggingComplete(t){this.itemBeingDragged=!1;let e=this.getDashItemById(t.id);e&&(e.x=this.placeholder.x,e.y=this.placeholder.y),this.placeholder.x=0,this.placeholder.y=0,this.placeholder.width=0,this.placeholder.height=0}itemResizing(t){this.itemBeingResized=!0,this.placeholder.x=o.getXFromLeft(t.left,this.colWidth,this.margin),this.placeholder.y=o.getYFromTop(t.top,this.rowHeight,this.margin),this.placeholder.width=o.getWidthFromPx(t.widthPx,this.colWidth,this.margin),this.placeholder.height=o.getHeightFromPx(t.heightPx,this.rowHeight,this.margin);let e=JSON.parse(JSON.stringify(this.items)).filter(e=>e.id!==t.id),i=e.findIndex(t=>t.id===this.placeholder.id);e=this.moveItem(e,e[i],o.getXFromLeft(t.left,this.colWidth,this.margin),o.getYFromTop(t.top,this.rowHeight,this.margin),!0),e=this.compact(e),this.syncItems(e)}itemResizingComplete(t){this.itemBeingResized=!1;let e=this.getDashItemById(t.id);e&&(e.x=this.placeholder.x,e.y=this.placeholder.y,e.width=this.placeholder.width,e.height=this.placeholder.height),this.placeholder.x=0,this.placeholder.y=0,this.placeholder.width=0,this.placeholder.height=0}checkForCollision(t,e){return t.id!==e.id&&(!(t.x+t.width<=e.x)&&(!(t.x>=e.x+e.width)&&(!(t.y+t.height<=e.y)&&!(t.y>=e.y+e.height))))}getFirstCollision(t,e){for(let i of t)if(this.checkForCollision(e,i))return i;return null}getAllCollisions(t,e){return t.filter(t=>this.checkForCollision(t,e))}correctItemBounds(t){return t.x+t.width>this.numberOfCols&&(t.x=this.numberOfCols-t.width),t.x<0&&(t.x=0),t.width>this.numberOfCols&&(t.x=0,t.width=this.numberOfCols),t}correctBounds(t){for(let e=0;e<t.length;e++)t[e]=this.correctItemBounds(t[e]);return t}compact(t){const e=this.sortItems(t),i=[],s=Array(t.length);for(let r=0;r<e.length;r++){let n=e[r];n=this.compactItem(i,n),i.push(n),s[t.findIndex(t=>t.id===n.id)]=n,n.moved=!1}return s}compactItem(t,e){for(;e.y>0&&!this.getFirstCollision(t,e);)e.y--;let i;for(;i=this.getFirstCollision(t,e);)e.y=i.y+i.height;return e}sortItems(t,e){let i=JSON.parse(JSON.stringify(t));return i.sort((t,e)=>t.y>e.y||t.y===e.y&&t.x>e.x?1:-1),e&&i.reverse(),i}moveItem(t,e,i,s,r){const n=e.y>s;e.x=i,e.y=s,e.moved=!0,e=this.correctItemBounds(e);const o=this.sortItems(t,n),h=this.getAllCollisions(o,e);for(let i of h){if(i.moved)continue;if(e.y>i.y&&e.y-i.y>i.height/4)continue;let s=t.findIndex(t=>t.id===i.id);t=this.moveItemFromCollision(t,e,t[s],r)}return t}moveItemFromCollision(t,e,i,s){if(s){const s={id:"-1fakeItem",x:i.x,y:i.y,width:i.width,height:i.height};if(s.y=Math.max(e.y-i.height,0),!this.getFirstCollision(t,s))return this.moveItem(t,i,i.x,s.y)}return this.moveItem(t,i,i.x,i.y+1)}syncItems(t){t.forEach(t=>{this.getDashItemById(t.id).fromItem(t)})}}var m={name:"Dashboard",props:{breakpoint:String,breakpointWidth:Number,items:Array,numberOfCols:Number},components:{DashItem:p},data:function(){return{debug:!1,l:null,placeholderId:"-1Placeholder"}},provide:function(){var t=this;return{$layout:function(){return t.l}}},inject:["$dashboard"],computed:{dashboard:function(){return this.$dashboard()},currentBreakpoint:function(){return this.dashboard?this.dashboard.currentBreakpoint:""},dragging:function(){return this.l.itemBeingDragged},resizing:function(){return this.l.itemBeingResized},placeholder:function(){return this.l.placeholder?this.l.placeholder.toItem():""},itemsFromLayout:function(){return this.l.items},colWidth:function(){return this.l.colWidth},height:function(){return this.l?this.l.height+"px":"0px"}},methods:{createPropWatchers:function(){var t=this;Object.keys(this.$props).forEach((function(e){t.$watch(e,function(t,e){return{handler:function(e){this.l[t]!==e&&(this.l[t]=e)},deep:e}}(e,!0))}))}},created:function(){this.l=new c(this.$props),this.dashboard.addLayoutInstance(this.l)},beforeDestroy:function(){this.dashboard.removeLayoutInstance(this.l)}},f=(i(233),Object(l.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.currentBreakpoint===t.breakpoint,expression:"currentBreakpoint === breakpoint"}]},[t.l?i("div",{style:{position:"relative",height:t.height}},[t._t("default"),t._v(" "),i("DashItem",{directives:[{name:"show",rawName:"v-show",value:t.dragging||t.resizing,expression:"dragging || resizing"}],attrs:{id:t.placeholderId,draggable:!1,resizable:!1}},[i("div",{staticClass:"placeholder"})])],2):t._e(),t._v(" "),t.debug?i("div",[t._v("\n    Layout Breakpoint: "+t._s(t.breakpoint)+" "),i("br"),t._v("\n    Current ColWidth: "+t._s(t.colWidth)+" "),i("br"),t._v("\n    Layout Number of Cols: "+t._s(t.numberOfCols)+" "),i("br"),t._v("\n    placeholder: "+t._s(JSON.stringify(t.placeholder))+" "),i("br"),t._v("\n    Items: "+t._s(JSON.stringify(t.itemsFromLayout))+"\n  ")]):t._e()])}),[],!1,null,null,null).exports);class z{constructor({id:t,margin:e,autoHeight:i,width:s}){this._id=t,this._layouts=[],this._margin=void 0!==e?e:{x:10,y:10},this._autoHeight=void 0===i||i,this._width=void 0!==s?s:400}get id(){return this._id}get breakpoints(){let t=[];for(let e of this._layouts)t.push({name:e.breakpoint,numberOfCols:e.numberOfCols,setpoint:e.breakpointWidth});return t.sort((t,e)=>void 0!==t.setpoint&&void 0!==e.setpoint?+t.setpoint-+e.setpoint:void 0===t.setpoint?1:-1),t}get currentBreakpoint(){return this.updateCurrentBreakpoint()}get layouts(){return this._layouts}set layouts(t){this._layouts=t}get margin(){return this._margin}set margin(t){this._margin=t}get autoHeight(){return this._autoHeight}set autoHeight(t){this._autoHeight=t}get width(){return this._width}set width(t){this._width=t,this.updateCurrentBreakpoint(),this.updateLayouts()}updateCurrentBreakpoint(){if(0==this.breakpoints.length)return"";let t=this.breakpoints[0].name;for(let e=1;e<this.breakpoints.length;e++)void 0!==typeof this.breakpoints[e].setpoint&&this.width>this.breakpoints[e].setpoint&&(t=this.breakpoints[e].name);return t}setMargins(t){this.margin=t}sortBreakpoints(){this.breakpoints.sort((t,e)=>void 0!==t.setpoint&&void 0!==e.setpoint?+t.setpoint-+e.setpoint:void 0===t.setpoint?1:-1)}addLayoutInstance(t){this._layouts.push(t)}updateLayouts(){this._layouts.forEach(t=>{t.width=this.width})}removeLayoutInstance(t){let e=this.layouts.findIndex(e=>t.breakpoint===e.breakpoint);e>=0&&this._layouts.splice(e,1)}}var _=i(234),b={name:"Dashboard",props:{id:{type:[Number,String],required:!0},layouts:Array},components:{},directives:{rlocal:_.resize},data:function(){return{d:null,dragging:!1}},provide:function(){var t=this;return{$dashboard:function(){return t.d}}},computed:{},methods:{onResize:function(t){this.d.width=t.detail.width}},created:function(){this.d=new z(this.id)}},v=(i(235),Object(l.a)(b,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.d?e("div",{directives:[{name:"rlocal",rawName:"v-rlocal"}],ref:this.id,attrs:{id:this.id},on:{resize:this.onResize}},[this._t("default")],2):this._e()])}),[],!1,null,null,null).exports);i.d(e,"DashItem",(function(){return p})),i.d(e,"Layout",(function(){return f})),i.d(e,"Dashboard",(function(){return v}));var x={DashItem:p,Layout:f,Dashboard:v};Object.keys(x).forEach((function(t){s.a.component(t,x[t])}));e.default=x},85:function(t,e,i){},86:function(t,e,i){},87:function(t,e,i){}}]);