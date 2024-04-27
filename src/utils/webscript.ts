/**
 * @Project react-native-social-embed
 * @File webscript.ts
 * @Path src/utils
 * @Author BRICE ZELE
 * @Date 18/03/2024
 */
import { fullWidth } from './platform'

export const FACEBOOK_EMBED_INJECTED_SCRIPT = `
  (function() {

      function cssStringToJson(cssString) {
        const declarations = cssString.split(";");
        const styles = {};
        declarations.forEach(declaration => {
          const parts = declaration.trim().split(":");
          if (parts.length === 2) {
            const property = parts[0].trim();
            styles[property] = parts[1].trim();
          }
        });
        return styles;
      }

      function jsonToCssString(stylesJson) {
        let cssString = "";
        for (const property in stylesJson) {
          if (stylesJson.hasOwnProperty(property)) {
            cssString += '' + property + ':' + stylesJson[property] + ';';
          }
        }
        cssString = cssString.trim();
        return cssString;
      }

      function facebookCssEmbed(styles) {
        const cssJson = cssStringToJson(styles);
        const width = parseInt(cssJson.width, 10);
        const height = parseInt(cssJson.height, 10);
        const updateHeight = (height * ${fullWidth}) / width;
        }, 5000);
        const updateCssJson = {
          ...cssJson,
          width: '${fullWidth}px',
          height: updateHeight + 'px'
        };
        return jsonToCssString(updateCssJson);
      }


      function iFrameLoaded() {
          const intervalID = setInterval(() => {
            var iframe = document.querySelector('iframe');
            if (iframe.readyState === 'complete') {
              iframe.style = facebookCssEmbed(iframe.attributes.style.textContent);
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
        try {
          checkIfIframeExist(100, iFrameLoaded);
        } catch(error) {

        }

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
