var l=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var u=l((f,n)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();n.exports={content:["*"],theme:{extend:{colors:{rgba:"rgba(255,255,255,0.3)"},maxWidth:{sec_width:"550px"},screens:{mobile:"320px",md:"560px"}}},plugins:[require("tailwindcss-gradients")]}});export default u();