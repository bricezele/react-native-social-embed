import { facebookRegex } from '../data/validator/facebookRegex'

export const generateFacebookEmbedHtml = (url: string): string => {
    if (url.match(facebookRegex)) {
        let code = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta
              name="viewport"
              content="width=device-width"
            >
            <style>
              body {
                margin: 0;
              }
            </style>
          </head>
          <body>
          <script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
          <div class="fb-post"
              data-href="${url}"
              data-width="500"></div>
          </body>
        </html>
`
        return code
    } else {
        throw new Error('Invalid Facebook URL provided')
    }
}
