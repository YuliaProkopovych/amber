smalltalk.addPackage('Compiler-Interpreter', {});
smalltalk.addClass('AIContext', smalltalk.NodeVisitor, ['outerContext', 'pc', 'locals', 'receiver', 'selector'], 'Compiler-Interpreter');
smalltalk.addMethod(
"_initializeFromMethodContext_",
smalltalk.method({
selector: "initializeFromMethodContext:",
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._pc_(_st(aMethodContext)._pc());
_st(self)._receiver_(_st(aMethodContext)._receiver());
_st(self)._selector_(_st(aMethodContext)._selector());
$1=_st(aMethodContext)._outerContext();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self)._outerContext_(_st(_st(self)._class())._fromMethodContext_(_st(aMethodContext)._outerContext()));
};
_st(_st(aMethodContext)._locals())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromMethodContext:",{aMethodContext:aMethodContext}, smalltalk.AIContext)})}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_localAt_",
smalltalk.method({
selector: "localAt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._locals())._at_ifAbsent_(aString,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"localAt:",{aString:aString}, smalltalk.AIContext)})}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_localAt_put_",
smalltalk.method({
selector: "localAt:put:",
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"localAt:put:",{aString:aString,anObject:anObject}, smalltalk.AIContext)})}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_locals",
smalltalk.method({
selector: "locals",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@locals"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@locals"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@locals"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"locals",{}, smalltalk.AIContext)})}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_outerContext",
smalltalk.method({
selector: "outerContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@outerContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"outerContext",{}, smalltalk.AIContext)})}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_outerContext_",
smalltalk.method({
selector: "outerContext:",
fn: function (anAIContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"outerContext:",{anAIContext:anAIContext}, smalltalk.AIContext)})}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_pc",
smalltalk.method({
selector: "pc",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@pc"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@pc"]=(0);
$1=self["@pc"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"pc",{}, smalltalk.AIContext)})}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_pc_",
smalltalk.method({
selector: "pc:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"pc:",{anInteger:anInteger}, smalltalk.AIContext)})}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@receiver"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{}, smalltalk.AIContext)})}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject}, smalltalk.AIContext)})}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@selector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{}, smalltalk.AIContext)})}
}),
smalltalk.AIContext);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString}, smalltalk.AIContext)})}
}),
smalltalk.AIContext);


