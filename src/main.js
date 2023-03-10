import '@logseq/libs'
import { createApp } from 'vue'
import App from './App.vue'
import { openPageInEmacs, openConfig } from './App.vue'
import './index.css'

const settings = [
  {
    key: "KeyboardShortcut_Page",
    title: "Keyboard shortcut to edit the current page in Emacs",
    description: "The keyboard shortcut to open the current page in Emacs (default: mod+o).",
    type: "string",
    default: "mod+o"
  },
  // {
  //   key: "KeyboardShortcut_CustomCSS",
  //   title: "Keyboard shortcut to edit custom.css in Emacs",
  //   description: "The keyboard shortcut to edit custom.css in Emacs (default: NA).  NA means disabled.",
  //   type: "string",
  //   default: "NA"
  // },
  // {
  //   key: "KeyboardShortcut_ConfigEDN",
  //   title: "Keyboard shortcut to edit config.edn in Emacs",
  //   description: "The keyboard shortcut to edit config.edn in Emacs (default: NA).  NA means disabled.",
  //   type: "string",
  //   default: "NA"
  // }
]
logseq.useSettingsSchema(settings);

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
  // console.log(key);

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
      <svg height="16" viewBox="0 0 128 128" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="128" y1="128" y2="0"><stop offset="0" stop-color="#333"/><stop offset="1" stop-color="#5d5d5d"/></linearGradient><path d="m63.972565 8.3901679c-30.140964 0-54.5541145 24.7089451-54.5541145 55.1578311 0 30.448887 24.4131505 55.102951 54.5541145 55.102951s54.608985-24.654064 54.608985-55.102951c0-30.448886-24.468021-55.1578311-54.608985-55.1578311zm19.867796 13.5013191c1.014299-.01083 1.966738-.0246 2.74417 0 6.604463.209047 12.580861 5.008232 12.623187 10.976685.211646 5.883796-3.941786 8.651139-9.275298 8.397161 0 0-.700779.140984-4.445556-.603717-7.449984-1.481531-15.815596-2.234447-21.953366-1.811152-1.904825.12699-5.502346 1.226745-4.994391 3.512538.376537 2.348128 3.863462 4.98351 6.037174 6.695775 2.478451 1.952314 14.616685 11.117779 21.075233 16.245491 0 0-22.494988.285375-28.539376 1.756271-11.938113 2.635748-14.445821 8.005408-12.348767 10.5925 2.211917 2.581366 6.643942 6.154133 21.459414 9.879013 13.397881 3.181806 20.295012 4.181133 25.630554 7.903212 2.086964 1.455865 1.30642 2.994517 1.26232 3.457656-1.692836 1.94241-4.72957 2.91451-10.098549 3.67719-5.131208.72889-14.434338.71349-14.434338.71349-7.632519.0299-17.580721-1.10071-20.197096-1.42697-6.460585-.80565-11.305983-2.250225-11.305983-2.250225.08979 0 18.027856-.06993 24.971952-.548836 2.729584-.188248 12.69723-.599426 12.787835-1.591619.06435-.704728-1.192755-1.229496-9.659481-2.579521-14.485054-1.778348-18.92415-4.28831-27.771006-9.49483-14.978436-8.815059-16.574312-18.231914-7.134845-23.819402 8.211917-4.317604 21.175982-6.859464 37.430489-2.41487 0 0-5.25745-2.909175-6.970195-4.226023-4.552023-3.499841-11.713018-8.458317-15.861304-15.696656-.931249-1.947154-3.281512-5.247968-1.207436-7.958096 3.174711-4.148285 10.455207-2.596421 20.910579-.987902 0 0 10.941583 1.26817 16.300375 1.536735 4.922253.246686 6.422808-.980337 5.872526-2.25022-.931777-2.150256-3.870803-3.122882-21.733832-6.805543 0 0 11.724923-.802192 18.825011-.878135z" fill="url(#a)"/></svg>
      </a>
    `,
  })

  // create command palette
  logseq.App.registerCommandPalette({
    key: `open-in-emacs-page`,
    label: "Edit this page in Emacs",
    keybinding: {
      binding: logseq.settings.KeyboardShortcut_Page,
      mode: "global",
    }
  }, async () => {
    await openPageInEmacs();
  });

  logseq.App.registerCommandPalette({
    key: `open-in-emacs-custom-css`,
    label: "Edit custom.css in Emacs",
    // keybinding: {
    //   binding: logseq.settings.KeyboardShortcut_CustomCSS,
    //   mode: "global",
    // }
  }, async () => {
    await openConfig("custom.css");
  });

  logseq.App.registerCommandPalette({
    key: `open-in-emacs-config-edn`,
    label: "Edit config.edn in Emacs",
    // keybinding: {
    //   binding: logseq.settings.KeyboardShortcut_ConfigEDN,
    //   mode: "global",
    // }
  }, async () => {
    await openConfig("config.edn");
  });

  // main UI
  createApp(App).mount('#app')
}

// bootstrap
logseq.ready(createModel()).then(main)
