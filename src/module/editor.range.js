Minder.Range = kity.createClass('Range',{
    constructor : function(){
        this.nativeRange = document.createRange();
        this.nativeSel = window.getSelection();
    },
    select:function(){
        var start = this.nativeRange.startContainer;
        if(start.nodeType == 1 && start.childNodes.length == 0){
            var char = document.createTextNode('\u200b');
            start.appendChild(char);
            this.nativeRange.setStart(char,1);
            this.nativeRange.collapse(true);
        }
        this.nativeSel.removeAllRanges();
        this.nativeSel.addRange(this.nativeRange);
        return this;
    },
    setStart:function(node,index){
        this.nativeRange.setStart(node,index);
        return this;
    },
    setEnd:function(node,index){
        this.nativeRange.setEnd(node,index);
        return this;
    },
    getStart:function(){
        var range = this.nativeSel.getRangeAt(0);
        return {
            startContainer:range.startContainer,
            startOffset:range.startOffset
        }
    },
    collapse:function(toStart){
        this.nativeRange.collapse(toStart === true);
        return this;
    },
    insertNode:function(node){
        this.nativeRange.insertNode(node);
        return this;
    }
});