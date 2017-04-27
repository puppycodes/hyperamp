var css = require('csjs-inject')

module.exports = css`
  .toolbar {
    -webkit-app-region: drag;
    border-bottom: var(--border);
    height: 40px;
    padding: 0 .5em 0 6.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .leftCluster, .rightCluster {
    display: flex;
    align-items: center;
  }
  .leftCluster { flex: 1 }
  .rightCluster { margin-left: auto }
`
