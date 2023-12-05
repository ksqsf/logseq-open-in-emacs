<template>
  <div
    class="container-wrap"
    v-bind:class="{ lspdark: opts.isDark }"
    @click="_onClickOutside"
  >
    <div
      class="container-inner shadow-lg"
      v-if="ready"
      :style="{ left: left + 'px', top: top + 'px' }"
    >
      <div class="_opener" v-if="currentPage" @click="_onClickOpenCurrentPage">
        Edit current page
      </div>
      <div class="_opener" @click="_onClickOpenConfig">Edit config.edn</div>
      <div class="_opener" @click="_onClickOpenCSS">Edit custom.css</div>
      <div class="_opener" @click="_onClickOpenCurrentGraph">
        Open graph folder
      </div>
    </div>
  </div>
</template>

<script>
function generateUrl(path) {
    let url = `org-protocol://find-file/?path=` + encodeURIComponent(path);
    // console.log(url);
    return url;
}

export async function openConfig(name) {
    const graph = await logseq.App.getCurrentGraph();
    window.open(
        generateUrl(graph.path + "/logseq/" + name)
    );
}

export async function openGraph() {
    const graph = await logseq.App.getCurrentGraph();
    window.open(generateUrl(graph.path));
}

async function getAnsetorPageOfCurrentBlock() {
    const block = await logseq.Editor.getCurrentBlock();
    return block?.page;
}

async function findFile(fileId) {
    const matches = await logseq.DB.datascriptQuery(
        `[:find ?file
                :where
                [?b :file/path ?file]
                [(== ?b ${fileId})]
            ]`
    );
    
    if (matches && matches.length > 0) {
        const file = matches[0][0];
        if (file.startsWith("/") || file.match(/[A-Z]:(\\|\/)/)) {
            // file is an absolute path; for compatibility with older versions
            return file;
        } else {
            // file is a relative path; since logseq v0.9.1
            const graph = await logseq.App.getCurrentGraph();
            return graph.path + "/" + file;
        }
        return file;
    } else {
        return null;
    }
}

export async function openPageInEmacs() {
    const currentPage = await logseq.Editor.getCurrentPage();
    if (currentPage && currentPage.file) {
        const fileId = currentPage.file.id;
        const file = await findFile(fileId);
        
        if (file) {
            window.open(generateUrl(file));
            return;
        }
    }
    
    const ansetor = await getAnsetorPageOfCurrentBlock();
    if (ansetor) {
        const page = await logseq.Editor.getPage(ansetor.id);
        if (page && page.file) {
            const fileId = page.file.id;
            const file = await findFile(fileId);
            if (file) {
                window.open(generateUrl(file));
                return;
            }
        }
    }
}

export default {
    name: "App",
    
    data() {
        return {
            ready: false,
            left: 0,
            top: 0,
            currentPage: false,
            opts: {
                isDark: false,
            },
        };
    },
    
    mounted() {
        logseq.App.getUserConfigs().then(
            (c) => (this.opts.isDark = c.preferredThemeMode === "dark")
        );
        
        logseq.App.onThemeModeChanged(({ mode }) => {
            this.opts.isDark = mode === "dark";
        });
        
        logseq.once("ui:visible:changed", ({ visible }) => {
            visible && (this.ready = true);
        });
        
        const checkCurrentPage = async () => {
            const currentPage = await logseq.Editor.getCurrentPage();
            
            if (currentPage && currentPage.file) {
                this.currentPage = true;
            } else {
                const ansestor = await getAnsetorPageOfCurrentBlock();
                if (ansestor) {
                    this.currentPage = true;
                } else {
                    this.currentPage = false;
                }
            }
        };
        
        logseq.on("ui:visible:changed", ({ visible }) => {
            if (visible) {
                const el = top.document.querySelector(`a#open-in-emacs-anchor`);
                const rect = el.getBoundingClientRect();
                this.left = rect.left - 50;
                this.top = rect.top + 30;
                checkCurrentPage();
            }
        });
        
        logseq.App.onRouteChanged(({ path }) => {
      checkCurrentPage();
    });

    checkCurrentPage();
  },

  methods: {
    _onClickOutside({ target }) {
      const inner = target.closest(".container-inner");

      !inner && logseq.hideMainUI();
    },
    _onClickOpenCurrentPage() {
      openPageInEmacs();
    },
    _onClickOpenCurrentGraph() {
      openGraph();
    },
    _onClickOpenConfig() {
      openConfig("config.edn");
    },
    _onClickOpenCSS() {
      openConfig("custom.css");
    },
  },
};
</script>
