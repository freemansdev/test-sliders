class Feature {
  constructor(id, text, feature) {
    this.id = id
    this.text = text
    this.feature = feature
  }
}

class FeatureList {
  constructor() {
    this.items = []
    this.add(1, 'Inline videos', 'check')
    this.add(2, 'Slide show play functionality', 'check')
    this.add(3, 'Inline advertising (Google DFP)', 'check')
    this.add(4, 'Inline html content', 'check')
    this.add(5, 'Nice to have: Mobile pinch zoom support', 'check')
  }

  add(id, text, feature) {
    if (this.items.filter(e => e.id === id).length === 0) {
      this.items.push(new Feature(id, text, feature))
      return true
    }
    return false
  }

  get(_id) {
    return this.items.find( ({ id }) => id === _id )
  }
}

export {FeatureList}
