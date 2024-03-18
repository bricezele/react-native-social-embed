/**
 * @Project react-native-social-embed
 * @File webscript.ts
 * @Path src/utils
 * @Author BRICE ZELE
 * @Date 18/03/2024
 */
/*import { Dimensions } from 'react-native'

const height = Dimensions.get('screen').height
// We need to use window width instead of the screen width
// because the screen width is not updated on foldable devices
// when the screen is folded/unfolded
// (https://stackoverflow.com/questions/65485878/react-native-samsung-one-ui-3-0-dimensions-screen-width-not-returning-correct-va)

const width = Dimensions.get('window').width
function cssStringToJson(cssString: string): { [key: string]: string } {
    const declarations: string[] = cssString.split(';')
    const styles: { [key: string]: string } = {}
    declarations.forEach((declaration) => {
        const parts: string[] = declaration.trim().split(':')

        if (parts.length === 2) {
            const property: string = parts[0]!.trim()
            styles[property] = parts[1]!.trim()
        }
    })

    return styles
}

function jsonToCssString(stylesJson: { [key: string]: string }): string {
    let cssString: string = ''

    for (const property in stylesJson) {
        if (stylesJson.hasOwnProperty(property)) {
            cssString += `${property}: ${stylesJson[property]}; `
        }
    }

    cssString = cssString.trim()

    return cssString
}*/

export const FACEBOOK_EMBED_INJECTED_SCRIPT = `
  (function() {

      function iFrameLoaded() {
          const intervalID = setInterval(() => {
            var iframe = document.querySelector('iframe');
            if (iframe.readyState === 'complete') {
              iframe.style =
            }
          }, 100);
      }

      function checkIfIframeExist(interval, callback) {
        const intervalID = setInterval(() => {
          var iframe = document.querySelector('iframe');
          if (iframe) {
            clearInterval(intervalID);
            callback();
          }
        }, interval);
      }

      function onLoad() {
        checkIfIframeExist(100, iFrameLoaded);
      }


      function main() {
        if(document.readyState === 'ready' || document.readyState === 'complete') {
          onLoad();
        } else {
          document.onreadystatechange = function () {
            if (document.readyState == "complete") {
              onLoad();
            }
          }
        }
      }

      main();
  })()`
