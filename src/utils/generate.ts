import { facebookRegex } from '../data/validator/facebookRegex'

export const generateEmbedHtml = (body: string): string => {
    return `
        <!DOCTYPE html>
        <html>
          <head>
          <title>Embed</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <style>
              body {
                margin: 0;
                padding: 0;
              }
            </style>
          </head>
          <body>
            ${body}
          </body>
        </html>
`
}

export const generateFacebookEmbedHtml = (url: string): string => {
    if (url.match(facebookRegex)) {
        let body = `
          <script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
          <div class="fb-post"
              data-href="${url}"
              data-width="500"></div>`

        return generateEmbedHtml(body)
    } else {
        throw new Error('Invalid Facebook URL provided')
    }
}
