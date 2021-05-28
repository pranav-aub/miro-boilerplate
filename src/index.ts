import icon from './icon.svg'
// @ts-ignore
const miro = window.miro
console.log("Outside ",miro)
miro.onReady((): void => {
  console.log("Inside OnReady")
  miro.initialize({
    extensionPoints: {
      toolbar: {
        title: 'Miro Plugin Boilerplate',
        toolbarSvgIcon: icon,
        librarySvgIcon: icon,
        async onClick(): Promise<void> {
          // Remember that 'app.html' resolves relative to index.js file. So app.html have to be in the /dist/ folder.
          await miro.board.ui.openLibrary('app.html', {title: 'My React Plugin'})
        },
      },
    },
  })
})
console.log("After OnReady")
