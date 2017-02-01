class PlugNPray {
  plug (path) {
    require(path)(this);
    return this;
  }
}

module.exports = PlugNPray;

