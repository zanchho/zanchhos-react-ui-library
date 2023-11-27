class UIConfig {
  constructor(primaryColor = "violet", secondaryColor = "#12131b") {
    this.primaryColor = primaryColor
    this.secondaryColor = secondaryColor
  }

  setPrimaryColor(color) {
    this.primaryColor = color
  }

  getPrimaryColor() {
    return this.primaryColor
  }

  setSecondaryColor(color) {
    this.secondaryColor = color
  }

  getSecondaryColor() {
    return this.secondaryColor
  }
}

const __instance = new UIConfig()

export default __instance
