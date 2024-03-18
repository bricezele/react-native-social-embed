/**
 * @Project react-native-social-embed
 * @File convert.ts
 * @Path src/utils
 * @Author BRICE ZELE
 * @Date 18/03/2024
 */
import { fullWidth } from './platform'

export function cssStringToJson(cssString: string): { [key: string]: string } {
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

export function jsonToCssString(stylesJson: { [key: string]: string }): string {
    let cssString: string = ''

    for (const property in stylesJson) {
        if (stylesJson.hasOwnProperty(property)) {
            cssString += `${property}: ${stylesJson[property]}; `
        }
    }

    cssString = cssString.trim()

    return cssString
}

export function facebookCssEmbed(styles: string): string {
    const cssJson = cssStringToJson(styles)
    const width = parseInt(cssJson.width as string, 10)
    const height = parseInt(cssJson.height as string, 10)

    const updateHeight = (height * fullWidth) / width

    const updateCssJson = {
        ...cssJson,
        width: `${fullWidth}px`,
        height: `${updateHeight}px`,
    }

    return jsonToCssString(updateCssJson)
}
