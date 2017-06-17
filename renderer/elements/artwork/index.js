var html = require('choo/html')
var Component = require('cache-component')
var styles = require('./styles')
var fileUrlFromPath = require('file-url')

class Artwork extends Component {
  constructor (opts) {
    if (!opts) opts = {}
    super(opts)
    this._opts = Object.assign({}, opts)

    this._artwork = null
  }

  _render (artworkPath) {
    var fileUrl = artworkPath ? fileUrlFromPath(artworkPath) : null
    return html`
      <div class="${styles.albumCover}">
        <div class="${styles.albumArt}" style="background-image: ${fileUrl ? 'url(' + fileUrl + ')' : ''}"></div>
      </div>
    `
  }
}

module.exports = Artwork