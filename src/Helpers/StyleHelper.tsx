export enum Colors {
    Brand = "#deb1b1"
    , BrandSecondary = "#3DABAE"
    , Success = "green"
    , Warning = "yellow"
    , Error = "red"
}

export enum FontSizes {
    Header = 1
    , HeaderSecondary = 2
    , Paragraph = 3
    , Sub = 4
}

export class StyleHelper {
    static baseTextStyle = {
        margin: 0
        , padding: 0
    }
    static header(){
        return {
            fontFamily: "'Abril Fatface', -apple-system, BlinkMacSystemFont"
            , fontSize: "3rem"
            , lineHeight: "150%"
            , color: Colors.Brand
            , ...this.baseTextStyle
        }
    }
    static headerSecondary(){
        return {
            fontFamily: "'Abril Fatface', -apple-system, BlinkMacSystemFont"
            , fontSize: "1.5rem"
            , lineHeight: "150%"
            , color: Colors.BrandSecondary
            , ...this.baseTextStyle
        }
    }
    static paragraph(){
        return{
            fontSize: "1rem"
            , lineHeight: "150%"
        }
    }
}