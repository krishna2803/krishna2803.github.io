"use strict";const solve=e=>{let t=[];const n=e=>t.push(parseInt(e)),l=(e,n)=>t=t.map(t=>t==parseInt(e)?parseInt(n):t),r=e.split("\n"),i=parseInt(r.shift());if(i<0||!i||r.length<i)return null;for(let e=0;e<i;e++)if("1"===r[e][0]){const t=r[e].split(" ");if(2!=t.length||""==t[1])return null;if(!Number.isInteger(parseFloat(t[1])))return null;n(t[1])}else{if("2"!==r[e][0])return null;{const t=r[e].split(" ");if(3!=t.length||""==t[2])return null;if(!Number.isInteger(parseFloat(t[1])))return null;if(!Number.isInteger(parseFloat(t[2])))return null;const[n,i]=t.splice(1,2);l(n,i)}}return t};class IOContainer extends React.Component{constructor(e){super(e)}handle_input(){let e=document.getElementById("stdin"),t=document.getElementById("stdout");const n=e.value;if(!n)return t.value=null,e.style.borderColor="#fff",e.style.height=e.style.minHeight,void(t.style.height=e.style.height);e.style.height="auto",e.style.height=e.scrollHeight+"px",t.style.height=e.style.height;let l=solve(n);l?(t.value=l.join(" "),e.style.borderColor="#55ff4f"):(t.value="invalid input",e.style.borderColor="#ff4f4f")}render(){return React.createElement("div",{id:"io-container"},React.createElement("textarea",{id:"stdin",placeholder:"input here",onChange:this.handle_input}),React.createElement("textarea",{id:"stdout",placeholder:"output here",readOnly:!0}))}}ReactDOM.render(React.createElement(IOContainer),document.getElementById("main-container"));