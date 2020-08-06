import CoreAssistant from '@sketch-hq/sketch-core-assistant'
import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'

const assistant: AssistantPackage = [
  CoreAssistant,
  async () => {
    return {
      name: 'stephs-assistant',
      rules: [],
      config: {
        rules: {
          '@sketch-hq/sketch-core-assistant/name-pattern-artboards': {
            active: true,
            forbidden: [],
            allowed: ['^(\\d+\\.?)+ .*'],
            ruleTitle: 'Artboard names should start with numbers followed by a space',
          },
        },
      },
    }
  },
]

export default assistant
