import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '5co5ooqr',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    appId: 'g3qxv59xckjk3dk6bjo71za3',
    autoUpdates: true,
  }
})
