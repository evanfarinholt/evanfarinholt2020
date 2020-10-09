export enum Colors {
    White = "#ffffff"
    , MintGreen = "#88EAB5"
    , ElectricBlue = "#0FA3F5"
    , SunsetOrange = "#FFBA7B"
    , DkGray = "#2E2E2E"
    , MdGray = "#494949"
}

class Template {
    static pageWrapper(){
        return {
            background: `linear-gradient(258.8deg, ${Colors.DkGray} 23.68%, ${Colors.MdGray} 106.16%)`
            , height: "100vh"
        }
    }
}

class Text {
    static baseTextStyle(){
        return {
            margin: 0
            , padding: 0
            , fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont"
        }
    }

    static header(){
        return {
            fontSize: "3rem"
            , fontWeight: 900
            , lineHeight: "1.5"
            , letterSpacing: "-.2rem"
            , color: Colors.White
            , ...this.baseTextStyle
        }
    }
}

export default {
    Template
    , Text
    , Colors
}