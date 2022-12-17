import '@logseq/libs'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

/**
 * user model
 */
function createModel() {
  return {
    openEmacsPicker() {
      logseq.showMainUI()
    },
  }
}

/**
 * app entry
 */
function main() {
  logseq.setMainUIInlineStyle({
    position: 'fixed',
    zIndex: 11,
  })

  const key = logseq.baseInfo.id
  console.log(key);

  logseq.provideStyle(`
  div[data-injected-ui=open-in-emacs-${key}] {
    display: flex;
    align-items: center;
    font-weight: 500;
    position: relative;
    top: 0px;
    opacity: 0.7;
  }

  div[data-injected-ui=logseq-open-in-emacs--${key}]:hover a {
    opacity: 1;
  }
  
  div[data-injected-ui=logseq-open-in-emacs--${key}] a.button {
    padding: 2px 6px 0 6px;
  }

  div[data-injected-ui=logseq-open-in-emacs--${key}] iconfont {
    font-size: 18px;
  }
  `)

  // external btns
  logseq.App.registerUIItem('toolbar', {
    key: 'logseq-open-in-emacs',
    template: `
      <a id="open-in-emacs-anchor" class="button" data-on-click="openEmacsPicker" style="padding-bottom: 0px;">
      <svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xml:space="preserve"
   id="svg4768"
   viewBox="0.171 0.201 512 512"
   height="16"
   width="16"
   version="1.0"><metadata
     id="metadata70"><rdf:RDF><cc:Work
         rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><!-- Gnu Emacs Icon
   Copyright (C) 2008-2017 Free Software Foundation, Inc.

   Author: Nicolas Petton <nicolas@petton.fr>

   This file is part of GNU Emacs.

   GNU Emacs is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation; either version 3 of the License, or
   (at your option) any later version.

   GNU Emacs is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.

   You should have received a copy of the GNU General Public License
   along with GNU Emacs.  If not, see <http://www.gnu.org/licenses/>.

--><!-- Created with Inkscape (http://www.inkscape.org/) --><defs
     id="defs4770"><linearGradient
       id="linearGradient4292"><stop
         id="stop4294"
         offset="0"
         style="stop-color:#411f5d;stop-opacity:1" /><stop
         id="stop4296"
         offset="1"
         style="stop-color:#5b2a85;stop-opacity:1" /></linearGradient><linearGradient
       id="linearGradient4284"><stop
         offset="0"
         style="stop-color:#8381c5;stop-opacity:1"
         id="stop4286" /><stop
         id="stop4290"
         style="stop-color:#7e55b3;stop-opacity:0.99607843"
         offset="0.56639391" /><stop
         offset="1"
         style="stop-color:#a52ecb;stop-opacity:0.99215686"
         id="stop4288" /></linearGradient><linearGradient
       id="linearGradient4898"><stop
         id="stop4278"
         style="stop-color:#bab8db;stop-opacity:1"
         offset="0" /><stop
         id="stop4280"
         style="stop-color:#5955a9;stop-opacity:0.99159664"
         offset="1" /></linearGradient><linearGradient
       id="linearGradient3294"><stop
         offset="0"
         style="stop-color:#6376e6;stop-opacity:1"
         id="stop3296" /><stop
         offset="0.50094414"
         style="stop-color:#222989;stop-opacity:1"
         id="stop3302" /><stop
         offset="1"
         style="stop-color:#00003d;stop-opacity:1"
         id="stop3298" /></linearGradient><linearGradient
       id="linearGradient3284"><stop
         offset="0"
         style="stop-color:#000000;stop-opacity:1"
         id="stop3286" /><stop
         offset="0.84845906"
         style="stop-color:#000000;stop-opacity:0.49803922"
         id="stop3292" /><stop
         offset="1"
         style="stop-color:#000000;stop-opacity:0"
         id="stop3288" /></linearGradient><linearGradient
       id="linearGradient3274"><stop
         offset="0"
         style="stop-color:#000000;stop-opacity:1"
         id="stop3276" /><stop
         offset="1"
         style="stop-color:#000000;stop-opacity:0"
         id="stop3278" /></linearGradient><linearGradient
       id="linearGradient3262"><stop
         offset="0"
         style="stop-color:#000000;stop-opacity:1"
         id="stop3264" /><stop
         offset="1"
         style="stop-color:#000000;stop-opacity:0"
         id="stop3266" /></linearGradient><linearGradient
       id="linearGradient3242"><stop
         offset="0"
         style="stop-color:#282828;stop-opacity:1"
         id="stop3244" /><stop
         offset="0.39253417"
         style="stop-color:#808080;stop-opacity:1"
         id="stop3252" /><stop
         offset="1"
         style="stop-color:#d9d9d9;stop-opacity:1"
         id="stop3246" /></linearGradient><linearGradient
       id="linearGradient3202"><stop
         offset="0"
         style="stop-color:#2b2b2b;stop-opacity:1"
         id="stop3204" /><stop
         offset="0.5"
         style="stop-color:#828383;stop-opacity:1"
         id="stop3250" /><stop
         offset="1"
         style="stop-color:#dadbdb;stop-opacity:1"
         id="stop3206" /></linearGradient><linearGradient
       id="linearGradient4966"><stop
         offset="0"
         style="stop-color:#b6b3d8;stop-opacity:1"
         id="stop4968" /><stop
         offset="1"
         style="stop-color:#b6b3d8;stop-opacity:0"
         id="stop4970" /></linearGradient><linearGradient
       id="linearGradient4938"><stop
         offset="0"
         style="stop-color:#000000;stop-opacity:1"
         id="stop4940" /><stop
         offset="1"
         style="stop-color:#000000;stop-opacity:0"
         id="stop4942" /></linearGradient><linearGradient
       id="linearGradient4282"><stop
         offset="0"
         style="stop-color:#bab8db;stop-opacity:1"
         id="stop4900" /><stop
         offset="1"
         style="stop-color:#5955a9;stop-opacity:0.99159664"
         id="stop4902" /></linearGradient><linearGradient
       id="linearGradient4876"><stop
         offset="0"
         style="stop-color:#d3d2e8;stop-opacity:1"
         id="stop4878" /><stop
         offset="1"
         style="stop-color:#5955a9;stop-opacity:0.99159664"
         id="stop4880" /></linearGradient><radialGradient
       gradientTransform="matrix(0.6817439,0,0,0.5905355,-3.8523706,-28.935273)"
       gradientUnits="userSpaceOnUse"
       xlink:href="#linearGradient4898"
       id="radialGradient4892"
       fy="-108.96888"
       fx="20.951529"
       r="266.76535"
       cy="-108.96888"
       cx="20.951529" /><radialGradient
       gradientTransform="matrix(1,0,0,0.1854103,0,383.88493)"
       gradientUnits="userSpaceOnUse"
       xlink:href="#linearGradient4938"
       id="radialGradient4944"
       fy="471.26172"
       fx="233.8876"
       r="170.49393"
       cy="471.26172"
       cx="233.8876" /><radialGradient
       gradientTransform="matrix(1,0,0,0.9121621,0,32.654948)"
       gradientUnits="userSpaceOnUse"
       xlink:href="#linearGradient4966"
       id="radialGradient4972"
       fy="371.76376"
       fx="299.70135"
       r="76.696358"
       cy="371.76376"
       cx="299.70135" /><radialGradient
       gradientTransform="matrix(0.414705,0.3300575,-0.5059004,0.6356454,346.95314,49.479585)"
       gradientUnits="userSpaceOnUse"
       xlink:href="#linearGradient3202"
       id="radialGradient3210"
       fy="390.45248"
       fx="289.44067"
       r="17.67668"
       cy="390.45248"
       cx="289.44067" /><radialGradient
       gradientTransform="matrix(0.414705,0.3300575,-0.5059004,0.6356454,448.41009,-65.398074)"
       gradientUnits="userSpaceOnUse"
       xlink:href="#linearGradient3202"
       id="radialGradient3238"
       fy="382.14804"
       fx="283.50717"
       r="17.67668"
       cy="382.14804"
       cx="283.50717" /><radialGradient
       gradientTransform="matrix(-6.5565014e-2,-5.9721765e-2,1.6871024,-1.8521705,171.90774,540.51473)"
       gradientUnits="userSpaceOnUse"
       xlink:href="#linearGradient3242"
       id="radialGradient3248"
       fy="181.18982"
       fx="418.45551"
       r="63.068935"
       cy="181.18982"
       cx="418.45551" /><radialGradient
       gradientTransform="matrix(0.4055116,-3.3440123e-2,0.1034174,4.3988695,177.23251,-1191.6649)"
       gradientUnits="userSpaceOnUse"
       xlink:href="#linearGradient3262"
       id="radialGradient3268"
       fy="357.33591"
       fx="354.51709"
       r="33.712105"
       cy="357.33591"
       cx="354.51709" /><radialGradient
       gradientTransform="matrix(-0.1339874,-0.1146812,0.3079048,-0.3597394,444.23592,395.03849)"
       gradientUnits="userSpaceOnUse"
       xlink:href="#linearGradient3274"
       id="radialGradient3280"
       fy="223.55537"
       fx="510.58469"
       r="132.28336"
       cy="223.55537"
       cx="510.58469" /><radialGradient
       gradientTransform="matrix(-1.2497569,1.3798305,-9.6289463e-2,-7.2974479e-2,674.3826,-70.590682)"
       gradientUnits="userSpaceOnUse"
       xlink:href="#linearGradient3284"
       id="radialGradient3290"
       fy="-158.17821"
       fx="284.4671"
       r="110.2972"
       cy="-158.17821"
       cx="284.4671" /><radialGradient
       gradientTransform="matrix(-0.1008165,-8.0872321e-2,1.0745309,-1.3395252,13.843287,784.79288)"
       gradientUnits="userSpaceOnUse"
       xlink:href="#linearGradient3294"
       id="radialGradient3300"
       fy="356.62274"
       fx="425.51019"
       r="143.34167"
       cy="356.62274"
       cx="425.51019" /><filter
       height="1.088351"
       y="-0.044175496"
       width="1.0892536"
       x="-0.044626798"
       id="filter4350"
       style="color-interpolation-filters:sRGB"><feGaussianBlur
         id="feGaussianBlur4352"
         stdDeviation="8.7848425" /></filter><linearGradient
       y2="300.73987"
       x2="236.61363"
       y1="-161.8512"
       x1="-122.20192"
       spreadMethod="pad"
       gradientTransform="matrix(0.87385837,0,0,0.82818057,246.00762,250.28138)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient4245"
       xlink:href="#linearGradient4284" /><linearGradient
       y2="66.018341"
       x2="173.94518"
       y1="396.6066"
       x1="447.80933"
       gradientTransform="matrix(0.98684959,0,0,0.98684959,3.0344187,2.5250397)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient4247"
       xlink:href="#linearGradient4292" /></defs><rect
     style="fill:none;display:none"
     id="rect4772"
     y="0.20100001"
     x="0.171"
     height="512"
     width="512" /><g
     style="display:none"
     id="g4788"><g
       style="display:inline"
       id="g4790" /></g><g
     style="display:none"
     id="g4806"><g
       style="display:inline"
       id="g4808"><path
         style="fill:#050505;display:none"
         id="path4810"
         d="M 349.098,256.651 C 348.833,256.397 386.735,284.256 388.519,281.663 C 394.881,272.411 470.565,188.526 473.303,165.427 C 473.545,163.424 472.787,161.331 472.787,161.331 C 472.787,161.331 471.597,161.187 466.462,157.017 C 463.77,154.825 460.979,152.436 460.979,152.436 C 444.925,153.434 403.094,193.995 349.917,256.004" /></g></g><path
     style="opacity:0.40500004;fill:#211f46;fill-opacity:0.99607843;stroke:#0a0b1b;stroke-width:8.53333378;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter4350)"
     id="path4233"
     d="m 491.66937,257.75916 c 0,131.79436 -105.76,238.63481 -236.22155,238.63481 -130.46155,0 -236.221539,-106.84045 -236.221539,-238.63481 0,-131.79437 105.759989,-238.634808 236.221539,-238.634808 130.46155,0 236.22155,106.840438 236.22155,238.634808 z"
     transform="matrix(0.98684957,0,0,0.98684957,3.0344041,2.5250397)" /><path
     d="m 488.23812,256.89456 c 0,130.06121 -104.3692,235.49665 -233.1151,235.49665 -128.7459,0 -233.115201,-105.43544 -233.115201,-235.49665 0,-130.06123 104.369301,-235.49666 233.115201,-235.49666 128.7459,0 233.1151,105.43543 233.1151,235.49666 z"
     id="path4235"
     style="opacity:1;fill:url(#linearGradient4245);fill-opacity:1;stroke:url(#linearGradient4247);stroke-width:13.33816814;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /><path
     d="m 175.0003,422.31057 c 0,0 19.7385,1.39634 45.1312,-0.84159 10.2834,-0.9063 49.3267,-4.74128 78.5169,-11.14289 0,0 35.5899,-7.61669 54.6301,-14.63335 19.9225,-7.34185 30.7636,-13.57304 35.6433,-22.40243 -0.2128,-1.80907 1.5024,-8.22438 -7.685,-12.07788 -23.4887,-9.85199 -50.73,-8.06998 -104.6338,-9.21285 -59.7772,-2.05391 -79.6627,-12.05971 -90.2556,-20.11838 -10.1579,-8.17519 -5.05,-30.79254 38.4742,-50.71499 21.9244,-10.60898 107.8705,-30.18698 107.8705,-30.18698 -28.9451,-14.30725 -82.9186,-39.45893 -94.0134,-44.89023 -9.7308,-4.76348 -25.303,-11.93595 -28.6785,-20.61368 -3.8271,-8.33089 9.0383,-15.50726 16.2248,-17.56236 23.1448,-6.67602 55.8182,-10.82538 85.5548,-11.29122 14.9472,-0.23417 17.3734,-1.19586 17.3734,-1.19586 20.6243,-3.42116 34.2014,-17.53175 28.5446,-39.87876 -5.0783,-22.81046 -31.8617,-36.21365 -57.3138,-31.57361 -23.9682,4.36956 -81.7378,21.15007 -81.7378,21.15007 71.4075,-0.61803 83.3592,0.57378 88.697,8.03676 3.1523,4.40742 -1.4324,10.45068 -20.4765,13.56099 -20.733,3.38616 -63.8312,7.46399 -63.8312,7.46399 -41.3449,2.4554 -70.4682,2.61974 -79.203,21.11314 -5.7065,12.08196 6.0854,22.7633 11.2538,29.4493 21.8407,24.28905 53.3882,37.38879 73.6948,47.03553 7.6405,3.62963 30.0586,10.48407 30.0586,10.48407 -65.8782,-3.62335 -113.4003,16.6055 -141.2764,39.89622 -31.5288,29.16261 -17.581403,63.92354 47.0124,85.3268 38.1517,12.6416 57.0725,18.58695 113.9815,13.46232 33.52,-1.80673 38.8041,-0.73155 39.1383,2.01892 0.4705,3.87242 -37.2311,13.49165 -47.524,16.4606 -26.1853,7.55306 -94.8276,22.80438 -95.1712,22.87835 z"
     id="path4237"
     style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" /></svg>
      </a>
    `,
  })

  // main UI
  createApp(App).mount('#app')
}

// bootstrap
logseq.ready(createModel()).then(main)