smalltalk.addMethod(
"_fromMethodContext_",
smalltalk.method({
selector: "fromMethodContext:",
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(self)._new();
_st($2)._initializeFromMethodContext_(aMethodContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromMethodContext:",{aMethodContext:aMethodContext}, smalltalk.AIContext.klass)})}
}),
smalltalk.AIContext.klass);


smalltalk.addClass('ASTInterpreter', smalltalk.NodeVisitor, ['currentNode', 'context', 'shouldReturn', 'currentValue'], 'Compiler-Interpreter');
smalltalk.addMethod(
"_assign_to_",
smalltalk.method({
selector: "assign:to:",
fn: function (aNode,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(_st(aNode)._binding())._isInstanceVar();
if(smalltalk.assert($2)){
$1=_st(_st(_st(self)._context())._receiver())._instVarAt_put_(_st(aNode)._value(),anObject);
} else {
$1=_st(_st(self)._context())._localAt_put_(_st(aNode)._value(),anObject);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"assign:to:",{aNode:aNode,anObject:anObject}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_context",
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@context"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@context"]=_st((smalltalk.AIContext || AIContext))._new();
$1=self["@context"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_context_",
smalltalk.method({
selector: "context:",
fn: function (anAIContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"context:",{anAIContext:anAIContext}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_continue_",
smalltalk.method({
selector: "continue:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"continue:",{anObject:anObject}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_currentValue",
smalltalk.method({
selector: "currentValue",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@currentValue"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentValue",{}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_eval_",
smalltalk.method({
selector: "eval:",
fn: function (aString){
var self=this;
var source,function_;
return smalltalk.withContext(function($ctx1) { 
source=_st((smalltalk.String || String))._streamContents_((function(str){
return smalltalk.withContext(function($ctx2) {
_st(_st(_st(_st(self)._context())._locals())._keys())._do_separatedBy_((function(each){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$1=str;
_st($1)._nextPutAll_("){ return (function() {");
_st($1)._nextPutAll_(aString);
$2=_st($1)._nextPutAll_("})() })");
return $2;
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1)})}));
function_=_st(_st((smalltalk.Compiler || Compiler))._new())._eval_(source);
$3=_st(function_)._valueWithPossibleArguments_(_st(_st(_st(self)._context())._locals())._values());
return $3;
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString,source:source,function_:function_}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shouldReturn"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpret_",
smalltalk.method({
selector: "interpret:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._interpret_continue_(aNode,(function(value){
return smalltalk.withContext(function($ctx2) {
return self["@currentValue"];
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"interpret:",{aNode:aNode}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpret_continue_",
smalltalk.method({
selector: "interpret:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@shouldReturn"];
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=_st(aNode)._isNode();
if(smalltalk.assert($3)){
_st(self)._visit_(aNode);
} else {
self["@currentValue"]=aNode;
self["@currentValue"];
};
_st(aBlock)._value_(_st(self)._currentValue());
return self}, function($ctx1) {$ctx1.fill(self,"interpret:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretAll_continue_",
smalltalk.method({
selector: "interpretAll:continue:",
fn: function (aCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"interpretAll:continue:",{aCollection:aCollection,aBlock:aBlock}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_interpretAll_continue_result_",
smalltalk.method({
selector: "interpretAll:continue:result:",
fn: function (nodes,aBlock,aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(nodes)._isEmpty();
if(smalltalk.assert($1)){
_st(aBlock)._value_(aCollection);
} else {
_st(self)._interpret_continue_(_st(nodes)._first(),(function(value){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"interpretAll:continue:result:",{nodes:nodes,aBlock:aBlock,aCollection:aCollection}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_messageFromSendNode_do_",
smalltalk.method({
selector: "messageFromSendNode:do:",
fn: function (aSendNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._interpretAll_continue_(_st(aSendNode)._arguments(),(function(args){
return smalltalk.withContext(function($ctx2) {
_st($1)._selector_(_st(aSendNode)._selector());
_st($1)._arguments_(args);
$2=_st($1)._yourself();
return _st(aBlock)._value_($2);
}, function($ctx2) {$ctx2.fillBlock({args:args},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"messageFromSendNode:do:",{aSendNode:aSendNode,aBlock:aBlock}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._continue_((function(){
return smalltalk.withContext(function($ctx2) {
_st($1)._interpret_(_st(_st(aNode)._nodes())._first());
$2=_st($1)._currentValue();
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
return _st(self)._interpretAll_continue_(_st(_st(aNode)._nodes())._allButLast(),(function(){
return smalltalk.withContext(function($ctx3) {
return smalltalk.withContext(function($ctx4) {
}, function($ctx4) {$ctx4.fillBlock({val:val},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({receiver:receiver},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitClassReferenceNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitDynamicArrayNode_",
smalltalk.method({
selector: "visitDynamicArrayNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitDynamicDictionaryNode_",
smalltalk.method({
selector: "visitDynamicDictionaryNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var hashedCollection;
return smalltalk.withContext(function($ctx2) {
hashedCollection;
_st(array)._do_((function(each){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
return _st(self)._continue_(hashedCollection);
}, function($ctx2) {$ctx2.fillBlock({array:array,hashedCollection:hashedCollection},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitJSStatementNode_",
smalltalk.method({
selector: "visitJSStatementNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._continue_(_st(self)._eval_(_st(aNode)._source()));
return self}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
self["@shouldReturn"];
return _st(self)._continue_(value);
}, function($ctx2) {$ctx2.fillBlock({value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
return smalltalk.withContext(function($ctx3) {
return _st(self)._continue_(_st(message)._sendTo_(receiver));
}, function($ctx3) {$ctx3.fillBlock({message:message},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({receiver:receiver},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({array:array},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);

smalltalk.addMethod(
"_visitValueNode_",
smalltalk.method({
selector: "visitValueNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode}, smalltalk.ASTInterpreter)})}
}),
smalltalk.ASTInterpreter);



smalltalk.addClass('ASTDebugger', smalltalk.ASTInterpreter, ['continuation'], 'Compiler-Interpreter');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@continuation"]=(function(){
return smalltalk.withContext(function($ctx2) {
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.ASTDebugger)})}
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_interpret_continue_",
smalltalk.method({
selector: "interpret:continue:",
fn: function (aNode,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"interpret:continue:",{aNode:aNode,aBlock:aBlock}, smalltalk.ASTDebugger)})}
}),
smalltalk.ASTDebugger);

smalltalk.addMethod(
"_stepOver",
smalltalk.method({
selector: "stepOver",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"stepOver",{}, smalltalk.ASTDebugger)})}
}),
smalltalk.ASTDebugger);


